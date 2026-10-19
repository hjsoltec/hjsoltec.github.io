"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon, Logo } from "./Icons";

const navigation = [{ label: "회사 소개", href: "/about/" }, { label: "구축 서비스", href: "/solutions/" }, { label: "제품", href: "/#products" }, { label: "자료실", href: "/resources/" }];
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [path]);
  return <header className="site-header"><div className="container header-inner"><Link href="/" aria-label="HJSol 홈" className="brand"><Logo /></Link>
    <nav aria-label="주 메뉴" id="main-menu" className={`nav ${open ? "nav-open" : ""}`} onKeyDown={e => { if (e.key === "Escape") { setOpen(false); button.current?.focus(); } }}>
      {navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={path === item.href || (item.label === "제품" && path.startsWith("/products/")) ? "page" : undefined}>{item.label}</Link>)}
      <Link href="/contact/" className="nav-cta" onClick={() => setOpen(false)}>프로젝트 이야기하기 <Icon name="diagonal" size={16} /></Link>
    </nav><button ref={button} type="button" className="menu-toggle" aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} /></button>
  </div></header>;
}
export function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-top"><div><Link href="/" aria-label="HJSol 홈"><Logo light /></Link><p>AI를 기술에서, 업무의 힘으로.</p><span className="footer-small">AI consulting & business systems</span></div><div className="footer-nav"><div><span>HJSol</span><Link href="/about/">회사 소개</Link><Link href="/solutions/">구축 서비스</Link><Link href="/contact/">프로젝트 이야기하기</Link></div><div><span>PRODUCTS</span><Link href="/products/hjsol/">HJSol</Link><Link href="/products/ls-rnd/">LS-RND</Link><Link href="/resources/">자료실</Link></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} HJSol. All rights reserved.</span><Link href="/privacy/">개인정보 안내</Link><span>Built around your work.</span></div></div></footer>;
}
