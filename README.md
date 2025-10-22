# Portafolio Jan Pérez (React + Vite + TS)

Proyecto modular y móvil‑first para portafolio con animaciones, parallax suave y temas Día/Noche.

## Stack
- React 18 + TypeScript
- Vite 5
- Framer Motion para transiciones sutiles

## Desarrollo
1. Instalar dependencias: `npm install`
2. Ejecutar en dev: `npm run dev`
3. Build de producción: `npm run build` y `npm run preview`

## Estructura
- `src/app` App, ThemeProvider
- `src/components` UI reutilizable (NavDots, ThemeToggle)
- `src/features` Secciones (hero, skills, projects, contact)
- `src/styles` Tokens de tema + estilos globales
- `src/assets` Imágenes/medios

## Personalización
- Cambia textos/links en cada sección dentro de `src/features/*`
- Ajusta colores en `src/styles/tokens.css`
- Agrega imágenes en `src/assets` y úsalas en las cards

Imágenes de muestra
- Proyectos usan imágenes referenciales de Unsplash (en `data.ts`). Puedes reemplazarlas por tus capturas y enlaces reales.
