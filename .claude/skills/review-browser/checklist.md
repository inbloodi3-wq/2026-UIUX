# Browser Review Checklist

기준 Viewport는 `config/project.yaml`의 `viewports`(Desktop · Tablet · Mobile)다. 모든 항목은 Render 결과로 판정한다. `[측정]`은 `report.json`에 값이 있고, 나머지는 스크린샷을 보고 판정한다.

## Layout (Foundation Safety — 값 일치가 아니라 무너짐 여부)
- [ ] [측정] 가로 Overflow가 없다(`horizontalOverflow: false`, 세 Viewport 모두)
- [ ] 잘린 텍스트, 의도하지 않은 겹침, 컨테이너 밖으로 나간 요소가 없다
- [ ] 정렬 기준선이 의도 없이 어긋난 요소가 없다(의도된 Off-grid는 `visual-language.md`에 근거가 있으면 PASS)
- [ ] 본문 가독성: 글자 크기, 줄 간격, 줄 길이(Text measure)가 읽기에 무리가 없다
- [ ] 정보 위계가 3단계 이상 구분되고 붕괴하지 않았다
- [ ] 콘텐츠 길이가 달라도 무너지지 않는다(고정 높이에 갇힌 텍스트 없음)

## Responsive
- [ ] Mobile이 Desktop의 축소판이 아니다(Reflow/Stack/Priority Reduction으로 재구성됨)
- [ ] Tablet이 방치되지 않았다(지나치게 넓은 Mobile Layout, 지나치게 좁은 Desktop Layout 아님)
- [ ] 세 Viewport에서 정보 우선순위가 `ia/sitemap.md`와 일치한다(Mobile 첫 화면에 P1 콘텐츠)
- [ ] 이미지가 Viewport마다 적절히 Crop·Scale된다(찌그러짐·과도한 여백 없음)
- [ ] Mobile에서 Touch Target이 누르기 충분하고 서로 붙어 있지 않다
- [ ] Breakpoint 경계 근처에서 Layout이 깨지지 않는다(의심되면 그 폭으로 추가 Render)

## Visual (Direction 일치)
- [ ] 첫 시선이 그 Section의 역할(`ia/`의 목적, `visual-language.md`의 Visual Role)로 간다
- [ ] Color·Typography·Spacing이 `visual-language.md`의 Direction과 일치한다
- [ ] 각 Image/Artwork가 "What must this visual prove?"에 답한다(답 없는 장식은 FAIL)
- [ ] 같은 Section 패턴이 의미 없이 반복되지 않는다
- [ ] Section 사이의 Rhythm이 일관된다(임의로 다른 간격 없음)

## Content
- [ ] Placeholder 문구, 임의 작성 문안, 깨진 문자가 없다
- [ ] 문안이 `content/`와 일치한다
- [ ] 같은 메시지가 3회 이상 반복되지 않는다
- [ ] 사용자가 제공하지 않은 개인정보, 내부 경로, Config/Automation 정보가 보이지 않는다

## Interaction (FULL QA)
- [ ] [측정] JavaScript 비활성 Render(`-nojs`)에서 핵심 콘텐츠와 내비게이션이 보인다(`textLength > 0`, 스크린샷 확인)
- [ ] `ia/sitemap.md`의 Interaction이 정의대로 동작한다
- [ ] Hover에만 의존하는 정보·기능이 없다(Touch에서 접근 가능)
- [ ] Motion이 `prefers-reduced-motion`에서 줄어든다
- [ ] 확인하지 못한 Interaction은 `UNVERIFIED`로 적었다

## Accessibility (FULL QA — Render로 보는 것)
- [ ] 본문과 배경의 대비가 WCAG AA 이상이다(의심되는 조합은 Token 값으로 계산)
- [ ] Keyboard Focus가 눈에 보인다(`:focus-visible` Style 존재, 제거되지 않음)
- [ ] 정보를 색만으로 전달하지 않는다
- [ ] [측정] `html lang`, `title`, `h1` 1개, `main` 1개, 이미지 `alt`가 있다
- [ ] 텍스트를 200% 확대한 것에 해당하는 좁은 폭에서도 읽을 수 있다(Mobile Render로 갈음)

## Performance (FULL QA)
- [ ] [측정] Console Error 0건, 실패 Request 0건, 깨진 이미지 0건
- [ ] [측정] Page 전송량과 Request 수가 `site.performance_budget` 안이다(`transferKB`, `requestCount`)
- [ ] [측정] 이미지에 `width`/`height`가 있다(Layout Shift 방지, `imagesWithoutSize` 비어 있음)
- [ ] 표시 크기에 비해 지나치게 큰 이미지가 없다
- [ ] Render를 막는 외부 리소스가 없다(외부 Font Host·CDN은 승인된 것만)

## Deploy Path (FULL QA · LIVE QA)
- [ ] [측정] Root-absolute 경로 0건(`rootAbsolutePaths` 비어 있음)
- [ ] Page 사이 내부 링크가 Base Path 아래에서 동작한다(실패 Request 0건)
- [ ] LIVE QA: 배포 URL에서 404·Console Error 0건, 로컬 Render와 같은 결과

## Scope / Pass Limit
- [ ] 요청 범위 밖의 Page/Section이 바뀌지 않았다(`git diff --stat`으로 확인)
- [ ] 이 Section의 Pass 수가 `max_polish_passes`(기본 3)를 넘지 않았다 — 실제 FAIL이 없으면 추가 Pass를 요구하지 않는다
