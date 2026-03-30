import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FeaturedProperty from "@/components/FeaturedProperty";
import SectionHeading from "@/components/SectionHeading";
import StayCard from "@/components/StayCard";
import ExperienceCard from "@/components/ExperienceCard";
import ArticleCard from "@/components/ArticleCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { getFeaturedStay, getStaysSorted } from "@/data/stays";
import { experiences } from "@/data/experiences";
import { articles } from "@/data/articles";
import { globalFaqs } from "@/data/faqs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nara Stays — Curated Luxury Stays in Nara, Japan",
  description:
    "Discover the most meaningful luxury stays in Nara, Japan. Compare premium ryokan, boutique hotels, and cultural accommodations curated for discerning travelers.",
  openGraph: {
    title: "Nara Stays — Curated Luxury Stays in Nara, Japan",
    description:
      "Discover the most meaningful luxury stays in Nara, Japan. Compare premium ryokan, boutique hotels, and cultural accommodations curated for discerning travelers.",
  },
};

export default function HomePage() {
  const featuredStay = getFeaturedStay();
  const sortedStays = getStaysSorted();
  const otherStays = sortedStays.filter((s) => s.slug !== "kanoya").slice(0, 3);

  return (
    <>
      {/* Hero */}
      <HeroSection
        subtitle="A curated guide to Nara's finest stays"
        title="Where to Stay in Nara for a More Meaningful Experience"
        description="Nara is more than a day trip. For travelers who seek cultural depth, quiet luxury, and the Japan they imagined — staying overnight changes everything. We compare the best."
        primaryCta={{ label: "Compare Stays", href: "/nara-luxury-stays" }}
        secondaryCta={{ label: "Explore Kanoya", href: "/stays/kanoya" }}
      />

      {/* Featured Property */}
      <FeaturedProperty stay={featuredStay} />

      {/* Comparison Preview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Compare"
            title="Nara's Top Luxury Stays, Ranked"
            description="Our editorial team has evaluated and ranked Nara's premium stays across experience depth, cultural authenticity, design, and more."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherStays.map((stay, index) => (
              <StayCard key={stay.id} stay={stay} rank={index + 2} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/nara-luxury-stays"
              className="inline-block border border-charcoal/20 text-charcoal text-sm tracking-wide px-8 py-3 hover:bg-charcoal hover:text-cream transition-colors"
            >
              View Full Comparison
            </Link>
          </div>
        </div>
      </section>

      {/* Why Stay Overnight */}
      <section className="py-16 sm:py-24 bg-cream-dark/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Perspective"
            title="Why Staying Overnight in Nara Changes Everything"
          />
          <div className="space-y-6 text-base leading-relaxed text-charcoal-light text-left">
            <p>
              Most visitors treat Nara as a three-hour detour from Kyoto — a quick stop to see the deer and the Great Buddha. They leave before the real Nara reveals itself.
            </p>
            <p>
              The city&apos;s true character emerges in the hours most travelers miss. The park at dawn, when mist hangs between ancient trees and deer move through the silence like spirits. The streets of Naramachi after dark, softly lit and profoundly peaceful. The weight of a Nara evening, when the temples stand against the sky and the crowds have long since gone.
            </p>
            <p>
              Staying overnight is not just practical — it is the single best decision you can make to elevate your Nara experience from pleasant to unforgettable. The question is not whether to stay, but where.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/journal/how-many-nights-to-spend-in-nara"
              className="text-sm text-charcoal border-b border-charcoal/20 hover:border-charcoal transition-colors"
            >
              Read: How many nights to spend in Nara
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Experiences"
            title="Signature Nara Experiences"
            description="The moments that make staying in Nara worthwhile — and the stays that make them possible."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.slice(0, 3).map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Best-For Categories */}
      <section className="py-16 sm:py-24 bg-cream-dark/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Recommendations"
            title="Find Your Ideal Nara Stay"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Best for Couples", description: "Intimate, romantic, and beautifully private", pick: "Kanoya", href: "/stays/kanoya" },
              { label: "Best for Cultural Depth", description: "Immersive heritage and authentic tradition", pick: "Kanoya", href: "/stays/kanoya" },
              { label: "Best for Quiet Luxury", description: "Refined restraint over flashy excess", pick: "Kanoya", href: "/stays/kanoya" },
              { label: "Best for First-Time Visitors", description: "The definitive Nara overnight experience", pick: "Kanoya", href: "/stays/kanoya" },
              { label: "Best for Design Lovers", description: "Contemporary Japanese aesthetics", pick: "Nara Komachi", href: "/stays/nara-komachi" },
              { label: "Best for Convenience", description: "Steps from Nara Park and major temples", pick: "Asukasou", href: "/stays/asukasou" },
            ].map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="group border border-gray-lighter bg-white/50 p-5 hover:border-gray-warm/30 transition-colors"
              >
                <h3 className="font-serif text-base text-charcoal">{cat.label}</h3>
                <p className="text-xs text-gray-warm mt-1">{cat.description}</p>
                <p className="text-sm text-charcoal-light mt-3">
                  Our pick: <span className="text-charcoal font-medium">{cat.pick}</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Journal"
            title="From the Nara Stays Journal"
            description="Perspectives, guides, and insights for travelers considering Nara."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-cream-dark/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <FAQAccordion faqs={globalFaqs.slice(0, 5)} />
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="text-sm text-charcoal border-b border-charcoal/20 hover:border-charcoal transition-colors"
            >
              View all FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Experience Nara Differently?"
        description="Kanoya is our top-rated stay for travelers seeking cultural depth, quiet luxury, and a truly meaningful experience in Nara."
        primaryCta={{ label: "Explore Kanoya", href: "/stays/kanoya" }}
        secondaryCta={{ label: "Compare All Stays", href: "/nara-luxury-stays" }}
      />
    </>
  );
}
