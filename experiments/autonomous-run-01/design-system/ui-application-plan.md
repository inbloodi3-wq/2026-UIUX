# UI Application Plan — AUTORUN_01

- Scope: 전시 목록, 전시 상세 × Desktop 1440 / Mobile 390. 예약·결제·로그인은 제외한다.
- 목적: Pain P1–P3 해결(`../research/ux-strategy.md`)과 Visual Direction "Line of S" 적용.
- 토큰: `design-tokens.md`
- **Figma 쓰기 규칙**(`config` / `state` 기준): 쓰기는 `AUTORUN_01_WORK`(1889:1910) 하위에서만 한다. 매번 Write Pre-check와 fingerprint 전후 비교를 거친다.

## Screen IDs
| Screen ID | 화면 |
|---|---|
| `c-exhibitions.desktop` | 목록 Desktop |
| `c-exhibitions.mobile` | 목록 Mobile |
| `c-exhibition-detail.desktop` | 상세 Desktop |
| `c-exhibition-detail.mobile` | 상세 Mobile |

**Master Screen**: `c-exhibitions.desktop`
- 선택 이유: Line 모티프, 분관 컬러, 목록 비교 UX를 한 화면에서 모두 검증할 수 있다.

## 1. Exhibition List — Desktop 1440

### Visual Hierarchy
1. Display "전시" (120 / 900)
2. **Line + Station 9개**(전체 + 8분관): 분관 필터를 겸한다
3. 보조 필터 행: 기간 프리셋 진행중·곧 종료·예정, 대상, 무료 토글, 정렬(곧 종료순·최신순), Grid/List 전환
4. 결과 수 + 적용된 필터 요약: 칩은 사용자가 실제로 선택한 것만 표시한다(P2)
5. 카드 그리드

### Information Density
- 4열 카드 · gutter 24
- 카드 구성:
  - 커버 4:5
  - eyebrow: 기획 접두어. P3 대응으로 제목에서 분리한다
  - 제목(《 》, subheading 28)
  - 메타 1줄: 분관 Tag + 기간 caption
  - 상태 라벨
- 첫 화면(900 높이 가정)에서 카드 윗부분이 보이도록 헤더 높이를 ≤ 420으로 제한한다.

### Artwork Placement
- Line은 헤더에서만 쓴다.
  - 좌측 제목 베이스라인에서 출발해 Station을 지나 우측 화면 밖으로 나간다(비대칭).
- 카드 커버는 Cover Artwork(분관색 면 + 선 조각 + 《 》 음절)로 채운다.

### Color Usage
- 배경: paper. 카드: surface.
- 분관 컬러는 Station, Tag, 커버에만 쓴다.
- 선택된 Station은 크게 표시하고 체크를 넣는다. 결과 카드는 그대로 두고, 필터 요약 칩에만 반영한다.

### Interaction (P1)
- 모든 카드는 `<a href="/…/exhibition/detail?exNo=…">` 표준 링크다.
- 필터 상태는 URL 쿼리에 반영한다.
- Figma에서는 링크 주석(Annotation)으로 표기한다.

## 2. Exhibition List — Mobile 390

### Visual Hierarchy
1. Display "전시" (56)
2. **Sticky Station Bar**: Line + Station 가로 스크롤
3. "필터·정렬" 버튼 → Bottom Sheet
4. 결과 수
5. 목록

### Information Density (P3)
- 기본: **Compact List**
  - 행 구성: 커버 썸네일 88×110(4:5) + 텍스트
  - 목표 행 높이 ≤ 132
  - 목표: 첫 화면에 5건 이상. 현행은 약 1.7건 [D]
- Grid 전환 시: 1열 큰 커버

### Artwork Placement
- Station Bar의 Line은 8px 두께로, 좌우 스크롤 시 이어진다.
- 목록 행에는 Line을 쓰지 않는다.

### Responsive Behavior
- Desktop 4열 → Mobile 리스트(Reflow)
- 헤더 Line → Sticky Bar(Priority 유지: 분관 선택이 항상 접근 가능)

## 3. Exhibition Detail — Desktop 1440

