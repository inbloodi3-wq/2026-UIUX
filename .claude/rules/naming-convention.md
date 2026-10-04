# Naming Convention (범용)

## 파일명
- Markdown: kebab-case
- 규칙/스킬 문서: 기능명 기준 kebab-case

## Screen ID
기본 규칙(Generic Default): `{domain}-{screen}`

프로젝트가 `config/project.yaml`의 `screen_id_policy.prefixes`에서 별도 Prefix 체계를 정의하면 그 규칙을 우선한다.

예(현재 프로젝트, `config/project.yaml` 참고) — 회사명이 아닌 프로젝트 설정값 예시:
- `c-{영역}` (B2C) 예) `c-home`, `c-search-result`
- `b-{영역}` (B2B) 예) `b-partner-home`, `b-contract`
- `g-{영역}` (공통) 예) `g-about`, `g-login`

## Screen Variant (Device/Viewport)
같은 Logical Screen이 여러 Viewport로 존재하면 `{screen_id}.{device}` 형식의 `variant_id`를 사용한다.

예) `c-home.desktop`, `c-home.mobile`

Screen을 특정할 때는 `screen_id`만으로 실제 Figma Frame을 찾지 않는다. 다음 식별 체계를 사용하며, Automation Target 우선순위는 `figma_node_id` → `variant_id` → `frame_name` 순이다. 자세한 내용은 `figma/screen-registry.md`를 참고한다.

## Element
- 제목: `title`
- 부제목: `subtitle`
- 본문: `body01`, `body02`
- 카드: `card01`, `card02`
- 버튼: `cta`, `btn-primary`, `btn-secondary`
- 내비게이션: `nav-gnb`, `nav-lnb`

Element ID는 `{screenId}.{elementId}` 형식을 사용한다. 예) `c-home.hero`, `c-home.search-bar`

## Figma 레이어/프레임 네이밍
- 프레임 이름(`frame_name`)은 `figma/screen-registry.md`에 등록한 이름과 동일하게 맞춘다.
- 컴포넌트는 `design-system/components.md`에 등록된 이름을 그대로 사용한다.
- 상태 변형은 `컴포넌트명/상태` 형식을 사용한다. 예) `btn-primary/hover`

## Token
- 색상: `surface-page`, `text-primary`, `brand-primary` (실제 값은 `design-system/colors.md` 참조)
- 글자: `display`, `h1`, `h2`, `body1`, `body2`, `caption` (실제 값은 `design-system/typography.md` 참조)
- 간격: `space-1`부터 프로젝트 스케일에 맞게 확장 (실제 값은 `design-system/spacing.md` 참조)
- 그리드: `grid-desktop`, `grid-tablet`, `grid-mobile` (실제 값은 `design-system/grid.md` 참조)
