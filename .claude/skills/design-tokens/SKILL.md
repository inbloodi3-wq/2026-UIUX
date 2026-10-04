---
name: design-tokens
description: docs/css/tokens.css에 디자인 Token(색·타입·간격 등 CSS Custom Property)을 정의·추가·선택할 때 사용한다. 값의 유일한 원본을 다룬다.
---

# Design Tokens

## 원칙
`docs/css/tokens.css`가 디자인 값의 **유일한 원본**이다. `design-system/` 문서에는 Token 이름과 역할·이유만 적고 값을 적지 않는다(`.claude/rules/design-system.md`).

## Workflow — Token을 쓸 때
1. `docs/css/tokens.css`를 Read해 요구에 가장 가까운 기존 Token을 찾는다.
2. 있으면 `var(--token)`으로 참조한다.
3. 없으면 아래 "Token을 추가할 때"를 따른다. 임의 Hex/px 값을 Component에 직접 쓰지 않는다.

## Workflow — Token을 추가·변경할 때
1. `design-system/visual-language.md`에 그 Token이 필요한 이유(무엇을 전달하는가)가 있는지 확인한다. 없으면 한 줄 추가한다.
2. `tokens.css`를 **Edit로** 수정한다(파일이 없을 때만 Write로 생성).
3. 이름은 `.claude/rules/naming-convention.md`의 `--{category}-{role}[-{variant}]`를 따른다. 값이 아니라 역할로 이름 짓는다.
4. 기존 Token의 값을 바꾸면 그 Token을 쓰는 곳을 Grep으로 확인하고 영향받는 Section을 다시 Render한다.
5. 승인된 Direction의 성격을 바꾸는 변경(주 색상 교체, 서체 교체)은 Level 3다.

## `tokens.css` 작성 규칙
- `:root`에 Custom Property만 둔다. Selector Style, Reset, `@import`, `@font-face` 외의 규칙을 넣지 않는다(`@font-face`는 `base.css`).
- Category별로 묶고 한 줄 주석으로 구분한다: Color → Typography → Space → Layout → Shape → Motion.
- Type Scale과 Space는 `rem`, 유동 값은 `clamp()`로 정의한다.
- 본문 Text와 배경 Token 조합은 WCAG AA 대비를 만족해야 한다. 정의할 때 계산해 확인한다.
- Breakpoint는 여기에 두지 않는다(`config/project.yaml`의 `site.breakpoints`).
- 쓰이지 않는 Token을 미리 만들지 않는다.

## Do Not
- 문서와 CSS에 같은 값을 따로 적지 않는다.
- 동일 의미의 Token을 중복 생성하지 않는다.
- Viewport별로 Token 이름을 늘리지 않는다(`--text-xl-mobile` X). 유동 값이나 Media Query 안에서의 재할당으로 해결한다.

세부 참조 위치는 `reference.md`.
