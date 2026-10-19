import { PageIntro, CTA } from "@/components/Common";
import { ResourceLibrary } from "@/components/ResourceLibrary";
export const metadata = { title: "자료실", description: "HJSol 회사 소개와 HJSol·LS-RND 제품 기능 안내, 브로셔 및 사용자 매뉴얼을 확인하세요.", alternates: { canonical: "/resources/" } };
export default function Resources() { return <><PageIntro label="RESOURCE CENTER" title={<>더 자세한 이해를 위한,<br />HJSol 자료실.</>} description="HJSol과 소재 연구 플랫폼의 브로셔·소개 자료·사용자 가이드를 확인하세요. PDF는 바로 열어 보고, PowerPoint 원본은 내려받을 수 있습니다." /><section className="section resources-section"><div className="container"><ResourceLibrary /></div></section><CTA /></>; }
