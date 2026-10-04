# Case Study Plan — PORTFOLIO_03 (아식스 코리아 · PACE LANES)

- STEP 1(2026-10-03): Source Audit + Story Architecture. **Figma 쓰기 없음.**
- 기준: `KR_REDESIGN 1954:2746`의 화면 7개. US 보관본(`1954:2747`)은 최종 결과물이 아니다.
- 이 문서가 Case Study 제작의 Source of Truth다. `production-plan.md` 5장의 9섹션 계획(US 단계)은 이 문서로 대체한다.
- 근거 문서: `research/kr/kr-audit.md`(KP1–KP3) · `kr-trend-check.md` · `kr-localization-plan.md` · `why-decision-log.md` W10–W14 · `visual-direction.md`

## 1. 한 문장
아식스 코리아가 이미 갖고 있지만 상품 목록과 끊겨 있던 "러닝화 유형 5종"을 탐색의 첫 단계로 올려, 유형 → 목록 → 비교 → 상세 → 담기가 한 흐름으로 이어지게 한 한국형 러닝화 구매 경험 리디자인.

## 2. 핵심 결정 (사용자 제안 A/B/C를 조정)
| # | 결정 | 대응 문제 | 근거(확인 사실) | 화면 |
|---|---|---|---|---|
| D1 | **유형에서 시작한다** (Type-first) | KP1 | SHOE FINDER 5유형이 #RUN에만 있고 목록 필터 7개에는 없음 | D1 · D2 탭/필터 · M5 칩 |
| D2 | **모델 = 카드 1장, 상세 전에 비교한다** | KP2 | 남성 러닝화 71개 중 젤 카야노 33 계열 카드 14장 · 바운싱화 43개 중 32개 품절이 섞여 노출 | D2 카드·트레이 · D3 |
| D3 | **한 화면에서 고르고 담는다** | KP3 | 컬러 = 다른 PDP로 이동 · 발 너비 = 별도 상품 · 스펙 표는 추천 레일 아래 · 모바일 진입 모달 | D4 · M6 |
- 현지화(원 · mm · 한글 공식명 · 국내 판매 모델 · 재고 · 배송/반품)는 네 번째 "결정"이 아니라 **세 결정의 전제**로 다룬다: "미국 데이터로 세운 가설을 한국 사이트에서 다시 검증하고 근거를 바꿨다"(S03).
- 가로지르는 원칙: **있는 그대로 보여 준다** — 품절, 제안 기능 표시, 컨셉 일러스트 표기, 원문 그대로의 값.

## 3. Section Architecture (11)
| ID | Name | Purpose | Screen Node | Visual | Proves |
|---|---|---|---|---|---|
| S01 | Cover | 프로젝트를 한눈에 | D1 `1959:2772` 레인 영역 | 레인 5개 크롭을 전면 비주얼로, 한글 타이틀 | Art direction |
| S02 | Overview | 범위·역할·산출물·고지 | 6개 화면 축소 라인업 | 3열 사실 정보 + 화면 라인업 | 범위 정의 |
| S03 | 한국에서 다시 시작하다 | US 가설 → KR 사실로 근거 교체 | US 보관본 축소 2컷(참고) + KR D1 | 좌 US 가설 / 우 KR 사실 대비 표 | 리서치 정직성, 현지화 |
| S04 | Problem | KP1–KP3 | 없음(다이어그램) | 숫자 3개 + 현재 구조 다이어그램 | 문제 정의 |
| S05 | Strategy & Flow | 세 결정 + IA/흐름 | 없음(다이어그램) | Before/After 흐름도, 레인 색 | IA, 흐름 설계 |
| S06 | Design System | 레인 5색 · 한글 서체 · 실루엣 · 컴포넌트 | DS `1955:2746` | 토큰과 컴포넌트 선별 크롭 | 시스템 사고 |
| S07 | 결정 1 — 유형에서 시작 | D1 구조 설명 | D1 레인 크롭 + D2 탭/필터 크롭 | 대형 크롭 + 주석 3 | IA, 시각 위계 |
| S08 | 결정 2 — 카드 1장, 먼저 비교 | D2·D3 | D2 `1967:2913` 카드+트레이, D3 `1968:3285` 표 | 14장 → 1장 다이어그램, D3 전체 | 커머스 UX, 정보 설계 |
| S09 | 결정 3 — 한 화면에서 고르고 담기 | D4 | D4 `1970:3335` | 스테이지+옵션+CTA 크롭, 상태 줌 3 | 구매 흐름, 상태 설계 |
| S10 | Mobile | 재우선순위화 | M5 `1971:3404`, M6 `1971:3696` | 844 접힘선 표시, Desktop↔Mobile 대응표 | 반응형 판단 |
| S11 | Outcome & Reflection | 구조적 변화 · 한계 · 다음 | 전체 화면 축소(선택) | Before/After 구조 요약, 한계 목록 | 자기 평가 |

