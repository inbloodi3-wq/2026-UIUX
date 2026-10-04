# Project Definition & Initial UX Strategy — AUTORUN_01

근거는 `current-site-audit.md`와 `../references/reference-index.jsonl`이다. 표기는 **[F]** 사실 / **[H]** 가설·해석이다.

## Project Definition
- **Target service**: 서울시립미술관 SeMA — https://sema.seoul.go.kr/
- **Goal**: 8개 분관에 흩어진 전시를 한 곳에서 **탐색하고, 비교하고, 상세 정보를 확인하는** 경험을 개선한다.
  - 기준 질문: 사용자가 "지금 어디서 무엇을 볼지"를 적은 단계로 결정할 수 있는가.
- **Primary audience [H]** — 인터뷰나 행동 데이터 없이, 공개 사이트 구조에서 추론한 가설이다.
  1. 주말·여가 관람을 계획하는 서울 거주 성인 관람객
     - 근거: 분관(어디서)·기간(언제) 필터가 핵심 축으로 제공됨 [F]
  2. 아이와 함께 방문하는 가족 관람객
     - 근거: "누가" 필터에 어린이·청소년 항목이 있음 [F]
  - 검증 방법(후속): 사이트 공개 통계나 설문 자료 조사, 또는 사용자 테스트
- **Primary user tasks**
  1. 현재 전시 탐색(분관·기간 기준)
  2. 목록에서 전시 비교
  3. 상세에서 기간·장소·관람시간·요금 확인
- **Core flow (1개)**: 전시 탐색 → 목록 비교 → 상세 정보 확인
- **Scope**
  - 포함: 전시 목록(탐색·비교) 화면, 전시 상세 화면. Desktop 1440과 Mobile 390.
  - 제외: 예약·결제·로그인·교육 신청, 비엔날레·사진축제 전용 사이트, 기관 소개

## UX Opportunity → Initial Strategy

| Pain | Opportunity | 초기 전략(가설) | Reference 근거 |
|---|---|---|---|
| P1 목록 링크가 URL이 아님 | 카드마다 실제 URL을 부여 → 새 탭 열기·공유·비교 가능 | 모든 카드를 표준 링크(GET 상세 URL)로 만들고, 필터 상태도 URL에 반영 | Tate: 항목이 표준 하이퍼링크 [W] |
| P2 필터 불일치·판단 단서 부족 | "전시"를 1차 맥락으로 고정하고, 분관·기간을 가장 먼저 노출 | 기본 필터는 "현재 전시 × 전체 분관"만. 분관 칩은 상시 노출(8곳). 상태 라벨(오늘 시작·마감 임박·무료)과 정렬(마감순·최신순) 추가 | Tate: 기간 프리셋, "Only free events" 토글, 요금 상태 표시 [W] · Whitney: "Last chance" 라벨 [W] |
| P3 모바일 스캔 비용 | 카드 밀도를 올리고 비교 정보를 먼저 보여주기 | 제목에서 기획 접두어를 분리해 eyebrow로 내리고, 분관·기간·상태를 한 줄 메타로 표시. 모바일은 compact 목록과 큰 이미지 카드를 전환 | Tate: Grid/List 전환 [W] |

## Portfolio Differentiation
- **기존 Portfolio(사용자 제공)**
  - AIDORA — Quiet Luxury / Minimal Branding
  - TJ MEDIA — Search-first / Photography-led / Clean Editorial UI
- **이번 Gap**: Strong Color, Artwork, Expressive Typography, Distinctive Composition, Visual Storytelling
- **Visual Opportunity [H]** — Visual Direction 단계에서 Candidate 2–3개로 평가하며, 여기서 확정하지 않음:
  - **브랜드 근거 모티프**: MI의 "S = 연결·변화·유연함" [F]과 8개 분관 네트워크 [F]를 연결선과 흐름의 Graphic Motif로 만들 수 있음. 이 모티프가 전달할 메시지는 "분관을 잇는 하나의 미술관"임.
  - **분관 컬러 코딩**: 기능(분관 식별)과 표현(강한 색)을 동시에 충족함. 색은 장식이 아니라 필터와 메타 정보의 식별자 역할을 함.
  - **Expressive Typography**: 전시 제목의 《 》 겹화살괄호를 큰 활자의 타이포 장치로 쓸 수 있음. 한국 전시 표기 관습에 근거함 [F: 목록 제목 표기].
  - **Composition**: 목록은 비교를 위한 규율 있는 그리드를 유지함(UX Clarity 우선). Hero나 상세 첫 화면은 비대칭·레이어 구성을 허용함.
  - Art Direction 근거: Whitney "responsive W" — 로고가 작품과 텍스트에 반응하는 프레임 겸 그리드로 쓰임 [F].
- **제약**: 실제 전시 작품 이미지, 포스터, SeMA 공식 로고 원본은 권리가 불명확하므로 사용하지 않음(Fail Closed). Artwork는 자체 생성한 Graphic System과 Placeholder로 해결함.

## Open Questions (Blocker 아님)
- 뒤로가기 시 목록 상태 유지 여부(P1 영향 범위) — 후속 감사에서 확인
- Art Direction Reference가 Whitney 1건에 치우쳐 있음 → Visual Direction 단계에서 보강
