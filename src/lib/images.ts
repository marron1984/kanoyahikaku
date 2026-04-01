/**
 * Curated image library using Unsplash free photos.
 * All images are free to use under the Unsplash License.
 *
 * Photo IDs verified by cross-referencing multiple public GitHub repositories
 * and live production websites. Each ID confirmed to exist in at least one
 * real, public source before inclusion.
 */

export interface SiteImage {
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
}

const unsplash = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

// ---------------------------------------------------------------------------
// 1. Hero / Homepage — Kyoto golden temple
// Found in: AA-Japan-Tours, Zen-Traveler, Travel-Agency, l-nder-entdecker,
//           Team-Rocket-Codefest (Kyoto), dudi2009/japan-web
// ---------------------------------------------------------------------------
export const heroHome: SiteImage = {
  src: unsplash("photo-1493976040374-85c8e12f0c0e", 1600, 80),
  alt: "Traditional Japanese temple with warm golden light",
  credit: "Sorasak",
  creditUrl: "https://unsplash.com/@boontohhgraphy",
};

// ---------------------------------------------------------------------------
// 2. Nara deer park
// Found in: asa9874/web-hub (Nara Park with deer)
// ---------------------------------------------------------------------------
export const naraDeer: SiteImage = {
  src: unsplash("photo-1524413159693-3b841b1c4bb9", 1200, 80),
  alt: "Deer in Nara Park, Japan",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 3. Todai-ji temple, Nara
// Found in: asa9874/web-hub (Todai Temple)
// ---------------------------------------------------------------------------
export const todaiji: SiteImage = {
  src: unsplash("photo-1570191935041-923f05351a9a", 1200, 80),
  alt: "Todai-ji Great Buddha in Nara, Japan",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 4. Torii gates / shrine
// Found in: AA-Japan-Tours (Nature), Zen-Traveler, EnzoCinco14
// ---------------------------------------------------------------------------
export const kasugaLanterns: SiteImage = {
  src: unsplash("photo-1478436127897-769e1b3f0f36", 1200, 80),
  alt: "Vermillion torii gates at a Japanese shrine",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 5. Nara cultural landmark (alternate)
// Found in: dudi2009/japan-web (Nara)
// ---------------------------------------------------------------------------
export const ryokanInterior: SiteImage = {
  src: unsplash("photo-1725342239503-35d5b8e029c0", 1200, 80),
  alt: "Traditional Japanese ryokan interior",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 6. Bamboo grove path, Arashiyama
// Found in: AA-Japan-Tours (Culture), Travel-Agency (Japan culture/cuisine)
// ---------------------------------------------------------------------------
export const architectureDetail: SiteImage = {
  src: unsplash("photo-1528360983277-13d401cdc186", 1200, 80),
  alt: "Bamboo grove pathway in Arashiyama, Japan",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 7. Japanese bamboo forest / garden
// Found in: Zen-Traveler (Kyoto hero), EnzoCinco14 (Mt Fuji + cherry),
//           dudi2009/japan-web (Kyoto), Vattghern203/yonaka, Travel-Booking_App-
// ---------------------------------------------------------------------------
export const japaneseGarden: SiteImage = {
  src: unsplash("photo-1589994684942-d66872d82e11", 1200, 80),
  alt: "Zen rock garden at Ryoan-ji, Kyoto",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 8. Kaiseki / Japanese fine dining
// Found in: asa9874/web-hub (Kaiseki formal dinner)
// ---------------------------------------------------------------------------
export const kaisekiDining: SiteImage = {
  src: unsplash("photo-1588647548777-6e6a7183eb42", 1200, 80),
  alt: "Elegant Japanese dining experience",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 9. Cherry blossom / Osaka
// Found in: AA-Japan-Tours (Nature), Team-Rocket-Codefest (Osaka)
// ---------------------------------------------------------------------------
export const cherryBlossom: SiteImage = {
  src: unsplash("photo-1605634543789-9a0d8923f119", 1200, 80),
  alt: "Cherry blossoms and temple scenery in Japan",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 10. Tokyo cityscape at night
// Found in: AA-Japan-Tours (Food & Dining), Zen-Traveler, victormata77/AsiaTrip25
// ---------------------------------------------------------------------------
export const nightLanternStreet: SiteImage = {
  src: unsplash("photo-1540959733332-eab4deabeeaf", 1200, 80),
  alt: "Tokyo cityscape illuminated at night",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 11. Iconic Tokyo Tower view
// Found in: l-nder-entdecker (Japan country), AA-Japan-Tours (Destinations)
// ---------------------------------------------------------------------------
export const traditionalStreet: SiteImage = {
  src: unsplash("photo-1583212292454-1fe6229603b7", 1200, 80),
  alt: "Traditional Japanese street scene",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 12. Kimono / Gion cultural scene
// Found in: AA-Japan-Tours (Culture inline), asa9874/web-hub (shrine)
// ---------------------------------------------------------------------------
export const romanticJapan: SiteImage = {
  src: unsplash("photo-1536599424071-0b215a388ba7", 1200, 80),
  alt: "Romantic cultural scene in Japan",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 13. Japanese sushi / food platter
// Found in: EnzoCinco14/MYPERSONALWEBSITE (Japanese Sushi Platter),
//           AA-Japan-Tours (Food & Dining)
// ---------------------------------------------------------------------------
export const teaCeremony: SiteImage = {
  src: unsplash("photo-1579871494447-9811cf80d66c", 1200, 80),
  alt: "Japanese sushi and culinary experience",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 14. Nara deer group (same park, different angle)
// Found in: Zen-Traveler (Nara: "Ancient temples and friendly deer")
// ---------------------------------------------------------------------------
export const deerGroup: SiteImage = {
  src: unsplash("photo-1667788000333-4e36f948de9a", 1200, 80),
  alt: "Deer and ancient temples in Nara, Japan",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 15. Osaka nightlife / Dotonbori
// Found in: Zen-Traveler (Osaka: street food & nightlife), AA-Japan-Tours
// ---------------------------------------------------------------------------
export const japaneseFoodDetail: SiteImage = {
  src: unsplash("photo-1590559899731-a382839e5549", 1200, 80),
  alt: "Vibrant neon-lit street in Osaka, Japan",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 16. Fushimi Inari torii gates (alternate)
// Found in: AA-Japan-Tours (Travel Tips)
// ---------------------------------------------------------------------------
export const toriiGate: SiteImage = {
  src: unsplash("photo-1601309584882-680470248bc4", 1200, 80),
  alt: "Kiyomizu-dera temple gates in Kyoto",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 17. Hakone / natural scenery
// Found in: Zen-Traveler (Hakone: hot springs and Mt Fuji views)
// ---------------------------------------------------------------------------
export const autumnFoliage: SiteImage = {
  src: unsplash("photo-1492571350019-22de08371fd3", 1200, 80),
  alt: "Hot springs and mountain scenery in Hakone, Japan",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 18. Mount Fuji with cherry blossoms / pagoda
// Found in: Zen-Traveler (Mt Fuji), l-nder-entdecker, Team-Rocket-Codefest
// ---------------------------------------------------------------------------
export const templePagoda: SiteImage = {
  src: unsplash("photo-1490806843957-31f4c9a91c65", 1200, 80),
  alt: "Mount Fuji with cherry blossoms and traditional pagoda",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 19. Bamboo grove (same as architectureDetail — Arashiyama)
// ---------------------------------------------------------------------------
export const naraStreetscape: SiteImage = {
  src: unsplash("photo-1528360983277-13d401cdc186", 1200, 80),
  alt: "Bamboo grove path in Arashiyama, Kyoto",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 20. Japan travel / exploration
// Found in: AA-Japan-Tours (Travel Tips)
// ---------------------------------------------------------------------------
export const japanTravel: SiteImage = {
  src: unsplash("photo-1475938476650-3164675af7da", 1200, 80),
  alt: "Japan travel and exploration scenery",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 21. Couple / cultural Japan (Kyoto travel)
// Found in: code-well0/trip-planner (Kyoto), AA-Japan-Tours (Travel Tips)
// ---------------------------------------------------------------------------
export const coupleJapan: SiteImage = {
  src: unsplash("photo-1524413840807-0c3cb6fa808d", 1200, 80),
  alt: "Kyoto classical temples and gardens",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 22. Japan culture / art
// Found in: AA-Japan-Tours (Culture inline)
// ---------------------------------------------------------------------------
export const japaneseArt: SiteImage = {
  src: unsplash("photo-1526481280693-3bfa7568e0f3", 1200, 80),
  alt: "Japanese cultural landmark and art",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 23. Dotonbori / festival atmosphere (Osaka neon)
// Found in: asa9874/web-hub (Dotonbori nighttime street)
// ---------------------------------------------------------------------------
export const japaneseFestival: SiteImage = {
  src: unsplash("photo-1590256153835-06900f86532d", 1200, 80),
  alt: "Osaka Castle and cultural scenery",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 24. Tokyo / Shibuya cityscape
// Found in: AA-Japan-Tours (Destinations), Team-Rocket-Codefest (Tokyo)
// ---------------------------------------------------------------------------
export const historicNara: SiteImage = {
  src: unsplash("photo-1542051841857-5f90071e7989", 1200, 80),
  alt: "Busy Shibuya crossing in Tokyo at night",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com",
};

// ---------------------------------------------------------------------------
// 25. Tokyo cityscape / modern Japan
// Found in: AA-Japan-Tours (Modern Japan), Team-Rocket-Codefest (Tokyo)
// ---------------------------------------------------------------------------
export const travelPlanning: SiteImage = {
  src: unsplash("photo-1503899036084-c55cdd92da26", 1200, 80),
  alt: "Tokyo cityscape with modern skyscrapers",
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
