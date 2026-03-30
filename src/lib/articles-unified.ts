import type { Article } from "@/types";
import { articles as hardcodedArticles } from "@/data/articles";
import { loadExternalArticles } from "@/lib/articles-loader";

let _merged: Article[] | null = null;

export function getAllArticles(): Article[] {
  if (_merged) return _merged;

  const external = loadExternalArticles();
  const hardcodedSlugs = new Set(hardcodedArticles.map((a) => a.slug));

  // External articles that don't collide with hardcoded ones
  const uniqueExternal = external.filter((a) => !hardcodedSlugs.has(a.slug));

  // Hardcoded first (editorially curated), then external sorted by date desc
  _merged = [
    ...hardcodedArticles,
    ...uniqueExternal.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    ),
  ];

  return _merged;
}

export function getArticleBySlugUnified(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getAllCategories(): string[] {
  const cats = new Set(getAllArticles().map((a) => a.category));
  return Array.from(cats).sort();
}

/** Get a small curated set of related articles for "more from the journal" sections */
export function getRelatedArticles(
  currentSlug: string,
  category: string,
  limit = 5
): Article[] {
  const all = getAllArticles();
  // Prefer same category, then fall back to any
  const sameCategory = all.filter(
    (a) => a.slug !== currentSlug && a.category === category
  );
  const others = all.filter(
    (a) => a.slug !== currentSlug && a.category !== category
  );
  return [...sameCategory, ...others].slice(0, limit);
}

/** Featured articles for the homepage — curated editorial picks */
export function getFeaturedArticles(limit = 6): Article[] {
  const all = getAllArticles();
  // Prioritize: commercial intent (hardcoded first), then accommodation category
  const priority = all.filter(
    (a) =>
      a.category === "Accommodation & Stays" ||
      a.category === "Guides" ||
      a.category === "Perspectives" ||
      a.category === "Planning"
  );
  const rest = all.filter(
    (a) =>
      a.category !== "Accommodation & Stays" &&
      a.category !== "Guides" &&
      a.category !== "Perspectives" &&
      a.category !== "Planning"
  );
  return [...priority, ...rest].slice(0, limit);
}
