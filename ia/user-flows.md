# 사용자 플로우

## V2 Scope Freeze (2026-09-17)
아래 Core/Discovery/Request Flow가 V2의 authoritative User Flow다. B2B 핵심 플로우는 V1 참고 이력으로 하단에 보존하되 V2 Core Scope에는 포함되지 않는다.

## Flow A — Search (곡 검색 → 탐색 → 상세 → 액션)
```
c-home (검색바 최상단 노출)
  → c-search (검색어 입력)
    → c-search-result (결과 목록)
      → c-song-detail (곡 상세/가사)
        → Save(My TJ) / YouTube
```

## Flow B — New Songs (최신 반주곡)
```
c-home (Latest Songs Section, "이번 주 신곡")
  → c-latest-songs (전체 보기)
    → c-song-detail
```

## Flow C — Chart (인기차트)
```
c-home (Popular Chart Section, "인기차트")
  → c-chart (TOP100 / HOT100 / 올해 인기곡 Tab)
    → c-song-detail
```

## Flow D — Song Request (반주곡 신청)
```
c-home 또는 c-search-result
  → 원하는 곡 없음
    → c-song-request (Service 선택: 반주곡 신청 / 유료곡 등록)
      → 정보 입력
        → 신청 확인 / 안내
```

## Song Detail 재귀 Flow: 관련곡 탐색
```
c-song-detail (Related Songs / Similar·Popular Songs)
  → c-song-detail (다른 곡)
```

## 기업/제품 정보 접근
기업/제품 정보는 별도 Core Flow가 아니라 Header/Footer/Secondary Navigation의 Entry Link 수준으로만 접근한다(V2 명시적 제외 목록 — About/연혁/뉴스룸/CI/IR/글로벌/계열회사/제품 상세/음향기기 상세/고객지원 상세/이벤트 상세/노래방 기기 상세).

---

## B2B 핵심 플로우 (V1 참고 이력 — V2 Core Scope 아님)
```
b-partner-home
  → b-contract (계약/가맹 문의)
```

## Rule
새 플로우 추가 시 관련 Screen ID가 `ia/sitemap-redesign.md`에 등록되어 있어야 한다.
