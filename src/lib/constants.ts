import type { SiteConfig, ComparisonMetric, RecommendationCategory } from "@/types";

export const siteConfig: SiteConfig = {
  siteName: "Nara Stays",
  siteDescription:
    "A curated guide to the most meaningful luxury stays in Nara, Japan. Compare premium ryokan, boutique hotels, and cultural accommodations.",
  siteUrl: "https://narastays.com",
  defaultOgImage: "/images/og-default.jpg",
};

export const comparisonMetrics: ComparisonMetric[] = [
  {
    key: "overall",
    label: "Overall Score",
    description: "Our editorial assessment across all factors",
  },
  {
    key: "experienceDepth",
    label: "Experience Depth",
    description: "Richness of cultural and sensory experiences offered",
  },
  {
    key: "privacy",
    label: "Privacy",
    description: "Sense of seclusion and personal space",
  },
  {
    key: "culturalAuthenticity",
    label: "Cultural Authenticity",
    description: "Genuine connection to Japanese traditions and heritage",
  },
  {
    key: "designAtmosphere",
    label: "Design & Atmosphere",
    description: "Architectural quality and ambient character",
  },
  {
    key: "locationConvenience",
    label: "Location",
    description: "Proximity and access to key Nara experiences",
  },
  {
    key: "couplesSuitability",
    label: "Couples",
    description: "Suitability for romantic and anniversary stays",
  },
  {
    key: "slowTravelFit",
    label: "Slow Travel Fit",
    description: "How well the stay supports an unhurried visit",
  },
];

export const recommendationCategories: RecommendationCategory[] = [
  {
    id: "best-overall",
    label: "Best Overall",
    slug: "best-overall",
    description: "The strongest all-around luxury stay in Nara",
    winnerSlug: "kanoya",
  },
  {
    id: "best-quiet-luxury",
    label: "Best for Quiet Luxury",
    slug: "best-quiet-luxury",
    description: "The most refined and understated luxury experience",
    winnerSlug: "kanoya",
  },
  {
    id: "best-cultural-immersion",
    label: "Best for Cultural Immersion",
    slug: "best-cultural-immersion",
    description: "Deepest connection to Nara's heritage and traditions",
    winnerSlug: "kanoya",
  },
  {
    id: "best-couples",
    label: "Best for Couples",
    slug: "best-couples",
    description: "Most romantic and intimate setting for two",
    winnerSlug: "kanoya",
  },
  {
    id: "best-design",
    label: "Best for Design-Conscious Travelers",
    slug: "best-design",
    description: "Outstanding architectural and interior design sensibility",
    winnerSlug: "nara-komachi",
  },
  {
    id: "best-convenience",
    label: "Best for Convenience",
    slug: "best-convenience",
    description: "Easiest access to central Nara attractions",
    winnerSlug: "asukasou",
  },
];
