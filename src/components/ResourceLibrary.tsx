"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import resources from "@/content/resources.json";

type Resource = { id: string; title: string; description: string; product: string; kind: string; status: "ready" | "preparing"; href: string; download: boolean; preview?: string; format?: string; cover?: string };
const catalog = resources as Resource[];
const filters = [{ value: "all", label: "전체 자료" }, { value: "company", label: "회사 소개" }, { value: "hjsol", label: "HJSol" }, { value: "ls-rnd", label: "LS-RND" }];

export function ResourceLibrary() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  useEffect(() => { const p = new URLSearchParams(window.location.search).get("product"); if (p && filters.some(f => f.value === p)) setFilter(p); }, []);
  const visible = catalog.filter(r => (filter === "all" || r.product === filter) && `${r.title} ${r.description} ${r.kind} ${r.format || ""}`.toLocaleLowerCase("ko").includes(query.trim().toLocaleLowerCase("ko")));
  function changeFilter(value: string) {
    setFilter(value);
    const u = new URL(window.location.href);
    if (value === "all") u.searchParams.delete("product"); else u.searchParams.set("product", value);
    window.history.replaceState(null, "", u.pathname + u.search);
  }
  return <>
    <div className="resource-toolbar"><div className="filter-list" role="group" aria-label="자료 분류">{filters.map(f => <button key={f.value} type="button" aria-pressed={f.value === filter} onClick={() => changeFilter(f.value)}>{f.label}</button>)}</div><label className="search-field"><Icon name="search" size={19} /><input type="search" aria-label="자료 검색" placeholder="필요한 자료를 검색하세요" value={query} onChange={e => setQuery(e.target.value)} /></label></div>
    <div className="resource-count" aria-live="polite">{visible.length}개의 자료 <span>PDF · Word · PowerPoint · 제품 화면 소개를 확인하세요.</span></div>
    <div className="resource-grid">{visible.map(r => <article className="resource-card" key={r.id}>
      {r.cover && <div className="resource-cover"><img src={r.cover} alt={`${r.title} 표지`} width={480} height={270} loading="lazy" /></div>}
      <div className="resource-card-top"><span className={`resource-type resource-type-${r.product}`}><Icon name={r.kind === "매뉴얼" ? "layers" : "file"} size={23} /></span><span className={`status ${r.status === "ready" ? "status-ready" : ""}`}>{r.status === "ready" ? "공개" : "준비 중"}</span></div>
      <span className="micro-label">{r.product === "company" ? "HJSOL COMPANY" : r.product === "hjsol" ? "HJSOL PLATFORM" : "LS-RND"} · {r.kind}{r.format ? ` · ${r.format}` : ""}</span>
      <h2>{r.title}</h2><p>{r.description}</p>
      {r.status === "ready" ? <div className="resource-file-actions">
        {r.preview && <a href={r.preview} className="resource-view" target="_blank" rel="noopener noreferrer" aria-label={`${r.title} PDF 새 창에서 보기`}>PDF 열기 <Icon name="diagonal" size={16} /></a>}
        {r.download ? <a className="resource-action" href={r.href} download>다운로드 <Icon name="download" size={18} /></a> : <Link className="resource-action" href={r.href}>자세히 보기 <Icon name="arrow" size={18} /></Link>}
      </div> : <div className="resource-pending">완성된 자료를 곧 만나보세요 <span>—</span></div>}
    </article>)}</div>
    {visible.length === 0 && <div className="empty-state"><Icon name="search" size={33} /><h2>검색 결과가 없습니다.</h2><p>다른 검색어나 분류로 찾아보세요.</p><button className="button button-outline" type="button" onClick={() => { setQuery(""); changeFilter("all"); }}>전체 자료 보기</button></div>}
  </>;
}
