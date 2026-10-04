---
name: scaffold-site
description: docs/에 웹사이트의 최소 골격(index.html, css 4개 파일, js/main.js, .nojekyll)을 처음 만들 때 사용한다. 이미 골격이 있으면 사용하지 않는다.
---

# Scaffold Site

## Preconditions (하나라도 아니면 중단)
- Design Definition 구간이 COMPLETE다(두 mode 공통 조건: `ia/sitemap.md`에 첫 Page와 Section이 등록됨, `docs/css/tokens.css` 존재).
  - figma mode: `implementation_plan` COMPLETE(`design-source/implementation-spec.md`, `design_source.status: PLAN_READY`)
  - autonomous mode: `visual_system` COMPLETE(`design-system/visual-language.md` 승인)
- `docs/index.html`이 아직 없다. 있으면 이 Skill이 아니라 `build-section`을 쓴다.

## 만드는 것 (이것만)
```
docs/
  index.html
  css/tokens.css      (Design Definition 구간에서 이미 만들어짐 — 수정하지 않는다)
  css/base.css
  css/layout.css
  css/components.css
  js/main.js
  assets/             (Asset이 실제로 들어올 때 생성)
  .nojekyll
```
다른 Page, Page 전용 CSS, 추가 JS 파일은 실제로 필요해질 때 만든다.

## Procedure
1. **Breakpoint 확정**: figma mode는 Spec의 Responsive Plan, autonomous mode는 `ia/sitemap.md`의 Viewport별 비고와 `viewports`를 보고 `min-width` Breakpoint를 정해 `config/project.yaml`의 `site.breakpoints`에 기록한다(보통 2개: Tablet 진입, Desktop 진입).
2. **`index.html`**: `<!doctype html>`, `<html lang>`, `charset`, `viewport`, `title`, `description`(문안은 콘텐츠 원본에서. 없으면 비워 두고 요청), CSS `<link>` 4개(tokens → base → layout → components), `<script src="js/main.js" defer>`. Body는 Skip Link, `header`(+`nav`), `main`, `footer` 골격과 `ia/sitemap.md`에 등록된 Section의 빈 `<section id>`·제목까지만. Section 내부 디자인은 `build-section`에서 한다.
3. **`base.css`**: 최소 Reset(`box-sizing`, margin), `html`/`body` 기본 Typography(Token 참조), 링크·이미지 기본, `:focus-visible`, `.u-visually-hidden`, `prefers-reduced-motion`. Self-hosted Font가 있으면 `@font-face`.
4. **`layout.css`**: `.l-container`, Section 간격, Header/Footer 골격. Mobile 기본 → Breakpoint에서 확장.
5. **`components.css`**: 골격에 실제로 쓰인 Component만(예: 내비게이션). 비어 있어도 된다.
6. **`main.js`**: `document.documentElement.classList.add('js')` 한 줄과, 필요한 Interaction이 있을 때의 자리만. 쓰이지 않는 함수를 미리 만들지 않는다.
7. **`.nojekyll`**: 빈 파일.
8. 모든 경로는 상대 경로. 값은 전부 `var(--token)`.
9. `node scripts/qa/capture.cjs --label scaffold`로 세 Viewport를 Render하고 스크린샷을 확인한다.

## Completion
- 세 Viewport Render 확인, 가로 Overflow 0, Console Error 0, 실패 Request 0, Root-absolute 경로 0.
- JS 비활성 Render에서도 골격과 제목이 보인다.
- `review-code` 기준 위반 0(특히 Raw 값, Inline Style, `@import`).

## Do Not
- Section 내부를 디자인하지 않는다. 문안을 지어내지 않는다.
- `docs/` 밖의 문서 내용(Config, State, Research)을 사이트에 넣지 않는다.
- Library, Icon Set, Web Font CDN을 추가하지 않는다.
