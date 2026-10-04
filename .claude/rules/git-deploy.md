# Git & Deploy Rules

## 배포 구조 (승인된 결정 — 변경은 Level 3)
- Repository: `config/project.yaml`의 `site.repository`. GitHub Pages는 `main` branch의 `docs/`에서 배포한다.
- Base Path: `site.base_path`(현재 `/2026-UIUX/`). 사이트 내부 링크와 Asset 경로는 **상대 경로**로 쓴다. `/`로 시작하는 Root-absolute 경로는 Base Path에서 깨지므로 쓰지 않는다.
- Repository Root 배포, GitHub Actions, 다른 Hosting은 사용하지 않는다.
- 공개되는 사이트는 `docs/`뿐이다. 다만 Repository가 Public이면 `archive/`, `config/` 등도 GitHub에서 열람된다 — PRE-DEPLOY CHECK에서 매번 기록한다.

## Commit (Level 2 — 자동)
- Stage 또는 Section이 QA를 통과한 시점에 의미 단위로 local commit한다.
- `git add`는 **경로를 명시**한다. `git add -A`/`git add .`로 모르는 파일을 함께 올리지 않는다.
- commit 전에 `git status`와 `git diff --stat`으로 범위를 확인한다. 내가 만들지 않은 변경이 섞여 있으면 commit하지 않고 보고한다.
- `.env`, Key, QA 스크린샷, 브라우저 캐시를 commit하지 않는다.
- Hook을 건너뛰지 않는다(`--no-verify` 금지). 지난 commit을 고치지 않고 새 commit을 만든다.

## Push / Deploy (Level 3 — 매번 승인)
- `git push`는 곧 Production deploy다. 승인 없이 실행하지 않는다. 이전 push 승인은 다음 push에 유효하지 않다.
- 승인 요청에는 대상 remote/branch, 포함되는 commit 목록, `docs/` 변경 요약, 공개 범위를 적는다(`action-safety.md` Meaningful Confirmation).
- 절차는 `.claude/skills/deploy-pages/`를 따른다. Pages 설정 변경(Source, Custom Domain, 공개 범위)도 Level 3다.

## 자동 실행 금지 (승인 필요)
`git reset`(특히 `--hard`), `git rebase`, `git commit --amend`, `git checkout -- <path>`, `git restore`, `git clean`, `git branch -d/-D`, `git stash drop/clear`, `git rm`, `Remove-Item -Recurse`, `rm -r`, 여러 파일을 한 번에 지우는 모든 명령.

## 금지 (승인 요청도 하지 않는다)
`git push --force`(및 `--force-with-lease`, `+refspec`), History rewrite(`filter-branch`, `filter-repo`). 필요해 보이면 실행하지 않고 이유와 대안을 보고한다.

## 문제가 생겼을 때
- 잘못된 변경은 되돌리는 **새 commit**(`git revert` 또는 수정 commit)으로 고친다.
- 작업 트리가 예상과 다르면 멈추고 `git status` 결과와 함께 보고한다. 원인을 모르는 상태에서 정리 명령을 실행하지 않는다.
