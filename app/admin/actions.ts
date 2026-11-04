"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { supabaseServer } from "@/lib/supabase/server";

export async function addProduct(fd: FormData) {
  const sb = await supabaseServer();
  const file = fd.get("photo") as File | null;
  let image_path: string | null = null;
  if (file && file.size > 0) {
    image_path = `${crypto.randomUUID()}.${file.name.split(".").pop() || "jpg"}`;
    const up = await sb.storage.from("product-images").upload(image_path, file, { contentType: file.type });
    if (up.error) throw new Error(up.error.message);
  }
  const { error } = await sb.from("products").insert({
    name: String(fd.get("name")).trim(),
    category_id: Number(fd.get("category_id")),
    price_ngn: Number(fd.get("price")),
    image_path,
  });
  if (error) throw new Error(error.message);
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function deleteProduct(fd: FormData) {
  const sb = await supabaseServer();
  const path = String(fd.get("image_path") || "");
  const { error } = await sb.from("products").delete().eq("id", String(fd.get("id")));
  if (error) throw new Error(error.message);
  if (path) await sb.storage.from("product-images").remove([path]);
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function signOut() {
  const sb = await supabaseServer();
  await sb.auth.signOut();
  redirect("/admin/login");
}
