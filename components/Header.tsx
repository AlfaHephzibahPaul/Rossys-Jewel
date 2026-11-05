import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blush">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Link href="/" className="flex items-center gap-2.5 font-display text-2xl italic text-accent">
          <svg width="28" height="25" viewBox="0 0 32 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 2h16l7 8-15 16L1 10zM1 10h30M11 10l5 16 5-16M8 2l3 8M24 2l-3 8" />
          </svg>
          <span>Rossy&rsquo;s <span className="not-italic text-ink">Jewel</span></span>
        </Link>
        <nav className="flex gap-6 text-sm">
          <a href="#shop" className="hover:text-accent">Shop</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
      </div>
    </header>
  );
}
