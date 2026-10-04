# Image Provenance TODO (2026-09-24)

`assets/manifest.jsonl`, `legal/license-evidence.jsonl` 모두 비어 있다(0 byte). 아래 이미지는 출처/AI 생성 여부/라이선스를 확인할 수 있는 기록이 프로젝트에 없다. **추측으로 채우지 않는다.** 이번 단계에서는 Figma의 이미지를 삭제/교체하지 않았다.

공통 (현재 확인 가능한 정보): 소스는 Figma `05_Portfolio_CaseStudy` 페이지의 `사용할 이미지` 프레임(node 1643:2269, 사용자가 선별해 제공). 원본 파일/출처 URL/제작자/라이선스는 프로젝트 내 기록 없음.

| # | 파일명(레이어명) | Figma node | 크기 | 사용 위치 | provenance 상태 |
|---|---|---|---|---|---|
| 1 | hero-main-studio | 1643:2263 | 1774×887 | Main Hero 전체 배경, Case Study Cover·Sec 08·09 Final·10·11 캡처 | TODO |
| 2 | album-cover-01-window-portrait | 1643:2264 | 1254×1254 | Main Latest Songs #1, Chart 3위, Search Result(Blueming), Song Detail 관련 곡, Sec 09·10·11 캡처 | TODO (인물 사진 포함: 초상권/생성 여부 확인 필요) |
| 3 | album-cover-02-evening-walk | 1643:2265 | 1254×1254 | Main Latest Songs #2, Chart 4위, Search Result(Love wins all), Song Detail 관련 곡 | TODO (인물 포함) |
| 4 | album-cover-03-abstract-graphic | 1643:2266 | 1254×1254 | Main Latest Songs #3, Chart 5위, Search Result(라일락), Song Detail 관련 곡 | TODO |
| 5 | album-cover-04-portable-player | 1643:2267 | 1254×1254 | Main Latest Songs #4, Chart 6위, Search Result(너의 의미) | TODO (제품 형태가 보임: 상표/제품 디자인 확인 필요) |
| 6 | album-cover-05-rooftop-illustration | 1643:2268 | 1254×1254 | Main Latest Songs #5, Search Result(Celebrity) | TODO |
| 7 | album-cover-06-guitar-session | 1643:2261 | 1254×1254 | Main Chart 1위, Search Result(좋은 날·팔레트), Song Detail 메인 아트워크 | TODO |
| 8 | album-cover-07-compact-disc | 1643:2262 | 1254×1254 | Main Chart 2위, Search Result(밤편지·에잇), Song Detail 관련 곡 | TODO |

## 별도 확인 필요 (이미지 성격이 다른 항목)
- Case Study Section 03 `Image`(node 1590:1817): tjmedia.com 홈페이지 스크린샷(제3자 사이트 캡처, 2026-09-20 촬영). 공개 포트폴리오 게시 시 사용 범위 확인 필요. 상태: TODO
- 이전 Asset Test 프레임(`임시 이미지` 1433:3797, `TEST IMAGE SOURCE`, `*_ASSET_TEST`): 사용자 제공 테스트 이미지. 최종 화면에서는 사용하지 않지만 파일 내에 남아 있음. 상태: TODO

## 기록 방법 (다음 단계)
출처가 확인되면 `assets/manifest.jsonl`에 1건씩 append (`asset_id, provider/creator, license_name, contains_person, rights_risk, used_in_screen ...`). 확인 전까지 `status`는 PENDING/UNKNOWN으로 두고 Fail Closed 정책(`.claude/rules/web-research-safety.md`)을 따른다.
