export default function Footer() {
  return (
    <footer className="bg-midnight text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm sm:flex-row sm:justify-between">
        <p className="font-display text-xl italic">Shine without saying a word.</p>
        <p>
          Order or ask a question on{" "}
          <a className="text-gold underline underline-offset-4" href="https://wa.me/2347012091168">
            WhatsApp +234 701 209 1168
          </a>
        </p>
      </div>
    </footer>
  );
}
