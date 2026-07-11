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
};

export const PRODUCTS: Product[] = [
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
  },
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
  },
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
  },
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
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function formatPrice(amount: number) {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}
