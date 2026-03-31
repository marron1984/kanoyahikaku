/**
 * Curated image library using Unsplash free photos.
 * All images are free to use under the Unsplash License.
 * Attribution is provided in the site footer and on this file.
 */

export interface SiteImage {
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
}

const unsplash = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

// --- Hero / Homepage ---
export const heroHome: SiteImage = {
  src: unsplash("photo-1545569341-9eb8b30979d9", 1600, 80),
  alt: "Deer resting peacefully in Nara Park surrounded by autumn trees",
  credit: "Sora Sagano",
  creditUrl: "https://unsplash.com/@sorasagano",
};

// --- Nara Deer ---
export const naraDeer: SiteImage = {
  src: unsplash("photo-1528360983277-13d401cdc186", 1200, 80),
  alt: "Deer in Nara Park at dawn",
  credit: "Timo Volz",
  creditUrl: "https://unsplash.com/@magicpattern",
};

export const naraDeerClose: SiteImage = {
  src: unsplash("photo-1524758631624-e2822e304c36", 800, 80),
  alt: "Close-up of a Nara deer in soft light",
  credit: "Christoph Schmid",
  creditUrl: "https://unsplash.com/@chriss83",
};

// --- Todai-ji Temple ---
export const todaiji: SiteImage = {
  src: unsplash("photo-1590559899731-a382cb71f1f5", 1200, 80),
  alt: "Todai-ji temple exterior in Nara, Japan",
  credit: "Alejandro Luengo",
  creditUrl: "https://unsplash.com/@aluengo91",
};

// --- Kasuga Taisha / Stone lanterns ---
export const kasugaLanterns: SiteImage = {
  src: unsplash("photo-1478436127897-769e1b3f0f36", 1200, 80),
  alt: "Stone lanterns along a forest path at a Japanese shrine",
  credit: "Roméo A.",
  creditUrl: "https://unsplash.com/@gronemo",
};

// --- Japanese ryokan / tatami room ---
export const ryokanInterior: SiteImage = {
  src: unsplash("photo-1580237541049-2d715a09486e", 1200, 80),
  alt: "Traditional Japanese room with tatami mats and shoji screens",
  credit: "Yosuke Ota",
  creditUrl: "https://unsplash.com/@y0ta",
};

// --- Japanese garden ---
export const japaneseGarden: SiteImage = {
  src: unsplash("photo-1464823063530-08f10ed1a2dd", 1200, 80),
  alt: "Tranquil Japanese moss garden with stone path",
  credit: "Sven Brandsma",
  creditUrl: "https://unsplash.com/@seffen99",
};

// --- Japanese food / kaiseki ---
export const kaisekiDining: SiteImage = {
  src: unsplash("photo-1553621042-f6e147245754", 1200, 80),
  alt: "Japanese multi-course kaiseki dinner with seasonal ingredients",
  credit: "Jiarong Deng",
  creditUrl: "https://unsplash.com/@jiarongdeng",
};

// --- Autumn foliage ---
export const autumnFoliage: SiteImage = {
  src: unsplash("photo-1576675466969-38eeae4b41f6", 1200, 80),
  alt: "Red Japanese temple structure surrounded by autumn foliage",
  credit: "Belle Co",
  creditUrl: "https://unsplash.com/@belleco",
};

// --- Cherry blossom ---
export const cherryBlossom: SiteImage = {
  src: unsplash("photo-1522383225653-ed111181a951", 1200, 80),
  alt: "Cherry blossoms framing a traditional Japanese temple",
  credit: "Tianshu Liu",
  creditUrl: "https://unsplash.com/@tianshu",
};

// --- Night lantern street ---
export const nightLanternStreet: SiteImage = {
  src: unsplash("photo-1553621042-f6e147245754", 1200, 80),
  alt: "Lantern-lit Japanese alleyway at night",
  credit: "Rafael AS Martins",
  creditUrl: "https://unsplash.com/@rafaelmartins",
};

export const nightStreet: SiteImage = {
  src: unsplash("photo-1545569341-9eb8b30979d9", 1200, 80),
  alt: "Quiet Japanese street at dusk",
  credit: "Sora Sagano",
  creditUrl: "https://unsplash.com/@sorasagano",
};

// --- Japanese architecture detail ---
export const architectureDetail: SiteImage = {
  src: unsplash("photo-1480796927426-f609979314bd", 1200, 80),
  alt: "Traditional Japanese wooden architecture detail",
  credit: "Luca Bravo",
  creditUrl: "https://unsplash.com/@lucabravo",
};

// --- Tea ceremony ---
export const teaCeremony: SiteImage = {
  src: unsplash("photo-1536256263959-770b48d82b0a", 1200, 80),
  alt: "Japanese matcha tea preparation in a ceramic bowl",
  credit: "Masaaki Komori",
  creditUrl: "https://unsplash.com/@gaspanik",
};

// --- Romantic / couple-like calm scene ---
export const romanticGarden: SiteImage = {
  src: unsplash("photo-1490806843957-31f4c9a91c65", 1200, 80),
  alt: "Serene Japanese garden view at golden hour",
  credit: "Atul Vinayak",
  creditUrl: "https://unsplash.com/@atulvi",
};

// --- Mapped by use context for easy component access ---
export const siteImages = {
  heroHome,
  naraDeer,
  naraDeerClose,
  todaiji,
  kasugaLanterns,
  ryokanInterior,
  japaneseGarden,
  kaisekiDining,
  autumnFoliage,
  cherryBlossom,
  nightLanternStreet,
  nightStreet,
  architectureDetail,
  teaCeremony,
  romanticGarden,
} as const;

/** Map stay slugs to their hero images */
export const stayImages: Record<string, SiteImage> = {
  kanoya: ryokanInterior,
  "nara-komachi": architectureDetail,
  asukasou: japaneseGarden,
  "noborioji-hotel": todaiji,
  "gyoki-an": kasugaLanterns,
};

/** Map experience slugs to their hero images */
export const experienceImages: Record<string, SiteImage> = {
  "early-morning-deer-walk": naraDeer,
  "quiet-nara-at-night": nightStreet,
  "cultural-immersion-stay": kasugaLanterns,
  "romantic-stay-in-nara": romanticGarden,
  "slow-travel-in-nara": japaneseGarden,
};