## 4. Screen Mapping
| 화면 | 용도 |
|---|---|
| KR DESIGN SYSTEM | S06 Crop(레인 색 · 서체 · 컴포넌트). 전체 화면은 쓰지 않음 |
| D1 | S01 Hero(레인 크롭) · S07 Crop + Zoom(바운싱화 품절 표기) · S02 축소 |
| D2 | S07 Crop(유형 탭 · 필터) · S08 Crop(카드 그리드 + 트레이) + Zoom(전 컬러 품절 카드) |
| D3 | S08 Full(표 전체가 메시지) |
| D4 | S09 Crop(스펙 밴드 + 스테이지 + 옵션 + CTA) + Zoom(컬러 상태 · 발 너비 · 혜택) |
| M5 | S10 Mobile pair, 첫 844px Crop + 접힘선 |
| M6 | S10 Mobile pair, Full(844) + 고정 구매 바 Zoom |

## 5. Copy Hierarchy
섹션마다 Eyebrow(영문 대문자 1줄, 예 "DECISION 01") · Headline(한글 1줄, 18자 안팎) · Summary(1–3줄, 줄당 30자 안팎) · Caption(선택, 12px, 출처·주석). 본문 문단 금지. 수치는 확인된 사실만(71 · 14 · 32/43 · 7 · 5).

## 6. Visual Direction
- 폭 1920(같은 Page의 기존 Case Study 규격과 동일), 섹션 세로 스택.
- 어두운 바탕(track-black) + 레인 색을 섹션 구분 띠 · 섹션 번호 · 크롭 배경에 선택적으로. 문제 섹션(S04)만 무채색 톤으로 눌러 "현재"와 "리디자인"을 구분.
- 한글 Noto Sans KR, 섹션 번호와 영문 Eyebrow만 Barlow Condensed Italic. 48px 이하는 승인 스케일.
- 데스크톱 화면은 목업 없이 원본 그대로. 모바일은 390 프레임 + 844 접힘선.
- 다이어그램은 레인 색 블록과 화살표. 장식 그래픽 없음.

## 7. 다루지 않거나 줄이는 것
- GT 2000 15 소재 표기: S08 캡션 1줄.
- 대표 상품 교체(슈퍼블라스트 3 → 젤 카야노 33): S09 캡션 1–2줄.
- 트렌드 조사 3곳: S03에 근거 1줄(경쟁사도 기능 분류를 진입로로 씀).
- 성과 수치(전환율 등): 쓰지 않음. 사용자 테스트 없음을 S11에 명시.
- 아식스 사이트 캡처: 상품 사진·로고가 들어 있어 기본적으로 쓰지 않고 다이어그램으로 대체.

## 8. Build Order (STEP 2 이후)
1. Page `05_Portfolio_CaseStudy` 빈 영역 측정 + 그 Page 보호 대상 기준 fingerprint 측정
2. Foundation: Root Frame 1개(1920) + 섹션 11개 골격 + 텍스트 스타일
3. KR 화면을 Case Study 안으로 복제(원본 화면은 수정하지 않음)
4. S01 → S04 → S05(이야기 뼈대) → S07 · S08 · S09(결정) → S10 → S06 → S02 · S03 → S11
5. Render QA(섹션당 최대 3 Pass) → 최종 보호 확인

