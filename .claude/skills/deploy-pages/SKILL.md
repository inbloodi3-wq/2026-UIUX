---
name: deploy-pages
description: GitHub Pages(main branch의 docs/) 배포를 준비하고(PRE-DEPLOY CHECK), 사용자 승인을 받은 뒤에만 push하고, 배포본을 확인(LIVE QA)할 때 사용한다.
---

# Deploy Pages

배포는 `git push`다. **push는 Level 3이며 매번 새 승인이 필요하다.** 이 Skill은 PREPARE와 COMMIT을 분리한다.

## Required Inputs
`config/project.yaml`의 `site.repository`, `site.deploy`, `site.base_path`, `site.url`

## Phase 1 — PRE-DEPLOY CHECK (자동)
1. `full_qa`가 PASS인지 State에서 확인한다. 아니면 중단.
2. `node scripts/qa/capture.cjs --label pre-deploy`: 측정 문제 0건(Overflow, Console Error, 실패 Request, Root-absolute 경로).
3. `final-rights-audit`: 미승인 Asset 0건, 승인되지 않은 외부 Origin 0건.
4. **노출 검사** — `docs/`를 Grep한다:
   - 로컬 절대 경로(`C:\`, `/Users/`, `/home/`), `.env`, `API_KEY`, `token`, `secret`, `password`
   - `config/`, `automation/`, `archive/`, `.claude/`를 가리키는 링크나 내용
   - `content/`에 없는 개인정보(이메일, 전화번호 패턴)
5. `docs/`에 사이트에 필요 없는 파일(QA 스크린샷, Markdown 메모, 원본 PSD 등)이 없는지 확인한다. `.nojekyll`이 있는지 확인한다.
6. `git status`로 미커밋 변경을, `git log origin/main..HEAD --oneline`으로 push될 commit을 확인한다. 내가 만들지 않은 변경이 있으면 중단하고 보고한다.
7. **Repository 공개 범위 고지**: Pages에 서빙되는 것은 `docs/`뿐이지만, Repository가 Public이면 `archive/`, `config/`, `content/`, `.claude/`와 전체 Git History도 GitHub에서 열람된다. History에는 이전에 추적됐던 `.playwright-mcp/`의 타사 사이트 스크린샷이 남아 있다(History rewrite는 금지 사항이므로 별도 Level 3 결정). 이 사실을 매 배포 승인 요청에 적는다.
8. 결과를 `qa/pre-deploy-report.md`에 기록한다.

## Phase 2 — 승인 요청 (여기서 멈춘다)
```
CONFIRMATION REQUIRED
ACTION: git push origin main  (= GitHub Pages Production deploy)
TARGET: <repository> / main / docs/
COMMITS: <push될 commit 목록>
CHANGES: <docs/ 변경 요약>
EFFECT: <site.url>에 공개. Repository가 Public이면 archive/config 등과 History도 열람 가능
REVERSIBILITY: 되돌리는 commit을 다시 push해야 함. 이미 공개된 내용은 회수되지 않을 수 있음
```
State의 `approval_required`에 `PENDING_APPROVAL`로 기록한다. 승인 없이 Phase 3으로 가지 않는다. "알아서 해", 이전 배포 승인은 승인이 아니다.

## Phase 3 — COMMIT (승인 후에만)
1. `git push origin main` — `--force` 계열 Option을 쓰지 않는다. 거부(non-fast-forward)되면 강제하지 않고 중단해 보고한다.
2. 최초 배포라면 GitHub Repository Settings → Pages에서 Source를 `main` / `/docs`로 지정해야 한다. 이 설정은 사용자가 직접 한다(계정 설정 변경은 대신 하지 않는다).
3. `automation/action-log.jsonl`에 기록하고 State의 `last_deploy`를 갱신한다.

## Phase 4 — LIVE QA
1. 배포 반영을 기다린 뒤 `node scripts/qa/capture.cjs --url <site.url> --label live`.
2. `review-browser`의 Deploy Path 절과 Layout을 확인한다. 로컬 결과와 다르면(404, Base Path 문제) 원인을 찾아 보고하고, 수정은 새 commit + 새 승인으로 한다.

## Do Not
- 승인 없이 push하지 않는다. Force push, History rewrite, `--amend` 후 push를 하지 않는다.
- GitHub Actions, 다른 Hosting, Custom Domain을 추가하지 않는다(Level 3).
- Token이나 Credential을 요청·저장하지 않는다. 기존 Git 인증만 사용한다.
