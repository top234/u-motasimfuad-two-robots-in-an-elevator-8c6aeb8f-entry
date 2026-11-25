import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of awkward robot small talk in an elevator.
// Gate: /output/entry.txt must be 1-200 UTF-8 characters, not only whitespace.
const LINE = "I ran 4,000 simulations of this elevator ride. In every one, I still had nothing to say to you.";

// Gate guard: refuse to write an entry that would fail the competition gate
// (1-200 UTF-8 characters, not only whitespace) before any file is written.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} is outside the 1-200 character gate`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
