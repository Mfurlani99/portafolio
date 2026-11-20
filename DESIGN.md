# DESIGN.md — Sistema de Diseño Portafolio Matias Furlani (Pixel Art)

Mundo visual **pixel art minimalista**: hereda la identidad **monocroma blanco/negro** del sitio
anterior y suma **un único acento verde terminal** reservado exclusivamente para lo
"futuro / en preparación" (nivel de ciberseguridad, barra de progreso, hint del hero).
La trayectoria se cuenta como un **mapa de niveles** de juego retro.

## 1. Principios
- Pixel art minimalista: bloques, bordes duros y sombras hard-offset; sin gradientes, glows,
  glass ni scanlines CRT.
- Monocromo + un acento con propósito. El acento NUNCA decora: solo marca el futuro/cyber.
- El logo (lobo MF99) es la marca y queda intacto; un sprite pixel derivado oficia de avatar
  del mapa de niveles.
- Evolución como narrativa: niveles completados → nivel actual → nivel bloqueado (guiño).
- Sin kickers/eyebrows sobre titulares: los titulares VT323 hablan solos.

## 2. Paleta
```css
:root {
  --bg: #ffffff; --bg-soft: #f2f2ee; --surface: #ffffff;
  --fg: #000000; --muted: #5c5c5c;
  --line: #000000; --line-weak: #d8d8d2;
  --inverse-bg: #000000; --inverse-fg: #ffffff;
  --accent: #087a33;        /* verde terminal (claro), AA sobre blanco */
}
[data-theme="dark"] {
  --bg: #000000; --bg-soft: #101010; --surface: #000000;
  --fg: #ffffff; --muted: #a6a6a6;
  --line: #ffffff; --line-weak: #2b2b2b;
  --inverse-bg: #ffffff; --inverse-fg: #000000;
  --accent: #46ff7d;        /* verde terminal (oscuro) */
}
```
Imágenes de tecnologías y de proyecto en **grayscale** para sostener el monocromo.

## 3. Tipografía
- Display / titulares / nombres de nivel: `VT323` (pixel terminal, legible en grande).
- Micro-etiquetas, badges, botones, nav: `Press Start 2P`.
- Cuerpo y labels: `Inter` / `JetBrains Mono`.
- Escala: hero ~5.4rem, H2 ~3.2rem, H3/tarjeta ~1.6rem, body 16px, micro 0.5–0.66rem.

## 4. Lenguaje pixel
- Bordes `2px solid var(--line)`; radios `0`.
- Sombras hard-offset `box-shadow: 4px 4px 0 0 var(--fg)` (6–8px en cards); hover desplaza
  `translate(-2px,-2px)` y agranda la sombra.
- Fondo: grilla pixel 24px + **dithering** checkerboard 4px a baja opacidad (reemplaza la
  lluvia matrix anterior). Sin animación de fondo.
- `image-rendering: pixelated` utilitario para sprites.
- Transiciones con `steps()` para preservar el feel 8-bit.

## 5. Componentes
- **Navbar** fija, borde inferior 2px; links `Press Start 2P`; activa invertida.
- **Hero:** logo intacto + nombre VT323 con typewriter y cursor-bloque; línea
  `next: ciberseguridad_` en acento; carrusel de tecnologías grayscale.
- **Level map (`#trayectoria`):** 5 nodos conectados por línea punteada. Nodos = cajas pixel
  numeradas. Nodo actual invertido con **avatar lobo pixel** encima ("estás acá"). Nodo final
  **bloqueado**: borde punteado y texto en acento, candado pixel, `en preparación` y barra de
  progreso de celdas. En móvil pasa a vertical con conector a la izquierda.
- **Proyectos:** tarjetas "inventario" con sombra offset y tag micro.
- **Skills:** filas stat con **meter** segmentado (`repeating-linear-gradient`).
- **Sobre mí / timeline / contacto / footer:** mismo lenguaje pixel (bordes 2px, sombras offset).

## 6. Accesibilidad / SEO
- Contraste AA: acento claro `#087a33` (≥4.5:1 sobre blanco); oscuro `#46ff7d` sobre negro.
- `prefers-reduced-motion` anula animaciones.
- Contenido visible por defecto (`.reveal` no oculta): no depende del observer para aparecer.
- HTML semántico, `alt` en imágenes, `role=list/listitem` en el mapa, `aria-label` en barras.
- Selección, caret y scrollbar tematizados. JSON-LD sin skills de ciberseguridad inexistentes.
- Parámetro `?theme=light|dark` para forzar tema (útil para QA y capturas).
