import { supabaseServer, imageUrl } from "@/lib/supabase/server";
import Shop, { type Item } from "@/components/Shop";

export default async function Home() {
  const sb = await supabaseServer();
  const [{ data: cats }, { data: rows }] = await Promise.all([
    sb.from("categories").select("name").order("sort"),
    sb.from("products").select("id,name,price_ngn,image_path,categories(name)").eq("is_visible", true).order("created_at", { ascending: false }),
  ]);
  const items: Item[] = (rows ?? []).map((r) => ({
    id: r.id,
    name: r.name,
    price: r.price_ngn,
    category: (r.categories as unknown as { name: string } | null)?.name ?? "",
    image: imageUrl(r.image_path),
  }));

  return (
    <>
      <section className="bg-blush">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-14 pt-4 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <h1 className="font-display text-5xl leading-[1.1] sm:text-6xl">
              Shine without <em className="text-accent">saying</em> a word.
            </h1>
            <p className="mt-5 max-w-sm text-muted">Jewellery, watches and accessories from Rossy's Jewel, where elegance lives.</p>
            <a href="#shop" className="mt-6 inline-block border border-accent bg-accent px-6 py-3 font-medium text-white hover:brightness-110">Shop the collection</a>
          </div>
<div className="grid aspect-square w-full max-w-[340px] place-items-center justify-self-center border border-line bg-panel text-accent shadow-md">
  <svg viewBox="0 0 32 28" className="w-1/2" fill="none" stroke="currentColor" strokeWidth=".5" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 2h16l7 8-15 16L1 10zM1 10h30M11 10l5 16 5-16M8 2l3 8M24 2l-3 8" />
  </svg>
</div>        </div>
      </section>
      <Shop items={items} categories={(cats ?? []).map((c) => c.name)} />
    </>
  );
}