## 9. 진행 상태
### STEP 2 (2026-10-03) — S01–S06 COMPLETE
- Page `05_Portfolio_CaseStudy`(1271:1726) · Root `PORTFOLIO_03_CASE_STUDY_KR` **1980:5879** · x 30000 / y 0 · 1920×10095 (기존 영역 오른쪽 끝 28786에서 1214 띄움)
- 섹션: S01 `1980:5880`(1480) · S02 `1983:6171`(1373) · S03 `1982:5997`(1416) · S04 `1981:5989`(1777) · S05 `1981:6063`(1625) · S06 `1982:6095`(2424)
- Foundation: 폭 1920 · 좌우 여백 140(콘텐츠 1640) · 섹션 상하 160 · 블록 간격 72. 섹션 라벨(번호 Barlow Black Italic 40 + 영문 20 + 선), 헤드라인 Noto Sans KR Black 72, 요약 24, 캡션 14. 48px 이하 텍스트는 승인 스케일만 사용(감사 결과 위반 0).
- 반복 요소(섹션 라벨 · 근거 숫자 · 결정 토큰 · 캡션)는 같은 Auto Layout 패턴으로 만들었고 메인 컴포넌트로 등록하지는 않았다(Root를 내보내기용으로 깨끗하게 유지). UI 컴포넌트는 KR 디자인 시스템 컴포넌트의 인스턴스다.
- 원본 사용: D1 `lanes` 복제(S01) · KR 6개 화면 복제 축소(S02) · US D1 `hero` 복제 축소(S03, "초기 가설" 표기) · KR 컴포넌트 인스턴스(S05 · S06). 원본은 수정하지 않았다.
- **사실 정정**: 젤 카야노 33 계열 카드 수 "15장 이상" → **14장**(기본 6 + 2E 4 + 4E 3 + 플래티넘 1). Case Study S04와 문서는 14로 고쳤다. **KR 원본 D2 `1967:2913`의 안내 타일에는 아직 "15장 이상"이 남아 있다** — 이번 STEP에서 KR 원본은 SOURCE ONLY라 고치지 않았다(S02 축소 복제본에도 같은 문구가 아주 작게 보인다). 수정 승인이 필요하다.
- 보호 기준(STEP 2부터): KR 원본 `cdbd4a09:1878` · US 보관본 `3c62fb4a:1572` · 05 Page 기존 45개 노드 `eba103b6` · 기존 4종 `692555fc / c098f8fd / f3b292eb / 03b1d638`. 측정 조건: `skipInvisibleInstanceChildren = true`, 두 Page loadAsync 후 현재 Page를 자동화 → 05 순으로 전환, 워밍업 1회 뒤 측정(첫 측정은 인스턴스 내부가 덜 읽혀 값이 달라질 수 있음).
- 다음: STEP 3 — S07–S11. Root는 세로 Auto Layout이라 섹션을 뒤에 추가하면 높이가 늘어난다.

