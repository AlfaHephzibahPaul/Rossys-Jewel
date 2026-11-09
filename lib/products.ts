export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
  category?: string;
  tone?: string;
}

export const WHATSAPP = "+2347012091168"; // Replace with your actual WhatsApp contact number

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
  },
  {
    id: "2",
    slug: "diamond-stud-earrings",
    name: "Diamond Stud Earrings",
    price: 35000,
    description: "Timeless diamond-studded earrings.",
    category: "Earrings",
    tone: "from-slate-200 to-zinc-400",
  },
];