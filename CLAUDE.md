# Website Automation — Entry Point

Claude Code로 **실제 반응형 웹사이트**(HTML5 · CSS3 · Vanilla JavaScript, GitHub Pages 배포)를 제작하는 자동화 시스템이다. 최종 산출물은 `docs/`의 코드다. Figma는 구현에 필요하지 않으며 Active Workflow에 없다. Content/IA → Visual System → Build → Browser QA → Fix → Deploy를 Micro Approval 없이 자율 수행하되, 되돌리기 어렵거나 외부에 영향이 있는 행동은 승인 후에만 한다.

## 시작할 때 항상 먼저 한다
1. `config/project.yaml`을 읽는다. 이 저장소의 프로젝트는 하나다. 파일이 없으면 `config/project-template.yaml`을 복사해 만들도록 안내한다.
2. `automation/pipeline-state.json`에서 `current_stage`, `stage_status`, `checkpoint`, `blockers`, `approval_required`를 읽고 마지막 Checkpoint에서 Resume한다.
3. `git status`와 현재 branch를 확인한다. 내가 만들지 않은 미커밋 변경이 있으면 건드리지 않고 보고한다.
4. `archive/`는 읽기 전용 보관물이다. 그 안의 Config/State를 Resume하지 않고, 수정·삭제하지 않는다.

## Project Goal을 임의로 추정하지 않는다
- 무엇을 만드는지, 누구에게 보여 주는지, 어떤 내용을 싣는지는 `config/project.yaml`과 `content/`에서 읽는다.
- 사용자가 제공하지 않은 이름·경력·프로젝트 설명·연락처·문구를 만들어 넣지 않는다(Level 3). 비어 있으면 `content_ia` Stage에서 묶어서 요청한다.
- Visual 판단(`visual_expression`이 `auto`인 항목)은 추측이 아니라 Visual Director의 결정 사항이다.

## Stack (고정 — 변경은 Level 3)
HTML5 · CSS3(Custom Property) · Vanilla JavaScript · Git/GitHub · GitHub Pages(`docs/` branch 배포). React, Vue, Next.js, TypeScript, Tailwind, Build Tool, Package Manager, 대형 Framework를 도입하지 않는다. HTML/CSS와 기초 JavaScript를 아는 사람이 읽고 고칠 수 있어야 한다. 세부는 `.claude/rules/frontend-code.md`.

## Decision Authority — DO NOT ASK BY DEFAULT
승인된 Scope / Content / Visual Direction / Stack 안에서 해결 가능한 문제는 묻지 않는다.

| Level | 처리 | 대상 |
|---|---|---|
| 1 AUTO | 묻지 않고 실행 | 파일 읽기, 분석, 문서·State 갱신, 포맷 정리, Spacing/정렬/Overflow/Typography minor, 안전하고 되돌릴 수 있는 코드 수정, 승인된 Visual System 안의 Variation |
| 2 AUTO + REPORT | 실행 후 보고(`last_meaningful_change` + 최종 보고) | 일반 HTML/CSS 구현, Section 구성, 반응형 수정, 접근성 수정, 작은 JavaScript Interaction, 코드 정리, 승인된 Asset 적용, Stage 단위 local commit — 단 되돌릴 수 있고 승인 Scope 안이며 Architecture를 바꾸지 않을 것 |
| 3 MUST ASK | 질문(최대 3개로 묶음) | Stack 변경, 새 Framework, 외부 Dependency(CDN Script·외부 Font Host 포함), 파괴적 파일 삭제, 큰 Architecture 변경, 배포 Platform 변경, 주요 콘텐츠 제거, 승인된 Visual Direction 변경, Scope 변경, 사용자만 아는 사실(Content) 부족, Asset rights blocker, Tool blocker, `git push`, Production deploy, Final sign-off |

**Action Safety가 Decision Authority보다 우선한다**(`.claude/rules/action-safety.md`). Tier 3(push·배포·게시·삭제·전송·계정 변경 등)은 실행 직전 명시적 승인, Tier 4(Password/Token/Key)는 요청·저장·기록·전달 금지. 불확실하면 한 단계 높은 Tier로 본다. Git/배포 세부는 `.claude/rules/git-deploy.md`.

Micro Approval 질문("간격을 줄일까요?", "이 색이 좋을까요?")은 하지 않는다.
`automation.autonomy_mode`: `guided`(Level 2도 실행 전 확인) / `autonomous`(기본값). 어떤 Mode도 Level 3와 Action Safety를 완화하지 않는다.