### STEP 3 (2026-10-03) — Page Migration + S07–S10 COMPLETE
- **Page 규칙**: PORTFOLIO_03의 모든 WRITE는 Page `1716:2382`(자동화)에서만 한다. `05_Portfolio_CaseStudy`(1271:1726)는 READ ONLY다. 자동화가 05 Page를 작업 대상으로 고르지 않는다.
- **Current Case Study Master**: Page `1716:2382` · Root `PORTFOLIO_03_CASE_STUDY_KR` **1986:7083** · x 19320 / y 1685 · 1920×22193 (PORTFOLIO_03_WORK 오른쪽 1200)
- **legacy_read_only_case_study_source**: Page `1271:1726` · Root `1980:5879` (STEP 2에서 잘못된 Page에 생성, S01–S06만 있음, D2 축소본에 "15장 이상"이 남아 있음). 수정·삭제·이동 금지, 백업으로 보존. fingerprint `5b001da2:2376`. 위 "STEP 2" 항목의 Root/섹션 노드 ID는 이 legacy 기준이다.
- 섹션(Master): S01 `1986:7084` · S02 `1986:7189` · S03 `1986:7932` · S04 `1986:8030` · S05 `1986:8104` · S06 `1986:8178` · S07 `1987:8287`(3023) · S08 `1987:8565`(3788) · S09 `1988:8863`(2821) · S10 `1988:9156`(2466)
- **사실 정정 반영**: KR D2 `1967:2913` 안내 타일 "15장 이상의 카드로" → "14장의 카드로"(텍스트 1개만 변경, 1줄 차이 확인). Master S02의 D2 축소본을 정정본으로 교체. Master 전체와 KR 원본에서 "15장" 검색 결과 0.
- S07: D1 레인 5개 대형 크롭 + 주석 3 + D2 유형 탭·필터 크롭("제안" 캡션). S08: 14장 → 1장 다이어그램 + D2 카드 크롭 + 비교 트레이 + D3 비교 화면 전체(주석 2). S09: D4 상품명~구매 영역 대형 크롭(A–D) + 상태 줌 2(컬러 · 발 너비) + 대표 상품 교체 캡션. S10: M5 첫 844px(접힘선) + M6 전체(고정 구매 바) + Desktop → Mobile 4항목.
- 보호 기준(STEP 3부터): KR 원본 `51af7d7b:1878`(D2 정정 후) · US 보관본 `3c62fb4a:1572` · 05 Page 기존 45개 `eba103b6` · legacy Root `5b001da2:2376` · 기존 4종 동일. 05 Page 최상위 46개, 자동화 Page 최상위 47개.
- 복제 방식: `node.clone()`은 현재 Page에 붙으므로 현재 Page를 `1716:2382`로 둔 상태에서만 복제한다(05 Page 쓰기 0).
- 다음: STEP 4 — S11 Outcome & Reflection.

### STEP 4 (2026-10-03) — S11 + FINAL QA PASS · READY FOR FINAL EXPORT
- Master: Page `1716:2382` · Root **1986:7083** · x 19320 / y 1685 · 1920×**23942** · 섹션 11개. legacy(`1271:1726` / `1980:5879`)는 READ ONLY 그대로(fingerprint `5b001da2:2376` 동일).
- S11 `1992:9253`(1863): 헤드라인 "바꾼 것은 화면보다 구조였습니다." · Outcome 3(유형 연결 · 카드 통합 · 흐름 재구성) + 모바일 보조 1줄 · Reflection 4 · 한계 4 · 다음 검증 3. 성과 수치 없음.
- 압축: S05 결정 설명 3줄 삭제(S07–S09 헤드라인과 중복) · S08 "한 장 안에서 확인합니다." 삭제 · S10 M5 보조 문장 삭제(Desktop → Mobile 항목과 중복). Root 22193 → S11 추가 23976 → 압축·서체 정리 후 23942.
- 서체 정리: 48px 초과였던 S05 단계명 · S08 화살표 · S06 서체 견본 2종을 48px로 낮춤. 48px 초과는 헤드라인 · 번호 · 수치와 그 단위에만 남음.
- 최종 감사: 직접 작성 텍스트 343개 승인 스케일 위반 0 · 한글은 전부 Noto Sans KR(라틴 서체에 한글 0) · Missing Font 0 · Image Fill 0 · 깨진 Vector 0 · 섹션 Root 경계 이탈 0 · 빈 Frame/임시 Node 0 · 금지 표현 0 · "15장" 0 · US 용어는 S03에만.
- 보호: 기존 4종 · US 보관본 · KR 원본(`51af7d7b:1878`) · 05 Page 45개(`eba103b6`) · legacy Root 모두 동일. 05 Page 쓰기 0.
- 다음: STEP 5 — Final Export(별도 지시).

