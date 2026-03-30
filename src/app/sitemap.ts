import type { MetadataRoute } from "next";
import { stays } from "@/data/stays";
import { experiences } from "@/data/experiences";
import { articles } from "@/data/articles";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/nara-luxury-stays`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const stayPages: MetadataRoute.Sitemap = stays.map((stay) => ({
    url: `${base}/stays/${stay.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: stay.editorChoice ? 0.9 : 0.7,
  }));

  const experiencePages: MetadataRoute.Sitemap = experiences.map((exp) => ({
    url: `${base}/experiences/${exp.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/journal/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...stayPages, ...experiencePages, ...articlePages];
}
