# Production Plan — PORTFOLIO_03 (ASICS · PACE LANES)

## 1. E-commerce Flow
**HOME → GOAL LANE → COLLECTION → (COMPARE) → PRODUCT → COLORWAY → SIZE → ADD TO CART**

| 단계 | 실제 선택 기준 [F] | 리디자인 |
|---|---|---|
| Goal | 필터 Goal: Further (211) · Faster (28). PDP 필드 Goal | 홈 첫 선택지를 레인 2개로(상품 수 표시) |
| Collection | 필터 10개, 342개 상품. Cushion: Regular · Extra · Maximum / Pronation: Neutral · Overpronate · Underpronate | 모델당 카드 1장 + 스펙 칩 + 컬러 수. 필터는 러닝 기준(Goal · Cushion · Pronation · Surface · Size)을 앞에, 나머지는 "More" |
| 어휘 | 상세 "Cushion High" / "Support Neutral, Stability" ↔ 필터 "Regular/Extra/Maximum" / "Pronation" | 시안: 필터는 필터 어휘, 카드·상세는 상세 값을 **원문 그대로** 쓴다(대응 관계를 만들지 않음). Case Study에서 "어휘 통일 필요"를 미해결 데이터 과제로 제시한다 |
| Compare | (원 사이트에 없음) | 최대 3개 트레이 → 비교 화면(실제 스펙 5필드 + 가격 + 컬러 수) |
| Product | Cushion · Drop · Weight · Support · Goal, 기술 4개 | 스펙 밴드를 모델명 바로 아래로 |
| Colorway | 이름 있는 컬러 6–19개 | 선택 컬러웨이 두 색이 상품 스테이지 배경이 됨(B 방향 흡수) |
| Size | 품절 표시, Width | 품절은 사선 + "Sold out" 텍스트, Width 토글 |
| CTA | 선택 전 "Select Size" | 선택 전 "Select a size", 선택 후 "Add to Cart — US 9". 모바일은 하단 고정 |

검증되지 않은 스펙은 만들지 않는다. 화면에는 수집한 5개 모델 값만 쓴다(`research/current-site-audit.md` 2장).

## 2. Screen Scope (6)
| # | 화면 | 목적 | 데이터 |
|---|---|---|---|
| D1 | **Home / Campaign** 1440 | 브랜드 표현 + Goal 진입(P1) | 레인 2개, 대표 모델 각 레인 2–3개 |
| D2 | **Collection** 1440 | 모델 단위 탐색 · 스펙 칩 · 비교 트레이(P1 · P2) | 5개 모델 |
| D3 | **Compare** 1440 | 3개 모델 실제 스펙 비교(P1) | NOVABLAST 6 · GEL-NIMBUS 28 · GEL-KAYANO 33 |
| D4 | **Product Detail** 1440 | 컬러웨이 · 사이즈 · CTA · 기술 스토리 | SUPERBLAST 3 |
| M5 | **Collection** 390 | 첫 화면에 상품, 텍스트 모델 칩, 필터 시트(P3) | 5개 모델 |
| M6 | **Product Detail** 390 | 스펙 상단 · 고정 구매 바(P3) | SUPERBLAST 3 |

별도 Technology/Story 화면은 만들지 않는다. 기술 스토리는 D4 안의 한 섹션으로 압축한다(화면 수보다 UX 목적의 차이를 우선).

## 3. Responsive Strategy (WHY 포함)
| 요소 | Desktop | Mobile | 이유 |
|---|---|---|---|
| Hero | 사선 레인 2개 나란히 + 기울어진 실루엣 | 레인을 위아래로 쌓고, 실루엣은 레인 끝에서 크롭 | 390 폭에서 2열 레인은 텍스트를 읽기 어려움 |
| Navigation | GNB 6개 + 검색 | 햄버거 + Goal 토글 | 핵심 진입(Goal)은 접지 않음 |
| Discovery | 3열 모델 카드 + 좌측 필터 | 1열 카드(스펙 칩 2줄), 필터는 바텀 시트 | P3 — 첫 화면에 상품명·가격 |
| Model chips | 이미지 칩 | 텍스트 칩 가로 스크롤 | 원 사이트는 사진 칩이 첫 화면을 차지함 [F] |
| Colorway | 스와치 + 이름 + 스테이지 색 변경 | 스와치 가로 스크롤 + 선택 이름 | 19개 컬러 수용 |
| Size | 그리드 6열 | 그리드 5열 + Width 토글 | 터치 영역 |
| CTA | 정보 패널 안 | 사이즈 선택 후 하단 고정 바 | P3 — 원 사이트 y=1206·고정 아님 [F] |
| Image priority | 상품 스테이지 크게 | 상품 → 스펙 밴드 → 컬러 → 사이즈 | 결정 정보 먼저 |

