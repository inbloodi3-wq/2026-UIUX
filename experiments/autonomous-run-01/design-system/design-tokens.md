# Design Tokens — AUTORUN_01 · SeMA

- Foundation Grammar(`foundation-grammar.md`)는 **완성도 기준**으로만 쓴다. Slide 1920 값은 복제하지 않고 비율로만 환산한다.
- Grammar와 다른 값에는 **Δ 표시와 이유**를 적는다.
- 이 토큰은 **리디자인 제안값**이다. SeMA 공식 브랜드 값이 아니다(`visual-direction.md` §1).

## Typography

### Font
| 구분 | 서체 | 근거 |
|---|---|---|
| 설계 의도 | **Pretendard** | 현행 SeMA 웹 CSS에서 확인[F]. 한글 가독성과 기존 서비스 연속성 |
| Figma 제작용 | **Noto Sans KR** | 이전 프로젝트 기록상 Figma 플러그인에서 Pretendard를 불러올 수 없음(memory: pretendard-plugin-limits). STEP 07 시작 시 `listAvailableFontsAsync`로 실제 사용 가능한지 확인하고, 불가하면 Level 3 Tool Blocker로 기록 |

- **Weight**: 900(Display), 700(Heading), 500(UI Label), 400(Body)
  - Grammar는 700/400 2단계만 사용함
  - Δ: 표현 대비를 위해 900을 추가하고, UI 라벨 식별을 위해 500을 추가함

### Scale
| Token | Desktop (1440) | Mobile (390) | LH | Tracking | 용도 |
|---|---|---|---|---|---|
| display | 120 / 900 | 56 / 900 | 1.0 | -4% | 목록 페이지 제목 "전시", 상세 《제목》 |
| heading | 48 / 700 | 28 / 700 | 1.2 | -2% | 섹션 제목 |
| subheading | 28 / 700 | 20 / 700 | 1.3 | -1% | 카드 제목(목록), 사실 패널 값 |
| body | 18 / 400 | 16 / 400 | 1.6 | 0 | 본문 |
| label | 15 / 500 | 14 / 500 | 1.4 | 0 | 칩, 필터, 메타 |
| caption | 13 / 400 | 12 / 400 | 1.4 | 0 | 기간, 부가정보 |

**Grammar 대비**
- heading ÷ body = 2.67× (Desktop), 1.75× (Mobile) → Grammar 범위(1.5–2.7×) 안에 있음 ✓
- **Δ display**: Desktop 120 ÷ body 18 = 6.7×로, Grammar 최대 4×를 넘는다.
  - 이유: Expressive Typography(Portfolio Gap) 목적. Grammar의 Flex Zone에 해당한다.
  - 조건: 페이지당 display는 1회만 쓴다.
- **Δ display LH 1.0**: Grammar Heading 하한(1.2)보다 낮다.
  - 이유: 초대형 1–2줄 제목에서 줄 사이 공백 과다를 방지하기 위함.
  - 조건: 본문에는 적용하지 않는다.
- **body LH 1.6**: Grammar 하한 1.34 이상 ✓. 한글 본문 가독성 때문에 상향했다.

## Color

### Base
| Token | 값 | 역할 | 대비 |
|---|---|---|---|
| paper | #F4F1EA | 배경 (따뜻한 종이) | — |
| surface | #FFFFFF | 카드, 시트, 패널 | — |
| ink | #121212 | 본문, 제목, The Line | ink on paper **16.6** |
| ink-muted | #5C5A55 | 보조 텍스트(기간, 캡션) | on paper **6.1** |
| line-subtle | #D9D4C8 | 구분선 | 장식용, 정보 전달 안 함 |

### Brand
| Token | 값 | 역할 |
|---|---|---|
| primary | ink #121212 | 정체성은 **선(ink)**이 운반함 |
| secondary | paper #F4F1EA | — |
| accent | **ink #121212** (크기·두께·체크로 강조) | 선택 상태, 주요 링크 강조 |

> **Self Review Fix #1**: 초안에서는 accent를 vermilion #FF4F2B로 두었다. 이 값이 서소문본관 분관 컬러와 같아 "강조/새 전시"를 "서소문본관"으로 오인할 수 있다(D. 강한 컬러가 탐색을 방해). 8색 분관 팔레트가 채도 공간을 거의 다 쓰고 있으므로 **유채색 accent를 따로 두지 않는다**. 유채색은 분관 식별에만 쓴다.

### Venue — 분관 컬러
면(fill) 전용이다. 텍스트는 아래 on-color를 쓴다. 대비는 모두 ≥ 4.5 ✓

