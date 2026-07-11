export type Product = {
  slug: string;
  name: string;
  category: "Nursery & Infant" | "Everyday Essentials" | "Growing Years" | "Play";
  ageRange: string;
  price: number;
  cert: string;
  description: string;
  specs: { label: string; value: string }[];
  stock: number;
  image?: string;
  badge?: "New" | "Hot" | "Sale" | "Low Stock";
};

export const PRODUCT_IMAGES: Record<string, string> = {
  "rowan-3in1-convertible-car-seat": "https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=1000&q=80",
  "amara-foldable-travel-stroller": "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1000&q=80",
  "nia-baby-feeding-set": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1000&q=80",
  "jamii-cotton-sleepsuit-pack": "https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?w=1000&q=80",
  "kito-16-inch-kids-bike": "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1000&q=80",
  "nuru-wooden-learning-desk": "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?w=1000&q=80",
  "safari-scooter-3-wheel": "https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?w=1000&q=80",
  "duru-wooden-shape-sorter": "https://images.unsplash.com/photo-1515488042361-404e9250afef?w=1000&q=80",
  "twiga-outdoor-climbing-frame": "https://images.unsplash.com/photo-1581579438747-1dc8d1e0ca96?w=1000&q=80",
  // New products
  "punda-power-quad-bike": "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1000&q=80",
  "simba-electric-ride-on-car": "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=1000&q=80",
  "chui-rc-racing-car": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80",
  "tembo-play-tent": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=1000&q=80",
  "kipindi-baby-walker": "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1000&q=80",
  "jenga-building-blocks-set": "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=1000&q=80",
  "nyumba-wooden-doll-house": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1000&q=80",
  "bembea-garden-swing-set": "https://images.unsplash.com/photo-1576769562804-455efad26b4a?w=1000&q=80",
};

