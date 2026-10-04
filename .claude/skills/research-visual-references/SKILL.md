---
name: research-visual-references
description: Product/UX(Group A)와 Art Direction(Group B) 웹 디자인 레퍼런스를 직접 조사해 이미지가 아닌 Design Principle(텍스트)로 기록할 때 사용한다.
---

# Research Visual References

## Required Inputs
- 조사 목적: `config/project.yaml`의 `project.type`, `reference_preferences`, `visual_expression`, `portfolio_context` (사용자 제공 URL이 있으면 함께 사용)
- `legal/source-policy.yaml` (출처 등급 확인용)

## Procedure
1. `.claude/rules/web-research-safety.md`를 확인한다.
2. `legal/source-policy.yaml`에서 조사하려는 출처의 등급을 확인한다.
   - `reference_only` 출처(Pinterest/Behance/Notefolio 등): 사용자가 제공한 URL이거나 허용된 Search Tool이 반환한 공개 URL/메타데이터만 사용. Scraping/Crawling/다운로드 금지.
   - `blocked` 출처: 사용하지 않는다.
3. 사용자 입력을 기다리지 않고 허용된 Search Tool로 후보를 찾는다.
   - Group A `product_ux`: 동종/유사 서비스 → IA, UX Pattern, Interaction, Content structure 관찰
   - Group B `art_direction`: 타 산업 허용(Editorial/Fashion/Culture/Music/Exhibition/Campaign/Magazine/Brand Site/Experimental Digital) → Color, Composition, Artwork, Typography, Image treatment, Motion, Rhythm 관찰
4. 각 레퍼런스에 대해 Layout, Hierarchy, Typography, Spacing, Color, Interaction을 관찰하고 텍스트로 요약한다. Group B는 `expressive_device`(무엇이 이 사이트를 구별되게 만드는가)를 반드시 적는다.
5. 그대로 복제하면 안 되는 요소(원본 Illustration, 원본 Layout, 고유 Graphic 등)를 `do_not_copy`에 기록한다.
6. `references/reference-index.jsonl`에 1건당 1줄(JSON)로 append한다.

## Fail Conditions
- 이미지 파일을 다운로드하거나 저장하려는 시도가 발생하면 중단한다.
- `reference_only` 출처에 대해 자동 crawling/bulk 요청이 필요해지면 그 출처만 건너뛰고 다른 출처로 계속한다.
- 출처 등급이 `blocked`이거나 `legal/source-policy.yaml`에 없으면(unknown) 해당 출처는 건너뛴다.
- Private/로그인/유료 콘텐츠가 꼭 필요할 때만 사용자에게 요청한다.

## Output
- `references/reference-index.jsonl` append
  - 기존 필드: `reference_id, source, url, title, creator, checked_at, project_type, observed_layout, visual_hierarchy, typography_character, spacing_character, color_character, interaction_pattern, useful_principle, do_not_copy, notes`
  - V2 선택 필드: `reference_group(product_ux|art_direction), expressive_device, composition_character, artwork_character, color_intensity(low|medium|high), image_treatment, typography_expression, useful_for`
  - 기존 레코드는 수정하지 않는다(V2 필드 없음 = `reference_group` 미분류로 간주).
- 이미지 Binary는 어디에도 저장하지 않는다.
