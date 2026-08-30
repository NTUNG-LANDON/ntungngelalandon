import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

// GitHub Pages has no per-route HTTP redirect configuration. These static
// redirect documents preserve old links while the canonical site is one page.
const origin = "https://ntungngelalandon.com";
const redirects = {
  about: "home",
  projects: "research",
  publications: "publications",
  research: "research",
  "research/architectural-bias": "research",
  "research/distribution-shift": "research",
  "research/fairness-pad": "research",
};

for (const [route, anchor] of Object.entries(redirects)) {
  const destination = `${origin}/#${anchor}`;
  const directory = join(process.cwd(), "out", route);
  await mkdir(directory, { recursive: true });
  await writeFile(
    join(directory, "index.html"),
    `<!doctype html><html lang="en-US"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page moved — Ntung Ngela Landon</title><meta name="robots" content="noindex,follow"><link rel="canonical" href="${origin}/"><meta http-equiv="refresh" content="0;url=${destination}"></head><body><p>This page is now part of <a href="${destination}">Ntung Ngela Landon’s research website</a>.</p></body></html>\n`,
  );
}

console.log(`Created ${Object.keys(redirects).length} legacy-route redirects.`);
