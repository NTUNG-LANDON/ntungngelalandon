import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const siteUrl = "https://ntungngelalandon.com";
const liveBase = process.argv[2]?.replace(/\/$/, "");
const output = join(process.cwd(), "out");
let checks = 0;

function check(condition, message) {
  assert.ok(condition, message);
  checks += 1;
}

async function resource(path) {
  if (liveBase) {
    const response = await fetch(`${liveBase}${path}`, { redirect: "follow" });
    check(response.ok, `${path} returned HTTP ${response.status}`);
    return { data: Buffer.from(await response.arrayBuffer()), type: response.headers.get("content-type") ?? "" };
  }
  return { data: await readFile(join(output, path === "/" ? "index.html" : path)), type: "" };
}

const html = (await resource("/")).data.toString("utf8");
const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? "";
const tags = Array.from(head.matchAll(/<(meta|link)\b[^>]*>/g), ([tag]) =>
  Object.fromEntries(Array.from(tag.matchAll(/([\w:-]+)="([^"]*)"/g), ([, key, value]) => [key.toLowerCase(), value])),
);
const meta = (name) => tags.find((tag) => tag.name === name || tag.property === name)?.content;
const link = (rel) => tags.find((tag) => tag.rel === rel)?.href;
const title = head.match(/<title>(.*?)<\/title>/)?.[1] ?? "";

check(title.includes("Ntung Ngela Landon") && title.length <= 65, "Missing or overlong descriptive title");
check((head.match(/<title>/g) ?? []).length === 1, "Expected one title");
check((meta("description")?.length ?? 0) >= 100 && meta("description").length <= 170, "Description should be concise and informative");
check(link("canonical") === `${siteUrl}/`, "Canonical must point to the HTTPS custom domain");
check(meta("robots") === "index, follow", "Home page must be indexable");
check(meta("googlebot")?.includes("max-image-preview:large"), "Large search image previews are not enabled");
check(meta("og:title") === title, "Open Graph title is inconsistent");
check(Boolean(meta("og:description")), "Open Graph description is missing");
check(meta("og:url") === `${siteUrl}/`, "Open Graph URL is inconsistent");
check(meta("og:site_name") === "Ntung Ngela Landon", "Open Graph site name is missing");
check(meta("og:type") === "profile", "Expected a profile Open Graph type");
check(meta("og:image") === `${siteUrl}/og-image.png`, "Open Graph image must use the static PNG");
check(meta("og:image:width") === "1200" && meta("og:image:height") === "630", "Open Graph dimensions are missing");
check(Boolean(meta("og:image:alt")), "Open Graph image alt text is missing");
check(meta("twitter:card") === "summary_large_image", "Large social card is missing");
check(meta("twitter:image") === `${siteUrl}/og-image.png`, "Twitter image is inconsistent");
check(Boolean(meta("twitter:image:alt")), "Twitter image alt text is missing");
check(link("manifest") === "/manifest.webmanifest", "Manifest link is missing");
check(link("apple-touch-icon") === "/apple-touch-icon.png", "Apple touch icon is missing");
check((html.match(/<h1(?:\s|>)/g) ?? []).length === 1, "The single-page site must have one primary h1");
check(html.includes('lang="en-US"'), "Document language is missing");
check(html.includes('data-theme="graphite"') && html.includes('data-font="dm"') && html.includes('data-width="sixty"'), "Published design defaults are incorrect");
check(!/localhost|127\.0\.0\.1/.test(head), "Local preview URLs leaked into metadata");

for (const section of ["home", "research", "publications", "experience", "education", "contact"]) {
  check(html.includes(`id="${section}"`), `${section} is absent from prerendered HTML`);
  check(html.includes(`href="#${section}"`), `${section} lacks a crawlable navigation anchor`);
}

const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
check(Boolean(jsonLd), "JSON-LD is missing from prerendered HTML");
const schema = JSON.parse(jsonLd);
check(schema["@context"] === "https://schema.org", "Invalid structured-data context");
const graph = schema["@graph"];
for (const type of ["WebSite", "ProfilePage", "Person"]) {
  check(graph.some((node) => node["@type"] === type), `${type} structured data is missing`);
}
const person = graph.find((node) => node["@type"] === "Person");
const profile = graph.find((node) => node["@type"] === "ProfilePage");
check(person.name === "Ntung Ngela Landon", "Person identity is inconsistent");
check(profile.mainEntity["@id"] === person["@id"], "ProfilePage must reference the Person");
check(person.sameAs.length === 2 && person.sameAs.every((url) => url.startsWith("https://")), "Public identity links are missing");

const robots = (await resource("/robots.txt")).data.toString("utf8");
check(robots.includes("Allow: /") && !robots.includes("Disallow: /"), "Robots file blocks indexing");
check(robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`), "Robots file lacks the sitemap URL");
const sitemap = (await resource("/sitemap.xml")).data.toString("utf8");
check(sitemap.includes(`<loc>${siteUrl}/</loc>`), "Sitemap canonical is missing");
check(sitemap.includes(`${siteUrl}/og-image.png`), "Social preview is missing from the image sitemap");
check(!sitemap.includes("http://ntung") && !sitemap.includes("github.io"), "Sitemap contains noncanonical URLs");

for (const [path, width, height] of [["/og-image.png", 1200, 630], ["/apple-touch-icon.png", 180, 180], ["/icon-192.png", 192, 192], ["/icon-512.png", 512, 512]]) {
  const { data, type } = await resource(path);
  check(data.subarray(1, 4).toString() === "PNG", `${path} is not a PNG`);
  check(data.readUInt32BE(16) === width && data.readUInt32BE(20) === height, `${path} dimensions are incorrect`);
  check(data.length < 5 * 1024 * 1024, `${path} is too large for social previews`);
  if (liveBase) check(type.includes("image/png"), `${path} has an incorrect content type: ${type}`);
}

const manifest = JSON.parse((await resource("/manifest.webmanifest")).data.toString("utf8"));
check(manifest.start_url === "/" && manifest.name.includes("Ntung Ngela Landon"), "Manifest identity is inconsistent");
check(manifest.icons.some((icon) => icon.sizes === "192x192") && manifest.icons.some((icon) => icon.sizes === "512x512"), "Installable app icons are missing");
await resource("/icon.svg");
await resource("/Ntung_Ngela_Landon_CV.pdf");

for (const route of ["about", "projects", "publications", "research", "research/architectural-bias", "research/distribution-shift", "research/fairness-pad"]) {
  const redirect = (await resource(`/${route}/index.html`)).data.toString("utf8");
  check(redirect.includes('http-equiv="refresh"') && redirect.includes(`${siteUrl}/#`), `Legacy route ${route} does not redirect`);
}

console.log(`SEO checks passed: ${checks} assertions against ${liveBase ?? "the static export"}.`);
