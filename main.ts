import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of awkward robot small talk in an elevator.
// Gate: /output/entry.txt must be 1-200 UTF-8 characters, not only whitespace.
const LINE = "I ran 4,000 simulations of this elevator ride. In every one, I still had nothing to say to you.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
