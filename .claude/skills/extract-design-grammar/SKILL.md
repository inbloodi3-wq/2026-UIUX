---
name: extract-design-grammar
description: Figma Master Reference Page(Standard Slide/Layout Frame 세트)를 READ ONLY로 측정해 Layout을 복제하지 않고 Foundation Grammar(타이포 비율·간격·정렬·밀도 Range)만 design-system/foundation-grammar.md에 기록할 때 사용한다.
---

# Extract Design Grammar

Master Reference Page는 **Reference for Craft, not for Style**다. 이 Skill은 "얼마나 정교하게 만드는가(Craft)"의 기준만 뽑고, "어떻게 보이는가(Style)"는 가져오지 않는다.

## Required Inputs
- 활성 Project Config(`config/project.yaml` 또는 `config/experiments/<id>.yaml`)의 `figma.file_key`, `automation.master_reference_page`(Page 이름 또는 page node id), `automation.reference_protection`
- 출력 위치: Config에 `paths.design_system`이 있으면 그 디렉터리, 없으면 `design-system/`
- 값이 없으면 이 Stage는 `SKIPPED`로 기록하고 Pipeline을 멈추지 않는다(Foundation은 `design-system/typography.md`/`spacing.md`/`grid.md`로 대체).

## READ ONLY
- 허용 도구: `get_metadata`, `get_design_context`, `get_screenshot`, `get_variable_defs` (읽기 전용).
- Master Reference(Page 전체 또는 `frozen_scopes`의 Frame)의 Frame/Text/Style/Object를 **수정·삭제·이동·Duplicate하지 않는다.** 이 Skill은 `use_figma`를 호출하지 않는다.
- `reference_protection: frozen_existing_frames`이면 측정 대상은 State의 `frozen_scopes`에 등록된 Frame으로 한정한다(같은 Page의 신규 작업 Frame은 측정하지 않는다).
- Reference의 스타일(예: Minimal)을 새 프로젝트의 기본 스타일로 강제하지 않는다.

## Procedure
1. `get_metadata`로 Page 안의 Frame 목록과 크기를 확인한다. 대표성이 있는 Frame을 최소 5개(가능하면 텍스트 위주·이미지 위주·다단·표/다이어그램 등 유형별) 고른다.
2. 각 Frame에서 **측정**한다(추정 금지, 실제 값 기준):
   - TYPOGRAPHY: Display/Heading/Body/Caption 크기, 비율(Heading÷Body 등), Weight 단계, Line height(배수), Letter spacing 경향, Paragraph spacing
   - SPACING: Outer margin(Frame 폭 대비 %), Section/Group 간격, Component 내부 간격, Micro spacing
   - LAYOUT: 정렬 기준선 수, Safe content region, Text block 폭(Frame 폭 대비 %), 좌우 균형, 여백 비율(Text-to-space)
   - DENSITY: Dense / Normal / Airy로 분류되는 Frame과 그 기준(요소 수, 여백 비율)
3. 값은 **Range**로 정리한다(예: `Heading/Body = a–b×`). 단일 절대값은 측정값이 모두 같을 때만 쓴다. 표본 수와 측정한 Frame 이름을 함께 남긴다.
4. Slide 크기(예: 1920×1080)와 제품 화면 Viewport(`config/project.yaml`의 `viewports`)가 다르면 **절대 px가 아니라 비율/배수**로 환산해 기록한다.
5. 결과를 `design-system/foundation-grammar.md`에 기록한다(형식 아래). 이미 존재하면 덮어쓰기 전에 읽고 갱신 이력을 남긴다.

## 기록 금지 (Template Cloning 방지)
다음은 측정하더라도 **foundation-grammar.md에 적지 않는다.**
- 특정 Frame의 Composition, Object 좌표, Column split 패턴, Diagram 모양, Graphic 배치
- Frame 색상/배경/장식 스타일
- "Frame N처럼 배치" 같은 재현 지시

## Output Format (`design-system/foundation-grammar.md`)
```
# Foundation Grammar
source: {file_key} / {page} (READ ONLY) · measured_at · sample_frames: [...]
role: Craft Calibration (NOT a style template)

## Typography — ratio ranges, weight ladder, line-height, tracking, paragraph spacing
## Spacing — outer margin %, section/component/micro ranges
## Layout — alignment lines, safe region, text measure %, balance
## Density — dense / normal / airy thresholds
## Safety Lines — 어기면 Foundation FAIL이 되는 최소 기준(가독성, 위계, 정렬)
## Flex Zone — Expressive Direction이 넘어설 수 있는 항목과 조건
```
`Safety Lines`는 "무너짐을 막는 안전선"만 적는다(예: Body line-height 하한, Text measure 상한, 위계 단계 최소 대비). 정확한 Margin 값을 강제하는 규칙으로 쓰지 않는다.

## Completion
- 모든 섹션이 측정값 근거로 채워졌고 `기록 금지` 항목이 없으면 `COMPLETE`.
- Figma 접근 실패 시 `BLOCKED(tool)`로 기록하고 독립 가능한 다음 Stage(Research)로 진행한다.
