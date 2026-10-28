export type Brand = "hjsol" | "aieg" | "aisp" | "airnd";

const marks = {
  hjsol: { name: "HJSol", viewBox: "302 182 1380 438", width: 1981, height: 794 },
  aieg: { name: "HJSolAIEG", viewBox: "192 207 1640 372", width: 1981, height: 793 },
  aisp: { name: "HJSolAISP", viewBox: "224 199 1570 408", width: 1981, height: 793 },
  airnd: { name: "HJSolAIRND", viewBox: "185 185 1692 438", width: 1981, height: 793 },
};

// Viewports display the supplied artwork without altering the original files.
export function BrandMark({ brand = "hjsol", className = "" }: { brand?: Brand; className?: string }) {
  const m = marks[brand];
  return <svg className={`brand-mark brand-mark-${brand} ${className}`} viewBox={m.viewBox} role="img" aria-label={m.name}><image href={`/brand/${brand}-logo.png`} width={m.width} height={m.height} /></svg>;
}

const artViews = { hjsol: "630 90 1042 620", aieg: "720 105 950 635", aisp: "730 90 940 655", airnd: "790 105 880 660" };
export function BrandArt({ brand = "hjsol", className = "" }: { brand?: Brand; className?: string }) {
  const descriptions = { hjsol: "공공 업무, 통합 운영과 화학 연구를 연결하는 AI 솔루션", aieg: "공공 업무와 데이터, AI를 연결하는 전자정부 프레임워크", aisp: "모니터링, 쇼핑몰, 영상분석, 번역과 ETL을 연결하는 통합 플랫폼", airnd: "분자 구조와 실험 데이터 분석 화면으로 표현한 화학 연구 AI" };
  return <svg className={`brand-art ${className}`} viewBox={artViews[brand]} role="img" aria-label={descriptions[brand]}><image href={`/brand/${brand}-intro.png`} width="1672" height={brand === "airnd" ? "940" : "941"} /></svg>;
}
