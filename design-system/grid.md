# Grid & Breakpoints

| Breakpoint | Frame 너비(px) | Content Max Width(px) | 좌우 여백(px) |
|---|---|---|---|
| Desktop | 1440 | 1200 | 120 |
| Tablet | (확정 전 — 아직 설계되지 않음) | - | - |
| Mobile | 390 | 350 | 20 |

## 확정 근거
Figma `04_Final_UI`의 최종 화면(`01_Main_Desktop_Final`, `02_Search_Desktop_Final`, `03_Main_Mobile_Final`, `04_Search_Mobile_Final`, `figma/screen-registry.md` 참고) 기준. Desktop은 1920px 초안에서 1440px로, Mobile은 375px 초안에서 390px로 확정되었다.

## 원칙
- Figma 오토레이아웃을 기본으로 사용하고, 절대 좌표는 오토레이아웃으로 표현할 수 없는 요소에만 사용한다.
- Desktop Content 영역은 `Content / Max1200` Wrapper(너비 1200, 좌우 각 120)로 통일한다.
- Mobile Content 영역은 좌우 각 20px 패딩을 기본으로 하며, Full Bleed가 필요한 배경(Dark Chart/Footer)만 Frame 전체 폭(390px)을 사용한다.
- Mobile을 Desktop의 비율 축소판으로 만들지 않는다. Reflow/Stack/Horizontal Scroll로 재구성한다.
