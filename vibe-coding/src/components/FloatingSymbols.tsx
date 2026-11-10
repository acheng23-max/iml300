const SYMBOLS = ["?", "...", "!", "💔", "🥀", "🕊️", ",", ";", "—", "“", "”", "a", "w", "_", "#", "!?", "…", "s", "'", "🫥"];

// Deterministic positions so server and client render the same output.
const items = Array.from({ length: 28 }, (_, i) => ({
  s: SYMBOLS[i % SYMBOLS.length],
  left: (i * 37) % 100,
  top: (i * 53 + 11) % 100,
  size: 0.9 + ((i * 7) % 10) / 4,
  delay: -((i * 3) % 18),
  dur: 14 + ((i * 5) % 14),
}));

export function FloatingSymbols() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {items.map((it, i) => (
        <span
          key={i}
          className="pointer-events-auto absolute animate-drift cursor-default font-serif text-muted-foreground opacity-40 transition-all duration-700 hover:scale-150 hover:opacity-100 hover:glow-strong hover:text-foreground"
          style={{ left: `${it.left}%`, top: `${it.top}%`, fontSize: `${it.size}rem`, animationDelay: `${it.delay}s`, animationDuration: `${it.dur}s` }}
        >
          {it.s}
        </span>
      ))}
    </div>
  );
}
