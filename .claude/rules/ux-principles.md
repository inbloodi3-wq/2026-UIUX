# UX Principles (범용)

프로젝트에 관계없이 적용되는 UX 판단 원칙이다. 이 프로젝트만의 구체적인 사용자/과제는 `config/project.yaml`(`audiences`, `primary_user_tasks`, `ux_requirements`)과 `research/`, `ia/` 문서에서 확인한다.

## 원칙 1: Primary Task 우선
- `config/project.yaml`의 `primary_user_tasks`를 확인하고, 이 행동을 방해하는 요소가 없는지 먼저 점검한다.
- 비핵심 정보(회사 소개, 공지 등)보다 Primary Task를 시각적으로 우선한다.
- Primary Task 진입점은 핵심 화면에서 쉽게(적은 클릭/스크롤로) 접근 가능해야 한다.

## 원칙 2: Segment 분리는 조건부
- `config/project.yaml`의 `information_architecture.segment_separation_required`가 `true`인 경우에만 사용자 Segment별로 내비게이션/화면 구조를 분리한다.
- 분리가 필요한 경우, Segment 간 이동은 명시적인 진입점(내비게이션, Cross-navigation Entry Card/CTA)으로만 연결하고 한 화면에 서로 다른 Segment의 핵심 업무 콘텐츠를 섞지 않는다. 짧은 이동 경로 성격의 Entry Card/CTA는 허용 예외로 본다.
- Segment가 하나뿐이거나 분리가 필요 없는 프로젝트라면 이 원칙은 적용하지 않는다.

## 원칙 3: Responsive 우선순위 유지
- Desktop과 Mobile 등 서로 다른 Viewport(`config/project.yaml`의 `viewports`)에서도 동일한 정보 우선순위(어떤 정보가 먼저 보여야 하는지)를 유지한다.
- Mobile을 Desktop의 비율 축소판으로 만들지 않는다. Reflow/Stack/Horizontal Scroll/Priority Reduction으로 재구성한다.

## 검수 기준 (범용)
- 새 화면/수정 화면이 어떤 Segment/역할에 속하는지 명확한가 (`config/project.yaml` 기준).
- Primary Task 진입점이 핵심 화면에서 쉽게 접근 가능한가.
- Segment 분리가 필요한 프로젝트에서 서로 다른 Segment의 핵심 업무 콘텐츠가 한 화면에 섞이지 않았는가.

세부 검수 항목은 `.claude/skills/review-redesign/checklist.md`를 사용한다.
