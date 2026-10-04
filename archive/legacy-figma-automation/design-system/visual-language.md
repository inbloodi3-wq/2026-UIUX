# Visual Language

`.claude/agents/visual-director.md`가 `references/reference-index.jsonl`(8건, 2026-09-17)을 종합해 채운 V2 Visual Direction이다. 확정 근거의 전체 서술은 `output/visual-direction/TJ_MEDIA_VISUAL_DIRECTION_V2.md`, `output/visual-direction/TJ_MEDIA_REFERENCE_DIRECTION.md`를 참고한다.

## Visual Keywords (최종 승인, 2026-09-18 — Direction A: Night Stage)
Stage Light, Spotlight, Waveform, Equalizer, Deep Charcoal, Cyan Glow, Music Data, Energetic but Controlled.
Concept: 무대 조명과 사운드 에너지를 Dark Hero, Cyan Spotlight, Waveform/Equalizer 그래픽으로 표현한다.

> 2026-09-17에는 "Night Stage 70% + Data Rhythm 30% 블렌드"로 기록했었다. 2026-09-18 최종 승인에서 단일 Direction A(Night Stage)로 재확정됐고, Data Rhythm이 강조하던 Large Ranking Number/Song Number/Data Highlight는 삭제가 아니라 위 "Music Data" 키워드와 아래 Layout Rhythm/Allowed Motifs 규칙 안으로 통합됐다(이전 기록은 `config/project.yaml`의 `visual_direction.superseded_note`에 보존).

## Layout Rhythm (Main 기준, 2026-09-18 재확정)
Dark Hero → White Latest Songs → Dark Music Chart → White Service/Content Section. 모든 Section을 동일하게 만들지 않는다. Search Result는 예외적으로 전체 Neutral/Light를 유지한다(Design Rule).

## Image Treatment
실사 사진/스톡 이미지를 기본으로 사용하지 않는다. AI Generated/Self-created 추상 그래픽(Stage Light, Waveform, Spectrum)과 단일 Generated Artwork System(곡마다 완전히 다른 이미지가 아니라 공유 Grid/Waveform/Gradient/Typography 규칙 기반)을 사용한다. 실제 Album Cover는 `config/project.yaml`의 `project_asset_restrictions`에 따라 사용하지 않는다.

## Typography Character
`design-system/typography.md`의 확정 크기/두께 값은 유지한다(덮어쓰지 않음). V2에서는 Display(48px)와 대형 숫자 표현(Ranking Number, Song Number)의 사용 빈도를 Chart/Song Detail 페이지에서 적극적으로 늘린다(REF-005/006/007 근거).

## Density
Chart 페이지는 정보 밀도를 높게 유지하고(Beatport/Billboard 근거), Latest Songs/Main은 여백을 넉넉히 유지한다(Apple Music/Bandcamp 근거). Search Result는 기존 밀도를 그대로 유지한다.

## Card Treatment
Artwork 기반 카드(Latest Songs, Song Detail Related)는 Artwork Container(Small/Medium/Large) 공용 컴포넌트를 사용한다(`components.md` 참고). 기존 SongItem/ChartItem/MusicCard의 카드 언어는 변경하지 않는다.

## Section Transition
Dark Section 진입/이탈 지점(Hero→New Songs, New Songs→Chart)에서 배경색 전환 자체가 리듬을 만든다. 곡선형 Divider나 애니메이션 전환은 사용하지 않는다(Sound Motion Direction 제외 결정과 일치).

## Interaction Character
정적 그래픽 중심(Waveform/Spectrum은 장식적 정지 이미지). SoundCloud류의 스크럽 가능한 인터랙티브 Waveform Player는 만들지 않는다(REF-004 Do Not Copy 근거).

## Allowed Motifs (확정, 2026-09-17)
- Stage Spotlight (Hero, Radial Glow, Cyan)
- Waveform (Hero/Section Accent, 정적 그래픽)
- Audio Spectrum (Hero/Chart 배경 그래픽)
- Equalizer Bar (Chart 그래픽)
- Large Data Typography (Ranking Number, Song Number — Chart/Song Detail)

**적용 범위 제한(Design Rule)**: 위 Motif는 Hero, Chart, Section Accent에만 사용한다. Latest Songs 기본 그리드와 Song Request 폼에는 확산시키지 않으며, **Search Result Song Row Divider는 일반 Divider를 유지하고 Waveform으로 변경하지 않는다.**

**의미 연결 원칙(2026-09-18)**: 그래픽은 Decoration 용도로만 남발하지 않는다. Waveform/Equalizer/Spectrum/Spotlight는 각각 Music/Search/Ranking이라는 실제 콘텐츠와 의미적으로 연결되는 자리에서만 사용한다(예: Waveform은 검색·재생과 관련된 영역, Equalizer/Ranking Number는 Chart의 순위 데이터 영역).

## Avoided Motifs
- 거대한 Microphone Graphic, Headphone 3D Object, Singer/Concert Stock Photo, Neon Gradient, Glassmorphism, 과도한 Blur, AI Image Generator 특유의 화려한 Background — 지금까지의 리디자인 작업에서 반복적으로 배제된 항목이므로 기본값으로 유지한다.
- (V2 추가) 전체 화면 Dark Theme화, Search Result/Song Request의 Graphic Motif 남용.

## Reference-derived principles
`references/reference-index.jsonl`(REF-001~008) 8건에서 반복 관찰된 공통 패턴:
1. Dark 테마는 전면 적용이 아니라 특정 목적(Hero/Chart)에 국소 적용될 때 가장 설득력 있다(Spotify/Shazam/Beatport).
2. Waveform/Spotlight는 정당한 음악 제품 시각 언어다(SoundCloud/Shazam) — 장식이 아니라 Hero/Chart Accent로 한정한다.
3. Ranking 표현은 숫자 크기 자체가 Identity가 된다(Billboard/Beatport).
4. Discovery 계열 페이지는 절제된 그리드가 더 설득력 있다(Apple Music/Bandcamp) — Latest Songs에 강한 Motif를 확산시키지 않는다.
전체 상세는 `output/visual-direction/TJ_MEDIA_REFERENCE_DIRECTION.md` 참고.

## 갱신 규칙
- `visual-director` Agent만 이 문서를 갱신한다.
- 특정 레퍼런스 1건이 아니라 다수 레퍼런스의 공통 패턴만 반영한다.
- `design-system/colors.md`, `typography.md`, `spacing.md`, `grid.md`의 확정 값과 상충하면 기존 확정 값이 우선한다.
