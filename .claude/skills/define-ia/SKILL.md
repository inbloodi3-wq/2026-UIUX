---
name: define-ia
description: 사용자 제공 콘텐츠를 content/에 정리하고 Page/Section 구조·ID·콘텐츠 위계를 ia/sitemap.md에 정의할 때 사용한다.
---

# Define Content / IA

## Required Inputs
- `config/project.yaml`의 `project`, `goals`, `audiences`, `primary_user_tasks`, `ux_requirements`, `site.pages`, `viewports`
- 사용자가 제공한 콘텐츠(대화, 파일, `content/`의 기존 문서)

## Procedure
1. **Content Inventory**: 사용자가 제공한 내용을 `content/`에 Markdown으로 정리한다(예: `content/profile.md`, `content/projects/<slug>.md`, `content/contact.md`). 파일은 실제 내용이 있을 때만 만든다.
2. 빠진 콘텐츠를 목록으로 만든다. 사용자만 아는 사실(이름 표기, 소개, 경력, 프로젝트 설명·역할·기간·성과, 연락 방법, 공개해도 되는 범위)은 **추정하지 않고** 최대 3개 질문으로 묶어 요청한다.
3. `goals`와 `primary_user_tasks`를 기준으로 Page 목록을 정한다. 콘텐츠가 한 Page로 충분하면 단일 Page로 둔다.
4. Page마다 Section 순서를 정한다. 각 Section에 목적 한 줄, 콘텐츠 출처(`content/`의 파일), 우선순위(P1/P2/P3)를 적는다. 출처가 없는 Section은 만들지 않는다.
5. Viewport별 우선순위를 적는다: Mobile 첫 화면에 무엇이 보여야 하는가, Tablet/Desktop에서 무엇이 나란히 놓이는가, 무엇이 접히거나 뒤로 가는가.
6. 필요한 Interaction을 목록화한다(예: Mobile 내비게이션 열기). 각 항목에 "JS 없이 어떻게 동작하는가"를 적는다.
7. Page ID / Section ID를 `.claude/rules/naming-convention.md`에 맞게 부여한다.
8. `ia/sitemap.md`에 기록하고, 확정된 Page 목록을 `config/project.yaml`의 `site.pages`에 반영한다.

## Output Format (`ia/sitemap.md`)
```
# Sitemap
## Pages
| Page ID | 파일 | 목적 | Primary Task |
## <page-id>
| 순서 | Section ID | 목적 | 콘텐츠 출처 | 우선순위 | Mobile / Tablet / Desktop 비고 |
## Interactions
| ID | 위치 | 동작 | JS 없이 |
## Open Content Requests
```

## Completion
- 모든 Section에 실제 콘텐츠 출처가 있다(Placeholder·임의 작성 문안 없음).
- `Open Content Requests`가 비어 있거나, 남은 항목이 해당 Section을 BLOCKED로 표시하고 있다.

## Do Not
- 문안·사실을 지어내지 않는다.
- 디자인 값이나 Layout 세부(Column 수, 색)를 정하지 않는다.
- `docs/`를 수정하지 않는다.
