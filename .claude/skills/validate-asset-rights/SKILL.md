---
name: validate-asset-rights
description: PENDING 상태의 Asset(Stock·사용자 제공·자체 제작 이미지, Font)을 Provider/License/시각적 콘텐츠 기준으로 검사해 APPROVED 또는 REJECTED로 확정할 때 사용한다.
---

# Validate Asset Rights

## Required Inputs
- `assets/manifest.jsonl`의 `status: PENDING` 레코드
- `legal/source-policy.yaml`
- `legal/license-evidence.jsonl`
- `config/project.yaml`의 `project_asset_restrictions`

## Procedure
1. PENDING 레코드마다 provider가 `final_asset_allowed`인지 `legal/source-policy.yaml`에서 확인한다.
2. `legal/license-evidence.jsonl`에서 해당 provider의 라이선스 확인 근거가 있는지 확인한다. 없으면 provider의 공식 라이선스 페이지 URL과 확인 날짜, 핵심 조건을 먼저 기록한다.
3. 이미지를 직접 열람하여 다음을 검사한다: Recognizable person, Celebrity, Trademark/Logo/Brand, Product packaging, Copyrighted artwork/Poster/Album artwork, Movie/TV frame, 저작권 콘텐츠가 보이는 화면, 차량 번호판, Private/restricted property, 민감한 개인정보.
4. `config/project.yaml`의 `project_asset_restrictions`(프로젝트별 추가 금지 항목)에 해당하는지 확인한다. 이 목록은 프로젝트마다 다르며 Skill 자체에 하드코딩하지 않는다.
5. 하나도 해당하지 않고 라이선스가 확인된 경우에만 `assets/approved/`로 복사하고 `status: APPROVED`로 갱신한다.
6. `assets/generated/`의 내부 생성 Asset도 예외 없이 manifest에 등록한다(`provider: internal_generated`, `status: APPROVED`, `license_name: Original Project Asset`, `rights_risk: LOW`). Generated라는 이유로 이 절차를 건너뛰지 않는다.
7. 사용자 제공 Asset(`provider: user_provided`)은 사용자가 "직접 제작했거나 게시 권리가 있다"고 명시한 기록이 있을 때만 `license_name: Owner Provided`로 승인한다. 본인이 제공한 본인 사진은 Recognizable person 예외다. 캡처 안에 타사 로고·제품·사이트 화면·저작물이 보이면 자동 승인하지 않고 PENDING으로 두어 Level 3로 사용자 결정을 요청한다(`.claude/agents/rights-auditor.md`).
8. Self-hosted Font는 라이선스와 출처 URL을 `legal/license-evidence.jsonl`에 기록한 뒤 승인한다.
9. 하나라도 해당하거나 불확실하면(`UNKNOWN` 포함) `status: REJECTED`로 갱신하고 `rejection_reason`을 기록한다.

## Fail Conditions
- 판단이 `UNKNOWN`이면 `REJECTED`와 동일하게 처리한다 (Fail Closed).
- 라이선스 확인 근거가 없는 provider의 이미지는 승인하지 않는다.
- "아마 괜찮을 것 같다"는 추정 승인은 허용하지 않는다.

## Output
- `assets/approved/<asset_id>.<ext>` (승인된 경우)
- `assets/manifest.jsonl`의 해당 레코드 갱신 (`status`, `rights_risk`, `contains_*`, `rejection_reason`, `local_approved_path`)
- 필요 시 `legal/license-evidence.jsonl` 신규 레코드 추가
