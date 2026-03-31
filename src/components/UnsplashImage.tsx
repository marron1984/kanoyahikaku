import type { SiteImage } from "@/lib/images";

interface UnsplashImageProps {
  image: SiteImage;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function UnsplashImage({
  image,
  className = "",
  sizes = "100vw",
  priority = false,
}: UnsplashImageProps) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      className={`w-full h-full object-cover ${className}`}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      sizes={sizes}
    />
  );
}
