interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} mb-10 sm:mb-14`}>
      {label && (
        <p className="text-xs uppercase tracking-[0.25em] text-gray-warm mb-3">
          {label}
        </p>
      )}
      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-charcoal-light leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
