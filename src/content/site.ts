export const site = {
  name: "HJSol",
  url: "https://hjsoltec.github.io",
  title: "HJSol | AI 컨설팅 · 사내 업무 시스템 구축",
  description: "HJSol은 AI 컨설팅과 사내 업무 시스템 구축을 통해 데이터, 사람, 업무를 연결합니다. HJSol 업무 지원 플랫폼과 LS-RND 연구개발 플랫폼을 만나보세요.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "hjsoltec@gmail.com",
};

export const services = [
  { id: "consulting", number: "01", icon: "compass", en: "AI CONSULTING", title: "우리 업무에 맞는 AI의 시작", description: "현업의 업무 흐름과 보유 데이터를 함께 살펴보고, AI를 적용할 과제와 도입 순서를 구체화합니다.", points: ["업무·데이터 현황 진단", "적용 과제 선정과 PoC 설계", "모델·운영 환경 검토"] },
  { id: "systems", number: "02", icon: "layers", en: "BUSINESS SYSTEMS", title: "흩어진 업무를 하나의 흐름으로", description: "수집, 검색, 처리, 검토, 결과 활용까지. 기존 시스템과 연결되는 사내 업무 환경을 설계하고 구축합니다.", points: ["문서·데이터 검색과 업무 자동화", "기존 DB·시스템 연계", "사용자·이력·검토 흐름 구성"] },
  { id: "research", number: "03", icon: "flask", en: "R&D INTELLIGENCE", title: "데이터가 다음 실험으로 이어지도록", description: "실험 데이터와 기술 문서를 연결하고, 예측·추천 결과가 연구자의 검토와 시험평가로 이어지도록 돕습니다.", points: ["실험 데이터와 기술자료 활용", "물성 예측·조성 탐색", "검토·시험평가 연계 설계"] },
] as const;

export type ProductSlug = "hjsol" | "ls-rnd";
export const products = {
  hjsol: {
    name: "HJSol", label: "AI 업무·커머스 플랫폼", category: "BUSINESS AUTOMATION", color: "blue",
    headline: "업무와 커머스,\nAI와 함께 연결합니다.",
    summary: "상품정보의 수집과 운영, AI 업무 지원, 콘텐츠 검토와 성과 확인을 연결하는 플랫폼입니다. 기존 패키지의 기능을 업무 환경에 맞게 선택하고 활용합니다.",
    tags: ["업무·커머스", "AI 도우미·RPA", "AI 검색·GEO"],
    audience: "상품정보와 운영 업무를 통합하고, AI 활용과 승인 기반 자동화·상품 검색을 함께 검토하려는 조직",
    features: [
      { title: "커머스 운영과 정보 수집", text: "고객·관리자 웹의 상품·재고·주문 업무와 허용된 상품정보 수집·원문 검토를 연결합니다.", icon: "database" },
      { title: "AI 업무 지원과 RPA", text: "설정한 AI 공급자와 허용된 Windows 로컬 에이전트를 활용하고, 계획·도구·실행 이력을 확인합니다.", icon: "sparkles" },
      { title: "AI 상품 검색·GEO", text: "실제 등록 상품 후보를 검색하고, 근거 기반 콘텐츠를 검토·게시하며 관측한 유입·행동·주문 성과를 살펴봅니다.", icon: "search" },
      { title: "음성·번역·영상 활용", text: "서버와 지원 모델을 연결해 음성 입력·재생, 한↔영·일·중 번역과 영상감지 기능을 활용합니다.", icon: "globe" },
    ],
    flow: ["업무 정보 수집", "저장·정리", "AI 활용", "결과 확인"],
    cases: ["여러 출처의 상품·기술 정보 수집과 검토", "허용된 PC 업무의 계획·승인·실행", "등록 상품의 AI 검색과 GEO 성과 확인"],
    scope: "v0.001.34 문서 기준의 기능 소개입니다. 수집·RPA·음성·영상 기능은 권한·설정·지원 모델에 따라 확인합니다. GEO 수치는 관측한 방문과 표본 범위이며 전체 AI 노출이나 순위를 보장하지 않습니다.",
  },
  "ls-rnd": {
    name: "LS-RND", label: "연구개발 플랫폼", category: "RESEARCH INTELLIGENCE", color: "mint",
    headline: "실험의 기록에서,\n다음 조성의 가능성까지.",
    summary: "실험 데이터, 기술자료, 분석·예측, 시험평가를 연결하는 연구개발 플랫폼입니다. 연구자가 결과를 비교하고 검토하며 다음 실험으로 이어가는 과정을 지원합니다.",
    tags: ["물성 예측", "배합·조성 탐색", "연구 업무 연계"],
    audience: "축적한 소재·실험 데이터를 활용해 배합과 물성을 검토하고, 분석 결과를 시험평가 업무로 연결하려는 연구 조직",
    features: [
      { title: "실험 데이터 활용", text: "파일과 DB에서 실험 데이터를 구성하고, 학습에 사용할 물성과 데이터 상태를 확인합니다.", icon: "database" },
      { title: "예측과 조성 탐색", text: "물성 예측·조성 추천·미세증분 탐색으로 후보를 비교하고 목표 조건을 검토합니다.", icon: "chart" },
      { title: "기술자료 기반 검토", text: "TDS·논문·특허 등 기술자료를 검색하고, 출처를 바탕으로 분석 결과의 검토를 돕습니다.", icon: "search" },
      { title: "검토와 시험평가 연결", text: "조성 변경 이력과 사람의 검토를 관리하고, 선정 결과를 시험계획과 작업지시서 초안으로 연결합니다.", icon: "check" },
    ],
    flow: ["데이터 구성", "학습·예측", "후보 비교·검토", "시험평가 연결"],
    cases: ["목표 물성을 고려한 배합 후보 검토", "원재료 대체 후보와 미세 조성 변화 비교", "분석 결과와 실측 결과의 후속 검토"],
    scope: "예측 결과는 실험을 지원하는 참고 정보이며, 실제 적용은 연구자의 검토와 시험으로 확인합니다. 연결 범위는 도입 버전에 따라 확인합니다.",
  },
} as const;

export const delivery = [
  { n: "01", title: "업무를 이해합니다", body: "사용자, 데이터, 기존 시스템을 살펴보고 해결할 과제를 정합니다.", output: "업무 진단 · 적용 범위" },
  { n: "02", title: "작게 검증합니다", body: "실제 업무 사례와 데이터를 바탕으로 적용 가능성을 확인합니다.", output: "PoC · 검증 기준" },
  { n: "03", title: "현장에 연결합니다", body: "기존 환경과 연결하고, 권한과 검토 절차를 반영해 구축합니다.", output: "시스템 구축 · 연동" },
  { n: "04", title: "운영하며 개선합니다", body: "사용법과 운영 절차를 정리하고, 사용 경험을 다음 개선에 반영합니다.", output: "매뉴얼 · 운영 지원" },
] as const;
