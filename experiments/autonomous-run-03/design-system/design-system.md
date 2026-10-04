# Design System — AUTORUN_03 · Sky Glyphs

- 토큰 파일: `tokens.css` (모든 UI·Case Study가 공유)
- 근거와 판단: `../visual-direction.md`, `../why-decision-log.md`
- 공식 기상청 아이덴티티·기호가 아닌 **제안 [P]**이다.

## Glyph 정의 (SVG 24×24, 인라인 `<symbol>`)
| id | 상태(원문) | 구성 | 색 변수 |
|---|---|---|---|
| `g-clear` | 맑음 | 원 r6 | `--g-sun` |
| `g-partly` | 구름많음 | 원 r4.5(좌상) + 구름(원 3개 + 바닥 사각) | `--g-sun`, `--g-cloud` |
| `g-overcast` | 흐림 | 뒤 구름(위로 4.5 이동) + 앞 구름 | `--g-cloud`, `--g-overcast` |
| `g-rain-light` | 약한비단속 | 구름(위로 3 이동) + 끊긴 빗금 2개 | `--g-overcast`, `--g-rain` |
| `g-nodata` | 자료 없음 | 점선 원 r7 | `--ink-2` |

- 색은 `style="fill:var(--g-…)"`로 지정해 `<use>` 위치의 CSS 변수를 상속한다. 밤 배경에서는 변수만 바꾼다(`--g-sun: var(--glyph-sun-night)`).
- 기호는 **항상 상태 텍스트와 함께** 쓴다. 기호만 단독 사용 금지(`aria-hidden="true"` + 옆 텍스트).

## Components
| 이름 | 구성 | 상태 |
|---|---|---|
| `site-header` | 워드마크 + "리디자인 콘셉트" 태그 + 메뉴 4개 | current |
| `notice-inline` | 한 줄 공지 + 닫기 | — |
| `now-hero` | 지역 · 120 기호 · 기온 Display · 상태 · 갱신 시각 · 특보 칩 | 밤 |
| `station-card` | 24 기호 + 지점 · 상태 · 기온 | 기본 |
| `station-row` | 목록 행(24 기호 · 지점 · 상태 · 기온) | 기본 / 자료 없음 |
| `empty-module` | 점선 기호 + 설명 + 빈 슬롯 | 데이터 미수집 |
| `dist-bar` | 상태별 개수 막대(실제 개수 비례) + 범례 | — |
| `region-card` | 권역명 + 지점 수 + `station-row` 목록 | — |
| `link-card` | 다음 행동 링크 | — |
| `site-footer` | 출처 · 비공식 고지 | — |

## Layout
- Desktop: 최대 1440, 좌우 여백 96, 12열 개념 그리드(열 간격 24)
- Mobile(≤ 600px): 좌우 여백 20, 1열 스택, 기온 Display 72
- `word-break: keep-all`로 한글 어절 단위 줄바꿈

## 대비 (WCAG 상대휘도 수동 계산 — 도구 실행 없음, 근사값)
| 조합 | 비율 |
|---|---|
| ink #0E1726 / paper #F6F4EE | ≈ 16 : 1 |
| ink-2 #4A5568 / paper | ≈ 6.8 : 1 |
| 흰 글자 / sky-night #10203F | ≈ 15 : 1 |
| on-night-2 #B9C3D6 / sky-night | ≈ 9.1 : 1 |
| accent #1F4FD1 / paper | ≈ 5.5 : 1 |
| glyph-sun #B87400 / paper (그래픽) | ≈ 3.4 : 1 |
| glyph-cloud #6B7A90 / paper (그래픽) | ≈ 4.0 : 1 |
| glyph-sun-night #FFC233 / sky-night (그래픽) | ≈ 10 : 1 |

계산 도구를 실행하지 않은 수동 근사값이다. 렌더 기반 확인은 UNVERIFIED다.
