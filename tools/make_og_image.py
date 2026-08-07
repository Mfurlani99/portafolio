"""Genera og-image.png 1200x630 para el post de LinkedIn y og:image del sitio.

Estilo: fondo oscuro con grilla sutil, logo limpio a la izquierda,
nombre + rol + URL a la derecha.
"""
from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1200, 630
LOGO = r"resources/logo-clean.png"
OUT = r"resources/og-image.png"

BG = (5, 5, 10)
GRID = (35, 60, 95, 255)      # azul cobalto apagado para la grilla
ACCENT = (0, 122, 255, 255)   # cobalto


def font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except OSError:
        return ImageFont.load_default()


def main():
    img = Image.new("RGBA", (W, H), BG)
    d = ImageDraw.Draw(img)

    # grilla sutil
    step = 60
    for x in range(0, W, step):
        d.line([(x, 0), (x, H)], fill=GRID, width=1)
    for y in range(0, H, step):
        d.line([(0, y), (W, y)], fill=GRID, width=1)

    # logo limpio, centrado en columna izquierda
    logo = Image.open(LOGO).convert("RGBA")
    logo.thumbnail((380, 380), Image.LANCZOS)
    lw, lh = logo.size
    logo_x = 90 + (380 - lw) // 2
    logo_y = (H - lh) // 2
    img.alpha_composite(logo, (logo_x, logo_y))

    # texto
    f_name = font(r"C:\Windows\Fonts\arialbd.ttf", 54)
    f_role = font(r"C:\Windows\Fonts\arial.ttf", 30)
    f_url = font(r"C:\Windows\Fonts\consola.ttf", 24)

    tx = 560
    ty = 235
    d.text((tx, ty), "Matias Furlani", font=f_name, fill=(255, 255, 255, 255))

    # subrayado cobalto
    d.rectangle([(tx, ty + 70), (tx + 330, ty + 74)], fill=ACCENT)

    d.text((tx, ty + 105), "Desarrollador Backend", font=f_role, fill=(200, 210, 235, 255))

    url = "mfurlani99.github.io/portafolio"
    uw = d.textlength(url, font=f_url)
    d.text((tx, ty + 180), url, font=f_url, fill=(255, 255, 255, 220))

    img.convert("RGB").save(OUT)
    print(f"OK {OUT}")


if __name__ == "__main__":
    main()
