import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { archives } from "@/lib/archives";
import { FloatingSymbols } from "@/components/FloatingSymbols";

export const Route = createFileRoute("/archive/")({
  head: () => ({
    meta: [
      { title: "The Archive — Museum of Deleted Words" },
      { name: "description", content: "Six floating remnants of messages that no longer exist." },
      { property: "og:title", content: "The Archive — Museum of Deleted Words" },
      { property: "og:description", content: "Six floating remnants of messages that no longer exist." },
    ],
  }),
  component: ArchiveRoom,
});
function MemoryChoice() {
  const [choice, setChoice] = useState<"hidden" | "recover" | "release">("hidden");

  return (
    <section className="relative z-10 mx-auto mt-24 max-w-2xl border-t border-border pt-12 text-center">
      <p className="font-mono text-xs tracking-widest text-muted-foreground">ARCHIVE 007</p>

      <h2 className="mt-4 font-serif text-2xl text-white">THE UNFINISHED SENTENCE</h2>

      <div className="my-12 min-h-36">
        <p
          className={`font-serif text-2xl text-white transition-all duration-700 ${
            choice === "release" ? "opacity-20 blur-sm" : "opacity-100"
          }`}
        >
          {choice === "recover"
            ? "I wanted to tell you ______."
            : choice === "release"
              ? "..."
              : "I wanted to tell you ██████."}
        </p>

        <p className="mt-8 font-serif italic text-muted-foreground">
          {choice === "recover"
            ? "You can recover fragments, but not always the whole message."
            : choice === "release"
              ? "Letting go is also a choice."
              : "What would you do with words that were never sent?"}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <button type="button" className="museum-btn" onClick={() => setChoice("recover")}>
          TRY TO RECOVER
        </button>
        <button type="button" className="museum-btn" onClick={() => setChoice("release")}>
          LET IT GO
        </button>
      </div>
      <button
        type="button"
        onClick={() => setChoice("hidden")}
        className="mt-8 font-mono text-xs text-muted-foreground underline"
      >
        RESET
      </button>
    </section>
  );
}
function ArchiveRoom() {
  return (
    <main className="relative min-h-screen px-6 py-16">
      <FloatingSymbols />
      <header className="relative z-10 animate-fade-up text-center">
        <p className="font-mono text-xs tracking-[0.4em] text-muted-foreground">ROOM I</p>
        <h1 className="mt-3 font-serif text-4xl font-light tracking-[0.2em] glow">THE ARCHIVE</h1>
      </header>
      <section className="relative z-10 mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {archives.map((a, i) => (
          <Link
            key={a.id}
            to="/archive/$id"
            params={{ id: a.id }}
            className={`group flex animate-fade-up flex-col items-center ${i % 2 ? "lg:mt-20" : ""}`}
            style={{ animationDelay: `${0.3 + i * 0.25}s` }}
          >
            <div
              className="flex h-44 w-44 animate-bob items-center justify-center border border-border bg-card/40 font-serif text-5xl transition-all duration-700 group-hover:border-foreground/50 group-hover:glow-strong group-hover:shadow-[0_0_40px_oklch(1_0_0/12%)]"
              style={{ animationDelay: `${-i * 1.1}s` }}
            >
              {a.symbol}
            </div>
            <p className="mt-5 font-mono text-xs tracking-[0.35em] text-muted-foreground">ARCHIVE {a.id}</p>
            <p className="mt-2 h-5 font-serif italic text-muted-foreground opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              A voice that once existed.
            </p>
          </Link>
        ))}
      </section>
      <MemoryChoice />
      <div className="relative z-10 mt-24 text-center">
        <Link to="/trace" className="museum-btn">
          CONTINUE TO THE FINAL ROOM
        </Link>
      </div>
    </main>
  );
}
