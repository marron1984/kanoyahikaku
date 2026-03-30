export interface Stay {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  priceRange: string;
  priceLevel: 1 | 2 | 3 | 4 | 5;
  locationArea: string;
  heroImage: string;
  gallery: string[];
  bestFor: string[];
  atmosphereTags: string[];
  scores: StayScores;
  featured: boolean;
  editorChoice: boolean;
  ctaLabel: string;
  ctaUrl: string;
  comparisonSummary: string;
  pros: string[];
  considerations: string[];
  faqs: FAQ[];
  whyStandout?: string;
  experienceNarrative?: string;
  suggestedStayScenario?: string;
  designPhilosophy?: string;
  travelerProfile?: string;
  nearbyContext?: string;
  itineraryFit?: string;
}

export interface StayScores {
  experienceDepth: number;
  privacy: number;
  culturalAuthenticity: number;
  designAtmosphere: number;
  locationConvenience: number;
  couplesSuitability: number;
  slowTravelFit: number;
  overall: number;
}

export interface Experience {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  bestSeason?: string;
  bestTimeOfDay?: string;
  travelerType: string;
  featuredStaySlug: string;
  secondaryStaySlugs: string[];
  sections: ExperienceSection[];
}

export interface ExperienceSection {
  heading: string;
  content: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  heroImage: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  readingTime: string;
  category: string;
  tags: string[];
  sections: ArticleSection[];
  featuredStaySlug?: string;
}

export interface ArticleSection {
  heading?: string;
  content: string;
  recommendationSlug?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RecommendationCategory {
  id: string;
  label: string;
  slug: string;
  description: string;
  winnerSlug: string;
}

export interface ComparisonMetric {
  key: keyof StayScores;
  label: string;
  description: string;
}

export interface CTAConfig {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "outline";
}

export interface SiteConfig {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  defaultOgImage: string;
}
