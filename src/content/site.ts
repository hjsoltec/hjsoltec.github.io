export const site = {
  name: "HJSol",
  url: "https://hjsoltec.github.io",
  title: "HJSol | AI로 연결하고, AX로 완성합니다",
  description: "업무·운영·연구를 잇는 AI 통합 솔루션. HJSolAIEG 전자정부 프레임워크, HJSolAISP 서버·GPU·DB 통합 운영 플랫폼, HJSolAIRND 화학 연구·분석 솔루션을 만나보세요.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "hjsoltec@gmail.com",
};

export const services = [
  { id: "consulting", number: "01", icon: "compass", en: "AI CONSULTING", title: "우리 업무에 맞는 AI의 시작", description: "현업의 업무 흐름과 보유 데이터를 함께 살펴보고, AI를 적용할 과제와 도입 순서를 구체화합니다.", points: ["업무·데이터 현황 진단", "적용 과제 선정과 PoC 설계", "모델·운영 환경 검토"] },
  { id: "systems", number: "02", icon: "layers", en: "BUSINESS SYSTEMS", title: "흩어진 업무를 하나의 흐름으로", description: "수집, 검색, 처리, 검토, 결과 활용까지. 기존 시스템과 연결되는 사내 업무 환경을 설계하고 구축합니다.", points: ["문서·데이터 검색과 업무 자동화", "기존 DB·시스템 연계", "사용자·이력·검토 흐름 구성"] },
  { id: "research", number: "03", icon: "flask", en: "R&D INTELLIGENCE", title: "데이터가 다음 실험으로 이어지도록", description: "실험 데이터와 기술 문서를 연결하고, 예측·추천 결과가 연구자의 검토와 시험평가로 이어지도록 돕습니다.", points: ["실험 데이터와 기술자료 활용", "물성 예측·조성 탐색", "검토·시험평가 연계 설계"] },
] as const;

