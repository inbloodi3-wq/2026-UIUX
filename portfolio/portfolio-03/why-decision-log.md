# WHY Decision Log — PORTFOLIO_03 (ASICS · Unofficial Personal Redesign)

- 결정과 동시에 기록한다. IMPLEMENTED RESULT는 PHASE 02(Figma UI Production, 2026-10-01) 결과로 갱신했다. 노드는 파일 `4IjbcMoAkTyWkoacnVAmNe` · Root `PORTFOLIO_03_WORK 1939:1910` 기준.
- 근거 분류: **VF** VERIFIED FACT · **IN** INTERPRETATION · **DP** DESIGN PROPOSAL · **UV** UNVERIFIED · (AP: 미감 제안)

## W1. 브랜드: ASICS
- **DECISION**: HOKA · Salomon · ASICS 중 ASICS를 고른다.
- **EVIDENCE** [VF]
  - HOKA는 홈부터 403이다.
  - Salomon은 상품 상세가 403이다.
  - ASICS는 홈 · 컬렉션 · PDP 7개 · 모바일 · 필터 값을 모두 확인했다.
- **WHY** [IN]: 브랜드 표현과 실제 구매 흐름(컬렉션 → 상품 → 컬러 → 사이즈 → CTA)을 모두 근거로 설계할 수 있는 유일한 후보다.
- **EXPECTED RESULT**: 화면마다 실제 데이터(모델 · 가격 · 스펙 · 컬러 이름 · 품절 사이즈)를 쓴다.
- **LIMITATION**: 미국 사이트, 남성 러닝 1개 카테고리 기준이다. 접근 차단은 브랜드의 UX 품질과 무관하다.
- **IMPLEMENTED RESULT**: IMPLEMENTED — 6개 화면 모두 실제 수집 데이터만 사용: 가격·Cushion·Drop·Weight·Support·Goal·컬러 수(D2 1943:2026, D3 1944:2330), SUPERBLAST 3 컬러웨이 6개·품절 사이즈 5–6.5/14/15(D4 1945:2380, M6 1948:2676), 레인 수량 28/211(D1 1942:1932). FASTER 레인 보강용 METASPEED 2종은 R17–R18로 추가 수집.

## W2. P1 — 탐색 단계 모델 비교 + 어휘 불일치
- **DECISION** [DP]
  - 카드와 모델 칩에 스펙 칩, 비교 트레이(최대 3), 비교 화면 D3를 둔다.
  - 필터와 상세 어휘 통일을 제안한다.
- **EVIDENCE** [VF]
  - 스펙은 PDP에만 있다.
  - 상세 "Cushion High"가 필터 값(Regular · Extra · Maximum)에 없다.
  - "Support"와 "Pronation"이 따로 쓰인다.
  - 공식 안내문이 선택을 "overwhelming"이라고 쓴다.
- **WHY** [IN]: 이름만으로 구분되지 않는 모델이 많다(7개 중 Drop 모두 8 mm, Goal 6개가 Further).
- **EXPECTED RESULT**: 상세를 여러 번 열지 않고 탐색 단계에서 비교한다(가설, 검증 전).
- **LIMITATION** [UV]: "High"의 필터 대응은 알 수 없다 → 원문 그대로 표시한다.
- **IMPLEMENTED RESULT**: IMPLEMENTED — 카드마다 스펙 칩 4개(Cushion·Support·Weight·Drop, product-card 1941:1923), Compare 체크 + 최대 3개 Compare Tray(compare-tray 1939:2034, D2 하단), 비교 화면 D3(7개 행 + SAME/DIFFERENT 태그). 어휘는 대응 관계를 만들지 않고 원문 그대로 표기하고, D2 vocab-note에 상세 값 "High"의 필터 대응이 확인되지 않았음을 밝혔다. EXPECTED RESULT는 여전히 사용자 테스트 전 가설.

