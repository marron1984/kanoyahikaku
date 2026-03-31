import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import StayCard from "@/components/StayCard";
import UnsplashImage from "@/components/UnsplashImage";
import { experiences, getExperienceBySlug } from "@/data/experiences";
import { getStayBySlug } from "@/data/stays";
import { experienceImages } from "@/lib/images";
import Link from "next/link";

interface ExperiencePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return experiences.map((exp) => ({ slug: exp.slug }));
}

export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const exp = getExperienceBySlug(slug);
  if (!exp) return {};

  return {
    title: `${exp.title} — Nara Experience Guide`,
    description: exp.shortDescription,
    openGraph: {
      title: `${exp.title} — Nara Experience Guide`,
      description: exp.shortDescription,
    },
  };
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const exp = getExperienceBySlug(slug);
  if (!exp) notFound();

  const featuredStay = getStayBySlug(exp.featuredStaySlug);
  const secondaryStays = exp.secondaryStaySlugs
    .map((s) => getStayBySlug(s))
    .filter(Boolean);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Experiences" },
            { label: exp.title },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/7] bg-gray-lighter mb-8 overflow-hidden">
            {experienceImages[exp.slug] ? (
              <UnsplashImage image={experienceImages[exp.slug]} priority />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-warm text-lg">
                {exp.title}
              </div>
            )}
          </div>

          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-warm mb-3">
              Nara Experience
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
              {exp.title}
            </h1>
            <p className="text-base text-gray-warm mt-2">{exp.subtitle}</p>

            <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
              {exp.shortDescription}
            </p>

            {(exp.bestSeason || exp.bestTimeOfDay) && (
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-warm">
                {exp.bestSeason && (
                  <span className="px-3 py-1.5 border border-gray-lighter">
                    Season: {exp.bestSeason}
                  </span>
                )}
                {exp.bestTimeOfDay && (
                  <span className="px-3 py-1.5 border border-gray-lighter">
                    Best time: {exp.bestTimeOfDay}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {exp.longDescription.split("\n\n").map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-charcoal-light mb-5">
              {p}
            </p>
          ))}

          {exp.sections.map((section, i) => (
            <div key={i} className="mt-10">
              <h2 className="font-serif text-xl sm:text-2xl text-charcoal mb-4">
                {section.heading}
              </h2>
              {section.content.split("\n\n").map((p, j) => (
                <p key={j} className="text-base leading-relaxed text-charcoal-light mb-4">
                  {p}
                </p>
              ))}
            </div>
          ))}

          {/* Recommended stays for this experience */}
          {(featuredStay || secondaryStays.length > 0) && (
            <div className="mt-12">
              <SectionHeading title="Where to Stay for This Experience" align="left" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featuredStay && (
                  <StayCard stay={featuredStay} showScore={false} />
                )}
                {secondaryStays.map((stay) =>
                  stay ? (
                    <StayCard key={stay.id} stay={stay} showScore={false} />
                  ) : null
                )}
              </div>
            </div>
          )}

          {/* More experiences */}
          <div className="mt-12 pt-8 border-t border-gray-lighter">
            <h3 className="font-serif text-lg text-charcoal mb-4">More Nara Experiences</h3>
            <div className="flex flex-col gap-2">
              {experiences
                .filter((e) => e.slug !== exp.slug)
                .slice(0, 3)
                .map((e) => (
                  <Link
                    key={e.slug}
                    href={`/experiences/${e.slug}`}
                    className="text-sm text-charcoal border-b border-charcoal/20 hover:border-charcoal transition-colors inline-block"
                  >
                    {e.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Plan Your Nara Experience"
        description="Compare stays that put you closest to the experiences that matter most."
        primaryCta={{ label: "Compare Stays", href: "/nara-luxury-stays" }}
      />
    </>
  );
}
