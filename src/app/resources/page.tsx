import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { PageIntro, CTA } from "@/components/Common";
import { ResourceLibrary } from "@/components/ResourceLibrary";
export const metadata = pageMetadata("HJSol·LS-RND 브로셔 및 사용자 가이드", "HJSol 업무·커머스 플랫폼과 LS-RND 소재 연구개발 플랫폼의 브로셔, 제품 소개와 공개 사용자 가이드를 확인하세요.", "/resources/");
export default function Resources() { return <><PageIntro label="RESOURCE CENTER" title={<>더 자세한 이해를 위한,<br />HJSol 자료실.</>} description="HJSol과 소재 연구 플랫폼의 브로셔·소개 자료·사용자 가이드를 확인하세요. PDF는 바로 열어 보고, PowerPoint 원본은 내려받을 수 있습니다." /><section className="section resources-section"><div className="container"><ResourceLibrary /></div></section><section className="section soft-section"><div className="container"><h2>우리 업무에 적용하는 방법이 궁금하신가요?</h2><p className="section-lead">AI 업무 자동화와 실험 데이터·TDS 활용 흐름을 가이드에서 확인하세요.</p><Link className="arrow-link" href="/guides/">활용 가이드 읽기 →</Link></div></section><CTA /></>; }