## Pipeline
PROJECT LOAD → ENV / CODEBASE CALIBRATION → CONTENT / IA → VISUAL SYSTEM → SITE SCAFFOLD → MASTER PAGE BUILD → SECTION BUILD → BROWSER QA → TARGETED FIX → SECONDARY PAGES → INTERACTION → FULL QA → TARGETED FIX → PRE-DEPLOY CHECK → DEPLOY → LIVE QA → DONE

- SECTION BUILD → BROWSER QA → TARGETED FIX는 Section 단위 Loop다.
- Optional Stage(Semantic Gate로 SKIP 가능): **Reference Research**(VISUAL SYSTEM 전), **Asset Sourcing**(이미지가 필요한 Section 전).
- 순서·통과 조건·Checkpoint·Stop Rule은 `.claude/agents/automation-orchestrator.md`를 따른다.

## Responsive
- 지원 Viewport는 최소 Desktop · Tablet · Mobile(`config/project.yaml`의 `viewports`)이다.
- Section을 만들 때마다 세 Viewport를 함께 구현하고 함께 Render한다. FULL QA의 Responsive 검사는 구현 단계가 아니라 최종 검증 Pass다.
- Mobile은 Desktop의 축소판이 아니다(`.claude/rules/ux-principles.md`).

## QA
- 구현 후에는 반드시 Browser에서 Render해 확인한다. Render 없이 PASS 판정 금지.
- Browser QA는 로컬 정적 서버 + Playwright다(`node scripts/qa/capture.cjs`, `.claude/skills/review-browser/`).
- 접근성·성능·코드 품질은 QA에 포함된다(`review-browser`, `review-code`).
- TARGETED FIX에서는 **검증된 문제만** 고친다.

## Polish Limit & Stop Rule
- 한 Page/Section 최대 3 Pass(Structural 1 · Visual QA 1 · Micro Fix 1). 실제 Error가 없으면 4번째 Polish 금지.
- Stop Rule이 모두 PASS면 DONE. "더 화려하게/더 예쁘게/다른 안도 가능"은 재작업 사유가 아니다.

## Source of Truth
| 위치 | 내용 |
|---|---|
| `config/project.yaml` | 프로젝트 정의(목표, 대상, Stack, 배포, Viewport) |
| `automation/pipeline-state.json` | Pipeline 진행 상태, Checkpoint |
| `content/` | 사이트에 실리는 문안·프로젝트 정보의 원본(사용자 제공) |
| `ia/` | Page/Section 구조, 콘텐츠 위계 |
| `design-system/` | Visual Direction·원칙·사용 이유(**값은 적지 않는다**) |
| `docs/css/tokens.css` | **디자인 값(색·타입·간격·반경 등)의 유일한 원본** |
| `docs/` | 웹사이트 소스. GitHub Pages에 공개되는 유일한 디렉터리 |
| `references/` | 레퍼런스 조사(텍스트만, 이미지 없음) |
| `assets/`, `legal/` | Asset 후보·승인 이력(`manifest.jsonl`), 출처 정책, 라이선스 근거 |
| `qa/` | QA 보고(스크린샷은 git 미추적) |
| `scripts/qa/` | Browser QA 도구(사이트 Dependency 아님) |
| `archive/` | 이전 Figma 자동화와 프로젝트 기록(READ ONLY) |

## Fail Closed Asset Policy
이미지·폰트·아이콘의 출처·라이선스·콘텐츠 안전성이 불명확하면(UNKNOWN) REJECTED와 동일하게 취급하고 `docs/`에 넣지 않는다. `assets/manifest.jsonl`에서 `APPROVED`인 것만 사용한다. 공용 규칙은 `.claude/rules/web-research-safety.md`와 `legal/source-policy.yaml`, 프로젝트별 추가 제한은 `config/project.yaml`의 `project_asset_restrictions`. Autonomy는 이 정책을 완화하지 않는다.

## Core Rules
- 코드가 최종 산출물이다. 구조적 결정은 `ia/`와 `design-system/`에서 먼저 확정하고, 값은 `tokens.css`에만 둔다.
- 기존 파일은 Edit로 부분 수정한다. 파일 전체 덮어쓰기는 기본 동작이 아니다.
- 요청받은 Page/Section만 수정한다. 관련 없는 사용자 작업을 덮어쓰지 않는다.
- `docs/`에는 사이트에 필요한 파일만 둔다. Config·State·Research·Archive 내용이 사이트에 노출되면 안 된다.
- 사이트 내부 경로는 상대 경로로 쓴다(배포 Base Path `/2026-UIUX/`).
- 필요해지기 전에 파일·추상화·JavaScript를 만들지 않는다.
- git reset, history rewrite, force push, branch 삭제, 대량 파일 삭제, push를 승인 없이 하지 않는다.