## W3. P2 — 모델당 카드 1장
- **DECISION** [DP]: 모델 단위 카드 + 컬러 수 + 대표 스와치. 컬러웨이는 상세의 표현 요소로 옮긴다.
- **EVIDENCE** [VF]: 첫 25개 중 NOVABLAST 6 ×5, GT-2000 15 ×5가 컬러별 URL 카드다.
- **WHY** [IN]: 한 화면에서 볼 수 있는 모델 종류를 늘린다.
- **LIMITATION** [UV]: 컬러별 카드가 의도된 머천다이징일 가능성이 있다.
- **IMPLEMENTED RESULT**: IMPLEMENTED — D2·M5에서 모델 5개 = 카드 5장. 카드에 컬러 수 + 대표 스와치, 컬러웨이 선택은 D4·M6 상세에만 있다. D2 sample-tile에 "5 of 342"로 시안 범위를 밝혔다.

## W4. P3 — 모바일 결정 정보 상단 + 고정 구매 바
- **DECISION** [DP]
  - M6: 모델명 아래 스펙 밴드, 사이즈 선택 후 하단 고정 "Add to Cart" 바
  - M5: 텍스트 모델 칩, 첫 화면에 상품명·가격
- **EVIDENCE** [VF]
  - 모바일 상세: "Select Size" 버튼 y=1206(고정 아님), 스펙 y≈1998
  - 모바일 컬렉션 첫 화면: 사진 칩이 290–640을 차지한다.
- **WHY** [IN]: 결정 정보와 행동을 가까이 둔다.
- **LIMITATION**: 데스크톱 브라우저 뷰포트 측정이다. 실기기는 미확인이다.
- **IMPLEMENTED RESULT**: IMPLEMENTED — M6(390×844, clip): 상품명 바로 아래 스펙 밴드 → 컬러 → 사이즈, 하단 고정 sticky-purchase-bar("Add to Cart — US 9", top 752, 스크롤 콘텐츠와 분리된 레이어). M5: 텍스트 모델 칩 가로 스크롤, 필터는 Bottom Sheet 진입 버튼, 첫 844px 안에 Goal 레인·첫 상품명(y 592)·가격(y 633). 실기기 확인은 아직 없음.

## W5. Visual Direction: PACE LANES
- **DECISION**: A(Pace Lanes)를 고른다. B(Colorway Lab)는 상세의 컬러 선택 영역에만 흡수한다. C(Foam Sculpture)는 기각한다.
- **EVIDENCE** [VF]: Goal 필터 값 2개(Further 211 · Faster 28). 컬러웨이 이름(Orange Glow · Energy Aqua · Illuminate Yellow · Cobalt Burst).
- **WHY** [IN]: 레인이 실제 분류(Goal)를 그대로 시각화해, 브랜드 표현이 탐색 구조와 같은 일을 한다. B는 색만 바뀌는 위험, C는 쇼핑 UX가 약하고 단면 근거가 없다.
- **EXPECTED RESULT**: 첫 화면부터 기존 포트폴리오(밝은 여백 · 사진 주도)와 다르게 보인다.
- **LIMITATION**
  - 레인 수량이 불균형하다 → 수를 표시한다.
  - 사선 · 레인이 SeMA의 선 모티프와 비슷해 보일 위험 → 넓은 색 밴드 + 번호로 구분한다.
