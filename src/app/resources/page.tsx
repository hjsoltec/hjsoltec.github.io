import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { PageIntro, CTA } from "@/components/Common";
import { ResourceLibrary } from "@/components/ResourceLibrary";
export const metadata = pageMetadata("HJSolAIEG·HJSolAISP·HJSolAIRND 제품 자료", "HJSolAIEG, HJSolAISP, HJSolAIRND 솔루션 소개와 기존 버전의 브로셔·사용자 가이드를 확인하세요.", "/resources/");
export default function Resources() { return <><PageIntro label="RESOURCE CENTER" title={<>더 자세한 이해를 위한,<br />HJSol 자료실.</>} description="최신 기능별 브로셔 116쪽과 제품별 PDF, 실제 화면 소개·기존 사용자 가이드를 확인하세요. PDF는 바로 열어 보고, PowerPoint 원본은 내려받을 수 있습니다." /><section className="section resources-section"><div className="container"><ResourceLibrary /></div></section><section className="section soft-section"><div className="container"><h2>우리 업무에 적용하는 방법이 궁금하신가요?</h2><p className="section-lead">AI 업무 자동화와 실험 데이터·TDS 활용 흐름을 가이드에서 확인하세요.</p><Link className="arrow-link" href="/guides/">활용 가이드 읽기 →</Link></div></section><CTA /></>; }
