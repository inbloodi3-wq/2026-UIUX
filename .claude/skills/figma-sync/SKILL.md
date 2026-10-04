---
name: figma-sync
description: 확정된 IA와 디자인 토큰을 Figma MCP를 통해 실제 화면으로 생성하거나 기존 Figma 화면과 동기화할 때 사용한다.
---

# Figma Sync

## Before Work
1. `/figma-use` 스킬(또는 Figma MCP 안내)을 먼저 확인한다.
2. 대상 Screen ID를 `ia/sitemap-redesign.md`에서 확인한다.
3. 사용할 토큰을 `design-system/`에서 확인한다.
4. `design-system/foundation-grammar.md`(Craft 기준)와 `design-system/visual-language.md`(Direction)를 확인한 뒤 Layout을 새로 설계한다. Master Reference Page(`automation.master_reference_page`)는 READ ONLY이며 Duplicate/Geometry 복사 대상이 아니다(`.claude/rules/figma-workflow.md`).

## 읽기 (기존 Figma 파일 조사)
- `get_design_context`, `get_screenshot`, `get_metadata`로 현행 화면 구조를 파악한다.
- 조사 결과는 `research/current-site-audit.md`에 반영한다.

## 쓰기 (신규/수정 화면 생성)
- `use_figma`로 대상 Screen ID의 프레임만 생성/수정한다.
- 프레임 이름은 Screen ID와 동일하게 지정한다.
- 컴포넌트는 `design-system/components.md`에 등록된 것을 우선 사용한다.

- 쓰기 후 `get_screenshot`으로 Render해 확인하고, 화면/Section당 최대 3 Pass(Structural → Visual QA → Micro Fix) 안에서 수정한다.

## Completion
- 생성/수정한 프레임과 Figma 파일 링크를 `figma/file-links.md`에 기록한다.
- 요청 범위 밖의 프레임은 수정하지 않는다.
