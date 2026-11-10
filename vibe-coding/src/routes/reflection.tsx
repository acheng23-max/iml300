import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/reflection")({
  head: () => ({
    meta: [
      { title: "Reflection — Museum of Deleted Words" },
      { name: "description", content: "Is what we see online the whole reality, or only what remains?" },
      { property: "og:title", content: "Reflection — Museum of Deleted Words" },
      { property: "og:description", content: "Is what we see online the whole reality, or only what remains?" },
    ],
  }),
  component: Reflection,
});

function Reflection() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="max-w-2xl animate-fade-up font-serif text-2xl font-light glow sm:text-3xl [animation-duration:4s]">
        “Is what we see online the whole reality, or only what remains?”
      </p>
      <span className="mt-16 inline-block h-8 w-[3px] animate-blink bg-foreground" aria-hidden />
      <Link to="/" className="fixed bottom-8 font-mono text-[0.6rem] tracking-[0.4em] text-muted-foreground/40 transition-colors hover:text-foreground">
        RETURN TO THE ENTRANCE
      </Link>
    </main>
  );
}
