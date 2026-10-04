---
name: final-rights-audit
description: 최종 Figma 화면의 모든 Image Fill/External Asset을 검사해 권리 검증이 완료되지 않은 이미지가 없는지 확인할 때 사용한다.
---

# Final Rights Audit

## Required Inputs
- `figma/screen-registry.md`의 Final 화면 목록
- `assets/manifest.jsonl`

## Procedure
1. `figma/screen-registry.md`에 등록된 각 Final 화면에서 사용 중인 모든 Image Fill/External Asset을 확인한다.
2. 각 이미지에 대해 다음을 검사한다(외부 이미지와 내부 생성 Asset을 동일한 기준으로 검사한다).
   - `assets/manifest.jsonl`에 레코드가 존재하는가
   - `status: APPROVED`인가
   - `license_name`이 존재하는가(외부 이미지는 `license_url`도, 내부 생성 Asset은 `license_name: Original Project Asset`과 `generation_method`도 확인)
   - `used_in_screen`, `used_in_element`가 기록되어 있는가
3. 결과를 `output/asset-rights-report.md`에 기록한다.

## Fail Conditions
- 위 4개 조건 중 하나라도 검증되지 않은 이미지가 한 건이라도 있으면 프로젝트를 COMPLETE 처리하지 않는다.
- 검증되지 않은 이미지가 있으면 보고서에 어떤 화면·요소인지 구체적으로 기록한다.

## Output
- `output/asset-rights-report.md`: 화면별 이미지 목록, 검증 결과(PASS/FAIL), FAIL 사유, 전체 결론(COMPLETE 가능 여부)
