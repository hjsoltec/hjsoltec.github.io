# HJSoltec AI 검색 노출 준비와 등록 절차

대상: https://hjsoltec.github.io/ · 홈페이지 v1.0.3 · 2026-10-19

## 이번에 확인하고 보완한 내용

현재 공개 사이트의 홈페이지, robots.txt, sitemap.xml과 제품 페이지가 HTTP 200으로 열리는 것을 확인했습니다.
기본 크롤링 허용·사이트맵·canonical·Organization 정보는 기존에도 있었습니다.
공개 제품 두 페이지의 `og:url`이 홈페이지 주소로 나오는 것을 확인해 페이지별 주소와 설명으로 정정했습니다.

수정본에는 다음을 포함합니다.

- 페이지별 제목·설명·canonical·공유 정보의 일관성.
- 공개 연락처를 포함한 Organization·WebSite, 제품 도입·구축 Service·WebPage·BreadcrumbList 정보.
- 실제 제품 소개에 근거한 HJSol/LS-RND FAQ 각 4개.
- AI 업무 자동화와 실험 데이터·TDS 활용 가이드 2개, 가이드 목록과 내부 링크.
- 새 가이드를 포함한 13개 사이트맵 URL.
- Google/Bing 계정에서 발급받은 소유권 확인 코드를 빌드에 반영하는 선택 설정.
- 배포 전에 메타정보·JSON-LD·FAQ·링크·사이트맵을 검사하는 `npm run verify`.

기존 브로셔·매뉴얼·제품 화면 자료, 연락처와 본문 확대를 유지합니다.
홈페이지 코드는 정적 소개 사이트이며 HJSol/LS-RND 서버 프로그램을 GitHub Pages에서 실행하는 구성은 아닙니다.
실제 가격·평점·리뷰가 없는 상담형 제품에는 판매 가격이나 평점을 생성하지 않고 도입·구축 서비스 정보를 표시합니다.
이 구조화 데이터의 유효성과 Google의 특정 리치 검색결과 자격 충족은 서로 다른 판단입니다.

## 1. 수정 소스 적용

1. 변경 전 GitHub 저장소의 현재 커밋을 기록합니다.
2. ZIP을 해제한 뒤 **`hjsoltec.github.io` 폴더 안의 내용**을 기존 저장소 루트에 반영합니다.
   ZIP 자체나 바깥 폴더를 저장소 안에 한 단계 더 넣지 않습니다. `package.json`, `src`, `public`,
   `scripts`, `.github/workflows/pages.yml`이 저장소 루트 기준으로 있어야 합니다.
3. 현재 저장소에서 별도로 수정한 내용이 있다면 변경 파일 목록과 비교해 병합합니다.
   연락처/폰트 수정본까지 반영한 v1.0.2를 기준으로 작성했습니다.
4. 배포 전 확인하려면 해당 폴더에서 실행합니다.

   ```bash
   npm ci
   npm run build
   npm run verify
   ```

5. 기존 GitHub Actions 방식으로 커밋하면 빌드와 검증 후 배포됩니다.
   `.github/workflows/pages.yml`은 기존 Pages 동작에 공개 확인 코드 변수만 추가했습니다.
6. 배포 완료 후 다음 주소가 열리는지 확인합니다.

   - https://hjsoltec.github.io/guides/
   - https://hjsoltec.github.io/products/hjsol/
   - https://hjsoltec.github.io/products/ls-rnd/
   - https://hjsoltec.github.io/robots.txt
   - https://hjsoltec.github.io/sitemap.xml

검색 등록 코드를 아직 발급받지 않았다면 비워 둬도 빌드할 수 있습니다.

## 2. Google Search Console 소유권 확인

1. 본인 Google 계정으로 https://search.google.com/search-console 에 로그인합니다.
2. 속성 추가에서 **URL 접두어**를 선택하고 `https://hjsoltec.github.io/`를 입력합니다.
   github.io 전체 도메인의 DNS를 소유한 것처럼 등록하지 않습니다.
3. 소유권 확인 방법에서 **HTML 태그**를 선택합니다.
   제공되는 `<meta name="google-site-verification" content="...">`의 **content 값만** 복사합니다.
4. GitHub 저장소에서 **Settings → Secrets and variables → Actions → Variables → New repository variable**을 엽니다.
   이름은 `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, 값은 본인 계정에서 받은 content 값입니다.
5. Actions에서 Pages 워크플로를 새로 실행합니다. 단순히 변수를 추가하는 것만으로 이전 HTML이 바뀌지는 않습니다.
6. 배포 후 홈페이지 원본의 `<head>`에 발급받은 `google-site-verification` 값이 있는지 확인합니다.
7. Search Console로 돌아가 **확인**을 누릅니다. 확인 태그는 이후에도 유지합니다.

이 코드는 홈페이지에 공개하는 소유권 확인 값입니다. Google 비밀번호·로그인 토큰·API 키를 넣는 칸이 아닙니다.
`.env.example`에는 빈 항목만 제공하며 실제 계정의 확인 코드를 임의로 만들지 않았습니다.

## 3. 사이트맵 제출과 대표 URL 확인

소유권 확인 후 Search Console의 **Sitemaps/사이트맵**에서 `sitemap.xml`을 제출합니다.
전체 주소는 `https://hjsoltec.github.io/sitemap.xml`입니다.

