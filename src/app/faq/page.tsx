import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import UnsplashImage from "@/components/UnsplashImage";
import { globalFaqs } from "@/data/faqs";
import { kasugaLanterns } from "@/lib/images";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Nara Stays",
  description:
    "Answers to common questions about staying in Nara, Japan. Learn about luxury ryokan, boutique hotels, best times to visit, and how to plan your Nara trip.",
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: globalFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
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
          <UnsplashImage image={kasugaLanterns} priority />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "FAQ" }]} />
      </div>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Help & Guidance"
            title="Frequently Asked Questions"
            description="Everything you need to know about planning a meaningful stay in Nara."
          />

          <FAQAccordion faqs={globalFaqs} />
        </div>
      </section>

      <CTASection
        title="Ready to Explore?"
        description="Compare Nara's finest stays and find the one that matches your travel style."
        primaryCta={{ label: "Compare Stays", href: "/nara-luxury-stays" }}
        secondaryCta={{ label: "Explore Kanoya", href: "/stays/kanoya" }}
        variant="light"
      />
    </>
  );
}
