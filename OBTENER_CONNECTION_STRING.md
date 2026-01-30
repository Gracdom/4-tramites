# 🔗 Cómo Obtener el Connection String Correcto de Supabase

## ⚠️ Problema Actual

El connection string que estamos usando es para el **pooler**, pero Prisma necesita la **conexión directa** a la base de datos.

## 📝 Pasos para Obtener el Connection String Correcto

### 1. Ve a tu Proyecto en Supabase

Abre tu navegador y ve a:
- **URL**: https://app.supabase.com/project/pzixrtjimhbupmgjikax

### 2. Navega a Database Settings

- Click en **Settings** (⚙️ en el menú lateral izquierdo)
- Click en **Database**

### 3. Busca "Connection string"

Scroll hacia abajo hasta encontrar la sección **Connection string**

### 4. Selecciona el Modo Correcto

**MUY IMPORTANTE**: Necesitas copiar el connection string en modo **URI** (NO Transaction, NO Session, NO Supavisor)

Verás algo como esto:

```
┌─────────────────────────────────────────┐
│ Connection string                       │
├─────────────────────────────────────────┤
│ Mode: [URI] [Transaction] [Session]     │
│                                         │
│ postgresql://postgres.pzixrtjimhbupm... │
│ [Copy] [Show password]                  │
└─────────────────────────────────────────┘
```

### 5. Copia el Connection String

1. Asegúrate de que esté seleccionado **URI**
2. Click en **Show password** (para que se muestre la contraseña completa)
3. Click en **Copy** para copiar todo el string

El connection string debe verse así:
```
postgresql://postgres.pzixrtjimhbupmgjikax:Gracdom123.@aws-0-us-east-1.pooler.supabase.com:6543/postgres?workaround=supabase-pooler.vercel
```

O puede ser algo como:
```
postgresql://postgres:[PASSWORD]@db.pzixrtjimhbupmgjikax.supabase.co:5432/postgres
```

### 6. Pégalo Aquí

Una vez que lo copies, pégalo en el chat y yo lo configuraré correctamente en el archivo `.env`.

## 🔍 Alternativa: Buscar Connection Pooling

Si no encuentras la sección anterior, busca:

1. **Settings** > **Database**
2. Busca una sección llamada **Connection Pooling** o **Direct Connection**
3. Copia el **URI** que aparece ahí

## ❓ Si Tienes Dudas

El connection string correcto debe:
- Empezar con `postgresql://`
- Contener tu contraseña `Gracdom123.`
- Tener un host que termine en `.supabase.co` o `.pooler.supabase.com`
- Incluir el puerto (5432 o 6543)

## 📸 Captura de Pantalla

Si no estás seguro de cuál copiar, puedes tomar una captura de pantalla de la sección "Connection string" en Supabase y compartirla conmigo.
