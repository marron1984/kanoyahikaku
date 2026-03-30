import Link from "next/link";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "light" | "dark";
}

export default function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "dark",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section className={`py-16 sm:py-24 ${isDark ? "bg-charcoal" : "bg-cream-dark"}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`font-serif text-2xl sm:text-3xl tracking-tight ${isDark ? "text-cream" : "text-charcoal"}`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-4 text-base leading-relaxed ${isDark ? "text-cream/70" : "text-charcoal-light"}`}>
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCta.href}
            className={`inline-block px-8 py-3 text-sm tracking-wide transition-colors ${
              isDark
                ? "bg-cream text-charcoal hover:bg-cream-dark"
                : "bg-charcoal text-cream hover:bg-charcoal-light"
            }`}
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`inline-block px-8 py-3 text-sm tracking-wide border transition-colors ${
                isDark
                  ? "border-cream/30 text-cream hover:bg-cream/10"
                  : "border-charcoal/30 text-charcoal hover:bg-charcoal/5"
              }`}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
