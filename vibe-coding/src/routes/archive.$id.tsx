import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getArchive } from "@/lib/archives";

export const Route = createFileRoute("/archive/$id")({
  loader: ({ params }) => {
    const archive = getArchive(params.id);
    if (!archive) throw notFound();
    return { archive };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const t = `Archive ${loaderData.archive.id} — Museum of Deleted Words`;
    const d = loaderData.archive.lines[0];
    return { meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }] };
  },
  notFoundComponent: () => (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 font-serif italic text-muted-foreground">
      This archive has itself been deleted.
      <Link to="/archive" className="museum-btn not-italic">RETURN</Link>
    </main>
  ),
  component: ArchivePage,
});

function ArchivePage() {
  const { archive } = Route.useLoaderData();
  const [frag, setFrag] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const reveal = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
    setFrag(archive.fragments[Math.floor(Math.random() * archive.fragments.length)] ?? null);
  };

  return (
    <main key={archive.id} className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <p className="animate-fade-up font-mono text-xs tracking-[0.5em] text-muted-foreground">ARCHIVE {archive.id}</p>
      <div
        className="relative mt-10 cursor-crosshair select-none px-10 py-6 font-serif text-8xl glow animate-flicker sm:text-9xl"
        onMouseMove={reveal}
        onMouseLeave={() => setFrag(null)}
        onClick={reveal}
      >
        {archive.symbol}
        {frag && (
          <span
            key={frag + pos.x}
            className="pointer-events-none absolute animate-dissolve whitespace-nowrap font-serif text-2xl italic text-muted-foreground blur-[3px]"
            style={{ left: pos.x, top: pos.y - 40, animationDuration: "1.8s" }}
          >
            {frag}
          </span>
        )}
      </div>
      <div className="mt-12 max-w-xl space-y-4 font-serif text-xl italic text-muted-foreground">
        {archive.lines.map((l, i) => (
          <p key={i} className={`animate-fade-up ${i === archive.lines.length - 1 ? "text-foreground glow" : ""}`} style={{ animationDelay: `${0.6 + i * 0.9}s` }}>
            “{l}”
          </p>
        ))}
      </div>
      <p className="mt-10 font-mono text-[0.65rem] tracking-[0.3em] text-muted-foreground/60">HOVER TO GLIMPSE WHAT REMAINS</p>
      <Link to="/archive" className="museum-btn mt-10">RETURN TO THE ARCHIVE</Link>
    </main>
  );
}
