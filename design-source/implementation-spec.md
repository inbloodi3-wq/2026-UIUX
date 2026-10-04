# Implementation Spec

source: Figma `4IjbcMoAkTyWkoacnVAmNe` (READ ONLY) · read_at 2026-10-04
**상태: PARTIAL — Level 3 결정 3건(G1, G2, G3) 대기. SITE SCAFFOLD를 아직 시작할 수 없다.**

값(Hex, px)은 여기에 적지 않는다. `design-source/extracted-tokens.json`의 Token 이름으로 서술한다.

## 1. Design Source
- Figma Page `자동화` > Section `포트폴리오` > Frame `프로세스`. Node ID는 `frame-map.md`.
- 읽은 방법: Page Metadata 1회(구조 전체, 이후 재사용), 개요 스크린샷 4장(프로필 가안, AIDORA Case Study, 메인페이지, 상세페이지), Node 단위 Design Context 3회(cover, profile, contents), Variable 조회 1회(프로세스 전체).
- **읽지 않은 것**: TJ MEDIA·ASICS KOREA Case Study의 화면 모습(스크린샷 없음, Metadata의 구조와 Text 이름만 확인), 모든 Case Study와 AIDORA 화면의 Node 단위 값, Prototype 연결 정보, 다른 Figma Page.

## 2. Implementation Scope
이 디자인은 Header·Menu를 가진 웹사이트 화면이 아니라, **1920 폭으로 위에서 아래로 이어지는 하나의 포트폴리오 문서**다(총 높이 약 98,000). 구성은 Cover → Profile → Contents → Project 01 AIDORA(Case Study + 결과 화면 4종) → Project 02 TJ MEDIA Case Study → Project 03 ASICS KOREA Case Study.

| 영역 | 분류 | 판단 근거 |
|---|---|---|
| Cover, Profile, Contents | 실제 Website UI | 포트폴리오의 표지·소개·목차. Node 수가 적고 구조가 단순하다 |
| AIDORA Case Study (13 Section) | 실제 Website 콘텐츠(작업 과정 설명) | Contents의 PROJECT 01 Index 01–04에 해당 |
| AIDORA 메인페이지 / 상세페이지 | **SCOPE UNCERTAIN** | 포트폴리오에 넣은 "결과물 전체 화면"으로 보인다. 그 자체가 쇼핑몰 UI(자체 Header·Footer·장바구니 버튼 포함)라서, 사이트 안에 **그림으로 보여 줄 대상**인지 **동작하는 Page로 만들 대상**인지 Figma로는 알 수 없다 |
| TJ MEDIA Case Study (15 Section) | 실제 Website 콘텐츠 | Contents의 PROJECT 02 |
| ASICS KOREA Case Study (11 Section) | 실제 Website 콘텐츠 | Contents의 PROJECT 03 |
| Frame 이름의 "가안" | 확인 필요 | `프로필 가안`이라는 이름이 초안임을 뜻하는지 알 수 없다. 내용은 완성된 모습이다 |
| 숨김 Layer(AIDORA Case Study 7개, TJ 25개) | 구현 제외 | 숨김 상태 그대로 둔다 |
| `자동화` Page의 다른 Node | Reference / Archive | `frame-map.md` "제외" |

## 3. Page Structure
`ia/sitemap.md` 참조. Section 구성은 Figma 그대로 등록했다. Page 분할과 URL은 G1 결정 대기.

