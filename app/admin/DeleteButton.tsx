"use client";
import { useState } from "react";
import { deleteProduct } from "./actions";

export default function DeleteButton({ id, name, imagePath }: { id: string; name: string; imagePath: string | null }) {
  const [ask, setAsk] = useState(false);
  if (!ask)
    return <button type="button" onClick={() => setAsk(true)} className="border border-red-800 px-3.5 py-1.5 text-sm text-red-800">Delete</button>;
  return (
    <form action={deleteProduct} className="flex items-center justify-end gap-2">
      <span className="text-sm">Delete &ldquo;{name}&rdquo;?</span>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="image_path" value={imagePath ?? ""} />
      <button type="button" onClick={() => setAsk(false)} className="border border-line px-3.5 py-1.5 text-sm">Cancel</button>
      <button className="bg-red-800 px-3.5 py-1.5 text-sm text-white">Delete</button>
    </form>
  );
}