### Visual Hierarchy
1. breadcrumb("전시 / 사진미술관")
2. **Hero**
   - 좌 7/12: eyebrow + 《제목》 display 120. 두 줄 허용, 괄호는 weight 400
   - 우 5/12: 커버 4:5
3. **사실 패널**: 기간 · 장소(분관 + 층) · 관람시간 · 요금 · 공유(URL 복사)
   - 스크롤 시 우측 고정(sticky)
4. 본문 섹션: 전시 소개(요약 3줄 + "더 보기") → 작품 → 관련 전시(같은 분관 / 곧 종료)
   - 현행 상세 소개가 약 1,200단어 이상[W]이므로 첫 화면에는 요약만 둔다.

### Artwork Placement
- Line이 헤더 좌측에서 내려와 S자 1회를 그리고 **사실 패널 좌측 모서리로 들어간다**.
- 전달하는 의미: "도착할 곳 = 관람 정보"

### Color Usage
- 해당 분관 1색만 쓴다: 사실 패널 상단 띠, Tag, 커버.
- 나머지는 ink / paper.

### Out of Scope 처리
- 예약 폼은 배치하지 않는다.
- "관람 예약은 공식 사이트에서"라는 텍스트 링크 자리만 주석으로 표시한다.

## 4. Exhibition Detail — Mobile 390

### Visual Hierarchy
1. 뒤로(목록 상태 유지 전제)
2. eyebrow + 《제목》 display 56
3. 커버 1:1
4. **사실 카드**(기간·장소·시간·요금). 첫 화면 안에 기간과 장소가 보이도록 한다.
5. 요약 소개
6. 관련 전시(가로 스크롤)

### Artwork Placement
- Line(8px)이 제목 아래에서 사실 카드 좌측 모서리로 들어가는 L자 1회.

### Responsive Behavior
- Desktop의 좌우 Hero → Mobile 세로 스택: 제목 → 커버 → 사실
- sticky 패널 → 인라인 카드

## Implementation Notes (2026-09-30, STEP 07–08)

| 화면 | Node | 상태 |
|---|---|---|
| Desktop List | 1892:1911 | QA_PASS |
| Desktop Detail | 1896:1910 | QA_PASS |
| Mobile List | 1897:1911 | QA_PASS |
| Mobile Detail | 1898:1910 | QA_PASS |

**계획 대비 변경**
- **Mobile Detail 순서**: 제목 → **핵심 사실 요약(기간·장소·요금)** → 커버 → 소개 → 관람정보 카드
  - 이유: Display 제목이 4줄이라, 커버가 제목 바로 아래에 오면 기간·장소가 첫 화면 밖으로 밀림.
- **Mobile List 밀도**: 첫 화면 약 4.4건(계산값, STEP 11 정정)
  - 목표 5건에는 미달. 현행 약 1.7건(카드 높이 단순 계산)과의 차이는 계산값이며 사용성 개선은 미검증.
- **상세 샘플**: 《마틴 파 : We Are Martin Parr》
  - 기간·장소·관람시간·휴관일·관람료·소개 첫 두 문장은 WebFetch에 원문 인용을 요청해 얻은 값 [W]. 원 HTML과는 대조하지 않음 (STEP 13 정정: 이전 문구 "원문으로 확인함"). → STEP 14: Playwright로 공식 페이지를 직접 열어 대조, 7개 항목 일치 [V] (`../research/why-decision-log.md` D5).

## Asset Rules
- 실제 작품 이미지, 포스터, 전경, SeMA 로고 원본, 작가 사진은 사용하지 않는다.
- 커버는 Cover Artwork 벡터를 Figma에서 직접 생성한다.
  - 외부 이미지 0건 → 권리 검수 대상 없음
  - 생성 Asset으로 manifest 기록 규칙을 따른다.
- 전시명·기간 같은 데이터는 공개 목록의 실제 텍스트를 샘플로 쓸 수 있다.
  - 텍스트 사실 정보이며 이미지는 아니다. 출처는 source-log에 기록되어 있다.

## QA Hooks
각 화면마다 `review-redesign/checklist.md`를 적용한다. Style Convergence 확인 항목:
- Grammar Slide 레이아웃을 복제하지 않았는가
- AIDORA·TJ와 색만 바꾼 형태가 아닌가
- The Line이 보이는가
