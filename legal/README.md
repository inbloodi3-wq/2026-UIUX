# Legal

## license-evidence.jsonl
Provider(예: Pixabay, Unsplash, Pexels)별 라이선스 확인 근거를 Provider당 1줄(JSON)로 기록한다.

필드:
`provider, license_name, license_url, terms_url, checked_at, important_restrictions, attribution_required, api_requirements, notes`

라이선스 전문을 복사하지 않고 URL과 확인 날짜, 프로젝트에 필요한 핵심 조건만 기록한다.

## source-policy.yaml
Asset/Reference 출처를 `final_asset_allowed / reference_only / blocked` 등급으로 관리하는 정책 파일이다. 이미지를 다루는 모든 Agent/Skill은 작업 전에 이 파일을 먼저 확인한다.

새로운 출처가 필요하면 임의로 사용하지 않고 이 파일에 먼저 등급을 등록한 뒤 사용한다. 등록되지 않은 출처(unknown)는 기본적으로 차단된다.
