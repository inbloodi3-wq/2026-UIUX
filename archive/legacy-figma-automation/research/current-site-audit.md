# 현행 사이트 구조 분석 (TJ미디어)

## 조사 상태: 부분 실시 (2026-09-20)

2026-09-17에는 이 문서가 "조사 미실시"였다. 2026-09-20, Case Study Section 03 작업 중 사용자 승인을 받아 **TJ미디어 공식 홈페이지(https://www.tjmedia.com/)를 Playwright로 직접 방문**해 아래 항목을 확인했다. 전수 조사가 아니라 **홈페이지 + 반주곡(곡 검색) 관련 페이지 중심의 제한적 실사**이며, 방문 1회 기준이라 Confidence는 MEDIUM으로 표기한다.

방문 페이지:
- `https://www.tjmedia.com/` (홈)
- `https://www.tjmedia.com/song/recent_song` (반주곡 > 최신곡)
- `https://www.tjmedia.com/song/accompaniment` (반주곡 검색)

스크린샷은 로컬에 보관(`tjmedia_viewport2.png`, `tjmedia_songs.png`, `tjmedia_search.png`) — 저작권상 리포지토리에는 커밋하지 않는다.

근거(과거 기록, 유지):
- `config/project.yaml`의 `project.url`이 2026-09-17까지 비어 있었다 → 2026-09-20 `https://www.tjmedia.com/`로 확인/기입.
- 2026-09-17 시점 프로젝트 파일 전체 검색 결과 현행 사이트 캡처/방문 기록이 없었다(git 이력의 `PPT 자동화` 백업은 무관한 교육 자료).
- Figma 파일 내 과거 `01 Research`/`02 UX Strategy` 프레임도 회수 불가였다.

**남아있는 한계**: 아래 1~5번 항목은 이번 방문으로 확인했지만, 6~10번(Product/Business 배치 일부 제외, Mobile/Responsive, CTA 체계, 콘텐츠 밀도, 실제 사용자 탐색 흐름 테스트)은 여전히 미확인이며 추측으로 채우지 않는다.

---

## 항목별 조사 결과

### 1. Navigation / IA
Observation: 홈페이지 상단 GNB는 소개·스토리·제품·반주곡·차트·노래방·고객지원 7개 항목이 동일한 시각적 무게(같은 크기/색/간격)로 나열되어 있다. 별도의 검색 아이콘이나 강조 처리는 없다.
Evidence: `tjmedia_viewport2.png` (2026-09-20 홈페이지 헤더 캡처)
UX Impact: 실제 음악 콘텐츠(반주곡/차트)와 하드웨어 제품(제품), 기업 정보(소개/스토리)가 구조적으로 구분되지 않고 한 줄에 섞여 있다.
Confidence: MEDIUM

### 2. Search 진입 구조
Observation: 홈페이지 헤더/Hero 어디에도 검색 입력창이나 검색 아이콘이 없다. 곡 검색 기능(`반주곡 검색`)은 `반주곡` 관련 하위 페이지에서만 노출되는 별도 퀵메뉴 아이콘을 통해 `/song/accompaniment` 페이지로 이동해야 도달할 수 있다.
Evidence: `tjmedia_viewport2.png`(홈, 검색 요소 없음), `tjmedia_songs.png`(반주곡 페이지 우측 퀵메뉴 내 "반주곡 검색" 아이콘)
UX Impact: 핵심 행동인 곡 검색의 진입점이 홈 화면에 없고, 별도 메뉴로 이동한 뒤에도 아이콘 형태로만 작게 노출된다.
Confidence: MEDIUM

### 3. Search prominence
Observation: `/song/accompaniment` 페이지에 실제로 도달해도, 검색 입력창(통합검색 드롭다운 + 텍스트 입력)은 대형 장식성 Hero 이미지(장르 아트워크 콜라주) 아래, 첫 화면 하단부에 위치한다.
Evidence: `tjmedia_search.png`
UX Impact: 검색 페이지 자체에 진입해도 입력창이 시각적으로 즉시 시선을 끌지 못한다.
Confidence: MEDIUM

### 4. 주요 콘텐츠의 정보 위계
Observation: 홈페이지 첫 화면(Hero)은 신제품 하드웨어 광고 배너("3시리즈" 등)가 전체를 차지하며, 이어지는 섹션들도 브랜드/연혁 스토리텔링 카피 중심이다. 음악·곡 관련 콘텐츠(반주곡/차트)는 홈 화면에 직접 노출되지 않는다.
Evidence: `tjmedia_viewport2.png`(홈 Hero), `tjmedia_full.png`(홈 전체 스크롤)
UX Impact: 제품 마케팅과 브랜드 스토리가 음악 탐색보다 시각적으로 우선한다.
Confidence: MEDIUM

### 5. 신곡 / 인기곡 접근 구조
Observation: `반주곡 > 최신곡`(`/song/recent_song`) 페이지에는 장르 무드 배너(DANCE/electronica/R&B 등) 캐러셀과 월별 신곡 테이블(곡번호/앨범아트/곡제목/가수)이 존재한다. 다만 이 콘텐츠는 홈페이지에서 바로 보이지 않고 GNB의 `반주곡` 메뉴를 거쳐야 한다.
Evidence: `tjmedia_songs.png`
UX Impact: 탐색 콘텐츠 자체는 존재하지만 홈 화면과 분리되어 있어 발견하기 위해 최소 1회 이상의 메뉴 이동이 필요하다.
Confidence: MEDIUM

### 6. Product / Business 정보 배치
Observation: Footer에 비즈니스제안, 대리점멤버십, 취급점멤버십, 협력업체, 채용 등 B2B/기업 성격 링크가 일반 소비자 대상 링크(신곡업데이트, 사이트맵)와 같은 목록에 함께 노출된다.
Evidence: 2026-09-20 홈페이지 Footer 영역 확인(접근성 스냅샷)
UX Impact: 일반 이용자(B2C)와 사업자(B2B) 대상 정보가 구조적으로 분리되어 있지 않다.
Confidence: MEDIUM

### 7. Mobile / Responsive 구조
Observation: 조사 미실시
Evidence: 없음 — 이번 방문은 Desktop 1440 viewport 기준으로만 진행함
UX Impact: 판단 불가
Confidence: LOW

### 8. 주요 CTA
Observation: 조사 미실시(체계적 CTA 목록화는 진행하지 않음)
Evidence: 없음
UX Impact: 판단 불가
Confidence: LOW

### 9. 콘텐츠 밀도
Observation: 조사 미실시(정량 측정 없음)
Evidence: 없음
UX Impact: 판단 불가
Confidence: LOW

### 10. 사용자 탐색 흐름
Observation: 조사 미실시(실제 Task 기반 탐색 테스트는 진행하지 않음, 페이지 방문 관찰에 한정)
Evidence: 없음
UX Impact: 판단 불가
Confidence: LOW

---

## 곡 검색·음악 탐색 현황

| 항목 | 현재 위치 | 진입 경로 | 문제점 |
|---|---|---|---|
| 검색 진입점 | 홈에는 없음. `/song/accompaniment` 페이지 내부 | 반주곡 관련 페이지 우측 퀵메뉴 아이콘 → 별도 페이지 | 홈 화면에서 검색을 바로 시작할 수 없고, 진입 후에도 아이콘 형태로만 노출 |
| 장르/인기곡 탐색 | `/song/recent_song`(최신곡), GNB `차트` | GNB `반주곡`/`차트` 메뉴 | 콘텐츠 자체는 존재하나 홈 화면과 분리되어 있음 |

## 발견된 혼재 지점
- GNB 7개 항목(소개/스토리/제품/반주곡/차트/노래방/고객지원)에 기업 정보, 하드웨어 제품, 실제 음악 콘텐츠가 동일한 위계로 섞여 있다(2026-09-20 실사로 확인, MEDIUM Confidence).
- Footer에 B2B성 링크(비즈니스제안/대리점멤버십/협력업체/채용)와 소비자 링크가 구분 없이 함께 노출된다(2026-09-20 실사로 확인).
- `research/problem-definition.md`, `research/personas.md`의 초기 가설은 이번 실사 결과와 방향이 일치하나, 세부 수치나 사용자 인터뷰 근거는 여전히 없다(가설을 실사로 보강한 것이며, 정량 리서치로 대체된 것은 아니다).

## Note
이 문서는 리디자인의 Source of Truth 중 하나다. 2026-09-20 부분 실사로 Confidence가 LOW → MEDIUM으로 상향된 항목(1~6번)이 있으나, 이는 여전히 단일 방문·비정량 관찰이며 사용자 인터뷰나 정량 데이터가 아니다. Mobile/CTA/밀도/탐색 흐름(7~10번)은 여전히 조사 미실시 상태다. Case Study Section 03 Copy는 이 문서의 1~6번 항목만 근거로 사용한다.
