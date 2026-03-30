import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage?: string;
  overlay?: boolean;
  compact?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  overlay = true,
  compact = false,
}: HeroSectionProps) {
  const heightClass = compact ? "py-16 sm:py-24" : "py-24 sm:py-36 lg:py-44";

  return (
    <section
      className={`relative ${heightClass} flex items-center`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {backgroundImage && overlay && (
        <div className="absolute inset-0 bg-charcoal/50" />
      )}

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <p className={`text-xs uppercase tracking-[0.25em] mb-4 ${backgroundImage ? "text-cream/70" : "text-gray-warm"}`}>
            {subtitle}
          </p>
        )}
        <h1
          className={`font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight ${
            backgroundImage ? "text-cream" : "text-charcoal"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`mt-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${
              backgroundImage ? "text-cream/80" : "text-charcoal-light"
            }`}
          >
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className={`inline-block px-8 py-3 text-sm tracking-wide transition-colors ${
                  backgroundImage
                    ? "bg-cream text-charcoal hover:bg-cream-dark"
                    : "bg-charcoal text-cream hover:bg-charcoal-light"
                }`}
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`inline-block px-8 py-3 text-sm tracking-wide border transition-colors ${
                  backgroundImage
                    ? "border-cream/40 text-cream hover:bg-cream/10"
                    : "border-charcoal/30 text-charcoal hover:bg-charcoal/5"
                }`}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
