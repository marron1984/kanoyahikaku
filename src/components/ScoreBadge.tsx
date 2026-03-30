interface ScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

export default function ScoreBadge({ score, size = "md" }: ScoreBadgeProps) {
  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-14 h-14 text-lg",
  };

  return (
    <div
      className={`${sizeClasses[size]} flex items-center justify-center border-2 border-gold text-charcoal font-serif flex-shrink-0`}
    >
      {score.toFixed(1)}
    </div>
  );
}
