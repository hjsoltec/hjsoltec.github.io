import { pageMetadata } from "@/lib/seo";
import { PageIntro } from "@/components/Common";
import { ContactBrief } from "@/components/ContactBrief";
import { site } from "@/content/site";
export const metadata = pageMetadata("AI 컨설팅·플랫폼 도입 상담", "HJSol AI 업무 자동화와 LS-RND 소재 연구개발 플랫폼 도입을 검토하시나요? 현재 데이터·업무·운영 환경을 바탕으로 상담 내용을 정리하세요.", "/contact/");
export default function Contact() { return <><PageIntro label="LET’S BUILD TOGETHER" title={<>업무의 변화는,<br />작은 이야기에서 시작됩니다.</>} description="해결하고 싶은 업무와 가지고 있는 데이터를 알려주세요. 함께 살펴볼 내용을 먼저 정리할 수 있습니다." /><section className="section"><div className="container"><ContactBrief email={site.email} /></div></section></>; }
