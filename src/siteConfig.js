const siteConfig = {
  name: "Podgorica Car Rental",
  tagline: "Drive from Montenegro's Capital",
  domain: "carrentalpodgorica.com",
  phone: "",
  email: "info@carrentalpodgorica.com",
  address: "Tabacina BB, Kotor, 85330",

  hero: {
    headline: "Podgorica Car Rental — Montenegro's Capital",
    subheadline: "Pick up at Podgorica Airport — gateway to Durmitor, Lake Skadar, and the Adriatic coast.",
    image: "/img/hero-podgorica.webp",
  },

  cars: [
    { id: 1, slug: "vw-polo", name: "VW Polo", category: "Economy", price: 25, image: "/img/pexels-1035108.jpg", seats: 5, transmission: "Manual", fuel: "Petrol", doors: 4, luggage: 2, ac: true, features: ["Air Conditioning", "Bluetooth Audio", "USB Charging", "Central Locking"], popular: false },
    { id: 2, slug: "skoda-octavia", name: "Skoda Octavia", category: "Mid-Size", price: 35, image: "/img/pexels-116675.jpg", seats: 5, transmission: "Automatic", fuel: "Diesel", doors: 4, luggage: 4, ac: true, features: ["Automatic Transmission", "Cruise Control", "Parking Sensors", "Large Boot"], popular: true },
    { id: 3, slug: "toyota-corolla", name: "Toyota Corolla", category: "Mid-Size", price: 38, image: "/img/pexels-170811.jpg", seats: 5, transmission: "Automatic", fuel: "Hybrid", doors: 4, luggage: 3, ac: true, features: ["Hybrid Engine", "Reversing Camera", "Apple CarPlay", "Keyless Start"], popular: false },
    { id: 4, slug: "mercedes-c-class", name: "Mercedes C-Class", category: "Premium", price: 65, image: "/img/pexels-120049.jpg", seats: 5, transmission: "Automatic", fuel: "Diesel", doors: 4, luggage: 3, ac: true, features: ["Leather Seats", "Navigation System", "Premium Sound", "Heated Seats"], popular: true },
    { id: 5, slug: "jeep-renegade", name: "Jeep Renegade", category: "SUV", price: 55, image: "/img/pexels-1638459.jpg", seats: 5, transmission: "Automatic", fuel: "Diesel", doors: 4, luggage: 3, ac: true, features: ["4x4 Drive", "Hill Descent Control", "Roof Rails", "Off-Road Mode"], popular: false },
    { id: 6, slug: "bmw-x3", name: "BMW X3", category: "Premium SUV", price: 85, image: "/img/pexels-892522.jpg", seats: 5, transmission: "Automatic", fuel: "Diesel", doors: 4, luggage: 4, ac: true, features: ["Panoramic Roof", "Adaptive Cruise", "360 Camera", "Sport Mode"], popular: false },
    { id: 7, slug: "fiat-500", name: "Fiat 500", category: "City", price: 20, image: "/img/pexels-1007410.jpg", seats: 4, transmission: "Manual", fuel: "Petrol", doors: 2, luggage: 1, ac: true, features: ["Compact Size", "Easy Parking", "Sunroof", "Bluetooth"], popular: false },
    { id: 8, slug: "vw-transporter", name: "VW Transporter", category: "Van", price: 70, image: "/img/pexels-2533092.jpg", seats: 9, transmission: "Manual", fuel: "Diesel", doors: 4, luggage: 6, ac: true, features: ["9 Seats", "Airport Shuttle Ready", "Sliding Doors", "Ample Storage"], popular: false },
  ],

  features: [
    { icon: "map-pin", title: "Airport Pickup", description: "Keys in hand within 10 minutes of landing at TGD. The mountains are waiting." },
    { icon: "shield-check", title: "Full Insurance", description: "Full coverage with zero excess option — built for mountain switchbacks, canyon roads, and everything in between." },
    { icon: "clock", title: "24/7 Support", description: "Snowed in above Zabljak? We've seen it before. Call any time." },
    { icon: "ban", title: "No Hidden Fees", description: "Winter extras like snow chains are priced upfront, never added at the counter. What you see is what you pay." },
    { icon: "refresh-cw", title: "Free Cancellation", description: "Ryanair rescheduled? Mountain pass closed by snow? Cancel up to 24 hours before for a full refund." },
    { icon: "globe", title: "Cross-Border", description: "Serbia (Prijepolje, 2 hrs), Albania (Shkodra, 1.5 hrs), Kosovo (Pec, 3 hrs) — Green Card included, just tell us at booking." },
  ],

  testimonials: [
    { name: "Erik & Marte Solberg", location: "Oslo, Norway", text: "We flew into TGD specifically to hike Durmitor and walk the rim of Tara Canyon. The 4x4 was ready in minutes and handled the mountain roads to Zabljak without a single complaint. Booking was simple and the price was better than anything we found back home.", rating: 5, avatar: "/img/avatar-1.webp" },
    { name: "Lukas Berger", location: "Vienna, Austria", text: "Solo road trip from Podgorica Airport up through Moraca Canyon to Ostrog Monastery — one of the most dramatic drives I've ever done. The car was immaculate and picking it up at TGD took less than 10 minutes. I'll use this service every time I fly Wizz Air into Montenegro.", rating: 5, avatar: "/img/avatar-2.webp" },
    { name: "Beatriz & Joana", location: "Lisbon, Portugal", text: "We booked a beach trip but ended up spending two days exploring Lake Skadar wine villages and somehow found ourselves on a mountain road above Cetinje at sunset. Best accidental detour ever. The car made it all possible and the booking was completely stress-free.", rating: 5, avatar: "/img/avatar-3.webp" },
  ],

  faq: [
    { q: "What documents do I need?", a: "A valid driving licence showing Latin-script details, your passport, and a physical credit card issued in the main driver's name. If your licence was issued outside the EU, an International Driving Permit is strongly recommended alongside your national licence. Photocopies and digital licences stored on a phone are not accepted at pickup." },
    { q: "Can I drive to Serbia or Albania?", a: "Yes — cross-border travel is permitted to Serbia, Albania, Kosovo, Bosnia, and Croatia. The main border crossings near Podgorica are Dracenovac for Serbia and Hani i Hotit for Albania. Let us know at booking so we can prepare the Green Card and any additional paperwork in advance." },
    { q: "Is there a minimum age?", a: "The minimum rental age is 21, with at least 2 years of driving experience. Drivers aged 21-24 pay a young driver supplement; the exact rate depends on the vehicle category and is shown clearly during the search before you confirm anything." },
    { q: "What's included in the price?", a: "All vehicles include third-party liability insurance, and most include CDW in the base rate. VAT, the mandatory equipment kit, and a clearly stated fuel policy are all included. Mileage terms vary by vehicle and are shown before booking. Zero-excess upgrades are available as an add-on." },
    { q: "How does pickup work at TGD?", a: "Podgorica Airport (TGD) is a compact single-terminal building — arrivals are straightforward. Our agent meets you in the arrivals hall holding a board with your name. The car is parked just outside the terminal. From wheels-down to driving away typically takes under 10 minutes." },
    { q: "Can I drop off at a different location?", a: "Yes — one-way rentals are available across 28 destinations in Montenegro. Choose your preferred pickup and dropoff points during booking. One-way fees, where they apply, are shown transparently before you confirm." },
    { q: "What is the cancellation policy?", a: "Standard vehicles: free cancellation up to 7 days before pickup. Luxury cars and convertibles: free cancellation up to 30 days before. A 6% payment processing fee applies to all cancellations regardless of timing." },
    { q: "Is a deposit required?", a: "Deposit requirements at TGD vary between zero and \u20AC300 depending on the vehicle tier. The deposit must be blocked on a physical credit card in the main driver's name at the time of pickup, and is fully released once the car is returned undamaged." },
    { q: "What happens if I exceed the mileage limit?", a: "Vehicles with a kilometre cap charge a per-km rate for any distance above the agreed limit. The rate is listed in the vehicle terms before you book." },
    { q: "Do I need snow chains for mountain roads?", a: "From November to March, snow chains or winter tyres are legally required on mountain roads above 1,000 m in Montenegro. This includes the road to Zabljak and Durmitor National Park." },
    { q: "How much do I pay upfront?", a: "A deposit of 15-20% of the total rental cost is charged at booking to secure your reservation. The rest is settled directly with the rental agent at TGD pickup." },
    { q: "Can I rent without a credit card?", a: "A small number of vehicles in our fleet are available to renters without a credit card — these are clearly marked in the search results." },
  ],

  locations: [
    { name: "Podgorica Airport", tag: "Most Popular" },
    { name: "City Centre", tag: "" },
    { name: "Millennium Bridge Area", tag: "" },
  ],

  destinations: [
    { name: "Plantaže Wineries", slug: "blog/podgorica-wineries-plantaze", tag: "15 min drive", desc: "Europe's largest single vineyard plus the Šipčanik wine tunnel carved from an old underground aircraft hangar.", image: "/img/blog-podgorica-wineries-plantaze.webp" },
    { name: "Gorica Hill", slug: "blog/gorica-hill-walk", tag: "City centre", desc: "The wooded hill the capital takes its name from — trails, a WWII memorial, and a 360° view of the Zeta plain.", image: "/img/blog-gorica-hill-walk.webp" },
    { name: "Rijeka Crnojevića", slug: "blog/podgorica-rijeka-crnojevica-drive", tag: "Pavlova Strana", desc: "Montenegro's most-photographed viewpoint — the Pavlova Strana horseshoe bend above Lake Skadar.", image: "/img/blog-podgorica-rijeka-crnojevica-drive.webp" },
    { name: "Stara Varoš", slug: "blog/stara-varos-podgorica-ottoman-quarter", tag: "Old quarter", desc: "Podgorica's Ottoman-era quarter — the clock tower, the Osmanagić mosque, and the lanes that survived the wars.", image: "/img/blog-stara-varos-podgorica-ottoman-quarter.webp" },
    { name: "Nikšić & Ostrog", slug: "blog/niksic-beer-lake-loop", tag: "Day loop", desc: "Montenegro's second city, the brewery behind Nikšićko pivo, a swim at Krupac, and Ostrog on the drive back.", image: "/img/blog-niksic-beer-lake-loop.webp" },
    { name: "Komovi Mountains", slug: "blog/komovi-mountains-berane-road", tag: "Wild east", desc: "The twin pyramids of Kom Kučki and Kom Vasojevićki above 2,400 m — a long mountain-road day toward Berane.", image: "/img/blog-komovi-mountains-berane-road.webp" },
    { name: "Millennium Bridge", slug: "blog/podgorica-millennium-bridge-new-city", tag: "New city", desc: "The cable-stayed bridge over the Morača, the cathedral of Hristovo Vaskrsenje, and where to park to see all three.", image: "/img/blog-podgorica-millennium-bridge-new-city.webp" },
    { name: "Tuzi", slug: "blog/tuzi-albanian-border-short-hop", tag: "15 km south", desc: "Fifteen kilometres from the capital and a different Montenegro — Malësia mountains, Albanian bakeries, Hani i Hotit crossing.", image: "/img/blog-tuzi-albanian-border-short-hop.webp" },
  ],
};

export default siteConfig;
