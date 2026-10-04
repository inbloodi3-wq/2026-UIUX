# Visual Direction — AUTORUN_01 · SeMA

- status: **SELECTED** (Visual Director 자율 결정, 2026-09-30)
- mode: AUTONOMOUS
- 전략 분기 없음 — 사용자 질문 0회
- 연결 문서:
  - `artwork-system.md` · `design-tokens.md` · `ui-application-plan.md`
  - `../references/reference-analysis.md` · `foundation-grammar.md`

## 1. Research Validation

| 구분 | 내용 |
|---|---|
| **VERIFIED FACT** | MI: "S에 연결, 변화, 유연함의 가치를 담아" · 미션: "사람과 공간을 잇고…" · 분관 8곳 (`/kr/sema/landing`) |
| **VERIFIED FACT** | 현행 웹의 서체는 Pretendard. CSS의 `font-family` 선언에서 확인함 |
| **VERIFIED FACT** | 현행 웹 CSS의 색상값은 대부분 무채색(#000/#fff/#919191/#999 등). 브랜드 유채색 토큰은 CSS에서 확인되지 않음 |
| **VERIFIED FACT** | 분관 코드별 클래스(`bgclr_bon/nam/nan/buk/back/cang/bung`)가 스크립트에 존재함 — 분관 구분 개념은 이미 사이트에 있음 |
| **UNVERIFIED** | 위 클래스의 실제 색상값 — CSS 3개 파일에서 정의를 찾지 못함 |
| **UNVERIFIED** | 공식 브랜드 컬러와 MI 가이드라인 — 공개 문서 미확인 |
| **UNVERIFIED** | 2022 통합 MI 정책 — 검색 요약만 있음 |
| **DESIGN INTERPRETATION** | MI의 "연결"은 8개 분관 네트워크를 탐색하는 UX 문제(P2)와 직접 대응함 |
| **HYPOTHESIS** | 대상 사용자: 주말 관람 계획 성인, 가족 관람객. 인터뷰·통계 없음 |

→ 공식 브랜드 컬러가 확인되지 않았으므로, 이번 컬러 시스템은 **리디자인 제안 팔레트**다. SeMA의 공식 컬러라고 주장하지 않는다.

## 2. Portfolio Gap
| 프로젝트 | 특징 |
|---|---|
| AIDORA | Quiet Luxury · Minimal · Neutral |
| TJ MEDIA | Search-first · Photography-led · Clean Editorial |
| **SeMA 목표** | 강한 Color System · 일관된 Graphic Motif · 실험적 Typography · 비대칭 Composition · Artwork. 단, 목록 비교의 명료성(UX Clarity)을 희생하지 않는다 |

## 3. Direction Candidates
평가 단계: ◎ 높음 · ○ 보통 · △ 낮음

| 기준 | **A. 잇는 선 (Line of S)** | B. 겹화살괄호 에디토리얼 (《 》 Poster) | C. 분관 글리프 시스템 (Venue Glyphs) |
|---|---|---|---|
| Concept | MI의 "S = 연결"을 한 줄의 연속 선으로 만든다. 선이 8개 분관을 정거장처럼 잇고, 필터·헤더·상세를 관통하는 구조가 된다 | 한국 전시 표기인 《 》를 초대형 타이포 프레임으로 써서 포스터형 에디토리얼을 만든다 | MIT Media Lab식으로 공통 그리드에서 분관별 글리프 8개를 생성한다 |
| Brand Fit | ◎ MI 개념[F]에서 직접 도출 | ○ 한국 전시 관습에 근거하지만 MI와는 무관 | ○ 네트워크 개념과는 맞지만, 분관별 새 식별자를 만들어 **기관 MI 체계를 변경**하게 됨 |
| UX Fit | ◎ 모티프 자체가 분관 필터 UI(정거장)라서 P2를 해결함 | △ 대형 타이포 때문에 목록 밀도가 떨어져 P3가 악화됨 | ◎ 분관 식별이 빠름 |
| Portfolio Differentiation | ◎ 강한 색 + 그래픽 모티프 + 비대칭 | ◎ 실험적 타이포 | ○ 기하 글리프 — 모노톤 시스템이면 차별화가 약함 |
| Visual Distinctiveness | ◎ | ◎ | ○ |
| Feasibility (Figma) | ◎ 직선과 90° 호로 구성 → 벡터와 Auto Layout으로 제작 가능 | ◎ | ○ 글리프 8종 설계 부담 |
| Responsive | ◎ 모바일에서 가로 스크롤 정거장 바로 전환 | △ 모바일에서 초대형 타이포 한계 | ◎ |
| **판정** | **선택** | 보조 장치로 흡수 | 기각 |

### 선택: A. 잇는 선 (Line of S)
- B의 《 》 초대형 타이포는 **상세 Hero와 목록 제목의 보조 장치**로 흡수한다.
- C의 "한 규칙 → 하위 식별자" 원리는 **새 로고 없이 분관 컬러 코딩**으로만 반영한다.
- A와 C는 브랜드 정체성 변경 여부에서 차이가 난다. C는 MI를 바꾸는 쪽이라 **Level 3 질문 대상이 되기 전에 기각**했다. A는 기존 MI 개념의 해석 안에 머물므로 사용자에게 묻지 않았다.

## 4. Concept Statement
> **"한 줄의 선이 서울의 여덟 미술관을 잇는다."**
> 선은 정체성(S)이자 길찾기 도구다. 사용자는 선을 따라 분관을 고르고, 전시를 비교하고, 도착할 곳(관람 정보)에 이른다.

### Expressive Devices
| 장치 | 무엇을 증명하는가 |
|---|---|
| **The Line** — 연속 선 + 분관 정거장 | 분관들이 하나의 미술관으로 이어져 있음. 지금 선택한 분관이 어디인지 |
| **Venue Color** — 8색 면 | 이 전시가 어느 분관의 것인지. 색만으로 전달하지 않고 분관명과 항상 함께 쓴다 |
| **《 》 Display** | 이것이 전시 제목이라는 한국 전시 문법. 제목을 이미지처럼 크게 보여 줌 |

## 5. Expression Profile (`visual_expression` 확정값)

| 항목 | 값 | 근거 |
|---|---|---|
| style_bias | expressive | Portfolio Gap과 MI "변화·유연함" |
| color_intensity | high | 분관 8색. 단 목록 본문은 Paper·Ink로 가독성 유지 |
| artwork_intensity | medium | 실제 작품 이미지는 권리 제한으로 쓰지 않음 → 생성 커버 아트워크. 과도한 장식 금지 |
| composition_experimentation | medium | Hero·상세는 비대칭, 목록은 규율 있는 그리드(UX Clarity 우선) |
| typography_expressiveness | high | Display 크기와 Weight 900/400 대비, 《 》 장치 |
| imagery_dominance | medium | 이미지 영역은 유지하되 선과 색이 정체성을 운반 |
| motion_intensity | low | 이번 Scope는 정적 화면. 선이 그려지는 모션은 제안으로만 남김 |

## 6. Self Review (Visual Director + Design Reviewer, 2026-09-30)

- Pass 1에서 FAIL 1건을 발견했고, 수정 1회로 해결함.
- 2회차 수정은 필요 없었음.

| # | 항목 | 결과 | 근거 |
|---|---|---|---|
| A | AIDORA/TJ와 차별화 | PASS | 무채 미니멀·사진 주도 대신 8색 분관 시스템, Line 모티프, radius 0, 초대형 《 》 |
| B | SeMA 서비스 특성과의 연결 | PASS | MI "S = 연결"[F]과 8분관[F]에서 모티프를 도출. Line이 곧 분관 필터 |
| C | 목록 비교 용이성 | PASS | 4열 + 메타 1줄 + 상태 라벨 + 정렬 + List 전환. 목록 본문에 Line 금지 |
| D | 강한 컬러가 탐색을 방해하지 않는가 | **FAIL → FIX → PASS** | accent/status-new의 vermilion이 서소문본관 색과 충돌 → 유채색 accent 제거(`design-tokens.md` Fix #1). 분관색은 면 전용이고 항상 분관명과 함께 씀 |
| E | Artwork 의미 | PASS | Line = 연결·길찾기, Venue Color = 분관 식별, 《 》 = 전시 제목 문법. 장식 모티프 추가 금지 |
| F | Desktop/Mobile 구현 가능성 | PASS (조건부) | 직선 + 90° 호 구성으로 벡터 제작 가능. 조건: Noto Sans KR 900 가용성을 STEP 07 시작 시 확인 |
| G | Foundation Grammar를 템플릿으로 복제하지 않았는가 | PASS | 비율만 환산(margin 6.7%). Slide 구성(좌우 분할, 3카드)을 재사용하지 않음. Δ 이탈값은 모두 사유를 기록 |
