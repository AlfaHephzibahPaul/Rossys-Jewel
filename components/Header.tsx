import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-midnight text-ivory">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between px-5 py-5">
        <Link href="/" className="font-display text-2xl italic text-rosegold">
          Rossy&rsquo;s <span className="not-italic text-ivory">Jewel</span>
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/shop" className="hover:text-gold">Shop</Link>
          <Link href="/about" className="hover:text-gold">Our story</Link>
          <Link href="/cart" className="hover:text-gold">Cart</Link>
        </nav>
      </div>
    </header>
  );
}
