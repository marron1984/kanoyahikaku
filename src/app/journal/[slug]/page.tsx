import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import RecommendationBlock from "@/components/RecommendationBlock";
import CTASection from "@/components/CTASection";
import {
  getAllArticles,
  getArticleBySlugUnified,
  getRelatedArticles,
} from "@/lib/articles-unified";
import { getStayBySlug } from "@/data/stays";
import Link from "next/link";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlugUnified(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlugUnified(slug);
  if (!article) notFound();

  const featuredStay = article.featuredStaySlug
    ? getStayBySlug(article.featuredStaySlug)
    : null;

  const related = getRelatedArticles(article.slug, article.category, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Nara Stays",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Journal", href: "/journal" },
            { label: article.title },
          ]}
        />
      </div>

      {/* Header */}
      <section className="pb-8 sm:pb-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-wider text-gold">
              {article.category}
            </span>
            <span className="text-xs text-gray-warm">
              {article.readingTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="mt-3 text-lg text-charcoal-light">
              {article.subtitle}
            </p>
          )}

          <div className="mt-6 flex items-center gap-4 text-xs text-gray-warm">
            <span>By {article.author}</span>
            <span>&middot;</span>
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="aspect-[16/8] bg-gray-lighter">
          <div className="w-full h-full flex items-center justify-center text-gray-warm">
            {article.title}
          </div>
        </div>
      </div>

      {/* Article Body */}
      <article className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {article.sections.map((section, i) => {
            const recStay = section.recommendationSlug
              ? getStayBySlug(section.recommendationSlug)
              : null;

            return (
              <div key={i} className="mb-10">
                {section.heading && (
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.content.split("\n\n").map((p, j) => (
                  <p
                    key={j}
                    className="text-base leading-relaxed text-charcoal-light mb-4"
                  >
                    {p}
                  </p>
                ))}
                {recStay && <RecommendationBlock stay={recStay} />}
              </div>
            );
          })}

          {/* Inline Kanoya recommendation for articles that feature it */}
          {featuredStay && !article.sections.some((s) => s.recommendationSlug) && (
            <RecommendationBlock stay={featuredStay} />
          )}

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-lighter">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-cream-dark text-gray-warm border border-gray-lighter"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related articles */}
          <div className="mt-8">
            <h3 className="font-serif text-lg text-charcoal mb-4">
              More from the Journal
            </h3>
            <div className="flex flex-col gap-2">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/journal/${a.slug}`}
                  className="text-sm text-charcoal border-b border-charcoal/20 hover:border-charcoal transition-colors inline-block"
                >
                  {a.title}
                </Link>
              ))}
            </div>
            <Link
              href="/journal"
              className="mt-4 inline-block text-sm text-charcoal-light hover:text-charcoal transition-colors"
            >
              View all articles &rarr;
            </Link>
          </div>
        </div>
      </article>

      <CTASection
        title="Find Your Perfect Nara Stay"
        description="Compare the best luxury accommodations in Nara, ranked by our editorial team."
        primaryCta={{ label: "Compare Stays", href: "/nara-luxury-stays" }}
        secondaryCta={{ label: "Explore Kanoya", href: "/stays/kanoya" }}
      />
    </>
  );
}
