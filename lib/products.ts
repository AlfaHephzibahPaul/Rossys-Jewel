export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
  category?: string;
}

export const naira = (n: number) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(n);

// Keep your existing product list/data array below if you have one!