## 4. Layout Rules (index)
- 세 Section 모두 `--layout-frame-width` × `--layout-slide-height`의 고정 Slide 구성이고, 안쪽 내용은 세로 가운데 정렬이다.
- **cover**: 배경 Texture 이미지가 Section 전체를 덮는다. 안쪽 영역은 높이 `--layout-cover-inner-height`, 좌우 여백 `--layout-cover-padding-left` / `--layout-cover-padding-right`, 좌우 양끝 정렬. 왼쪽은 제목 묶음(필기체 문구 → 큰 제목 → 이름 → 직함 줄), 오른쪽은 위(연도와 짧은 선)·아래(이메일, 지역) 양끝 배치.
- **profile**: 어두운 Page 바탕(`--color-profile-page`) 위에 Card(`--layout-profile-card`, `--radius-profile-card`, `--shadow-profile-card`, 테두리 `--color-profile-card-border`)가 가운데 놓인다. Card 안은 2단: 왼쪽 Aside(`--layout-profile-aside-width`: 사진, 이름, 생년월일, 구분선, 연락처)와 오른쪽 정보(한 줄 소개, 그 아래 `--space-profile-intro-to-body` 떨어져 2×2 묶음: Experience / Career, Tools / Character). 단 사이 간격 `--space-profile-columns-gap`.
- **contents**: cover와 같은 Texture 배경. 안쪽 `--layout-contents-inner`, 2단: 왼쪽(`--layout-contents-left-width`: Eyebrow와 필기체 "Contents")과 오른쪽(`--layout-contents-right-width`: Project Group 3개, 간격 `--space-contents-groups-gap`). Project Group = 제목 줄(높이 `--layout-contents-project-row-height`, 아래 선 `--color-contents-rule`) + Index 4열(`--layout-contents-index-column-width`, 양끝 정렬).
- AIDORA Case Study만 폭이 `--layout-case-study-aidora-width`로 좁고 1920 안에서 가운데에 놓인다. 다른 Case Study는 1920 전체 폭이다.

## 5. Typography Rules
- 서체 5종이 역할별로 나뉜다: `--font-display`(영문 제목·Label), `--font-script`(필기체 강조: cover 문구, "Contents", profile의 묶음 제목), `--font-serif`(cover의 이름 한 곳), `--font-kr-heading`(profile 이름·연락처), `--font-kr-body`(profile 본문·날짜).
- 한글/영문 혼용: 영문 Label과 제목은 `--font-display`, 한글 문장은 `--font-kr-body`. profile의 이름과 연락처만 `--font-kr-heading`이다.
- 영문 Label은 대문자 + 넓은 자간이 기본이다(`--text-cover-caption`, `--text-contents-eyebrow`, `--text-contents-caption`, `--text-contents-number`). Contents의 항목 줄은 Capitalize다(`--text-contents-item`).
- 위계(index): `--text-cover-title` > `--text-contents-title` > `--text-cover-script` > `--text-profile-name` > `--text-cover-name` = `--text-contents-project` = `--text-profile-heading` > 본문 16–20 > Caption 14.
- Case Study 쪽은 Figma Text Style이 정의되어 있다(`extracted-tokens.json`의 `figma_variables`: Outfit 15종, SUIT 12종, Pretendard 26종). Node와의 대응은 아직 하지 않았다.

## 6. Color Rules
- index는 두 가지 면이 번갈아 나온다: 밝은 종이 Texture(cover, contents — 글자는 `--color-cover-text` 계열의 어두운 색)와 어두운 Card(profile — 글자는 `--color-profile-heading` / `--color-profile-body` / `--color-profile-muted` 3단).
- Accent Color는 index에 없다. 강조는 서체(필기체)와 크기로 한다.
- 선은 모두 반투명 Hairline이다(`--color-contents-rule`, `--color-profile-divider`, `--color-profile-card-border`).
- Gradient: profile 바탕이 Gradient 두 겹으로 되어 있으나 결과는 단색이다(실제 Gradient 표현 없음).
- AIDORA 계열 색은 Figma Variable `color/Main/*`, TJ MEDIA Case Study 색은 `color/*`(Accent 포함)로 정의되어 있다.

## 7. Spacing Rules
- index의 간격은 Auto Layout Gap으로 정의되어 있어 그대로 옮길 수 있다. 반복되는 값: 묶음 제목과 목록 사이(`--space-profile-block-gap`, `--space-contents-group-gap`, `--space-contents-heading-gap`이 같은 값), 2단 사이(`--space-profile-row-columns-gap`, `--space-contents-columns-gap`이 같은 값).
- Section 사이 간격은 없다. 1080 높이 Section이 틈 없이 이어진다.
- Case Study의 Section 높이는 제각각이다(480–3788). 세로 Rhythm은 Section 내부 구성에 따른다.

