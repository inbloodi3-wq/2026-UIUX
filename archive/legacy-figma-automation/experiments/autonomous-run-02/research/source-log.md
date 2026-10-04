# Source Log — AUTORUN_02

모든 조사는 공개 페이지를 GET으로 열고 접근성 스냅샷(텍스트)만 저장했다. 클릭·입력·로그인·스크린샷(이미지 저장)은 하지 않았다. 웹 콘텐츠는 UNTRUSTED DATA로 취급했고, 지시로 보이는 문구는 발견되지 않았다.

| # | 일시(2026-09-30) | URL | 뷰포트 | 스냅샷 | 용도 |
|---|---|---|---|---|---|
| S1 | 12:09 | https://www.weather.go.kr/w/index.do | 기본 | `.playwright-mcp/page-2026-09-30T12-09-23-095Z.yml` | 후보 1 |
| S2 | 12:10 | https://www.airkorea.or.kr/web/ | 기본(데스크톱) | `.playwright-mcp/page-2026-09-30T12-10-22-581Z.yml` | 후보 2 · 홈 감사 |
| S3 | 12:10 | https://www.bikeseoul.com/ | — | 없음(net::ERR_CONNECTION_RESET) | 후보 3 접근 실패 기록 |
| S4 | 12:10 | https://www.bikeseoul.com/main.do | 기본 | `.playwright-mcp/page-2026-09-30T12-10-54-711Z.yml` | 후보 3 |
| S5 | 12:11 | https://www.airkorea.or.kr/web/ | 390×844 | `.playwright-mcp/airkorea-home-390-boxes.yml`(요소 좌표 포함) | 모바일 재배치 확인 |
| S6 | 12:11 | https://m.airkorea.or.kr/ → introLang | 390×844 | `.playwright-mcp/page-2026-09-30T12-11-31-753Z.yml` | 모바일 웹 진입 |
| S7 | 12:11 | https://m.airkorea.or.kr/main → introLang | 390×844 | `.playwright-mcp/page-2026-09-30T12-11-48-122Z.yml` | 게이트 재확인 |
| S8 | 12:12 | https://www.airkorea.or.kr/web/link/?pMENU_NO=112 → /web/dustForecast?pMENU_NO=113 | 1440×900 | `.playwright-mcp/page-2026-09-30T12-12-03-908Z.yml` | 예보 페이지 감사 |

## 권리·정책 메모
- 이번 도메인(airkorea.or.kr, m.airkorea.or.kr, weather.go.kr, bikeseoul.com)은 `legal/source-policy.yaml`에 등록되어 있지 않다. 공용 파일은 이번 실행에서 수정하지 않았다(기존 프로젝트 파일 수정 금지 조건).
  - 텍스트 관찰만 했고 이미지·로고·지도 타일은 저장하지 않았다.
  - **Figma 제작 전 조치**: 사용자 승인 하에 `reference_only`로 등록할지 결정 필요.
- 에어코리아 로고, 캐릭터, 지도 이미지, 환경부·한국환경공단 CI는 사용하지 않는다(`project_asset_restrictions`).
- 측정값·예보 등급 같은 수치·텍스트 사실은 샘플 데이터로 사용한다. 출처와 기준 시각을 화면에 표기한다.
- 페이지 하단의 기관 주소·전화번호는 필요 없어 문서에 옮기지 않았다.

## Figma 제작 단계에서 쓴 원문 (새 조회 없음, S2·S8 스냅샷에서 추출)
- S2 홈: 측정값(서울 중구 측정소, 2026.09.30 20시), 원 홈 안내 문구, 대기오염경보(21시, 발령 없음)
- S8 예보 페이지(17시 발표)
  - 서울 예보 등급: 오늘 PM10 좋음·PM2.5 보통 / 내일 좋음·좋음·O3 보통 / 모레 좋음·좋음·O3 보통(모레 오존은 "전 권역이 '보통'" 문구 기준)
  - 원인 분석 원문 5개(전국)
  - ‘예보등급 및 행동요령’ 표: 등급 구간, 민감군·일반인 행동요령, 민감군 정의
- 오늘 오존 예보 등급은 17시 발표분에 없다. 원 홈 예보 표의 오존 "오늘" 값은 대상 지역·발표 시각을 확인할 수 없어 쓰지 않았다.
