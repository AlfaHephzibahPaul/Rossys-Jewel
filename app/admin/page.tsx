import { supabaseServer, imageUrl } from "@/lib/supabase/server";
import { naira } from "@/lib/products";
import { addProduct, signOut } from "./actions";
import DeleteButton from "./DeleteButton";

const field = "w-full border border-line bg-panel px-3 py-2.5";

export default async function Admin() {
  const sb = await supabaseServer();
  const [{ data: cats }, { data: products }] = await Promise.all([
    sb.from("categories").select("id,name").order("sort"),
    sb.from("products").select("id,name,price_ngn,image_path,categories(name)").order("created_at", { ascending: false }),
  ]);
  return (
    <>
      <div className="bg-blush">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <span className="font-display text-2xl italic text-accent">Rossy&rsquo;s <span className="not-italic text-ink">Jewel</span> admin</span>
          <form action={signOut}><button className="border border-line px-5 py-2.5 text-sm font-medium">Sign out</button></form>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-5 pb-20 pt-8">
        <h2 className="mb-4 font-display text-2xl">Add a product</h2>
        <form action={addProduct} className="mb-10 grid gap-4 border border-line bg-panel p-5">
          <div className="grid gap-4 md:grid-cols-[2fr_1.2fr_1fr]">
            <div><label htmlFor="name" className="mb-1.5 block text-sm font-medium">Product name</label><input id="name" name="name" required className={field} /></div>
            <div><label htmlFor="cat" className="mb-1.5 block text-sm font-medium">Category</label>
              <select id="cat" name="category_id" className={field}>{cats?.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>
            <div><label htmlFor="price" className="mb-1.5 block text-sm font-medium">Price (₦)</label><input id="price" name="price" type="number" min="1" step="1" required className={field} /></div>
          </div>
          <div><label htmlFor="photo" className="mb-1.5 block text-sm font-medium">Photo (optional)</label><input id="photo" name="photo" type="file" accept="image/*" className={field} /></div>
          <div><button className="bg-accent px-5 py-3 text-sm font-medium text-white hover:brightness-110">Add product</button></div>
        </form>
        <h2 className="mb-1 font-display text-2xl">Your products</h2>
        <p className="mb-3 text-sm text-muted">{products?.length ?? 0} products</p>
        <div className="overflow-x-auto border border-line bg-panel">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead><tr className="border-b border-line text-sm"><th className="p-3 font-semibold">Photo</th><th className="p-3 font-semibold">Name</th><th className="p-3 font-semibold">Category</th><th className="p-3 font-semibold">Price</th><th /></tr></thead>
            <tbody>
              {products?.map((p) => (
                <tr key={p.id} className="border-b border-line last:border-0">
                  <td className="p-3">{imageUrl(p.image_path) ? <img src={imageUrl(p.image_path)!} alt="" className="h-[70px] w-14 object-cover" /> : <div className="h-[70px] w-14 bg-tint" />}</td>
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{(p.categories as unknown as { name: string } | null)?.name}</td>
                  <td className="p-3">{naira(p.price_ngn)}</td>
                  <td className="p-3 text-right"><DeleteButton id={p.id} name={p.name} imagePath={p.image_path} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          {!products?.length && <p className="p-10 text-center text-muted">No products yet. Add your first one above.</p>}
        </div>
      </div>
    </>
  );
}
