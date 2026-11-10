import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/trace")({
  head: () => ({
    meta: [
      { title: "Leave Your Trace — Museum of Deleted Words" },
      { name: "description", content: "What would you want the internet to remember? Nothing is stored." },
      { property: "og:title", content: "Leave Your Trace — Museum of Deleted Words" },
      { property: "og:description", content: "If your words disappeared tomorrow, what would you want the internet to remember?" },
    ],
  }),
  component: Trace,
});

// Keep only punctuation and emoji; everything else becomes empty space.
const keepMarks = (s: string) => s.replace(/[\p{L}\p{N}]/gu, " ").replace(/\s+/g, " ").trim() || "…";

function Trace() {
  const [text, setText] = useState("");
  const [stage, setStage] = useState<"write" | "fading" | "done">("write");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    setStage("fading");
    setTimeout(() => setStage("done"), 4000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="animate-fade-up font-mono text-xs tracking-[0.4em] text-muted-foreground">FINAL ROOM</p>
      <h1 className="mt-3 animate-fade-up font-serif text-4xl font-light tracking-[0.2em] glow">LEAVE YOUR TRACE</h1>
      <p className="mt-8 max-w-xl animate-fade-up font-serif text-xl italic text-muted-foreground [animation-delay:0.6s]">
        If your words disappeared tomorrow, what would you want the internet to remember?
      </p>

      <div className="mt-12 w-full max-w-xl">
        {stage === "write" && (
          <form onSubmit={submit} className="animate-fade-up space-y-8 [animation-delay:1.2s]">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={240}
              rows={4}
              placeholder="type here…"
              className="w-full resize-none border-b border-input bg-transparent p-3 text-center font-serif text-xl outline-none transition-colors focus:border-foreground"
            />
            <button type="submit" className="museum-btn">SUBMIT</button>
          </form>
        )}
        {stage !== "write" && (
          <div className="relative min-h-32">
            {stage === "fading" && (
              <p className="absolute inset-0 animate-dissolve font-serif text-2xl break-words">{text}</p>
            )}
            <p className={`font-serif text-4xl tracking-widest glow transition-opacity duration-[2500ms] ${stage === "done" ? "opacity-100" : "opacity-0"}`}>
              {keepMarks(text)}
            </p>
            {stage === "done" && (
              <div className="mt-12 space-y-10">
                <p className="animate-fade-up font-serif text-xl italic text-muted-foreground">
                  Your words may disappear, but your voice existed.
                </p>
                <div className="animate-fade-up [animation-delay:1.5s]">
                  <Link to="/reflection" className="museum-btn">EXIT THE MUSEUM</Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <p className="mt-16 font-mono text-[0.6rem] tracking-[0.3em] text-muted-foreground/50">NOTHING YOU WRITE LEAVES THIS PAGE</p>
    </main>
  );
}
