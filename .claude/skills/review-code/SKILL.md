---
name: review-code
description: docs/의 HTML·CSS·JavaScript 소스를 읽어 Semantic HTML, CSS 구조, 중복, 유지보수성, JavaScript 복잡도, 접근성 Markup, 성능을 검수하고 PASS/REVIEW/FAIL을 판정할 때 사용한다.
---

# Review Code

Render가 아니라 **소스**를 본다. 기준은 `.claude/rules/frontend-code.md`와 `naming-convention.md`다. "HTML/CSS와 기초 JavaScript를 아는 사람이 읽고 고칠 수 있는가"가 최종 질문이다.

## Required Inputs
- 검수 범위: 변경된 파일(`git diff`) 또는 `docs/` 전체(FULL QA)
- `docs/css/tokens.css`, `config/project.yaml`(`site.breakpoints`, `site.js_policy`)

## Checklist

### Stack
- [ ] Framework, Library, Build 산출물, Package 파일(`package.json`, `node_modules`)이 `docs/`에 없다
- [ ] 외부 Origin의 `<script>`, `<link>`, Font, 이미지가 승인된 것뿐이다
- [ ] CSS `@import`가 없다(Google Fonts `@import` 포함)

### HTML
- [ ] Semantic Element를 쓴다(`header`/`nav`/`main`/`section`/`article`/`footer`). `main`은 Page당 1개
- [ ] Heading이 `h1` 1개에서 시작해 단계를 건너뛰지 않는다. `section`에 제목이 있다
- [ ] 링크는 `a`, 동작은 `button`이다. Click Handler가 달린 `div`/`span`이 없다
- [ ] 모든 Page에 `lang`, `charset`, `viewport`, `title`, `description`이 있다
- [ ] 이미지에 `alt`, `width`, `height`가 있다. 장식 이미지는 `alt=""`
- [ ] Form Control에 Label이, Icon만 있는 Button에 접근 가능한 이름이 있다
- [ ] Inline `style` 속성과 Page 안의 `<style>` Block이 없다
- [ ] 내부 경로가 전부 상대 경로다

### CSS
- [ ] 값이 `var(--token)`으로 참조된다. `tokens.css` 밖에 Raw Hex/px 색·타입·간격 값이 없다(Grep: `#[0-9a-fA-F]{3,8}`, `\d+px`를 `tokens.css` 외 파일에서 검색해 구조 값 예외만 남는지 확인)
- [ ] `tokens.css`에는 Custom Property만 있다. 쓰이지 않는 Token이 없다
- [ ] 파일 역할이 지켜진다(base / layout / components / page). 뒤 파일이 앞 파일을 덮어쓰지 않는다
- [ ] Mobile-first다(`min-width`). Media Query 값이 `site.breakpoints`와 일치한다
- [ ] 같은 선언 묶음이 3번 이상 반복되지 않는다. 쓰이지 않는 Selector가 없다
- [ ] Class 이름이 Naming Convention을 따른다. ID Selector, `!important`, 깊은 Selector 중첩이 없다
- [ ] `:focus-visible`이 제거되지 않았다. Animation이 `prefers-reduced-motion`을 존중한다
- [ ] 고정 폭/고정 높이로 콘텐츠를 가두지 않는다

### JavaScript
- [ ] `ia/sitemap.md`에 정의된 Interaction에만 쓰인다. CSS로 가능한 것을 JS로 하지 않았다
- [ ] 콘텐츠를 JS로 주입하지 않는다. JS가 없어도 콘텐츠·내비게이션이 동작한다
- [ ] `defer`로 로드한다. Inline Event Handler(`onclick=`)가 없다
- [ ] 초보자가 따라갈 수 있는 구조다: 짧은 함수, 분명한 이름, Class 상속·자체 State 관리·Event Bus 같은 구조 없음
- [ ] JS Hook은 `data-` 속성, 상태는 `is-` Class다
- [ ] 쓰이지 않는 코드, 남은 `console.log`, 주석 처리된 코드 Block이 없다
- [ ] 분량이 `site.js_policy`의 기준을 넘지 않는다(넘으면 이유가 있는지 확인)

### Safety
- [ ] Secret, Token, 로컬 절대 경로, Config/State/Automation 내용이 `docs/`에 없다
- [ ] 사용자가 제공하지 않은 개인정보가 없다

## Procedure
1. 범위의 파일을 Read한다. 위 Grep 검사를 실행한다.
2. 항목별로 판정한다. 위반은 파일과 줄을 특정한다.
3. 보고한다.

## Reporting
```
Scope: <files | full>
Verdict: PASS | REVIEW | FAIL
Issues:
- [FAIL|REVIEW] 파일:줄 — 위반 항목 — 관찰한 코드 — Level 1/2/3 — 권장 Fix
```
- FAIL은 규칙 위반과 실제 결함에만 쓴다. 동작하고 읽기 쉬운 코드에 취향 차이로 REVIEW를 달지 않는다.
- 이 Skill은 파일을 수정하지 않는다.
