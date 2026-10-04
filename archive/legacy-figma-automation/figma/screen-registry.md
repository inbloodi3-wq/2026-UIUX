# Screen Registry

이 프로젝트의 최종 후보 화면 등록 대장이다. 작업은 Figma 캔버스 전체를 탐색하지 않고 이 표를 기준으로 대상 프레임을 특정한다.

Figma 파일: `config/project.yaml`의 `figma.file_key`(현재: `4IjbcMoAkTyWkoacnVAmNe`). V1 제품 화면(B2C/B2B/공통)은 `figma.final_section`(현재: `04_Final_UI`, Page `Page 1`) 내부에 있다. Portfolio/Case Study 계열과 **V2 화면 작업 전체(2026-09-18 확정)**는 Page `05_Portfolio_CaseStudy`(page node id `1271:1726`) 안에서 진행한다 — 새 Frame/Component를 다른 Page에 만들지 않는다. 아래 표의 `Notes`에 Page를 명시한다.

**Automation Target 우선순위: `figma_node_id` → `variant_id` → `frame_name`**

### 제품 화면 (B2C / B2B / 공통)

| screen_id | variant_id | device | viewport | frame_name | figma_node_id | Status | Last Reviewed | Notes |
|---|---|---|---|---|---|---|---|---|
| c-home | c-home.desktop | desktop | 1440 | 01_Main_Desktop_Final | 1256:1458 | Final | 2026-09-16 | `01_Main_Final_v2` 기반, Consistency Audit 반영. Page: `Page 1` |
| c-search-result | c-search-result.desktop | desktop | 1440 | 02_Search_Desktop_Final | 1256:1645 | Final | 2026-09-16 | `02_Search_Result_Final_v2` 기반, Consistency Audit 반영. Page: `Page 1` |
| c-home | c-home.mobile | mobile | 390 | 03_Main_Mobile_Final | 1256:1735 | Final | 2026-09-16 | `03_Main_Mobile_v2` 기반, Consistency Audit 반영. Page: `Page 1` |
| c-search-result | c-search-result.mobile | mobile | 390 | 04_Search_Mobile_Final | 1256:1918 | Final | 2026-09-16 | `04_Search_Result_Mobile` 기반, Consistency Audit 반영. Page: `Page 1` |

### Portfolio / Case Study (제품 화면 아님 — 별도 카테고리)

Case Study는 TJ MEDIA 웹사이트의 화면이 아니라 리디자인 과정을 설명하는 별도 산출물이므로, 기존 B2C(`c-`)/B2B(`b-`)/공통(`g-`) 세그먼트 어디에도 속하지 않는다. `naming-convention.md`의 Generic Default 규칙(`{domain}-{screen}`)을 그대로 적용해 `portfolio`를 domain으로 사용한다. 기존 `c-`/`b-`/`g-` 체계는 변경하지 않는다.

| screen_id | variant_id | device | viewport | frame_name | figma_node_id | Status | Last Reviewed | Notes |
|---|---|---|---|---|---|---|---|---|
| portfolio-case-study | portfolio-case-study.desktop | desktop | 1920 | TJ_MEDIA_CaseStudy_Desktop | 1271:1727 | Final | 2026-09-17 | Page: `05_Portfolio_CaseStudy`(page node id `1271:1726`). 10개 Section(Cover~Final Design) 포함. Viewport 1920은 제품 화면의 1440과 다른 별도 Editorial Portfolio 규격(사용자 지정)이며 `config/project.yaml`의 `viewports.desktop`(1440)과는 별개다. Mobile Variant는 아직 없음 |

### V2 Draft / Planned (2026-09-18 — 실제 Figma Frame 미생성, Node ID 없음)

Direction A(Night Stage) 승인과 V2 Scope Freeze에 따라 계획된 신규/교체 화면이다. 아직 Figma에 실제로 만들지 않았으므로 임의의 `figma_node_id`를 채우지 않는다. Frame이 실제로 생성되면 이 표의 `figma_node_id`를 갱신하고 Status를 `Draft` 또는 `Final`로 바꾼다.

