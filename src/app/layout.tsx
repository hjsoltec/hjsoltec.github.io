import type { Metadata, Viewport } from "next";
import { Header, Footer } from "@/components/Shell";
import { site } from "@/content/site";
import { ownershipVerification } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";
import "./brand.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url), title: { default: site.title, template: "%s | HJSol" }, description: site.description,
  openGraph: { title: site.title, description: site.description, url: site.url, locale: "ko_KR", type: "website", siteName: site.name, images: [{ url: "/brand/hjsol-intro.png", width: 1672, height: 941, alt: "HJSol — AI로 연결하고, AX로 완성합니다" }] },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/brand/hjsol-intro.png"] },
  icons: { icon: "/favicon.svg" },
  verification: ownershipVerification(),
};
export const viewport: Viewport = { themeColor: "#f1f7ff", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const identity = { "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url, description: site.description, ...(site.email ? { email: site.email } : {}) }, { "@type": "WebSite", "@id": `${site.url}/#website`, name: site.name, url: `${site.url}/`, inLanguage: "ko-KR", publisher: { "@id": `${site.url}/#organization` } }] };
  return <html lang="ko"><body><a className="skip-link" href="#main">본문 바로가기</a><Header /><main id="main">{children}</main><Footer /><JsonLd data={identity} /></body></html>;
}
