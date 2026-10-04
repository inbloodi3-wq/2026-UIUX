# Design System Rules

## 핵심 원칙: DESIGN FOUNDATION ≠ VISUAL STYLE
두 Layer를 분리해서 판단한다.

| Layer | 역할 | 내용 | Source |
|---|---|---|---|
| A. Foundation | 완성도의 안전선(안정성) | Typography 위계, Line height, Letter spacing, Margin/Padding, 정렬, Grid, Text measure, 여백, Rhythm, Baseline, 가독성 | `design-system/foundation-grammar.md`, `typography.md`, `spacing.md`, `grid.md` |
| B. Expressive Direction | 프로젝트의 개성(Portfolio Diversity) | Color intensity, Artwork, Photo/Illustration, Type expression, Composition, Overlap, Asymmetry, Scale contrast, Texture, Shape, Motif, Image dominance, Motion, Experimental layout | `design-system/visual-language.md` |

- Foundation은 "정확히 이 값을 써라"가 아니라 **"시각적으로 무너지는 것을 막는 안전선"**이다. 큰 Type, Full Bleed, 비대칭, Overlap, Off-grid, 과감한 Crop, 실험적 간격은 허용된다. 단 가독성 저하·위계 붕괴·정렬 오류·의미 없는 장식으로 이어지면 FAIL이다.
- Foundation Reference(Master Reference Page 등)를 Visual Style Template로 사용하지 않는다.

## 토큰 사용
- 화면마다 임의의 색상/간격 값을 반복 작성하지 않는다. 먼저 `design-system/`의 기존 토큰을 검색한다.
- 기존 토큰은 **일관성**을 위한 것이지 창의성 제한이 아니다. "기존 토큰이 없으니 이 표현은 금지"로 해석하지 않는다.
- 새 표현에 토큰이 필요하면 확장한다. 조건:
  1. `design-system/visual-language.md`에 그 표현의 필요성(무엇을 전달하는지)이 먼저 정의되어 있을 것
  2. 토큰을 `design-system/`에 먼저 추가하고 이유를 기록한 뒤 Figma에 적용할 것 (Figma에서 임의 값을 만든 뒤 문서에 나중에 적는 방식 금지)
- 승인된(APPROVED/LOCK) 토큰 값을 덮어쓰는 변경은 Brand Identity 변경이면 Level 3(질문), 그 외는 Level 2(실행 후 보고)다(`CLAUDE.md` Decision Authority).

## Minimalism Bias 방지
다음 판단은 자동 기본값이 될 수 없다: "깔끔하니까 좋다", "안전하니까 유지한다", "정보가 많으니 흰 배경 + 카드로 정리한다".
프로젝트 성격에 따라 Strong Color, Large Artwork, Editorial Image, Typography-led Composition, Graphic Motif, Pattern/Texture, Illustration, High Contrast, Layering, Large Scale Type, Full Bleed, Irregular Grid를 적극적으로 선택할 수 있다. Restrained 표현을 선택할 때도 그 이유를 `visual-language.md`에 기록한다.

## Semantic Visual Rule
Image/Artwork/Graphic을 배치하기 전에 **"What must this visual prove?"**를 한 줄로 정의한다. 답할 수 없으면 사용하지 않는다(Artwork ≠ Decoration). 비율 통일보다 의미 전달이 우선이다.
예) Hero Artwork → Brand/Product Mood · Comparison → Difference · Search → Search Interaction · Campaign Graphic → Brand Energy · Portfolio Process → Decision Evidence

## Artwork System
Expressive/Artwork-heavy Direction이면 Artwork를 개별 장식이 아니라 하나의 System으로 `visual-language.md`에 정의한다: Core motif(1~2개), Shape language, Color behavior, Image treatment, Texture, Typography interaction, Composition rule, Variation rule. Section/Page마다 새 Graphic Style을 만들지 않는다. Variation은 허용, Visual Language는 하나.

## 참조
Colors `design-system/colors.md` · Typography `typography.md` · Spacing `spacing.md` · Grid `grid.md` · Components `components.md` · Foundation `foundation-grammar.md` · Expressive `visual-language.md`

## Position Priority
1. Figma 오토레이아웃/제약 조건
2. X/Y 절대 좌표 (오토레이아웃으로 표현 불가능한 요소 — Overlap/Off-grid Expressive 요소 포함)
3. 정렬 (`top-right`, `center` 등)
4. 레이아웃 기본값
