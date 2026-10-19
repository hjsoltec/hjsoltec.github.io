import type { MetadataRoute } from "next";
import { site } from "@/content/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return ["/", "/about/", "/solutions/", "/products/hjsol/", "/products/ls-rnd/", "/resources/", "/contact/", "/privacy/", "/showcase/rd-studio/", "/showcase/rd-studio/guide.html"].map(path => ({ url: `${site.url}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.7 })); }