| screen_id | variant_id | device | frame_name (planned) | figma_node_id | Status | Notes |
|---|---|---|---|---|---|---|
| c-home | c-home.desktop.v2 | desktop | 01_Main_Desktop_V2 | 1353:2727 | Final | **2026-09-18 승인 및 LOCK** — 추가 Refinement 없이 확정. Music Chart Container 완화+Row Divider+Ranking Number 강화, Hero Stage Light/Search Glow 보강, Latest Songs 5번째 카드 패턴 차별화, Service의 반주곡 신청 CTA 구분, Artwork Container/Placeholder/Overlay 구조 정리(Image-Ready) 반영 완료. Page: `05_Portfolio_CaseStudy`(`1271:1726`), x=4640/y=1057. V1 Final(`1256:1458`)은 대체하지 않고 `Page 1`에 그대로 유지(Before 비교용) |
| c-search | c-search.desktop | desktop | SongSearch_Desktop_V2 | 1504:1830 | Draft | 2026-09-19 제작(First UI 단계, Wireframe 이후 1차 Visual UI). Page: `05_Portfolio_CaseStudy`(`1271:1726`), x=11830/y=0. `ia/sitemap-redesign.md`에서 2026-09-19부로 별도 화면으로 분리 확정. 구성: Header(노래검색 Active, `02_Search_Desktop_V2`에서 재사용)+Search Page Intro(MUSIC SEARCH Eyebrow+H1 Heading+Body Large 설명)+Large Search Input(SearchBar 재사용, 1.15배 확대해 시각적 우선순위 강화, Empty Placeholder 상태로 초기화)+Search Filter(검색대상: 전체/곡 제목/가수/곡번호/가사, `02_Search_Desktop_V2`에서 그대로 재사용)+Genre Filter(전체/가요/POP/J-POP/기타, 0.85배 축소해 Secondary로 처리)+Empty State Guidance("검색어를 입력해 원하는 곡을 찾아보세요")+Footer(재사용). Search Result 목록은 포함하지 않음(다음 작업에서 별도 제작). Wireframe은 `SongSearch_Desktop_V2_Wireframe`(`1503:1814`, 같은 Page x=10140/y=0)으로 보존, Portfolio `09 Exploration & Iteration`에서 활용 예정. Visual QA 통과 전까지 Draft |
| c-search-result | c-search-result.desktop.v2 | desktop | 02_Search_Desktop_V2 | 1401:1814 | Draft | 2026-09-18 제작 완료. `02_Search_Desktop_Final`(`1256:1645`) 전체를 Clone해 기존 UX(SearchBar/검색대상·장르 Filter/Result Summary/7건 SongItem Result List/Pagination/Footer)를 100% 보존하고, V2 Alignment만 추가: Header "노래검색" Active(Cyan), 기존 Heading 위에 "MUSIC SEARCH" Eyebrow 추가, Results와 Pagination 사이에 "찾는 곡이 없나요? 반주곡 신청하기" Secondary CTA(Cyan Outline Pill, Song Request 연결) 신규 삽입. Page: `05_Portfolio_CaseStudy`(`1271:1726`), x=13840/y=0. White Background 유지(Dark 미사용). 대표 Result 1위: 좋은 날/아이유/곡번호 10024(기존 데이터 그대로). V1 Final은 `Page 1`에 그대로 유지. Visual QA 통과 전까지 Draft |
| c-latest-songs | c-latest-songs.desktop | desktop | 03_LatestSongs_Desktop_V2 | 1367:2815 | Draft | 2026-09-18 제작 완료. Page: `05_Portfolio_CaseStudy`(`1271:1726`), x=8320/y=0. Header(신곡 Active)+Page Intro+Search(Compact, Search Result 재사용)+Period Tabs(이번 주/지난 주/9월 2주/9월 1주, Main V2 Chart 재사용)+Genre Chips(전체/가요/POP/J-POP/기타, Search Result 재사용)+Song Grid(5열×2행=10곡, Main V2 Artwork Container/Placeholder/Overlay 5종 패턴 재사용)+Pagination(Search Result 재사용)+Footer(Main V2 재사용). Visual QA 통과 전까지 Draft |
| c-chart | c-chart.desktop | desktop | 04_MusicChart_Desktop_V2 | 1374:2839 | Draft | 2026-09-18 제작 완료. Page: `05_Portfolio_CaseStudy`(`1271:1726`), x=10160/y=0. Header(인기곡 Active, 재사용)+Dark Page Intro(MUSIC CHART/노래방 인기차트)+Primary Tabs(TOP100/HOT100/올해 인기곡, TOP100 Active)+Secondary Filter(실시간/일간/주간, Main V2 Chart 재사용)+Chart List(10행, Main V2 ChartItem 재사용, Large Ranking Number 01~10 Cyan/White 차등 Opacity, Row Divider, Text 기반 Ranking Change(↑/↓/—/NEW), Equalizer/Waveform 장식 없음)+Pagination(Latest Songs 재사용, Dark 배경 재색상)+Footer(Main V2 재사용). 알려진 이슈: Row 1의 Song Number 배지가 다른 Row 대비 약 36px 좌측 정렬(재사용 Template Instance 간 미세한 내부 구조 차이, 기능적 문제 아님). Visual QA 통과 전까지 Draft |
| c-song-detail | c-song-detail.desktop | desktop | 05_SongDetail_Desktop_V2 | 1391:2933 | Draft | 2026-09-18 제작 완료(V1 IA에서는 개념 단계였음, QA-UX-002 최초 해소). Page: `05_Portfolio_CaseStudy`(`1271:1726`), x=12000/y=0. Header(Default State, 재사용)+Breadcrumb(← 목록으로)+Primary Detail(Large Artwork 480×480 Container/Placeholder 재사용 + Song Title/Artist/Song Number/Genre Chip(재사용) + Primary Action "My TJ에 저장"(Button 재사용)/Secondary "YouTube에서 보기"(Outline Pill))+Related Songs(5카드, Main V2 Artwork Card 재사용, NEW 배지 숨김)+Footer(재사용). 대표 Sample: 좋은 날/아이유/곡번호 10024. White/Neutral 중심, Dark Section 없음. Visual QA 통과 전까지 Draft |
| c-song-request | c-song-request.desktop | desktop | 06_SongRequest_Desktop_V2 | 1405:3090 | Draft | 2026-09-18 제작 완료. Page: `05_Portfolio_CaseStudy`(`1271:1726`), x=15680/y=0. Header(노래검색 Active, 재사용)+Page Intro(SONG REQUEST/반주곡 신청)+Service Selector(반주곡 신청 Active Cyan/유료곡 등록 Inactive, 별도 Page 미생성)+Stepper(3단계: 곡 정보 입력→신청자 정보→확인, 1단계 Active)+Form(곡명*/가수명*/참고 링크(선택)/요청 사유 또는 비고(선택), SearchBar와 동일한 Input Visual Language)+CTA(Primary "다음 단계" Button 재사용, Secondary "검색으로 돌아가기")+Footer(재사용). Form Width 800px로 제한(Container 1200 대비). White/Neutral 중심, Dark Section 없음. Confirmation 화면은 별도 제작하지 않음. Visual QA 통과 전까지 Draft |
| c-home | c-home.mobile.v2 | mobile | 07_Main_Mobile_V2 | 1411:1814 | Draft | 2026-09-18 제작 완료. Page: `05_Portfolio_CaseStudy`(`1271:1726`), x=17520/y=0, Width 390. V1 Mobile(`1256:1735`) 구조(Header/Section Rhythm)를 기반으로 Reflow하고 V2 Visual System 적용: Dark Hero(Decoration 밀도 축소, Waveform 1개만), Latest Songs(Horizontal Scroll, V2 Artwork Container 4장), Music Chart(Dark, Rank+Song Info+Metadata 세로 정렬 Compact Row), Service Entry(세로 List 4항목, 반주곡 신청 추가), Business→Reduced Utility Links 교체, Footer(V1 Mobile 재사용). V1 Final(`1256:1735`)은 `Page 1`에 그대로 유지. Visual QA 통과 전까지 Draft |
| c-search-result | c-search-result.mobile.v2 | mobile | 08_Search_Mobile_V2 | 1413:1814 | Draft | 2026-09-18 제작 완료. Page: `05_Portfolio_CaseStudy`(`1271:1726`), x=18310/y=0, Width 390. `04_Search_Mobile_Final`(`1256:1918`) 전체를 Clone해 기존 Mobile UX(Filter Scroll Chip/7건 Song Row/Compact Pagination/Footer)를 100% 보존하고 V2 Alignment만 추가: "MUSIC SEARCH" Eyebrow, Song Request CTA 신규 삽입. V1 Final은 `Page 1`에 그대로 유지. Visual QA 통과 전까지 Draft |
| c-song-detail | c-song-detail.mobile | mobile | 09_SongDetail_Mobile_V2 | 1414:3129 | Draft | 2026-09-18 제작 완료(V1 Mobile 선례 없음, 신규 구축). Page: `05_Portfolio_CaseStudy`(`1271:1726`), x=19100/y=0, Width 390. Header(V1 Mobile 재사용)+Back Nav+전체폭 Artwork(350×350, Desktop V2와 동일 Container/Placeholder)+Song Info 세로 Flow(Eyebrow/Title/Artist/Metadata/Divider)+Actions(Primary Full-width+Secondary Outline Full-width)+Related Songs(2×2 Grid, 동일 Artwork System)+Footer(V1 Mobile 재사용). Visual QA 통과 전까지 Draft |
| portfolio-case-study | portfolio-case-study.desktop.v2 | desktop | TJ_MEDIA_CaseStudy_Desktop_V2 | (미생성) | Planned | 기존 `TJ_MEDIA_CaseStudy_Desktop`(`1271:1727`, V1 Final)은 그대로 유지. V2 Final UI 완성 후 별도 제작 |

