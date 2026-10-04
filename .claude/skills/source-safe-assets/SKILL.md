---
name: source-safe-assets
description: 화면에 필요한 이미지 역할을 정의하고 Pixabay/Unsplash/Pexels 공식 API에서 후보를 검색해 PENDING 상태로 등록할 때 사용한다.
---

# Source Safe Assets

## Required Inputs
- 이미지가 필요한 화면/요소와 그 역할(예: "Hero 배경 텍스처")
- `legal/source-policy.yaml`
- `.env`의 Provider API Key (`PIXABAY_API_KEY`, `UNSPLASH_ACCESS_KEY`, `PEXELS_API_KEY`)

## Procedure
1. 이미지 역할을 텍스트로 먼저 정의한다.
2. Original Generated Asset(`assets/generated/`, Vector/SVG)으로 대체 가능한지 먼저 검토한다. 가능하면 이 Skill을 종료하고 Generated Asset 경로를 사용한다.
3. `legal/source-policy.yaml`에서 `final_asset_allowed`인 Provider(Pixabay, Unsplash, 선택적으로 Pexels)의 공식 API로만 검색한다.
4. 검색 결과 중 사람 인식 가능 사진, 로고/상표, 저작물이 명백히 보이는 이미지는 후보에서 1차로 제외한다(최종 판단은 Rights Auditor가 한다).
5. 채택 후보를 `assets/original/`에 저장한다.
6. `assets/manifest.jsonl`에 `status: PENDING`으로 append한다.
7. Provider별 추가 규칙을 지킨다.
   - **Pixabay**: 동일 검색어 재조회는 24시간 캐시를 우선 사용하고 불필요한 재검색을 피한다. Mass query/download를 하지 않는다.
   - **Unsplash**: API가 반환한 이미지 URL 정책을 그대로 따른다(임의로 이미지를 가공/재호스팅하지 않음). Attribution 메타데이터(작가명, 프로필 URL)를 manifest에 유지한다. 후보를 실제로 쓰기로 확정하면(승인 이후) `download_location` endpoint 호출이 필요함을 메모에 남긴다. Compliance 여부가 불확실하면 PENDING을 유지하고 Rights Auditor에게 conditional로 넘긴다(임의 승인하지 않음).
   - **Pexels**: Attribution/Provider 메타데이터를 유지하고 API rate limit을 관리한다(짧은 시간에 과도한 요청을 보내지 않음).
   - 위 Provider별 조건이 만족되지 않으면 해당 후보를 자동으로 다음 단계(승인)에 넘기지 않는다.

## Fail Conditions
- Provider가 `legal/source-policy.yaml`에서 `final_asset_allowed`가 아니면 검색하지 않는다.
- 공식 API가 아닌 HTML scraping으로 이미지를 가져오려는 시도가 필요해지면 중단한다.
- Reference Site(Pinterest/Behance/Notefolio)에서 발견한 이미지를 후보로 쓰려는 요청이 오면 거부한다.
- API Key가 `.env`에 없으면 중단하고 `.env.example`을 안내한다.

## Output
- `assets/original/<asset_id>.<ext>` 파일
- `assets/manifest.jsonl`에 `status: PENDING` 레코드 append
