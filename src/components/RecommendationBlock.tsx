import Link from "next/link";
import type { Stay } from "@/types";
import EditorChoiceBadge from "./EditorChoiceBadge";

interface RecommendationBlockProps {
  stay: Stay;
  context?: string;
}

export default function RecommendationBlock({ stay, context }: RecommendationBlockProps) {
  return (
    <aside className="border border-gold/30 bg-cream-dark/40 p-6 sm:p-8 my-8">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          {stay.editorChoice && <EditorChoiceBadge />}
          <h3 className="font-serif text-xl text-charcoal mt-3">
            {context ? `${context}: ${stay.name}` : `Our Recommendation: ${stay.name}`}
          </h3>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-charcoal-light">
        {stay.comparisonSummary}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stay.bestFor.slice(0, 4).map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 bg-cream text-gray-warm border border-gray-lighter">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5">
        <Link
          href={`/stays/${stay.slug}`}
          className="inline-block bg-charcoal text-cream text-sm tracking-wide px-6 py-2.5 hover:bg-charcoal-light transition-colors"
        >
          {stay.ctaLabel}
        </Link>
      </div>
    </aside>
  );
}