**비고**: `05_Portfolio_CaseStudy` 페이지에 이미 존재하는 `TJ_MEDIA_V2_Production_Board`, `01_Main_Desktop_V2_Hero_Prototype`, `02_Main_Desktop_V2_Latest_Prototype`은 Visual Direction 검증용 Prototype/Reference 자료이며 아래 "비교/실험용 프레임" 규칙에 따라 이 Registry에 등록하지 않는다.

**중요(2026-09-18)**: `04_Final_UI`(Page `Page 1`, node `1349:1726`)에도 `01_Main_Desktop_V2`라는 동일한 이름의 Frame이 존재한다. 이는 V2 작업 Page를 `05_Portfolio_CaseStudy`로 통일하기 전에 먼저 만들었던 초기 버전이며, 이후 `05_Portfolio_CaseStudy`(`1353:2727`)에 동일 구조가 복제되어 그 사본을 기준으로 이후 Refinement가 진행됐다. `1349:1726`은 삭제하지 않고 그대로 두지만 **Registry의 실제 기준(Node ID)은 `1353:2727` 하나뿐**이다. 앞으로 `01_Main_Desktop_V2`를 참조할 때는 반드시 `1353:2727`(`05_Portfolio_CaseStudy`)을 사용한다.

## 필드 설명
- `screen_id`: Logical Screen(정보구조상의 화면 단위). 여러 Device에서 반복될 수 있다.
- `variant_id`: `{screen_id}.{device}` 형식. 실제 작업 대상은 이 단위로 특정한다.
- `device` / `viewport`: 대상 환경과 너비(px). 제품 화면은 `config/project.yaml`의 `viewports`와 일치해야 한다. Portfolio/Case Study 계열은 제품 화면이 아니므로 예외로 별도 값(1920)을 가질 수 있다.
- `frame_name`: Figma 상의 Frame 이름.
- `figma_node_id`: Figma Node ID. 가장 신뢰할 수 있는 식별자이므로 우선 사용한다.

