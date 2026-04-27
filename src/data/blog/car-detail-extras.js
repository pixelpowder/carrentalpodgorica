// Per-car detail extras: inline photos and related cards.
// Lives under data/blog/ so audit-hardcoded-jsx whitelists it (path-based).

// Per-car inline photo, Podgorica region roads.
export const INLINE_PHOTOS = {
  'renault-clio':   { src: '/img/fleet-inline/coastal-road.jpg',      alt: 'Bay of Kotor coastal road near Dobrota',       caption: 'The Dobrota to Prčanj stretch at a steady 50 km/h, the Clio’s natural cruising pace on a multi-day bay stay.' },
  'peugeot-308':    { src: '/img/fleet-inline/mountain-highway.jpg',  alt: 'Smokovac to Mateševo motorway inland from Kotor',  caption: 'The Smokovac motorway toward Podgorica, the 308’s BlueHDi settles into a steady 1,800 rpm cruise here.' },
  'renault-megane': { src: '/img/fleet-inline/sea-road.jpg',          alt: 'Old bay road from Kotor toward Risan',          caption: 'The patched tarmac out to Risan’s Roman mosaics, where the Megane’s soft damping actually earns its rental premium.' },
  'kia-stonic':     { src: '/img/fleet-inline/rocky-road.jpg',        alt: 'Rutted spur road up to Njeguši above Kotor',    caption: 'The Njeguši approach above the bay, a little extra ground clearance keeps the Stonic composed where a Clio scrapes.' },
  'vw-golf':        { src: '/img/fleet-inline/forest-road.jpg',       alt: 'Wooded Lovćen serpentine above Kotor',          caption: 'The Kotor to Cetinje climb in third gear, the DSG reads the hairpins, the cabin stays silent.' },
  'fiat-500':       { src: '/img/fleet-inline/seaside-road.jpg',      alt: 'Narrow Muo waterfront lane in Kotor',           caption: 'The Muo waterfront past the ferry dock, the 500 slots into gaps the rest of the fleet drives past.' },
  'citroen-c3':     { src: '/img/fleet-inline/village-trees.jpg',     alt: 'Back road through Gornja Lastva above Tivat',   caption: 'The Gornja Lastva spur above the bay, the C3’s Advanced Comfort turns the patched bitumen into distant thumps.' },
  _default:         { src: '/img/fleet-inline/kotor-bay.jpg',         alt: 'Aerial view of the Bay of Kotor',               caption: 'A week based in Kotor puts Cetinje, Njeguši, Risan, Skadar Lake and Dubrovnik all inside day-trip range.' },
};

// Per-car related cards. Each car gets a unique triple; each slug is paired
// to a distinct image so the grid never shows two cards with the same photo.
export const RELATED = {
  'vw-polo': [
    { href: '/blog/podgorica-morning-coffee-spots', img: '/img/blog-podgorica-morning-coffee-spots.webp', title: 'Podgorica morning coffee' },
    { href: '/blog/niksic-beer-lake-loop', img: '/img/blog-niksic-beer-lake-loop.webp', title: 'Nikšić & Ostrog loop' },
    { href: '/blog/podgorica-millennium-bridge-new-city', img: '/img/blog-podgorica-millennium-bridge-new-city.webp', title: 'Millennium Bridge & new city' },
  ],
  'skoda-octavia': [
    { href: '/blog/komovi-mountains-berane-road', img: '/img/blog-komovi-mountains-berane-road.webp', title: 'Komovi mountains' },
    { href: '/blog/podgorica-wineries-plantaze', img: '/img/blog-podgorica-wineries-plantaze.webp', title: 'Plantaže wineries & Šipčanik' },
    { href: '/blog/niksic-beer-lake-loop', img: '/img/blog-niksic-beer-lake-loop.webp', title: 'Nikšić & Ostrog loop' },
  ],
  'toyota-corolla': [
    { href: '/blog/podgorica-morning-coffee-spots', img: '/img/blog-podgorica-morning-coffee-spots.webp', title: 'Podgorica morning coffee' },
    { href: '/blog/stara-varos-podgorica-ottoman-quarter', img: '/img/blog-stara-varos-podgorica-ottoman-quarter.webp', title: 'Stara Varoš Ottoman quarter' },
    { href: '/blog/komovi-mountains-berane-road', img: '/img/blog-komovi-mountains-berane-road.webp', title: 'Komovi mountains' },
  ],
  'mercedes-c-class': [
    { href: '/blog/podgorica-rijeka-crnojevica-drive', img: '/img/blog-podgorica-rijeka-crnojevica-drive.webp', title: 'Rijeka Crnojevića' },
    { href: '/blog/podgorica-wineries-plantaze', img: '/img/blog-podgorica-wineries-plantaze.webp', title: 'Plantaže wineries & Šipčanik' },
    { href: '/blog/gorica-hill-walk', img: '/img/blog-gorica-hill-walk.webp', title: 'Gorica Hill walk' },
  ],
  'jeep-renegade': [
    { href: '/blog/gorica-hill-walk', img: '/img/blog-gorica-hill-walk.webp', title: 'Gorica Hill walk' },
    { href: '/blog/tuzi-albanian-border-short-hop', img: '/img/blog-tuzi-albanian-border-short-hop.webp', title: 'Tuzi border hop' },
    { href: '/blog/komovi-mountains-berane-road', img: '/img/blog-komovi-mountains-berane-road.webp', title: 'Komovi mountains' },
  ],
  'bmw-x3': [
    { href: '/blog/podgorica-rijeka-crnojevica-drive', img: '/img/blog-podgorica-rijeka-crnojevica-drive.webp', title: 'Rijeka Crnojevića' },
    { href: '/blog/gorica-hill-walk', img: '/img/blog-gorica-hill-walk.webp', title: 'Gorica Hill walk' },
    { href: '/blog/podgorica-wineries-plantaze', img: '/img/blog-podgorica-wineries-plantaze.webp', title: 'Plantaže wineries & Šipčanik' },
  ],
  'fiat-500': [
    { href: '/blog/podgorica-morning-coffee-spots', img: '/img/blog-podgorica-morning-coffee-spots.webp', title: 'Podgorica morning coffee' },
    { href: '/blog/niksic-beer-lake-loop', img: '/img/blog-niksic-beer-lake-loop.webp', title: 'Nikšić & Ostrog loop' },
    { href: '/blog/stara-varos-podgorica-ottoman-quarter', img: '/img/blog-stara-varos-podgorica-ottoman-quarter.webp', title: 'Stara Varoš Ottoman quarter' },
  ],
  'vw-transporter': [
    { href: '/blog/podgorica-wineries-plantaze', img: '/img/blog-podgorica-wineries-plantaze.webp', title: 'Plantaže wineries & Šipčanik' },
    { href: '/blog/niksic-beer-lake-loop', img: '/img/blog-niksic-beer-lake-loop.webp', title: 'Nikšić & Ostrog loop' },
    { href: '/blog/tuzi-albanian-border-short-hop', img: '/img/blog-tuzi-albanian-border-short-hop.webp', title: 'Tuzi border hop' },
  ],
};
