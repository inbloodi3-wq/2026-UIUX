# Website Automation System

Claude Code의 Rules, Subagents, Skills로 **실제 반응형 웹사이트**(HTML5 · CSS3 · Vanilla JavaScript)를 제작하고 GitHub Pages로 배포하는 자동화 시스템이다. 현재 프로젝트는 개인 포트폴리오 / 프로필 웹사이트다.

최종 산출물은 `docs/`의 코드다. Framework, Build Tool, Package Manager를 쓰지 않는다. Figma는 필요하지 않다.

## 저장소 구조
세 영역이 분리되어 있다.

| 영역 | 위치 | 내용 |
|---|---|---|
| Website Source | `docs/` | 배포되는 사이트. GitHub Pages에 공개되는 유일한 디렉터리 |
| Automation System | `CLAUDE.md`, `.claude/`, `config/`, `automation/`, `scripts/qa/`, `legal/` | 제작 방법, 규칙, 진행 상태, QA 도구 |
| Project Source Documents | `content/`, `ia/`, `design-system/`, `references/`, `assets/`, `qa/` | 무엇을 만들지에 대한 원본 문서(Stage가 진행되며 생성된다) |
| Archive | `archive/legacy-figma-automation/` | 이전 Figma 자동화와 프로젝트 기록(READ ONLY) |

- `config/project.yaml` — 프로젝트 정의(목표, 대상, Stack, 배포, Viewport)
- `automation/pipeline-state.json` — Pipeline 진행 상태와 Checkpoint
- `.claude/rules/` — 항상 적용되는 규칙 8개(action-safety, git-deploy, frontend-code, design-system, ux-principles, naming-convention, project-architecture, web-research-safety)
- `.claude/agents/` — automation-orchestrator, ia-planner, visual-director, frontend-builder, site-reviewer, asset-sourcer, rights-auditor, reference-researcher(선택)
- `.claude/skills/` — define-ia, design-tokens, scaffold-site, build-section, review-browser, review-code, deploy-pages, apply-approved-assets, validate-asset-rights, final-rights-audit, source-safe-assets, research-visual-references
- `scripts/qa/` — Browser QA 도구(`serve.cjs`, `capture.cjs`). 사이트의 Dependency가 아니다

## Pipeline
PROJECT LOAD → ENV / CODEBASE CALIBRATION → CONTENT / IA → VISUAL SYSTEM → SITE SCAFFOLD → MASTER PAGE BUILD → SECTION BUILD → BROWSER QA → TARGETED FIX → SECONDARY PAGES → INTERACTION → FULL QA → TARGETED FIX → PRE-DEPLOY CHECK → DEPLOY → LIVE QA → DONE

Reference Research와 Asset Sourcing은 필요할 때만 실행하는 Optional Stage다. 각 Stage는 파일 존재가 아니라 실제 내용으로 PASS를 판정한다(`.claude/agents/automation-orchestrator.md`).

## 실행
```powershell
cd <project-dir>
claude
```
Claude는 세션 시작 시 `config/project.yaml`과 `automation/pipeline-state.json`을 읽고 마지막 Checkpoint에서 이어간다.

## 디자인 값의 원본
- 값(색, Type Scale, 간격 등): `docs/css/tokens.css` **하나**
- Direction, 원칙, 사용 이유: `design-system/visual-language.md`(값은 적지 않는다)
- Breakpoint: `config/project.yaml`의 `site.breakpoints`

## Responsive
Desktop · Tablet · Mobile을 Section을 만들 때마다 함께 구현하고 함께 Render한다. 기준 폭은 `config/project.yaml`의 `viewports`다. Mobile은 Desktop의 축소판이 아니다.

## Browser QA
```powershell
node scripts/qa/capture.cjs --check        # 도구 동작 확인
node scripts/qa/capture.cjs                # 모든 Page를 세 Viewport에서 Render
node scripts/qa/serve.cjs                  # 수동 확인용 로컬 서버 (http://127.0.0.1:8765/2026-UIUX/)
```
- Node 내장 서버가 `docs/`를 배포와 같은 Base Path 아래에서 서빙하고, 이미 설치된 Playwright와 Chrome으로 Render한다.
- 스크린샷과 측정 보고는 `qa/screenshots/`에 남는다(git 미추적).
- Playwright는 프로젝트에 설치되어 있지 않고 기존 npx 캐시의 것을 찾아 쓴다. 찾지 못하면 Script가 종료 코드 2로 끝난다. 이때 자동으로 설치하지 않는다(사용자 승인 필요).

## 배포
- GitHub Pages, `main` branch의 `docs/`. Base Path는 `/2026-UIUX/`이므로 사이트 내부 경로는 상대 경로로 쓴다.
- Stage 단위 local commit은 자동으로 한다. **`git push`(= 배포)는 매번 사용자 승인이 필요하다.** Force push와 History rewrite는 하지 않는다(`.claude/rules/git-deploy.md`).
- 최초 배포 시 GitHub Repository Settings → Pages에서 Source를 `main` / `/docs`로 지정해야 한다(사용자가 직접 설정).
- Pages에 서빙되는 것은 `docs/`뿐이지만, Repository가 Public이면 나머지 디렉터리와 Git History도 GitHub에서 열람된다.

## 안전 규칙
- `.claude/settings.json`이 Bash와 PowerShell 양쪽에서 push, reset, rebase, amend, 변경 폐기, branch 삭제, 재귀 삭제, Package 설치에 확인을 요구하고, force push·History rewrite·`.env`/Key 파일 접근을 차단한다.
- 이미지·Font는 `assets/manifest.jsonl`에서 `APPROVED`인 것만 `docs/assets/`에 넣는다. 출처·라이선스가 불명확하면 사용하지 않는다(Fail Closed, `legal/source-policy.yaml`).
- 사이트에는 사용자가 명시적으로 제공한 개인정보만 싣는다.
- API Key는 `.env`(git 미추적)에만 둔다. `.env.example`을 복사해 사용한다.

## Archive
`archive/legacy-figma-automation/`에는 이전 Figma 기반 자동화(TJ MEDIA, AUTORUN_01–03, PORTFOLIO_03)와 Figma 전용 Rule/Agent/Skill이 보관되어 있다. 현재 Pipeline은 이를 사용하지 않는다. 자세한 내용은 그 안의 `README.md`.
