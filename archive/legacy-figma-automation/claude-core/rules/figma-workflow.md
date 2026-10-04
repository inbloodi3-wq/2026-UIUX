# Figma Workflow Rules

## 사용 시점
- 화면 설계를 Figma에 반영하기 전에 반드시 `ia/`와 `design-system/`을 먼저 확정한다.
- Figma 관련 작업 전 `/figma-use` 스킬(또는 해당 안내)을 먼저 확인한다.

## Master Reference Page
- 활성 Project Config의 `automation.master_reference_page`로 지정된 Page(예: Standard Slide Layout Frame 세트)는 **Master Design Grammar Reference**다. TEMPLATE가 아니다.
- 보호 방식은 Config의 `automation.reference_protection`으로 정한다.
  - `page_read_only`(기본값, 값이 없을 때): Page 전체 READ ONLY. 어떤 Agent도 이 Page의 Frame/Text/Style/Object를 수정·삭제·이동하지 않고, `use_figma` 쓰기 대상에 이 Page를 포함하지 않는다.
  - `frozen_existing_frames`: State 파일 `frozen_scopes`에 **Node ID로 등록된** 기존 Frame과 그 모든 하위 Node를 `FROZEN_REFERENCE`로 보호한다(이름으로 판단하지 않는다). 수정·삭제·이동·이름 변경·Text 변경·내부 Object 변경·Template 복제 금지. 같은 Page에 신규 Frame을 만들 수 있지만, 쓰기는 `working_scope: new_frames_only`에 따라 State의 `editable_scopes`에 등록된 신규 Node와 그 하위에만 허용한다. 신규 작업 영역이라는 이유로 Reference 수정 권한이 생기지 않는다.
- Config에 `figma.reference`와 `figma.working_target`이 분리되어 있으면: 모든 Figma Write 직전 실제 대상 fileKey가 `figma.working_target.file_key`와 같은지 확인하고, 비어 있거나 불일치하면 쓰기를 중단한다. `figma.reference.file_key`와 같으면 쓰기를 중단한다 — **예외: Same File Mode**(`automation.figma_write_isolation: policy_only`, 사용자가 확정한 작업 환경 제약)에서는 같은 파일을 허용하되 아래 Node 단위 검사를 모두 통과해야 한다(Agent 사전 검증 규칙이며 Tool-level 제한이 아니다).

### Same File Mode (Node 단위 Scope 분리)
- **Working Zone**: `figma.working_target.working_zone`에 기록된 영역(기존 Frozen Frame 전체 경계 + 여유 간격 바깥)만 신규 배치 대상이다. 좌표는 기존 Frame의 실제 Metadata로 계산하며, Bootstrap 직전에 다시 조회해 재계산한다.
- **Bootstrap**: `working_root_node_id`가 비어 있을 때만 허용. 대상 Page에 **최상위 Frame 1개(`working_root` 이름)만** Working Zone 안에 생성하고, 다른 Node는 읽기 외 접근하지 않는다. 생성 직후 Node ID를 `working_root_node_id`와 State `editable_scopes`에 기록한다. 이후 Bootstrap은 다시 허용되지 않는다.
- **Write Pre-check (모든 쓰기 직전, 하나라도 실패하면 중단)**:
  1. 대상 fileKey == `working_target.file_key`
  2. 대상 Page ID == `working_target.page_id`
  3. 대상 Node(및 조상 체인)가 `frozen_scopes`에 없음
  4. 대상 Node가 `working_root_node_id` 자신이거나 그 자손(Bootstrap 제외)
  5. 신규 생성/이동/리사이즈 결과의 절대 경계가 Working Zone 안에 있고 Frozen Frame 경계와 겹치지 않음
