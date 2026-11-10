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
     </div>
      </section>
      <Shop items={items} categories={(cats ?? []).map((c) => c.name)} />
    </>
  );
}
