import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-serif text-cream tracking-wide">
              Nara Stays
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              A curated editorial guide to meaningful luxury stays in Nara, Japan.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/nara-luxury-stays" className="text-sm hover:text-cream transition-colors">Compare Stays</Link></li>
              <li><Link href="/stays/kanoya" className="text-sm hover:text-cream transition-colors">Kanoya</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-cream transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-4">Experiences</h4>
            <ul className="space-y-2">
              <li><Link href="/experiences/early-morning-deer-walk" className="text-sm hover:text-cream transition-colors">Morning Deer Walk</Link></li>
              <li><Link href="/experiences/quiet-nara-at-night" className="text-sm hover:text-cream transition-colors">Nara at Night</Link></li>
              <li><Link href="/experiences/cultural-immersion-stay" className="text-sm hover:text-cream transition-colors">Cultural Immersion</Link></li>
              <li><Link href="/experiences/romantic-stay-in-nara" className="text-sm hover:text-cream transition-colors">Romantic Stays</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-4">Journal</h4>
            <ul className="space-y-2">
              <li><Link href="/journal" className="text-sm hover:text-cream transition-colors">All Articles</Link></li>
              <li><Link href="/journal/luxury-hotels-nara-japan" className="text-sm hover:text-cream transition-colors">Luxury Hotels in Nara</Link></li>
              <li><Link href="/journal/best-ryokan-nara-traditional-japanese-inn" className="text-sm hover:text-cream transition-colors">Best Ryokan in Nara</Link></li>
              <li><Link href="/journal/where-to-stay-in-nara-instead-of-kyoto" className="text-sm hover:text-cream transition-colors">Nara vs Kyoto</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Nara Stays. An editorial guide to premium stays in Nara, Japan.
          </p>
          <p className="text-xs text-cream/40">
            Curated with care for discerning travelers.
          </p>
        </div>
      </div>
    </footer>
  );
}