export const PRODUCTS: Product[] = [
  // ── Nursery & Infant ─────────────────────────────────────────────────────────
  {
    slug: "rowan-3in1-convertible-car-seat",
    name: "Rowan 3-in-1 Convertible Car Seat",
    category: "Nursery & Infant",
    ageRange: "0 to 4 yrs",
    price: 24500,
    cert: "UN R129 certified",
    description:
      "Converts from rear-facing infant seat to forward-facing to booster, built to last through four years of actual use rather than four months.",
    specs: [
      { label: "Weight range", value: "0 to 36 kg" },
      { label: "Installation", value: "ISOFIX or seatbelt" },
      { label: "Certification", value: "UN R129 (i-Size)" },
      { label: "Warranty", value: "2 years" },
    ],
    stock: 14,
    image: PRODUCT_IMAGES["rowan-3in1-convertible-car-seat"],
    badge: "Hot",
  },
  {
    slug: "amara-foldable-travel-stroller",
    name: "Amara Foldable Travel Stroller",
    category: "Nursery & Infant",
    ageRange: "0 to 3 yrs",
    price: 13900,
    cert: "ASTM tested",
    description:
      "One-hand fold, airline cabin compatible, and light enough to carry up a flight of stairs when the lift is out.",
    specs: [
      { label: "Folded size", value: "52 x 30 x 26 cm" },
      { label: "Weight", value: "6.8 kg" },
      { label: "Max child weight", value: "22 kg" },
      { label: "Warranty", value: "1 year" },
    ],
    stock: 22,
    image: PRODUCT_IMAGES["amara-foldable-travel-stroller"],
  },
  {
    slug: "kipindi-baby-walker",
    name: "Kipindi Adjustable Baby Walker",
    category: "Nursery & Infant",
    ageRange: "6 to 18 months",
    price: 4200,
    cert: "ASTM F977 certified",
    description:
      "Three-height adjustable frame, non-slip rubber base, removable activity tray with sensory toys. Folds flat for storage.",
    specs: [
      { label: "Height settings", value: "3" },
      { label: "Max weight", value: "13 kg" },
      { label: "Tray", value: "Removable, BPA-free" },
      { label: "Wheels", value: "6 directional" },
    ],
    stock: 30,
    image: PRODUCT_IMAGES["kipindi-baby-walker"],
    badge: "New",
  },

  // ── Everyday Essentials ───────────────────────────────────────────────────────
  {
    slug: "nia-baby-feeding-set",
    name: "Nia Baby Feeding Starter Set",
    category: "Everyday Essentials",
    ageRange: "0 to 1 yrs",
    price: 3200,
    cert: "BPA-free, food-grade",
    description:
      "Bottles, weaning spoons, and a bib in one set, sized for the first year and dishwasher safe.",
    specs: [
      { label: "Pieces", value: "9" },
      { label: "Material", value: "BPA-free polypropylene" },
      { label: "Dishwasher safe", value: "Yes" },
    ],
    stock: 40,
    image: PRODUCT_IMAGES["nia-baby-feeding-set"],
  },
  {
    slug: "jamii-cotton-sleepsuit-pack",
    name: "Jamii Organic Cotton Sleepsuit, 3-Pack",
    category: "Everyday Essentials",
    ageRange: "0 to 2 yrs",
    price: 2800,
    cert: "OEKO-TEX certified cotton",
    description: "Soft, breathable, and built to survive daily washes without losing shape.",
    specs: [
      { label: "Material", value: "100% organic cotton" },
      { label: "Sizes", value: "0 to 3m, 3 to 6m, 6 to 12m" },
    ],
    stock: 55,
    image: PRODUCT_IMAGES["jamii-cotton-sleepsuit-pack"],
  },

  // ── Growing Years ─────────────────────────────────────────────────────────────
  {
    slug: "kito-16-inch-kids-bike",
    name: "Kito 16-inch Kids Bike",
    category: "Growing Years",
    ageRange: "4 to 7 yrs",
    price: 8700,
    cert: "EN 14765 certified",
    description: "Training wheels included, low step-through frame, and brakes sized for smaller hands.",
    specs: [
      { label: "Wheel size", value: "16 inch" },
      { label: "Frame", value: "Steel, low step-through" },
      { label: "Includes", value: "Training wheels, bell" },
    ],
    stock: 18,
    image: PRODUCT_IMAGES["kito-16-inch-kids-bike"],
    badge: "Hot",
  },
  {
    slug: "nuru-wooden-learning-desk",
    name: "Nuru Wooden Learning Desk",
    category: "Growing Years",
    ageRange: "5 to 10 yrs",
    price: 11200,
    cert: "FSC certified wood",
    description: "Adjustable height across three settings, built to move up with your child through primary school.",
    specs: [
      { label: "Height settings", value: "3" },
      { label: "Material", value: "FSC certified pine" },
      { label: "Assembly", value: "Required, tools included" },
    ],
    stock: 9,
    image: PRODUCT_IMAGES["nuru-wooden-learning-desk"],
    badge: "Low Stock",
  },
  {
    slug: "safari-scooter-3-wheel",
    name: "Safari 3-Wheel Scooter",
    category: "Growing Years",
    ageRange: "3 to 6 yrs",
    price: 4900,
    cert: "EN 71 certified",
    description: "Lean-to-steer design that's easier for younger kids to control than a standard two-wheel scooter.",
    specs: [
      { label: "Max weight", value: "25 kg" },
      { label: "Wheels", value: "3, LED light-up front" },
    ],
    stock: 26,
    image: PRODUCT_IMAGES["safari-scooter-3-wheel"],
  },
  {
    slug: "punda-power-quad-bike",
    name: "Punda Power Quad Bike",
    category: "Growing Years",
    ageRange: "3 to 8 yrs",
    price: 18500,
    cert: "EN 71 certified, CE marked",
    description:
      "Battery-powered 4-wheel quad bike with parental remote override, forward/reverse gears, and chunky all-terrain wheels. Handles Nairobi's varied surfaces.",
    specs: [
      { label: "Battery", value: "12V 7Ah" },
      { label: "Speed", value: "3 to 5 km/h" },
      { label: "Runtime", value: "Up to 90 minutes" },
      { label: "Max weight", value: "30 kg" },
      { label: "Remote override", value: "Included" },
    ],
    stock: 12,
    image: PRODUCT_IMAGES["punda-power-quad-bike"],
    badge: "Hot",
  },
  {
    slug: "simba-electric-ride-on-car",
    name: "Simba Electric Ride-On Car",
    category: "Growing Years",
    ageRange: "2 to 5 yrs",
    price: 14900,
    cert: "CE certified, EN 71-8",
    description:
      "Licensed-style electric car with working headlights, MP3 aux input, horn sound effects, and a parental remote control. Fits two toddlers side by side.",
    specs: [
      { label: "Battery", value: "6V 4.5Ah" },
      { label: "Seats", value: "2 (side by side)" },
      { label: "Speed", value: "2.5 km/h max" },
      { label: "Music", value: "Built-in speaker, USB/AUX" },
      { label: "Remote", value: "2.4GHz parental" },
    ],
    stock: 8,
    image: PRODUCT_IMAGES["simba-electric-ride-on-car"],
    badge: "New",
  },
  {
    slug: "chui-rc-racing-car",
    name: "Chui RC Racing Car",
    category: "Growing Years",
    ageRange: "5 to 12 yrs",
    price: 5800,
    cert: "CE certified",
    description:
      "1:16 scale remote-control racing car with 2.4GHz interference-free remote, 20 km/h top speed, and full suspension system for smooth cornering.",
    specs: [
      { label: "Scale", value: "1:16" },
      { label: "Speed", value: "Up to 20 km/h" },
      { label: "Remote range", value: "30 metres" },
      { label: "Battery", value: "7.4V Li-ion, USB charge" },
    ],
    stock: 35,
    image: PRODUCT_IMAGES["chui-rc-racing-car"],
  },

  // ── Play ──────────────────────────────────────────────────────────────────────
  {
    slug: "duru-wooden-shape-sorter",
    name: "Duru Wooden Shape Sorter",
    category: "Play",
    ageRange: "1 to 3 yrs",
    price: 1800,
    cert: "EN 71 certified, non-toxic paint",
    description: "12 shapes, solid beech wood, and finished with paint that's actually been tested for mouthing.",
    specs: [
      { label: "Pieces", value: "12" },
      { label: "Material", value: "Solid beech wood" },
    ],
    stock: 60,
    image: PRODUCT_IMAGES["duru-wooden-shape-sorter"],
  },
  {
    slug: "twiga-outdoor-climbing-frame",
    name: "Twiga Outdoor Climbing Frame",
    category: "Play",
    ageRange: "3 to 10 yrs",
    price: 32000,
    cert: "EN 71-8 certified",
    description: "Slide, climbing wall, and swing attachment in one frame, rated for outdoor Kenyan weather.",
    specs: [
      { label: "Footprint", value: "2.4 x 2.1 m" },
      { label: "Max weight per swing", value: "50 kg" },
      { label: "Warranty", value: "3 years" },
    ],
    stock: 5,
    image: PRODUCT_IMAGES["twiga-outdoor-climbing-frame"],
    badge: "Low Stock",
  },
  {
    slug: "tembo-play-tent",
    name: "Tembo Elephant Play Tent",
    category: "Play",
    ageRange: "2 to 8 yrs",
    price: 3400,
    cert: "EN 71 certified, flame retardant fabric",
    description:
      "Pop-up play tent in elephant theme with mesh windows for ventilation. Sets up in 30 seconds, folds flat in seconds. Indoor or shaded outdoor use.",
    specs: [
      { label: "Size", value: "120 x 100 x 90 cm" },
      { label: "Material", value: "Polyester, steel frame" },
      { label: "Setup", value: "Pop-up, 30 seconds" },
    ],
    stock: 42,
    image: PRODUCT_IMAGES["tembo-play-tent"],
    badge: "New",
  },
  {
    slug: "jenga-building-blocks-set",
    name: "Jenga Junior Building Blocks Set",
    category: "Play",
    ageRange: "2 to 6 yrs",
    price: 2200,
    cert: "EN 71 certified, BPA-free",
    description:
      "80-piece oversized foam building blocks in bright colors. Soft enough to be safe, large enough to build towers taller than the kids.",
    specs: [
      { label: "Pieces", value: "80" },
      { label: "Material", value: "EVA foam" },
      { label: "Block size", value: "Large (8 cm x 4 cm)" },
      { label: "Storage", value: "Carry bag included" },
    ],
    stock: 50,
    image: PRODUCT_IMAGES["jenga-building-blocks-set"],
  },
  {
    slug: "nyumba-wooden-doll-house",
    name: "Nyumba Wooden Doll House",
    category: "Play",
    ageRange: "3 to 8 yrs",
    price: 9800,
    cert: "EN 71 certified, FSC wood",
    description:
      "Two-storey doll house with 4 furnished rooms, opening front panel, and 12 accessories included. Made from FSC-certified wood with child-safe finishes.",
    specs: [
      { label: "Rooms", value: "4" },
      { label: "Accessories", value: "12 pieces included" },
      { label: "Material", value: "FSC certified MDF" },
      { label: "Dimensions", value: "60 x 30 x 65 cm" },
    ],
    stock: 16,
    image: PRODUCT_IMAGES["nyumba-wooden-doll-house"],
  },
  {
    slug: "bembea-garden-swing-set",
    name: "Bembea Garden Swing Set",
    category: "Play",
    ageRange: "3 to 12 yrs",
    price: 16500,
    cert: "EN 71-8 certified",
    description:
      "Standalone A-frame swing set with two belt swings and one trapeze bar. Powder-coated galvanised steel frame designed to handle Kenyan outdoor conditions year-round.",
    specs: [
      { label: "Frame", value: "Galvanised steel, powder-coated" },
      { label: "Swings", value: "2 belt + 1 trapeze bar" },
      { label: "Max weight per swing", value: "50 kg" },
      { label: "Footprint", value: "2.8 x 1.2 m" },
      { label: "Assembly", value: "Required, instructions + tools included" },
    ],
    stock: 10,
    image: PRODUCT_IMAGES["bembea-garden-swing-set"],
    badge: "Hot",
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function formatPrice(amount: number) {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}
