# hjsoltec.github.io 첫 배포 안내

## 1. 주소와 권한 확인

`https://hjsoltec.github.io`는 GitHub의 `hjsoltec` 사용자 또는 조직 소유 저장소 **`hjsoltec.github.io`** 의 Pages 주소입니다. 다른 아이디에서 같은 이름의 저장소를 만든다고 이 주소를 쓸 수 있는 것은 아닙니다. 계정의 존재·사용 가능 여부·소유 권한은 이번 작업에서 확인하지 않았습니다.

이 안내는 GitHub 사용자 또는 조직 이름이 `hjsoltec`인 경우를 기준으로 합니다. 저장소 이름만 `hjsoltec`으로 만든 경우에는 계정 이름을 먼저 확인합니다.

## 2. 무료 운영의 범위

GitHub Free의 Pages는 공개 저장소에서 사용할 수 있습니다. 이 경우 홈페이지 소스와 저장소에 올린 자료가 공개됩니다. 회사 소개와 공개용 문서만 올리고, 업무 시스템의 소스·원본 실험자료·환경파일은 이 저장소에 넣지 않습니다.

Pages는 정적 웹 호스팅입니다. 이 홈페이지의 HTML·CSS·JavaScript·PDF는 제공할 수 있지만, Next.js API 서버·Django·Spring·PostgreSQL·실제 AI 추론 서버는 실행할 수 없습니다. LS-RND/HJSol 제품은 여기에서 소개하고 실제 설치 시스템은 별도로 운영합니다.

GitHub는 온라인 사업·상거래·상용 SaaS를 주목적으로 하는 Pages 이용을 제한합니다. 회사와 제품을 소개하는 실제 운영 용도가 허용 범위인지 정책을 검토하고, 불명확하면 GitHub 지원팀에 문의합니다. 해당 제한은 기술 설정으로 해결되는 문제가 아닙니다.

## 3. GitHub에서 저장소 생성

1. `hjsoltec` 계정으로 로그인하거나, 관리 권한이 있는 `hjsoltec` 조직을 선택합니다.
2. **New repository**를 누릅니다.
3. Owner를 `hjsoltec`, Repository name을 `hjsoltec.github.io`로 지정합니다.
4. 무료 Pages 사용 시 **Public**을 선택합니다.
5. 새 빈 저장소로 만들 때 README·라이선스·gitignore 자동 생성은 선택하지 않습니다. 이 소스에 README와 gitignore가 이미 들어 있습니다.

기존 저장소에 홈페이지가 있다면 덮어쓰기 전에 별도 브랜치에서 내용을 비교하고 백업합니다.

## 4A. GitHub 웹 화면에서 올리기

Git 연동 앱을 설치하지 않아도 가능합니다.

1. 배포 패키지의 압축을 풉니다.
2. `hjsoltec.github.io` 폴더 안의 파일을 저장소 루트에 올립니다. 저장소 루트에 `package.json`, `package-lock.json`, `next.config.mjs`, `src/`가 보여야 합니다. `hjsoltec.github.io/hjsoltec.github.io/package.json`처럼 한 단계 더 중첩하지 않습니다.
3. **Add file → Upload files**에서 폴더와 파일을 올리고 커밋합니다.
4. `.github/workflows/pages.yml`이 저장소에 올라갔는지 반드시 확인합니다. 숨김 폴더가 빠졌다면 **Add file → Create new file**에서 파일명을 `.github/workflows/pages.yml`로 입력하고 패키지의 같은 파일 내용을 그대로 붙여 넣어 커밋합니다.
5. `.gitignore`가 누락되었다면 같은 방법으로 추가합니다.

`.env.example`은 예제만 포함하며 실제 이메일 설정은 아래 저장소 변수로 합니다. `node_modules`, `.next`, `out`은 소스 업로드 대상이 아닙니다.

## 4B. Git으로 올리기 (WSL / Git Bash / PowerShell)

새 빈 저장소이며 기존 Git 이력이 없는 **소스 폴더**에서 실행합니다. GitHub 인증은 본인 컴퓨터의 브라우저 또는 Git Credential Manager로 진행합니다. 계정 비밀번호나 토큰을 소스 파일에 넣지 않습니다.

