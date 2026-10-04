# Sample Song Data (아이유 / IU)

Search Result 등 화면에서 사용하는 아이유 곡 목록의 TJ 곡번호. TJ Media / TJ Karaoke Official 자료 기준으로 확인된 값이며, Portfolio Mock 임의 숫자가 아니다.

| Song | TJ Song Number |
|---|---|
| 좋은 날 (Good Day) | 33393 |
| 밤편지 | 48879 |
| Blueming | 24518 |
| Love wins all | 85842 |
| 라일락 | 76595 |
| 너의 의미 | 38476 |
| Celebrity | 76345 |
| 팔레트 | 49495 |
| 에잇 | 89419 |

Source: TJ Media / TJ Karaoke Official

## 참고
## 2차 정정 (2026-09-24, Case Study 13·14 Showcase 전 데이터 점검)
위 표에 근거가 있는 값만 원본 화면에서 정정했다. 대상: `02_Search_Desktop_V2`, `08_Search_Mobile_V2`, `04_MusicChart_Desktop_V2`, `07_Main_Mobile_V2`.
- 밤편지 `52310` → `48879`, Blueming `48812` → `24518`, Love wins all `77120` → `85842`, 라일락 `65530` → `76595`
- 비공식 샘플 곡 `가을 아침`(31207) 행 → 표의 곡으로 교체: `너의 의미` 38476, 그 아래 행 `너의 의미`(90211) → `Celebrity` 76345 (표의 순서 유지)
- `04_MusicChart`, `07_Main_Mobile`의 `좋은 날` `10024` → `33393`

**표에 근거가 없어 수정하지 못한 값(추측 금지)**: Main/Latest Songs/Music Chart의 다른 곡번호(Love Dive 71203, Ditto 68540, Attention 55219, After LIKE 90410, Hype Boy 34277, 보고 싶다 20871, 첫 눈 33012, 583 58311, 안녕 17650, 사랑은 늘 도망가 88214), 공식 자료로 확인되기 전까지 Sample 값이다.

**3차 정리 (2026-09-24)**: 곡별 연도 근거가 없는 `가요 · 2019`(모든 행 동일)는 `가요`로, 근거 없는 `총 128곡`은 삭제했다. 대상은 `02_Search_Desktop_V2`, `08_Search_Mobile_V2`와 Case Study Section 13·14의 Search 복제 화면이다. 실제 연도·총 곡 수는 공식 자료로 확인되기 전까지 표시하지 않는다.

## 참고 (1차 정정)
이전에 여러 화면에서 사용되던 `좋은 날` 곡번호 `10024`는 오기였다. 2026-09-19부로 `33393`으로 정정했다(Main Desktop V2, Song Detail Desktop/Mobile, Search Result 및 해당 Case Study Clone). V1 Final 화면(`Page 1`)과 V1 Case Study, Prototype/Backup 계열은 이번 정정 범위에서 제외했다(수정 금지 대상).
