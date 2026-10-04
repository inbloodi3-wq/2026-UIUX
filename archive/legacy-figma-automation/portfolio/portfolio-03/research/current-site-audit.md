# Current Site Audit — ASICS US (2026-10-01)

표기: [F] 직접 확인 · [D] 도출 · [H] 가설 · [P] 제안 · [U] 미확인. 사용자 조사·KPI·전환율 없음.

## 1. 구조 [F]
- **GNB**: Men / Women / Kids / Sports / Sportstyle / Road Tested + Search · My Account · Cart
- **Home(R5)**: 컬렉션 캠페인이 연속된다.
  - 이어지는 블록: RISE & SHINE™ Collection("Bright colors inspired by sunrise") → 테니스 → GORE-TEX 신상품 캐러셀 → The latest Sportstyle → NIMBUS MIRAI™ 2 · GEL-SLOWCUSH™ → BLOOMSTRIDE™ · NAGINO™ → GEL-NIMBUS® 28 LIMITED EDITION · LITE-SHOW™
  - 이후 OneASICS 회원·추천·앱 블록
- **Collection(R6, Men's Running Shoes)**
  - 상품 수 **342**
  - 정렬: Sort by
  - 필터 10개: Size · Width · Color · Price · Pronation · Goal · Cushion · Surface · Model · Collections
  - 모델 칩 5개: NOVABLAST® · GT-2000™ · GEL-KAYANO® · GEL-NIMBUS® · GEL-CUMULUS®. 이미지 + 이름만 있다.
  - 상품 카드: 이미지 캐러셀 · 컬러 스와치(컬러 이름 노출) · 모델명 · "Running Shoes" · 가격
- **Product Detail(R7–R9, R12–R13)**
  - 순서: 갤러리(9장·영상) → 모델명 → 평점 → 가격 → Color(이름) → Gender → Width → Size(품절 표시) → "Select Size" 버튼 → 혜택·배송 → 설명 → **Cushion · Heel Drop · Weight · Support · Goal** → 아코디언 3개 → 기술 핫스팟 → 리뷰

## 2. 실제 스펙 (PDP, 2026-10-01)
| 모델 | 가격 | Cushion | Heel Drop | Weight | Support | Goal | 컬러 수 | 평점 |
|---|---|---|---|---|---|---|---|---|
| SUPERBLAST 3 (Unisex, Men's 선택) | $210 | High | 8 mm | 239 g / 8.4 oz | Neutral, Neutral | Faster | 6 | 4.4 (741) |
| NOVABLAST 6 (Men) | $155 | High | 8 mm | 253 g / 8.9 oz | Neutral, Neutral | Further | 12 | — |
| GEL-NIMBUS 28 (Men) | $170 | Maximum | 8 mm | 281 g / 9.9 oz | Neutral, Neutral | Further | 19 (품절 2) | 4.4 |
| GEL-KAYANO 33 (Men) | $170 | Maximum | 8 mm | 298 g / 10.5 oz | Neutral, Stability | Further | 13 | — |
| GT-2000 15 (Men) | $150 | High | 8 mm | 252 g / 8.9 oz | Neutral, Stability | Further | 12 | — |

- 무게의 기준 사이즈는 페이지에 표시되지 않았다 [U].
- Support 필드의 두 값("Neutral, Neutral" / "Neutral, Stability")이 무엇을 뜻하는지는 확인하지 못했다 [U]. 표기 오류로 판단하지 않는다.
- 위에 없는 칸(—)은 수집하지 않은 값이다.

**컬러웨이 이름 예 [F]**: White/Orange Glow · Illuminate Yellow/Energy Aqua · Cobalt Burst/Light Orange · Seashell/Sun Coral · Black/Black · Energy Aqua/White · Midnight/Energy Aqua · Foggy Teal/Illuminate Yellow

**SUPERBLAST 3 사이즈(Men's) [F]**: 3.5–15 중 5 · 5.5 · 6 · 6.5 · 14 · 15 품절. CTA 라벨은 사이즈 선택 전 "Select Size"다.

### 추가 수집 모델 (R14–R15)
| 모델 | 가격 | Cushion | Heel Drop | Weight | Support | Goal | 컬러 수 |
|---|---|---|---|---|---|---|---|
| MEGABLAST (Unisex, Member Access 표시) | $225 | High | 8 mm | 230 g / 8.1 oz | Neutral, Neutral | Further | 6 |
| SONICBLAST 2 (Men) | $190 | High | — (미수집) | — (미수집) | Neutral, Neutral | Further | 2 |

### FASTER 레인 보강 (R17–R18, PHASE 02 사전 확인)
| 모델 | 가격 | Cushion | Heel Drop | Weight | Goal | 컬러 수 | 화면 표기 컬러웨이 |
|---|---|---|---|---|---|---|---|
| METASPEED SKY TOKYO | $270 | Regular | 5 mm | — (미수집) | Faster | 4 | Aquarium/White |
| METASPEED RAY | $300 | Regular | 5 mm | — (미수집) | Faster | 4 | Aquarium/White |

- D1 FASTER 레인 실루엣 3개(SUPERBLAST 3 · METASPEED SKY TOKYO · METASPEED RAY)의 근거다. 화면에는 가격·컬러웨이 이름만 쓴다.

### 필터 값 (Men's Running, R16 — 필터 3개를 펼친 클릭만 함) [F]
- Goal: Further (211) · Faster (28)
- Cushion: Regular (136) · Extra (120) · Maximum (73)
- Pronation: Neutral (329) · Overpronate (62) · Underpronate (262)

## 3. Mobile (390×844, 데스크톱 브라우저 뷰포트) [F]
- 컬렉션
  - "Filter" 버튼은 y≈194.
  - 모델 칩은 큰 라이프스타일 사진 캐러셀로 y≈290–640을 차지한다.
  - 첫 상품 카드는 첫 화면 하단에서 이미지 윗부분만 보이고, 이름·가격은 첫 화면 밖이다.
- 상품 상세
  - 모델명 y=533 → 사이즈 가이드 y=922 → "Select Size" 버튼 y=1206(position: relative, 고정 아님) → Cushion 등 스펙 y≈1998
  - 고정 요소는 상단 헤더뿐이다.

## 4. Problems (3)

### P1. 모델 차이를 탐색 단계에서 알 수 없고, 같은 기준을 다른 말로 부른다
- **OBSERVED FACT [F]**
  - 결정 기준(Cushion·Drop·Weight·Support·Goal)은 상품 상세에만 있다.
  - 컬렉션 카드와 모델 칩에는 이름·가격(칩은 이름·사진)만 있다.
  - 수집한 7개 모델은 Drop이 모두 8 mm, 6개가 Goal "Further"다. 차이는 Cushion·Support·Weight·가격에 있다.
  - **어휘 불일치**: 필터 Cushion = Regular(136) / Extra(120) / Maximum(73)인데, 상세 페이지는 5개 모델에 "High"를 쓴다(필터에 없는 값). 필터는 "Pronation"(Neutral 329 / Overpronate 62 / Underpronate 262), 상세 페이지는 "Support"(Neutral, Stability)다.
  - 컬렉션 하단 공식 안내문: "navigating the different styles, fits and features can feel overwhelming."
- **POSSIBLE USER DIFFICULTY [H]**
  - NOVABLAST 6와 GEL-NIMBUS 28처럼 이름만으로 차이를 알 수 없는 모델을 비교하려면 상세 페이지를 여러 번 열어야 할 수 있다.
  - 상세의 "High"가 필터의 어느 단계인지 알 수 없어, 필터로 다시 찾기 어려울 수 있다.
- **DESIGN OPPORTUNITY [P]**
  - 카드와 모델 칩에 실제 스펙 칩(Goal · Cushion · Support · Weight)을 노출한다.
  - 최대 3개 모델 비교 트레이를 둔다.
  - 홈에서는 Goal(Faster 28 / Further 211)로 진입하게 한다.
  - 필터와 상세가 **같은 어휘**를 쓰도록 통일하는 것을 제안한다.
- **LIMITATION**
  - "High"와 Regular/Extra/Maximum의 대응은 확인할 수 없다 [U]. 시안에서는 상세 값을 그대로 표시하고 대응 관계를 만들지 않는다.
  - 어휘 통일안은 원칙 제안까지만 한다.

### P2. 같은 모델이 컬러마다 별도 카드로 반복된다
- **OBSERVED FACT [F]**
  - 컬렉션 첫 25개 중 NOVABLAST 6 카드 5장, GT-2000 15 카드 5장이 각각 다른 컬러 URL이다.
  - 상세에는 컬러가 12 · 19개 있다.
  - 카드 안에도 컬러 스와치가 있다.
- **POSSIBLE USER DIFFICULTY [H]**: 한 화면에 보이는 모델 종류가 줄어 비교 폭이 좁아질 수 있다.
- **DESIGN OPPORTUNITY [P]**
  - 모델당 카드 1장 + 컬러 수와 대표 스와치를 둔다.
  - 컬러웨이는 탐색 결과를 흐리는 반복이 아니라, 상세에서 고르는 **표현 요소**로 끌어올린다.
- **LIMITATION**: 컬러별 카드가 의도된 머천다이징(신규 컬러 강조 등)일 수 있다 [U].

### P3. 모바일에서 구매 결정 정보와 버튼이 멀리 있다
- **OBSERVED FACT [F]**
  - 모바일 상세에서 "Select Size" 버튼은 y=1206(첫 화면 밖, 고정 아님)이다.
  - 스펙은 y≈1998이다.
  - 모바일 컬렉션 첫 화면에서는 상품 이름·가격이 보이지 않는다.
- **POSSIBLE USER DIFFICULTY [H]**: 사이즈를 고른 뒤 버튼을 찾으려 스크롤하고, 스펙을 보려면 2화면 이상 내려가야 할 수 있다.
- **DESIGN OPPORTUNITY [P]**
  - 모바일 상세: 스펙 밴드를 모델명 바로 아래로 올리고, 사이즈 선택 후 하단 고정 구매 바를 둔다.
  - 모바일 컬렉션: 모델 칩을 텍스트 칩으로 줄여 첫 화면에 상품 카드가 보이게 한다.
- **LIMITATION**: 데스크톱 브라우저의 뷰포트 측정이다. 실제 기기·앱은 미확인이다.

## 5. 긍정적 관찰 (유지할 것)
- 컬러 이름이 버튼 접근성 이름으로 노출된다.
- 품절 사이즈가 텍스트로 표시된다.
- 필터 항목(Goal·Cushion·Pronation)이 이미 러닝 기준이다.
- 기술 핫스팟 설명(FF LEAP · FF BLAST PLUS 등)이 있다.
