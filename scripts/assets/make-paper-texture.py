# 종이 질감 Tile 생성기 (INTERNAL_CREATED)
#
#   python scripts/assets/make-paper-texture.py
#
# 외부 이미지를 쓰지 않는다. 난수(고정 Seed)로 만든 여러 크기의 얼룩을 섞어
# 비코팅 인쇄용지 같은 아주 약한 질감을 만든다. 왼쪽 검은 띠는 넣지 않는다(CSS가 그린다).
# 결과는 이음매 없이 반복되는 Tile이다. Pillow만 사용한다.
#
# 맞춘 기준: Figma Cover Render(1920)의 종이 영역 통계
#   종이: 평균색 약 (227, 225, 223), 2px/8px/40px 크기에서의 밝기 표준편차 약 1.1/1.4/1.6
#   띠:   평균 밝기 약 39, 표준편차 약 6

import random
from PIL import Image, ImageFilter

SEED = 20261004

# (가로 배율, 세로 배율, 세기) — 배율이 클수록 큰 얼룩. 가로·세로가 다르면 결이 생긴다.
LAYERS = [
    (1, 1, 1.15),     # 고운 Grain
    (3, 3, 0.75),     # 작은 얼룩
    (4, 14, 0.55),    # 세로로 긴 섬유 결
    (16, 16, 0.35),   # 섬유 뭉침 크기의 얼룩
    (64, 64, 0.90),   # 넓고 완만한 밝기 변화
]

# 만드는 Tile: (파일, 크기, 평균색, 전체 세기)
#   paper — 밝은 종이. 평균색은 docs/css/tokens.css의 --color-cover-paper와 같아야 한다.
#   band  — 왼쪽 검은 띠 안쪽의 질감. 평균색은 --color-cover-band와 같아야 한다. 띠 모양은 CSS가 그린다.
VARIANTS = [
    ('assets/generated/paper-texture.webp', 512, (227, 225, 223), 1.0),
    ('assets/generated/paper-texture-dark.webp', 256, (40, 40, 40), 3.4),
]


def seamless_noise(rng, tile, scale_x, scale_y):
    """128 중심의 난수 얼룩(L 이미지). 3×3으로 이어 붙여 처리한 뒤 가운데를 잘라 이음매를 없앤다."""
    w, h = max(4, tile // scale_x), max(4, tile // scale_y)
    data = [max(0, min(255, int(round(128 + rng.gauss(0, 1) * 16)))) for _ in range(w * h)]
    cell = Image.new('L', (w, h))
    cell.putdata(data)
    big = Image.new('L', (w * 3, h * 3))
    for y in range(3):
        for x in range(3):
            big.paste(cell, (x * w, y * h))
    if scale_x == 1 and scale_y == 1:
        big = big.filter(ImageFilter.GaussianBlur(0.55))
    else:
        big = big.resize((tile * 3, tile * 3), Image.BICUBIC)
    return big.crop((tile, tile, tile * 2, tile * 2))


def normalize(layer):
    """흐림과 확대로 줄어든 편차를 다시 표준편차 1로 맞춘다."""
    pixels = list(layer.tobytes())
    mean = sum(pixels) / len(pixels)
    std = (sum((p - mean) ** 2 for p in pixels) / len(pixels)) ** 0.5 or 1
    return [(p - mean) / std for p in pixels]


def make_tile(rng, out, tile, base_color, gain):
    total = [0.0] * (tile * tile)
    for scale_x, scale_y, strength in LAYERS:
        values = normalize(seamless_noise(rng, tile, scale_x, scale_y))
        for i, v in enumerate(values):
            total[i] += v * strength * gain

    channels = []
    for base in base_color:
        channel = Image.new('L', (tile, tile))
        channel.putdata([max(0, min(255, int(round(base + v)))) for v in total])
        channels.append(channel)
    image = Image.merge('RGB', channels)
    image.save(out, 'WEBP', lossless=True, method=6)
    print('saved', out, image.size)


def main():
    rng = random.Random(SEED)
    for out, tile, base_color, gain in VARIANTS:
        make_tile(rng, out, tile, base_color, gain)


if __name__ == '__main__':
    main()
