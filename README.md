# Gestiones España

Aplicación web para la gestión de trámites administrativos en España. Desarrollada con **Next.js** (App Router), **TypeScript**, **Tailwind CSS** y **shadcn/ui**.

## Stack tecnológico

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (componentes)
- **next-themes** (modo oscuro)
- **Lucide React** (iconos)

## Estructura del proyecto

```
gestiones-espana/
├── src/
│   ├── app/                 # App Router: rutas y layouts
│   │   ├── layout.tsx       # Layout principal (modo oscuro por defecto)
│   │   ├── page.tsx         # Página de inicio
│   │   ├── gestiones/
│   │   ├── documentos/
│   │   └── contacto/
│   ├── components/
│   │   ├── layout/          # Header, etc.
│   │   └── ui/              # shadcn: Button, Card, etc.
│   └── lib/
│       └── utils.ts         # Utilidades (cn)
├── components.json          # Configuración shadcn
└── tailwind.config.ts
```

## Desarrollo

1. **Instalar dependencias**

   ```bash
   npm install
   ```

   Si aparece `ENOTCACHED` o errores de caché, prueba:

   ```bash
   npm cache clean --force
   npm config set prefer-online true
   npm install
   ```

2. **Arrancar en desarrollo**

   ```bash
   npm run dev
   ```

3. Abrir [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — Servidor de desarrollo
- `npm run build` — Build de producción
- `npm run start` — Servidor de producción
- `npm run lint` — ESLint

## Diseño

- **Estilo:** Minimalista y responsive
- **Tema:** Modo oscuro por defecto, con alternancia en el header
- **Idioma:** Español
