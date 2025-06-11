import NewFactButton from "@/components/NewFactButton";

// app/cat/page.tsx
// This is a React *Server* Component – no "use client" directive.
type CatFact = { fact: string; length: number };

export default async function CatPage() {
  // 1. Call the public API on the *server*
  const res = await fetch("https://catfact.ninja/fact", {
    // Tell Next.js to cache the response for 30 s at the edge
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    // Simple error handling – could render a nicer UI
    throw new Error("Failed to fetch cat fact");
  }

  const data: CatFact = await res.json();

  // 2. Return HTML – this streams to the browser as plain markup
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-6 text-3xl font-bold">Random Cat Fact 🐈</h1>
      <blockquote className="prose text-center italic">{data.fact}</blockquote>
      <p className="mt-8 text-sm text-gray-500">
        Page cached for 30 s – refresh to see if it changes!
      </p>
      <NewFactButton />     {/* hydrates only this small island */}
    </main>
  );
}