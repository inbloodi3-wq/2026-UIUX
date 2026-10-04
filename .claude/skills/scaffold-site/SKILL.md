---
name: scaffold-site
description: docs/를 처음 생성할 때 사용한다. Token Source에서 docs/css/tokens.css를 만들고 웹사이트의 최소 골격(index.html, css 4개 파일, js/main.js, .nojekyll)을 만든다. 이미 골격이 있으면 사용하지 않는다.
---

# Scaffold Site

## Preconditions (하나라도 아니면 중단)
- Design Definition 구간이 COMPLETE다(두 mode 공통 조건: `ia/sitemap.md`에 첫 Page와 Section이 등록됨, Token Source 존재).
  - figma mode: `implementation_plan` COMPLETE(`design-source/implementation-spec.md`, `design-source/extracted-tokens.json`, `design_source.status: PLAN_READY`)
  - autonomous mode: `visual_system` COMPLETE(`design-system/visual-language.md` 승인, `design-system/token-source.json`)
- `docs/index.html`이 아직 없다. 있으면 이 Skill이 아니라 `build-section`을 쓴다.

## 만드는 것 (이것만)
```
docs/
  index.html
  css/tokens.css      (Token Source에서 생성)
  css/base.css
  css/layout.css
  css/components.css
  js/main.js
  assets/             (Asset이 실제로 들어올 때 생성)
  .nojekyll
```
`docs/`는 이 Stage에서 처음 생긴다. Design Definition 구간에서는 `docs/`에 아무것도 만들지 않는다. 다른 Page, Page 전용 CSS, 추가 JS 파일은 실제로 필요해질 때 만든다.

두 mode가 이 Skill 하나를 쓴다. 달라지는 것은 읽는 Token Source 파일뿐이고, 만들어지는 `docs/` 구조는 같다.

## Procedure
0. **`tokens.css` 생성**: `config/project.yaml`의 `design_source.token_source`가 가리키는 Token Source(figma mode: `design-source/extracted-tokens.json` / autonomous mode: `design-system/token-source.json`)를 읽어 `docs/css/tokens.css`를 Write로 만든다(`design-tokens` Skill의 작성 규칙).
   - Token Source의 모든 Token을 같은 이름으로 옮긴다. 빼거나 새로 만들지 않는다.
   - 여기서 하는 변환은 단위뿐이다: Type·간격의 `rem` 환산, 유동 값의 `clamp()`. **결과 크기는 Token Source의 값과 같아야 한다**(figma mode에서 디자인이 있는 Viewport 기준).
   - Token Source의 `unresolved` 항목은 임의로 정하지 않는다. Spec의 Implementation Judgements에 근거가 있으면 그에 따르고, 없으면 보고한다.
   - 이 시점부터 코드 값의 유일한 원본은 `docs/css/tokens.css`다. Token Source 파일은 추출·승인 시점의 기록으로 남기고 맞춰 고치지 않는다.
1. **Breakpoint 확정**: Token Source의 `breakpoints`와 figma mode는 Spec의 Responsive Plan, autonomous mode는 `ia/sitemap.md`의 Viewport별 비고와 `viewports`를 보고 `min-width` Breakpoint를 정해 `config/project.yaml`의 `site.breakpoints`에 기록한다(보통 2개: Tablet 진입, Desktop 진입).
2. **`index.html`**: `<!doctype html>`, `<html lang>`, `charset`, `viewport`, `title`, `description`(문안은 콘텐츠 원본에서. 없으면 비워 두고 요청), CSS `<link>` 4개(tokens → base → layout → components), `<script src="js/main.js" defer>`. Body는 Skip Link, `header`(+`nav`), `main`, `footer` 골격과 `ia/sitemap.md`에 등록된 Section의 빈 `<section id>`·제목까지만. Section 내부 디자인은 `build-section`에서 한다.
3. **`base.css`**: 최소 Reset(`box-sizing`, margin), `html`/`body` 기본 Typography(Token 참조), 링크·이미지 기본, `:focus-visible`, `.u-visually-hidden`, `prefers-reduced-motion`. Self-hosted Font가 있으면 `@font-face`.
4. **`layout.css`**: `.l-container`, Section 간격, Header/Footer 골격. Mobile 기본 → Breakpoint에서 확장.
5. **`components.css`**: 골격에 실제로 쓰인 Component만(예: 내비게이션). 비어 있어도 된다.
6. **`main.js`**: `document.documentElement.classList.add('js')` 한 줄과, 필요한 Interaction이 있을 때의 자리만. 쓰이지 않는 함수를 미리 만들지 않는다.
7. **`.nojekyll`**: 빈 파일.
8. 모든 경로는 상대 경로. 값은 전부 `var(--token)`.
9. `node scripts/qa/capture.cjs --label scaffold`로 세 Viewport를 Render하고 스크린샷을 확인한다.

## Completion
- `tokens.css`의 Token 목록이 Token Source와 일치한다(누락·임의 추가 0).
- 세 Viewport Render 확인, 가로 Overflow 0, Console Error 0, 실패 Request 0, Root-absolute 경로 0.
- JS 비활성 Render에서도 골격과 제목이 보인다.
- `review-code` 기준 위반 0(특히 Raw 값, Inline Style, `@import`).

## Do Not
- Section 내부를 디자인하지 않는다. 문안을 지어내지 않는다.
- `docs/` 밖의 문서 내용(Config, State, Research)을 사이트에 넣지 않는다.
- Library, Icon Set, Web Font CDN을 추가하지 않는다.
