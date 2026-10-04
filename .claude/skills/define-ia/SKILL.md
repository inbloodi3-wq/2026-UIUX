---
name: define-ia
description: config/project.yaml 기준으로 사이트맵을 설계하고 Primary Task 중심의 사용자 플로우를 정의할 때 사용한다.
---

# Define IA

## Required Inputs
- `research/current-site-audit.md`
- `research/problem-definition.md`
- `config/project.yaml`의 `information_architecture`, `primary_user_tasks`, `screen_id_policy`

## Procedure
1. 현행 사이트맵을 `ia/sitemap-current.md`에 정리한다.
2. `information_architecture.segment_separation_required`가 `true`이면 `segments`별로 사이트맵을 분리해 설계한다. `false`이면 단일 사이트맵으로 설계한다.
3. `primary_user_tasks`의 진입점을 핵심 화면 상단에 배치한다.
4. Screen ID를 `.claude/rules/naming-convention.md`와 `screen_id_policy` 규칙에 맞게 부여한다.
5. 결과를 `ia/sitemap-redesign.md`에 작성한다.
6. 주요 사용자 플로우(이 프로젝트의 핵심 Task를 완료하는 경로)를 `ia/user-flows.md`에 작성한다.

## Completion
`segment_separation_required`가 `true`인 경우, 모든 화면이 `segments`에 정의된 영역 중 하나로 분류되어야 한다. `false`인 경우 이 조건은 적용하지 않는다.
