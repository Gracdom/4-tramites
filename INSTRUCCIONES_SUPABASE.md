# 🚀 Guía Paso a Paso: Conectar Supabase

## ✅ Checklist de Configuración

### Paso 1: Crear Proyecto en Supabase (5 minutos)

1. **Ir a Supabase**
   - [ ] Abre [https://supabase.com](https://supabase.com)
   - [ ] Click en "Start your project"
   - [ ] Inicia sesión con GitHub, Google o Email

2. **Crear Nuevo Proyecto**
   - [ ] Click en "New Project"
   - [ ] **Name**: `gestiones-espana`
   - [ ] **Database Password**: Crea una contraseña segura
     - ⚠️ **MUY IMPORTANTE**: Guarda esta contraseña en un lugar seguro
     - Ejemplo: `MiPassword123!Segura`
   - [ ] **Region**: Selecciona `Europe West (London)` o la más cercana
   - [ ] **Pricing Plan**: Free
   - [ ] Click en "Create new project"
   - [ ] Espera 2-3 minutos mientras se crea

### Paso 2: Obtener Credenciales (2 minutos)

Una vez creado el proyecto:

1. **Obtener DATABASE_URL**
   - [ ] En el dashboard de Supabase, ve a **Settings** (⚙️)
   - [ ] Click en **Database**
   - [ ] Scroll hasta **Connection string**
   - [ ] Selecciona **URI** (no Supavisor)
   - [ ] Copia el string completo
   - [ ] Se verá así: `postgresql://postgres.[PROJECT-REF]:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres`
   - [ ] **IMPORTANTE**: Reemplaza `[YOUR-PASSWORD]` con tu contraseña real

2. **Obtener API Keys**
   - [ ] Ve a **Settings** > **API**
   - [ ] Copia el **Project URL**
   - [ ] Copia el **anon public** key
   - [ ] Copia el **service_role** key (¡secreto!)

### Paso 3: Configurar Variables de Entorno (1 minuto)

1. **Editar archivo `.env`**
   - [ ] Abre el archivo `.env` en la raíz del proyecto
   - [ ] Pega tus credenciales:

```env
# Reemplaza con tu información real de Supabase
DATABASE_URL="postgresql://postgres.[PROJECT-REF]:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres"

NEXT_PUBLIC_SUPABASE_URL="https://xxxxx.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="tu-anon-key-aqui"
SUPABASE_SERVICE_ROLE_KEY="tu-service-role-key-aqui"
```

   - [ ] Guarda el archivo

### Paso 4: Crear las Tablas en Supabase (1 minuto)

Ejecuta estos comandos en tu terminal:

```bash
# 1. Generar el cliente de Prisma
npx prisma generate

# 2. Crear las tablas en Supabase
npx prisma db push
```

**Deberías ver:**
```
✔ Generated Prisma Client
✔ Your database is now in sync with your schema
```

### Paso 5: Verificar en Supabase (1 minuto)

- [ ] Ve al dashboard de Supabase
- [ ] Click en **Table Editor** (icono de tabla)
- [ ] Deberías ver las tablas creadas:
  - ✅ `registros`
  - ✅ `notas`
  - ✅ `usuarios`
  - ✅ `solicitudes`

## 🎉 ¡Listo! Base de Datos Conectada

Si todos los pasos anteriores están ✅, tu base de datos está lista.

## 🔄 Próximos Pasos Automáticos

Una vez que confirmes que todo funciona, yo me encargaré de:

1. ✅ Crear las API routes para guardar datos
2. ✅ Conectar los formularios a la base de datos
3. ✅ Actualizar el panel de admin para mostrar datos reales
4. ✅ Implementar búsqueda y filtros
5. ✅ Agregar paginación

## ❓ ¿Tienes Problemas?

### Error: "Can't reach database server"
**Solución:**
- Verifica que copiaste correctamente el DATABASE_URL
- Asegúrate de que tu contraseña no tenga caracteres especiales sin escapar
- Verifica tu conexión a internet

### Error: "Authentication failed"
**Solución:**
- La contraseña en el DATABASE_URL es incorrecta
- Ve a Supabase > Settings > Database > Reset Database Password
- Actualiza el DATABASE_URL con la nueva contraseña

### Error: "SSL required"
**Solución:**
Agrega `?sslmode=require` al final de tu DATABASE_URL:
```
DATABASE_URL="tu-url-aqui?sslmode=require"
```

### No veo las tablas en Supabase
**Solución:**
- Ejecuta nuevamente: `npx prisma db push`
- Refresca el Table Editor en Supabase
- Verifica que el DATABASE_URL sea correcto

## 📞 Avísame Cuando Esté Listo

Una vez que hayas completado todos los pasos y veas las tablas en Supabase, avísame y continuaré con la implementación de las APIs y la conexión de los formularios.

## 🔐 Recordatorios de Seguridad

- ⚠️ **NUNCA** compartas tu `service_role` key
- ⚠️ **NUNCA** subas el archivo `.env` a Git
- ⚠️ El archivo `.env` ya está en `.gitignore`
- ✅ Usa `.env.example` como plantilla para otros desarrolladores
