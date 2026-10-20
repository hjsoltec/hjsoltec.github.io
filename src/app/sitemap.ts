import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { guides } from "@/content/discovery";
import resources from "@/content/resources.json";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = ["/", "/about/", "/solutions/", "/products/hjsol/", "/products/ls-rnd/", "/resources/", "/contact/", "/privacy/", "/showcase/rd-studio/", "/showcase/rd-studio/guide.html", "/guides/"].map(path => ({ url: `${site.url}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.7 }));
  const articles: MetadataRoute.Sitemap = Object.entries(guides).map(([slug, guide]) => ({ url: `${site.url}/guides/${slug}/`, lastModified: guide.date, changeFrequency: "monthly" as const, priority: 0.7 }));
  const documents: MetadataRoute.Sitemap = resources
    .filter(resource => resource.status === "ready" && resource.download && /\.(?:pdf|docx)$/i.test(resource.href))
    .map(resource => ({ url: `${site.url}${resource.href}`, priority: 0.5 }));
  return [...new Map([...pages, ...articles, ...documents].map(entry => [entry.url, entry])).values()];
}