### STEP 5 (2026-10-03) — FINAL EXPORT · FINAL MASTER LOCK
- **FINAL MASTER**: Page `1716:2382` · Root `PORTFOLIO_03_CASE_STUDY_KR` **1986:7083** · 1920×23942 · 섹션 11개 · fingerprint `7caa5071:4354`. **final_master: true** — 명시적인 수정 요청 없이는 자동화가 이 Root를 변경하지 않는다.
- **Final PDF**: `output/portfolio-03/PORTFOLIO_03_ASICS_KOREA_CASE_STUDY.pdf` · 10,233,281 bytes(약 9.8MB, 20MB 이하 — 최적화 없이 원본 품질 그대로) · 1페이지 1920×23942pt · Export Source Node 1986:7083 · 2026-10-03 · SHA-256 `bc0c111f8064d3532afa2f4a866de144208f73532d210c7f69d911803ebf4cdb`
- **Export QA: PASS** — 실제 PDF를 열어 S01 · S04 · S08 · S09 · S10 · S11과 전체 보기를 확인. 잘림 · 흰 줄 · 빈 간격 없음, 한글 · 작은 캡션 · 가는 선 · 주석 정상. Targeted Fix 없음. 디자인 WRITE 0.
- 알아 둘 점: PDF 안의 글자는 벡터 글리프(Type3)라 확대해도 선명하지만, 한글은 PDF에서 텍스트로 검색 · 복사되지 않는다. PDF에 작은 래스터 2개(그림자 효과)가 포함된다.
- **Legacy Root**: Page `1271:1726` · `1980:5879` · legacy_read_only_case_study_source · 삭제하지 않음(fingerprint `5b001da2:2376` 동일). 삭제 · 보관 판단은 별도 승인 후.

### PRODUCT IMAGE REPLACEMENT (2026-10-03) — READY FOR VISUAL REVIEW
- 사용자 승인 Visual Asset Upgrade. 벡터 실루엣 → **AI 생성 컨셉 제품 이미지(PNG 10종)**. 실제 아식스 제품 사진이 아니며, 화면과 Case Study의 "컨셉 일러스트" 문구는 그대로 둔다(카피 정리는 별도 STEP).
- Source: Page `1716:2382` · Frame "사용할 이미지" `1999:9253`(수정 없음, fingerprint `d8e1ed84:11` 전후 동일). 10장 모두 1774×887, 투명 배경.
- 방식: 제품별 이미지 컴포넌트 10개를 `KR_07_PRODUCT_IMAGES`(KR 화면 줄 끝, kr-screens 안)에 만들고, 기존 `product-silhouette` 인스턴스를 제품별로 `swapComponent`. 보이는 신발 높이를 10종 모두 같게 맞춤(컴포넌트 600×260 기준 높이 250, 바닥선 통일). 레이아웃 · 텍스트 · 데이터 변경 없음.
- 교체 수: KR 화면 26(D1 11 · D2 5 · D3 3 · D4 1 · M5 5 · M6 1) · Case Study 63(S01 10 · S02 26 · S06 1 · S07 15 · S08 4 · S09 1 · S10 6). 남긴 벡터: KR 디자인 시스템(미수정 지시) · S06 컨셉 일러스트 타일 3개(설명 유지 지시) · S03 미국 초기 가설 썸네일.
- Master Root `1986:7083`: 크기 1920×23942 그대로, fingerprint `adc2d8f8:3724`로 갱신 후 **final_master: true 재확정**. KR 원본 fingerprint `caf2392f:1641`.
- **PDF는 다시 내보내지 않았다** — `output/portfolio-03/PORTFOLIO_03_ASICS_KOREA_CASE_STUDY.pdf`는 교체 전(벡터 실루엣) 버전이다.
- 확인 필요(이미지와 표기가 다른 곳, 텍스트는 수정하지 않음): ① 노바블라스트 6 이미지는 흰색·회색인데 표기는 ENERGY AQUA/WHITE ② M6은 선택 컬러가 WHITE/WHITE인데 이미지는 네이비(젤 카야노 33 이미지가 1종뿐) ③ 글라이드라이드 맥스 2 이미지는 라임 그린(표기 VITAL GREEN/BLACK) ④ D2 · M5의 노바블라스트 카드에서 신발 뒤꿈치가 "전 컬러 품절" 배지와 살짝 겹침.

