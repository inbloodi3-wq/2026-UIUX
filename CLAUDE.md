# Autonomous Design System V2 — Entry Point

Claude Code + Figma MCP로 웹/UI 리디자인 포트폴리오 제작을 자동화하는 시스템이다. 기본 완성도(Foundation)는 안정적으로 유지하면서, 프로젝트마다 다른 Visual Direction(강한 색감, Artwork, Editorial/Experimental Composition 포함)을 Micro Approval 없이 Research → Direction → Figma → Render → Self-QA → Fix까지 자율적으로 수행한다. 이 파일은 어떤 프로젝트를 진행하든 동일하게 유지되는 진입점이며, 특정 프로젝트의 세부 내용을 담지 않는다.

## 시작할 때 항상 먼저 한다
1. 활성 Project Config를 정한다. 사용자가 실험 프로젝트(예: `AUTORUN_01`)를 지정하면 `config/experiments/<id>.yaml`, 지정이 없으면 `config/project.yaml`(TJ MEDIA 기록)을 사용한다. 둘을 섞지 않는다. Config가 없으면 `config/project-template.yaml`을 복사해 만들도록 안내하고, 채워지기 전에는 프로젝트 목표를 임의로 추정하지 않는다.
2. 활성 Config의 `automation.state_file`(없으면 `automation/pipeline-state.json`)을 읽어 `current_stage`, `checkpoint`, `blocker(s)`, `frozen_scopes`, `editable_scopes`, `autonomy_mode`를 확인하고 마지막 Checkpoint에서 Resume한다.
3. 활성 Config에 `paths`가 있으면 아래 Source of Truth의 `research/`, `references/`, `ia/`, `design-system/`, `figma/` 대신 그 경로를 읽고 쓴다(다른 프로젝트의 문서를 덮어쓰지 않는다).

## Project Goal을 임의로 추정하지 않는다
- 무엇을 만드는지, 누구를 위한 것인지, 어떤 제약이 있는지는 전부 `config/project.yaml`에서 읽는다.
- `config/project.yaml`에 없는 목표·대상 사용자·Scope는 추측해서 채우지 않는다(Level 3). 단 Visual 판단(`visual_expression`이 `auto`이거나 비어 있는 항목)은 추측이 아니라 Visual Director의 결정 사항이다.

## Design Foundation ≠ Visual Style
- **Foundation**(위계·간격·정렬·Grid·가독성)은 무너짐을 막는 안전선이다. **Expressive Direction**(색·Artwork·Composition·Type 표현·Motion)은 프로젝트마다 달라야 한다. 세부는 `.claude/rules/design-system.md`.
- Figma Master Reference Page는 **Craft Calibration**용 READ ONLY 자료다. Template로 복제하지 않는다(`.claude/rules/figma-workflow.md`).
- "깔끔/안전/흰 배경 + 카드"는 자동 기본값이 아니다. 모든 시각 장치는 "What must this visual prove?"에 답해야 한다.

## Decision Authority — DO NOT ASK BY DEFAULT
현재 Scope / Research / Design System / Approved Direction 안에서 해결 가능한 문제는 묻지 않는다.

| Level | 처리 | 대상 |
|---|---|---|
| 1 AUTO DECIDE | 묻지 않고 PLAN→EXECUTE→RENDER→REVIEW→FIX | Spacing, Padding, Alignment, Grid, Typography minor, Crop, Image scale, Divider, Component spacing, Section density, Annotation, Diagram layout, Content compression, Duplicate 제거, Overflow, Responsive reflow, 승인된 Artwork System 안의 Variation |
| 2 AUTO EXECUTE + REPORT | 실행 후 보고(`pipeline-state.json`의 `last_meaningful_change` + 최종 보고) | Section layout 재구성, Master Component 수정, Density 재구성, 기존 UI Crop 교체, Diagram 변환, 긴 카피 압축, Artwork 적용, 승인된 Direction 안의 큰 Layout 변경 — 단 Brand/Scope/Research Fact를 바꾸지 않을 것 |
| 3 MUST ASK | 질문(최대 3개로 묶음) | Project Scope 변경, 새 핵심 기능, Target User 변경, Brand Identity 핵심 변경, Research Fact 부족, Asset rights blocker, Tool/API blocker, 승인된 결과물(`frozen_scopes`)의 destructive replacement, Final sign-off, Brand 전략 자체가 갈리는 Visual Direction Strategic Fork |

