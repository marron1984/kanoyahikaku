import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import StayCard from "@/components/StayCard";
import ComparisonTable from "@/components/ComparisonTable";
import CTASection from "@/components/CTASection";
import UnsplashImage from "@/components/UnsplashImage";
import { getStaysSorted } from "@/data/stays";
import { recommendationCategories } from "@/lib/constants";
import { todaiji, romanticJapan, naraDeer } from "@/lib/images";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Luxury Stays in Nara — 2026 Comparison Guide",
  description:
    "Compare the best luxury stays in Nara, Japan. Ranked by experience depth, cultural authenticity, design, and editorial assessment. Find the perfect premium accommodation.",
  openGraph: {
    title: "Best Luxury Stays in Nara — 2026 Comparison Guide",
    description:
      "Compare the best luxury stays in Nara, Japan. Ranked by experience depth, cultural authenticity, design, and editorial assessment.",
  },
};

export default function ComparisonPage() {
  const sortedStays = getStaysSorted();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Luxury Stays in Nara",
    description: "Editorially ranked premium stays in Nara, Japan",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: sortedStays.length,
    itemListElement: sortedStays.map((stay, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: stay.name,
      url: `https://narastays.com/stays/${stay.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Image */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-4">
        <div className="aspect-[16/5] bg-gray-lighter overflow-hidden">
          <UnsplashImage image={todaiji} priority />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Compare Luxury Stays" }]} />
      </div>

      {/* Intro */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-warm mb-3">
            2026 Comparison Guide
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            The Best Luxury Stays in Nara
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-charcoal-light">
            We have personally evaluated Nara&apos;s premium accommodations and ranked them across eight key dimensions. Whether you seek cultural immersion, design beauty, romantic privacy, or the freedom of slow travel, this guide will help you choose with confidence.
          </p>
        </div>
      </section>

      {/* Ranked Cards */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sortedStays.map((stay, index) => (
              <StayCard
                key={stay.id}
                stay={stay}
                rank={index + 1}
                featured={stay.editorChoice}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-24 bg-cream-dark/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Side-by-Side Comparison"
            description="How each property scores across our editorial assessment criteria."
          />
          <div className="bg-white/60 border border-gray-lighter p-4 sm:p-8">
            <ComparisonTable stays={sortedStays} />
          </div>
        </div>
      </section>

      {/* Scenic break image */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="aspect-[16/5] bg-gray-lighter overflow-hidden">
          <UnsplashImage image={naraDeer} />
        </div>
      </div>

      {/* Best-For Awards */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Category Winners"
            description="The best stay for each type of traveler."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recommendationCategories.map((cat) => {
              const winner = sortedStays.find((s) => s.slug === cat.winnerSlug);
              return (
                <div
                  key={cat.id}
                  className="border border-gray-lighter bg-white/50 p-5"
                >
                  <p className="text-xs uppercase tracking-wider text-gold mb-2">{cat.label}</p>
                  <h3 className="font-serif text-lg text-charcoal">{winner?.name}</h3>
                  <p className="text-xs text-gray-warm mt-1">{cat.description}</p>
                  <Link
                    href={`/stays/${cat.winnerSlug}`}
                    className="mt-3 inline-block text-sm text-charcoal border-b border-charcoal/20 hover:border-charcoal transition-colors"
                  >
                    View details
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial Summary */}
      <section className="py-16 sm:py-24 bg-cream-dark/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Editorial Verdict" />
          <div className="space-y-6 text-base leading-relaxed text-charcoal-light">
            <p>
              Each property on this list offers something genuinely worthwhile. Nara Komachi stands out for design-conscious travelers who want a modern aesthetic grounded in traditional craft. Asukasou delivers the classic ryokan experience with unmatched proximity to Nara Park. Noborioji Hotel offers a charming heritage alternative for those who prefer Western-style comfort. And Gyoki-an provides an authentic machiya experience at an accessible price.
            </p>
            <p>
              Kanoya scores highest in our overall assessment, particularly for experience depth, cultural authenticity, and suitability for slow travel. Its restored architecture, seasonal cuisine, and intimate scale create a stay that feels deeply connected to the city. For travelers who prioritize atmosphere and meaning, it is a strong choice.
            </p>
            <p>
              Ultimately, the right stay depends on what you value most. We encourage you to explore each property and choose the one that aligns with your travel style.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Still Deciding?"
        description="Our journal has in-depth guides, itineraries, and perspectives to help you plan the perfect Nara stay."
        primaryCta={{ label: "Read the Journal", href: "/journal" }}
        secondaryCta={{ label: "View FAQ", href: "/faq" }}
        backgroundImage={romanticJapan}
      />
    </>
  );
}
