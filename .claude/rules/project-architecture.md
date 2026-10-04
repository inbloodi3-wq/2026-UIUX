# Project Architecture Rules

## 기본 구조
- 프로젝트 정의는 `config/project.yaml`에서 관리한다(새 프로젝트는 `config/project-template.yaml`을 복사).
- Pipeline 진행 상태는 `automation/pipeline-state.json`(기본 프로젝트)에서 관리한다. 실험 프로젝트는 `config/experiments/<id>.yaml`과 `automation/experiments/<id>-state.json`으로 분리한다.
- Claude 설정(Automation Core)은 `.claude/`에서 관리하며 특정 프로젝트에 종속되지 않는다.
- 현황 분석과 리서치는 `research/`에서 관리한다.
- 웹 디자인 레퍼런스 조사(텍스트 관찰만)는 `references/`에서 관리한다.
- 정보구조(사이트맵)와 사용자 플로우는 `ia/`에서 관리한다.
- Foundation Grammar(`foundation-grammar.md`), 디자인 토큰, Visual Language는 `design-system/`에서 관리한다.
- 이미지 Asset(원본/승인/생성)과 사용 이력은 `assets/`에서 관리한다.
- Asset/Reference 출처 정책과 라이선스 확인 근거는 `legal/`에서 관리한다.
- Figma 관련 링크, Screen Registry, 반영 메모는 `figma/`에서 관리한다.
- 내보내기 결과물은 `output/`에만 저장한다.

## Source of Truth
`research/`, `references/`, `ia/`, `design-system/`, `assets/manifest.jsonl`, `legal/`을 원본으로 간주한다. Figma 파일은 이 원본을 기반으로 제작된 산출물이며, Figma에서 먼저 바꾸고 원본 문서에 나중에 반영하지 않는다.

## 수정 원칙
- 결과물(Figma 화면, output)에서 발견한 문제를 역수정하지 않고, 원본 문서(`research/`, `ia/`, `design-system/`)를 먼저 수정한 뒤 Figma에 반영한다.
- 공통 값(색상, 타이포, 간격) 변경은 `design-system/`에서 수정한다.
- 화면 고유 값(카피, 개별 레이아웃)만 해당 IA 문서에서 수정한다.
- 사용자 요청 범위를 넘어 구조를 임의 변경하지 않는다. 단 승인된 Scope/Visual Direction 안의 Layout·Section 재구성은 `CLAUDE.md` Decision Authority Level 1/2에 따라 자율 수행한다(Scope·Brand·Research Fact 변경은 Level 3).
- 서로 다른 Segment 간 컴포넌트를 공유할 경우, 공유 근거를 `design-system/components.md`에 기록한다.
- Asset의 출처/라이선스/콘텐츠 안전성이 불명확하면 Figma에 적용하지 않는다(Fail Closed, `legal/source-policy.yaml` 참고).
