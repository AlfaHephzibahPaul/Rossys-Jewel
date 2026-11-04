import Link from "next/link";
import { naira, type Product } from "@/lib/products";

// The gradient block is a stand-in for the product photo. Swap for <Image> when photos arrive.
export default function ProductCard({ p, aspect }: { p: Product; aspect: string }) {
  return (
    <Link href={`/product/${p.slug}`} className="group block">
      <div className={`${aspect} w-full bg-gradient-to-br ${p.tone}`} role="img" aria-label={p.name} />
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg group-hover:underline decoration-gold underline-offset-4">{p.name}</h3>
        <span className="shrink-0 text-sm">{naira(p.price)}</span>
      </div>
      <p className="text-sm text-ink/60">{p.material}</p>
    </Link>
  );
}