- **IMPLEMENTED RESULT**: IMPLEMENTED — D1 Hero의 넓은 사선 레인 밴드 2개(01 FASTER #FF5A1F / 02 FURTHER #00D1C1) + 거대한 레인 번호 + 압축 이탤릭 제목, 수량(28 / 211 products) 표시. 레인 밴드는 D3 헤더와 M5 goal-lanes로 이어진다. 가는 선 모티프는 쓰지 않았다(SeMA와 구분). 사선 컷은 D1 featured 섹션 전환에만 사용.

## W6. 색
- **DECISION** [DP]
  - 트랙 블랙 표면을 기본으로 한다.
  - 레인 색: Faster = 오렌지 계열, Further = 아쿠아 계열. Signal 옐로 = 선택·CTA.
- **EVIDENCE** [VF]: 컬러웨이 이름에서 착안했다. hex 값은 제안 근사치다(공식 색 아님 [UV]).
- **WHY** [IN]: 색이 Goal의 의미를 운반한다. 장식용 색을 늘리지 않는다.
- **LIMITATION**: 대비 미계산 → 제작 사전 검사에서 확인한다.
- **IMPLEMENTED RESULT**: IMPLEMENTED — 표면 #0A0D12/#161B22, 흰색 계열(#EEF1F4)은 상품 스테이지에만. 대비 계산 결과에 따라 규칙을 고정: 레인 색 위 글자는 검정만(faster/white 3.12 미달), cobalt는 흰 글자 배경으로만(cobalt/white 5.89, cobalt 글자색 금지), signal 위 검정 17.27. hex는 여전히 제안 근사치[UV].

## W7. 서체
- **DECISION** [AP]: 압축 이탤릭 디스플레이(Barlow Condensed 후보) + Inter + IBM Plex Sans KR(Case Study)
- **EVIDENCE**: 없음(미감·차별화 선택). 기존 프로젝트 서체와 겹치지 않는다.
- **WHY** [IN]: 속도감과 큰 성능 수치 표현에 쓴다. 이탤릭은 디스플레이에만 쓴다.
- **LIMITATION** [UV]: Figma 가용성 미확인
- **IMPLEMENTED RESULT**: IMPLEMENTED — Barlow Condensed ExtraBold/Black Italic(디스플레이·모델명·수치), Inter(UI·본문) 모두 Figma에서 가용 확인, 대체 서체 불필요. 이탤릭은 디스플레이에만, 수치는 단위와 함께(239 g · 8 mm · $210). IBM Plex Sans KR은 Case Study 단계에서 사용 예정.

## W8. 상품 이미지: 자체 제작 실루엣
- **DECISION** [DP]: ASICS 사진은 쓰지 않는다. 자체 벡터 측면 실루엣 + 실제 컬러웨이 이름의 색 블록을 쓰고, "concept illustration"으로 표기한다.
- **EVIDENCE** [VF]: 상품·캠페인 사진의 사용 권리를 확인하지 못했다.
- **WHY**: Fail Closed. 공식 비주얼을 재현하지 않는다.
- **LIMITATION**: 실제 제품 형태와 다르다. 상품 사진만큼의 설득력은 떨어진다 → Case Study에서 밝힌다.
- **IMPLEMENTED RESULT**: IMPLEMENTED — 자체 벡터 측면 실루엣 컴포넌트 1개(product-silhouette 1941:1911, 11개 레이어, ASICS 스트라이프 형태 없음)를 컬러웨이 이름 기반 색으로 재색칠해 전 화면에서 재사용. D1 레인에서만 −8° 기울기·밴드 경계 겹침, 그리드는 정렬 유지. 모든 화면에 "Concept illustration / not actual ASICS product imagery" 표기, 로고·사진 미사용.

## W9. 화면 범위 6개 (D1–D4, M5–M6)
- **DECISION** [DP]: Home · Collection · Compare · PDP × Desktop, Collection · PDP × Mobile. Technology는 PDP 섹션으로 압축한다.
- **WHY** [IN]: 화면마다 서로 다른 UX 목적(진입 · 탐색 · 비교 · 구매)을 하나씩 맡는다.
- **IMPLEMENTED RESULT**: IMPLEMENTED — 6개 화면 + 디자인 시스템 보드: 00_DESIGN_SYSTEM 1939:1911, D1 1942:1932, D2 1943:2026, D3 1944:2330, D4 1945:2380(기술 스토리 4개는 D4 섹션), M5 1947:2457, M6 1948:2676. 별도 Technology 화면 없음.

---
# PHASE 03 — 한국형 재작업 (2026-10-01, 사용자 결정 "한국형으로 재작업")
- W1–W9의 IMPLEMENTED RESULT는 **US Global Concept 보관본** 기준이다. KR 화면 결과는 아래 W10–W14에 기록한다.

## W10. 시장: 한국 (KOREAN MARKET LOCALIZATION RULE)
- **DECISION**: 아식스 코리아 공식 스토어 기준으로 다시 만든다. US 화면은 Global Concept 보관본으로 남긴다.
- **EVIDENCE** [VF]: asics.co.kr / m.asics.co.kr 조사(러닝화 목록 71개, PDP 8개+, SHOE FINDER 5유형, 모바일), 한국 커머스 3곳(나이키 코리아 · 뉴발란스 코리아 · 무신사) — `research/kr/`
- **WHY**: 취업용 포트폴리오의 대상은 한국 사용자·한국 커머스다. US 데이터(USD · US Size · Goal)는 한국 판매 정보가 아니다.
- **LIMITATION**: 비로그인 관찰. 로그인 후 동작·실기기 미확인.
- **IMPLEMENTED RESULT**: IMPLEMENTED — KR 화면 6개 + KR 디자인 시스템을 `KR_REDESIGN 1954:2746`에 제작. UI 언어 한국어, 가격 원, 사이즈 mm, 배송·반품·혜택은 아식스 코리아 원문 범위. US 화면 7개는 `ARCHIVE_GLOBAL_CONCEPT_US 1954:2747`에 내용 변경 없이 보관(내용 fingerprint 48229367 동일).

## W11. 레인 근거: Goal 2값 → 러닝화 유형 5종
- **DECISION** [DP]: 레인 01 안정화 · 02 쿠션화 · 03 바운싱화 · 04 레이싱화 · 05 트레일러닝화. 홈 → 목록 필터 → 카드 → 비교 → 상세까지 같은 이름·색으로 잇는다.
- **EVIDENCE** [VF]: 아식스 코리아 SHOE FINDER 유형 5종과 원문 설명. 목록 필터 7개에는 유형이 없다(KP1). 한국 경쟁 사이트도 목적·기능 분류를 진입로로 쓴다(나이키 착용감·지지력, 뉴발란스 목적별 러닝화).
- **WHY** [IN]: 브랜드가 이미 가진 한국어 분류를 탐색 구조로 올리면, PACE LANES의 레인이 장식이 아니라 실제 분류가 된다.
- **LIMITATION**: 유형별 상품 수(18 · 13 · 43 · 14 · 10)는 남녀 합산이다. 남성만의 유형별 수는 사이트에 없다 → 그대로 표기.
- **IMPLEMENTED RESULT**: IMPLEMENTED — D1 `1959:2772` 유형 레인 5개(번호 · 한글 유형명 · 원문 설명 · 상품 수, 바운싱화는 "43개 · 그중 32개 품절" 표기) → D2 `1967:2913` 유형 탭 + 필터 1순위 "러닝화 유형"(제안임을 화면에 표기) + 카드 유형 태그 → D3 `1968:3285` 열 머리의 유형 색 밴드 → D4 `1970:3335` · M6 `1971:3696` 스펙 밴드(안정화 색) → M5 `1971:3404` 유형 칩 가로 스크롤.

## W12. 색 5개 레인 + signal 유지
- **DECISION** [DP]: lane-protection #2E4BFF · lane-cushion #00D1C1 · lane-bounce #FF5A1F · lane-speed #F03CFF(신규) · lane-trail #2BD96B(신규). signal #E4FF2E은 선택·CTA 전용.
- **EVIDENCE**: 대비 계산(레인 위 글자: 흰 5.89 / 검정 10.09 · 6.24 · 6.30 · 10.42). SHOE FINDER도 유형별 색을 쓴다[VF]. 값은 제안 근사치[UV].
- **IMPLEMENTED RESULT**: IMPLEMENTED — 레인 5색을 KR_00_DESIGN_SYSTEM `1955:2746`에 토큰·대비와 함께 기록하고 type-tag 5종(1955:2843/2846/2849/2852/2855)으로 컴포넌트화. 안정화(cobalt) 위는 흰 글자, 나머지 4색 위는 검정 글자. signal은 선택 상태(탭 · 사이즈 · 발 너비 · 비교 체크)와 주 CTA에만 사용.

## W13. 한글 서체 체계
- **DECISION** [DP]: Noto Sans KR(한글 UI·본문·헤드라인) + Barlow Condensed(라틴 디스플레이·수치) + Inter(영숫자 메타).
- **EVIDENCE** [VF]: 아식스 코리아 본문 서체가 Noto Sans KR. Figma에서 Noto Sans KR Black까지 로드 확인, Pretendard 로드 실패.
- **WHY**: 한글이 UX 언어를 맡고, 영문 압축 이탤릭은 브랜드 표현(번호·모델명·수치)에만 남긴다.
- **IMPLEMENTED RESULT**: IMPLEMENTED — 전 화면 한글 텍스트 Noto Sans KR(Regular/Medium/Bold/Black), 각 화면 첫 헤드라인은 한글(어떻게 달리나요? · 남성 러닝화 · 무엇이 다른가요? · 젤 카야노 33). Barlow Condensed Italic은 레인 번호 · 영문 모델명 병기 · 무게 수치에만. 48px 이하 텍스트는 승인 스케일만 사용(감사 결과 위반 0, D1 레인명 44→48 수정). 한글 문장은 수동 개행으로 어절 단위 줄바꿈.

## W14. 대표 상품 교체: 슈퍼블라스트 3 → 젤 카야노 33
- **DECISION**: D4·M6 상세를 젤 카야노 33으로 만든다.
- **EVIDENCE** [VF]: KR 슈퍼블라스트 3은 컬러 3종 전 사이즈 품절 + "로그인 후 구매 가능". 젤 카야노 33은 컬러 6 · 발 너비 D/2E/4E · 실제 부분 품절(WHITE/WHITE 250 · 285 · 290)이 있어, 컬러 → 발 너비 → 사이즈 → 담기 흐름을 실제 데이터로 보여 줄 수 있다.
- **LIMITATION**: 컬러·재고는 조사 시점 값이다.
- **IMPLEMENTED RESULT**: IMPLEMENTED — D4 `1970:3335`: PRUSSIAN BLUE/WHITE 선택, 컬러 6(OATMEAL/CREAM "290만 남음", WHITE/ENERGY AQUA "품절"), 발 너비 D/2E(전 컬러 품절)/4E, 사이즈 250–300 중 270 선택, "장바구니 담기 · 270" + "바로구매". M6 `1971:3696`(390×844): WHITE/WHITE 선택, 250 · 285 · 290 품절 표시, 하단 고정 구매 바(top 722, 사이즈 영역 하단 684). 소재 스토리는 KR 스펙 표 5필드만 사용.

## W15. 제품 비주얼: 벡터 실루엣 → AI 생성 컨셉 제품 이미지 (2026-10-03)
- **DECISION**: 사용자가 만든 AI 생성 PNG 10종으로 신발 비주얼만 교체한다. UI 구조 · 텍스트 · 데이터는 그대로 둔다.
- **EVIDENCE**: 사용자 승인 지시. 이미지는 실제 아식스 제품 사진이 아니다(W8의 "공식 사진 미사용" 원칙은 유지).
- **LIMITATION**: 이미지 색이 표기한 컬러웨이와 다른 곳이 있다(노바블라스트 6 · 글라이드라이드 맥스 2 · M6 WHITE/WHITE). "컨셉 일러스트" 문구와 S06 설명은 아직 벡터 실루엣 기준이다.
- **IMPLEMENTED RESULT**: KR 화면 26곳 · Case Study 63곳 교체. PDF 재Export 전.