**URL 검사**에서 홈페이지, HJSol·LS-RND 제품 소개, 새 활용 가이드를 검사합니다.
도구에 표시되는 접근·색인 문제를 먼저 해결하고 필요한 URL의 색인 생성을 요청합니다.
사이트맵 제출이나 색인 요청은 검색 노출과 순위를 보장하지 않습니다.

Google 공식 안내에 따라 **Search generative AI control**에서 사이트의 링크·콘텐츠 포함 상태도 확인할 수 있습니다.
기본 상태는 포함이며, 상위 속성에서 상속하거나 소유자가 제외로 바꾼 경우 실제 표시값을 확인합니다.
이 설정은 Google 검색의 생성형 AI 기능에 관한 것으로 다른 서비스나 모델 학습 설정 전체를 제어하지 않습니다.

## 4. Bing Webmaster Tools 등록

1. 본인 계정으로 https://www.bing.com/webmasters 에 로그인합니다.
2. 이미 확인된 Google Search Console 사이트를 가져오거나, `https://hjsoltec.github.io/`를 직접 추가합니다.
3. 직접 등록에서 HTML 메타 태그를 선택했다면 발급받은 `msvalidate.01`의 content 값을 복사합니다.
4. GitHub Actions의 Repository variable `NEXT_PUBLIC_BING_SITE_VERIFICATION`에 그 값만 저장합니다.
5. Pages를 다시 빌드·배포한 후 Bing에서 소유권 확인을 완료합니다.
6. Sitemaps에 `https://hjsoltec.github.io/sitemap.xml`을 제출하고 URL 검사·색인 상태를 확인합니다.

Google에서 가져오는 방법으로 확인을 완료했다면 Bing 메타 태그를 추가로 발급받을 필요는 없습니다.

## 5. ChatGPT·Claude 등의 검색 접근

현재 `robots.txt`의 `User-Agent: * / Allow: /` 설정은 검색 크롤러의 접근을 허용합니다.
OpenAI는 검색용 OAI-SearchBot과 모델 학습용 GPTBot을 별개로 설명하고,
Anthropic도 Claude-SearchBot과 다른 봇의 목적을 구분합니다.
향후 접근 정책을 바꿀 때는 검색용 크롤러가 차단되지 않는지 함께 확인합니다.

크롤러 접근 허용은 페이지가 실제로 수집·색인되거나 답변에 인용되었다는 증거가 아닙니다.
특정 AI의 답변이나 추천 순위를 강제로 지정하는 설정은 없습니다.
독자가 확인할 수 있는 기능·적용 범위·출처와 실제 업무에 도움이 되는 콘텐츠를 계속 보완합니다.

## 6. 노출과 실제 유입 확인

| 확인할 것 | 도구·해석 |
|---|---|
| 일반 Google 검색 노출·클릭·색인 | Search Console의 검색 실적·페이지/URL 검사 |
| Google AI 검색의 링크 노출 | Search Console의 Generative AI performance report. 공식 안내상 AI Overviews·AI Mode의 노출 데이터이며, 데이터가 충분하지 않으면 보고서가 보이지 않을 수 있음 |
| Bing 검색·색인 상태 | Bing Webmaster Tools의 Search Performance·URL Inspection |
| ChatGPT·Gemini·Claude 답변의 상품·사이트 언급 | 실제 실행한 질문·날짜·서비스/모델·답변·출처 URL을 표본으로 기록. 결과는 질문과 실행 환경에 따라 달라짐 |
| 실제 홈페이지 방문·문의 전환 | 별도의 웹 분석과 전환 수집을 구성한 범위에서 측정. 리퍼러 누락·직접 방문은 AI 기여를 확정하기 어려움 |

이 수정은 정적 홈페이지에 별도의 방문 추적 코드를 추가하지 않습니다. 기존 개인정보 안내의 동작도 유지합니다.
HJSol 쇼핑몰의 GEO 대시보드와 이 GitHub 홈페이지의 방문 통계가 자동으로 합쳐지는 구성은 아닙니다.
Google AI 보고서도 ChatGPT·Claude 전체 노출이나 비공개 대화를 보여주는 보고서는 아닙니다.

## 7. 되돌리기

GitHub에 적용하기 전 기록한 커밋과 이번 커밋의 diff를 확인합니다.
문제가 있으면 이번 변경 커밋을 revert하는 새 커밋으로 되돌리고 Pages 배포 결과를 확인합니다.
다른 사용자의 후속 변경까지 지우는 강제 push나 저장소 초기화는 하지 않습니다.
소유권 확인 코드를 포함한 파일을 되돌리면 인증에 영향을 줄 수 있으므로 이후에도 태그가 있는지 확인합니다.

## 공식 안내

- [Google 생성형 AI 검색 최적화 안내](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google 소유권 확인](https://support.google.com/webmasters/answer/9008080)
- [Google 사이트맵 생성·제출](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google Search generative AI control](https://support.google.com/webmasters/answer/16908024)
- [Google 생성형 AI 실적 보고서](https://support.google.com/webmasters/answer/16984139)
- [Bing Webmaster Tools 시작 안내](https://blogs.bing.com/webmaster/2025/6/Start-Using-Bing-Webmaster-Tools-to-Improve-Your-Site-Visibility/)
- [OpenAI 검색·학습 크롤러](https://developers.openai.com/api/docs/bots)
- [Anthropic 크롤러 안내](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [GitHub Actions 변수](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables)
