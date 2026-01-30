# 🗄️ Ejecutar Schema Mejorado en Supabase

## 📋 Nuevo Diseño de Base de Datos

He creado un **schema mejorado** con tablas separadas para cada tipo de formulario:

### 📊 Estructura de Tablas:

1. **`formulario_home`** - Formulario del banner principal (solo email)
2. **`formulario_contacto`** - Formulario de contacto general
3. **`tramite_cheque_bebe`** - Solicitudes de Cheque Bebé
4. **`tramite_ayuda_alquiler`** - Solicitudes de Ayuda Alquiler
5. **`tramite_ingreso_minimo_vital`** - Solicitudes de IMV
6. **`tramite_bono_cultural`** - Solicitudes de Bono Cultural Joven
7. **`notas`** - Notas compartidas para todos los formularios

## 🚀 Pasos para Ejecutar

### 1. Abre el SQL Editor en Supabase

1. Ve a: https://app.supabase.com/project/pzixrtjimhbupmgjikax
2. Click en **SQL Editor** en el menú lateral

### 2. Copia el Nuevo Schema

1. Abre el archivo: **`supabase/schema-mejorado.sql`**
2. Selecciona TODO el contenido (Ctrl+A)
3. Copia (Ctrl+C)

### 3. Ejecuta el Script

1. Pega el contenido en el SQL Editor (Ctrl+V)
2. Click en **"Run"** (o Ctrl+Enter)
3. Espera 10-15 segundos

### 4. Verifica el Resultado

Deberías ver mensajes como:
```
✅ Schema mejorado creado exitosamente
✅ 6 tablas de formularios/trámites creadas
✅ 1 tabla de notas compartida
✅ Índices y triggers configurados
✅ RLS habilitado
✅ Datos de ejemplo insertados

📋 Tablas creadas:
  1. formulario_home
  2. formulario_contacto
  3. tramite_cheque_bebe
  4. tramite_ayuda_alquiler
  5. tramite_ingreso_minimo_vital
  6. tramite_bono_cultural
  7. notas (compartida)
```

### 5. Verifica las Tablas

1. Ve a **Table Editor** en el menú lateral
2. Deberías ver las 7 tablas nuevas
3. Cada tabla tiene datos de ejemplo

## 📝 Características de Cada Tabla

### `formulario_home`
- Email del usuario
- Estado, prioridad, destacado
- Información técnica (IP, navegador, UTM)

### `formulario_contacto`
- Nombre, email, teléfono
- Asunto y mensaje
- Estado y gestión

### `tramite_cheque_bebe`
- Datos completos del solicitante
- Datos del bebé (nombre, fecha nacimiento)
- Ingresos, situación laboral
- Dirección completa
- Estados específicos: PENDIENTE, EN_REVISION, DOCUMENTACION_REQUERIDA, APROBADO, RECHAZADO, COMPLETADO

### `tramite_ayuda_alquiler`
- Datos del solicitante
- Importe del alquiler
- Ingresos mensuales
- Dirección de la vivienda
- Estados específicos

### `tramite_ingreso_minimo_vital`
- Datos del solicitante
- Ingresos mensuales
- Número de personas en el hogar
- Número de menores
- Estados específicos

### `tramite_bono_cultural`
- Datos del joven solicitante
- Fecha de nacimiento (para verificar edad)
- Dirección
- Estados específicos

### `notas`
- Tabla compartida para todas las anteriores
- Campo `tabla_referencia` indica a qué tabla pertenece
- Campo `registro_id` indica el ID específico

## ⚠️ Importante

El script **elimina las tablas anteriores** automáticamente:
- `DROP TABLE IF EXISTS registros CASCADE;`
- `DROP TABLE IF EXISTS usuarios CASCADE;`
- `DROP TABLE IF EXISTS solicitudes CASCADE;`

Esto asegura una instalación limpia.

## ✅ Después de Ejecutar

Una vez ejecutado, avísame con "listo" y yo:
1. Actualizaré el cliente de Supabase con los nuevos tipos
2. Crearé APIs específicas para cada tabla
3. Conectaré cada formulario a su tabla correspondiente
4. Actualizaré el panel de admin para mostrar todas las tablas

---

**¿Listo para ejecutar? Copia el contenido de `schema-mejorado.sql` y ejecútalo en el SQL Editor de Supabase.**
