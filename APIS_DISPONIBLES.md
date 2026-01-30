# 🔌 APIs Disponibles - Gestiones España

## 📋 Resumen de Endpoints

Todas las APIs están bajo `/api/` y retornan JSON.

## 🏠 Formulario Home (Banner Principal)

### POST `/api/formulario-home`
Crear registro del formulario del banner principal.

**Body (JSON)**:
```json
{
  "email": "usuario@example.com",
  "url": "https://...",
  "utmSource": "google",
  "utmMedium": "cpc",
  "utmCampaign": "verano2024"
}
```

**Campos requeridos**: `email`

**Respuesta (201)**:
```json
{
  "message": "Registro creado exitosamente",
  "registro": { ... }
}
```

### GET `/api/formulario-home`
Obtener registros del formulario home.

**Query params**:
- `estado` - Filtrar por estado (NUEVO, CONTACTADO, PROCESADO, DESCARTADO)
- `limit` - Límite de resultados (default: 50)
- `offset` - Offset para paginación (default: 0)

**Ejemplo**: `/api/formulario-home?estado=NUEVO&limit=20`

---

## 📧 Formulario de Contacto

### POST `/api/formulario-contacto`
Crear mensaje de contacto.

**Body (JSON)**:
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "telefono": "+34 600 123 456",
  "asunto": "Consulta general",
  "mensaje": "Necesito información sobre..."
}
```

**Campos requeridos**: `nombre`, `email`, `mensaje`

### GET `/api/formulario-contacto`
Obtener mensajes de contacto.

**Query params**: `estado`, `limit`, `offset`

---

## 👶 Trámite: Cheque Bebé

### POST `/api/tramites/cheque-bebe`
Crear solicitud de Cheque Bebé.

**Body (JSON)**:
```json
{
  "nombre": "Ana",
  "apellidos": "García Martínez",
  "email": "ana@example.com",
  "telefono": "+34 600 789 012",
  "dni": "12345678A",
  "nombreBebe": "Sofía",
  "fechaNacimientoBebe": "2024-03-15",
  "ingresosAnuales": "25000",
  "situacionLaboral": "Empleada",
  "numeroHijos": 2,
  "direccion": "Calle Mayor 123",
  "codigoPostal": "28001",
  "ciudad": "Madrid",
  "provincia": "Madrid",
  "mensaje": "Información adicional..."
}
```

**Campos requeridos**: `nombre`, `apellidos`, `email`, `telefono`

### GET `/api/tramites/cheque-bebe`
Obtener solicitudes de Cheque Bebé.

**Query params**: `estado`, `limit`, `offset`

**Estados posibles**: PENDIENTE, EN_REVISION, DOCUMENTACION_REQUERIDA, APROBADO, RECHAZADO, COMPLETADO

---

## 🏠 Trámite: Ayuda Alquiler

### POST `/api/tramites/ayuda-alquiler`
Crear solicitud de Ayuda Alquiler.

**Body (JSON)**:
```json
{
  "nombre": "Pedro",
  "apellidos": "Sánchez López",
  "email": "pedro@example.com",
  "telefono": "+34 600 345 678",
  "dni": "87654321B",
  "importeAlquiler": 800,
  "ingresosMensuales": 1200,
  "situacionLaboral": "Empleado",
  "numeroPersonasHogar": 4,
  "direccionAlquiler": "Calle del Alquiler 45",
  "codigoPostal": "08001",
  "ciudad": "Barcelona",
  "provincia": "Barcelona",
  "mensaje": "..."
}
```

**Campos requeridos**: `nombre`, `apellidos`, `email`, `telefono`

### GET `/api/tramites/ayuda-alquiler`
Obtener solicitudes de Ayuda Alquiler.

---

## 💰 Trámite: Ingreso Mínimo Vital

### POST `/api/tramites/ingreso-minimo-vital`
Crear solicitud de IMV.

**Body (JSON)**:
```json
{
  "nombre": "Laura",
  "apellidos": "Fernández Ruiz",
  "email": "laura@example.com",
  "telefono": "+34 600 901 234",
  "dni": "11223344C",
  "ingresosMensuales": 450,
  "situacionLaboral": "Desempleada",
  "numeroPersonasHogar": 4,
  "numeroMenores": 2,
  "direccion": "Calle de la Esperanza 78",
  "codigoPostal": "41001",
  "ciudad": "Sevilla",
  "provincia": "Sevilla",
  "mensaje": "..."
}
```

**Campos requeridos**: `nombre`, `apellidos`, `email`, `telefono`

### GET `/api/tramites/ingreso-minimo-vital`
Obtener solicitudes de IMV.

---

## 🎭 Trámite: Bono Cultural Joven

### POST `/api/tramites/bono-cultural`
Crear solicitud de Bono Cultural.

**Body (JSON)**:
```json
{
  "nombre": "Miguel",
  "apellidos": "Torres Jiménez",
  "email": "miguel@example.com",
  "telefono": "+34 600 567 890",
  "dni": "55667788D",
  "fechaNacimiento": "2006-05-20",
  "direccion": "Calle del Arte 12",
  "codigoPostal": "46001",
  "ciudad": "Valencia",
  "provincia": "Valencia",
  "mensaje": "..."
}
```

**Campos requeridos**: `nombre`, `apellidos`, `email`, `telefono`

### GET `/api/tramites/bono-cultural`
Obtener solicitudes de Bono Cultural.

---

## 📝 Notas

### POST `/api/notas`
Crear nota interna sobre cualquier registro.

**Body (JSON)**:
```json
{
  "contenido": "Cliente llamó para consultar estado",
  "usuario": "Admin Juan",
  "tabla_referencia": "tramite_cheque_bebe",
  "registro_id": "123e4567-e89b-12d3-a456-426614174000"
}
```

**Campos requeridos**: `contenido`, `usuario`, `tabla_referencia`, `registro_id`

**Tablas válidas**:
- `formulario_home`
- `formulario_contacto`
- `tramite_cheque_bebe`
- `tramite_ayuda_alquiler`
- `tramite_ingreso_minimo_vital`
- `tramite_bono_cultural`

### GET `/api/notas`
Obtener notas de un registro específico.

**Query params**:
- `tabla_referencia` - Tabla del registro (requerido)
- `registro_id` - ID del registro (requerido)

**Ejemplo**: `/api/notas?tabla_referencia=tramite_cheque_bebe&registro_id=123e4567...`

---

## 🔐 Seguridad

- Todas las APIs capturan automáticamente: IP, User-Agent, Referer
- Los datos sensibles están protegidos por Row Level Security en Supabase
- Las claves de API están en variables de entorno

## 📊 Respuestas de Error

**400 Bad Request**:
```json
{
  "error": "Descripción del error de validación"
}
```

**500 Internal Server Error**:
```json
{
  "error": "Error interno del servidor",
  "details": "Detalles técnicos del error"
}
```

## 🎯 Próximos Pasos

1. ✅ Conectar formularios del frontend a estas APIs
2. ✅ Actualizar panel de admin para mostrar datos de todas las tablas
3. ✅ Implementar búsqueda y filtros en el admin
4. ✅ Agregar paginación en el admin

---

**Todas las APIs están listas y funcionando. Ahora conectaremos los formularios del frontend.**
