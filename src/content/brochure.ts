import screenData from "./screens.json";
import type { ProductSlug } from "./site";

export type ProductScreen = { id: string; product: string; brand: string; slide: number; title: string; description: string; category: string; image: string; width: number; height: number };
export const screens: ProductScreen[] = screenData;
export const brochure = {
  date: "2026-11-10",
  pages: 116,
  pdf: "/downloads/hjsolai-brochure-20261110.pdf",
  pptx: "/downloads/hjsolai-brochure-20261110.pptx",
};
export const productBrochures: Record<ProductSlug, { pdf: string; pages: number; originalPages: string; firstPage: number; screenCount: number; featuredSlide: number; cover: string }> = {
  hjsol: { pdf: "/downloads/hjsolaisp-brochure-20261110.pdf", pages: 55, originalPages: "3–57", firstPage: 3, screenCount: 53, featuredSlide: 6, cover: "/images/brochure/aisp-overview.png" },
  "ls-rnd": { pdf: "/downloads/hjsolairnd-brochure-20261110.pdf", pages: 50, originalPages: "58–107", firstPage: 58, screenCount: 49, featuredSlide: 89, cover: "/images/brochure/airnd-overview.png" },
  "hjsol-aieg": { pdf: "/downloads/hjsolaieg-brochure-20261110.pdf", pages: 8, originalPages: "108–115", firstPage: 108, screenCount: 6, featuredSlide: 110, cover: "/images/brochure/aieg-overview.png" },
};
export function featuredScreen(slug: ProductSlug) { return screens.find(s => s.slide === productBrochures[slug].featuredSlide)!; }
