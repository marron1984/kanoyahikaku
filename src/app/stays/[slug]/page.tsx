import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ScoreBadge from "@/components/ScoreBadge";
import EditorChoiceBadge from "@/components/EditorChoiceBadge";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import UnsplashImage from "@/components/UnsplashImage";
import { stays, getStayBySlug } from "@/data/stays";
import { comparisonMetrics } from "@/lib/constants";
import { stayImages, nightLanternStreet, japaneseGarden, naraDeer, architectureDetail } from "@/lib/images";
import Link from "next/link";

interface StayPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return stays.map((stay) => ({ slug: stay.slug }));
}

export async function generateMetadata({ params }: StayPageProps): Promise<Metadata> {
  const { slug } = await params;
  const stay = getStayBySlug(slug);
  if (!stay) return {};

  return {
    title: `${stay.name} — ${stay.editorChoice ? "Editor's Choice" : "Luxury Stay"} in Nara`,
    description: stay.shortDescription,
    openGraph: {
      title: `${stay.name} — Luxury Stay in Nara, Japan`,
      description: stay.shortDescription,
    },
  };
}

export default async function StayPage({ params }: StayPageProps) {
  const { slug } = await params;
  const stay = getStayBySlug(slug);
  if (!stay) notFound();

  const isKanoya = stay.slug === "kanoya";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: stay.name,
    description: stay.shortDescription,
    priceRange: stay.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nara",
      addressCountry: "JP",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: stay.scores.overall,
      bestRating: 10,
      worstRating: 0,
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
            { label: "Compare Stays", href: "/nara-luxury-stays" },
            { label: stay.name },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Image placeholder */}
          <div className={`relative ${isKanoya ? "aspect-[16/7]" : "aspect-[16/8]"} bg-gray-lighter mb-8 overflow-hidden`}>
            {stayImages[stay.slug] ? (
              <UnsplashImage image={stayImages[stay.slug]} priority />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-warm text-lg">
                {stay.name}
              </div>
            )}
            {stay.editorChoice && (
              <div className="absolute top-6 left-6">
                <EditorChoiceBadge />
              </div>
            )}
          </div>

          <div className="max-w-3xl">
            <div className="flex items-start gap-4">
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
                  {stay.name}
                </h1>
                <p className="text-sm text-gray-warm mt-2">{stay.locationArea} &middot; {stay.priceRange}</p>
              </div>
              <ScoreBadge score={stay.scores.overall} size="lg" />
            </div>

            <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
              {stay.shortDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {stay.bestFor.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 bg-cream-dark text-gray-warm border border-gray-lighter">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Long Description */}
          <div className="prose-custom">
            {stay.longDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-charcoal-light mb-5">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Inline scenery image */}
          <div className="my-10 aspect-[16/8] bg-gray-lighter overflow-hidden">
            <UnsplashImage image={isKanoya ? naraDeer : architectureDetail} />
          </div>

          {/* Kanoya-exclusive sections */}
          {isKanoya && stay.whyStandout && (
            <div className="mt-12">
              <SectionHeading title="Why Kanoya Stands Out" align="left" />
              <p className="text-base leading-relaxed text-charcoal-light">
                {stay.whyStandout}
              </p>
            </div>
          )}

          {isKanoya && stay.experienceNarrative && (
            <div className="mt-12 border-l-2 border-gold/40 pl-6 py-2">
              <p className="text-base leading-relaxed text-charcoal-light italic">
                {stay.experienceNarrative}
              </p>
            </div>
          )}

          {isKanoya && stay.designPhilosophy && (
            <div className="mt-12">
              <SectionHeading title="Design Philosophy" align="left" />
              <p className="text-base leading-relaxed text-charcoal-light">
                {stay.designPhilosophy}
              </p>
            </div>
          )}

          {isKanoya && stay.travelerProfile && (
            <div className="mt-12">
              <SectionHeading title="Who This Stay Is For" align="left" />
              <p className="text-base leading-relaxed text-charcoal-light">
                {stay.travelerProfile}
              </p>
            </div>
          )}

          {isKanoya && stay.suggestedStayScenario && (
            <div className="mt-12">
              <SectionHeading title="A Suggested Stay" align="left" />
              <p className="text-base leading-relaxed text-charcoal-light">
                {stay.suggestedStayScenario}
              </p>
            </div>
          )}

          {/* Scores */}
          <div className="mt-12">
            <SectionHeading title="Our Assessment" align="left" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {comparisonMetrics.map((metric) => (
                <div key={metric.key} className="border border-gray-lighter p-4 text-center">
                  <p className="font-serif text-2xl text-charcoal">
                    {stay.scores[metric.key].toFixed(1)}
                  </p>
                  <p className="text-xs text-gray-warm mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pros & Considerations */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-lg text-charcoal mb-4">Strengths</h3>
              <ul className="space-y-2">
                {stay.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-gold mt-0.5 flex-shrink-0">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg text-charcoal mb-4">Considerations</h3>
              <ul className="space-y-2">
                {stay.considerations.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-gray-warm mt-0.5 flex-shrink-0">&ndash;</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Nearby Context */}
          {stay.nearbyContext && (
            <div className="mt-12">
              <SectionHeading title="Location & Surroundings" align="left" />
              <p className="text-base leading-relaxed text-charcoal-light">
                {stay.nearbyContext}
              </p>
            </div>
          )}

          {/* Itinerary Fit */}
          {stay.itineraryFit && (
            <div className="mt-12">
              <SectionHeading title="How It Fits Your Itinerary" align="left" />
              <p className="text-base leading-relaxed text-charcoal-light">
                {stay.itineraryFit}
              </p>
            </div>
          )}

          {/* FAQ */}
          {stay.faqs.length > 0 && (
            <div className="mt-12">
              <SectionHeading title={`${stay.name} FAQ`} align="left" />
              <FAQAccordion faqs={stay.faqs} />
            </div>
          )}

          {/* Comparison link */}

          {/* Internal links */}
          <div className="mt-12 pt-8 border-t border-gray-lighter">
            <h3 className="font-serif text-lg text-charcoal mb-4">Continue Exploring</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/nara-luxury-stays"
                className="text-sm text-charcoal border-b border-charcoal/20 hover:border-charcoal transition-colors"
              >
                Compare all stays
              </Link>
              <Link
                href="/experiences/early-morning-deer-walk"
                className="text-sm text-charcoal border-b border-charcoal/20 hover:border-charcoal transition-colors"
              >
                Morning deer walk experience
              </Link>
              <Link
                href="/journal/best-luxury-stays-in-nara"
                className="text-sm text-charcoal border-b border-charcoal/20 hover:border-charcoal transition-colors"
              >
                Best luxury stays guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {isKanoya ? (
        <CTASection
          title="Experience Nara at Its Most Meaningful"
          description="Kanoya offers a depth of cultural experience, design beauty, and personal hospitality that transforms a visit to Nara into something truly significant."
          primaryCta={{ label: "Check Availability", href: "#" }}
          secondaryCta={{ label: "Compare All Stays", href: "/nara-luxury-stays" }}
          backgroundImage={nightLanternStreet}
        />
      ) : (
        <CTASection
          title="Compare All Nara Stays"
          description="See how this property compares in our comprehensive editorial ranking."
          primaryCta={{ label: "View Full Comparison", href: "/nara-luxury-stays" }}
          backgroundImage={japaneseGarden}
        />
      )}

{/* Mobile CTA only on Kanoya page */}
    </>
  );
}
