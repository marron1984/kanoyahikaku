/**
 * Curated image library using Unsplash free photos.
 * All images are free to use under the Unsplash License.
 *
 * Photo credits:
 *   Timo Volz, Ken Li, Ben George, Diana Lisunova, Yosuke Ota,
 *   Kouji Tsuru, Zeke Tucker, Peter Thomas, Andrea De Santis,
 *   PJH, Rafael AS Martins
 */

export interface SiteImage {
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
}

const unsplash = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

// --- Hero / Homepage: Nara deer + autumn leaves ---
export const heroHome: SiteImage = {
  src: unsplash("photo-1545569341-9eb8b30979d9", 1600, 80),
  alt: "Deer resting in Nara Park surrounded by autumn maple leaves",
  credit: "Timo Volz",
  creditUrl: "https://unsplash.com/@magicpattern",
};

// --- Nara Deer close-up ---
export const naraDeer: SiteImage = {
  src: unsplash("photo-1687279764816-73a0e63284a1", 1200, 80),
  alt: "Close-up of a deer with antlers in Nara, Japan",
  credit: "Ken Li",
  creditUrl: "https://unsplash.com/@kenli0893",
};

// --- Todai-ji Temple reflecting in water ---
export const todaiji: SiteImage = {
  src: unsplash("photo-1738350972741-7a0aeedc94e3", 1200, 80),
  alt: "Todai-ji temple reflecting in a calm lake, Nara",
  credit: "Ben George",
  creditUrl: "https://unsplash.com/@bgphotography",
};

// --- Stone lantern, shrine path ---
export const kasugaLanterns: SiteImage = {
  src: unsplash("photo-1671164877245-0a79c2979b4a", 1200, 80),
  alt: "Moss-covered stone lantern at a Japanese shrine in autumn",
  credit: "Diana Lisunova",
  creditUrl: "https://unsplash.com/@dianalisunova",
};

// --- Japanese ryokan / tatami room ---
export const ryokanInterior: SiteImage = {
  src: unsplash("photo-1729765913537-1e1f9e498bf0", 1200, 80),
  alt: "Traditional Japanese room with shoji screens and tatami mats",
  credit: "Yosuke Ota",
  creditUrl: "https://unsplash.com/@y0ta",
};

// --- Japanese wooden corridor / architecture ---
export const architectureDetail: SiteImage = {
  src: unsplash("photo-1731916712068-f0b67e4e07d9", 1200, 80),
  alt: "Long wooden corridor in traditional Japanese architecture",
  credit: "Kouji Tsuru",
  creditUrl: "https://unsplash.com/@pafuxu",
};

// --- Japanese garden: zen, raked sand ---
export const japaneseGarden: SiteImage = {
  src: unsplash("photo-1734614797918-68e972755d14", 1200, 80),
  alt: "Tranquil Japanese garden with raked sand and moss",
  credit: "PJH",
  creditUrl: "https://unsplash.com/@pjh",
};

// --- Japanese food / kaiseki ---
export const kaisekiDining: SiteImage = {
  src: unsplash("photo-1735907364728-043cf94f7193", 1200, 80),
  alt: "Elegant Japanese multi-course dinner with seasonal presentation",
  credit: "Kouji Tsuru",
  creditUrl: "https://unsplash.com/@pafuxu",
};

// --- Cherry blossom + temple ---
export const cherryBlossom: SiteImage = {
  src: unsplash("photo-1745356596048-62ae0261feab", 1200, 80),
  alt: "Cherry blossoms framing a traditional Japanese temple",
  credit: "Zeke Tucker",
  creditUrl: "https://unsplash.com/@zeketucker",
};

// --- Night lantern-lit alleyway ---
export const nightLanternStreet: SiteImage = {
  src: unsplash("photo-1741441365084-fdd26fa4aa64", 1200, 80),
  alt: "Cozy lantern-lit alleyway in Japan at night",
  credit: "Peter Thomas",
  creditUrl: "https://unsplash.com/@lifeof_peter_",
};

// --- Naramachi-style traditional street ---
export const traditionalStreet: SiteImage = {
  src: unsplash("photo-1743690892536-24e70ce39bfe", 1200, 80),
  alt: "Narrow alleyway in a historic Japanese town",
  credit: "Diego Retamal",
  creditUrl: "https://unsplash.com/@diegoretamal",
};

// --- Couple in kimono / romantic ---
export const romanticJapan: SiteImage = {
  src: unsplash("photo-1711367465953-c6e26c83bfec", 1200, 80),
  alt: "Couple in traditional kimono with umbrellas in Kyoto",
  credit: "Andrea De Santis",
  creditUrl: "https://unsplash.com/@santesson89",
};

// --- Tea ceremony ---
export const teaCeremony: SiteImage = {
  src: unsplash("photo-1536411396596-afed9fa3c1b2", 1200, 80),
  alt: "Woman seated in a traditional Japanese tea ceremony room",
  credit: "Unsplash",
  creditUrl: "https://unsplash.com/photos/lscGvpiDBLA",
};

// --- Five deer group at Nara Park ---
export const deerGroup: SiteImage = {
  src: unsplash("photo-1481727835183-3091fbb3c8bd", 1200, 80),
  alt: "Group of deer resting in Nara Park",
  credit: "Carl Flor",
  creditUrl: "https://unsplash.com/@carlflor",
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
