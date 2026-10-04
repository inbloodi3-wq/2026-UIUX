# Design System Rules

## 핵심 원칙: DESIGN FOUNDATION ≠ VISUAL STYLE
두 Layer를 분리해서 판단한다.

| Layer | 역할 | 내용 |
|---|---|---|
| A. Foundation | 완성도의 안전선 | Typography 위계, Line height, Margin/Padding, 정렬, Grid, Text measure, 여백 Rhythm, 가독성, 대비 |
| B. Expressive Direction | 이 사이트의 개성 | Color intensity, Artwork, Image treatment, Type expression, Composition, Scale contrast, Motif, Motion |

- Foundation은 "정확히 이 값을 써라"가 아니라 **"시각적으로 무너지는 것을 막는 안전선"**이다. 큰 Type, Full Bleed, 비대칭, Overlap, 과감한 Crop은 허용된다. 단 가독성 저하·위계 붕괴·정렬 오류·의미 없는 장식으로 이어지면 FAIL이다.
- `autonomous_generation`: Expressive Direction은 `design-system/visual-language.md`에서 결정하고, 승인된 뒤의 변경은 Level 3다.
- `figma_implementation`: 두 Layer 모두 **Figma가 이미 정했다.** 새로 판단하지 않고 옮긴다. Foundation 문제(가독성·대비 FAIL 등)를 Figma에서 발견하면 고치지 않고 Design Gap으로 보고한다. 아래 "Minimalism Bias 방지", "Semantic Visual Rule", "Artwork System"은 autonomous mode의 설계 원칙이며 figma mode에서 디자인을 바꾸는 근거가 되지 않는다.

## Source of Truth — 값은 한 곳에만
| 무엇 | 어디 |
|---|---|
| 코드에서 쓰는 디자인 **값**(색, Type Scale, 간격, 반경, 그림자, Motion) | `docs/css/tokens.css` — **유일한 원본**. SITE SCAFFOLD에서 생성된다 |
| Scaffold의 입력이 되는 Token 값(Token Source) | figma mode: `design-source/extracted-tokens.json` · autonomous mode: `design-system/token-source.json` |
| Breakpoint 값 | `config/project.yaml`의 `site.breakpoints`(Media Query에는 Custom Property를 쓸 수 없다) |
| Design Intent(`figma_implementation`) | Figma — READ ONLY. 구현 규칙으로 옮긴 것이 `design-source/implementation-spec.md` |
| Direction, 원칙, 각 Token의 **역할과 사용 이유**, Component 사용 규칙(`autonomous_generation`) | `design-system/*.md` |

- `design-system/`과 `design-source/`의 Markdown 문서에 Hex, px, rem 같은 구체 값을 적지 않는다(값은 Token Source JSON과 `tokens.css`에만 있다). Token **이름**(`--color-accent`)과 그 역할·이유만 적는다. 같은 값을 문서와 CSS 양쪽에서 따로 관리하지 않는다.
- 값의 흐름은 한 방향이다: Design Intent(Figma 또는 승인된 Direction) → Token Source → `docs/css/tokens.css`. Design Definition 구간에서는 `docs/`를 만들지 않고, `tokens.css`는 SITE SCAFFOLD에서 Token Source로부터 생성한다. 그 뒤 코드 안에서는 `tokens.css`만 참조하고 Token Source를 두 번째 원본으로 유지하지 않는다.
- figma mode에서 Figma와 코드가 다르면: 최초 구현 중에는 Figma 우선, 사용자 승인으로 바꾼 것은 Spec의 기록 우선, 판단할 수 없으면 보고한다.
- 값을 바꿀 때는 `tokens.css`만 고친다. 역할이나 이유가 바뀌면 문서를 고친다.
- Browser에서 발견한 문제를 개별 Selector에 Raw 값으로 덧대어 고치지 않는다. Token 문제면 Token을, 구조 문제면 Layout/Component를 고친다.

## Token 사용
- 새 값이 필요하면 먼저 기존 Token을 검색한다. 같은 의미의 Token을 중복 생성하지 않는다.
- 기존 Token은 **일관성**을 위한 것이지 창의성 제한이 아니다. 새 표현에 Token이 필요하면 `visual-language.md`에 필요성(무엇을 전달하는가)을 적고 `tokens.css`에 추가한 뒤 사용한다.
- Token 이름은 값이 아니라 역할을 나타낸다(`--color-accent` O, `--color-blue` X). 규칙은 `naming-convention.md`.

## Minimalism Bias 방지
"깔끔하니까 좋다", "안전하니까 유지한다", "정보가 많으니 흰 배경 + 카드로 정리한다"는 자동 기본값이 될 수 없다. Strong Color, Large Type, Full Bleed, Irregular Grid, Graphic Motif를 선택할 수 있고, Restrained 표현을 선택할 때도 이유를 `visual-language.md`에 적는다. 어느 쪽이든 사이트의 목적과 콘텐츠에 맞아야 한다.

## Semantic Visual Rule
Image/Artwork/Graphic/Motion을 넣기 전에 **"What must this visual prove?"**를 한 줄로 정의한다. 답할 수 없으면 넣지 않는다(Artwork ≠ Decoration).

## Artwork System
Artwork가 Direction의 핵심이면 개별 장식이 아니라 하나의 System으로 `visual-language.md`에 정의한다: Core motif(1~2개), Shape language, Color behavior, Image treatment, Typography interaction, Composition rule, Variation rule. Section/Page마다 새 Graphic Style을 만들지 않는다.

## Layout Priority (CSS)
1. 문서 흐름과 Flex/Grid로 배치한다.
2. `position: absolute/fixed`는 흐름으로 표현할 수 없는 요소(Overlap, Off-grid Expressive 요소, Overlay)에만 쓴다.
3. 고정 높이로 콘텐츠를 가두지 않는다. 콘텐츠가 길어져도 무너지지 않아야 한다.

## 참조
Design Definition `design-source/implementation-spec.md`(figma) / `design-system/visual-language.md`(autonomous) · 값 `docs/css/tokens.css` · 코드 규칙 `.claude/rules/frontend-code.md`