## Status 정의
- `Draft`: 작업 중, 검수 전
- `Final`: Consistency Audit 통과, 현재 작업 기준 화면
- `Deprecated`: 더 이상 기준으로 사용하지 않음(캔버스에서 삭제하지 않고 유지)

## 비교/실험용 프레임 (Registry 대상 아님)
`01_Main_Visual_v1`, `03_Main_Mobile`(v1), `06 Desktop Main (V1~V3)`, `07 Desktop Search (V1~V3)`, `TJ_MEDIA_V2_Production_Board`, `01_Main_Desktop_V2_Hero_Prototype`, `02_Main_Desktop_V2_Latest_Prototype` 등은 히스토리 보존/Visual Direction 검증용으로 캔버스에 그대로 유지하며 이 Registry에는 등록하지 않는다. 새 작업은 위 표의 `Final`/`Planned` 프레임만 기준으로 삼는다.

## 갱신 규칙
- 새 화면이 `Final`로 확정되면 이 표에 행을 추가한다.
- 기존 `Final` 프레임을 교체할 경우 기존 행은 `Deprecated`로 남기고 새 행을 추가한다(행을 삭제하지 않는다).
- Figma Designer / Automation Orchestrator는 작업 전 이 표에서 대상 `variant_id`의 `figma_node_id`를 먼저 확인한다.
