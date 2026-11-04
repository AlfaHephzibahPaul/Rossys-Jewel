import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";

async function signIn(fd: FormData) {
  "use server";
  const sb = await supabaseServer();
  const { error } = await sb.auth.signInWithPassword({
    email: String(fd.get("email")),
    password: String(fd.get("password")),
  });
  if (error) redirect("/admin/login?error=1");
  redirect("/admin");
}

const field = "w-full border border-line bg-panel px-3 py-2.5";

export default async function Login({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  return (
    <div className="grid min-h-screen place-items-center p-6">
      <form action={signIn} className="w-full max-w-sm border border-line bg-panel p-8 shadow-sm">
        <span className="font-display text-2xl italic text-accent">Rossy&rsquo;s <span className="not-italic text-ink">Jewel</span></span>
        <h1 className="mt-4 font-display text-3xl">Sign in</h1>
        <p className="mb-6 mt-1 text-muted">Manage the products in your store.</p>
        <label className="mb-1.5 block text-sm font-medium" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoComplete="username" className={`${field} mb-4`} />
        <label className="mb-1.5 block text-sm font-medium" htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required autoComplete="current-password" className={field} />
        <p role="alert" className="mt-2 min-h-6 text-sm text-red-800">{error ? "That email or password isn’t right." : ""}</p>
        <button className="mt-2 w-full bg-accent px-5 py-3 text-sm font-medium text-white hover:brightness-110">Sign in</button>
      </form>
    </div>
  );
}
