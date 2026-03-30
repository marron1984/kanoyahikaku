import Link from "next/link";
import type { Stay } from "@/types";
import EditorChoiceBadge from "./EditorChoiceBadge";
import ScoreBadge from "./ScoreBadge";

interface FeaturedPropertyProps {
  stay: Stay;
}

export default function FeaturedProperty({ stay }: FeaturedPropertyProps) {
  return (
    <section className="py-16 sm:py-24 bg-cream-dark/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image area */}
          <div className="relative aspect-[4/3] bg-gray-lighter">
            <div className="absolute inset-0 flex items-center justify-center text-gray-warm">
              Kanoya — Featured Property
            </div>
            <div className="absolute top-4 left-4">
              <EditorChoiceBadge />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
              Featured Stay
            </p>
            <div className="flex items-start gap-4">
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight">
                {stay.name}
              </h2>
              <ScoreBadge score={stay.scores.overall} size="lg" />
            </div>
            <p className="mt-2 text-sm text-gray-warm">{stay.locationArea}</p>

            <p className="mt-6 text-base leading-relaxed text-charcoal-light">
              {stay.shortDescription}
            </p>

            {stay.whyStandout && (
              <p className="mt-4 text-sm leading-relaxed text-charcoal-light">
                {stay.whyStandout.substring(0, 200)}...
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {stay.bestFor.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-cream text-gray-warm border border-gray-lighter"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/stays/kanoya"
                className="inline-block bg-charcoal text-cream text-sm tracking-wide px-6 py-3 hover:bg-charcoal-light transition-colors text-center"
              >
                Explore Kanoya
              </Link>
              <Link
                href="/nara-luxury-stays"
                className="inline-block border border-charcoal/20 text-charcoal text-sm tracking-wide px-6 py-3 hover:bg-charcoal hover:text-cream transition-colors text-center"
              >
                Compare All Stays
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