**Action Safety가 Decision Authority보다 우선한다.** 모든 Tool Action은 실행 전 Risk Tier(0 Read · 1 Local/Reversible · 2 Sensitive Read · 3 Consequential · 4 Secret)로 분류한다. Tier 0/1만 자동, Tier 2는 Scope Check, Tier 3(결제·전송·게시·삭제·계정 변경·외부 공유·push 등)은 어떤 Mode에서도 Commit 직전 명시적 승인, Tier 4(Password/OTP/Key 등)는 요청·저장·기록·전달 금지. 불확실하면 한 단계 높은 Tier로 본다. 세부는 `.claude/rules/action-safety.md`.

Micro Approval 질문("간격을 줄일까요?", "카드를 제거할까요?", "이미지를 키울까요?", "이 Crop이 좋을까요?")은 하지 않는다.
`automation.autonomy_mode`: `guided`(Level 2도 실행 전 확인) / `autonomous`(기본값) / `night_run`(사용자 부재 전제, Blocker를 우회해 독립 Stage 계속 진행). 세부 동작은 `.claude/agents/automation-orchestrator.md`.

## Pipeline (V2)
Project Load → Master Grammar Calibration → Current Site Research → UX/Competitor Research → Art Direction Research → Portfolio Gap Analysis → Visual Direction → IA/Core Flow → Design System → Asset/Artwork Strategy → Master Screen → Render → Self QA → Targeted Fix → Secondary Screens → Responsive → Case Study → Final Compression → Export QA(+Final Rights Audit) → Done

필요 없는 Stage는 Semantic Gate로 `SKIPPED` 처리한다(Persona/Artwork/Motion 등을 모든 프로젝트에 강제하지 않는다). 순서·통과 조건·Night Run·Checkpoint는 `.claude/agents/automation-orchestrator.md`를 따른다.

## Polish Limit & Stop Rule
- 한 화면/Section 최대 3 Pass(Structural 1 · Visual QA 1 · Micro Fix 1). 실제 Error가 없으면 4번째 Polish 금지.
- Stop Rule(`automation-orchestrator.md`)이 모두 PASS면 COMPLETE. "더 화려하게/더 예쁘게/다른 안도 가능"은 재작업 사유가 아니다.

## Source of Truth
| 디렉터리 | 내용 |
|---|---|
| `config/` | 프로젝트 정의(`project.yaml`)와 새 프로젝트 템플릿 |
| `automation/` | Pipeline 진행 상태, Checkpoint |
| `research/` | 현황 분석, 사용자 정의, 문제 정의, Portfolio Gap (현재 프로젝트 데이터) |
| `references/` | Product/UX + Art Direction 레퍼런스 조사 (텍스트만, 이미지 없음) |
| `ia/` | 정보구조(사이트맵), 사용자 플로우 (현재 프로젝트 데이터) |
| `design-system/` | Foundation Grammar, 디자인 토큰, Visual Language (현재 프로젝트 데이터) |
| `assets/` | 이미지 Asset과 `manifest.jsonl` |
| `legal/` | Asset/Reference Provider Policy(범용), 라이선스 확인 근거 |
| `figma/` | Screen Registry, 파일 링크 |
| `output/` | 내보내기 결과물(직접 수정 금지) |

Figma 파일은 이 문서들을 기반으로 만들어진 산출물이다. Figma에서 먼저 바꾸고 문서에 나중에 반영하지 않는다.

## Fail Closed Asset Policy
Asset(이미지)의 출처·라이선스·콘텐츠 안전성이 불명확하면(UNKNOWN) REJECTED와 동일하게 취급하고 사용하지 않는다. 공용 규칙은 `.claude/rules/web-research-safety.md`와 `legal/source-policy.yaml`(범용 Provider Policy)을 따르고, 이 프로젝트만의 추가 제한은 `config/project.yaml`의 `project_asset_restrictions`를 따른다. Autonomy는 이 정책을 완화하지 않는다.

## Core Rules
- 대상 Screen/Frame은 `figma/screen-registry.md`를 기준으로 특정한다(`figma_node_id` 우선). 임의로 변경하지 않는다.
- 기존 디자인 토큰을 우선 사용한다. 새 토큰은 Visual Direction에서 필요성을 정의한 뒤 `design-system/`에 먼저 추가한다(기존 토큰이 없다는 이유로 표현을 금지하지 않는다).
- 특정 화면 요청 시 다른 화면을 수정하지 않는다. `frozen_scopes`는 수정하지 않는다.
- `output/` 파일을 직접 수정하지 않는다.
- Figma 반영 전 `ia/`와 `design-system/`을 먼저 확정한다.
- 위치 속성이 충돌하면 Figma 오토레이아웃/제약 조건을 최우선 적용한다.
- 이 프로젝트만의 규칙(Segment 분리 여부, Screen ID Prefix, 핵심 사용자 행동, Asset 제한, Visual Expression, Autonomy 설정 등)은 Automation Core(`.claude/`)에 두지 않고 `config/project.yaml`에서 읽는다.
