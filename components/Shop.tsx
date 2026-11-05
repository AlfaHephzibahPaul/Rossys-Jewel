"use client";
import { useState } from "react";
import { naira, WHATSAPP } from "@/lib/products";

export type Item = { id: string; name: string; price: number; category: string; image: string | null };
const STEP = 8;

export default function Shop({ items, categories }: { items: Item[]; categories: string[] }) {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [shown, setShown] = useState(STEP);
  const t = q.trim().toLowerCase();
  const list = items.filter(
    (i) => (cat === "All" || i.category === cat) && (!t || `${i.name} ${i.category}`.toLowerCase().includes(t)),
  );
  const tabs = ["All", ...categories];

  return (
    <section id="shop" className="mx-auto max-w-6xl px-5 pb-20 pt-14">
      <h2 className="font-display text-4xl">The collection</h2>
      <div className="mb-2 mt-6 grid gap-4 md:grid-cols-[auto_1fr] md:items-end md:gap-8">
        <div className="relative max-w-md">
          <label htmlFor="q" className="sr-only">Search pieces</label>
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input id="q" type="search" value={q} onChange={(e) => { setQ(e.target.value); setShown(STEP); }} placeholder="Search pieces" autoComplete="off"
            className="w-full border border-line bg-panel py-2.5 pl-10 pr-3" />
        </div>
        <div className="flex gap-x-6 overflow-x-auto border-b border-line">
          {tabs.map((c) => (
            <button key={c} type="button" aria-pressed={c === cat} onClick={() => { setCat(c); setShown(STEP); }}
              className={`-mb-px whitespace-nowrap border-b-2 py-2.5 text-sm ${c === cat ? "border-accent font-medium" : "border-transparent text-muted hover:text-ink"}`}>
              {c}
            </button>
          ))}
        </div>
      </div>
      <p className="mb-5 mt-3 text-sm text-muted" aria-live="polite">
        {list.length} {list.length === 1 ? "piece" : "pieces"}{cat !== "All" ? ` in ${cat}` : ""}
      </p>

      {list.length === 0 ? (
        <div className="border border-line bg-panel px-4 py-12 text-center">
          <h3 className="font-display text-xl">{items.length ? "No pieces match your search" : "New pieces are on their way"}</h3>
          <p className="mt-2 text-muted">{items.length ? "Try another word or pick a different category." : "Message us on WhatsApp to see what’s available."}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {list.slice(0, shown).map((p) => {
            const msg = encodeURIComponent(`Hello, I’d like to order the ${p.name} (${naira(p.price)})`);
            return (
              <article key={p.id} className="flex flex-col border border-line bg-panel shadow-sm transition-colors hover:border-accent">
                <div className="grid aspect-[4/5] place-items-center overflow-hidden bg-tint text-accent">
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                  ) : (
                    <svg width="44" height="40" viewBox="0 0 32 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity=".5" aria-hidden="true"><path d="M8 2h16l7 8-15 16L1 10zM1 10h30M11 10l5 16 5-16" /></svg>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-0.5 p-3.5">
                  <span className="text-xs text-muted">{p.category}</span>
                  <h3 className="font-display text-lg leading-tight">{p.name}</h3>
                  <div className="mb-3 mt-1 font-semibold">{naira(p.price)}</div>
                  <a href={`https://wa.me/${WHATSAPP}?text=${msg}`} target="_blank" rel="noopener"
                    className="mt-auto inline-flex w-full items-center justify-center gap-2 border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-white hover:brightness-110">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8z" /></svg>
                    Order on WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      )}
      {list.length > shown && (
        <button type="button" onClick={() => setShown(shown + STEP)} className="mx-auto mt-8 block border border-line px-7 py-2.5 font-medium hover:border-accent">Show more</button>
      )}
    </section>
  );
}
