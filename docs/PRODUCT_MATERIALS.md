# 제품 브로셔·소개 자료 통합 안내

버전: 홈페이지 v1.0.2 / 2026-10-19
운영 기준 주소: https://hjsoltec.github.io

## 포함한 자료

| 제품 | 자료 | 형식·분량 | 사이트 경로 |
| --- | --- | --- | --- |
| HJSol | 제품 브로셔 | PDF 4쪽 | /downloads/hjsol-brochure-ko.pdf |
| HJSol | 제품 요약 소개 | PDF 1쪽 | /downloads/hjsol-product-overview-ko.pdf |
| HJSol | 웹 제품 소개 | 웹 페이지 | /products/hjsol/ |
| 소재 연구 플랫폼 | R&D Studio 브로셔 | PDF 10쪽 | /downloads/rd-studio-brochure-ko.pdf |
| 소재 연구 플랫폼 | 브로셔 원본 | PowerPoint 10장 | /downloads/rd-studio-brochure-ko.pptx |
| 소재 연구 플랫폼 | R&D Studio 매뉴얼 | PDF 18쪽 | /downloads/rd-studio-user-manual-ko.pdf |
| 소재 연구 플랫폼 | 매뉴얼 원본 | PowerPoint 18장 | /downloads/rd-studio-user-manual-ko.pptx |
| 소재 연구 플랫폼 | 상품 화면 소개 | 웹 페이지 | /showcase/rd-studio/ |
| 소재 연구 플랫폼 | 화면별 사용자 가이드 | 웹 페이지 | /showcase/rd-studio/guide.html |

자료실 /resources/ 에서 제품별로 분류·검색하고, PDF를 새 창에서 열거나 파일을 저장할 수 있습니다. 회사 전체 브로셔와 HJSol 전체 사용자 매뉴얼은 이번 자료 범위에 포함하지 않아 준비 중으로 유지했습니다.

## 자료의 출처와 반영 범위

### HJSol

별도 완성 브로셔를 찾지 못해, 보관된 `HJSol_v0.001.34_GEO_AISearch_UiVersionFix1_PrivateConfig_20261019.tar.gz`의 다음 문서를 읽고 공개 소개용 PDF를 새로 작성했습니다.

- docs/overview/ARCHITECTURE.md
- docs/SHOPPING_V25_SETUP_KO.md
- docs/AI_AGENT_RPA_V17_KO.md
- docs/operations/MOBILE_VOICE_VIDEO_TRANSLATION.md
- docs/operations/GEO_AI_SEARCH_V34.md
- docs/release/v0.001.34/CHANGELOG.md

확인한 범위는 고객·관리자 웹과 상품·주문 운영, 상품정보 수집·검토, AI 공급자 연결과 승인 기반 RPA, 음성·번역·영상, AI 상품 검색과 GEO 관측 성과 관리입니다. 실제 모델·외부 API·운영 서버·Windows/모바일 앱을 이번 홈페이지 작업에서 실행 검증하지는 않았습니다.

패키지 본체·운영 환경파일·내부 DB·실험 원본은 홈페이지에 포함하지 않았습니다. PDF에는 내부 서버 경로나 접근 정보를 옮기지 않았습니다.

### 소재 연구 플랫폼 / R&D Studio

다른 대화에서 제작한 다음 원본을 사용했습니다.

- RD_Studio_Brochure_KO_20261018.pptx (10장)
- RD_Studio_User_Manual_KO_20261018.pptx (18장)
- R&D Studio 소재 연구 플랫폼의 상품 소개·guide.html·공개 이미지·글꼴 라이선스

기존 홍보 자료의 R&D Studio 표기를 보존했습니다. 두 PowerPoint는 원본과 바이트가 일치합니다. PDF는 원본을 렌더링한 열람용 사본이며, 편집·텍스트 활용은 PowerPoint 원본을 사용합니다.

웹 소개·가이드는 회사 사이트에 포함했습니다. 회사 홈·자료실 이동 링크와 canonical 주소를 추가하고 PowerPoint 링크를 공통 다운로드 폴더로 연결했습니다. 원래 R&D Studio 사이트 자체는 변경하지 않았습니다. 화면 이미지는 기존 자료가 밝힌 대로 기능 설명용 재구성·가상 데이터이며 실제 성능 검증 수치가 아닙니다.

## 이후 갱신

자료를 교체하면 src/content/resources.json의 제목·분량·설명을 같이 바꾸고 다시 빌드합니다. 공개된 자료와 운영 버전이 다를 수 있으므로 제품별 버전과 문서 기준일을 함께 관리합니다. 포함 파일의 SHA-256은 MATERIALS_MANIFEST.json에 기록했습니다.
