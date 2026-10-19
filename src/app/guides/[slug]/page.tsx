import { notFound } from "next/navigation";
import Link from "next/link";
import { guides } from "@/content/discovery";
import { products, site } from "@/content/site";
import { pageMetadata, breadcrumbs } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { CTA } from "@/components/Common";

type Slug = keyof typeof guides;
export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(guides).map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(slug in guides)) notFound();
  const guide = guides[slug as Slug];
  return pageMetadata(guide.title, guide.description, `/guides/${slug}/`);
}
export default async function Guide({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(slug in guides)) notFound();
  const guide = guides[slug as Slug], product = products[guide.product], url = `${site.url}/guides/${slug}/`;
  return <><article className="container guide-article"><nav className="breadcrumb" aria-label="현재 위치"><Link href="/">홈</Link><span>/</span><Link href="/guides/">활용 가이드</Link></nav><header><div className="eyebrow"><span />{guide.label}</div><h1>{guide.title}</h1><p className="guide-date">HJSol · <time dateTime={guide.date}>{guide.date}</time></p><p className="guide-intro">{guide.intro}</p></header>{guide.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(text => <p key={text}>{text}</p>)}</section>)}<aside className="guide-related"><h2>관련 제품과 자료</h2><p><Link href={`/products/${guide.product}/`}>{product.name} 제품 소개</Link><Link href={`/resources/?product=${guide.product}`}>브로셔·사용자 가이드</Link><Link href={`/contact/?product=${guide.product}`}>도입 상담 준비</Link></p></aside></article><JsonLd data={{ "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": `${url}#article`, url, headline: guide.title, description: guide.description, datePublished: guide.date, dateModified: guide.date, inLanguage: "ko-KR", author: { "@id": `${site.url}/#organization` }, publisher: { "@id": `${site.url}/#organization` }, mainEntityOfPage: url }, breadcrumbs([{ name: "홈", path: "/" }, { name: "활용 가이드", path: "/guides/" }, { name: guide.title, path: `/guides/${slug}/` }])] }} /><CTA /></>;
}
