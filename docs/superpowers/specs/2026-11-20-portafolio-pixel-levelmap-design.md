# Diseño — Portafolio MF99: "Mapa de Niveles" (pixel art minimalista)

Fecha: 2026-11-20 · Estado: aprobado en conversación · Autor: Matias Furlani + asistente

## Intención y porqué
Matias está en transición de desarrollador backend hacia ciberseguridad. El portafolio debe
contar su camino completo hasta hoy y dejar ver —como un guiño, sin inventar credenciales—
que se está preparando para el siguiente nivel. Estética pedida: **pixel art minimalista**,
bien estructurada, que muestre su evolución.

## Metas
- Mostrar la evolución profesional como un **mapa de niveles** de juego retro.
- Señalar ciberseguridad como **nivel bloqueado / EN PREPARACIÓN** (barra de progreso), sin
  fabricar certificaciones ni hitos.
- Rediseño visual a **pixel art minimalista** conservando la identidad monocroma actual.
- **Conservar el logo** (`resources/logo-clean.png`) intacto como marca personal.

## No-metas
- No agregar credenciales, certs o proyectos de ciberseguridad que no existen.
- No cambiar el rol declarado (sigue siendo desarrollador backend).
- No romper SEO, accesibilidad, temas claro/oscuro ni rutas de las subpáginas.

## Anti-metas (fracaso aunque funcione)
- Perder o deformar el logo.
- Volverse un juego retro recargado que tape el contenido real (clutter, scanlines CRT, etc.).
- Inventar contenido de ciberseguridad.

## Restricciones
- Sitio estático HTML/CSS/JS servido en GitHub Pages (`mfurlani99.github.io/portafolio/`).
- 4 páginas: `index.html`, `proyectos.html`, `sobre-mi.html`, `Contacto.html`; CSS compartido `styles.css`.
- Contenido real disponible: 2 proyectos (SGM, Actas municipales), timeline de 4 hitos,
  stack backend (Java/Spring/MySQL/Python/JS/HTML/CSS/Git).

## Enfoques considerados
1. **Mapa de niveles** (elegido): la carrera como mapa de mundo retro; avatar = lobo del logo;
   nivel cyber bloqueado con barra. Une evolución + guiño en una sola metáfora pixel.
2. **Consola pixelizada** (descartada): re-skin mínimo de la estructura actual; evolución menos
   dramática.
3. **Ficha de personaje RPG** (descartada): concepto fuerte pero la metáfora arriesga opacar el
   contenido real.

## Decisiones de diseño
- **Modo (impeccable):** Experience.
- **Paleta:** monocromo B&W heredado + **un solo acento** verde terminal reservado para lo
  "futuro / en preparación" (nivel bloqueado, barra, hint). Tokens por tema claro/oscuro.
- **Tipografía:** titulares y nombres de nivel `VT323`; micro-etiquetas/badges `Press Start 2P`;
  cuerpo y labels `JetBrains Mono` / `Inter`.
- **Textura:** grilla pixel + dithering sutil de fondo (reemplaza lluvia matrix); bordes y sombras
  hard-offset 8-bit; `image-rendering: pixelated` en sprites. Sin scanlines/CRT.
- **Logo:** `logo-clean.png` intacto (hero, navbar, favicon, og-image). Derivado: sprite pixel del
  lobo como *personaje jugador* solo dentro del mapa.
- **Niveles (contenido real):**
  - L1 Orígenes — aprender a programar.
  - L2 2021–presente — Administrador de Sistemas & Desarrollador, Comuna 9 (GCBA).
  - L3 2023 — Tecnicatura Universitaria en Programación, UNLZ.
  - L4 en curso — Carrera Java, Educación IT. *(avatar "estás acá")*
  - L5 🔒 Ciberseguridad — EN PREPARACIÓN (bloqueado, barra de progreso).
- **Secciones index:** Hero (logo + nombre + rol + hint `next: ciberseguridad_`) → Trayectoria
  (mapa de niveles) → Proyectos (tarjetas "inventario") → Skills (stats con barras) → Contacto.
- **Subpáginas:** mismo sistema pixel vía `styles.css`; sin romper rutas ni SEO.
- **Accesibilidad/SEO:** contraste AA, `prefers-reduced-motion`, HTML semántico, JSON-LD sin
  skills de cyber inexistentes.

## Queda a criterio del builder
- Tamaño exacto de la grilla pixel y densidad del dithering.
- Forma exacta del sprite pixel del lobo (silueta derivada del logo).
- Número de celdas de la barra de progreso del nivel bloqueado.
