# 리디자인 사이트맵

## V2 Scope Freeze (2026-09-17)
`config/project.yaml`의 `v2_scope`가 이 파일의 Source of Truth다. V2는 B2C/B2B 분리 구조가 아니라 **음악 탐색 경험 하나(사실상 단일 Segment)**로 범위를 고정한다. B2B/공통 표는 V1 참고 이력으로 보존하되(행을 삭제하지 않는다, `.claude/rules/project-architecture.md`), V2 Core Scope에는 포함되지 않는다.

## 원칙 (V2)
- 모든 V2 Core Page는 `c-` 접두어를 사용한다(사실상 단일 Segment).
- 홈 화면 최상단에 검색 진입점을 둔다.
- 기업/제품 정보는 Header/Footer/Secondary Navigation 수준의 Entry Link로만 존재하며 별도 Core Page로 만들지 않는다.

## Core (V2 — Desktop 6 / Mobile Priority 3)

| Screen ID | 화면명 | 목적 | 상위 화면 | Device |
|---|---|---|---|---|
| c-home | Main | 검색/탐색 중심 진입, Brand Impact | - | Desktop + Mobile |
| c-search | 검색 | 곡 제목/가수명/곡번호 기준 검색 조건 설정(검색 실행 전 화면) | c-home | Desktop(2026-09-19부터 별도 화면으로 분리 제작) |
| c-search-result | 검색 결과 | 검색 결과 목록, Neutral/Functional | c-search | Desktop + Mobile |
| c-latest-songs | 최신 반주곡 | 신규 등록곡 탐색, Artwork/Discovery | c-home(New Songs Section) | Desktop |
| c-chart | 인기차트 | TOP100/HOT100/올해 인기곡 Tab, Ranking/Music Data | c-home(Popular Chart Section) | Desktop |
| c-song-detail | 곡 상세 | 가사/정보 확인, Artwork+Information+Action | c-search-result | Desktop + Mobile |
| c-song-request | 반주곡 신청/유료곡 등록 | 신청 Flow, Functional Form UX | c-search-result(원하는 곡 없음) | Desktop |

## B2B (V1 참고 이력 — V2 Core Scope 아님)
V2 Scope Freeze에 따라 아래 화면은 제작하지 않는다. Header/Footer Entry Link 수준으로만 유지된다.

| Screen ID | 화면명 | 목적 | 상위 화면 |
|---|---|---|---|
| b-partner-home | 파트너 홈 | 사업자용 진입 | - |
| b-store-manage | 매장 관리 | 기기/매장 정보 관리 | b-partner-home |
| b-contract | 계약/가맹 문의 | 계약 프로세스 | b-partner-home |

## 공통 (V1 참고 이력 — V2에서 상세 페이지는 제외)
`g-about`, `g-contact`는 V2 명시적 제외 목록(고객지원 상세 등)에 해당해 Core Page로 만들지 않는다. `g-login`은 V2 Scope Freeze 문서에서 별도로 언급되지 않아 필요 시 최소 공통 화면으로 검토한다(신규 결정 아님, 현행 유지).

| Screen ID | 화면명 | 목적 |
|---|---|---|
| g-about | 회사 소개 | 공통 정보(V2 제외) |
| g-contact | 고객센터 | 공통 문의(V2 제외) |
| g-login | 로그인 | 공통 인증(검토 중, 결정 없음) |

## 화면별 상세 (V2, 2026-09-18 Visual Direction 최종 승인 반영)

### Main
다음 주요 화면으로 연결한다: Search Result, Latest Songs, Music Chart, Song Request.

### Search (2026-09-19 별도 화면 분리)
목적: 검색 실행 전 검색 조건(곡 제목/가수명/곡번호)을 설정하는 화면. 검색 결과 목록은 포함하지 않는다(→ Search Result에서 표시).
주요 정보: Search Input, Search Filter(검색대상), Genre Filter(Secondary), Empty/Initial State Guidance
Flow: Main(Hero Search) → Search → Search Result
근거: `c-search`가 기존에는 "별도 화면 아님"으로 정의되어 있었으나, 검색 실행 전 상태를 명확히 보여주기 위해 별도 화면으로 분리했다(사용자 지시, 2026-09-19).

### Latest Songs
목적: 새롭게 등록된 반주곡 탐색
주요 정보: 기간/주차, Genre Filter, Search, Song Number, Song Title, Artist, Registration Info, Generated Artwork(AST-004 Artwork System)
Main의 "이번 주 신곡" Section → Latest Songs로 연결한다.

### Music Chart
하나의 페이지 안에서 Tabs 사용: TOP100 / HOT100 / 올해 인기곡

### Song Detail
Search Result 및 기타 Song List(Latest Songs, Music Chart)에서 진입 가능.
주요 정보: Generated Artwork, Song Title, Artist, Song Number, Genre, Registration/Release Information, My TJ Save, YouTube, Related Songs
Flow: Search → Search Result → Song Detail

### Song Request / Registration
기존 "반주곡 신청"과 "유료곡 등록"을 하나의 페이지 안에서 Tab 또는 Service Selector 형태로 통합한다.
Flow: Search → 원하는 곡 없음 → Song Request → 정보 입력 → 신청 안내
실제 운영 시스템 전체를 구현하는 것이 아니라 Portfolio에서 UX가 이해될 정도의 핵심 Flow만 설계한다.

## Rule
화면 순서, Screen ID, 소속 영역은 이 파일을 기준으로 한다. V2 Core는 위 "Core (V2)" 표를 우선 기준으로 삼는다.
