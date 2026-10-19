import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${site.url}${path}`;
  return {
    title, description, alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, locale: "ko_KR", type: "website", images: [{ url: `${site.url}/og.png`, width: 1200, height: 630, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [`${site.url}/og.png`] },
  };
}

export function ownershipVerification(): Metadata["verification"] {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim();
  return { ...(google ? { google } : {}), ...(bing ? { other: { "msvalidate.01": bing } } : {}) };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return { "@type": "BreadcrumbList", itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: `${site.url}${item.path}` })) };
}

export function webpage(name: string, description: string, path: string) {
  return { "@type": "WebPage", "@id": `${site.url}${path}#webpage`, url: `${site.url}${path}`, name, description, inLanguage: "ko-KR", isPartOf: { "@id": `${site.url}/#website` }, publisher: { "@id": `${site.url}/#organization` } };
}
