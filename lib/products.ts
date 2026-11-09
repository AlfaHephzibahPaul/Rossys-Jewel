export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
  category?: string;
  tone?: string;
  material?: string;
  [key: string]: any;
}

export const WHATSAPP = "+2347012091168";

export const naira = (n: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(n);

export const products: Product[] = [
  {
    id: "1",
    slug: "classic-gold-necklace",
    name: "Classic Gold Necklace",
    price: 45000,
    description: "Elegant gold necklace crafted for special occasions.",
    category: "Necklaces",
    tone: "from-amber-200 to-yellow-500",
    material: "18k Solid Gold",
  },
  {
    id: "2",
    slug: "diamond-stud-earrings",
    name: "Diamond Stud Earrings",
    price: 35000,
    description: "Timeless diamond-studded earrings.",
    category: "Earrings",
    tone: "from-slate-200 to-zinc-400",
    material: "Platinum & Diamond",
  },
];