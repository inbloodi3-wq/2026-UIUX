---
name: review-redesign
description: Screen ID·토큰·Segment·Primary Task·Scope 검수에 더해 Render 기반 Visual QA, Foundation Safety, Style Convergence, 중복/압축을 검사해 PASS/REVIEW/FAIL을 판정할 때 사용한다.
---

# Review Redesign

## Required Inputs
- `config/project.yaml`
- `figma/screen-registry.md`
- `design-system/foundation-grammar.md`(없으면 typography/spacing/grid), `design-system/visual-language.md`
- 대상 Frame의 Render(`get_screenshot`)

## Procedure
1. `config/project.yaml`을 읽어 Segment 분리 여부, Primary Task, Asset 제한, Visual Expression, Portfolio Context를 확인한다.
2. 대상 Frame을 Render한다. Render 없이 Visual QA 항목을 PASS 처리하지 않는다.
3. `.claude/skills/review-redesign/checklist.md`의 각 항목을 검사한다(세부 항목은 이 문서에 중복 기재하지 않는다).
4. 전체 판정을 `PASS / REVIEW / FAIL`로 내리고 `automation/pipeline-state.json`의 `qa_status`에 반영할 수 있도록 보고한다.

## Reporting
- File / Frame:
- Screen ID:
- Problem:
- Decision Level: 1 / 2 / 3
- Recommended Fix:
