# Automated Web Redesign Portfolio System

Claude Code의 Rules, Subagents, Skills와 Figma MCP를 사용해 웹사이트 리디자인 포트폴리오 제작을 자동화하는 범용 시스템이다.

## 목적
Research → Reference Research → Visual Direction → IA → Design System → Asset Sourcing → Figma 화면 제작 → Responsive → QA → Final Rights Audit까지, 웹 리디자인 포트폴리오 제작 과정을 하나의 Pipeline으로 자동화한다.

이 시스템 자체(`.claude/agents`, `.claude/rules`, `.claude/skills`, `legal/source-policy.yaml`)는 특정 회사나 산업에 종속되지 않는다. 프로젝트별 정보는 `config/project.yaml`과 `research/`, `ia/`, `design-system/` 등 프로젝트 데이터 디렉터리에 저장된다.

## 폴더 구조
- `config/` : 프로젝트 정의(`project.yaml`)와 새 프로젝트용 템플릿(`project-template.yaml`)
- `automation/` : Pipeline 진행 상태(`pipeline-state.json`)
- `.claude/rules` : 프로젝트에 관계없이 항상 적용되는 규칙
- `.claude/agents` : 역할별 Subagent (WHO / 판단 책임)
- `.claude/skills` : 반복 작업 절차 (HOW-TO)
- `research` : 현황 분석, 사용자 정의, 문제 정의 — 현재 프로젝트 데이터
- `references` : 웹 디자인 레퍼런스 조사 기록 — 텍스트 관찰만, 이미지 저장 없음
- `ia` : 정보구조(사이트맵), 사용자 플로우 — 현재 프로젝트 데이터
- `design-system` : 현재 프로젝트의 디자인 토큰, Visual Language
- `assets` : 이미지 Asset 원본/승인/생성본과 `manifest.jsonl`
- `legal` : Provider Policy(`source-policy.yaml`, 범용)와 라이선스 확인 근거
- `figma` : Screen Registry, 파일 링크
- `output` : 내보내기 결과물

## 새 프로젝트 시작 방법
1. `config/project-template.yaml`을 `config/project.yaml`로 복사하고 값을 채운다(Project Name/URL/Goals/Audience/Core Task/Viewports/Project-specific Constraints 등). PowerShell 환경이면 `./scripts/init-project.ps1 -New`로 이 단계와 아래 3번의 Runtime 초기화를 함께 수행할 수 있다(기존 데이터를 임의로 지우지 않으며 실행 전 확인을 거친다).
2. `research/`, `ia/`, `design-system/`, `figma/screen-registry.md`, `figma/file-links.md`의 자유 서술 문서를 새 프로젝트 내용으로 다시 작성한다(형식이 프로젝트마다 달라 스크립트가 자동으로 비우지 않는다).
3. `references/reference-index.jsonl`, `assets/manifest.jsonl`, `legal/license-evidence.jsonl`을 비우고 `automation/pipeline-state.json`을 초기 상태로 재설정한다.
4. Claude Code를 실행하고 Pipeline을 시작한다(`.claude/agents/automation-orchestrator.md` 참고).

`.claude/` 내부(Agent/Rule/Skill)는 새 프로젝트를 시작해도 수정할 필요가 없다.

## Pipeline 실행 방법
```powershell
cd <project-dir>
claude
```
Claude는 세션 시작 시 `config/project.yaml`과 `automation/pipeline-state.json`을 먼저 읽고, `automation-orchestrator`가 정의한 순서와 통과 조건에 따라 다음 단계를 진행한다. 각 단계는 파일 존재 여부가 아니라 실제 내용(Placeholder/TODO 없음, 필수 데이터 존재)으로 PASS 여부를 판정한다.

## Asset Safety 개념
- 최종 결과물에 사용하는 외부 이미지는 공식 Provider API(Pixabay/Unsplash/선택적 Pexels)로만 소싱한다.
- Pinterest/Behance/Notefolio 등은 레퍼런스 조사 전용이며 이미지를 다운로드하거나 최종 결과물에 삽입하지 않는다.
- 출처·라이선스·콘텐츠 안전성이 불명확한 이미지는 사용하지 않는다(Fail Closed, UNKNOWN = REJECTED).
- Global Safety Policy는 `legal/source-policy.yaml`(범용)이 담당하고, 프로젝트별 추가 제한은 `config/project.yaml`의 `project_asset_restrictions`가 담당한다.
- 내부에서 생성한 Vector/SVG Asset(`assets/generated/`)도 예외 없이 `assets/manifest.jsonl`에 기록한다.
- API Key는 `.env`(gitignore 처리)에만 저장한다. `.env.example`을 복사해서 사용한다.

## 공유 시 제외되는 파일
`.git/`, `.env`, `.claude/settings.local.json`, 임시 파일, 로그, 다운로드 캐시, 다운로드된 원본/승인 이미지 바이너리(`assets/original/*`, `assets/approved/*`)는 이 시스템의 배포본/공유본에 포함하지 않는다. `.gitignore`에 반영되어 있다.

## 현재 프로젝트
이 저장소에는 예시로 TJ미디어(TJ MEDIA) 리디자인 프로젝트가 진행 중이다. 세부 내용은 `config/project.yaml`, `research/`, `ia/`, `figma/screen-registry.md`에서 확인한다.
