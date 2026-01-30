# 🗄️ Ejecutar Script SQL en Supabase

## ✅ Configuración Completada

He configurado el proyecto para usar el **Cliente de Supabase** en lugar de Prisma. Esto es más simple y no requiere connection strings complicados.

## 📋 Pasos para Crear las Tablas

### 1. Espera a que Termine el Mantenimiento

Primero, verifica que el mantenimiento de Supabase haya terminado:
- Ve a: https://app.supabase.com/project/pzixrtjimhbupmgjikax
- Si ves el mensaje "Scheduled maintenance is in progress", espera unos minutos
- Refresca la página hasta que desaparezca el mensaje

### 2. Abre el SQL Editor

1. En tu proyecto de Supabase, busca en el menú lateral izquierdo
2. Click en **SQL Editor** (icono de base de datos)

### 3. Copia el Script SQL

1. Abre el archivo: `supabase/schema.sql` (en tu proyecto)
2. Selecciona TODO el contenido (Ctrl+A)
3. Copia el contenido (Ctrl+C)

### 4. Pega y Ejecuta el Script

1. En el SQL Editor de Supabase, pega el script (Ctrl+V)
2. Click en el botón **"Run"** (o presiona Ctrl+Enter)
3. Espera a que se ejecute (puede tomar 5-10 segundos)

### 5. Verifica que Funcionó

Deberías ver mensajes como:
```
✅ Tablas creadas exitosamente
✅ Índices creados
✅ Triggers configurados
✅ RLS habilitado
✅ Datos de ejemplo insertados
```

### 6. Verifica las Tablas

1. En el menú lateral, click en **Table Editor**
2. Deberías ver 4 tablas nuevas:
   - `registros`
   - `notas`
   - `usuarios`
   - `solicitudes`
3. Click en `registros` para ver los 3 registros de ejemplo

## 🎯 Qué Hace el Script

El script SQL crea:

1. **4 Tablas**:
   - `registros`: Para guardar los datos de formularios
   - `notas`: Para notas internas sobre registros
   - `usuarios`: Para usuarios/clientes
   - `solicitudes`: Para solicitudes de ayudas

2. **Índices**: Para búsquedas rápidas por email, estado, prioridad, etc.

3. **Triggers**: Para actualizar automáticamente `updated_at`

4. **Row Level Security (RLS)**: Habilitado con políticas permisivas para desarrollo

5. **Datos de Ejemplo**: 3 registros de prueba

## 🚀 Después de Ejecutar el Script

Una vez que hayas ejecutado el script exitosamente:

1. **Verifica las tablas** en el Table Editor
2. **Avísame** y continuaré con:
   - Conectar los formularios a la base de datos
   - Actualizar el panel de admin para mostrar datos reales
   - Implementar búsqueda, filtros y paginación

## ❌ Si Hay Errores

### Error: "relation already exists"
- Las tablas ya existen
- Puedes ignorar este error o eliminar las tablas primero

### Error: "permission denied"
- Verifica que estés en tu proyecto correcto
- Refresca la página e intenta de nuevo

### Error: "syntax error"
- Asegúrate de copiar TODO el script completo
- No modifiques el script

## 📸 Captura de Pantalla

Si tienes dudas, toma una captura de pantalla del SQL Editor después de ejecutar el script y compártela conmigo.

---

**Una vez que ejecutes el script, avísame con un "listo" o "ejecutado" y continuaré con la integración de los formularios.**
