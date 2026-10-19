"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon, Logo } from "./Icons";
import { site } from "@/content/site";

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
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link href="/" aria-label="HJSol 홈"><Logo light /></Link>
            <p>AI를 기술에서, 업무의 힘으로.</p>
            <span className="footer-small">AI consulting & business systems</span>
          </div>
          <div className="footer-nav">
            <div>
              <span>HJSol</span>
              <Link href="/about/">회사 소개</Link>
              <Link href="/solutions/">구축 서비스</Link>
              <Link href="/contact/">프로젝트 이야기하기</Link>
            </div>
            <div>
              <span>PRODUCTS</span>
              <Link href="/products/hjsol/">HJSol</Link>
              <Link href="/products/ls-rnd/">LS-RND</Link>
              <Link href="/resources/">자료실</Link>
              <Link href="/guides/">활용 가이드</Link>
            </div>
            <div className="footer-contact">
              <span id="footer-contact-heading">CONTACT / 연락처</span>
              <address aria-labelledby="footer-contact-heading">
                <a href={`mailto:${site.email}`} aria-label={`HJSol 이메일: ${site.email}`}>
                  <Icon name="mail" size={15} /><span>{site.email}</span>
                </a>
                <a href={site.phoneHref} aria-label={`HJSol 전화: ${site.phone}`}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.33 1.83.56 2.79.69A2 2 0 0 1 22 16.92Z" /></svg>
                  <span>{site.phone}</span>
                </a>
              </address>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} HJSol. All rights reserved.</span>
          <Link href="/privacy/">개인정보 안내</Link>
          <span>Built around your work.</span>
        </div>
      </div>
    </footer>
  );
}
