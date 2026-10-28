"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { products, productOrder } from "@/content/site";
import { BrandArt, BrandMark } from "./Brand";
import { Icon } from "./Icons";
export function SolutionExplorer() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const p = products[productOrder[active]];
  function select(i: number) { const next = (i + productOrder.length) % productOrder.length; setActive(next); tabs.current[next]?.focus(); }
  return <div className={`solution-explorer explorer-${p.brand}`}>
    <div className="solution-tabs" role="tablist" aria-label="HJSol 솔루션 선택">{productOrder.map((key, i) => <button ref={el => { tabs.current[i] = el; }} key={key} type="button" role="tab" id={`solution-tab-${key}`} aria-selected={active === i} aria-controls={`solution-panel-${key}`} tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={e => { if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) { e.preventDefault(); select(e.key === "Home" ? 0 : e.key === "End" ? 2 : active + (e.key === "ArrowRight" ? 1 : -1)); } }}><span className={`tab-dot dot-${products[key].brand}`} />{products[key].name}<span className="tab-description">{products[key].label}</span><Icon name="arrow" size={18} /></button>)}</div>
    {productOrder.map((slug, i) => { const p = products[slug]; return <div role="tabpanel" id={`solution-panel-${slug}`} aria-labelledby={`solution-tab-${slug}`} hidden={active !== i} tabIndex={0} className="solution-panel" key={slug}>
      <div className="solution-panel-copy"><BrandMark brand={p.brand} /><h3>{p.headline}</h3><p>{p.summary}</p><div className="solution-feature-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div><Link href={`/products/${slug}/`} className="button button-primary">솔루션 자세히 보기 <Icon name="arrow" size={19} /></Link></div>
      <div className="solution-panel-art"><BrandArt brand={p.brand} /></div>
      <div className="solution-panel-bottom"><span>{p.category}</span><Link href={`/contact/?product=${slug}`}>우리 업무에 적용하기 <Icon name="diagonal" size={17} /></Link></div>
    </div>; })}
  </div>;
}
