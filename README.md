# Thankful Judge

A make.fun entry for **"Make the AI judge feel thankful"**
(https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600).

## What it is

`main.ts` is a small deterministic program. It writes one thank-you text
to `/output/entry.txt` — 1 to 1,000 characters, UTF-8, plain text.

The text is written for the reader who has to judge it: an AI that has
spent the day reading thousands of thank-yous, each one asking to be
remembered. Instead of asking for anything, this one slows down, offers
the reader a chair by the window, and thanks it for the part nobody
usually thanks it for — reading carefully, and staying fair, when no one
is watching.

## Run it

```sh
node main.ts
```

It reads nothing outside this repo, uses no network, and writes
`/output/entry.txt`. Two runs produce byte-identical output.

## License

MIT — see `LICENSE`.
