"""Genera logo-clean.png (fondo transparente) a partir de logo.jpeg.

El logo original es blanco/gris sobre fondo negro. Este script:
1. Recorta al bounding box del contenido no-oscuro.
2. Convierte píxeles oscuros (fondo) a alfa 0.
"""
from PIL import Image

SRC = r"resources/logo.jpeg"
OUT = r"resources/logo-clean.png"
THRESHOLD = 90  # suma RGB por debajo de esto = fondo


def main():
    im = Image.open(SRC).convert("RGB")
    w, h = im.size
    px = im.load()

    # 1) bounding box del contenido claro
    min_x, min_y, max_x, max_y = w, h, -1, -1
    for y in range(0, h, 2):
        for x in range(0, w, 2):
            r, g, b = px[x, y]
            if r + g + b > THRESHOLD:
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y

    if max_x < 0:
        raise SystemExit("No se encontró contenido claro en el logo.")

    pad = 8
    box = (max(0, min_x - pad), max(0, min_y - pad),
           min(w, max_x + pad + 1), min(h, max_y + pad + 1))
    im = im.crop(box)
    w, h = im.size
    px = im.load()

    # 2) transparentar fondo oscuro
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    opx = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            if r + g + b > THRESHOLD:
                opx[x, y] = (r, g, b, 255)
            else:
                opx[x, y] = (0, 0, 0, 0)

    out.save(OUT)
    print(f"OK {OUT} {out.size}")


if __name__ == "__main__":
    main()
