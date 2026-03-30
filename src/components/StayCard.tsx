import Link from "next/link";
import type { Stay } from "@/types";
import EditorChoiceBadge from "./EditorChoiceBadge";
import ScoreBadge from "./ScoreBadge";

interface StayCardProps {
  stay: Stay;
  rank?: number;
  showScore?: boolean;
  featured?: boolean;
}

export default function StayCard({ stay, rank, showScore = true, featured = false }: StayCardProps) {
  return (
    <article
      className={`group relative border transition-colors ${
        featured
          ? "border-gold/40 bg-cream-dark/50"
          : "border-gray-lighter bg-white/50"
      } hover:border-gray-warm/30`}
    >
      {/* Image placeholder */}
      <div className={`relative ${featured ? "aspect-[16/10]" : "aspect-[16/9]"} bg-gray-lighter overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center text-gray-warm text-sm">
          {stay.name}
        </div>
        {stay.editorChoice && (
          <div className="absolute top-4 left-4">
            <EditorChoiceBadge />
          </div>
        )}
        {rank && (
          <div className="absolute top-4 right-4 w-8 h-8 bg-charcoal/80 text-cream flex items-center justify-center text-xs font-sans">
            {rank}
          </div>
        )}
      </div>

      <div className={`${featured ? "p-6 sm:p-8" : "p-5 sm:p-6"}`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className={`font-serif ${featured ? "text-xl sm:text-2xl" : "text-lg"} text-charcoal`}>
              {stay.name}
            </h3>
            <p className="text-xs text-gray-warm mt-1">{stay.locationArea}</p>
          </div>
          {showScore && <ScoreBadge score={stay.scores.overall} />}
        </div>

        <p className={`mt-3 text-sm leading-relaxed text-charcoal-light ${featured ? "line-clamp-4" : "line-clamp-3"}`}>
          {stay.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {stay.bestFor.slice(0, featured ? 4 : 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-cream-dark text-gray-warm border border-gray-lighter"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-gray-warm">{stay.priceRange}</span>
          <Link
            href={`/stays/${stay.slug}`}
            className={`text-sm tracking-wide transition-colors ${
              featured
                ? "bg-charcoal text-cream px-5 py-2 hover:bg-charcoal-light"
                : "text-charcoal border border-charcoal/20 px-4 py-2 hover:bg-charcoal hover:text-cream"
            }`}
          >
            {stay.ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
