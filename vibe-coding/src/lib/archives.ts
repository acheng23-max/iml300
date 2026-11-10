// Edit this list to customize the exhibition.
export type Archive = {
  id: string;
  symbol: string;
  lines: string[];
  fragments: string[]; // blurred hints revealed on hover — never the full message
};

export const archives: Archive[] = [
  { id: "001", symbol: "...?", lines: ["A question that was never answered.", "It trailed off before anyone could reply.", "Where do unfinished questions go?"], fragments: ["why did", "nobody", "is it only me"] },
  { id: "002", symbol: "!!!", lines: ["Someone was shouting here.", "Loud enough to be removed.", "Was it too much, or simply too true?"], fragments: ["enough", "listen", "we were there"] },
  { id: "003", symbol: "💔...", lines: ["This message is no longer visible.", "But someone once felt something strongly enough to write it.", "Who decides which emotions deserve to remain?"], fragments: ["I miss", "never told", "goodbye"] },
  { id: "004", symbol: "?", lines: ["Only the question mark survived.", "The question itself was taken.", "Some doubts are not permitted to be spoken."], fragments: ["what if", "who allowed", "true"] },
  { id: "005", symbol: "🥀", lines: ["A wilted flower, left in place of words.", "Grief, perhaps. Or protest.", "We may never know which."], fragments: ["in memory", "her name", "remember"] },
  { id: "006", symbol: "...🕊️", lines: ["A dove after silence.", "A wish for peace, posted once, then gone.", "Can hope be deleted?"], fragments: ["one day", "free", "together"] },
];

export const getArchive = (id: string) => archives.find((a) => a.id === id);