- **Protection QA (쓰기 세션 전후)**: `get_metadata(page)`로 Frozen Frame의 ID 집합, 각 Frame의 name·x·y·width·height, 하위 Node ID 목록을 전후 비교한다. 하나라도 다르면 즉시 쓰기를 멈추고 `blockers`에 기록한 뒤 사용자에게 보고한다(자동 복구 시도 금지).
- 이 검사들은 원본 보호를 **강제하지 않는다**. `use_figma`는 파일 전체에 쓸 수 있으므로 Same File Mode는 `supervised_test`에서만 쓰고, 무인 Night Run 조건(`isolated_file` / `tool_enforced_verified`)을 충족하지 않는다.
- `use_figma` 스크립트는 쓰기 전에 대상 Node의 조상 체인을 확인해 `frozen_scopes`에 속하면 중단(throw)하고, `editable_scopes` 밖이면 쓰지 않는다. 신규 생성 Node ID는 생성 직후 `editable_scopes`에 기록한다.
- **보안 경계**: `FROZEN_REFERENCE`/`frozen_scopes`/`editable_scopes`는 Agent 행동 규칙(POLICY)이다. Figma Tool의 실제 접근 제어가 아니며, `use_figma`는 파일 전체에 쓸 수 있다. 따라서:
  - `supervised_test`: 사용자가 세션에 있는 상태에서, 같은 Page의 신규 Frame에서만 작업한다.
  - `unattended_night_run`: 별도로 격리된 Figma 파일을 사용하거나, Tool 수준의 쓰기 범위 제한이 실제로 검증된 경우에만 활성화한다. 두 조건이 없으면 `autonomy_mode: night_run`을 요청받아도 Figma 쓰기 단계는 실행하지 않고 `approval_required`에 기록한다. 이 조건은 자동화 편의를 이유로 완화하지 않는다.
- 참고 대상: Typography 비율, 크기 위계, Line height 관계, Letter spacing 경향, Margin/Padding 비율, Text-to-space, 정렬 규율, 정보 위계, Grid 균형, 여백 Rhythm → `extract-design-grammar` Skill로 `design-system/foundation-grammar.md`에 추출해 **그 문서만** 사용한다.
- 복사 금지: Frame composition, Object 위치, Diagram 모양, Slide layout, 동일한 Column split, Graphic 배치, 동일한 Visual appearance.
- Page 3 Frame을 Duplicate해 내용만 교체하는 방식, Frame geometry를 그대로 옮기는 방식은 금지다. Expressive Direction이면 이 Page보다 훨씬 강한 색·이미지·Artwork·Typography·Composition을 사용할 수 있다.

## 읽기 (Figma → 문서)
- 기존 Figma 파일이 있는 경우(`config/project.yaml`의 `figma.file_key`) `get_design_context`, `get_screenshot`, `get_metadata`로 현황을 파악하고 `research/current-site-audit.md`에 기록한다.

## 쓰기 (문서 → Figma)
작업 전 순서:
1. `design-system/foundation-grammar.md` 확인 (없으면 `typography.md`/`spacing.md`/`grid.md`)
2. `design-system/visual-language.md` 확인 (Direction, Expressive Device, Artwork System)
3. 대상 화면의 UX 역할 확인 (`ia/`, Screen ID, Primary Task)
4. 그 다음 Layout을 **새로** 설계

- 대상 Screen ID·요소 ID·토큰을 `ia/`, `design-system/`에서 먼저 확인한다.
- 프레임 이름은 Screen ID와 동일하게 지정한다 (`naming-convention.md` 참조).
- Figma 파일 링크와 주요 프레임 목록은 작업 직후 `figma/file-links.md`에 기록한다.

## Render Loop
쓰기 후에는 반드시 `get_screenshot`으로 Render해서 확인한다(Render 없이 PASS 판정 금지). 한 화면/Section 최대 3 Pass(Structural → Visual QA → Micro Fix). 실제 Error가 없으면 4번째 Polish 금지.

## 원칙
- Figma 파일 자체를 Source of Truth로 삼지 않는다. 구조적 결정(정보구조, 토큰)은 항상 문서에서 먼저 확정한다.
- 특정 화면 요청 시 해당 화면의 프레임만 수정하고 다른 프레임은 건드리지 않는다.
- 활성 State 파일의 `frozen_scopes`에 있는 Frame(LOCK/승인 완료)은 수정하지 않는다. 교체가 필요하면 Level 3(질문).
