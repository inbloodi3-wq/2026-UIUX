# Legacy — Figma Design Automation (READ ONLY)

2026-10-04에 웹사이트 제작 자동화로 전환하면서 보관한 이전 시스템과 프로젝트 기록이다. **현재 Pipeline은 이 디렉터리를 읽거나 Resume하지 않는다.** 삭제·수정하지 않는다(삭제는 Level 3).

## 원래 위치 → 보관 위치
이 안의 문서들이 가리키는 경로는 이동 전(저장소 루트 기준) 경로다.

| 보관 위치 | 원래 위치 | 내용 |
|---|---|---|
| `config/project.yaml` | `config/project.yaml` | TJ MEDIA 리디자인 Config |
| `config/experiments/`, `config/portfolio/` | 동일 | AUTORUN_01·02, PORTFOLIO_03 Config |
| `automation/` | `automation/` | 위 프로젝트들의 Pipeline State |
| `research/`, `ia/`, `design-system/`, `figma/`, `references/` | 루트 동일 이름 | TJ MEDIA 프로젝트 데이터 |
| `experiments/`, `portfolio/` | 루트 동일 이름 | AUTORUN_01–03, PORTFOLIO_03 문서 |
| `legal/image-provenance-todo.md` | `legal/` | 출처 미확인 이미지 8건 TODO (미해결) |
| `claude-core/` | `.claude/rules`, `.claude/agents`, `.claude/skills` | Figma 전용 Rule 1 · Agent 3 · Skill 4 |
| `scripts/init-project.ps1` | `scripts/` | 이전 스키마용 초기화 스크립트(실행하지 않는다) |
| `output/` | `output/` | git 미추적 로컬 산출물(TJ QA 보고서, PORTFOLIO_03 PDF). `.gitignore` 대상 |

## 참고 가치가 있는 것
- `experiments/autonomous-run-03/` — Figma 없이 HTML/CSS로 화면을 만들고 로컬 서버 + Playwright로 Render QA한 기록. 새 시스템의 Calibration 참고 자료다(코드를 복제하지 않는다. inline `<style>`, px 고정 타입, 단일 Breakpoint, Google Fonts `@import`는 새 규칙에서 금지).

## 포트폴리오 사이트에 이 작업들을 실을 때
`legal/image-provenance-todo.md`의 이미지와 타사 사이트 캡처는 권리 미확인 상태다. `rights-auditor` 승인(`assets/manifest.jsonl`의 `APPROVED`) 없이는 `docs/`에 넣지 않는다.
