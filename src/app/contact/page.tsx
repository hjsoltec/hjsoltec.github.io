import { PageIntro } from "@/components/Common";
import { ContactBrief } from "@/components/ContactBrief";
import { site } from "@/content/site";
export const metadata = { title: "프로젝트 이야기하기", description: "AI 컨설팅, 사내 시스템 구축, HJSol·LS-RND 도입을 위한 상담 요청서를 작성해 보세요.", alternates: { canonical: "/contact/" } };
export default function Contact() { return <><PageIntro label="LET’S BUILD TOGETHER" title={<>업무의 변화는,<br />작은 이야기에서 시작됩니다.</>} description="해결하고 싶은 업무와 가지고 있는 데이터를 알려주세요. 함께 살펴볼 내용을 먼저 정리할 수 있습니다." /><section className="section"><div className="container"><ContactBrief email={site.email} /></div></section></>; }
