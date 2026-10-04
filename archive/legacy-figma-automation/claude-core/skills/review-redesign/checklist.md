# Review Checklist

## Structure
- [ ] Screen ID가 `config/project.yaml`의 `screen_id_policy`(또는 기본 `{domain}-{screen}`) 규칙을 따르는가
- [ ] Element ID가 `{screenId}.{elementId}` 형식인가
- [ ] `ia/sitemap-redesign.md`에 등록되어 있는가
- [ ] `figma/screen-registry.md`에 `figma_node_id`까지 등록되어 있는가

## Segment Separation (`config.information_architecture.segment_separation_required`가 true인 경우만)
- [ ] 같은 화면에 서로 다른 Segment의 핵심 업무 콘텐츠가 혼재하지 않는가
- [ ] 내비게이션에서 Segment 진입점이 명확히 분리되어 있는가

## Core Experience (`config.primary_user_tasks` 기준)
- [ ] 핵심 화면 상단에 Primary Task 진입점이 있는가
- [ ] Primary Task 완료까지의 플로우가 명확한가

## Design System
- [ ] 임의 HEX/px 값 대신 토큰을 사용했는가 (새 표현에 필요한 토큰은 `design-system/`에 먼저 추가되었는가)
- [ ] 재사용 가능한 컴포넌트를 새로 만들지 않고 재사용했는가

## Foundation Safety (`design-system/foundation-grammar.md` Safety Lines 기준 — 값 일치가 아니라 무너짐 여부)
- [ ] 본문 가독성(크기·Line height·대비·Text measure)이 유지되는가
- [ ] 정보 위계가 3단계 이상 구분되고 붕괴하지 않았는가
- [ ] 정렬 기준선이 의도 없이 어긋난 요소가 없는가 (의도된 Off-grid/Overlap은 visual-language.md에 근거가 있으면 PASS)
- [ ] Overflow / 잘린 텍스트 / 겹침 오류가 없는가

## Visual QA (Render 기준)
- [ ] Visual hierarchy: 첫 시선이 화면의 UX 역할(Primary Task 또는 Brand Mood)로 가는가
- [ ] Composition: 선택된 Direction의 Composition rule을 따르는가
- [ ] Color balance: Color intensity가 Expression Profile과 일치하는가
- [ ] Artwork coherence: 모든 Artwork가 하나의 Artwork System(1~2 Motif) 안에 있는가, Section마다 새 Graphic Style을 만들지 않았는가
- [ ] Semantic Visual: 각 Image/Artwork가 "What must this visual prove?"에 답하는가 (답 없는 장식은 FAIL)
- [ ] Image treatment / Typography expression이 visual-language.md와 일치하는가
- [ ] Density: 화면 역할에 맞는 Dense/Normal/Airy인가
- [ ] Repetition: 동일한 Section 패턴(예: 흰 배경 + 3 Cards)이 의미 없이 반복되지 않는가
- [ ] Responsive preservation: 다른 Viewport에서도 정보 우선순위와 Visual identity가 유지되는가(비율 축소판 아님)

## Style Convergence Check
- [ ] "이 디자인은 Master Reference(Page 3) Frame에 내용만 바꿔 넣은 것처럼 보이는가?" → YES면 **FAIL**
- [ ] "기존 Portfolio 프로젝트와 색만 바꾼 것처럼 보이는가?" → YES면 **FAIL**
- [ ] "Visual Direction의 대표 Expressive Device가 보이는가?" → NO면 **REVIEW** (단 visual-language.md에서 낮은 표현 강도가 프로젝트에 적합하다고 명시 결정된 경우 PASS)

## Duplication / Compression
- [ ] 같은 메시지가 3회 이상 반복되지 않는가 (Problem → Strategy → Result 흐름은 정상, Result → Summary → Key Improvements → Result 재설명은 중복)
- [ ] 최종 단계에서 추가보다 삭제·압축으로 해결했는가 (DELETE → COMPRESS → ALIGN → CROP → RESIZE → COPY EDIT)

## Asset
- [ ] 사용된 이미지가 `assets/manifest.jsonl`에서 `APPROVED`인가(내부 생성 Asset 포함)
- [ ] `config/project.yaml`의 `project_asset_restrictions`에 해당하는 이미지가 없는가

## Scope
- [ ] 요청 범위 밖의 화면/문서, `frozen_scopes`, Master Reference Page를 수정하지 않았는가

## Pass Limit
- [ ] 이 화면/Section의 Pass 수가 `max_polish_passes`(기본 3)를 넘지 않았는가 — 실제 FAIL이 없으면 추가 Pass를 요구하지 않는다