### FINAL CONTENT UPDATE (2026-10-03) — READY FOR PDF RE-EXPORT
- 범위: Master Root `1986:7083` 안의 카피와 제작 방식 표현만. 제품 이미지 · KR 화면 · UX 구조 · 데이터는 수정하지 않았다.
- 제품 비주얼 표현: "컨셉 일러스트" → "컨셉 제품 비주얼"(작은 UI 캡션은 "컨셉 비주얼"), "PRODUCT SILHOUETTE" → "CONCEPT PRODUCT VISUAL". S01 고지 "제품 이미지는 AI 생성 컨셉 비주얼이며 실제 아식스 제품 이미지가 아닙니다." · S06 설명 "실제 판매 컬러웨이를 참고해 AI로 제작한 비공식 컨셉 제품 비주얼을 사용했습니다." · S06 예시 타일 3개도 현재 이미지로 교체 · S11 한계 "제품 이미지는 AI 생성 컨셉 비주얼". Master 안 UI 복제본의 캡션 42곳도 "컨셉 비주얼"로 정정(S03 미국 초기 가설 썸네일은 기록이라 그대로).
- **KR 원본 화면(1959:2772 등)에는 "컨셉 일러스트" 문구가 그대로 남아 있다** — 이번 STEP은 KR 화면 수정 금지. Master의 복제본과 표기가 다르다.
- S02 메타: 역할 "리서치 · 정보구조 · UI / 자동화 디렉션" · 기간 "2 DAYS / AI AUTOMATION SPRINT"(실제 작업일 기준 · 2026년 10월) · 도구 "Figma / Claude Code · Figma MCP / ChatGPT · AI 이미지 생성"(ChatGPT와 이미지 생성 도구는 사용자 제공 정보).
- S11: "제작 방식 · AI AUTOMATION PROCESS" 블록 추가(메인 카피, 2 DAYS 지표, RESEARCH → STRUCTURE → BUILD → RENDER QA → CASE STUDY → EXPORT, HUMAN / AI AUTOMATION 역할). 무채색 + signal만 사용, 유형 5색 미사용. Reflection은 4개 유지: 자동화 항목을 추가하고 "데이터 기준일"과 "미검증" 두 항목을 하나로 합침.
- Root 1920×24641(이전 23942) · fingerprint `67c19cb5:3767` · **final_master: true 재확정**. PDF는 아직 이전 버전(이미지 교체·카피 수정 전).

### KR SOURCE COPY CONSISTENCY FIX (2026-10-03)
- KR 원본 6개 화면의 제품 이미지 문구만 통일: "컨셉 일러스트" → "컨셉 비주얼", "이미지: 컨셉 일러스트" → "이미지: AI 생성 컨셉 비주얼", D1 레인 주석은 "제품 이미지는 AI 생성 컨셉 비주얼이며 실제 아식스 제품 이미지가 아닙니다."(Master 표기와 동일). 텍스트 21개(D1 3 · D2 6 · D3 4 · D4 2 · M5 5 · M6 1). 남은 "컨셉 일러스트" 0건.
- 이미지 위치 · 화면 높이 · 데이터 변화 없음. Master `67c19cb5:3767` 미변경. KR 원본 fingerprint `8cacb30a:1641`. PDF 미갱신.

