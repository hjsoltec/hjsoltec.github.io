import Link from "next/link";
import { products, productOrder } from "@/content/site";
import { brochure, productBrochures, featuredScreen } from "@/content/brochure";
import { Eyebrow } from "./Common";
import { Icon } from "./Icons";

export function BrochureSection() {
  return <section className="section brochure-showcase" id="brochures"><div className="container">
    <div className="section-heading"><div><Eyebrow>EXPLORE THE PRODUCT</Eyebrow><h2>기능과 화면으로,<br />우리 업무에 맞는지 살펴보세요.</h2></div><p>제품별 주요 기능과 실제 화면을 정리했습니다.<br />브로셔의 기능 설명을 홈페이지에서 탐색하세요.</p></div>
    <div className="brochure-product-grid">{productOrder.map(slug => { const p = products[slug], b = productBrochures[slug], screen = featuredScreen(slug); return <article className={`brochure-product-card brochure-${p.brand}`} key={slug}>
      <Link className="brochure-product-image" href={`/products/${slug}/#screens`} aria-label={`${p.name} 기능별 화면 보기`}><img src={screen.image} width={screen.width} height={screen.height} alt={`${p.name} ${screen.title}`} loading="lazy" /><span>기능별 화면 {b.screenCount}개 <Icon name="diagonal" size={15} /></span></Link>
      <div className="brochure-product-copy"><span className="micro-label">{p.category}</span><h3>{p.name}</h3><p>{p.label}</p><ul>{p.features.slice(0, 4).map(f => <li key={f.title}><Icon name="check" size={16} />{f.title}</li>)}</ul><div className="brochure-card-actions"><Link href={`/products/${slug}/#screens`}>화면 살펴보기 <Icon name="arrow" size={16} /></Link><a href={b.pdf} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} 브로셔 PDF ${b.pages}쪽 열기`}>PDF <Icon name="file" size={16} /></a></div></div>
    </article>; })}</div>
    <div className="brochure-download-strip"><div><span className="micro-label">HJSOLAI PRODUCT BROCHURE · {brochure.date}</span><h3>세 패키지를 담은 기능별 브로셔</h3><p>전체 {brochure.pages}쪽 · 패키지 개요, 대표 기능과 화면별 설명</p></div><div className="brochure-download-actions"><a href={brochure.pdf} className="button button-primary" target="_blank" rel="noopener noreferrer">전체 PDF 보기 <Icon name="file" size={18} /></a><a href={brochure.pptx} className="button button-outline" download>PowerPoint 원본 <Icon name="download" size={18} /></a></div></div>
  </div></section>;
}
