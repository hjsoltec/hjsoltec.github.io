"use client";
import { useEffect, useRef, useState } from "react";
import type { ProductScreen } from "@/content/brochure";
import { Icon } from "./Icons";

export function ScreenGallery({ screens, productName }: { screens: ProductScreen[]; productName: string }) {
  const [category, setCategory] = useState("전체");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const categories = ["전체", ...new Set(screens.map(s => s.category))];
  const filtered = screens.filter(s => (category === "전체" || category === s.category) && `${s.title} ${s.description} ${s.category}`.toLocaleLowerCase("ko").includes(query.trim().toLocaleLowerCase("ko")));
  const selectedIndex = filtered.findIndex(s => s.id === selectedId);
  const selected = selectedIndex >= 0 ? filtered[selectedIndex] : null;
  const pages = Math.ceil(filtered.length / 6);
  const visible = filtered.slice((page - 1) * 6, page * 6);
  useEffect(() => {
    if (!selectedId) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialog.current?.open) dialog.current?.showModal();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selectedId]);
  function move(delta: number) { const next = selectedIndex + delta; if (next >= 0 && next < filtered.length) setSelectedId(filtered[next].id); }
  function turn(next: number) { setPage(next); document.getElementById("screen-results")?.scrollIntoView({ behavior: "auto", block: "start" }); }
  return <div className="screen-gallery">
    <div className="screen-toolbar"><div className="screen-category-list" role="group" aria-label="기능 분류">{categories.map(c => <button type="button" key={c} aria-pressed={category === c} onClick={() => { setCategory(c); setPage(1); }}>{c}</button>)}</div><label className="screen-search"><Icon name="search" size={18} /><input type="search" value={query} aria-label="기능·화면 검색" placeholder="기능이나 화면 이름 검색" onChange={e => { setQuery(e.target.value); setPage(1); }} /></label></div>
    <div className="screen-results-heading" id="screen-results"><p role="status">{productName} <strong>{filtered.length}개 화면</strong>{pages > 0 && <span> · {page} / {pages} 페이지</span>}</p><span>이미지를 선택하면 크게 볼 수 있습니다.</span></div>
    <div className="screen-grid">{visible.map(s => <article className="screen-card" key={s.id}><button className="screen-image-button" type="button" onClick={() => setSelectedId(s.id)} aria-label={`${s.title} 화면 확대`}><img src={s.image} alt={`${productName} ${s.title} 화면`} width={s.width} height={s.height} loading="lazy" /><span className="screen-enlarge"><Icon name="plus" size={17} /> 크게 보기</span></button><div className="screen-card-copy"><div className="screen-card-meta"><span>{s.category}</span><span>브로셔 {s.slide}쪽</span></div><h3>{s.title}</h3><p>{s.description}</p></div></article>)}</div>
    {filtered.length === 0 && <div className="screen-empty"><Icon name="search" size={30} /><h3>조건에 맞는 화면이 없습니다.</h3><p>다른 기능 이름이나 분류로 찾아보세요.</p><button type="button" className="button button-outline" onClick={() => { setCategory("전체"); setQuery(""); setPage(1); }}>전체 화면 보기</button></div>}
    {pages > 1 && <nav className="screen-pagination" aria-label="기능 화면 페이지"><button type="button" disabled={page === 1} onClick={() => turn(page - 1)}>이전</button><span><strong>{page}</strong> / {pages}</span><button type="button" disabled={page === pages} onClick={() => turn(page + 1)}>다음 <Icon name="arrow" size={15} /></button></nav>}
    <dialog ref={dialog} className="screen-dialog" aria-labelledby="screen-dialog-title" onClose={() => setSelectedId(null)} onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }} onKeyDown={e => { if (e.key === "ArrowLeft" || e.key === "ArrowRight") { e.preventDefault(); move(e.key === "ArrowLeft" ? -1 : 1); } }}>
      {selected && <div className="screen-dialog-content"><div className="screen-dialog-head"><div><span>{productName} · 브로셔 {selected.slide}쪽</span><h3 id="screen-dialog-title">{selected.title}</h3></div><button type="button" className="screen-dialog-close" onClick={() => dialog.current?.close()} aria-label="확대 화면 닫기" autoFocus><Icon name="close" size={23} /></button></div><div className="screen-dialog-image"><img src={selected.image} alt={`${productName} ${selected.title} 확대 화면`} width={selected.width} height={selected.height} /></div><p className="screen-dialog-description">{selected.description}</p><div className="screen-dialog-controls"><button type="button" disabled={selectedIndex === 0} onClick={() => move(-1)}>이전 화면</button><span>{selectedIndex + 1} / {filtered.length}</span><button type="button" disabled={selectedIndex === filtered.length - 1} onClick={() => move(1)}>다음 화면 <Icon name="arrow" size={16} /></button><a href={selected.image} target="_blank" rel="noopener noreferrer">이미지 새 창 <Icon name="diagonal" size={15} /></a></div></div>}
    </dialog>
  </div>;
}
