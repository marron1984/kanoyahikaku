import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-serif text-4xl text-charcoal mb-4">Page Not Found</h1>
        <p className="text-base text-charcoal-light mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-block bg-charcoal text-cream text-sm tracking-wide px-6 py-3 hover:bg-charcoal-light transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/nara-luxury-stays"
            className="inline-block border border-charcoal/20 text-charcoal text-sm tracking-wide px-6 py-3 hover:bg-charcoal hover:text-cream transition-colors"
          >
            Compare Stays
          </Link>
        </div>
      </div>
    </div>
  );
}
