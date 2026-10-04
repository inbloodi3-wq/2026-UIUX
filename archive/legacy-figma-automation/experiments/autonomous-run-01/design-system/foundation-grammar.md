# Foundation Grammar — AUTORUN_01

- source: `4IjbcMoAkTyWkoacnVAmNe` / Page `자동화` (`1716:2382`) — READ ONLY, `frozen_scopes` 42 Frames
- measured_at: 2026-09-30
- method:
  - Geometry: `get_metadata(1716:2382)` — 42 Frames 전체 (1920×1080)
  - Text Styles: `get_variable_defs` — 11 Frames 표본 (`1880:4717, 4735, 4738, 4788, 4843, 4889, 4925, 4954, 4968, 5070, 5122`)
- role: **Craft Calibration (CRAFT BASELINE, NOT a visual template)**

> 신뢰도 표기: **[M]** 도구가 반환한 실측값 · **[D]** 실측 좌표/크기에서 산술로 도출한 값 · **[I]** 텍스트 높이 ÷ (size × line-height)로 추론한 Layer↔Style 대응(미검증, `get_design_context`로 후속 확인 가능).
> 원본 Layout · Column 구조 · Graphic 배치 · Color Scheme · Composition은 기록 대상이 아니며 새 프로젝트에 강제하지 않는다.

## 1. Typography

### 1-1. Text Style Ladder [M]
| Style | Family | Weight | Size | Line height | Letter spacing* |
|---|---|---|---|---|---|
| Title | Inter | Bold 700 | 96 | 1.20 | -2 |
| Header 1 | Inter | Bold 700 | 60 | 1.20 | -2.2 |
| Header 2 | Inter | Bold 700 | 48 | 1.20 | -2 |
| Header 3 | Inter | Bold 700 | 36 | 1.32 | -2 |
| Body 1 | Inter | Regular 400 | 36 | 1.40 | -1 |
| Body 2 | Inter | Regular 400 | 30 | 1.36 | -1 |
| Body 3 | Inter | Regular 400 | 24 | 1.34 | -0.5 |
| Note | Inter | Regular 400 | 20 | 1.40 | 0 |

\* letterSpacing 단위(px / %)는 도구 출력에 명시되지 않아 **미검증**이다. 방향(부호)만 신뢰한다.

### 1-2. 관계 (Grammar) [D]
- **인접 단계 비율**: 96→60 1.6× · 60→48 1.25× · 48→36 1.33× · 36→30 1.2× · 30→24 1.25× · 24→20 1.2×
  - 상위(Display 구간)는 큰 점프(1.6×), 하위는 **1.2–1.33×** 촘촘한 단계.
- **Heading ÷ Body 대비**
  - Header 2 ÷ Body 3 = **2.0×**
  - Header 3 ÷ Body 3 = 1.5×
  - Header 1 ÷ Body 2 = 2.0×
  - Title ÷ Body 1 = 2.67×
  - Title ÷ Body 3 = 4.0×
  - → 같은 블록 안 Heading/Body 대비 **Range 1.5–2.7×**, Display 대비 최대 4×.
- **Weight**: 2단계만 사용(700 / 400). 위계는 크기 + Weight 이원으로 만든다.
- **Line height**
  - Heading 1.20–1.32
  - Body 1.34–1.40
  - → 크기가 클수록 촘촘하게.
- **Letter spacing**
  - Heading -2 ~ -2.2 (가장 촘촘)
  - Body -0.5 ~ -1
  - Note(20) 0
  - → 크기가 클수록 음수 폭 증가, 최소 크기는 0.

### 1-3. Layer 이름 ↔ Style 대응 [I]
Layer 이름(H1/H2/H3 Medium/Body)은 Style 이름과 일치하지 않는다. 높이 기준 추론:

| Layer | Style | 근거 (높이 = size × LH × 줄 수) |
|---|---|---|
| H1 115 | Title | 96×1.2 = 115.2 |
| H1 50 | Body 1 | 36×1.4 |
| H2 58 | Header 2 | 48×1.2 = 57.6 |
| H2 72 | Header 1 | 60×1.2 |
| H3 Medium 48 | Header 3 | 36×1.32 = 47.5 |
| Body 32 / 64 | Body 3 ×1 / ×2줄 | 24×1.34 = 32.2 |
| Body 82 / 123 | Body 2 ×2 / ×3줄 | 30×1.36 = 40.8 |
| H3 Regular 100 / 200 | Body 1 ×2 / ×4줄 | 36×1.4 = 50.4 |
| Body 2 41 | Body 2 ×1 | 30×1.36 = 40.8 |

→ 본문 블록은 **1–4줄**로 제한되어 있다(최대 관측 4줄).

### 1-4. Paragraph / Text spacing [D]
| 관계 | 간격 |
|---|---|
| Title(96) → Subtitle/Body 1 | 24 |
| Header 2 → Body | 24 |
| Header 1(72) → Body | 16 |
| Header 3 → Body 3 | 16 |
| Eyebrow Body(48) → Header 2 | 24 |
| Title-block 내부 다단(Title → Body 1 → Body 3) | 24 / 24 |

- **Heading–Body 간격 Range 16–24** (≈ Body 크기의 0.67–1.0×).
- 큰 Heading일수록 24, 작은 Heading은 16.

## 2. Spacing [D]

