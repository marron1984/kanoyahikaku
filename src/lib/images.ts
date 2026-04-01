/**
 * Curated image library using Unsplash free photos.
 * All images are free to use under the Unsplash License.
 * Photo IDs verified from public GitHub repositories (travelchat-ai, Travel-Agency,
 * l-nder-entdecker, Travel-Guide, WhereToNext, kreatale-landing, 268542).
 */

export interface SiteImage {
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
}

const unsplash = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

// --- Hero / Homepage: Japan temple golden light ---
// Verified in: travelchat-ai, kreatale-landing, rapidophilia, l-nder-entdecker (Kyoto)
export const heroHome: SiteImage = {
  src: unsplash("photo-1493976040374-85c8e12f0c0e", 1600, 80),
  alt: "Traditional Japanese temple with warm golden light",
  credit: "Sorasak",
  creditUrl: "https://unsplash.com/@banisakdr",
};

// --- Japan scenic (deer park / nature) ---
// Verified in: easyo1145/268542 (Japan tour category)
export const naraDeer: SiteImage = {
  src: unsplash("photo-1524413840807-0c3cb6fa808d", 1200, 80),
  alt: "Scenic view of Japanese nature and parkland",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Japan cultural landmark ---
// Verified in: easyo1145/268542, sachin-viol/Travel-Agency (Japan tour)
export const todaiji: SiteImage = {
  src: unsplash("photo-1526481280693-3bfa7568e0f3", 1200, 80),
  alt: "Iconic Japanese cultural landmark",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Kyoto temples ---
// Verified in: Jannik-Jonen/l-nder-entdecker (Kyoto Temples blog post)
export const kasugaLanterns: SiteImage = {
  src: unsplash("photo-1526045612212-70caf35c14df", 1200, 80),
  alt: "Historic temple architecture in Kyoto, Japan",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Hotel / ryokan interior ---
// Verified in: Jannik-Jonen/l-nder-entdecker (Pestana Palace hotel)
export const ryokanInterior: SiteImage = {
  src: unsplash("photo-1566073771259-6a8506099945", 1200, 80),
  alt: "Elegant luxury hotel interior",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Bamboo grove path ---
// Verified in: ilicstevan89-ux/WhereToNext, sachin-viol/Travel-Agency (Japan)
export const architectureDetail: SiteImage = {
  src: unsplash("photo-1528360983277-13d401cdc186", 1200, 80),
  alt: "Bamboo grove pathway in Arashiyama, Japan",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Japanese garden / bamboo ---
// Verified in: sachin-viol/Travel-Agency (Japanese Wonders)
export const japaneseGarden: SiteImage = {
  src: unsplash("photo-1545569341-9eb8b30979d9", 1200, 80),
  alt: "Serene bamboo forest path in Japan",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Restaurant / dining ---
// Verified in: Jannik-Jonen/l-nder-entdecker (Belcanto Restaurant)
export const kaisekiDining: SiteImage = {
  src: unsplash("photo-1517248135467-4c7edcad34c4", 1200, 80),
  alt: "Elegant dining restaurant interior",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Japan scenery ---
// Verified in: sachin-viol/Travel-Agency (Japanese Wonders)
export const cherryBlossom: SiteImage = {
  src: unsplash("photo-1504198322253-cfa87a0ff60f", 1200, 80),
  alt: "Beautiful Japanese scenery with natural landscape",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Tokyo cityscape at night ---
// Verified in: nkopp-cmd/travelchat-ai (Tokyo)
export const nightLanternStreet: SiteImage = {
  src: unsplash("photo-1540959733332-eab4deabeeaf", 1200, 80),
  alt: "Tokyo cityscape illuminated at night",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Japan iconic view (Tokyo Tower) ---
// Verified in: Jannik-Jonen/l-nder-entdecker (Japan Country)
export const traditionalStreet: SiteImage = {
  src: unsplash("photo-1480796927426-f609979314bd", 1200, 80),
  alt: "Iconic Tokyo Tower view at night with city lights",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Classic Japan ---
// Verified in: harshitpambhar/Travel-Guide (Classic Japan Package)
export const romanticJapan: SiteImage = {
  src: unsplash("photo-1558981403-c5f9899a28bc", 1200, 80),
  alt: "Classic Japanese cultural scene",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Classic Japan (alternate) ---
// Verified in: harshitpambhar/Travel-Guide (Classic Japan Package)
export const teaCeremony: SiteImage = {
  src: unsplash("photo-1519167758481-83f550bb49b3", 1200, 80),
  alt: "Traditional Japanese cultural experience",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Japan scenic (same as naraDeer) ---
export const deerGroup: SiteImage = {
  src: unsplash("photo-1524413840807-0c3cb6fa808d", 1200, 80),
  alt: "Japanese nature and parkland scenery",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Japan urban / Osaka ---
// Verified in: nkopp-cmd/travelchat-ai
export const japaneseFoodDetail: SiteImage = {
  src: unsplash("photo-1590559899731-a382839e5549", 1200, 80),
  alt: "Vibrant Japanese urban street scene",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Kyoto temples (same as kasugaLanterns) ---
export const toriiGate: SiteImage = {
  src: unsplash("photo-1526045612212-70caf35c14df", 1200, 80),
  alt: "Path through Kyoto temple grounds",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Travel scenery ---
// Verified in: nkopp-cmd/travelchat-ai
export const autumnFoliage: SiteImage = {
  src: unsplash("photo-1536599018102-9f803c140fc1", 1200, 80),
  alt: "Scenic travel destination landscape",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Nature / mountains ---
// Verified in: nkopp-cmd/travelchat-ai
export const templePagoda: SiteImage = {
  src: unsplash("photo-1470004914212-05527e49370b", 1200, 80),
  alt: "Stunning natural landscape with mountains",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Japan bamboo (same as architectureDetail) ---
export const naraStreetscape: SiteImage = {
  src: unsplash("photo-1528360983277-13d401cdc186", 1200, 80),
  alt: "Bamboo grove path in Arashiyama, Kyoto",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Travel / exploration ---
// Verified in: nkopp-cmd/travelchat-ai
export const japanTravel: SiteImage = {
  src: unsplash("photo-1538485399081-7191377e8241", 1200, 80),
  alt: "Travel exploration scenery",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Classic Japan (same as romanticJapan) ---
export const coupleJapan: SiteImage = {
  src: unsplash("photo-1558981403-c5f9899a28bc", 1200, 80),
  alt: "Classic Japanese cultural scene",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Cultural scenery ---
// Verified in: nkopp-cmd/travelchat-ai
export const japaneseArt: SiteImage = {
  src: unsplash("photo-1525625293386-3f8f99389edd", 1200, 80),
  alt: "Cultural travel destination",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Destination scenery ---
// Verified in: nkopp-cmd/travelchat-ai
export const japaneseFestival: SiteImage = {
  src: unsplash("photo-1508009603885-50cf7c579365", 1200, 80),
  alt: "Vibrant travel destination scenery",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Japan cityscape ---
// Verified in: sachin-viol/Travel-Agency (Japanese Wonders)
export const historicNara: SiteImage = {
  src: unsplash("photo-1503899036084-c55cdd92da26", 1200, 80),
  alt: "Japanese city skyline with modern architecture",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// --- Travel planning / destination ---
// Verified in: nkopp-cmd/travelchat-ai
export const travelPlanning: SiteImage = {
  src: unsplash("photo-1596178065887-1198b6148b2b", 1200, 80),
  alt: "Travel destination overview",
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
