---
name: apply-approved-assets
description: 권리 승인된(manifest에서 APPROVED) 이미지·Font만 docs/assets/에 복사해 HTML/CSS에 적용할 때 사용한다.
---

# Apply Approved Assets

## Required Inputs
- 대상 `Page#Section`(`ia/sitemap.md` 기준)
- `assets/manifest.jsonl`

## Procedure
1. 넣으려는 Asset이 `assets/approved/` 또는 `assets/generated/`에 있고, `assets/manifest.jsonl`에서 `status: APPROVED`인지 확인한다. Generated·User-provided라는 이유로 이 확인을 생략하지 않는다.
2. 파일을 `docs/assets/`에 복사한다. 이름은 `.claude/rules/naming-convention.md`를 따른다(소문자 kebab-case, ASCII).
3. 표시 크기에 비해 지나치게 큰 원본이면 그대로 넣지 않고 보고한다. 변환 도구를 새로 설치하지 않는다(사용자에게 적정 크기 파일을 요청하거나, 이미 설치된 도구로만 처리).
4. HTML에 적용한다(Edit로 대상 Section만):
   - 콘텐츠 이미지는 `<img>` + 의미를 전달하는 `alt`. 장식이면 `alt=""` 또는 CSS Background.
   - `width`와 `height` 속성으로 비율을 고정한다(Layout Shift 방지).
   - 첫 화면 밖이면 `loading="lazy"`, 첫 화면 핵심 이미지는 lazy를 쓰지 않는다.
   - 경로는 상대 경로(`assets/…`).
5. Provider가 Attribution을 요구하면 `ia/`에 정한 위치(예: Footer, Credits)에 표기한다.
6. `assets/manifest.jsonl`의 해당 레코드에 `used_in_page`, `used_in_section`, `deployed_path`를 기록한다.
7. 세 Viewport에서 Render해 Crop과 비율을 확인한다.

## Fail Conditions
- manifest에 없거나 `APPROVED`가 아닌 Asset은 넣지 않는다.
- `assets/approved/`, `assets/generated/` 외의 경로(임시 다운로드, 웹 URL Hotlink, `archive/`의 이미지 직접 복사)에서 가져오지 않는다.
- 외부 URL을 `src`로 직접 쓰지 않는다(Provider 정책이 Hotlink를 요구하는 경우는 Level 3로 보고).

## Output
- `docs/assets/<file>`과 적용된 Markup
- `assets/manifest.jsonl`의 사용 위치 기록
