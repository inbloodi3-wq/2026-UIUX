# Frontend Code Rules

코드가 최종 산출물이다. HTML/CSS와 기초 JavaScript를 아는 사람이 읽고 고칠 수 있어야 한다. AI가 생성할 수 있다는 이유로 복잡도를 늘리지 않는다.

## Stack
- HTML5 · CSS3 · Vanilla JavaScript만 사용한다.
- React, Vue, Next.js, TypeScript, Tailwind, Sass, Bundler, Build Step, Package Manager, CSS/JS Framework 금지(도입은 Level 3).
- 외부 CDN Script, 외부 Font Host, Analytics, Embed 추가는 Level 3다.
- `docs/`의 파일은 Build 없이 그대로 배포된다. 생성물과 소스가 같다.

## 구조
```
docs/
  index.html
  css/tokens.css      값(Custom Property)만
  css/base.css        Reset, Element 기본, Typography
  css/layout.css      Page 골격, Container, Grid, Section 간격
  css/components.css  재사용 Component
  js/main.js
  assets/
  .nojekyll
```
- `docs/`는 SITE SCAFFOLD Stage에서 처음 만든다. 그 전에는 Production HTML/CSS/JS를 만들지 않는다.
- 이 구조가 시작점이다. Page가 실제로 추가될 때 그 HTML을 만들고, 한 Page에서만 쓰는 Style이 `components.css`를 흐릴 정도가 되면 그때 `css/pages/<page>.css`를 만든다. 미리 만들지 않는다.
- CSS 로드 순서는 tokens → base → layout → components → page다. 뒤 파일이 앞 파일의 값을 재정의하지 않는다.

## HTML
- Semantic Element를 우선한다: `header`, `nav`, `main`(Page당 1개), `section`(제목 포함), `article`, `footer`, `button`, `a`. 의미 없는 `div` 중첩을 줄인다.
- Heading은 `h1` 1개에서 시작해 단계를 건너뛰지 않는다.
- `<html lang>`, `<meta charset>`, `<meta name="viewport">`, `<title>`, `<meta name="description">`을 모든 Page에 둔다.
- 이미지는 `alt`(장식이면 `alt=""`), `width`/`height`를 갖는다. 첫 화면 밖 이미지는 `loading="lazy"`.
- 링크는 `a`, 동작은 `button`. Click Handler를 `div`에 달지 않는다.
- Inline `style` 속성과 Page 안의 큰 `<style>` Block을 쓰지 않는다.

## CSS
- 색·타입·간격·반경·그림자·Motion 값은 `tokens.css`의 Custom Property로만 정의하고, 다른 파일에서는 `var(--…)`로 참조한다. 다른 CSS 파일에 Raw Hex/px 값을 반복해 쓰지 않는다(`0`, `1px` Border, `100%` 같은 구조 값은 예외).
- Mobile-first로 작성하고 `min-width` Media Query로 확장한다. Breakpoint는 `config/project.yaml`의 `site.breakpoints`에 정한 것만 쓴다(Custom Property는 Media Query에 쓸 수 없으므로 이 값만 Config가 원본이다).
- Type과 간격은 `rem` 기반, 유동 크기는 `clamp()`를 쓴다. 고정 폭(px) Container로 Viewport를 가정하지 않는다. 단 `figma_implementation`에서 Design Definition(`implementation-spec.md`)이 단위 정책을 따로 정했으면 그것이 우선이다(Figma와 Render 크기가 달라지면 안 된다).
- Class 이름은 `.claude/rules/naming-convention.md`를 따른다. ID Selector와 `!important`로 Specificity를 올리지 않는다.
- 같은 선언 묶음이 3번 나오면 Component나 Utility로 합친다. 그 전에 추상화하지 않는다.
- `:focus-visible` Style을 제거하지 않는다. `prefers-reduced-motion`을 존중한다.

## Font
- Google Fonts `@import`를 쓰지 않는다. CSS `@import` 자체를 쓰지 않는다(`<link>`로 로드).
- 기본은 System Font Stack 또는 `docs/assets/fonts/`에 둔 Self-hosted `woff2` + `font-display: swap`이다. Self-hosted Font는 라이선스를 확인해 `assets/manifest.jsonl`에 기록한다.
- 외부 Font Host를 `<link>`로 쓰려면 Level 3 승인이 필요하다.

## JavaScript
- 최소한으로, 목적이 분명할 때만 쓴다. CSS로 되는 것(Hover, 단순 Transition, Sticky, Scroll Snap, `details`)은 CSS로 한다.
- **JavaScript가 꺼져 있어도 핵심 콘텐츠와 내비게이션은 읽고 쓸 수 있어야 한다.** JS는 Progressive Enhancement다(콘텐츠를 JS로 주입하지 않는다, JS 전제로 숨긴 콘텐츠는 `.js` Class가 있을 때만 숨긴다).
- `main.js` 하나에서 시작한다. `defer`로 로드한다. 예외: 첫 화면이 그려지기 전에 `<html>`에 상태 Class를 붙이는 한 줄짜리 Inline Script는 `<head>`에 둘 수 있다(그 밖의 Inline Script는 쓰지 않는다). 이 상태가 JavaScript 실패 시에도 내용을 가리지 않도록 CSS만으로 풀리는 장치를 함께 둔다. 파일이 길어져 역할이 섞일 때만 나눈다.
- Library 없이 표준 API를 쓴다. Class 상속, 자체 State 관리, Event Bus 같은 구조를 만들지 않는다.
- 새 Interaction을 넣기 전에 "이 동작이 무엇을 더 잘 전달하는가"에 한 줄로 답한다. 답이 없으면 넣지 않는다.

## 수정 방식
- 기존 파일은 **Edit로 필요한 부분만** 고친다. 파일 전체 Write는 새 파일을 만들 때만 쓴다.
- 요청 범위 밖의 Section·Page·공용 CSS를 함께 정리하지 않는다. 공용 값 변경이 필요하면 `tokens.css`에서 하고 영향 범위를 보고한다.
- 구현 후에는 `review-browser`로 세 Viewport를 Render해 확인한다.
