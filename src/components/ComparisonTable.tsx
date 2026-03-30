import type { Stay } from "@/types";
import { comparisonMetrics } from "@/lib/constants";

interface ComparisonTableProps {
  stays: Stay[];
}

export default function ComparisonTable({ stays }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr className="border-b-2 border-charcoal/10">
            <th className="text-left py-3 pr-4 font-sans text-xs uppercase tracking-widest text-gray-warm">
              Criteria
            </th>
            {stays.map((stay) => (
              <th
                key={stay.id}
                className={`text-center py-3 px-3 font-serif text-base ${
                  stay.editorChoice ? "text-charcoal" : "text-charcoal-light"
                }`}
              >
                {stay.name}
                {stay.editorChoice && (
                  <span className="block text-xs font-sans text-gold uppercase tracking-wider mt-0.5">
                    Editor&apos;s Choice
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonMetrics.map((metric) => (
            <tr key={metric.key} className="border-b border-gray-lighter">
              <td className="py-3 pr-4 text-sm text-charcoal-light">
                {metric.label}
              </td>
              {stays.map((stay) => {
                const score = stay.scores[metric.key];
                const isHighest = score === Math.max(...stays.map((s) => s.scores[metric.key]));
                return (
                  <td
                    key={stay.id}
                    className={`text-center py-3 px-3 font-serif ${
                      isHighest ? "text-charcoal font-semibold" : "text-gray-warm"
                    }`}
                  >
                    {score.toFixed(1)}
                  </td>
                );
              })}
            </tr>
          ))}
          <tr className="border-b border-gray-lighter">
            <td className="py-3 pr-4 text-sm text-charcoal-light">Price Range</td>
            {stays.map((stay) => (
              <td key={stay.id} className="text-center py-3 px-3 text-xs text-gray-warm">
                {stay.priceRange}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
