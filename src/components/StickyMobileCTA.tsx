"use client";

import Link from "next/link";

interface StickyMobileCTAProps {
  label: string;
  href: string;
}

export default function StickyMobileCTA({ label, href }: StickyMobileCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-cream/95 backdrop-blur-sm border-t border-gray-lighter p-3">
      <Link
        href={href}
        className="block w-full bg-charcoal text-cream text-sm tracking-wide py-3 text-center hover:bg-charcoal-light transition-colors"
      >
        {label}
      </Link>
    </div>
  );
}
