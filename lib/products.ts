export const WHATSAPP = "2347012091168";
// Change this:
// import { naira, type Product } from "@/lib/products";

// To this (adjust the dots "../" depending on your folder depth):
import { naira, type Product } from "../lib/products";
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
};

export const naira = (n: number) => 
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(n);