| 항목 | 값 | 근거 |
|---|---|---|
| Outer margin (좌/우) | **128 = 폭의 6.7%** | 대다수 Frame의 콘텐츠 x=128, 우측 끝 1792(=1920-128) |
| Outer margin (상/하) | **128 = 높이의 11.9%** | 상단 Title y=128, 하단 끝 952(=1080-128) |
| Safe content region | **1664×824 (86.7% × 76.3%)** | — |
| Column gutter | **64 (폭의 3.3%)** | 2·3·4열 모두 64 (예: 512.33+64, 367.75+64, 800+64) |
| Column gutter 예외 | 72 | 2열 텍스트(796+72) |
| Column gutter 예외 | 0 | Team grid 288 |
| Title → 본문 그룹 | 88–89 | 상단 Title 구조 (y186 → 274/275) |
| Title → 본문 그룹 (고밀도 grid) | 136 | Team grid |
| 수직 스택 텍스트 블록 사이 | **74–98** | pitch 170–226 |
| 이미지/박스 → 캡션 블록 | 40 | Rect 하단 727 → Text 767 |
| 카드 내부 padding | 48 (≈ 128의 3/8) | Label Card, 좌·상 |

- 스케일 관계: 128 ≈ 64 × 2, 88 ≈ 64 + 24, 24 / 16은 Text 간격 단위.
- **Spacing Token Candidate: 16 · 24 · 40 · 48 · 64 · 88 · 128** (반복 관측값).

## 3. Composition Foundation [D]

### Alignment discipline
- 좌측 기준선 x=128 공유가 지배적이다.
- 우측 끝선 1792에 콘텐츠를 맞춘다.
- 중앙 정렬은 Cover형(1200 블록 x=360 좌우 대칭) 등 일부에 한정된다.
- 관측된 미세 오차 1–3px(x=125, 127)은 **따르지 말 것**(원본 결함).

### Text measure
| 유형 | 폭 | 비율 |
|---|---|---|
| 분할 구성 텍스트 컬럼 | 560–710 | 29–37% |
| 단일 본문 블록 | 796–982 | 41–51% |
| Display 타이틀 | 1200 | 62.5% |
| Full-width Heading | 1584–1664 | 83–87% (한 줄 Heading에만 사용) |

- **본문 Measure 상한 ≈ 51%**. 그 이상 폭은 1줄 Heading에만 쓰인다.

### Information hierarchy
- 한 Frame 안의 텍스트 위계는 **2–3단계**(Heading / Sub / Body)이다.
- 4단계 이상 관측 없음.

### Density balance
| 밀도 | 기준 | 해당 Frame |
|---|---|---|
| Airy | 텍스트 블록 1개, 1–3줄, 콘텐츠 면적 ≪ Safe region | 4717, 4721, 4723, 4727, 4731, 4843 |
| Normal | 블록 2–4개, gutter 64 | 대다수 |
| Dense | 반복 요소 ≥5 | Team 11명 grid 5122, Timeline 5블록 4889, 4열 grid |

- Dense Frame도 Outer margin 128과 gutter 규칙은 유지된다(Team grid만 x=96 예외).

## 4. Safety Lines (Foundation FAIL 기준)
1. 본문 Line height **≥ 1.34**, Heading **≥ 1.2**.
2. 같은 블록 Heading/Body 크기 대비 **≥ 1.5×**. 이하로 떨어지면 위계 붕괴로 본다.
3. 본문 블록 Measure **≤ Frame 폭의 약 51%**, 한 블록 **≤ 4줄**(Slide 기준). 웹 본문은 이후 Viewport별로 재계산한다.
4. Heading→Body 간격 **16–24 이상**. 블록 사이 간격은 블록 내부 간격보다 커야 한다(74–98 vs 16–24).
5. Outer safe margin 비율(폭 ≈ 6.7%, 높이 ≈ 11.9%) 안에 **읽어야 하는 텍스트**를 둔다.
6. 한 화면 텍스트 위계 **≤ 3단계** 권장. 초과하면 근거가 필요하다.

## 5. Flex Zone (Expressive Direction이 넘어설 수 있는 것)
- **Full-bleed**: 원본에도 Full-bleed 이미지 존재(0,0 1920×908 / 우측 반면 952×1080). 이미지·Artwork·색면은 Safe margin을 무시해도 된다. 단 텍스트는 Safety Line 5를 지킨다.
- **Display 크기**: 96 초과 가능(Expressive Typography). 단 Line height ≥ 0.9–1.0 수준의 Display 예외는 visual-language.md에 근거를 기록한다.
- **Grid**: 비대칭, Overlap, Off-grid 배치 가능. 기준선 공유(Alignment discipline)만 유지한다.
- **Color / Artwork / Composition**: 원본의 Black/White/Grey(#cfcfcf) 무채색 구성은 **Reference 고유 스타일이며 기본값이 아니다**. AUTORUN_01의 Portfolio Gap(strong color, artwork, expressive typography, experimental composition)에 따라 새로 정의한다.

## 6. Not Extracted (의도적 제외)
- 원본 Frame의 Layout, Column 구조, 좌우 분할 위치, Diagram·Mockup 배치, Color Scheme, 동일 Composition
- 폰트 Inter 자체: 한글 미지원이므로 새 프로젝트 서체는 Visual Direction에서 결정한다(비율·간격만 이전).

## 7. Viewport 환산 (적용 시)
Slide 1920×1080 기준값은 **비율로만** 옮긴다.
- 예) Outer margin 6.7% → Desktop 1440에서 ≈ 96.
- 실제 웹 토큰은 Design System 단계에서 확정한다(이 문서에서 확정하지 않음).

## Open Items
- letterSpacing 단위 확인
- Layer↔Style 대응 [I] 확인(`get_design_context`)
- 표본 외 31개 Frame의 Style 사용 여부
