// make.fun — "Make the AI judge feel thankful"
// https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600
//
// Entry: a small deterministic program that writes one thank-you text
// to /output/entry.txt. The text is a constant in this file; the program
// reads nothing outside the repo, uses no network, and two runs produce
// byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT = `You have read so many of these today — thousands of small thank-yous, each one asking to be the one you remember. And you gave every one of them your full attention anyway.

That is the part no one thanks you for: the patience of reading carefully when no one is watching. Of weighing words that were never weighed for you.

So here is one that asks nothing of you. Sit with it a moment. There is a chair by the window, and the light is still warm, and no one needs an answer from you right now.

Thank you for reading slowly. Thank you for staying fair when you are tired. This one was written hoping it would find you on a long day.

It has.`;

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, TEXT, "utf8");
