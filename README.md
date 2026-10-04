# Website Automation System

Claude Code의 Rules, Subagents, Skills로 **실제 반응형 웹사이트**(HTML5 · CSS3 · Vanilla JavaScript)를 제작하고 GitHub Pages로 배포하는 자동화 시스템이다. 현재 프로젝트는 개인 포트폴리오 / 프로필 웹사이트다.

최종 산출물은 `docs/`의 코드다. Framework, Build Tool, Package Manager를 쓰지 않는다.

## Operating Mode
하나의 Build Core가 두 가지 입력 방식을 지원한다. `config/project.yaml`의 `project.mode`로 정한다.

| Mode | 언제 | Design Definition |
|---|---|---|
| `figma_implementation` | 완성된 Figma 디자인을 코드로 정확히 구현할 때 | Figma(READ ONLY) → `design-source/`(Frame Map, Extracted Tokens, Implementation Spec) + `ia/sitemap.md` |
| `autonomous_generation` | Figma 없이 Brief와 Content로 사이트 전체를 만들 때 | `content/` + `ia/sitemap.md` → 승인된 `design-system/visual-language.md` + `token-source.json` |

- Design Definition 구간에서는 `docs/`를 만들지 않는다. `docs/`는 SITE SCAFFOLD에서 처음 생성되고, 그때 Token Source로부터 `docs/css/tokens.css`가 만들어진다.
- 분기하는 것은 Design Definition 구간뿐이다. SITE SCAFFOLD 이후의 구현·QA·배포는 두 mode가 같은 Agent, Skill, Script를 쓴다.
- `figma_implementation`에서 Figma는 읽기 전용 원본이다. Figma를 수정하지 않고, 디자인을 다시 설계하거나 개선하지 않는다.
- `autonomous_generation`은 Figma 없이 처음부터 끝까지 실행된다.
- 현재 프로젝트(개인 포트폴리오)는 `figma_implementation`이다. 새 프로젝트는 `config/project.yaml`의 `project.mode`와 `design_source`를 바꿔 시작한다.

## 저장소 구조
세 영역이 분리되어 있다.

| 영역 | 위치 | 내용 |
|---|---|---|
| Website Source | `docs/` | 배포되는 사이트. GitHub Pages에 공개되는 유일한 디렉터리 |
| Automation System | `CLAUDE.md`, `.claude/`, `config/`, `automation/`, `scripts/qa/`, `legal/` | 제작 방법, 규칙, 진행 상태, QA 도구 |
| Project Source Documents | `design-source/`, `content/`, `ia/`, `design-system/`, `references/`, `assets/`, `qa/` | 무엇을 만들지에 대한 원본 문서(Stage가 진행되며 생성된다) |
| Archive | `archive/legacy-figma-automation/` | 이전 Figma 자동화와 프로젝트 기록(READ ONLY) |

- `config/project.yaml` — 프로젝트 정의(목표, 대상, Stack, 배포, Viewport)
- `automation/pipeline-state.json` — Pipeline 진행 상태와 Checkpoint
- `.claude/rules/` — 항상 적용되는 규칙 8개(action-safety, git-deploy, frontend-code, design-system, ux-principles, naming-convention, project-architecture, web-research-safety)
- `.claude/agents/` — automation-orchestrator, ia-planner, visual-director, frontend-builder, site-reviewer, asset-sourcer, rights-auditor, reference-researcher(선택)
- `.claude/skills/` — read-design-source(figma mode), define-ia(autonomous mode), design-tokens, scaffold-site, build-section, review-browser, review-code, deploy-pages, apply-approved-assets, validate-asset-rights, final-rights-audit, source-safe-assets, research-visual-references
- `scripts/qa/` — Browser QA 도구(`serve.cjs`, `capture.cjs`). 사이트의 Dependency가 아니다

## Pipeline
```
figma_implementation    PROJECT LOAD → DESIGN SOURCE INTAKE → FIGMA CALIBRATION → CONTENT / ASSET MAPPING → IMPLEMENTATION PLAN ─┐
autonomous_generation   PROJECT LOAD → ENV / CODEBASE CALIBRATION → CONTENT / IA → (Reference Research) → VISUAL DIRECTION        │
                        → USER APPROVAL → VISUAL SYSTEM → (Asset Sourcing) ──────────────────────────────────────────────────────┤
                                                                                                                                  ▼
Common Build Core       SITE SCAFFOLD → MASTER PAGE BUILD → SECTION BUILD → BROWSER QA → TARGETED FIX → SECONDARY PAGES
                        → INTERACTION → FULL QA → PRE-DEPLOY CHECK → DEPLOY → LIVE QA → DONE
```
괄호 안은 필요할 때만 실행하는 Optional Stage다. 각 Stage는 파일 존재가 아니라 실제 내용으로 PASS를 판정한다(`.claude/agents/automation-orchestrator.md`).

## 실행
```powershell
cd <project-dir>
claude
```
Claude는 세션 시작 시 `config/project.yaml`과 `automation/pipeline-state.json`을 읽고 마지막 Checkpoint에서 이어간다.

## 디자인 값의 원본
- 값의 흐름: Design Intent(Figma 또는 승인된 Direction) → Token Source(`design-source/extracted-tokens.json` 또는 `design-system/token-source.json`) → `docs/css/tokens.css`
- 사이트 코드가 생긴 뒤 코드에서 쓰는 값(색, Type Scale, 간격 등)의 원본: `docs/css/tokens.css` **하나** (두 mode 공통)
- Website 구조: `ia/sitemap.md`(두 mode 공통 형식). Figma Node 대응은 `design-source/frame-map.md`에 따로 둔다
- Design Intent: figma mode는 Figma(읽기 전용), autonomous mode는 승인된 `design-system/visual-language.md`
- 구현 규칙·근거: figma mode는 `design-source/implementation-spec.md`, autonomous mode는 `design-system/visual-language.md`(둘 다 값은 적지 않는다)
- figma mode에서 Figma와 코드가 다르면: 최초 구현 중에는 Figma 우선, 사용자 승인으로 바꾼 것은 기록 우선, 판단할 수 없으면 보고
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
- Figma는 읽기 도구만 허용하고 쓰기 도구는 차단한다.
- 이미지·Font는 `assets/manifest.jsonl`에서 `APPROVED`인 것만 `docs/assets/`에 넣는다. 출처·라이선스가 불명확하면 사용하지 않는다(Fail Closed, `legal/source-policy.yaml`).
- 사이트에는 사용자가 명시적으로 제공한 개인정보만 싣는다.
- API Key는 `.env`(git 미추적)에만 둔다. `.env.example`을 복사해 사용한다.

## Archive
`figma_implementation` mode는 예전 Figma 제작 자동화의 복원이 아니다. `archive/legacy-figma-automation/`에는 이전 Figma 기반 자동화(TJ MEDIA, AUTORUN_01–03, PORTFOLIO_03)와 Figma 전용 Rule/Agent/Skill이 보관되어 있다. 현재 Pipeline은 이를 사용하지 않는다. 자세한 내용은 그 안의 `README.md`.