## 4. Asset Strategy
| 분류 | 내용 | 사용 |
|---|---|---|
| A. Research screenshots | `.playwright-mcp/p03-research-*.png` 3장 + 접근성 스냅샷 | 문제 분석 전용. 최종 디자인에 쓰지 않음. Case Study에 쓰면 출처·날짜 표기 |
| B. 권리 확인 Product Asset | **없음** — ASICS 상품·캠페인 사진은 사용 권리 미확인 | 사용 안 함(Fail Closed) |
| C. 자체 제작 Original Visual | Figma 벡터 측면 실루엣 + 컬러웨이 색 블록 + 레인 그래픽 | 사용. "Concept illustration — not actual ASICS product imagery" 표기 |

- AI 이미지 생성은 이번에 계획하지 않는다: 실제 모델처럼 보이는 이미지를 만들 위험이 있고, 권리 판단이 불명확하다.
- ASICS 로고·공식 캠페인 비주얼은 재현하지 않는다. 모든 화면과 Case Study에 **"Unofficial Personal Redesign"**을 표기한다.

## 5. Case Study Plan (9)
| # | 섹션 | 답하는 질문 |
|---|---|---|
| 01 | Project Overview | 무엇을, 왜(브랜드 표현 + 탐색 UX) |
| 02 | Why ASICS | WHY THIS BRAND — 후보 3곳, 접근성·근거 |
| 03 | Current Experience | WHY THESE PROBLEMS — P1–P3 사실 → 가설 → 기회 |
| 04 | UX Strategy | WHY THIS UX — Goal → 레인 → 비교 → 구매 |
| 05 | Visual Direction | WHY THIS DIRECTION — A/B/C 평가 |
| 06 | Design System & Product Artwork | WHY THESE COLORS / TYPOGRAPHY / PRODUCT PRESENTATION |
| 07 | Desktop Experience | D1–D4 |
| 08 | Mobile Experience | WHY DESKTOP / MOBILE DIFFER — M5 · M6 |
| 09 | Outcome & Reflection | 한계(사용자 테스트 없음, 실루엣 이미지, 미국 사이트 기준) |

## 6. Figma Production Plan (다음 Phase, 이번에는 쓰기 없음)
- 파일 `4IjbcMoAkTyWkoacnVAmNe` · Page "자동화" `1716:2382`
- 새 Root `PORTFOLIO_03_WORK`
  - 계획 위치: x **8700**, y **1685**. AUTORUN_02_WORK 오른쪽 끝(2160 + 6060 = 8220) + 480
  - 예상 크기: 화면 6개 가로 배치 = 1440×4 + 390×2 + 간격 240×5 ≈ 7,740 폭 × ~4,500 높이. Case Study를 더하면 ≈ 9,420 폭 × ~14,000 높이
- 보호(읽기 전용): Reference 42개 · AUTORUN_01_WORK(1889:1910) · AUTORUN_02_WORK(1915:1910) · 00_WRITE_TEST
- 제작 전 사전 검사(다음 Phase)
  1. 최상위 Frame 좌표를 다시 확인해 겹침이 없는지 본다.
  2. 보호 대상 fingerprint 기준값을 측정한다.
  3. `listAvailableFontsAsync`로 Barlow Condensed · Inter · IBM Plex Sans KR을 확인한다.
  4. 레인 색 위 글자 대비를 계산한다.
