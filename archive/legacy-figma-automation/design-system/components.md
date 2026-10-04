# Components

Figma Design System(`03_Design_System`)에 정의된 실제 컴포넌트 기준이다. 새 컴포넌트를 만들기 전에 반드시 이 표에서 재사용 가능한 컴포넌트를 먼저 확인한다.

| Component | 용도 | Variant |
|---|---|---|
| Header | 상단 내비게이션(Desktop) / 로고+메뉴 아이콘(Mobile) | Desktop 1종, Mobile은 화면별로 재구성(로고 좌측/메뉴 아이콘 우측) |
| SearchBar | 통합 검색 입력 | Size=Large/Default × State=Default/Focused/Filled |
| Button | 주요/보조 액션(검색, CTA) | Style=Primary/Secondary/Text × State=Default/Hover |
| Chip | 필터/키워드/페이지네이션 선택 | State=Default/Selected |
| SectionHeader | 섹션 제목 + 설명 + 더보기 | Show Description / Show More boolean |
| SongItem | 검색 결과 리스트의 곡 1행(Desktop) | State=Default/Hover |
| MusicCard | 신곡/앨범 카드 | State=Default/Hover |
| ChartItem | 인기차트 리스트의 곡 1행(Desktop) | State=Default/Hover, Variant: Large Ranking(V2, 2026-09-17 추가 — Music Chart 페이지의 대형 랭킹 숫자 표현용) |
| Artwork Container (V2, 신규) | Latest Songs/Chart/Song Detail이 공유하는 Generated Artwork 표시 컨테이너 | Size=Small/Medium/Large |
| Tabs (V2, 신규 승격) | Music Chart의 TOP100/HOT100/올해 인기곡 전환. 기존 `Section/PopularChart` 내부 로컬 "Period Tabs" 패턴을 공용 컴포넌트로 승격 | State=Default/Active |

## Mobile 전용 구성
Mobile Song Row(검색 결과), Mobile Chart Row(인기차트)는 Desktop 컴포넌트를 축소하지 않고 Mobile 전용 Layout으로 새로 구성한다(정보 위계: Song Title → Artist → Song Number → Metadata → Action). 현재는 화면마다 개별 구성되어 있으며, 향후 반복 사용 빈도가 늘어나면 별도 Mobile Component로 승격한다(`design-reviewer`가 중복 정도를 확인해 판단).

## 원칙
- 새 화면(Latest Songs/Chart/Song Detail/Song Request)이 유사한 컴포넌트를 필요로 할 경우, 새로 만들기 전에 이 표에서 재사용 가능한 컴포넌트를 먼저 확인한다.
- Desktop과 Mobile은 같은 Radius/Color/Typography 언어를 공유하되, 크기(Size Variant)는 환경에 맞게 달라질 수 있다.
- 같은 역할의 컴포넌트가 화면마다 다른 크기/스타일로 나타나면 버그로 간주하고 통일한다(`04_Final_UI`의 Final 프레임 기준, `figma/screen-registry.md` 참고).

## V2 Component Strategy (2026-09-17)
Search Result / Latest Songs / Chart / Song Detail 사이에서 SongItem·MusicCard·ChartItem(Song Component)을 최대한 공유한다. 필요 이상의 신규 Component를 만들지 않는다 — 이번 V2에서 신규/승격은 위 표의 **Artwork Container**와 **Tabs** 2건으로 제한한다.