### FINAL RE-EXPORT (2026-10-03) — PORTFOLIO_03 COMPLETE
- Source: Master Root `1986:7083`(Page `1716:2382`) 하나 · 1920×24641 · fingerprint `67c19cb5:3767` · final_master: true. 디자인 수정 없음.
- **Final PDF**: `output/portfolio-03/PORTFOLIO_03_ASICS_KOREA_CASE_STUDY.pdf` · 15,997,650 bytes(약 15.3MB, 20MB 이하) · 1페이지 1920×24641pt · SHA-256 `707762f83a32d5e3d0fcf947d957fe3b3e06e69c685d72206968d613e883b228`. 이전 PDF(9.8MB, `bc0c111f…`)를 교체.
- PDF QA: PASS — 실제 PDF를 열어 S01 고지 · S02 2 DAYS · S06 CONCEPT PRODUCT VISUAL · S07–S10 신발 이미지 · S11 제작 방식 / 역할 / 한계 / 다음 검증 / 마지막 줄 확인. 잘림 · 겹침 · 이미지 누락 · 투명 배경 흔적 · 흰 줄 없음. Missing Font 0.

### CONTRIBUTION ACCURACY UPDATE (2026-10-03)
- 범위: Master Root `1986:7083` 안의 역할 문구만. 기여가 실제보다 커 보이지 않게 정리했다. 디자인 · 이미지 · UI · KR 화면 · "프로필 가안"은 수정하지 않았다.
- S02 역할: "리서치 · 정보구조 · UI / 자동화 디렉션" → "AI 워크플로 디렉션 / 프롬프트 · QA / 제품 비주얼 제작 · 선정".
- S11 HUMAN(직접 한 일): 프로젝트 목표 설정 · AI 작업 지시 · 프롬프트 작성 · 결과 검토 · 수정 요청 · 제품 비주얼 생성 · 선정 · 최종 결과 승인.
- S11 AI AUTOMATION(자동화한 일): 리서치 정리 · UX 구조 제안 · UI 디자인 · Figma 구현 · Render QA · 상태 기록 · 문서화 · Case Study Production.
- Reflection 3번째 보조 문구: "…프로젝트 목표 설정, 작업 지시, 결과 검토와 최종 선택은 직접 수행했습니다." 제목은 그대로.
- 레이아웃: 항목 수가 늘어 S11 역할 항목 줄 2개만 두 줄로 감기게 했다(`layoutWrap: WRAP`, 줄 간격 10). S11 2529 → 2561, Root 1920×24673(이전 24641). 다른 섹션 높이는 그대로.
- "직접 설계" · "정보구조와 디자인 결정" · "리서치 · 정보구조" 남은 곳 0건. Render QA(S02 · S11 · Full Root) PASS.
- Master fingerprint `6dbe2974:3782` · **final_master: true 유지**. **PDF는 다시 내보내지 않았다** — `output/portfolio-03/…CASE_STUDY.pdf`(`707762f8…`)는 이 수정 전 버전이다.

### FINAL CONTRIBUTION VERSION EXPORT (2026-10-03) — PORTFOLIO_03 COMPLETE
- Source: Master Root `1986:7083`(Page `1716:2382`) 하나 · 1920×24673 · fingerprint `6dbe2974:3782` · final_master: true. 디자인 · 카피 · 이미지 수정 없음.
- **Final PDF**: `output/portfolio-03/PORTFOLIO_03_ASICS_KOREA_CASE_STUDY.pdf` · 16,052,933 bytes(약 15.3MB, 20MB 이하) · 1페이지 1920×24673pt · SHA-256 `83f072912764c63ed7359264bf864fba46e0e8c1475769b838c6ce3d38f84328`. 이전 PDF(`707762f8…`)를 교체.
- PDF QA: PASS — 실제 PDF를 열어 S02 역할(AI 워크플로 디렉션 / 프롬프트 · QA / 제품 비주얼 제작 · 선정) · 2 DAYS / AI AUTOMATION SPRINT · S11 HUMAN 5항목 / AI AUTOMATION 6항목 · Reflection 수정 문구 · 한계 / 다음 검증 · 마지막 줄 확인. 잘림 · 넘침 · 이미지 누락 없음. Missing Font 0.
