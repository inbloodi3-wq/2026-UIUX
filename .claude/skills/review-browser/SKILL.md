---
name: review-browser
description: docs/의 Page/Section을 로컬 서버 + Playwright로 Desktop·Tablet·Mobile에서 Render해 Layout·Responsive·Interaction·Accessibility·Performance를 검수하고 PASS/REVIEW/FAIL을 판정할 때 사용한다.
---

# Review Browser

Local Static Server → Playwright Render → 세 Viewport 스크린샷 → Visual / Responsive / Interaction QA → 판정. Render 없이 PASS 처리하지 않는다.

## Required Inputs
- 검수 범위: 특정 `Page#Section`(Section Loop) 또는 전체(FULL QA) 또는 배포 URL(LIVE QA)
- `config/project.yaml`(`viewports`, `primary_user_tasks`, `ux_requirements`, `site.performance_budget`)
- `ia/sitemap.md`, `design-system/visual-language.md`

## Tool
```
node scripts/qa/capture.cjs --check                      # 도구 동작 확인
node scripts/qa/capture.cjs --pages index.html --label <이름>
node scripts/qa/capture.cjs                              # 모든 Page (FULL QA)
node scripts/qa/capture.cjs --url <배포 URL> --label live  # LIVE QA
node scripts/qa/serve.cjs                                # 수동 확인용 서버(Base Path 포함)
```
- 이미 설치된 Playwright와 Chrome을 찾아 쓴다. 종료 코드 2(`BLOCKER(tool)`)면 **아무것도 설치하지 말고** 판정을 `UNVERIFIED`로 두고 Level 3 Blocker로 보고한다.
- 서버는 `docs/`를 배포와 같은 Base Path 아래에서 서빙한다. Root-absolute 경로는 로컬에서도 404가 된다.
- 결과: `qa/screenshots/<label>/`에 Viewport별 `-fold.png`(첫 화면), `-full.png`(전체), `-nojs-full.png`(JS 비활성), `report.json`.

## Procedure
1. Script를 실행한다. 종료 코드와 출력의 측정 문제를 기록한다.
2. **스크린샷을 Read로 직접 연다.** Section 검수면 그 Section이 보이는 `-full.png`를 세 Viewport 모두, FULL QA면 모든 Page × 세 Viewport와 `-nojs`를 본다. Script의 `ok`만으로 PASS 판정하지 않는다(측정은 Overflow·Error만 잡는다).
3. `checklist.md`의 해당 절을 검사한다.
   - Section Loop: Layout · Responsive · Visual · Content
   - FULL QA: 전 항목(Interaction · Accessibility · Performance 포함)
   - LIVE QA: Layout · 링크/리소스 · Base Path
4. Script가 볼 수 없는 Interaction(Keyboard 이동, 메뉴 열기, Focus 표시)은 필요한 경우에만 임시 Script를 Scratchpad에 작성해 확인하거나, 확인하지 못했으면 `UNVERIFIED`로 적는다. 확인하지 않은 것을 PASS로 쓰지 않는다.
5. 판정을 보고한다.

## Reporting
```
Scope: <Page#Section | full | live>   Label: <qa/screenshots/…>
Verdict: PASS | REVIEW | FAIL | UNVERIFIED
Issues:
- [FAIL|REVIEW] Page#Section @ viewport — 관찰 사실(측정값/스크린샷 근거) — 원인(파일:위치) — Level 1/2/3 — 권장 Fix
Unverified: <확인하지 못한 항목과 이유>
```
- 검증된 문제만 적는다. 취향 의견이나 "더 좋아질 수 있다"는 Issue가 아니다.
- FULL QA 결과는 `qa/full-qa-report.md`로 남길 수 있도록 같은 형식으로 반환한다(이 Skill은 `docs/`를 수정하지 않는다).
