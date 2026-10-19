import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { guides } from "@/content/discovery";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = ["/", "/about/", "/solutions/", "/products/hjsol/", "/products/ls-rnd/", "/resources/", "/contact/", "/privacy/", "/showcase/rd-studio/", "/showcase/rd-studio/guide.html", "/guides/"].map(path => ({ url: `${site.url}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.7 }));
  return [...pages, ...Object.entries(guides).map(([slug, guide]) => ({ url: `${site.url}/guides/${slug}/`, lastModified: guide.date, changeFrequency: "monthly" as const, priority: 0.7 }))];
}
