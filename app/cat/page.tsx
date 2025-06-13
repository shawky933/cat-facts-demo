import NewFactGenerator from "@/components/NewFactGenerator";

// app/cat/page.tsx
// This is a React *Server* Component – no "use client" directive

export default async function CatPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-6 text-3xl font-bold">Random Cat Fact 🐈</h1>
      <NewFactGenerator />
    </main>
  );
}