# 향후 Vercel로 운영할 때

현재 우선 배포 대상은 **GitHub Pages의 hjsoltec.github.io**입니다. Vercel 계정 연결·프로젝트 생성·요금제 신청은 수행하지 않았습니다.

## GitHub와 Vercel의 역할

| 구성 | GitHub Pages 운영 | Vercel 운영 |
| --- | --- | --- |
| 소스 저장·변경 이력 | GitHub 저장소 | 같은 GitHub 저장소 |
| 빌드·배포 | 포함된 GitHub Actions | Vercel Git 연동 |
| 기본 운영 주소 | `https://hjsoltec.github.io` | 할당된 `https://프로젝트명.vercel.app` |
| Next.js 정적 소개 페이지 | 가능 | 가능 |
| Next.js 서버 기능 | 불가 | 별도 서버 기능을 구현하고 플랜·한도 확인 |
| 회사·상품 홍보용 요금 검토 | Pages 이용 제한 검토 | Hobby는 비상업적 개인 용도 제한, 상업용 플랜 검토 |

`hjsoltec.github.io`는 GitHub의 도메인입니다. 같은 소스를 Vercel에 올려도 그 주소가 Vercel 주소로 바뀌거나 Vercel 도메인으로 등록되는 것은 아닙니다.

## 정적 사이트 그대로 배포

1. 상업적 회사 사이트 운영에 적합한 Vercel 플랜을 검토합니다. 무료 Hobby로 상업 사이트 운영이 가능하다고 가정하지 않습니다.
2. Vercel에서 GitHub 저장소를 Import합니다.
3. 이 정적 배포 구성에서는 **Framework Preset: Other**를 선택합니다.
4. **Install Command:** `npm ci`
5. **Build Command:** `npm run build`
6. **Output Directory:** `out`
7. Node.js 버전은 22 이상을 사용합니다.
8. 필요한 경우 `NEXT_PUBLIC_CONTACT_EMAIL`에 공개 이메일을 설정합니다.
9. 최종 운영 주소가 정해지면 `src/content/site.ts`의 `url`을 변경하고 재배포합니다.

이 소스에는 `vercel.json`이 없으며, Next.js 서버 런타임을 전제하지 않습니다. Vercel에서 Next.js를 자동 인식하더라도 위 안내는 Other 프리셋으로 `out`을 제공하는 정적 호스팅 경로입니다.

## 서버 기능이 필요해질 때

문의 자동 접수, 회원 로그인, 관리자 문서 업로드 등은 현재 정적 사이트의 기능이 아닙니다. 이후 서버 API·인증·저장소와 실제 개인정보 처리 안내를 설계하고 검증한 뒤 추가합니다. 서버 방식으로 전환할 때는 `output: 'export'`와 빌드 후처리·검증 스크립트, 배포 설정을 함께 수정합니다.

HJSol·LS-RND의 Spring/Django/PostgreSQL/로컬 AI 전체를 홈페이지와 함께 Vercel에 그대로 올리는 구성은 아닙니다. 회사 소개 사이트와 실제 업무 서비스의 배포 구조는 구분합니다.

공식 문서 (2026-10-18 확인):

- https://vercel.com/docs/plans/hobby
- https://vercel.com/docs/git/vercel-for-github
- https://nextjs.org/docs/app/guides/static-exports
