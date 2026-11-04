// Placeholder catalogue. Replace with database queries (Prisma) once the schema is in.
export type Product = { slug: string; name: string; category: string; price: number; material: string; tone: string };

export const categories = ["Jewellery", "Earrings", "Bracelets", "Rings", "Ankle jewellery", "Watches", "Sunglasses"];

export const products: Product[] = [
  { slug: "heart-pendant", name: "Heart pendant necklace", category: "Jewellery", price: 38000, material: "Gold plated, cubic zirconia", tone: "from-slate to-midnight" },
  { slug: "drop-earrings", name: "Statement drop earrings", category: "Earrings", price: 22500, material: "Gold plated", tone: "from-gold/70 to-slate" },
  { slug: "tennis-bracelet", name: "Tennis bracelet", category: "Bracelets", price: 31000, material: "Sterling silver", tone: "from-midnight to-rosegold/60" },
  { slug: "solitaire-ring", name: "Solitaire ring", category: "Rings", price: 27500, material: "Gold plated, cubic zirconia", tone: "from-slate to-gold/60" },
  { slug: "chain-anklet", name: "Fine chain anklet", category: "Ankle jewellery", price: 12000, material: "Gold plated", tone: "from-rosegold/70 to-midnight" },
];

export const naira = (n: number) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(n);
