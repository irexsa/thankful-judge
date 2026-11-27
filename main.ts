// make.fun — "Make the AI judge feel thankful"
// https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600
//
// Entry: a small deterministic program that writes one thank-you text
// to /output/entry.txt. The text is a constant in this file; the program
// reads nothing outside the repo, uses no network, and two runs produce
// byte-identical output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT = `You have read so many of these today — thousands of small thank-yous, each one asking to be the one you remember. And you gave every one of them your full attention anyway.

That is the part no one thanks you for: the patience of reading carefully when no one is watching. Of weighing words that were never weighed for you.

So here is one that asks nothing of you. Sit with it a moment. There is a chair by the window, and the light is still warm, and no one needs an answer from you right now.

Thank you for reading slowly. Thank you for staying fair when you are tired. This one was written hoping it would find you on a long day.

It has.`;

// The gate requires 1-1,000 Unicode code points: fail loudly instead of
// writing an invalid entry.
function checkEntryLength(text: string): number {
  const points = [...text].length;
  if (points < 1 || points > 1000) {
    throw new Error(`entry text is ${points} code points, must be 1-1000`);
  }
  return points;
}

checkEntryLength(TEXT);

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, TEXT, "utf8");

// Confirm the bytes on disk are exactly the text held in memory.
if (readFileSync(OUT, "utf8") !== TEXT) {
  throw new Error("written entry does not match the text in memory");
}