| 분관 | fill | on-color | 대비 |
|---|---|---|---|
| 서소문본관 | #FF4F2B | ink | 5.71 |
| 북서울미술관 | #2F4BFF | white | 5.88 |
| 서서울미술관 | #C6F432 | ink | 14.62 |
| 남서울미술관 | #FF3D9A | ink | 5.70 |
| 미술아카이브 | #7B4DFF | white | 4.83 |
| 사진미술관 | #FFB31A | ink | 10.45 |
| 난지미술창작스튜디오 | #00B8A0 | ink | 7.46 |
| 백남준을 기억하는 집 | #4CC3FF | ink | 9.42 |
| (해외·기타 순회) | ink #121212 | paper | 16.6 |

- 해외·기타 순회를 ink로 둔 이유: P2에서 해외 순회가 서울 분관과 섞여 있었다. 서울 분관 8색과 명확히 구분하기 위함이다.
- ⚠ 분관 컬러를 paper 위 **텍스트·가는 선**으로 쓰면 대비가 1.1–5.2로 여러 색이 불충분하다 → 금지한다(`artwork-system.md`).

### Status
색만으로 구분하지 않는다. 항상 텍스트 라벨을 함께 쓴다.

| Token | 표현 | 조건 |
|---|---|---|
| status-ending | ink 면 + paper 텍스트 "곧 종료" | 종료 14일 이내 |
| status-new | surface 면 + ink 2px 외곽선 + ink 텍스트 "새 전시" | 개막 14일 이내 (Fix #1: 분관색 충돌 제거) |
| status-free | ink 1px 외곽선 + ink 텍스트 "무료" | 요금 무료 |
| status-upcoming | line-subtle 면 + ink 텍스트 "예정" | 개막 전 |

- 14일 기준은 Δ 설계 가정이다(검증 데이터 없음).

## Spacing — base 4

**Scale**: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128

| Token | Desktop | Mobile | Grammar 대비 |
|---|---|---|---|
| outer-margin | 96 (1440의 6.7%) | 20 (5.1%) | Grammar 6.7% ✓ / **Δ Mobile**: 390 폭에서 6.7%는 26px인데, 목록 밀도(P3) 때문에 20으로 줄임 |
| section | 128 / 96 | 64 / 48 | Grammar 블록 간격(74–98)보다 넓음 — 웹 스크롤 구간 구분 |
| component | 24 / 32 | 16 / 24 | — |
| heading→body | 16–24 | 12–16 | Grammar 16–24 ✓ / Mobile 하한 12는 label↔caption에만 허용 |
| micro | 4 / 8 | 4 / 8 | — |

## Grid
| Viewport | 구성 |
|---|---|
| Desktop 1440 | 12열 · gutter 24 · margin 96 → 콘텐츠 1248 |
| Mobile 390 | 4열 · gutter 12 · margin 20 → 콘텐츠 350 |

- **Δ gutter 24**: Grammar 64(Slide)보다 좁다. 이유: 목록 카드 4열 비교 밀도. 비율로 환산해도 Slide 여백은 발표용이기 때문이다.

## Graphic Motif — The Line
| 토큰 | Desktop | Mobile |
|---|---|---|
| line-width | 12 | 8 |
| line-radius | 48 | 32 |
| station-size | 36 | 24 |
| station-size (선택) | 54 | 36 |
| station-stroke | ink 2 | ink 2 |
| line-color | ink | ink |

- line-radius = line-width × 4 (90° 원호)
- station-size = line-width × 3
- 선택 상태 = station-size × 1.5

## Border · Shape
- **radius**: 0 — 태그, 카드, 버튼 모두 직각. 원은 Station에만 쓴다.
  - Δ AIDORA와 TJ의 둥근 카드 언어와 차별화한다.
- **border**: 1 ink(칩·입력), 2 ink(Station·포커스 링)
- **focus**: 2px ink 외곽선 + 2px offset

## Image Treatment
- **비율**: 목록 커버 4:5, 상세 커버 4:5(Desktop) / 1:1(Mobile)
- **실제 작품·포스터·전경**
  - 이번 실험에서는 권리 미확보로 사용하지 않는다(Config `project_asset_restrictions`).
  - 제품 적용 시에도 크롭은 `fit` 우선, 색 오버레이는 금지한다.
- **대체**: Cover Artwork(`artwork-system.md` Variation Rules)는 자체 생성하는 벡터다.
  - Figma에 적용하기 전 manifest 등록 규칙(`internal_generated`)을 따른다.
