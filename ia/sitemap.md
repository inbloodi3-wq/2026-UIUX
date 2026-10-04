# Sitemap

Website 구조 문서다(두 mode 공통 형식). Figma Node 대응은 `design-source/frame-map.md`에 있다.

**상태: PARTIAL.** Figma 디자인은 Page 구분과 내비게이션이 없는 **하나의 긴 문서**(Cover → Profile → Contents → Project 01 → 02 → 03)다. 아래 Section 구성은 Figma에 있는 그대로 등록했고, 그것을 어떤 Page(URL)로 나눌지는 Figma에 정해져 있지 않아 사용자 결정을 기다린다(`design-source/implementation-spec.md` Design Gap G1). 표의 `파일` 열은 **제안안**이며 확정이 아니다.

## Pages
| Page ID | 파일(URL / Route) — 제안, 미확정 | 목적 | Figma에 있는 근거 |
|---|---|---|---|
| index | `index.html` → `/` | 표지, 프로필, 목차 | 문서의 첫 3장 |
| aidora | `aidora.html` | Project 01 AIDORA — Branding · Package · Web Design | Contents의 PROJECT 01 |
| tj-media | `tj-media.html` | Project 02 TJ MEDIA — AI-Assisted UI/UX · Web Redesign | Contents의 PROJECT 02 |
| asics-korea | `asics-korea.html` | Project 03 ASICS KOREA — AI Automation · Commerce UX Redesign | Contents의 PROJECT 03 |

## Navigation
Figma에 사이트 내비게이션(Header, Menu, 뒤로 가기, Page 사이 링크)은 **없다.** 구조상 내비게이션 역할을 할 수 있는 것은 Contents Section의 Project 목록뿐이다. 아래는 그것을 링크로 쓸 경우의 제안이며 미확정이다.

| 위치 | 순서 | Label | 대상 |
|---|---|---|---|
| index#contents | 1 | PROJECT 01 AIDORA | aidora |
| index#contents | 2 | PROJECT 02 TJ MEDIA | tj-media |
| index#contents | 3 | PROJECT 03 ASICS KOREA | asics-korea |
| Project Page → index | — | (디자인 없음) | index |

## index
| 순서 | Section ID | 목적 | 콘텐츠 출처 | 우선순위 | Mobile / Tablet / Desktop 비고 |
|---|---|---|---|---|---|
| 1 | cover | 표지: 문구, "Portfolio", 이름, 직함 줄, 연도, 이메일, 지역 | Figma Text | P1 | Desktop 디자인만 있음(1920 × 1080 고정 구성) |
| 2 | profile | 사진, 이름, 생년월일, 연락처, 한 줄 소개, Experience, Career, Tools, Character | Figma Text | P1 | 〃 |
| 3 | contents | 목차: Project 3개와 각 Project의 Index 4항목 | Figma Text | P1 | 〃 |

## aidora
| 순서 | Section ID | 목적 | 콘텐츠 출처 | 우선순위 | 비고 |
|---|---|---|---|---|---|
| 1 | cs-cover | Project 표지와 개요 | Figma Text | P1 | Case Study 폭 1600 |
| 2 | cs-desk-research | Desk Research | 〃 | P2 | |
| 3 | cs-pain-point | Pain Point | 〃 | P2 | |
| 4 | cs-positioning | Positioning | 〃 | P2 | |
| 5 | cs-brand-concept | Brand Concept | 〃 | P2 | |
| 6 | cs-logo | Logo Design | 〃 | P2 | |
| 7 | cs-color-type | Color System, Typography System | 〃 | P2 | |
| 8 | cs-product-package | Product & Package | 〃 | P2 | |
| 9 | cs-web-experience | Web Experience | 〃 | P2 | |
| 10 | cs-main-page | Main Page 설명 | 〃 | P2 | |
| 11 | cs-collection | Collection Page 설명 | 〃 | P2 | |
| 12 | cs-pdp | Product Detail 설명 | 〃 | P2 | |
| 13 | cs-brand-page | Brand Page 설명 | 〃 | P2 | |
| 14 | ui-main | AIDORA Main Page 전체 화면 | 〃 | P1 | 결과물 화면 자체(쇼핑몰 UI) |
| 15 | ui-pdp | AIDORA Product Detail 전체 화면 | 〃 | P1 | 〃 |
| 16 | ui-collection | AIDORA Collection 전체 화면 | 〃 | P1 | 〃 |
| 17 | ui-brand | AIDORA Brand 전체 화면 | 〃 | P1 | 〃 |

## tj-media
| 순서 | Section ID | 목적 |
|---|---|---|
| 1 | s01-cover | Cover |
| 2 | s02-overview | Project Overview |
| 3 | s03-research | Research & As-Is Analysis |
| 4 | s04-pain-points | User & Pain Points |
| 5 | s05-ux-strategy | UX Strategy |
| 6 | s06-ia | Information Architecture |
| 7 | s07-user-flow | User Flow |
| 8 | s08-visual-direction | Visual Direction |
| 9 | s09-exploration | Exploration & Iteration |
| 10 | s10-main-experience | Main Experience |
| 11 | s11-search-flow | Search & Discovery Flow |
| 12 | s12-final-screens | Final Screens |
| 13 | s13-mobile | Mobile Experience |
| 14 | s14-outcome | Outcome & Reflection |
| 15 | s15-closing | Closing |

## asics-korea
| 순서 | Section ID | 목적 |
|---|---|---|
| 1 | s01-cover | Cover |
| 2 | s02-overview | Overview |
| 3 | s03-korea | 한국에서 다시 시작하다 |
| 4 | s04-problem | Problem |
| 5 | s05-strategy-flow | Strategy & Flow |
| 6 | s06-design-system | Design System |
| 7 | s07-decision-01 | Decision 01 |
| 8 | s08-decision-02 | Decision 02 |
| 9 | s09-decision-03 | Decision 03 |
| 10 | s10-mobile | Mobile |
| 11 | s11-outcome | Outcome & Reflection |

## Interactions
| ID | 위치 | 동작 | JS 없이 |
|---|---|---|---|
| — | — | Figma에서 확인된 Interaction 없음(Prototype 정보는 읽기 도구로 확인되지 않았고, 화면에 상태 변형도 없다) | — |

## Open Content Requests
`design-source/implementation-spec.md`의 Content Gaps 참조.
