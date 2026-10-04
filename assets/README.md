# Assets

이 디렉터리는 웹사이트에 사용되는 이미지·Font Asset의 소싱·검수·적용 상태를 관리한다. 여기는 **Staging**이다. 사이트가 실제로 참조하는 사본은 `docs/assets/`에 있다(`.claude/skills/apply-approved-assets/SKILL.md`).

## 하위 디렉터리
- `original/`: Provider API에서 받아온 후보와 사용자가 제공한 원본. `manifest.jsonl`에 `status: PENDING`으로 등록된다. git 미추적.
- `approved/`: Rights Auditor가 승인한 Asset만 복사되는 디렉터리. `docs/assets/`에는 이 디렉터리 또는 `generated/`의 Asset만 복사한다. git 미추적(배포 사본이 `docs/assets/`에서 추적된다).
- `generated/`: 외부 저작물 없이 프로젝트 내부에서 생성한 Vector/SVG Asset.

## manifest.jsonl
모든 external/generated Asset 1건당 1줄(JSON object)로 append 기록한다. 항목을 삭제하지 않고 상태만 갱신한다.

필드:
`asset_id, status, provider, provider_asset_id, source_page_url, creator, creator_profile_url, license_name, license_url, license_checked_at, downloaded_at, original_filename, local_original_path, local_approved_path, sha256, width, height, usage_type, contains_person, contains_logo, contains_trademark, contains_artwork, contains_sensitive_content, rights_risk, rejection_reason, used_in_page, used_in_section, deployed_path, modifications, notes`

`provider` 값: Stock Provider 이름 / `internal_generated` / `user_provided`(사이트 소유자가 직접 제공하고 게시 권리를 확인한 것, `license_name: Owner Provided`).

`status`는 `PENDING / APPROVED / REJECTED` 중 하나이며, 상태를 확실히 판단할 수 없는 경우(`UNKNOWN`)는 `REJECTED`와 동일하게 취급한다 (Fail Closed, `.claude/agents/rights-auditor.md` 참조).

`status: APPROVED`이고 `local_approved_path`가 존재하는 Asset만 `docs/assets/`에 넣을 수 있다 (`.claude/skills/apply-approved-assets/SKILL.md`).

## Generated Asset도 예외 없이 Manifest에 기록한다
`assets/generated/`의 내부 생성 Asset(외부 저작물 없이 프로젝트 안에서 만든 SVG/Vector 등)도 다른 Asset과 동일하게 `manifest.jsonl`에 등록해야 한다. "생성한 것이니 검수를 건너뛴다"는 예외를 두지 않는다. 아래 값을 기본으로 사용한다.

```
provider: internal_generated
status: APPROVED
source_page_url: null
license_name: Original Project Asset
license_url: null
generation_method: <생성 방식, 예: "SVG waveform pattern script">
local_approved_path: <assets/generated/ 내 실제 경로>
rights_risk: LOW
```

## Reference와의 관계
`references/`에 기록되는 레퍼런스 이미지는 이 디렉터리에 저장하지 않는다. Reference(분석용)와 Asset(결과물 삽입용)은 완전히 분리한다.