export type ProductSlug = "hjsol-aieg" | "hjsol" | "ls-rnd";
export const productOrder: ProductSlug[] = ["hjsol-aieg", "hjsol", "ls-rnd"];
export const products = {
  "hjsol-aieg": {
    "name": "HJSolAIEG",
    "brand": "aieg",
    "label": "AI 전자정부 프레임워크",
    "category": "AI E-GOVERNMENT",
    "color": "purple",
    "headline": "공통 업무의 기반에,\nAI 지원을 더합니다",
    "summary": "공통 로그인과 업무 선택 화면에서 포털·홈페이지·내부업무로 연결합니다. 공지·자료실·사용자·권한 관리와 AI 도우미를 공통 화면 구조로 제공합니다.",
    "tags": [
      "공통 로그인",
      "포털·홈페이지",
      "내부업무",
      "사용자·권한",
      "AI 도우미"
    ],
    "audience": "포털·홈페이지·내부업무의 공통 기능을 정비하고 업무 화면에 AI 지원을 연결하려는 조직",
    "features": [
      {
        "title": "공통 로그인과 업무 선택",
        "text": "인증 후 업무 선택 포털에서 사용할 서비스로 이동합니다. 공통 진입점에서 각 업무 영역을 선택합니다.",
        "icon": "shield"
      },
      {
        "title": "포털·홈페이지·내부업무",
        "text": "독립된 업무 영역마다 업무 홈과 메뉴를 제공합니다. 홈페이지 공지·자료실·일정, 포털 FAQ·Q&A와 내부 관리 기능으로 연결합니다.",
        "icon": "layers"
      },
      {
        "title": "공통 운영과 권한 관리",
        "text": "사용자·메뉴·조직·권한 관리와 내 정보·비밀번호 설정을 공통 기반으로 구성합니다.",
        "icon": "file"
      },
      {
        "title": "화면 내 AI 도우미",
        "text": "현재 업무 화면 위에서 AI 대화창을 열어 질문하고 응답을 확인합니다. 별도 AI 작업공간에서도 업무 질의를 이어갑니다.",
        "icon": "sparkles"
      }
    ],
    "flow": [
      "공통 로그인",
      "업무 영역 선택",
      "운영·관리",
      "AI 업무 지원"
    ],
    "cases": [
      "포털·홈페이지·내부업무의 공통 진입점 구성",
      "사용자·메뉴·조직·권한 관리 체계 정비",
      "업무 화면의 AI 도우미와 작업공간 활용"
    ],
    "scope": "브로셔의 업무 홈·공통 메뉴·AI 지원 화면을 기준으로 소개합니다. 실제 업무별 메뉴와 연계 범위는 도입 구성에 맞게 확인합니다."
  },
  "hjsol": {
    "name": "HJSolAISP",
    "brand": "aisp",
    "label": "AI 통합 운영·업무 지원",
    "category": "AI INTEGRATED OPERATIONS",
    "color": "blue",
    "headline": "서버 상태에서 원인 분석,\n원격 점검까지 한곳에서",
    "summary": "서버·GPU·DB 상태를 관찰하고 경고 분석과 원격 점검을 연결합니다. RPA·영상감지·번역·AI 대화와 쇼핑몰 운영을 통합 포털에서 제공합니다.",
    "tags": [
      "서버·GPU",
      "DB·슬로우쿼리",
      "경고 AI 분석",
      "Linux·Windows 원격",
      "AI 업무 지원"
    ],
    "audience": "여러 서버와 DB를 함께 점검하고 경고 대응·원격접속·AI 업무 지원을 하나의 운영 흐름으로 연결하려는 조직",
    "features": [
      {
        "title": "다중 서버·프로세스 모니터링",
        "text": "CPU·메모리·디스크·네트워크를 서버별로 비교합니다. 시간별 자원 이력과 실시간·과거 프로세스 목록에서 부하 원인 후보를 확인합니다.",
        "icon": "chart"
      },
      {
        "title": "GPU·LLM·전력 현황",
        "text": "GPU 장치와 사용 프로세스, 사용률·온도·전력·클럭의 추이를 살펴봅니다. LLM 추론과 전력은 연결한 수집 대상에서 제공하는 지표를 표시합니다.",
        "icon": "terminal"
      },
      {
        "title": "DB 성능과 슬로우쿼리",
        "text": "Oracle·PostgreSQL·Tibero·DB2·SQL Server 점검 화면에서 세션·잠금·대기·SQL 실행 정보를 확인합니다. 느린 SQL의 AI 분석과 튜닝 제안을 검토합니다.",
        "icon": "database"
      },
      {
        "title": "경고 분석·원격 점검·감시 정책",
        "text": "경고 시점의 자원과 프로세스를 AI 분석 설명과 비교하고 조치 이력을 기록합니다. Linux SSH·Windows 원격접속과 사용자 지정 임계치·슬로우쿼리 정책을 제공합니다.",
        "icon": "shield"
      },
      {
        "title": "RPA·영상감지·번역·AI 대화",
        "text": "AI 공급자와 실행 조건을 선택해 RPA 작업을 구성합니다. 카메라·영상감지, 이미지 문자 번역, 다국어 음성·텍스트 번역과 AI 대화 작업공간을 활용합니다.",
        "icon": "sparkles"
      },
      {
        "title": "쇼핑몰·GEO와 통합 서비스",
        "text": "상품정보 수집·카테고리·재고·이미지와 고객 쇼핑몰을 관리합니다. AI 유입·방문·주문 기록을 확인하고 주식·로또·열차 조회 서비스로 연결합니다.",
        "icon": "globe"
      },
      {
        "title": "ETL 관리와 데이터 연결",
        "text": "기존 데이터의 추출·변환·적재 흐름을 업무에 맞게 구성합니다. 실제 연결 대상과 수집 범위는 설치 환경에 맞춰 확인합니다.",
        "icon": "layers"
      }
    ],
    "flow": [
      "상태·이력 확인",
      "경고·SQL 분석",
      "원격 점검·기록",
      "감시 정책 조정"
    ],
    "cases": [
      "다중 서버·GPU·DB의 통합 운영 점검",
      "느린 SQL과 경고 원인의 AI 분석 및 조치 기록",
      "RPA·번역·영상감지와 상품 운영의 통합 활용"
    ],
    "scope": "2026-11-10 브로셔를 기준으로 소개합니다. GPU·LLM·전력 지표는 장치 지원과 수집 대상 등록이 필요합니다. SQL 본문 분석은 SQL 수집 설정에 따릅니다. AI 분석·튜닝 제안은 담당자가 검토하며, GEO는 관측한 방문·주문·답변 표본 범위의 지표입니다."
  },
  "ls-rnd": {
    "name": "HJSolAIRND",
    "brand": "airnd",
    "label": "AI 화학 연구·분석 솔루션",
    "category": "AI RESEARCH & DEVELOPMENT",
    "color": "mint",
    "headline": "시험평가에서 예측,\n연구 근거까지 연결합니다",
    "summary": "시험평가와 실험 데이터 분석을 연결하는 AI 연구 패키지입니다. 작업지시서·배합·시험 Matrix에서 모델 학습·물성 예측, 논문·특허·사내 보고서까지 함께 관리합니다.",
    "tags": [
      "시험평가·작업지시서",
      "물성 학습·예측",
      "미세증분·SHAP",
      "논문·특허",
      "연구 보고서"
    ],
    "audience": "시험평가와 배합·물성 데이터를 연결하고 예측 결과·기술자료·작업 기록을 함께 검토하려는 화학·소재 연구 조직",
    "features": [
      {
        "title": "시험평가와 배합·시험 Matrix",
        "text": "작업지시서의 샘플별 원재료 투입량과 시험 항목을 편집·비교합니다. 자재·특성·시험조건 기준정보와 시험 처방표·결재 요청을 관리합니다.",
        "icon": "file"
      },
      {
        "title": "파일·실험 DB·챔피언 모델",
        "text": "파일 업로드, 실험 DB 조건 조회, 기존 챔피언 모델 선택으로 분석을 준비합니다. 원재료와 물성 조건으로 데이터셋을 구성합니다.",
        "icon": "database"
      },
      {
        "title": "물성별 모델 학습·평가",
        "text": "목표 물성·단위·학습 가능 상태를 확인하고 알고리즘별 평가 결과를 비교합니다. 유사 실험 Top-N과 예측값을 함께 검토합니다.",
        "icon": "chart"
      },
      {
        "title": "미세증분·민감도·예측 근거",
        "text": "원재료 투입 범위와 간격에 따른 물성 변화 추이를 비교합니다. 민감도 요약, SHAP 기여도와 TDS·화학적 근거를 확인합니다.",
        "icon": "flask"
      },
      {
        "title": "논문·특허·사내 보고서·TDS",
        "text": "지식관리에서 연구자료를 검색하고 검색 이력·PDF 수집 상태를 조회합니다. 연구 PDF와 사내 보고서를 직접 등록하고 TDS·대체 원료 후보를 탐색합니다.",
        "icon": "search"
      },
      {
        "title": "연구 보고서와 작업 기록",
        "text": "분석 결과와 배합·시험 Matrix를 Excel·CSV·Word로 내보냅니다. 중요 질의응답·첨부파일·작업이력과 학습·검증 상태를 보관합니다.",
        "icon": "check"
      }
    ],
    "flow": [
      "시험·실험 데이터",
      "모델 학습·예측",
      "배합 변화·근거 검토",
      "보고서·지식 관리"
    ],
    "cases": [
      "작업지시서와 시험 처방표의 배합·시험 관리",
      "원재료 투입량 변화에 따른 물성 비교와 근거 검토",
      "논문·특허·사내 보고서와 연구 결과의 통합 관리"
    ],
    "scope": "예측·미세증분·SHAP 결과는 연구자의 검토와 실제 시험을 지원하는 참고 정보입니다. 문헌·TDS의 설명과 실측 결과를 구분해 확인하며, 자료 수집·모델 활용 범위는 연결 설정에 따릅니다."
  }
} as const;

export const delivery = [
  { n: "01", title: "업무를 이해합니다", body: "사용자, 데이터, 기존 시스템을 살펴보고 해결할 과제를 정합니다.", output: "업무 진단 · 적용 범위" },
  { n: "02", title: "작게 검증합니다", body: "실제 업무 사례와 데이터를 바탕으로 적용 가능성을 확인합니다.", output: "PoC · 검증 기준" },
  { n: "03", title: "현장에 연결합니다", body: "기존 환경과 연결하고, 권한과 검토 절차를 반영해 구축합니다.", output: "시스템 구축 · 연동" },
  { n: "04", title: "운영하며 개선합니다", body: "사용법과 운영 절차를 정리하고, 사용 경험을 다음 개선에 반영합니다.", output: "매뉴얼 · 운영 지원" },
] as const;