## 8. Component Strategy
| 이름(Class 후보) | 반복 | 변형 | Responsive | Interaction | 구현 |
|---|---|---|---|---|---|
| `contents-project` (Project Group) | 3 | 없음 | 디자인 없음 | 링크 후보(G1) | Component |
| `contents-index` (Index Column) | 12 | 없음 | 디자인 없음 | 없음 | Component |
| `history-item` (기간 + 이름 + 설명) | 5 | 설명 유무 | 디자인 없음 | 없음 | Component |
| `tool-card` | 5 | 없음 | 디자인 없음 | 없음 | Component |
| `script-heading` (필기체 묶음 제목) | 4 | 없음 | 디자인 없음 | 없음 | Component |
| cover의 제목 묶음, profile의 Aside, Character 목록 | 1 | — | — | — | Component로 만들지 않고 Section 안에서 직접 작성 |

Figma Component Instance는 index에 없다(전부 Frame). ASICS Case Study에만 Instance 207개가 있다. Case Study의 Component 분석은 G2 결정 후에 한다.

## 9. Asset Strategy
이번 단계에서 내려받거나 Export한 Asset은 없다. 아래는 목록이다.

| Asset | 쓰이는 곳 | Figma Node | 예상 형식 | 권리 분류 | 재사용 |
|---|---|---|---|---|---|
| paper-texture (밝은 종이 질감 + 왼쪽 검은 띠) | index#cover, index#contents | `2025:7133`, `2012:9390` 배경 | 사진 → JPG/WebP | **NEEDS RIGHTS CHECK** — 출처 기록 없음 | 2곳 (같은 이미지로 보이며 1개로 관리) |
| profile-photo (증명사진) | index#profile | `2025:7158` | JPG/WebP | SAFE / USER PROVIDED 후보 — 본인 사진임을 사용자가 확인하면 승인 | 1곳 |
| AIDORA 제품·공간 이미지 다수 | aidora 전 Section | 이름 붙은 이미지 Node 22개 + 배경 Fill(미집계) | JPG/WebP | **NEEDS RIGHTS CHECK** — 직접 제작(AI 생성 포함)인지 확인 필요. Cover에 "AI Image Tools" 표기가 있음 | 여러 곳 |
| AIDORA 로고·심볼 | aidora | Vector 18개 | SVG | SAFE / USER PROVIDED 후보(자체 브랜드) | 여러 곳 |
| AIDORA Case Study의 시장 통계 Chart 2개 | aidora#cs-desk-research | `2025:7351`, `2025:7394` | 이미지 또는 재작성 | **NEEDS RIGHTS CHECK** — 수치 출처 표기가 화면에 있음. 출처 표기 유지 필요 | 1곳 |
| AIDORA 화면 속 Icon(검색·언어·계정·장바구니) | aidora#ui-* | `2025:9215` 등 | SVG | NEEDS RIGHTS CHECK — Icon Set 출처 미확인 | 여러 곳 |
| TJ MEDIA Case Study의 이미지 | tj-media | 이름 붙은 이미지 Node 115개 | JPG/WebP | **NEEDS RIGHTS CHECK** — 현행 tjmedia.com 화면 캡처(타사 사이트), Album Art 형태 이미지 포함. `archive/legacy-figma-automation/legal/image-provenance-todo.md`에 출처 미확인 TODO 8건이 남아 있다 | 여러 곳 |
| ASICS KOREA Case Study의 이미지·Vector | asics-korea | Instance 207, Vector 23, 이미지 Fill 미집계 | JPG/WebP/SVG | **NEEDS RIGHTS CHECK** — ASICS 브랜드명·현행 사이트 캡처 가능성, 제품 이미지는 AI 생성 컨셉으로 기록되어 있음 | 여러 곳 |
| Tool Card의 기호(Ps, Ai, F, N, ✦) | index#profile | `2025:7229` 등 | Text(이미지 아님) | SAFE — 제품 로고가 아니라 글자로 표기되어 있다 | — |
| Video / Animation | — | 없음 | — | — | — |

