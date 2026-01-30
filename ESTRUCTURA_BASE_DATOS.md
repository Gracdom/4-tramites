# 🗄️ Estructura de Base de Datos - Gestiones España

## 📊 Visión General

La base de datos está organizada en **7 tablas** separadas para mantener los datos organizados y facilitar las consultas.

## 🏗️ Arquitectura

```
┌─────────────────────────────────────────────────────────┐
│                    FORMULARIOS                          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. formulario_home          (Banner principal)        │
│  2. formulario_contacto      (Contacto general)        │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                      TRÁMITES                           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  3. tramite_cheque_bebe      (Cheque Bebé 100€)       │
│  4. tramite_ayuda_alquiler   (Ayuda Alquiler)         │
│  5. tramite_ingreso_minimo_vital (IMV)                │
│  6. tramite_bono_cultural    (Bono Cultural Joven)    │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    COMPARTIDO                           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  7. notas                    (Notas para todos)        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## 📋 Detalle de Cada Tabla

### 1️⃣ `formulario_home`
**Propósito**: Capturar emails del formulario principal/banner

**Campos principales**:
- `email` - Email del usuario
- `estado` - NUEVO, CONTACTADO, PROCESADO, DESCARTADO
- `prioridad` - ALTA, MEDIA, BAJA
- `destacado` - Boolean
- Tracking: UTM, IP, navegador, dispositivo

**Uso**: Formulario minimalista del banner principal

---

### 2️⃣ `formulario_contacto`
**Propósito**: Consultas y contacto general

**Campos principales**:
- `nombre`, `email`, `telefono`
- `asunto` - Tema de la consulta
- `mensaje` - Mensaje del usuario
- `estado`, `prioridad`, `destacado`
- Tracking: UTM, IP, navegador

**Uso**: Formulario de contacto en footer, página de contacto

---

### 3️⃣ `tramite_cheque_bebe`
**Propósito**: Solicitudes del Cheque Bebé (100€/mes)

**Campos principales**:
- **Solicitante**: nombre, apellidos, email, telefono, dni
- **Bebé**: nombre_bebe, fecha_nacimiento_bebe
- **Económicos**: ingresos_anuales, situacion_laboral, numero_hijos
- **Dirección**: direccion, codigo_postal, ciudad, provincia
- **Estado**: PENDIENTE, EN_REVISION, DOCUMENTACION_REQUERIDA, APROBADO, RECHAZADO, COMPLETADO

**Uso**: Página `/gestiones/cheque-bebe`

---

### 4️⃣ `tramite_ayuda_alquiler`
**Propósito**: Solicitudes de Ayuda para el Alquiler

**Campos principales**:
- **Solicitante**: nombre, apellidos, email, telefono, dni
- **Alquiler**: importe_alquiler, direccion_alquiler
- **Económicos**: ingresos_mensuales, situacion_laboral, numero_personas_hogar
- **Dirección**: codigo_postal, ciudad, provincia
- **Estado**: PENDIENTE, EN_REVISION, DOCUMENTACION_REQUERIDA, APROBADO, RECHAZADO, COMPLETADO

**Uso**: Página `/gestiones/ayuda-alquiler`

---

### 5️⃣ `tramite_ingreso_minimo_vital`
**Propósito**: Solicitudes del Ingreso Mínimo Vital (IMV)

**Campos principales**:
- **Solicitante**: nombre, apellidos, email, telefono, dni
- **Económicos**: ingresos_mensuales, situacion_laboral
- **Hogar**: numero_personas_hogar, numero_menores
- **Dirección**: direccion, codigo_postal, ciudad, provincia
- **Estado**: PENDIENTE, EN_REVISION, DOCUMENTACION_REQUERIDA, APROBADO, RECHAZADO, COMPLETADO

**Uso**: Página `/gestiones/ingreso-minimo-vital`

---

### 6️⃣ `tramite_bono_cultural`
**Propósito**: Solicitudes del Bono Cultural Joven (400€)

**Campos principales**:
- **Solicitante**: nombre, apellidos, email, telefono, dni
- **Edad**: fecha_nacimiento (para verificar 18 años)
- **Dirección**: direccion, codigo_postal, ciudad, provincia
- **Estado**: PENDIENTE, EN_REVISION, DOCUMENTACION_REQUERIDA, APROBADO, RECHAZADO, COMPLETADO

**Uso**: Página `/gestiones/bono-cultural`

---

### 7️⃣ `notas`
**Propósito**: Notas internas del equipo sobre cualquier registro

**Campos principales**:
- `contenido` - Texto de la nota
- `usuario` - Admin que escribió la nota
- `tabla_referencia` - Nombre de la tabla (ej: 'tramite_cheque_bebe')
- `registro_id` - UUID del registro específico

**Uso**: Panel de administración para seguimiento

**Ejemplo**:
```sql
-- Nota para un trámite de Cheque Bebé
INSERT INTO notas (contenido, usuario, tabla_referencia, registro_id)
VALUES (
  'Cliente llamó para consultar estado',
  'Admin Juan',
  'tramite_cheque_bebe',
  '123e4567-e89b-12d3-a456-426614174000'
);
```

---

## 🎯 Estados de los Trámites

### Formularios Simples (home, contacto)
- `NUEVO` - Recién recibido
- `CONTACTADO` - Ya se contactó al cliente
- `PROCESADO` - Trámite completado
- `DESCARTADO` - No procede o spam

### Trámites Complejos (cheque bebé, ayuda alquiler, IMV, bono cultural)
- `PENDIENTE` - Recién recibido, esperando revisión
- `EN_REVISION` - En proceso de análisis
- `DOCUMENTACION_REQUERIDA` - Falta documentación
- `APROBADO` - Trámite aprobado
- `RECHAZADO` - Trámite rechazado
- `COMPLETADO` - Proceso finalizado exitosamente

## 🔍 Índices para Búsquedas Rápidas

Cada tabla tiene índices en:
- `email` - Búsqueda por email
- `dni` - Búsqueda por DNI (solo trámites)
- `estado` - Filtrar por estado
- `created_at` - Ordenar por fecha (descendente)

## 🔐 Seguridad

- **Row Level Security (RLS)** habilitado en todas las tablas
- Políticas permisivas para desarrollo
- En producción: restringir según roles de usuario

## 📈 Ventajas de Esta Estructura

✅ **Separación clara** - Cada formulario tiene su tabla
✅ **Campos específicos** - Cada trámite tiene los campos que necesita
✅ **Fácil de consultar** - No hay mezcla de datos
✅ **Escalable** - Fácil agregar nuevos trámites
✅ **Notas centralizadas** - Una tabla de notas para todo
✅ **Estados específicos** - Cada tipo de trámite tiene sus estados apropiados

## 🚀 Próximos Pasos

1. ✅ Ejecutar `schema-mejorado.sql` en Supabase
2. ⏳ Actualizar tipos TypeScript
3. ⏳ Crear APIs para cada tabla
4. ⏳ Conectar formularios
5. ⏳ Actualizar panel de admin

---

**Esta estructura está lista para escalar y manejar miles de solicitudes de manera organizada.**
