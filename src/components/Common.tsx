import Link from "next/link";
import { Icon } from "./Icons";
import { delivery } from "@/content/site";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) { return <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span />{children}</div>; }
export function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) { return <Link href={href} className={`arrow-link ${light ? "light" : ""}`}>{children}<Icon name="arrow" size={19} /></Link>; }
export function CTA() { return <section className="cta-section"><div className="container cta-inner"><div><Eyebrow light>LET’S BUILD SOMETHING USEFUL</Eyebrow><h2>다음 업무의 변화,<br />함께 설계해 볼까요?</h2><p>도입할 AI보다, 해결하고 싶은 업무부터 이야기해 주세요.</p></div><Link href="/contact/" className="button button-lime">프로젝트 이야기하기 <Icon name="diagonal" size={20} /></Link></div></section>; }
export function DeliverySteps() { return <div className="delivery-grid">{delivery.map(step => <article key={step.n}><span className="step-number">{step.n}</span><h3>{step.title}</h3><p>{step.body}</p><div className="step-output">{step.output}</div></article>)}</div>; }
export function PageIntro({ label, title, description }: { label: string; title: React.ReactNode; description: string }) { return <section className="page-intro"><div className="container"><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p>{description}</p></div></section>; }
