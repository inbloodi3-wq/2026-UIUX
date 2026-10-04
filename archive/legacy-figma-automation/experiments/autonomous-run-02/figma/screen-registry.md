# Screen Registry & Component Plan — AUTORUN_02

- 상태: **4화면 CREATED · QA_PASS** (2026-09-30 SUPERVISED_CONTINUOUS_PRODUCTION)
- Figma: file `4IjbcMoAkTyWkoacnVAmNe` · page `1716:2382` "자동화" · Same File Mode(`policy_only`, supervised)
- Working Root: **`AUTORUN_02_WORK` = `1915:1910`**
  - 위치·크기: x 2160, y 1685, 6060 × 14543 (가로 Auto Layout, 간격 240; Case Study 추가 후 실측)
  - 모든 기존 Frame(Reference 42, AUTORUN_01_WORK, 00_WRITE_TEST)과 겹치지 않음(실측)
- 우선순위: `figma_node_id` → `variant_id` → `frame_name`

## Screens (실측, 2026-09-30)
| variant_id | frame_name | figma_node_id | 크기 | 역할 | QA |
|---|---|---|---|---|---|
| `c-air-now.desktop` | AUTORUN_02_Desktop_AirNow | **1915:1911** | 1440 × 1605 | **Master** | PASS (Structural 1 + Micro Fix 1) |
| `c-air-forecast.desktop` | AUTORUN_02_Desktop_Forecast | **1917:1910** | 1440 × 1922 | Secondary 1 | PASS (1 Pass, 수정 없음) |
| `c-air-now.mobile` | AUTORUN_02_Mobile_AirNow | **1918:1910** | 390 × 1684 | Secondary 2 | PASS (Structural 1 + Micro Fix 1) — 판단 카드 + 3항목 하단 y=556 ≤ 844 |
| `c-air-forecast.mobile` | AUTORUN_02_Mobile_Forecast | **1919:1910** | 390 × 2270 | Secondary 3 | PASS (1 Pass, 수정 없음) |
| — | AUTORUN_02_CaseStudy | **1922:1910** | 1440 × 14543 | Case Study (8 섹션 + 출처) | PASS |

## Element IDs (주요 레이어 이름)
- now: `nav-gnb`, `loc-bar`, `verdict-card`, `pollutants`/`pollutant-row/{pm10|pm25|o3}`, `particle-count`/`particle-field/{kind} (n)`, `rule`, `forecast-mini`, `alert-line`, `links`, `footer-note`
- forecast: `title`, `forecast-matrix`/`matrix-row/{kind}`, `verdict-strip`, `guidance`, `causes`, `grade-criteria`, `disclosures`, `footer-note`
- mobile forecast: `forecast-days`/`forecast-day/{오늘|내일|모레}`, `guidance`, `causes`(오늘 펼침 + 3개 접힘), `grade-criteria`

## Component Plan (구현 결과)
Figma Component로 등록하지 않고 같은 이름의 Frame 패턴으로 구현했다. 컴포넌트화는 Case Study 이후 필요 시 진행한다.

| Component | 구현 | 상태(variant) | 사용 화면 |
|---|---|---|---|
| `grade-badge` | pill · 등급색 면 + 흰 글자 Bold | good / moderate / bad / verybad / **nodata(외곽선: “17시 발표 없음”·“발표 없음”)** | 전 화면 |
| `timestamp` | “측정 …” / “… 발표” 접두어 | measured / forecast | 전 화면 |
| `chip` | 외곽선 태그 | 측정값 / 예보 / 리디자인 콘셉트 | 전 화면 |
| `verdict-card` | “지금 가장 높은 등급” + Display(96/64) + 기준 항목 + 공식 문구 원문 + 측정 시각 | moderate 틴트 | now |
| `pollutant-row` | 아이콘 + 이름/코드 + 수치(IBM Plex Mono SemiBold) + 단위 + 배지 | pm10 / pm25 / o3 | now |
| `particle-field` | 고정 seed 지터 그리드, 개수 = 규칙값 | desktop 238 / mobile 106 | now |
| `icon/{kind}` | 채운 원(PM) / 고리(O3) | 등급색(측정) / 중립 ink2(예보) | 전 화면 |
| `forecast-matrix` | 3항목 × 3일 | desktop-grid / mobile-stack(day card) · mobile-now table | forecast, now |
| `verdict-strip` | 날짜별 가장 높은 등급 + “공식 통합지수 아님” | — | forecast |
| `guidance` | 행동요령 원문 + 적용 조건 + 민감군 정의 + 출처 | ‘보통’ | forecast |
| `cause-note` | 전국 원인 분석 원문 | desktop 4개 펼침 / mobile 1개 펼침 + 3개 접힘 | forecast |
| `grade-criteria` | 공식 예보 등급 구간 | desktop table / mobile 2×2 | forecast |
| `disclosure` | 제목 + “펼치기 +” | closed | forecast |
| `alert-line`, `links`, `footer-note` | — | — | now / 전 화면 |

## 토큰 사용
- 색: `visual-direction.md` 3장 값 그대로(fog, card, ink, ink2, line, grade 5종, moderate tint)
- 서체: Noto Sans KR(Regular/Medium/Bold/Black), IBM Plex Mono SemiBold(수치 전용). 가용성은 제작 전 `listAvailableFontsAsync`로 확인
- 크기: 11(모바일 캡션)·12·14·16·18·20·24·28·32·40 + Display 96/64
- 간격: 4/6/8/10/12/14/16/20/24/28/32/40/64/96 [P] — Foundation Grammar와의 수치 대조는 하지 않았다(미검증). 6/10/14는 모바일 밀도 조정용 예외값
