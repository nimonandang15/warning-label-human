import * as fs from "node:fs";

// One line of comedy for make.fun "Warning Label for Humans: One Line,
// Big Laugh": the safety warning that should come printed on every human
// being — mostly water, a pile of unfinished tasks, and no patience at
// all before coffee. Funny first, plausible second, in label wording,
// and specific enough that anyone reading it recognises themselves in it.
const text =
  "WARNING: This human contains 70% water, 30% unfinished tasks, and 0% patience before coffee.";

// The gate allows 1–160 characters: refuse loudly instead of ever
// writing a text outside it.
if ([...text].length < 1 || [...text].length > 160 || text.trim() === "") {
  throw new Error("entry must be 1-160 characters");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
