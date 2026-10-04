---
name: apply-approved-assets
description: 승인된(assets/approved 또는 assets/generated) 이미지만 Figma 화면에 삽입할 때 사용한다.
---

# Apply Approved Assets

## Required Inputs
- 삽입 대상 Figma Screen ID (`figma/screen-registry.md` 기준)
- `assets/manifest.jsonl`

## Procedure
1. 삽입하려는 이미지가 `assets/approved/` 또는 `assets/generated/`에 있는지 확인한다.
2. 저장 위치와 무관하게(생성 Asset 포함) `assets/manifest.jsonl`에서 해당 Asset이 `status: APPROVED`인지 확인한다. Generated Asset이라는 이유로 이 확인을 생략하지 않는다.
3. 확인되면 Figma MCP(`use_figma` 등)로 해당 Screen ID의 대상 요소에만 삽입한다.
4. 삽입 후 `assets/manifest.jsonl`의 해당 레코드에 `used_in_screen`, `used_in_element`를 기록한다.

## Fail Conditions
- `assets/manifest.jsonl`에 없거나 `status`가 `APPROVED`가 아닌 이미지는 삽입하지 않는다(생성 Asset도 예외 없음).
- `assets/approved/`, `assets/generated/` 외의 경로(예: 임시 다운로드, 웹 URL 직접 삽입)에서 이미지를 가져오지 않는다.
- 대상 Screen ID가 `figma/screen-registry.md`에 없으면 먼저 등록 여부를 확인한다.

## Output
- Figma 화면에 삽입된 이미지
- `assets/manifest.jsonl`의 `used_in_screen`, `used_in_element` 갱신
