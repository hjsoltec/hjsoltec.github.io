export type FaqItem = { question: string; answer: string };
export function Faq({ items }: { items: readonly FaqItem[] }) {
  return <section className="section soft-section"><div className="container faq-layout"><div><div className="eyebrow"><span />FREQUENT QUESTIONS</div><h2>도입 전에<br />자주 묻는 질문.</h2></div><div className="faq-list">{items.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>;
}
