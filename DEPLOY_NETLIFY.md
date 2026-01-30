# 🚀 Guía de Despliegue en Netlify

## ✅ Problemas Corregidos

Se han corregido los siguientes errores que causaban fallos en el build:

1. ✅ Error de sintaxis en `src/app/gestiones/cheque-bebe/page.tsx`
2. ✅ Warnings de ESLint en componentes admin
3. ✅ Caracteres no escapados en `ayuda-alquiler/page.tsx`
4. ✅ Configuración de runtime para API de exportación

**Estado del Build Local**: ✅ Exitoso

---

## 📋 Pasos para Desplegar en Netlify

### 1. Variables de Entorno

Debes configurar las siguientes variables de entorno en Netlify:

1. Ve a tu sitio en Netlify Dashboard
2. Click en **Site settings**
3. Click en **Environment variables**
4. Agrega las siguientes variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://pzixrtjimhbupmgjikax.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_7BFP-RG3o3HvFlOnhb-4gA_MWu-wkXh
SUPABASE_SERVICE_ROLE_KEY=sb_secret_-3H1834SvJgHGtVAoZuiVA_j3ecg1sD
```

⚠️ **IMPORTANTE**: Estas son las mismas variables que tienes en tu archivo `.env` local.

---

### 2. Configuración de Build

El archivo `netlify.toml` ya está configurado con:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--legacy-peer-deps"
```

---

### 3. Activar el Deploy

Netlify detectará automáticamente el nuevo push y comenzará el deployment.

**O puedes activarlo manualmente:**

1. Ve a **Deploys** en el dashboard de Netlify
2. Click en **Trigger deploy**
3. Selecciona **Deploy site**

---

## 🔍 Verificar el Estado del Build

### En Netlify Dashboard:

1. Ve a la sección **Deploys**
2. Click en el deployment más reciente
3. Verás el log de compilación

### Lo que deberías ver:

```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Generating static pages
✓ Finalizing page optimization
```

---

## 📊 Páginas Generadas

El build genera exitosamente:

### Páginas Públicas:
- ✅ `/` - Home
- ✅ `/gestiones/cheque-bebe` - Cheque Bebé
- ✅ `/gestiones/ayuda-alquiler` - Ayuda Alquiler
- ✅ `/gestiones/ingreso-minimo-vital` - IMV
- ✅ `/gestiones/bono-cultural` - Bono Cultural
- ✅ `/contacto` - Contacto

### Panel Admin:
- ✅ `/admin` - Dashboard
- ✅ `/admin/registros` - Gestión de registros
- ✅ `/admin/registros/[id]` - Vista detallada

### APIs:
- ✅ `/api/formulario-home`
- ✅ `/api/formulario-contacto`
- ✅ `/api/tramites/cheque-bebe`
- ✅ `/api/tramites/ayuda-alquiler`
- ✅ `/api/tramites/ingreso-minimo-vital`
- ✅ `/api/tramites/bono-cultural`
- ✅ `/api/notas`
- ✅ `/api/registros/actualizar`
- ✅ `/api/registros/exportar`

---

## ⚠️ Notas Importantes

### 1. Variables de Entorno Públicas

Las variables que empiezan con `NEXT_PUBLIC_` son accesibles en el frontend.
No pongas información sensible en estas variables.

### 2. Plugin de Next.js

Netlify necesita el plugin `@netlify/plugin-nextjs` para funcionar correctamente con Next.js 14.
Ya está configurado en `netlify.toml`.

### 3. Node Version

Usamos Node 18 que es compatible con Next.js 14.2.18.

### 4. Legacy Peer Deps

La flag `--legacy-peer-deps` se usa por compatibilidad con algunas dependencias.

---

## 🐛 Solución de Problemas

### Si el build falla:

#### Error: "Missing environment variables"
**Solución**: Verifica que todas las variables de entorno estén configuradas en Netlify.

#### Error: "Module not found"
**Solución**: 
1. Limpia el caché de build en Netlify (Clear cache and deploy site)
2. Verifica que todas las dependencias estén en `package.json`

#### Error: "Build script returned non-zero exit code"
**Solución**:
1. El código ya está corregido en el último commit
2. Asegúrate de que Netlify esté usando el commit más reciente
3. Verifica el log completo de build en Netlify

---

## ✅ Checklist de Deployment

Antes de hacer deploy, verifica:

- [x] Código compilado localmente sin errores (`npm run build`)
- [x] Variables de entorno configuradas en Netlify
- [x] Archivo `netlify.toml` en el repositorio
- [x] Último commit pusheado a GitHub
- [x] Base de datos de Supabase activa
- [x] Tablas de Supabase creadas (ejecutar `schema-mejorado.sql`)

---

## 🎯 URLs Después del Deploy

Una vez que el deploy sea exitoso, tu sitio estará disponible en:

- **Producción**: `https://tu-sitio.netlify.app`
- **Panel Admin**: `https://tu-sitio.netlify.app/admin`

Netlify te dará una URL temporal que luego puedes cambiar por un dominio custom.

---

## 🔐 Seguridad

### Para Producción:

1. **Cambiar contraseñas de Supabase**
   - No uses las mismas credenciales en dev y producción

2. **Habilitar RLS** (Row Level Security)
   - Ya está habilitado en el schema
   - Revisa las políticas de acceso

3. **Proteger rutas de admin**
   - Considera agregar autenticación
   - Actualmente `/admin` es público

---

## 📞 Soporte

Si tienes problemas con el deployment:

1. Verifica el log completo en Netlify
2. Compara el error con los que ya corregimos
3. Asegúrate de que las variables de entorno estén correctas
4. Verifica que Supabase esté activo y accesible

---

## 🎉 ¡Listo!

Con estos cambios, tu sitio debería desplegarse correctamente en Netlify.

**Último commit**: `29b85e6` - Correcciones para deployment en Netlify

**Cambios aplicados**:
- Página de Cheque Bebé reescrita desde cero
- Warnings de ESLint corregidos
- Caracteres especiales escapados
- Configuración de Netlify agregada
- API de exportación optimizada

**Estado**: ✅ Listo para deployment
