---
name: design-tokens
description: 리디자인 화면의 색상, 타이포그래피, 간격, 그리드, 컴포넌트 토큰을 선택할 때 사용한다.
---

# Design Tokens Skill

## Workflow
1. `design-system/` 파일을 검색한다.
2. 요구사항과 가장 가까운 기존 토큰을 선택한다.
3. 토큰 이름과 실제 값을 함께 확인한다.
4. 기존 토큰으로 해결되지 않는 경우 새 토큰을 추가하고 이유를 기록한다. `design-system/visual-language.md`의 `Token Extension`에 정의된 Direction 기반 확장은 이 단계에서 반영한다(기존 토큰이 없다는 이유로 표현을 금지하지 않는다). 승인/LOCK된 값을 바꾸는 변경은 `CLAUDE.md` Decision Authority를 따른다.

## Do Not
- 화면 안에 임의 HEX/px 값을 반복 작성하지 않는다.
- 동일 의미의 토큰을 중복 생성하지 않는다.
- 특정 Segment 전용 토큰을 공용 토큰과 혼동하지 않는다.

세부 목록은 `reference.md`를 확인한다.
