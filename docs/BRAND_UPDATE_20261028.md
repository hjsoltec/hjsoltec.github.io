# HJSol 브랜드 반영 — 2026-10-28

버전: 1.1.0

## 반영 내용

- 제공된 HJSol·HJSolAIEG·HJSolAISP·HJSolAIRND 로고와 소개 이미지 8개를 원본 그대로 `public/brand/`에 포함.
- SVG viewport로 원본 이미지의 로고·일러스트 영역을 배치하고 제목·버튼·설명은 HTML로 구현.
- 메인 메시지를 “AI로 연결하고, AX로 완성합니다”로 변경하고 밝은 블루·청록 디자인 적용.
- 세 솔루션 선택 탭 및 각 제품 상세 소개, 자료실 분류, 상담 선택 항목 반영.
- AIEG 상세 경로 `/products/hjsol-aieg/` 추가. 기존 `/products/hjsol/`·`/products/ls-rnd/` 경로는 유지하고 표시명을 HJSolAISP·HJSolAIRND로 변경.
- 기존 브로셔·매뉴얼·제품 화면은 기존 버전 자료로 명시하고 유지.
- 공유 이미지, 검색 메타데이터 및 사이트맵에 새 브랜드와 AIEG 페이지 반영.

## 검증

- TypeScript 검사 통과.
- Next.js 프로덕션 정적 빌드 통과.
- 정적 출력의 로컬 링크·이미지·앵커·자료 파일 검사 통과.
- canonical·OG·설명·H1·JSON-LD·FAQ·사이트맵 검사 통과.
- 브라우저 화면·실제 클릭 검증은 환경 문제로 미완료. 제공 브라우저 런타임이 읽기 전용 파일시스템 오류로 시작되지 않음. 관리형 미리보기는 Next.js에 `--host` 인수를 전달하여 시작 실패. 애플리케이션의 GitHub Pages 설정과 개발 명령은 유지.

## 배포 범위

기존 Sites 프로젝트와 접근 권한을 유지하여 갱신. GitHub Pages에 직접 배포한 결과가 아님.
