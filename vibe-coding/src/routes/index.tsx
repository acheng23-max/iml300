import { createFileRoute, Link } from "@tanstack/react-router";
import { FloatingSymbols } from "@/components/FloatingSymbols";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Museum of Deleted Words" },
      { name: "description", content: "A virtual museum preserving messages that disappeared from the internet." },
      { property: "og:title", content: "The Museum of Deleted Words" },
      { property: "og:description", content: "Some words disappear before they are heard." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <FloatingSymbols />
      <div className="relative z-10 max-w-3xl">
        <h1 className="animate-fade-up font-serif text-4xl font-light tracking-[0.2em] glow sm:text-6xl">
          THE MUSEUM OF<br />DELETED WORDS
        </h1>
        <p className="mt-10 animate-fade-up font-serif text-xl italic text-muted-foreground [animation-delay:0.8s]">
          Some words disappear before they are heard.
        </p>
        <p className="mt-3 animate-fade-up font-serif text-lg italic text-muted-foreground [animation-delay:1.6s]">
          Just because you cannot see them doesn't mean they never existed.
        </p>
        <div className="mt-14 animate-fade-up [animation-delay:2.4s]">
          <Link to="/archive" className="museum-btn">ENTER THE ARCHIVE</Link>
        </div>
      </div>
    </main>
  );
}
