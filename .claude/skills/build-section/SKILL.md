---
name: build-section
description: ia/sitemap.md에 등록된 Section 하나(또는 새 Page 하나의 골격)를 docs/에 구현하고 Desktop·Tablet·Mobile을 함께 Render해 확인할 때 사용한다.
---

# Build Section

한 번에 **Section 하나**다. 세 Viewport를 같은 작업 안에서 함께 구현한다.

## Required Inputs
- 대상 `Page#Section`(`automation/pipeline-state.json`의 `checkpoint`, `ia/sitemap.md`에 등록되어 있어야 한다)
- `project.mode`, 콘텐츠 원본(figma mode: Figma Text / autonomous mode: `content/`), Design Definition(figma mode: `design-source/implementation-spec.md` + 해당 Figma Node / autonomous mode: `design-system/visual-language.md`), `docs/css/tokens.css`

## Before Writing
1. `ia/sitemap.md`에서 Section의 목적, 콘텐츠 출처, 우선순위, Viewport별 비고(figma mode: Viewport별 Figma Node ID)를 읽는다.
2. Design Definition을 확인한다.
   - figma mode: Spec의 해당 Component·Layout 규칙을 읽고, 그 Section의 Figma Node를 `get_screenshot`(필요 시 `get_design_context`)으로 본다. 디자인이 있는 Viewport는 그대로 따르고, 없는 Viewport는 Spec의 Responsive Plan을 따른다.
   - autonomous mode: `visual-language.md`에서 이 Section의 Visual Role과 쓸 Expressive Device를 확인한다.
3. 기존 `docs/` 코드를 Grep해 재사용할 Class·Component·Token을 찾는다.
4. 세 Viewport의 구성을 먼저 정한다(각 한 줄): Mobile에서의 순서와 Stack, Tablet에서 달라지는 점, Desktop에서 달라지는 점.
5. 콘텐츠가 콘텐츠 원본에 없으면 구현하지 않고 Blocker로 보고한다.

## Procedure
1. **HTML**: 대상 `<section id>` 안만 Edit한다. Semantic Element, Heading 단계, 이미지 `alt`/`width`/`height`.
2. **CSS**: 재사용 가능한 것은 `components.css`, Page 골격에 속하는 것은 `layout.css`에 Edit로 추가한다. Mobile 기본 Style → `site.breakpoints`의 `min-width`로 Tablet, Desktop 확장. 값은 `var(--token)`만.
3. **Token이 부족하면** `design-tokens` Skill에 따라 `tokens.css`에 추가한다.
4. **이미지가 필요하면** `apply-approved-assets`를 따른다. 승인된 Asset이 없으면 그 요소를 비워 두고 Blocker로 남긴다(임시 이미지·외부 URL 금지).
5. **JavaScript**는 `ia/sitemap.md`의 Interaction에 정의된 경우에만, `interaction` Stage에서 넣는다. JS 없이도 이 Section의 콘텐츠가 읽혀야 한다.
6. **Render**: `node scripts/qa/capture.cjs --pages <page>.html --label <section>-pass<N>` 실행 후 세 Viewport의 `-full.png`를 Read로 열어 본다.
7. **Self-check**: `review-browser/checklist.md`의 Layout · Responsive · Visual(mode에 맞는 절) · Content 절. figma mode에서는 Render와 Figma Frame을 나란히 놓고 비교한다. FAIL이 있으면 고치고 다시 Render한다(Section당 최대 3 Pass).

## 새 Page를 추가할 때
`ia/sitemap.md`와 `config/project.yaml`의 `site.pages`에 등록된 Page만 만든다. `index.html`의 `<head>`와 Header/Footer 골격을 따르는 새 HTML 파일을 Write로 만들고(새 파일이므로 Write), 내부 링크는 상대 경로로 연결한다. 공통 Header/Footer를 바꾸면 모든 Page에 같은 변경을 Edit로 적용한다.

## Edit 규칙
- 기존 파일은 Edit로 부분 수정한다. Write로 다시 쓰지 않는다.
- 대상 Section 밖의 Markup과 다른 Section이 쓰는 Class의 동작을 바꾸지 않는다. 불가피하면 영향받는 Section도 Render해 확인하고 보고한다.

## Completion
- 세 Viewport에서 Render 확인(`render_checked: true`), 가로 Overflow 0, Console Error 0.
- Self-check FAIL 0.
- 변경 파일, 추가 Token, Pass 수, 남은 Blocker를 보고한다. 독립 검수는 `site-reviewer`가 한다.

## Do Not
- 여러 Section을 한 번에 만들지 않는다.
- Desktop만 만들고 Mobile/Tablet을 "나중에" 미루지 않는다.
- 문안, 수치, 프로젝트 정보를 지어내지 않는다.
- figma mode에서 디자인을 개선·정리·재해석하지 않는다. Figma와 다르게 해야 하면 Design Gap으로 보고한다.
- 오류가 없는데 4번째 Polish를 하지 않는다.
