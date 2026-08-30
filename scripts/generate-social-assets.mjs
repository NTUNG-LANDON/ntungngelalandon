import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";

const root = process.cwd();
const font = await readFile(join(root, "assets/fonts/DM-Sans-Medium.ttf"));
const portrait = await readFile(join(root, "public/Landon.jpg"));
const portraitUrl = `data:image/jpeg;base64,${portrait.toString("base64")}`;
const fonts = [{ name: "DM Sans", data: font, style: "normal", weight: 500 }];

const card = h("div", {
  style: { width: "100%", height: "100%", display: "flex", background: "#ffffff", color: "#111722", fontFamily: "DM Sans", overflow: "hidden" },
},
  h("div", {
    style: { width: "61%", display: "flex", flexDirection: "column", padding: "64px 44px 54px 72px" },
  },
    h("div", { style: { display: "flex", alignItems: "center", color: "#26323c", fontSize: 28, fontWeight: 500, letterSpacing: "-1.5px" } }, "NNL"),
    h("div", { style: { width: 54, height: 5, marginTop: 58, background: "#26323c" } }),
    h("div", { style: { display: "flex", flexDirection: "column", marginTop: 22, color: "#26323c", fontSize: 72, fontWeight: 500, letterSpacing: "-4px", lineHeight: 0.96 } },
      h("span", null, "Ntung Ngela"),
      h("span", null, "Landon"),
    ),
    h("div", { style: { display: "flex", flexDirection: "column", marginTop: 26, color: "#454c56", fontSize: 25, lineHeight: 1.35 } },
      h("span", null, "AI/ML security · Biometric security"),
      h("span", null, "Fairness · Trustworthy evaluation"),
    ),
    h("div", { style: { display: "flex", marginTop: "auto", color: "#747b84", fontSize: 18, letterSpacing: "0.2px" } }, "ntungngelalandon.com"),
  ),
  h("div", { style: { position: "relative", width: "39%", height: "100%", display: "flex", overflow: "hidden", background: "#eef1f2" } },
    h("img", { src: portraitUrl, alt: "", style: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 24%" } }),
    h("div", { style: { position: "absolute", inset: 0, display: "flex", background: "linear-gradient(90deg, #ffffff 0%, transparent 18%)" } }),
  ),
);

const ogImage = new ImageResponse(card, { width: 1200, height: 630, fonts });
await writeFile(join(root, "public/og-image.png"), Buffer.from(await ogImage.arrayBuffer()));

for (const [filename, size] of [["apple-touch-icon.png", 180], ["icon-192.png", 192], ["icon-512.png", 512]]) {
  const icon = new ImageResponse(
    h("div", { style: { display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", background: "#26323c", color: "#ffffff", fontFamily: "DM Sans", fontSize: size * 0.36, fontWeight: 500, letterSpacing: `${size * -0.035}px` } }, "NNL"),
    { width: size, height: size, fonts },
  );
  await writeFile(join(root, "public", filename), Buffer.from(await icon.arrayBuffer()));
}

console.log("Generated the 1200×630 social preview and NNL app icons.");
