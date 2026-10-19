import Link from "next/link";
import { PageIntro, CTA } from "@/components/Common";
import { guides } from "@/content/discovery";
import { pageMetadata, breadcrumbs } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";

export const metadata = pageMetadata("AI 업무 자동화·소재 연구개발 활용 가이드", "HJSol의 사내 AI 업무 자동화와 LS-RND의 실험 데이터·TDS·물성 검토 흐름을 확인하세요.", "/guides/");
export default function Guides() {
  return <><PageIntro label="PRACTICAL GUIDES" title={<>우리 업무에서,<br />어떻게 활용할까요?</>} description="실제 도입을 검토할 때 확인할 데이터, 처리 흐름과 사람의 검토 범위를 정리했습니다." /><section className="section"><div className="container guide-grid">{Object.entries(guides).map(([slug, guide]) => <article className="guide-card" key={slug}><span className="eyebrow">{guide.label}</span><h2><Link href={`/guides/${slug}/`}>{guide.title}</Link></h2><p>{guide.description}</p><Link className="arrow-link" href={`/guides/${slug}/`}>가이드 읽기 →</Link></article>)}</div></section><JsonLd data={{ "@context": "https://schema.org", "@graph": [breadcrumbs([{ name: "홈", path: "/" }, { name: "활용 가이드", path: "/guides/" }]), { "@type": "ItemList", itemListElement: Object.entries(guides).map(([slug, guide], i) => ({ "@type": "ListItem", position: i + 1, name: guide.title, url: `${site.url}/guides/${slug}/` })) }] }} /><CTA /></>;
}
