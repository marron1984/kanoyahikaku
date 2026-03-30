"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Compare Stays", href: "/nara-luxury-stays" },
  { label: "Experiences", href: "/experiences/early-morning-deer-walk" },
  { label: "Journal", href: "/journal/best-luxury-stays-in-nara" },
  { label: "FAQ", href: "/faq" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gray-lighter">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-serif tracking-wide text-charcoal">
            Nara Stays
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-charcoal-light hover:text-charcoal transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/stays/kanoya"
              className="text-sm tracking-wide bg-charcoal text-cream px-4 py-2 hover:bg-charcoal-light transition-colors"
            >
              Explore Kanoya
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-lighter pt-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-wide text-charcoal-light py-1"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/stays/kanoya"
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-wide bg-charcoal text-cream px-4 py-2 text-center mt-2"
              >
                Explore Kanoya
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
