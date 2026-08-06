# DESIGN.md — Sistema de Diseño Portafolio Matias Furlani

Estilo re-creado a partir de **cobalt.tools**: consola **blanco y negro**, minimalista, con sidebar vertical de pestañas y acento monocrome.

## 1. Principios
- Maximalist minimalismo: blanco puro / negro puro, cero color.
- Sidebar izquierda fija con pestañas verticales (icono + etiqueta), como cobalt.tools.
- Motivos de terminal/consola: prompt `>>`, tipografía monoespaciada en títulos, botones con flechas.
- Bordes finos `1px solid #000`, sin sombras pesadas, sin gradientes ni glows.
- Aire/whitespace generoso, columnas centradas.

## 2. Paleta (solo escala de grises)
```css
:root {
  --bg: #ffffff;
  --fg: #000000;
  --muted: #6b6b6b;
  --line: #000000;
  --line-weak: #e5e5e5;
  --inverse-bg: #000000;
  --inverse-fg: #ffffff;
}
[data-theme="dark"] {
  --bg: #000000;
  --fg: #ffffff;
  --muted: #b3b3b3;
  --line: #ffffff;
  --line-weak: #2b2b2b;
  --inverse-bg: #ffffff;
  --inverse-fg: #000000;
}
```

## 3. Tipografía
- Cuerpo: `Inter`, `system-ui`.
- Títulos / elementos de consola: `JetBrains Mono`, `ui-monospace`.
- Escala: Hero 40px, H2 26px, H3 20px, body 16px, small 13px.

## 4. Layout y componentes
- **Sidebar** (izquierda, ~220px, fija): logo en top y pestañas verticales icono+texto; activa con fondo invertido.
- **Contenido**: margin-left del sidebar, columnas centradas (max 680-760px).
- **Botones**: pill (`999px`), `1px` borde negro; hover invierte (bg negro, texto blanco); `.btn--primary` ya invertido desde el inicio.
- **Card**: fondo surface, `1px` borde negro, hover: borde duplica/hover efe, sin sombra.
- **Prompt de consola**: línea `$` o `>>` antes de títulos de sección, en mono.
- **Typewriter**: texto en JetBrains Mono con cursor `▌`.

## 5. Componentes portafolio
- Navbar → reemplazado por **sidebar**.
- Hero: etiqueta mono `// saludo`, título typewriter, prompt `>>`, CTAs pill.
- Proyectos: filas/columnas en tarjetas borde-nolineado.
- Skills: `table`-replica, filas `>> nombre — desc`.
- Sobre mí: timeline con viñetas `▸`.
- Contacto: lista de enlaces + form con inputs underline.
- Footer: línea `border-top` y prompt `$`.

## 6. Accesibilidad / SEO
- Footer de perfil aria-clear.
- UEs sin color (usar shape/texto/patrón), contraste AA.
- `prefers-reduced-motion` respetado.
- `alt` en todas las imágenes; HTML semántico; JSON-LD.