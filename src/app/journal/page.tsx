import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import UnsplashImage from "@/components/UnsplashImage";
import { getAllArticles, getAllCategories } from "@/lib/articles-unified";
import { naraStreetscape } from "@/lib/images";

export const metadata: Metadata = {
  title: "Journal — Nara Travel Guides & Insights",
  description:
    "In-depth guides, cultural perspectives, and practical advice for travelers planning a meaningful stay in Nara, Japan. 100+ editorial articles.",
  openGraph: {
    title: "Journal — Nara Travel Guides & Insights",
    description:
      "In-depth guides, cultural perspectives, and practical advice for travelers planning a meaningful stay in Nara, Japan.",
  },
};

export default function JournalIndexPage() {
  const allArticles = getAllArticles();
  const categories = getAllCategories();

  // Group articles by category
  const grouped = categories.map((cat) => ({
    category: cat,
    articles: allArticles.filter((a) => a.category === cat),
  }));

  // Sort groups: Accommodation first, then by article count descending
  grouped.sort((a, b) => {
    if (a.category === "Accommodation & Stays") return -1;
    if (b.category === "Accommodation & Stays") return 1;
    return b.articles.length - a.articles.length;
  });

  return (
    <>
      {/* Hero Image */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-4">
        <div className="aspect-[16/5] bg-gray-lighter overflow-hidden">
          <UnsplashImage image={naraStreetscape} priority />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Journal" }]} />
      </div>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Nara Stays Journal"
            title="Guides, Perspectives & Cultural Insights"
            description={`${allArticles.length} editorial articles to help you plan a more meaningful stay in Nara, Japan.`}
          />

          {grouped.map((group) => (
            <div key={group.category} className="mb-16">
              <h2 className="font-serif text-xl sm:text-2xl text-charcoal mb-2">
                {group.category}
              </h2>
              <p className="text-xs text-gray-warm mb-6">
                {group.articles.length}{" "}
                {group.articles.length === 1 ? "article" : "articles"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to Choose Your Nara Stay?"
        description="Compare the best luxury accommodations in Nara, ranked by our editorial team."
        primaryCta={{ label: "Compare Stays", href: "/nara-luxury-stays" }}
        secondaryCta={{ label: "Browse Experiences", href: "/experiences/early-morning-deer-walk" }}
      />
    </>
  );
}
