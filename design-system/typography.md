# Typography

Noto Sans KR을 임시 작업 폰트로 사용한다. 최종 폰트는 Pretendard로 교체할 예정이며, 교체 시 Layout이 깨지지 않도록 모든 텍스트는 Auto Layout + Auto Height를 사용하고 Fixed Height를 지양한다.

## Text Style (Figma Text Style 기준)

| Style | 크기(px) | Weight | 용도 |
|---|---|---|---|
| Display | 48 | Bold | (예비) 대형 타이틀 |
| H1 | 36 | Bold | 페이지 제목급 헤드라인 |
| H2 | 28 | Bold | Hero Headline |
| H3 | 22 | Bold | Section Heading |
| Title | 18 | Bold | 카드/서브 제목, Header 로고 |
| Body Large | 16 | Regular | Nav, Song Title, Card Title |
| Body | 14 | Regular | 본문, Artist, 설명 텍스트 |
| Caption | 12 | Regular | 라벨/캡션/메타데이터 |
| Button Label | 14 | Medium | Button/Chip 텍스트 |

## Mobile Typography Scale
Desktop 값을 비율로 축소하지 않고, 위 Text Style 중 모바일 화면에서 실제로 읽기 쉬운 크기를 그대로 재사용한다.

| 역할 | Style | 크기(px) |
|---|---|---|
| Page Title / Section Heading | H3 | 22 |
| Hero Headline | H2 | 28 |
| Card Title / Song Title | Body Large (Bold override) | 16 |
| Body / Artist | Body | 14 |
| Metadata / Caption | Caption | 12 (이보다 작게 만들지 않는다) |

## 검색 강조 원칙
SearchBar의 입력 텍스트는 최소 `Body`(14px) 이상을 사용해 시각적 우선순위와 가독성을 확보한다. Hero의 SearchBar는 Body Large(16px) 이상을 사용할 수 있다.

## 일관성 규칙
- 동일 역할(예: Song Title, Artist, Section Heading)은 화면이 달라도 같은 Font Size/Weight를 사용한다. 다른 화면에서 우연히 값이 달라졌다면 버그로 간주하고 통일한다.
- 새 Typography Style을 임의로 추가하지 않는다. 위 9개 Style 안에서 Weight(fontName)만 상황에 맞게 override한다.

## V2 Ranking/Data Number 예외 (2026-09-18, Direction A 승인 반영)
- Font Family는 Noto Sans KR을 그대로 유지한다(Pretendard 교체 없음). Typography Scale(9개 Style) 자체도 전면 수정하지 않는다.
- 다만 **Ranking Number, Song Number, Chart Data**는 시각적 위계를 강화하기 위해 기존 9개 Style 중 `Display`(48px Bold)를 그대로 사용해 크게 표현할 수 있다(새 Size Style을 만드는 것이 아니라 기존 Display Style을 이 용도에도 재사용하는 것).
- 적용 대상은 Music Chart의 Ranking Number, Song Detail/Latest Songs의 Song Number 강조 표현에 한정한다. 본문/제목 등 다른 역할에 Display를 남발하지 않는다.
