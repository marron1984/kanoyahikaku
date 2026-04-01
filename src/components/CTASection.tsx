import Link from "next/link";
import UnsplashImage from "./UnsplashImage";
import type { SiteImage } from "@/lib/images";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "light" | "dark";
  backgroundImage?: SiteImage;
}

export default function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "dark",
  backgroundImage,
}: CTASectionProps) {
  const isDark = variant === "dark";
  const hasImage = !!backgroundImage;

  return (
    <section className={`relative py-16 sm:py-24 ${hasImage ? "" : isDark ? "bg-charcoal" : "bg-cream-dark"}`}>
      {hasImage && (
        <>
          <div className="absolute inset-0">
            <UnsplashImage image={backgroundImage} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-charcoal/60" />
        </>
      )}
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`font-serif text-2xl sm:text-3xl tracking-tight ${hasImage || isDark ? "text-cream" : "text-charcoal"}`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-4 text-base leading-relaxed ${hasImage || isDark ? "text-cream/70" : "text-charcoal-light"}`}>
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCta.href}
            className={`inline-block px-8 py-3 text-sm tracking-wide transition-colors ${
              hasImage || isDark
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
                hasImage || isDark
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
