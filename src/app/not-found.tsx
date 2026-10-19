import Link from "next/link";
export default function NotFound() { return <section className="section not-found"><div className="container"><span className="micro-label">404 · PAGE NOT FOUND</span><h1>이 페이지를 찾을 수 없습니다.</h1><p>주소를 다시 확인하거나 홈에서 필요한 정보를 찾아보세요.</p><Link href="/" className="button button-dark">홈으로 돌아가기 →</Link></div></section>; }
