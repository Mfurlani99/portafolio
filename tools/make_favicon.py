"""Genera favicon.png (64px) y apple-touch-icon.png (180px) desde logo-clean.png."""
from PIL import Image

SRC = r"resources/logo-clean.png"


def main():
    im = Image.open(SRC).convert("RGBA")

    bg = Image.new("RGBA", im.size, (0, 0, 0, 255))
    bg.alpha_composite(im)
    im = bg

    fav = im.resize((64, 64), Image.LANCZOS)
    fav.save(r"resources/favicon.png")

    apple = im.resize((180, 180), Image.LANCZOS)
    apple.save(r"resources/apple-touch-icon.png")

    print("OK resources/favicon.png (64) + apple-touch-icon.png (180)")


if __name__ == "__main__":
    main()