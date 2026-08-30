import type { MetadataRoute } from "next";
import { site } from "./seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      lastModified: new Date("2026-08-30T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${site.url}${site.image}`,
        `${site.url}/og-image.png`,
      ],
    },
  ];
}
