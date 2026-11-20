# Portafolio MF99 — Mapa de Niveles (pixel art) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rediseñar el portafolio estático a pixel art minimalista con un "mapa de niveles" que muestre la evolución de backend y un nivel bloqueado de ciberseguridad "EN PREPARACIÓN", conservando el logo.

**Architecture:** Sitio estático HTML/CSS/JS. Un único `styles.css` con tokens pixel (monocromo + un acento verde) y componentes (mapa de niveles, stat-bars, tarjetas inventario, barra de progreso). `index.html` agrega la sección Trayectoria y convierte skills en stats. Subpáginas comparten el CSS.

**Tech Stack:** HTML5, CSS3 (custom properties, grid/flex), Google Fonts (VT323, Press Start 2P), JS vanilla existente. Verificación visual con `impeccable shot`.

**Spec:** `docs/superpowers/specs/2026-11-20-portafolio-pixel-levelmap-design.md`

## Global Constraints
- Conservar `resources/logo-clean.png` intacto (hero, navbar, favicon, og-image). No pixelarlo ni deformarlo.
- NO inventar credenciales/hitos de ciberseguridad. El nivel 5 es solo "EN PREPARACIÓN" (guiño).
- Rol declarado sigue "desarrollador backend".
- Mantener temas claro/oscuro, `prefers-reduced-motion`, contraste AA, HTML semántico, SEO/JSON-LD sin skills cyber falsas.
- No romper rutas de `proyectos.html`, `sobre-mi.html`, `Contacto.html`.

## Review Focus
- Tema oscuro: el acento verde debe mantener contraste AA sobre negro y sobre blanco.
- Móvil (<768px): el mapa de niveles debe pasar a vertical sin romper la línea conectora.
- `prefers-reduced-motion`: sin animaciones de barra/carrusel/avatar.
- Fuentes pixel: VT323/Press Start 2P no deben usarse para párrafos largos (legibilidad).
- Logo: debe verse correctamente en ambos temas (invert en claro) como hoy.

---

### Task 1: Tokens pixel + tipografías + base

**Files:**
- Modify: `styles.css` (tokens, base, fonts)
- Modify: `index.html`, `proyectos.html`, `sobre-mi.html`, `Contacto.html` (link de fuentes)

- [ ] Step 1: Agregar a los 4 HTML el link de Google Fonts con VT323 + Press Start 2P junto a Inter/JetBrains Mono.
- [ ] Step 2: En `styles.css` redefinir tokens: `--font-pixel: 'VT323'`, `--font-pixel-micro: 'Press Start 2P'`, acento `--accent` (claro `#0a8f3c`, oscuro `#46ff7d`), `--px-shadow` hard-offset, `image-rendering: pixelated` utilitario.
- [ ] Step 3: Verificación: servir el sitio y screenshot del hero; titulares en VT323, micro-labels en Press Start 2P.

### Task 2: Fondo pixel + botones + tarjetas

**Files:** Modify `styles.css`

- [ ] Step 1: Reemplazar `.bg-anim` (lluvia matrix) por grilla pixel + dithering sutil (sin scanlines).
- [ ] Step 2: Botones y cards con borde 2px y sombra hard-offset (`box-shadow: 4px 4px 0 var(--fg)`), hover desplaza.
- [ ] Step 3: Verificación screenshot hero + proyectos.

### Task 3: Hero con hint de transición

**Files:** Modify `index.html`, `styles.css`

- [ ] Step 1: En hero, bajo el título, agregar línea mono `next: ciberseguridad_` con acento.
- [ ] Step 2: Mantener logo y typewriter. Verificación screenshot.

### Task 4: Sección Trayectoria — mapa de niveles

**Files:** Modify `index.html` (nueva sección), `styles.css` (componentes `.levelmap`)

- [ ] Step 1: Insertar sección `#trayectoria` con 5 nodos (L1..L5) y conectores; L4 con avatar (sprite pixel del lobo) "estás acá"; L5 bloqueado con candado + `EN PREPARACIÓN` + barra de progreso de celdas.
- [ ] Step 2: CSS `.levelmap` horizontal en desktop, vertical en móvil; nodo bloqueado en acento.
- [ ] Step 3: Sprite pixel del lobo como SVG inline de cuadrados (silueta derivada del logo).
- [ ] Step 4: Verificación screenshot desktop y móvil; barra y candado visibles; avatar en L4.

### Task 5: Skills → stat bars

**Files:** Modify `index.html`, `styles.css`

- [ ] Step 1: Reemplazar `.skills-list` por filas de stat con barra pixel por tecnología (valores ilustrativos de dominio, no certs).
- [ ] Step 2: Verificación screenshot.

### Task 6: Proyectos inventario + subpáginas

**Files:** Modify `index.html`, `styles.css`, subpáginas (fonts ya en Task 1)

- [ ] Step 1: Tarjetas de proyecto con esquinas pixel y tag estilo "item raro".
- [ ] Step 2: Verificación screenshot de las 4 páginas en claro y oscuro.

### Task 7: Pase final a11y/SEO/motion + commit

**Files:** Modify `styles.css`, `index.html`

- [ ] Step 1: Confirmar `prefers-reduced-motion` anula animaciones nuevas; contraste AA del acento; `alt`/semántica intactos.
- [ ] Step 2: Screenshot final claro/oscuro, desktop/móvil.
- [ ] Step 3: Commit del rediseño.
