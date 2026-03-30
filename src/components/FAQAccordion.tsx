"use client";

import { useState } from "react";
import type { FAQ } from "@/types";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-lighter">
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full py-5 flex items-start justify-between text-left gap-4"
            aria-expanded={openIndex === index}
          >
            <span className="font-serif text-base sm:text-lg text-charcoal pr-4">
              {faq.question}
            </span>
            <svg
              className={`w-5 h-5 text-gray-warm flex-shrink-0 mt-1 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="pb-5 pr-10">
              <p className="text-sm leading-relaxed text-charcoal-light">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
