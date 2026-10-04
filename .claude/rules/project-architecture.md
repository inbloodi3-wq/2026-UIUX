# Project Architecture Rules

## 세 영역을 섞지 않는다
| 영역 | 위치 | 성격 |
|---|---|---|
| Automation System | `.claude/`, `config/`, `automation/`, `scripts/qa/`, `legal/` | 제작 방법과 진행 상태. 사이트에 노출되지 않는다 |
| Project Source Documents | `design-source/`, `content/`, `ia/`, `design-system/`, `references/`, `assets/`, `qa/` | 무엇을 만들지에 대한 원본 문서 |
| Website Source | `docs/` | 실제 배포되는 코드. Build 없이 그대로 공개된다 |
| Archive | `archive/` | 이전 시스템과 프로젝트 기록. READ ONLY |

## 디렉터리
- `config/project.yaml` — 프로젝트 정의. 이 저장소의 프로젝트는 하나다(`project-template.yaml`은 Schema 참고용).
- `automation/pipeline-state.json` — Pipeline 진행 상태와 Checkpoint.
- `design-source/` — (`figma_implementation`) Figma에서 추출한 구현 데이터: `frame-map.md`(Website Page/Section ↔ Figma Node), `extracted-tokens.json`(Token Source), `implementation-spec.md`(규칙과 계획, 값 없음). Figma 자체는 저장소 밖의 READ ONLY 원본이다.
- `content/` — (`autonomous_generation`) 사이트에 실리는 문안과 프로젝트 정보. 사용자가 제공한 사실만 담는다.
- `ia/` — Website 구조(`sitemap.md`: Page, URL/Route, 내비게이션, Section). 두 mode가 같은 형식을 쓰며 Build Core가 대상을 특정하는 기준이다. Figma Node ID 같은 Design Source 전용 정보는 담지 않는다.
- `design-system/` — (`autonomous_generation`) Visual Direction과 원칙·이유(`visual-language.md`, 값 없음)와 `token-source.json`(Token Source).
- `docs/` — 웹사이트. **SITE SCAFFOLD Stage에서 처음 생성된다.** 그 전의 Design Definition 구간에서는 어느 mode에서도 `docs/`에 파일을 만들지 않는다. 코드 값의 원본은 `docs/css/tokens.css`.
- `references/` — 레퍼런스 조사(텍스트 관찰만).
- `assets/` — Asset 후보·승인 Staging과 `manifest.jsonl`. 사이트에서 쓰는 사본은 `docs/assets/`.
- `legal/` — 출처 정책과 라이선스 확인 근거.
- `qa/` — QA 보고. `qa/screenshots/`는 git에 올리지 않는다.
- `scripts/qa/` — Browser QA 도구. 사이트의 Dependency가 아니다.

## Source of Truth와 수정 순서
- `autonomous_generation`: 구조는 `ia/`가, 문안은 `content/`가, Direction은 `design-system/`이, 값은 `tokens.css`가 원본이다.
- `figma_implementation`: 구조·문안·Design Intent는 Figma가 원본이고(`ia/sitemap.md`는 그 구조를 Website 구조로 옮긴 것, `design-source/`는 추출한 구현 데이터), 코드 값은 `tokens.css`가 원본이다. Figma는 수정하지 않는다.
- Operating Mode는 Design Definition 구간만 가른다. `docs/`, `scripts/qa/`, Build·QA·Deploy 관련 Rule/Agent/Skill은 mode별로 따로 만들지 않는다.
- 구조·문안·Direction을 바꿔야 하면 원본 문서를 먼저 고치고 `docs/`에 반영한다. `docs/`에서 먼저 바꾸고 문서를 나중에 맞추지 않는다.
- 구현 결함(Overflow, 정렬, 대비, 깨진 링크, 접근성)은 원본 문서와 무관하므로 `docs/`에서 바로 고친다.
- 사용자 요청 범위를 넘어 구조를 임의 변경하지 않는다. 승인된 Scope/Direction 안의 Layout 재구성은 Level 1/2로 자율 수행한다(Scope·Stack·Direction 변경은 Level 3).

## `docs/`에 들어가면 안 되는 것
Config, State, Research 문서, Archive 내용, QA 보고, `.env`, 로컬 절대 경로, 권리 미승인 Asset, 사용자가 제공하지 않은 개인정보.

## Core에 프로젝트 정보를 넣지 않는다
`.claude/`와 `scripts/`에는 특정 프로젝트의 Frame 이름, 색, Section 이름, Asset 경로, 프로젝트명을 적지 않는다. 그런 값은 `config/project.yaml`, `design-source/`, `ia/`, `content/`에만 둔다. mode와 Config만 바꾸면 다른 프로젝트를 시작할 수 있어야 한다.

## Archive
`archive/`의 파일을 수정·삭제·이동하지 않는다(Level 3). Active Workflow는 그 안의 Config·State·Rule·Agent·Skill을 사용하지 않는다. `figma_implementation` mode는 예전 Figma 제작 Workflow의 복원이 아니다(Figma 쓰기, Node 기반 Scope, Same File Mode, Case Study Mode 없음). 과거 작업을 사이트에 싣기 위해 내용을 참고하는 것은 가능하지만, 이미지는 `rights-auditor` 승인을 거친다.
