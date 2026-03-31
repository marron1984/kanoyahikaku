import Link from "next/link";
import type { Article } from "@/types";
import UnsplashImage from "./UnsplashImage";
import { getArticleImage } from "@/lib/images";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const image = getArticleImage(article.category);

  return (
    <article className="group border border-gray-lighter hover:border-gray-warm/30 transition-colors bg-white/50">
      <div className="aspect-[16/9] bg-gray-lighter overflow-hidden">
        <UnsplashImage image={image} />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs uppercase tracking-wider text-gold">{article.category}</span>
          <span className="text-xs text-gray-warm">{article.readingTime}</span>
        </div>
        <h3 className="font-serif text-lg text-charcoal">{article.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal-light line-clamp-3">
          {article.excerpt}
        </p>
        <Link
          href={`/journal/${article.slug}`}
          className="mt-4 inline-block text-sm text-charcoal border-b border-charcoal/20 hover:border-charcoal transition-colors"
        >
          Read article
        </Link>
      </div>
    </article>
  );
}
