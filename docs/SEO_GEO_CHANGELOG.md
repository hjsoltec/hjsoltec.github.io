# 홈페이지 v1.0.3 변경·영향 범위

기준: v1.0.2 Materials + 2026-10-19 Contact/Font Update.

- `src/lib/seo.ts`: 페이지별 메타정보와 공개 소유권 확인 코드 처리.
- `src/components/JsonLd.tsx`, `src/app/layout.tsx`: 회사·사이트 식별 정보와 안전한 JSON-LD 출력.
- `src/app/products/[slug]/page.tsx`, `src/components/Faq.tsx`: 실제 소개에 근거한 FAQ와 제품 도입·구축 서비스 정보.
- `src/content/discovery.ts`, `src/app/guides/`: 업무 자동화·소재 연구 활용 가이드.
- `src/app/{about,solutions,resources,contact,privacy}/page.tsx`: 페이지별 공유 주소·설명. 자료실은 활용 가이드 연결 추가.
- `src/components/Shell.tsx`: 푸터의 활용 가이드 링크 추가. 기존 연락처 유지.
- `src/app/globals.css`: FAQ·가이드 반응형 스타일을 끝에 추가. 기존 확대 폰트 유지.
- `src/app/sitemap.ts`: 새 공개 URL 3개 추가.
- `.github/workflows/pages.yml`, `.env.example`: Google/Bing에서 실제 발급받은 공개 확인 코드의 선택 설정.
- `scripts/validate-content.mjs`, `scripts/verify-seo.mjs`: 잘못 붙여 넣은 전체 meta 태그 방지와 export 검색 메타정보 검사.
- `package.json`, `package-lock.json`: 홈페이지 v1.0.3 및 검증 명령. 의존성 버전 변경 없음.

공개 사이트의 기본 크롤링 허용은 이미 정상이라 기존 robots 정책을 유지합니다.
기존 앱 서버·DB·계정·모델 설정과 별도 HJSol/LS-RND 배포 패키지를 수정하지 않습니다.
브로셔·매뉴얼·이미지·쇼케이스 파일 29개는 원본과 바이트가 같습니다.
GitHub 커밋·사이트 공개 배포·Google/Bing 소유권 등록은 이 작업에서 수행하지 않았습니다.
