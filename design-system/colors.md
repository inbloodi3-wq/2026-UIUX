# Colors

Figma Variable Collection `TJ/Color` 기준으로 확정되었다. Noto Sans KR/Pretendard 전환과 무관하게 색상 값은 그대로 유지한다.

## Brand

| Token | Value | 용도 |
|---|---|---|
| color/accent (brand-primary) | #0EA5BE | 검색, CTA, Active/Selected State, Ranking, Link, 소형 강조 아이콘 |
| color/accent-subtle | 연한 Cyan | 곡번호 배지 등 절제된 강조 배경 |

## Surface

| Token | Value | 용도 |
|---|---|---|
| color/background | #FFFFFF | 기본 배경 |
| color/surface | #F2F2F2 | 카드/섹션 배경, Icon Badge 배경 |
| color/disabled | #E0E0E0 | 비활성/썸네일 Placeholder |
| Dark Section | #1A1A1A 근사(다크 차콜) | Main Hero, Music Chart, Section Accent, Case Study Showcase(V2, 2026-09-17 확장), Footer |

## Text

| Token | Value | 용도 |
|---|---|---|
| color/text-primary | #1A1A1A | 본문/제목, Song Title |
| color/text-secondary | #666666 | 보조 텍스트, Artist |
| color/text-tertiary | #999999 | 3차 텍스트, Metadata, Caption |

## Border

| Token | Value | 용도 |
|---|---|---|
| color/border | #D8D8D8 | 카드/입력 요소 얇은 테두리(1px, Inside) |

## Brand Cyan 사용 원칙 (Direction A — Night Stage, 2026-09-18 최종 승인 반영)
- Cyan은 다음 용도로 제한한다: Primary Interaction, Search Focus, Active Tab, Ranking Highlight, Spotlight/Waveform Graphic, 주요 Data Highlight, CTA. 큰 배경 면적을 Cyan으로 채우지 않는다.
- 화면 전체 Neutral/White 계열 약 80~90% : Cyan Accent 약 10~20% 이내를 목표로 한다(2026-09-17에는 10~15%였으나 2026-09-18 승인으로 상한이 20%까지 조정됨).
- Dark Section(어두운 배경) 허용 범위(V2, 2026-09-18 재확정):
  - **Allowed**: Main Hero, Music Chart의 핵심 영역, 제한적인 Music Data/Highlight Section, Case Study Showcase
  - **Not Recommended**: Search Result 전체, Song Request 전체, 모든 Page의 Dark Theme화
  - 근거: `output/visual-direction/TJ_MEDIA_VISUAL_DIRECTION_V2.md`, `output/visual-direction/TJ_MEDIA_REFERENCE_DIRECTION.md`(REF-001/002/006 — Dark는 전면 적용이 아니라 국소 적용일 때 설득력 있음)
- **주의**: Dark + Cyan을 과도하게 사용해 Gaming/Cyberpunk/Neon UI처럼 보이지 않도록 한다. 목표는 "현대적인 Karaoke/Music Service"이지 "게임 UI"가 아니다.

## 영역별 색상 원칙
V2 Scope Freeze(2026-09-17) 이후 프로젝트 Core는 사실상 단일 Segment(B2C/음악 탐색 경험)다. B2B 전용 화면은 V2에 없으므로 이 원칙은 V1 참고 이력으로 남긴다: B2C(`c-`)와 B2B(`b-`)는 동일한 브랜드 색상 체계를 공유하되, B2B는 `color/surface` 계열을 기본으로 사용해 톤을 구분한다.
