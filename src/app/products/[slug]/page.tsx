import { pageMetadata, breadcrumbs, webpage } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Faq } from "@/components/Faq";
import { productFaqs, guides } from "@/content/discovery";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, site, type ProductSlug } from "@/content/site";
import { Eyebrow, CTA, ArrowLink } from "@/components/Common";
import { BrandArt, BrandMark } from "@/components/Brand";
import { Icon } from "@/components/Icons";
export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(products).map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const p = products[slug as ProductSlug]; if (!p) notFound(); return pageMetadata(`${p.name} ${p.label}`, p.summary, `/products/${slug}/`); }
export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; if (!(slug in products)) notFound(); const p = products[slug as ProductSlug];
  const path = `/products/${slug}/`, serviceId = `${site.url}${path}#service`;
  const relatedGuides = Object.entries(guides).filter(([, guide]) => guide.product === slug);
  const structured = { "@context": "https://schema.org", "@graph": [{ ...webpage(`${p.name} ${p.label}`, p.summary, path), about: { "@id": serviceId } }, { "@type": "Service", "@id": serviceId, name: `${p.name} 도입·구축`, serviceType: p.label, url: `${site.url}${path}`, description: p.summary, provider: { "@id": `${site.url}/#organization` } }, breadcrumbs([{ name: "홈", path: "/" }, { name: p.name, path }])] };
  return <>
    <section className={`brand-detail brand-detail-${p.brand}`}><div className="container"><div className="breadcrumb"><Link href="/">홈</Link><span>/</span><Link href="/#products">솔루션</Link><span>/</span><span>{p.name}</span></div><div className="brand-detail-grid"><div className="brand-detail-copy"><BrandMark brand={p.brand} /><h1><span className="visually-hidden">{p.name}: </span>{p.headline}</h1><p>{p.summary}</p><div className="hero-actions"><Link href={`/contact/?product=${slug}`} className="button button-primary">도입 이야기하기 <Icon name="arrow" size={18} /></Link><Link href={`/resources/?product=${slug}`} className="button button-outline">제품 자료 보기 <Icon name="file" size={18} /></Link></div>{slug !== "hjsol-aieg" && <div className="product-material-links">{slug === "ls-rnd" ? <><Link href="/showcase/rd-studio/">기존 연구 플랫폼 화면 소개 <Icon name="diagonal" size={15} /></Link><a href="/downloads/rd-studio-brochure-ko.pdf" target="_blank" rel="noopener noreferrer">기존 브로셔 PDF <Icon name="file" size={15} /></a></> : <><a href="/downloads/hjsol-brochure-ko.pdf" target="_blank" rel="noopener noreferrer">기존 HJSol 브로셔 PDF <Icon name="file" size={15} /></a><a href="/downloads/hjsol-product-overview-ko.pdf" download>기존 제품 요약 소개 <Icon name="download" size={15} /></a></>}</div>}</div><div className="brand-detail-art"><BrandArt brand={p.brand} /></div></div><div className="detail-flow">{p.flow.map((f, i) => <div key={f}><span>0{i + 1}</span>{f}</div>)}</div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><Eyebrow>CORE CAPABILITIES</Eyebrow><h2>업무의 흐름을 따라,<br />필요한 기능을 연결합니다.</h2></div></div><div className="feature-grid">{p.features.map((f,i) => <article className="feature-card" key={f.title}><div><Icon name={f.icon} size={27} /><span>0{i + 1}</span></div><h3>{f.title}</h3><p>{f.text}</p></article>)}</div></div></section>
    <section className="section soft-section"><div className="container two-col"><div><Eyebrow>USE CASES</Eyebrow><h2>이런 업무에<br />함께할 수 있습니다.</h2><p className="section-lead">{p.audience}</p></div><div className="use-cases">{p.cases.map((c,i) => <div key={c}><span>0{i+1}</span><h3>{c}</h3><Icon name="diagonal" size={21} /></div>)}<p className="scope-note">{p.scope}</p></div></div></section>
    <section className="section"><div className="container resource-callout-inner"><div className="resource-icon"><Icon name="file" size={28} /></div><div><Eyebrow>EXPLORE MORE</Eyebrow><h2>제품 자료를 한곳에서.</h2><p>제품 소개와 기존 버전의 브로셔·가이드를 확인하세요.</p></div><ArrowLink href={`/resources/?product=${slug}`}>자료실 바로가기</ArrowLink></div></section>
    <Faq items={productFaqs[slug as ProductSlug]} />
    {relatedGuides.length > 0 && <section className="section"><div className="container"><Eyebrow>PRACTICAL GUIDE</Eyebrow><h2>도입 검토를 위한 활용 가이드.</h2>{relatedGuides.map(([key, guide]) => <p className="section-lead" key={key}><Link className="arrow-link" href={`/guides/${key}/`}>{guide.title} →</Link></p>)}</div></section>}
    <JsonLd data={structured} /><CTA />
  </>;
}
