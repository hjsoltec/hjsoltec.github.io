import { pageMetadata, breadcrumbs, webpage } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Faq } from "@/components/Faq";
import { productFaqs, guides } from "@/content/discovery";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, site, type ProductSlug } from "@/content/site";
import { Eyebrow, CTA, ArrowLink } from "@/components/Common";
import { BrandMark } from "@/components/Brand";
import { Icon } from "@/components/Icons";
import { ScreenGallery } from "@/components/ScreenGallery";
import { brochure, productBrochures, screens, featuredScreen } from "@/content/brochure";
export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(products).map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const p = products[slug as ProductSlug]; if (!p) notFound(); return pageMetadata(`${p.name} ${p.label}`, p.summary, `/products/${slug}/`); }
export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; if (!(slug in products)) notFound(); const p = products[slug as ProductSlug];
  const b = productBrochures[slug as ProductSlug], screen = featuredScreen(slug as ProductSlug);
  const productScreens = screens.filter(s => s.product === slug);
  const path = `/products/${slug}/`, serviceId = `${site.url}${path}#service`;
  const relatedGuides = Object.entries(guides).filter(([, guide]) => guide.product === slug);
  const structured = { "@context": "https://schema.org", "@graph": [{ ...webpage(`${p.name} ${p.label}`, p.summary, path), about: { "@id": serviceId } }, { "@type": "Service", "@id": serviceId, name: `${p.name} 도입·구축`, serviceType: p.label, url: `${site.url}${path}`, description: p.summary, provider: { "@id": `${site.url}/#organization` } }, breadcrumbs([{ name: "홈", path: "/" }, { name: p.name, path }])] };
  return <>
    <section className={`brand-detail brand-detail-${p.brand}`}><div className="container"><div className="breadcrumb"><Link href="/">홈</Link><span>/</span><Link href="/#products">솔루션</Link><span>/</span><span>{p.name}</span></div><div className="brand-detail-grid"><div className="brand-detail-copy"><BrandMark brand={p.brand} /><h1><span className="visually-hidden">{p.name}: </span>{p.headline}</h1><p>{p.summary}</p><div className="hero-actions"><Link href={`/contact/?product=${slug}`} className="button button-primary">도입 이야기하기 <Icon name="arrow" size={18} /></Link><Link href={`/resources/?product=${slug}`} className="button button-outline">제품 자료 보기 <Icon name="file" size={18} /></Link></div><div className="brochure-product-links"><a href={b.pdf} target="_blank" rel="noopener noreferrer">제품 브로셔 PDF ({b.pages}쪽) <Icon name="file" size={15} /></a><Link href="#screens">기능별 화면 {b.screenCount}개 보기 <Icon name="arrow" size={15} /></Link></div></div><div className="brand-detail-preview"><Link href="#screens" className="product-interface-preview" aria-label={`${p.name} 기능별 화면 보기`}><div className="product-preview-bar"><i /><i /><i /><span>{p.name} · PRODUCT SCREEN</span></div><img src={screen.image} alt={`${p.name} ${screen.title}`} width={screen.width} height={screen.height} /><div className="product-preview-caption"><span>{screen.title}</span><Icon name="diagonal" size={17} /></div></Link></div></div><div className="detail-flow">{p.flow.map((f, i) => <div key={f}><span>0{i + 1}</span>{f}</div>)}</div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><Eyebrow>CORE CAPABILITIES</Eyebrow><h2>업무의 흐름을 따라,<br />필요한 기능을 연결합니다.</h2></div></div><div className="feature-grid">{p.features.map((f,i) => <article className="feature-card" key={f.title}><div><Icon name={f.icon} size={27} /><span>0{i + 1}</span></div><h3>{f.title}</h3><p>{f.text}</p></article>)}</div></div></section>
    <section className="section product-screens-section" id="screens"><div className="container"><div className="section-heading"><div><Eyebrow>PRODUCT SCREEN TOUR</Eyebrow><h2>기능별 화면을<br />직접 살펴보세요.</h2></div><div className="screen-heading-links"><a href={b.pdf} target="_blank" rel="noopener noreferrer">제품 PDF {b.pages}쪽 <Icon name="file" size={17} /></a><a href={`${brochure.pdf}#page=${b.firstPage}`} target="_blank" rel="noopener noreferrer">전체 브로셔에서 보기 <Icon name="diagonal" size={17} /></a></div></div><ScreenGallery screens={productScreens} productName={p.name} /><p className="brochure-source-note"><Icon name="file" size={17} />2026-11-10 기능별 브로셔의 {b.originalPages}쪽을 바탕으로 구성했습니다. 화면의 수치와 데이터는 촬영 시점의 예시입니다.</p></div></section>
    <section className="section soft-section"><div className="container two-col"><div><Eyebrow>USE CASES</Eyebrow><h2>이런 업무에<br />함께할 수 있습니다.</h2><p className="section-lead">{p.audience}</p></div><div className="use-cases">{p.cases.map((c,i) => <div key={c}><span>0{i+1}</span><h3>{c}</h3><Icon name="diagonal" size={21} /></div>)}<p className="scope-note">{p.scope}</p></div></div></section>
    <section className="section"><div className="container resource-callout-inner"><div className="resource-icon"><Icon name="file" size={28} /></div><div><Eyebrow>EXPLORE MORE</Eyebrow><h2>제품 자료를 한곳에서.</h2><p>최신 제품별 브로셔와 PowerPoint 원본, 기존 가이드를 확인하세요.</p></div><ArrowLink href={`/resources/?product=${slug}`}>자료실 바로가기</ArrowLink></div></section>
    <Faq items={productFaqs[slug as ProductSlug]} />
    {relatedGuides.length > 0 && <section className="section"><div className="container"><Eyebrow>PRACTICAL GUIDE</Eyebrow><h2>도입 검토를 위한 활용 가이드.</h2>{relatedGuides.map(([key, guide]) => <p className="section-lead" key={key}><Link className="arrow-link" href={`/guides/${key}/`}>{guide.title} →</Link></p>)}</div></section>}
    <JsonLd data={structured} /><CTA />
  </>;
}
