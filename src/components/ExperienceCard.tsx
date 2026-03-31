import Link from "next/link";
import type { Experience } from "@/types";
import UnsplashImage from "./UnsplashImage";
import { experienceImages } from "@/lib/images";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group border border-gray-lighter hover:border-gray-warm/30 transition-colors bg-white/50">
      <div className="aspect-[16/9] bg-gray-lighter overflow-hidden">
        {experienceImages[experience.slug] ? (
          <UnsplashImage image={experienceImages[experience.slug]} />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-warm text-sm">
            {experience.title}
          </div>
        )}
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-serif text-lg text-charcoal">{experience.title}</h3>
        <p className="text-xs text-gray-warm mt-1">{experience.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-charcoal-light line-clamp-3">
          {experience.shortDescription}
        </p>
        <Link
          href={`/experiences/${experience.slug}`}
          className="mt-4 inline-block text-sm text-charcoal border-b border-charcoal/20 hover:border-charcoal transition-colors"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}
