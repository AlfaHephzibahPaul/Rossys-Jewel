import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

const layout = [
  { span: "md:col-span-7", aspect: "aspect-[5/6]" },
  { span: "md:col-span-5 md:mt-24", aspect: "aspect-[4/5]" },
  { span: "md:col-span-4", aspect: "aspect-square" },
  { span: "md:col-span-4 md:mt-10", aspect: "aspect-[4/5]" },
  { span: "md:col-span-4", aspect: "aspect-square" },
];

export default function Home() {
  return (
    <>
      <section className="bg-midnight text-ivory">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-12 md:grid-cols-12">
          <div className="md:col-span-7 md:pt-16">
            <h1 className="font-display text-5xl leading-[1.05] sm:text-7xl">
              Jewellery that speaks quietly and is remembered loudly.
            </h1>
            <p className="mt-6 max-w-md text-ivory/75">
              Handcrafted necklaces, earrings, bracelets and rings, made to be worn every day and kept for years.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/shop" className="border border-gold bg-midnight px-6 py-3 text-gold hover:bg-gold hover:text-midnight">
                Shop the collection
              </Link>
              <a href="https://wa.me/2347012091168" className="px-2 py-3 underline underline-offset-4 decoration-rosegold">
                Order on WhatsApp
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] bg-gradient-to-b from-slate to-gold/40" role="img" aria-label="Featured piece" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <ul className="flex flex-wrap gap-x-8 gap-y-2 font-display text-2xl sm:text-3xl">
          {categories.map((c) => (
            <li key={c}>
              <Link href={`/shop?category=${encodeURIComponent(c)}`} className="hover:text-gold">{c}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <h2 className="mb-8 font-display text-3xl">Just arrived</h2>
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-12">
          {products.map((p, i) => (
            <div key={p.slug} className={layout[i].span}>
              <ProductCard p={p} aspect={layout[i].aspect} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
