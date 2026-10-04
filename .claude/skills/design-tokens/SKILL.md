---
name: design-tokens
description: 디자인 Token을 다룰 때 사용한다 — Scaffold 전에는 Token Source(JSON)에 정의하고, Scaffold 이후에는 코드 값의 유일한 원본인 docs/css/tokens.css에서 선택·추가·변경한다.
---

# Design Tokens

## 값이 흐르는 방향
```
figma_implementation    Figma ──(read-design-source)──→ design-source/extracted-tokens.json ─┐
autonomous_generation   승인된 Visual Direction ──(visual-director)──→ design-system/token-source.json ─┤
                                                                              (scaffold-site) ▼
                                                                          docs/css/tokens.css
```
- **SITE SCAFFOLD 전**: `docs/`가 없다. Token은 Token Source(JSON)에 정의한다. `docs/css/tokens.css`를 미리 만들지 않는다.
- **SITE SCAFFOLD**: `scaffold-site`가 Token Source를 읽어 `tokens.css`를 생성한다.
- **그 이후**: 코드 값의 유일한 원본은 `docs/css/tokens.css`다. Token Source는 추출·승인 시점의 기록이며 계속 맞춰 고치지 않는다. 같은 값을 다른 CSS 파일이나 Markdown에 다시 적지 않는다.

### Token Source 형식 (두 mode 공통)
```json
{
  "source": { },
  "tokens": { "--token-name": { "value": "", "category": "color|typography|space|layout|shape|motion", "note": "" } },
  "breakpoints": [ { "name": "", "min_width": 0, "basis": "" } ],
  "fonts": [ { "family": "", "weights": [] } ],
  "unresolved": [ ]
}
```
figma mode는 Token마다 `figma`(Variable/Style 이름 또는 Node ID) 필드를 더한다(`read-design-source`). Token 이름은 CSS Custom Property 이름 그대로 쓴다.

## 원칙
SITE SCAFFOLD 이후 `docs/css/tokens.css`가 코드에서 쓰는 디자인 값의 **유일한 원본**이다. Design Definition 문서(figma mode: `design-source/implementation-spec.md` / autonomous mode: `design-system/visual-language.md`)에는 Token 이름과 역할·이유만 적고 값을 적지 않는다(`.claude/rules/design-system.md`).

값이 오는 곳은 mode에 따라 다르다. figma mode에서는 **Figma에서 읽은 값**을 옮긴다(창작·통일·보정하지 않는다). autonomous mode에서는 승인된 Direction에 따라 Visual Director가 정한다.

## Workflow — Token을 쓸 때 (Scaffold 이후)
1. `docs/css/tokens.css`를 Read해 요구에 가장 가까운 기존 Token을 찾는다.
2. 있으면 `var(--token)`으로 참조한다.
3. 없으면 아래 "Token을 추가할 때"를 따른다. 임의 Hex/px 값을 Component에 직접 쓰지 않는다.

## Workflow — Token을 추가·변경할 때 (Scaffold 이후)
1. Design Definition 문서에 그 Token의 근거가 있는지 확인한다(figma mode: 어느 Figma Node/Style의 값인가 / autonomous mode: 무엇을 전달하는가). 없으면 한 줄 추가한다.
2. `tokens.css`를 **Edit로** 수정한다(최초 생성은 `scaffold-site`가 한다).
3. 이름은 `.claude/rules/naming-convention.md`의 `--{category}-{role}[-{variant}]`를 따른다. 값이 아니라 역할로 이름 짓는다.
4. 기존 Token의 값을 바꾸면 그 Token을 쓰는 곳을 Grep으로 확인하고 영향받는 Section을 다시 Render한다.
5. 승인된 Direction의 성격을 바꾸는 변경(주 색상 교체, 서체 교체)과 figma mode에서 Figma와 다른 값으로 바꾸는 변경은 Level 3다.

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
