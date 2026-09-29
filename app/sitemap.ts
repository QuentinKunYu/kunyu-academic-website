import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { visibleProjects } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/publications`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...visibleProjects().map((p) => ({
      url: `${site.url}/research/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
