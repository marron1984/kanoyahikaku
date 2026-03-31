import fs from "fs";
import path from "path";
import type { Article, ArticleSection } from "@/types";

export interface ExternalArticle {
  article_id: number;
  title: string;
  meta_title: string;
  meta_description: string;
  slug: string;
  primary_keyword: string;
  secondary_keywords: string[];
  category: string;
  search_intent: string;
  target_words: number;
  date: string;
  body_markdown: string;
}

const articlesDir = path.join(process.cwd(), "articles");

function parseMarkdownToSections(markdown: string): ArticleSection[] {
  const lines = markdown.split("\n");
  const sections: ArticleSection[] = [];
  let currentHeading: string | undefined;
  let currentContent: string[] = [];
  let skipFirstH1 = true;

  for (const line of lines) {
    // H2 headings become section breaks
    if (line.startsWith("## ")) {
      // Save previous section
      if (currentContent.length > 0) {
        sections.push({
          heading: currentHeading,
          content: currentContent.join("\n").trim(),
        });
      }
      currentHeading = line.replace(/^##\s+/, "");
      currentContent = [];
    } else if (line.startsWith("# ") && skipFirstH1) {
      // Skip the first H1 (it's the title, already in metadata)
      skipFirstH1 = false;
    } else if (line.startsWith("### ")) {
      // Fold H3 into the current section content as bold text
      currentContent.push(`**${line.replace(/^###\s+/, "")}**`);
    } else {
      currentContent.push(line);
    }
  }

  // Don't forget the last section
  if (currentContent.length > 0) {
    sections.push({
      heading: currentHeading,
      content: currentContent.join("\n").trim(),
    });
  }

  return sections;
}

function estimateReadingTime(text: string): string {
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 230));
  return `${minutes} min read`;
}

function externalToArticle(ext: ExternalArticle): Article {
  const sections = parseMarkdownToSections(ext.body_markdown);

  // Only feature Kanoya if the article explicitly mentions it by name
  const mentionsKanoya = ext.body_markdown.toLowerCase().includes("kanoya");

  // Keep sections as-is — no automatic recommendation injection
  const enrichedSections = sections;

  // Extract first paragraph as excerpt
  const firstContent = sections[0]?.content || "";
  const excerpt =
    firstContent
      .split("\n")
      .filter((l) => l.trim().length > 0 && !l.startsWith("*") && !l.startsWith("-"))
      .slice(0, 2)
      .join(" ")
      .substring(0, 280) + (firstContent.length > 280 ? "..." : "");

  return {
    id: `ext-${ext.article_id}`,
    slug: ext.slug,
    title: ext.title,
    subtitle: ext.meta_description.substring(0, 120),
    excerpt,
    heroImage: `/images/journal-${ext.slug}.jpg`,
    publishedAt: ext.date,
    author: "Nara Stays Editorial",
    readingTime: estimateReadingTime(ext.body_markdown),
    category: ext.category,
    tags: [
      ext.primary_keyword,
      ...(ext.secondary_keywords || []).slice(0, 3),
    ],
    sections: enrichedSections,
    featuredStaySlug: mentionsKanoya ? "kanoya" : undefined,
  };
}

let _cachedArticles: Article[] | null = null;

export function loadExternalArticles(): Article[] {
  if (_cachedArticles) return _cachedArticles;

  if (!fs.existsSync(articlesDir)) {
    _cachedArticles = [];
    return _cachedArticles;
  }

  const files = fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".json"))
    .sort();

  const articles: Article[] = [];

  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(articlesDir, file), "utf-8");
      const ext: ExternalArticle = JSON.parse(raw);
      articles.push(externalToArticle(ext));
    } catch {
      // Skip malformed articles
    }
  }

  _cachedArticles = articles;
  return articles;
}

export function getExternalArticleBySlug(slug: string): Article | undefined {
  return loadExternalArticles().find((a) => a.slug === slug);
}

export function getExternalArticlesByCategory(category: string): Article[] {
  return loadExternalArticles().filter((a) => a.category === category);
}

export function getAllArticleCategories(): string[] {
  const cats = new Set(loadExternalArticles().map((a) => a.category));
  return Array.from(cats).sort();
}
