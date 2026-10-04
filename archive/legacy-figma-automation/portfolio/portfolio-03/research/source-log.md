# Source Log — PORTFOLIO_03

모든 조사는 공개 페이지 GET + 접근성 스냅샷 + 일부 화면 캡처(리서치 전용)로 했다.
- 클릭·입력·로그인 없음. 쿠키·국가 팝업도 조작하지 않았다.
- 접근 차단(403)은 우회하지 않았다.
- 페이지가 자동 표시한 접속 지역 문구(사용자 위치 추정)는 기록하지 않는다.

| # | 일시(2026-10-01) | URL | 결과 | 파일(.playwright-mcp/) |
|---|---|---|---|---|
| R1 | 03:21 | https://www.hoka.com/en/us/ | **HTTP 403** — 자동 접근 차단 | page-2026-10-01T03-21-04-120Z.yml |
| R2 | 03:21 | https://www.salomon.com/en-us | 홈 접근 | page-…T03-21-18-212Z.yml, p03-research-salomon-home-1440.png |
| R3 | 03:42 | https://www.salomon.com/en-us/c/men/shoes/trail-running-shoes | 컬렉션 접근 | page-…T03-42-48-915Z.yml, p03-research-salomon-plp-1440.png |
| R4 | 03:46 | https://www.salomon.com/en-us/product/genesis-2-li9180/L49309100 | **HTTP 403** — 상품 상세 차단 | page-…T03-46-17-102Z.yml |
| R5 | 03:28 | https://www.asics.com/us/en-us/ | 홈 접근 | page-…T03-28-35-647Z.yml |
| R6 | 03:46 | https://www.asics.com/us/en-us/mens-running-shoes/c/aa10201000/ | 컬렉션 접근(1440) | page-…T03-46-29-928Z.yml |
| R7 | 03:47 | …/superblast-3/p/ANA_1013A177-101.html | PDP 접근 | page-…T03-47-39-471Z.yml |
| R8 | 03:50 | …/novablast-6/p/ANA_1011C243-001.html | PDP | page-…T03-50-13-233Z.yml |
| R9 | 03:50 | …/gel-nimbus-28/p/ANA_1011C127-102.html | PDP | page-…T03-50-18-508Z.yml |
| R10 | 03:51 | …/superblast-3/… (390×844) | Mobile PDP 위치 측정 | page-…T03-51-42-244Z.yml |
| R11 | 03:52 | …/mens-running-shoes/… (390×844) | Mobile 컬렉션 | page-…T03-52-01-831Z.yml, p03-research-asics-plp-390.png |
| R12 | 03:52 | …/gel-kayano-33/p/ANA_1011C167-101.html | PDP | page-…T03-52-53-059Z.yml |
| R13 | 03:52 | …/gt-2000-15/p/ANA_1011C235-001.html | PDP | page-…T03-52-56-092Z.yml |

| R14 | 03:56 | …/megablast/p/ANA_1013A170-101.html | PDP | page-…T03-56-54-594Z.yml |
| R15 | 03:56 | …/sonicblast-2/p/ANA_1011C244-100.html | PDP | page-…T03-56-57-384Z.yml |
| R16 | 03:59–04:06 | …/mens-running-shoes/… | Goal·Cushion·Pronation 필터 **펼침 클릭 3회**(승인된 클릭, 선택·입력 없음) | page-…T04-06-40-941Z.yml |
| R17 | 04:17 | …/metaspeed-sky-tokyo/… | PDP (FASTER 레인 보강, 읽기만) | page-…T04-17-27-158Z.yml |
| R18 | 04:17 | …/metaspeed-ray/… | PDP (FASTER 레인 보강, 읽기만) | page-…T04-17-31-237Z.yml |

## 캡처 이미지의 지위
- `p03-research-*.png`는 **문제 분석용 리서치 캡처(Asset A)**다.
- 최종 디자인과 Case Study의 디자인 요소로 쓰지 않는다.
- Case Study에 AS-IS로 보여 줄지는 다음 단계에서 정한다. 쓰게 되면 출처·날짜를 붙이고 작게 인용하는 범위로 제한한다.
