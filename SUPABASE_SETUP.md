# Configuración de Supabase - Gestiones España

## 📋 Paso 1: Crear Cuenta y Proyecto

### 1.1 Crear Cuenta en Supabase
1. Ve a [https://supabase.com](https://supabase.com)
2. Click en "Start your project"
3. Regístrate con GitHub, Google o Email
4. Verifica tu email

### 1.2 Crear Nuevo Proyecto
1. Una vez dentro, click en "New Project"
2. Completa los datos:
   - **Name**: `gestiones-espana` (o el nombre que prefieras)
   - **Database Password**: Crea una contraseña segura (¡GUÁRDALA!)
   - **Region**: Selecciona la más cercana a España (ejemplo: `Europe West (London)`)
   - **Pricing Plan**: Free (suficiente para empezar)
3. Click en "Create new project"
4. Espera 2-3 minutos mientras se crea la base de datos

### 1.3 Obtener las Credenciales
Una vez creado el proyecto:

1. Ve a **Settings** (⚙️ en el menú lateral)
2. Click en **Database**
3. Busca la sección **Connection string**
4. Copia el **Connection string** en modo **URI**
   - Se verá algo así: `postgresql://postgres:[YOUR-PASSWORD]@db.xxxxx.supabase.co:5432/postgres`
5. Reemplaza `[YOUR-PASSWORD]` con la contraseña que creaste

**IMPORTANTE**: También necesitarás:
- **Project URL**: En Settings > API
- **Anon Key**: En Settings > API (para el frontend)
- **Service Role Key**: En Settings > API (para el backend - ¡NUNCA expongas esta!)

## 📝 Paso 2: Configurar Variables de Entorno

Crea o edita el archivo `.env` en la raíz del proyecto con:

```env
# Database URL para Prisma
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.xxxxx.supabase.co:5432/postgres"

# Supabase Keys (opcional, para usar Supabase Client)
NEXT_PUBLIC_SUPABASE_URL="https://xxxxx.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="tu-anon-key-aqui"
SUPABASE_SERVICE_ROLE_KEY="tu-service-role-key-aqui"
```

**IMPORTANTE**: 
- Reemplaza `[YOUR-PASSWORD]` con tu contraseña
- Reemplaza `xxxxx` con tu Project Reference ID
- Nunca subas el archivo `.env` a Git

## 🔒 Paso 3: Seguridad del .env

Verifica que `.gitignore` incluya:

```
.env
.env.local
.env*.local
```

## ✅ Verificación

Para verificar que la conexión funciona:

```bash
# Después de configurar el .env
npx prisma db push
```

Si todo está bien, verás:
```
✔ Generated Prisma Client
✔ Your database is now in sync with your schema
```

## 🎯 Próximos Pasos

Una vez configurado:
1. ✅ Ejecutar migraciones de Prisma
2. ✅ Crear las API routes
3. ✅ Conectar los formularios
4. ✅ Actualizar el panel de admin

## 🆘 Solución de Problemas

### Error: "Can't reach database server"
- Verifica que la DATABASE_URL esté correcta
- Verifica que la contraseña no tenga caracteres especiales sin escapar
- Verifica tu conexión a internet

### Error: "Authentication failed"
- La contraseña es incorrecta
- Copia nuevamente el Connection String desde Supabase

### Error: "SSL connection required"
- Agrega `?sslmode=require` al final de tu DATABASE_URL:
  ```
  DATABASE_URL="postgresql://postgres:password@db.xxx.supabase.co:5432/postgres?sslmode=require"
  ```

## 📚 Recursos Útiles

- [Supabase Dashboard](https://app.supabase.com)
- [Supabase Docs](https://supabase.com/docs)
- [Prisma + Supabase](https://www.prisma.io/docs/guides/database/supabase)