```bash
git init -b main
git add .
git commit -m "Create HJSol company website"
git remote add origin https://github.com/hjsoltec/hjsoltec.github.io.git
git push -u origin main
```

Git 사용자 이름·이메일 미설정 오류가 나면 본인의 Git 설정을 먼저 완료합니다. 원격 저장소에 기존 커밋이 있으면 강제 푸시하지 말고 기존 저장소를 clone한 뒤 새 브랜치에서 사이트 소스를 반영합니다.

## 5. Pages 활성화

1. 저장소 **Settings → Pages**로 이동합니다.
2. **Build and deployment → Source**를 **GitHub Actions**로 선택합니다.
3. **Actions → Build and deploy HJSol to GitHub Pages**를 엽니다.
4. 처음 업로드 시 Pages 설정이 없어 실패했다면 설정 후 **Run workflow**로 재실행합니다.
5. `build`와 `deploy` 모두 성공한 뒤 `https://hjsoltec.github.io`를 엽니다.

워크플로는 `main` 변경 시 의존성 설치 → 콘텐츠 확인 → Next.js 정적 빌드 → 링크·파일 검증 → Pages 배포를 수행합니다. 사이트 수동 배포용 개인 토큰은 필요하지 않습니다. 조직 정책에 따라 Actions나 Pages가 제한된 경우 해당 관리자 설정이 필요합니다.

## 6. 공식 문의 이메일 연결

**Settings → Secrets and variables → Actions → Variables → New repository variable**에서 추가합니다.

| 이름 | 값 |
| --- | --- |
| `NEXT_PUBLIC_CONTACT_EMAIL` | 실제 공개할 회사 이메일 |

변수만 변경하면 기존 페이지가 즉시 바뀌지 않습니다. **Actions → Run workflow**로 다시 빌드합니다. 이메일은 공개 정보이므로 비공개 키를 이 변수에 넣지 않습니다.

이 설정은 메일 수신 서버나 자동 접수 API를 만들지 않습니다. 사용자의 메일 앱을 여는 링크를 켭니다. 실제 발송은 사용자가 수행합니다. 메일 앱이 없는 기기는 요청서를 저장·복사해 전달합니다.

## 7. 이후 수정과 되돌리기

- 내용 수정 후 `main`에 커밋하면 다시 배포됩니다.
- `src/content/site.ts`에서 소개 문구를, `src/content/resources.json`에서 자료실을 수정합니다.
- 공개 PDF·PPTX는 `public/downloads/`에 넣고 자료실 항목을 연결합니다.
- 잘못된 변경은 GitHub에서 해당 커밋을 **Revert**하는 새 커밋으로 되돌리고 다시 배포합니다. 기존 이력을 강제로 지울 필요가 없습니다.

## 확인 항목

- 홈에서 제품 버튼과 서비스 이동이 작동하는지 확인합니다.
- 휴대폰에서 메뉴를 열고 제품 페이지에 진입합니다.
- `/products/ls-rnd/`를 직접 새로고침해 페이지가 열리는지 확인합니다.
- 자료실의 분류·검색·준비 중 표시를 확인합니다.
- 상담 요청서의 필수 입력·파일 저장을 확인합니다.
- 공식 이메일 설정 후 메일 앱에서 직접 발송 가능한지 확인합니다.

## 문제 해결

| 증상 | 확인할 내용 |
| --- | --- |
| 주소가 404 | Owner가 `hjsoltec`인지, 저장소명이 `hjsoltec.github.io`인지, 배포 성공 여부 |
| npm ci 실패 | `package-lock.json` 누락 또는 package.json과의 불일치 |
| Pages 배포 실패 | Settings → Pages의 Source가 GitHub Actions인지, 조직 권한 |
| 문구가 예전과 같음 | 마지막 Actions 실행 성공 여부, 브라우저 캐시 |
| 자료 추가 후 빌드 실패 | ready 자료의 href·실제 파일명·대소문자·download 설정 |
| 다른 계정 주소에서 CSS가 깨짐 | 계정·주소·배포 위치 확인. 이 소스는 사용자 사이트의 `/` 기준이며 일반 프로젝트 하위 경로용이 아님 |

## 공식 문서

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- https://nextjs.org/docs/app/guides/static-exports

확인 기준: 2026-10-18.
