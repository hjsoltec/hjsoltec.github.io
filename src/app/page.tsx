import Link from "next/link";
import { Eyebrow, CTA, ArrowLink, DeliverySteps } from "@/components/Common";
import { Icon } from "@/components/Icons";
import { BrandArt, BrandMark } from "@/components/Brand";
import { BrochureSection } from "@/components/BrochureSection";
import { SolutionExplorer } from "@/components/SolutionExplorer";
import { products, productOrder, services } from "@/content/site";
export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return <>
    <section className="brand-hero">
      <div className="container brand-hero-inner">
        <div className="brand-hero-copy"><span className="brand-kicker">HJSol · AI SOLUTIONS</span><h1>AI로 연결하고,<br /><span>AX로 완성합니다</span></h1><p>업무·운영·연구를 잇는 AI 통합 솔루션</p><div className="brand-hero-actions"><Link href="#products" className="button button-primary">솔루션 살펴보기 <Icon name="arrow" size={20} /></Link><Link href="/contact/" className="hero-text-link">도입 문의 <Icon name="diagonal" size={17} /></Link></div><div className="hero-domains"><span>공공 업무</span><i /><span>통합 운영</span><i /><span>화학 연구·분석</span></div></div>
        <div className="brand-hero-art"><BrandArt /></div>
      </div>
      <div className="container solution-shortcuts">{productOrder.map(slug => { const p = products[slug]; return <Link key={slug} href={`/products/${slug}/`} className={`solution-shortcut shortcut-${p.brand}`}><BrandMark brand={p.brand} /><span>{p.label}</span><Icon name="arrow" size={23} /></Link>; })}</div>
      <div className="container hero-footline"><span>CONNECTED BY AI. COMPLETED WITH AX.</span><a href="#products">HJSol의 솔루션을 만나보세요 <span>↓</span></a></div>
    </section>
    <section className="section brand-products" id="products"><div className="container"><div className="section-heading"><div><Eyebrow>THREE SOLUTIONS. ONE CONNECTION.</Eyebrow><h2>서로 다른 업무,<br />하나로 이어지는 가능성.</h2></div><p>공공 업무의 기반부터 서비스 운영, 연구의 다음 단계까지.<br />지금 필요한 솔루션을 살펴보세요.</p></div><SolutionExplorer /></div></section>
    <BrochureSection />
    <section className="section expertise-section" id="expertise"><div className="container"><div className="section-heading"><div><Eyebrow>FROM AI TO AX</Eyebrow><h2>기술의 가능성을,<br />현장의 변화로 연결합니다.</h2></div><p>제품 도입과 업무별 구축을 함께 생각합니다.<br />진단부터 검증, 구축과 운영까지.</p></div><div className="services-grid">{services.map(s => <Link href={`/solutions/#${s.id}`} key={s.id} className="service-card"><div className="service-top"><span>{s.number}</span><Icon name={s.icon} size={31} /></div><span className="micro-label">{s.en}</span><h3>{s.title}</h3><p>{s.description}</p><span className="service-more">자세히 보기 <Icon name="diagonal" size={20} /></span></Link>)}</div></div></section>
    <section className="section approach-section"><div className="container approach-layout"><div><Eyebrow>THE HJSOL APPROACH</Eyebrow><h2>기존 업무를 바탕으로,<br />필요한 변화를 만듭니다.</h2><p className="section-lead">사람과 데이터, 시스템이 자연스럽게 이어지는<br />업무 환경을 생각합니다.</p><ArrowLink href="/about/">HJSol의 생각</ArrowLink></div><div className="principles">{[{ n:"01",title:"업무의 맥락을 먼저",text:"실제 사용자의 역할과 데이터, 기존 시스템을 이해하는 것부터 시작합니다.",icon:"compass" },{ n:"02",title:"결과는 근거와 함께",text:"출처와 처리 이력, 검토 흐름을 함께 살펴볼 수 있도록 설계합니다.",icon:"file" },{ n:"03",title:"사람의 판단을 중심에",text:"중요한 결정은 사람이 검토하고, AI는 그 판단에 필요한 정보를 돕습니다.",icon:"shield" }].map(p => <div className="principle" key={p.n}><div className="principle-icon"><Icon name={p.icon} /></div><div><h3>{p.title}</h3><p>{p.text}</p></div><span>{p.n}</span></div>)}</div></div></section>
    <section className="section delivery-section"><div className="container"><div className="section-heading"><div><Eyebrow>HOW WE WORK</Eyebrow><h2>작게 확인하고,<br />제대로 연결합니다.</h2></div><ArrowLink href="/solutions/#delivery">구축 과정 알아보기</ArrowLink></div><DeliverySteps /></div></section>
    <section className="resource-callout"><div className="container resource-callout-inner"><div className="resource-icon"><Icon name="file" size={28} /></div><div><span className="micro-label">RESOURCE CENTER</span><h2>제품을 더 자세히 알아보세요.</h2><p>최신 기능별 브로셔와 제품 화면, 기존 가이드를 한곳에서 확인하세요.</p></div><ArrowLink href="/resources/">자료실 둘러보기</ArrowLink></div></section><CTA />
  </>;
}
