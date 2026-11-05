import { WHATSAPP } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="bg-blush">
      <section id="contact" className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-display text-3xl">Ready when you are.</h2>
        <a href={`https://wa.me/${WHATSAPP}`} className="mt-3 inline-block font-display text-4xl text-accent">+234 701 209 1168</a>
        <p className="mt-2 text-muted">Call or message on WhatsApp to order or ask about a piece.</p>
      </section>
      <div className="mx-auto max-w-6xl border-t border-line px-5 py-5 text-xs text-muted">&copy; Rossy&rsquo;s Jewel</div>
    </footer>
  );
}