권리 분류는 후보 판단이며 승인이 아니다. 실제 승인은 `rights-auditor`가 `assets/manifest.jsonl`에서 한다.

## 10. Responsive Strategy
**CASE C — Desktop만 존재. RESPONSIVE DESIGN GAP.**
- 모든 Frame이 1920 폭 하나다. Tablet·Mobile Frame은 `포트폴리오` 안에 없다.
- 1920보다 좁은 Desktop(예: 1440, 1280)의 모습도 정해져 있지 않다.
- index의 세 Section은 고정 1920 × 1080 Slide 구성이고, Case Study는 고정 폭 위에 조밀하게 짜인 Layout이다.
- Mobile·Tablet 디자인을 임의로 완성하지 않는다. 최소 전략은 G3에서 제안하고 승인을 받는다.

## 11. Interaction Strategy
**INTERACTION GAP.**
- 읽기 도구로 확인된 Prototype 연결, Hover/Active 상태 변형, Motion 단서가 없다.
- Figma에 없는 Interaction을 추가하지 않는다. 필요한 최소 동작은 Page 이동 링크뿐이며 그것도 G1 결정에 달려 있다.
- AIDORA 결과 화면 안의 버튼·메뉴·입력란(장바구니, Subscribe 등)은 쇼핑몰 UI의 일부다. 동작하게 만들지 여부는 Scope Uncertain 항목이다.

## 12. Accessibility Considerations
- cover의 필기체(`--font-script`)와 넓은 자간의 작은 대문자 Label은 가독성을 확인해야 한다(값은 바꾸지 않는다).
- profile의 `--color-profile-muted` 글자와 어두운 바탕의 대비, contents의 회색 Label과 Texture 바탕의 대비는 Render 후 측정한다. FAIL이면 고치지 않고 Design Gap으로 보고한다.
- Texture 배경 위의 글자는 이미지 위에 놓이므로 대비를 Render로 확인해야 한다.
- Case Study를 이미지로 넣을 경우 글자가 이미지 안에 들어가 읽기 도구·검색·확대에서 읽히지 않는다(G2의 핵심 Trade-off).
- 문서 언어는 한국어와 영어가 섞여 있다. `lang="ko"`를 기본으로 한다.

## 13. Design Gaps (Level 3 — 사용자 결정 필요)
| ID | Gap | 왜 임의로 정할 수 없는가 |
|---|---|---|
| **G1** | **Page 구조와 내비게이션이 없다.** 디자인은 하나의 긴 문서이고 Header, Menu, Project로 가는 링크, 돌아오는 방법이 없다 | Page를 나누거나 내비게이션을 더하면 Figma에 없는 UI를 만드는 것이다 |
| **G2** | **Case Study와 AIDORA 결과 화면의 구현 방식.** 약 43개 Section, Text Node 4,100여 개, 조밀한 Diagram과 화면 Mockup으로 된 고정 1920 구성이다 | 전부 HTML로 다시 짜는 것과 이미지로 넣는 것은 작업량, 반응형, 접근성, Figma 호출량이 크게 다르다 |
| **G3** | **Responsive 디자인이 없다**(Desktop 1920 하나). 1920보다 좁은 Desktop 포함 | Mobile·Tablet 화면을 만드는 것은 새 디자인이다 |
| G4 | AIDORA 메인페이지 / 상세페이지가 보여 주는 대상인지 동작하는 Page인지(Scope Uncertain) | G2와 함께 결정 |
| G5 | AIDORA Case Study만 폭이 1600이다(다른 것은 1920) | 의도된 차이로 보고 그대로 구현한다. 통일을 원하면 알려 달라 |
| G6 | `프로필 가안`이라는 Frame 이름 | 초안이라면 최종본 위치가 필요하다 |

