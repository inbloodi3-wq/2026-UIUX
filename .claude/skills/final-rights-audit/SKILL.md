---
name: final-rights-audit
description: 배포 전 docs/가 참조하는 모든 이미지·Font·외부 리소스를 검사해 권리 검증이 끝나지 않은 것이 없는지 확인할 때 사용한다.
---

# Final Rights Audit

## Required Inputs
- `docs/` 전체
- `assets/manifest.jsonl`, `legal/license-evidence.jsonl`

## Procedure
1. `docs/`에서 리소스 참조를 전부 수집한다(Grep):
   - HTML: `<img src>`, `srcset`, `<source>`, `<video>`, `<link rel="icon">`, `<meta property="og:image">`, `<script src>`, `<link href>`
   - CSS: `url(...)`, `@font-face`
   - `docs/assets/`에 있지만 어디서도 참조되지 않는 파일
2. 각 로컬 Asset에 대해 확인한다(외부 이미지, 사용자 제공, 내부 생성 모두 같은 기준).
   - `assets/manifest.jsonl`에 레코드가 있는가(`deployed_path` 일치)
   - `status: APPROVED`인가
   - `license_name`이 있는가(Stock은 `license_url`, 생성 Asset은 `generation_method`, 사용자 제공은 소유 확인 기록)
   - 사용 위치(`used_in_page`, `used_in_section`)가 기록되어 있는가
   - Provider가 요구하는 Attribution이 사이트에 표기되어 있는가
3. 외부 Origin을 가리키는 참조(`http://`, `https://`, `//`로 시작하는 `src`/`href`/`url()`)를 목록화한다. 승인 기록(Level 3)이 없는 외부 Script·Font·이미지 Hotlink는 FAIL이다. 일반 외부 링크(`<a href>`)는 대상이 아니다.
4. 결과를 `qa/asset-rights-report.md`에 기록한다.

## Fail Conditions
- 위 조건 중 하나라도 검증되지 않은 리소스가 한 건이라도 있으면 `pre_deploy_check`를 PASS 처리하지 않는다.
- FAIL 항목은 파일 경로와 `Page#Section`을 구체적으로 적는다.
- 이 Skill은 고치지 않는다. 미승인 Asset을 지우거나 교체하는 것은 별도 작업이다.

## Output
`qa/asset-rights-report.md`: 리소스 목록, 항목별 PASS/FAIL과 사유, 외부 Origin 목록, 전체 결론.
