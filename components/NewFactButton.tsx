"use client";                       // Marks this as a Client Component
import { useState, useTransition } from "react";

// Re-use the same type
type CatFact = { fact: string; length: number };

export default function NewFactButton() {
  const [fact, setFact] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  async function getAnother() {
    startTransition(async () => {
      const res = await fetch("https://catfact.ninja/fact");
      const data: CatFact = await res.json();
      setFact(data.fact);
    });
  }

  return (
    <div className="mt-10 flex flex-col items-center gap-4">
      <button
        onClick={getAnother}
        disabled={isPending}
        className="rounded bg-black px-4 py-2 font-medium text-white disabled:opacity-50"
      >
        {isPending ? "Fetching…" : "Get another fact"}
      </button>

      {fact && <p className="max-w-prose text-center italic">{fact}</p>}
    </div>
  );
}