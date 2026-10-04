# UX Principles

이 사이트의 구체적인 방문자와 과제는 `config/project.yaml`(`audiences`, `primary_user_tasks`, `ux_requirements`)과 `ia/`에서 확인한다.

## 원칙 1: Primary Task 우선
- `primary_user_tasks`를 확인하고 이 행동을 방해하는 요소가 없는지 먼저 점검한다.
- Primary Task 진입점은 핵심 Page에서 적은 클릭/스크롤로 접근 가능해야 한다.
- 장식·부가 정보가 Primary Task보다 시각적으로 앞서지 않는다.

## 원칙 2: 콘텐츠가 구조를 정한다
- Section은 실제 콘텐츠(`content/`)가 있을 때만 만든다. 채울 내용이 없는 Section을 구조만 먼저 만들지 않는다.
- Placeholder 문구(Lorem ipsum, 임의 작성 소개)를 완성물에 남기지 않는다.
- 같은 메시지를 3번 이상 반복하지 않는다.

## 원칙 3: Responsive 우선순위 유지
- Desktop · Tablet · Mobile(`viewports`)에서 동일한 정보 우선순위를 유지한다.
- Mobile을 Desktop의 비율 축소판으로 만들지 않는다. Reflow/Stack/Priority Reduction으로 재구성한다.
- Tablet을 Mobile의 확대판이나 Desktop의 축소판으로 방치하지 않는다. 세 Viewport 각각에서 Render해 판단한다.
- 가로 스크롤이 생기면 의도한 Scroll 영역이 아닌 한 Error다.

## 원칙 4: 접근성은 기본이다
- Keyboard만으로 모든 링크·버튼·내비게이션을 쓸 수 있어야 하고 Focus가 보여야 한다.
- 정보를 색만으로 전달하지 않는다. 본문 대비는 WCAG AA 이상을 목표로 한다.
- Touch Target은 Mobile에서 누르기 충분한 크기를 갖는다.

## 검수
세부 검수 항목은 `.claude/skills/review-browser/`와 `.claude/skills/review-code/`의 Checklist를 사용한다.
