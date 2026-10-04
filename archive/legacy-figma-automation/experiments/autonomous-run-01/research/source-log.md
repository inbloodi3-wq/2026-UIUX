# Research Source Log — AUTORUN_01 (2026-09-30)

모든 출처는 공개 페이지이며, 텍스트와 구조만 관찰했다. 이미지는 저장하거나 사용하지 않았다.
- 로그인, 예약, 폼 제출, 결제 없음
- 도메인은 `legal/source-policy.yaml`에 `reference_only`로 먼저 등록한 뒤 사용함

## 1. 대상 서비스 — 서울시립미술관 SeMA (sema.seoul.go.kr)

| 출처 | 도구 | 용도 |
|---|---|---|
| https://sema.seoul.go.kr/ | WebFetch | 홈 구조 |
| https://sema.seoul.go.kr/kr/whatson/landing?whatsonMenuDivList=EX&whenType=FROM_TODAY | WebFetch · Playwright 스냅샷 · curl | 목록 감사 |
| https://sema.seoul.go.kr/kr/whatson/exhibition/detail?exNo=1553791 | WebFetch | 상세 감사 |
| https://sema.seoul.go.kr/kr/sema/landing | WebFetch | MI·미션·분관 정보 |

**Playwright 스냅샷 (접근성 트리 텍스트)**
- 도구: `browser_navigate` / `browser_snapshot` / `browser_resize`만 사용. 클릭과 입력은 하지 않음.
- 저장 파일(`.playwright-mcp/`, 이미지 없음):
  - `page-2026-09-30T09-38-07-923Z.yml`: Desktop 목록
  - `sema-landing-390.yml`: 390×844 목록

**curl**
- 목록 HTML의 상세 이동 스크립트와 `data-idx`를 확인함.
- 임시 파일은 확인 후 삭제함.

## 2. 비교 후보

| 출처 | 도구 |
|---|---|
| https://www.mmca.go.kr/ | WebFetch |
| https://www.mmca.go.kr/exhibitions/progressList.do | WebFetch |
| https://www.leeum.org/ → https://www.leeumhoam.org/ | WebFetch |

## 3. Reference

**Product UX**
- https://www.tate.org.uk/whats-on
- https://whitney.org/exhibitions

**Art Direction**
- https://whitney.org/about/new-identity
- https://www.stedelijk.nl/en

**검색 결과 메타데이터만 사용** (본문은 가져오지 않음)
- dezeen, jetset.nl, itsnicethat 등 Whitney 아이덴티티 기사
- SeMA MI 관련 검색 결과

## 4. 신뢰도 메모
- WebFetch 결과는 요약 모델을 거친 텍스트다. 원문과 대조하지 않은 수치는 `current-site-audit.md`에 [W]로 표시했다.
- 시각 속성(색, 서체)은 텍스트 조회로는 검증할 수 없다. 이 부분은 해석으로 기록하지 않았다.
