# Naming Convention

## 파일
- 모든 파일·디렉터리: 소문자 kebab-case, ASCII만(URL이 되기 때문이다). 예) `project-detail.html`, `hero-portrait.webp`
- Page: `docs/<page-id>.html`. 첫 Page는 `index.html`.
- Page 전용 CSS(필요할 때만): `docs/css/pages/<page-id>.css`
- 이미지: `docs/assets/<용도>-<내용>.<ext>`. Asset ID는 `assets/manifest.jsonl`과 일치시킨다.

## Page / Section ID
- Page ID: `ia/sitemap.md`에 등록한 kebab-case 이름. 예) `index`, `about`, `project-<slug>`
- Section ID: `<section>` 요소의 `id`이자 내비게이션 Anchor. 예) `id="work"`, `id="contact"`
- 문서에서 특정 위치를 가리킬 때는 `{page-id}#{section-id}` 형식을 쓴다. 예) `index#work`
- State와 QA 보고는 이 ID로 대상을 특정한다. 등록되지 않은 Page/Section을 임의로 만들지 않는다.

## CSS Class
- kebab-case. Component는 `block`, 내부 요소는 `block__element`, 변형은 `block--modifier`.
  예) `.project-card`, `.project-card__title`, `.project-card--featured`
- Layout: `l-` Prefix. 예) `.l-container`, `.l-grid`
- Utility(꼭 필요할 때만): `u-` Prefix. 예) `.u-visually-hidden`
- 상태: `is-` Prefix, JavaScript가 토글한다. 예) `.is-open`, `.is-active`
- JavaScript Hook: `data-` 속성을 쓴다(`data-nav-toggle`). Style용 Class를 JS Selector로 쓰지 않는다.
- 모양이 아니라 역할로 이름 짓는다(`.btn-primary` O, `.btn-blue` X).

## Token (CSS Custom Property)
`--{category}-{role}[-{variant}]` 형식. 실제 값과 전체 목록은 `docs/css/tokens.css`가 원본이다.
- 색: `--color-bg`, `--color-surface`, `--color-text`, `--color-text-muted`, `--color-accent`
- Type: `--font-body`, `--font-display`, `--text-sm`, `--text-base`, `--text-xl`, `--leading-body`
- 간격: `--space-1` … (스케일 단계)
- 그 외: `--radius-*`, `--shadow-*`, `--duration-*`, `--ease-*`, `--container-*`

## Markdown / 문서
- Markdown 파일: kebab-case.
- Rule/Skill/Agent 문서: 기능명 기준 kebab-case.