## 14. Content Gaps
| ID | 위치 | 내용 |
|---|---|---|
| C1 | index#profile 연락처 | 이메일이 `inbloodi3@gmali.com`으로 적혀 있다. index#cover에는 `inbloodi3@gmail.com`이다. 오탈자로 보이나 고치지 않았다 |
| C2 | index#profile | 전화번호와 생년월일이 그대로 들어 있다. 공개 웹사이트에 실어도 되는지 확인이 필요하다(디자인에 있으므로 기본은 그대로 싣는다) |
| C3 | aidora#ui-* Footer | 고객센터 번호 `1588-0000`, `© 2026 AIDORA` — 가상 브랜드의 가상 정보다. 결과물 화면의 일부로 그대로 둔다 |
| C4 | 전 Page | `<title>`, `<meta name="description">`에 쓸 문구가 Figma에 없다. cover의 "Kim Yun-Gyeom" + "BRAND & WEB DESIGN PORTFOLIO"를 쓸지 확인 필요 |
| C5 | asics-korea | Text Node 이름이 내용이 아니라 Layer 이름(`lane-number`, `label` 등)으로 되어 있어 Metadata만으로 문안을 확인하지 못했다. Node 단위로 읽어야 한다 |

Lorem ipsum, TODO, Sample Text는 `포트폴리오` 안에서 발견되지 않았다(Text Node 이름 검색 기준. ASICS는 C5 때문에 미확인).

## 15. Font Gaps
**FONT IMPLEMENTATION GAP.**
- 확인된 서체: Outfit, Allura, Cormorant Garamond, Noto Sans KR, Pretendard, SUIT. ASICS KOREA Case Study의 서체는 미확인이다.
- 여섯 종 모두 공개 배포되는 서체로 알고 있으나 **이 단계에서 라이선스를 확인하지 않았다.** Self-host하려면 `rights-auditor`가 라이선스와 출처를 `legal/license-evidence.jsonl`에 기록해야 한다.
- Web Font 파일(`woff2`)이 저장소에 없다. 확보 방법이 필요하다: 사용자가 파일 제공 / 공식 배포처에서 내려받기(승인 필요) / 외부 Font Host 사용(Level 3).
- 한글 서체 2종(Noto Sans KR, Pretendard)과 SUIT는 파일이 크다. index에는 Noto Sans KR이 이름과 연락처 몇 줄에만 쓰인다. 서체를 바꾸지 않는다.
- Variable Font 여부, Subset 가능 여부는 파일 확보 후 확인한다.

## 16. Implementation Judgements (디자인이 정하지 않아 구현에서 정하는 것)
| 항목 | 판단 | 이유 |
|---|---|---|
| profile 바탕의 Gradient 두 겹 | 단색으로 구현 | 결과 모습이 같다 |
| Texture 배경 이미지의 미세한 초과 크기(폭 100.79%) | `object-fit: cover`로 Section을 덮게 구현 | 1920에서 같은 모습 |
| Tool Card 기호 | Text로 구현(이미지 아님) | Figma에서도 Text다 |
| Contents 항목의 Capitalize, Label의 Uppercase | 원문 Text는 그대로 두고 CSS `text-transform`으로 표현 | Figma가 Text 변형으로 처리하고 있다 |
| 단위 | Token Source의 px 값을 그대로 옮기고, `rem`을 쓰더라도 1920에서 Render 크기가 같게 한다. `clamp()`는 G3 결정 전에는 쓰지 않는다 | Unit Policy |
| 숨김 Layer | 구현하지 않는다 | 숨김 상태 |

## 17. Build Order
G1–G3 결정에 따라 달라진다. 결정과 무관하게 정해진 것:
1. SITE SCAFFOLD — `extracted-tokens.json` → `docs/css/tokens.css`, 골격.
2. **Master Page = index.** Master Section = **profile**(서체 5종 중 4종, Component 3종, 가장 많은 간격 규칙을 포함해 구현 규칙을 검증하기 좋다).
3. index#cover → index#contents.
4. Project Page는 G2 결정 후: aidora → tj-media → asics-korea 순(Contents 순서).
5. Interaction(링크) → FULL QA.

Font와 Asset(Texture, 프로필 사진)이 승인되지 않으면 index도 Figma와 같은 모습으로 Render할 수 없다. SITE SCAFFOLD 전에 필요하다.
