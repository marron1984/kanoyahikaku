/**
 * Curated image library using Unsplash free photos.
 * All images are free to use under the Unsplash License.
 * Photo IDs verified from public GitHub repositories.
 */

export interface SiteImage {
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
}

const unsplash = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

// --- Hero / Homepage: Kyoto bamboo + temples ---
export const heroHome: SiteImage = {
  src: unsplash("photo-1493976040374-85c8e12f0c0e", 1600, 80),
  alt: "Traditional Japanese temple with warm golden light",
  credit: "Sorasak",
  creditUrl: "https://unsplash.com/@banisakdr",
};

// --- Nara Deer close-up ---
export const naraDeer: SiteImage = {
  src: unsplash("photo-1524413159693-3b841b1c4bb9", 1200, 80),
  alt: "Deer standing in Nara Park, Japan",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Todai-ji / Great Buddha ---
export const todaiji: SiteImage = {
  src: unsplash("photo-1570191935041-923f05351a9a", 1200, 80),
  alt: "Great Buddha statue at Todai-ji temple, Nara",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Fushimi Inari torii gates ---
export const kasugaLanterns: SiteImage = {
  src: unsplash("photo-1478436127897-769e1b3f0f36", 1200, 80),
  alt: "Vermillion torii gates at a Japanese shrine",
  credit: "Manuel Cosentino",
  creditUrl: "https://unsplash.com/@manuco",
};

// --- Kiyomizu-dera / Traditional architecture ---
export const ryokanInterior: SiteImage = {
  src: unsplash("photo-1601309584882-680470248bc4", 1200, 80),
  alt: "Traditional Japanese temple architecture with wooden veranda",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Bamboo grove path ---
export const architectureDetail: SiteImage = {
  src: unsplash("photo-1528360983277-13d401cdc186", 1200, 80),
  alt: "Bamboo grove pathway in Arashiyama, Japan",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Japanese garden ---
export const japaneseGarden: SiteImage = {
  src: unsplash("photo-1545569341-9eb8b30979d9", 1200, 80),
  alt: "Serene bamboo forest path in Japan",
  credit: "Timo Volz",
  creditUrl: "https://unsplash.com/@magicpattern",
};

// --- Japanese food / street food ---
export const kaisekiDining: SiteImage = {
  src: unsplash("photo-1533759413974-9e15f3b745ac", 1200, 80),
  alt: "Colorful Japanese market food display",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Cherry blossom ---
export const cherryBlossom: SiteImage = {
  src: unsplash("photo-1522383225653-ed111181a951", 1200, 80),
  alt: "Cherry blossoms in full bloom along a Japanese river",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Pontocho / night alley ---
export const nightLanternStreet: SiteImage = {
  src: unsplash("photo-1552554652-3a5e8c68383e", 1200, 80),
  alt: "Atmospheric lantern-lit alley in Kyoto at night",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Traditional Kamakura street ---
export const traditionalStreet: SiteImage = {
  src: unsplash("photo-1605634543789-9a0d8923f119", 1200, 80),
  alt: "Traditional Japanese town street with wooden buildings",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Kimono couple in Gion ---
export const romanticJapan: SiteImage = {
  src: unsplash("photo-1542931287-023b922fa89b", 1200, 80),
  alt: "Person in traditional kimono walking through historic Gion district",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Senso-ji temple ---
export const teaCeremony: SiteImage = {
  src: unsplash("photo-1583212292454-1fe6229603b7", 1200, 80),
  alt: "Ancient Senso-ji temple entrance with traditional lantern",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Nara deer group ---
export const deerGroup: SiteImage = {
  src: unsplash("photo-1524413159693-3b841b1c4bb9", 1200, 80),
  alt: "Group of deer in Nara Park, Japan",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Osaka neon / Dotonbori ---
export const japaneseFoodDetail: SiteImage = {
  src: unsplash("photo-1590559899731-a382839e5549", 1200, 80),
  alt: "Vibrant neon signs of Dotonbori, Osaka",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Fushimi Inari torii path ---
export const toriiGate: SiteImage = {
  src: unsplash("photo-1478436127897-769e1b3f0f36", 1200, 80),
  alt: "Path through vermillion torii gates at a Japanese shrine",
  credit: "Manuel Cosentino",
  creditUrl: "https://unsplash.com/@manuco",
};

// --- Himeji castle ---
export const autumnFoliage: SiteImage = {
  src: unsplash("photo-1549487333-66275812e946", 1200, 80),
  alt: "Historic Himeji Castle with traditional Japanese architecture",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Mt Fuji ---
export const templePagoda: SiteImage = {
  src: unsplash("photo-1490806843957-31f4c9a91c65", 1200, 80),
  alt: "Mount Fuji with cherry blossoms and traditional pagoda",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Bamboo grove (Arashiyama) ---
export const naraStreetscape: SiteImage = {
  src: unsplash("photo-1528360983277-13d401cdc186", 1200, 80),
  alt: "Bamboo grove path in Arashiyama, Kyoto",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Shinkansen bullet train ---
export const japanTravel: SiteImage = {
  src: unsplash("photo-1475938476650-3164675af7da", 1200, 80),
  alt: "Shinkansen bullet train speeding through Japan",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Kimono in Gion ---
export const coupleJapan: SiteImage = {
  src: unsplash("photo-1542931287-023b922fa89b", 1200, 80),
  alt: "Person in kimono walking through historic Japanese district",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Floating torii gate, Miyajima ---
export const japaneseArt: SiteImage = {
  src: unsplash("photo-1542640244-7e672d6cef21", 1200, 80),
  alt: "Floating torii gate at Itsukushima Shrine, Miyajima",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Osaka castle ---
export const japaneseFestival: SiteImage = {
  src: unsplash("photo-1590256153835-06900f86532d", 1200, 80),
  alt: "Osaka Castle surrounded by cherry blossoms",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Shibuya crossing ---
export const historicNara: SiteImage = {
  src: unsplash("photo-1542051841857-5f90071e7989", 1200, 80),
  alt: "Busy Shibuya crossing in Tokyo at night",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Tokyo cityscape ---
export const travelPlanning: SiteImage = {
  src: unsplash("photo-1503899036084-c55cdd92da26", 1200, 80),
  alt: "Tokyo cityscape with modern skyscrapers and traditional charm",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Mapped by use context for easy component access ---
export const siteImages = {
  heroHome,
  naraDeer,
  deerGroup,
  todaiji,
  kasugaLanterns,
  ryokanInterior,
  japaneseGarden,
  kaisekiDining,
  cherryBlossom,
  nightLanternStreet,
  traditionalStreet,
  architectureDetail,
  teaCeremony,
  romanticJapan,
  japaneseFoodDetail,
  toriiGate,
  autumnFoliage,
  templePagoda,
  naraStreetscape,
  japanTravel,
  coupleJapan,
  japaneseArt,
  japaneseFestival,
  historicNara,
  travelPlanning,
} as const;

/** Map stay slugs to their hero images */
export const stayImages: Record<string, SiteImage> = {
  kanoya: ryokanInterior,
  "nara-komachi": architectureDetail,
  asukasou: todaiji,
  "noborioji-hotel": cherryBlossom,
  "gyoki-an": traditionalStreet,
};

/** Map experience slugs to their hero images */
export const experienceImages: Record<string, SiteImage> = {
  "early-morning-deer-walk": deerGroup,
  "quiet-nara-at-night": nightLanternStreet,
  "cultural-immersion-stay": kasugaLanterns,
  "romantic-stay-in-nara": romanticJapan,
  "slow-travel-in-nara": japaneseGarden,
};

/** Map article categories to images */
export const categoryImages: Record<string, SiteImage> = {
  "Food & Dining": kaisekiDining,
  "Cultural Experiences": teaCeremony,
  "Temples & Shrines": todaiji,
  "Accommodation & Stays": ryokanInterior,
  "Practical Travel": japanTravel,
  "Traveler Types": coupleJapan,
  "Seasonal Guides": cherryBlossom,
  "Nature & Gardens": japaneseGarden,
  "Itineraries & Planning": travelPlanning,
  "History & Heritage": historicNara,
  "Travel Planning": travelPlanning,
  "Art & Architecture": japaneseArt,
  "Comparison & Context": architectureDetail,
  "Neighborhoods & Areas": naraStreetscape,
  "Events & Festivals": japaneseFestival,
  "Day Trips & Excursions": autumnFoliage,
  "Art & Culture": japaneseArt,
  "Cultural Heritage": kasugaLanterns,
};

/** Get an image for an article based on its category, with fallback */
export function getArticleImage(category: string): SiteImage {
  return categoryImages[category] || templePagoda;
}
