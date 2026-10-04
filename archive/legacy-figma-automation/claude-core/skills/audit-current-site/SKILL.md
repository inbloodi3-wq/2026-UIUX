---
name: audit-current-site
description: 현행 웹사이트의 정보구조와 config/project.yaml 기준 Segment 혼재 지점을 조사하고 기록할 때 사용한다.
---

# Audit Current Site

## Required Inputs
- `config/project.yaml`의 `project.url`, `audiences`, `primary_user_tasks`

## Procedure
1. 현행 사이트의 주요 메뉴/화면 목록을 수집한다.
2. `config/project.yaml`의 `information_architecture.segment_separation_required`가 `true`이면, 각 화면에 서로 다른 Segment의 콘텐츠가 함께 있는지 확인한다.
3. `primary_user_tasks`의 진입점 위치와 클릭 depth를 기록한다.
4. 결과를 `research/current-site-audit.md`에 작성한다.
5. 문제로 판단되는 지점은 `research/problem-definition.md`에 반영한다.

## Do Not
- 이 단계에서 정보구조를 재설계하지 않는다.
- 디자인 값을 결정하지 않는다.

세부 항목은 `research/current-site-audit.md`의 표 형식을 그대로 사용한다.
