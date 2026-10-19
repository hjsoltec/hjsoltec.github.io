# 소개 내용·브로셔·매뉴얼 반영

## 편집 위치

| 바꿀 내용 | 파일 |
| --- | --- |
| 회사명, 운영 주소, 제품 설명, 기능, 구축 단계 | `src/content/site.ts` |
| 자료 제목, 제품 분류, 공개 여부, 파일 링크 | `src/content/resources.json` |
| 홈 구성과 대표 문구 | `src/app/page.tsx` |
| 회사 소개 본문 | `src/app/about/page.tsx` |
| 로고와 아이콘 | `src/components/Icons.tsx` |
| 색상, 폰트, PC·모바일 레이아웃 | `src/app/globals.css` |
| 검색 결과 소개·공유 이미지 | `src/app/layout.tsx`, `public/og.png` |
| 상담 연락처 | 공개 환경변수 `NEXT_PUBLIC_CONTACT_EMAIL` |

작성된 웹 문구는 소개 초안입니다. 제품의 실제 도입 버전과 제공 범위가 확정되면 그에 맞게 문구를 갱신합니다. 기존 R&D Studio 자료를 이번 버전에 포함했습니다. 이후 다른 채널의 파일을 자동으로 감시하거나 가져오지는 않으므로 갱신본은 아래 방식으로 교체합니다.

## 자료를 연결하는 순서

1. 외부 공개용 최종본인지 확인합니다. 내부 서버 주소, 계정, 실험 원본, 고객 정보가 포함된 운영 매뉴얼은 그대로 공개하지 않습니다.
2. `public/downloads/`에 공개 파일을 넣습니다. 파일명은 영문·숫자·하이픈을 권장합니다.
3. `src/content/resources.json`에서 해당 id의 `status`를 `ready`, `href`를 파일 경로, `download`를 `true`로 바꿉니다.
4. `npm run build`와 `npm run verify`를 실행하거나, GitHub에 커밋 후 Actions 결과를 확인합니다.

예: LS-RND 브로셔 PDF를 연결할 때 파일을 `public/downloads/ls-rnd-brochure-v1.pdf`에 넣고 기존 항목을 수정합니다.

```json
{
  "id": "rnd-brochure",
  "title": "LS-RND 제품 브로셔",
  "description": "분석·예측과 연구 업무 연계 흐름을 소개합니다.",
  "product": "ls-rnd",
  "kind": "브로셔",
  "status": "ready",
  "href": "/downloads/ls-rnd-brochure-v1.pdf",
  "download": true
}
```

PDF, PPTX, DOCX 등 정적 파일을 연결할 수 있습니다. `download: true`는 파일 저장 링크입니다. `download: false`는 사이트 내 읽기 페이지로 이동합니다. 자료 하나에 다운로드 하나를 연결하는 구성입니다. PDF와 PPTX를 함께 제공하려면 서로 다른 id로 두 항목을 만듭니다.

현재 검증기는 같은 사이트 경로만 허용합니다. 외부 사이트나 원격 파일에 연결하려면 검증 정책·링크 보안·공개 범위를 함께 수정합니다.

## 자료실 필드

| 필드 | 값 |
| --- | --- |
| `id` | 전체 자료에서 중복되지 않는 영문 id |
| `title`, `description` | 방문자에게 보이는 제목·설명 |
| `product` | `company`, `hjsol`, `ls-rnd` |
| `kind` | 브로셔, 매뉴얼, 웹 가이드 등 표시 이름 |
| `status` | `preparing` 또는 `ready` |
| `href` | 준비 중은 빈 문자열. 공개 자료는 `/`로 시작하는 내부 경로 |
| `download` | 준비 중은 false. 파일 저장은 true |
| `preview` | 선택 항목. 새 창에서 열 PDF의 내부 경로 |
| `format` | 선택 항목. PDF·PowerPoint와 쪽·장 수 표기 |
| `cover` | 선택 항목. 자료실 표지 이미지의 내부 경로 |

## 제품명·브랜드 정리

요청에 따라 회사명을 HJSol로, 제품을 HJSol·LS-RND로 소개했습니다. 향후 LS 표기를 제외한 별도 상품명이 확정되면 `site.ts`의 제품명과 관련 문구, 리소스 제목, SEO 메타데이터, 공유 이미지를 함께 바꿉니다. 기능명과 제품명은 공개 승인된 표현으로 통일합니다.

## 디자인

네이비·화이트·블루를 기본으로, 연두색 버튼을 강조색으로 사용했습니다. 별도 상용 폰트·이미지 라이선스 비용 없이 시스템 한글 폰트를 사용합니다. 제품 도식은 실제 제품 화면 캡처가 아닌 워크플로 구성 예시로 표시했습니다. 실제 캡처가 도착하면 공개 가능한 이미지를 `public/images/`에 넣어 교체할 수 있습니다.

## 주소 변경

`src/content/site.ts`의 `url`을 최종 주소로 변경하면 canonical·sitemap·robots·공유 URL 기준이 함께 반영됩니다. 실제 호스팅 주소는 GitHub/Vercel 등 배포 환경에서 별도 설정합니다. `hjsoltec.github.io`는 GitHub가 관리하는 주소여서 임의로 Vercel에 도메인 연결할 수 없습니다. 자체 도메인으로 이전하면 DNS 설정 권한이 필요합니다.

## 이번 버전의 실제 자료

[제품 자료 통합 안내](PRODUCT_MATERIALS.md)를 참고하세요. 자료 파일은 `public/downloads/`, R&D Studio 소개·가이드는 `public/showcase/rd-studio/`에 있습니다. PDF 열람은 preview, 원본 저장은 href와 download로 연결합니다.
