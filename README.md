## 2026-11-10 브로셔 반영본 · v1.2.0

HJSolAISP·HJSolAIRND·HJSolAIEG의 최신 기능별 브로셔를 메인·제품 상세·자료실에 반영했습니다.
기능 화면 108개(53 / 49 / 6)를 분류·검색·페이지 이동·확대 보기로 탐색할 수 있습니다.
전체 PDF 116쪽, 제품별 PDF 55 / 50 / 8쪽과 원본 PowerPoint를 제공합니다.
설명과 화면 출처, 파일 해시는 `docs/BROCHURE_SOURCE_20261110.json`에 기록했습니다.

설치·실행은 아래 기존 절차를 따릅니다. 자세한 변경 내용과 검증 결과는 `docs/BROCHURE_UPDATE_20261110.md`를 확인하세요.

# HJSol 회사 소개 사이트

AI 컨설팅·사내 업무 시스템 구축 역량과 HJSolAIEG·HJSolAISP·HJSolAIRND 제품을 소개하는 **Next.js + TypeScript** 홈페이지입니다.

목표 운영 주소는 **https://hjsoltec.github.io** 입니다. 이 주소가 배포 완료되었다는 의미는 아닙니다. `hjsoltec` 사용자 또는 조직 계정의 저장소 관리 권한이 필요합니다.

## 바로 시작

Node.js 22 이상을 설치한 뒤 프로젝트 루트에서 실행합니다.

```bash
npm ci
npm run dev
```

개발 화면은 http://localhost:3000 에서 확인합니다.

```bash
npm run build
npm run verify
```

완성된 정적 사이트는 `out/` 에 생성됩니다. 별도 Node 서버 없이 GitHub Pages 등 정적 호스팅에서 제공할 수 있습니다. `out/index.html`을 더블클릭하면 루트 경로의 자산·링크가 동작하지 않을 수 있으므로, 개발 서버 또는 호스팅에서 확인합니다. 정적 배포에서는 `next start`를 사용하지 않습니다.

## 포함 페이지

| 주소 | 내용 |
| --- | --- |
| `/` | 회사 핵심 소개, 서비스, 제품, 구축 과정 |
| `/about/` | 회사 소개와 설계 관점 |
| `/solutions/` | AI 컨설팅, 업무 시스템, 연구개발 서비스 |
| `/products/hjsol-aieg/` | HJSolAIEG 전자정부 업무 기반 및 기능 화면 |
| `/products/hjsol/` | HJSolAISP 통합 운영·업무 지원 및 기능 화면 |
| `/products/ls-rnd/` | HJSolAIRND 시험평가·분석예측·지식관리 및 기능 화면 |
| `/resources/` | 제품별 분류·검색과 자료 공개 상태 |
| `/contact/` | 상담 요청서 작성·복사·저장 |
| `/privacy/` | 현재 입력 정보의 처리 방식 |
| `/showcase/rd-studio/` | 기존 R&D Studio 상품 화면 소개 |
| `/showcase/rd-studio/guide.html` | 기존 R&D Studio 화면별 사용자 가이드 |

## 운영 안내

- [GitHub Pages 첫 배포](docs/GITHUB_PAGES.md)
- [사이트 내용·브로셔·매뉴얼 반영](docs/CONTENT_AND_RESOURCES.md)
- [Vercel로 이전할 때](docs/VERCEL.md)
- [확인 결과와 남은 설정](docs/VERIFICATION.md)

중요한 편집 위치는 `src/content/site.ts`, `src/content/resources.json` 입니다. v1.0.2에는 HJSol 제품 PDF와 기존 R&D Studio 브로셔·매뉴얼·화면 소개를 포함했습니다. 자세한 목록과 근거는 [자료 통합 안내](docs/PRODUCT_MATERIALS.md)를 참고하세요.

기본 문의 이메일은 hjsoltec@gmail.com이며 NEXT_PUBLIC_CONTACT_EMAIL로 변경할 수 있습니다. 상담 요청서는 브라우저에서 작성·복사·저장하고 사용자의 메일 앱에서 직접 보냅니다.

## 호스팅 선택의 전제

Vercel Hobby 무료 플랜은 비상업적 개인 용도에 제한됩니다. GitHub Pages도 온라인 사업 운영, 상거래 촉진, 상용 SaaS 제공을 주목적으로 하는 사이트에 이용 제한이 있습니다. 회사 소개라는 이름만으로 허용이 확정되는 것은 아니므로, 실제 운영 용도가 해당 정책에 맞는지 확인합니다. 본 사이트는 회사·기술·제품 설명용 정적 사이트이며 결제·회원가입·상용 시스템 접속 기능을 포함하지 않습니다.

공식 안내 (2026-10-18 확인):

- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- https://vercel.com/docs/plans/hobby
- https://nextjs.org/docs/app/guides/static-exports

## 코드와 공개 자료의 범위

이 프로젝트에는 제품 소개용 웹사이트와 제공된 기능별 브로셔·화면 이미지를 포함했습니다. 업무 시스템의 실행 소스·데이터베이스·비밀 환경설정은 포함하지 않습니다. 최신 기능 설명은 2026-11-10 제공 브로셔를 기준으로 하며 화면의 수치·데이터는 촬영 시점의 예시입니다. 정량 성능, 고객 추천사, 인증, 가격은 임의로 작성하지 않았습니다.

## v1.0.3 SEO/GEO 보완

연락처·본문 폰트 확대를 포함한 수정본입니다. 적용·Google/Bing 등록은 [SEO_GEO_SETUP_KO.md](docs/SEO_GEO_SETUP_KO.md), 변경 범위와 검증은 [SEO_GEO_CHANGELOG.md](docs/SEO_GEO_CHANGELOG.md), [SEO_GEO_VALIDATION.md](docs/SEO_GEO_VALIDATION.md)를 확인하세요.
