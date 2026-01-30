# 🔑 Cómo Obtener la Contraseña de la Base de Datos

## Opción 1: Si Guardaste la Contraseña al Crear el Proyecto

Si guardaste la contraseña cuando creaste el proyecto en Supabase:
1. Usa esa contraseña
2. Edita el archivo `.env`
3. Reemplaza `[YOUR-PASSWORD]` con tu contraseña

## Opción 2: Si NO Recuerdas la Contraseña

Necesitas resetear la contraseña:

### Pasos para Resetear:

1. **Ve a tu proyecto en Supabase**
   - Dashboard: https://app.supabase.com

2. **Navega a Database Settings**
   - Click en **Settings** (⚙️ en el menú lateral)
   - Click en **Database**

3. **Resetea la Contraseña**
   - Scroll hasta la sección **Database password**
   - Click en **Reset database password**
   - Supabase generará una nueva contraseña
   - **¡CÓPIALA INMEDIATAMENTE!** (solo se muestra una vez)

4. **Actualiza el .env**
   - Abre el archivo `.env`
   - Busca esta línea:
     ```
     DATABASE_URL="postgresql://postgres.pzixrtjimhbupmgjikax:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
     ```
   - Reemplaza `[YOUR-PASSWORD]` con la contraseña que copiaste
   - Guarda el archivo

## Opción 3: Obtener el Connection String Completo

La forma más fácil:

1. **Ve a Supabase Dashboard**
   - Settings > Database

2. **Busca "Connection string"**
   - Selecciona el modo **URI** (no Supavisor)
   - Copia el string completo
   - Se verá algo así:
     ```
     postgresql://postgres.pzixrtjimhbupmgjikax:TU_PASSWORD_AQUI@aws-0-us-east-1.pooler.supabase.com:6543/postgres
     ```

3. **Pega en .env**
   - Reemplaza toda la línea `DATABASE_URL=` con lo que copiaste
   - Asegúrate de que esté entre comillas

## ⚠️ Importante

- La contraseña solo se muestra UNA VEZ cuando la reseteas
- Guárdala en un lugar seguro
- NUNCA la compartas públicamente
- NUNCA la subas a Git (el .env ya está en .gitignore)

## ✅ Verificar que Funciona

Una vez que hayas actualizado el `.env`:

```bash
npm run db:push
```

Si ves este mensaje, ¡funcionó!:
```
✔ Generated Prisma Client
✔ Your database is now in sync with your schema
```

## ❌ Si Ves un Error

**Error: "Authentication failed"**
- La contraseña es incorrecta
- Resetea la contraseña nuevamente
- Asegúrate de copiarla exactamente

**Error: "Can't reach database server"**
- Verifica tu conexión a internet
- Verifica que el DATABASE_URL esté completo y correcto
