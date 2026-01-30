# Panel de Registros de Clientes

## 📋 Descripción

Sistema completo para visualizar y gestionar todos los datos que los clientes llenan en los formularios de la plataforma.

## 🚀 Acceso

El panel de registros está disponible en:

```
http://localhost:3000/admin/registros
```

## 📁 Páginas Creadas

### 1. Lista de Registros (`/admin/registros`)

Página principal que muestra todos los registros de formularios llenados por clientes.

#### Características:

**Estadísticas en tiempo real:**
- Total de registros
- Registros de hoy
- Sin contactar (nuevos)
- Destacados

**Tabla de registros con:**
- ID único de registro
- Fecha y hora de envío
- Datos del cliente (nombre, email, teléfono)
- Mensaje del cliente (si existe)
- Formulario de origen
- Estado (Nuevo, Contactado, Procesado, Descartado)
- Prioridad (Alta, Media, Baja)
- Marcador de destacado (estrella)

**Filtros avanzados:**
- Búsqueda por nombre, email o teléfono
- Filtro por estado
- Filtro por prioridad
- Exportación a CSV

**Acciones rápidas:**
- Ver detalles completos
- Marcar/desmarcar como destacado
- Enlaces directos a email y teléfono

### 2. Vista Detallada (`/admin/registros/[id]`)

Página de detalles completos de un registro específico.

#### Secciones:

**1. Estado y Prioridad**
- Cambiar estado (Nuevo → Contactado → Procesado)
- Ajustar prioridad (Alta, Media, Baja)
- Guardar cambios

**2. Información de Contacto**
- Nombre completo
- Email con botón "Enviar Email"
- Teléfono con botones "Llamar" y "WhatsApp"

**3. Mensaje del Cliente**
- Visualización del mensaje completo enviado por el cliente
- Destacado en un cuadro especial

**4. Agregar Nota Interna**
- Área de texto para agregar notas sobre el cliente
- Útil para seguimiento interno

**5. Historial de Actividad**
- Línea de tiempo con todas las acciones realizadas
- Quién realizó la acción y cuándo
- Detalles de cada acción

**6. Detalles del Formulario** (Sidebar)
- Nombre del formulario usado
- Fuente de origen
- URL completa
- Referrer (de dónde vino el cliente)

**7. Información Técnica** (Sidebar)
- Dirección IP
- Navegador y versión
- Dispositivo (Desktop/Mobile/Tablet)
- Sistema operativo
- Resolución de pantalla
- Idioma del navegador

**8. Parámetros UTM** (Sidebar)
- utm_source
- utm_medium
- utm_campaign
- Útil para tracking de campañas

## 📊 Datos Capturados

### Formularios Rastreados:

1. **Banner Principal (Home)**
   - Email

2. **Cheque Bebé - Hero Form**
   - Nombre
   - Email
   - Teléfono

3. **Ayuda Alquiler - Hero Form**
   - Nombre
   - Email
   - Teléfono

4. **Ingreso Mínimo Vital - Hero Form**
   - Nombre
   - Email
   - Teléfono

5. **Bono Cultural - Hero Form**
   - Nombre
   - Email
   - Teléfono

6. **Home Contact Form**
   - Nombre completo
   - Email
   - Teléfono
   - Mensaje

7. **Contact Forms (Landing Pages)**
   - Nombre
   - Email
   - Teléfono
   - Mensaje

### Metadatos Automáticos:

- **Fecha y hora**: Timestamp exacto del envío
- **ID único**: Identificador único del registro
- **Formulario**: Qué formulario fue llenado
- **Fuente**: De qué página vino
- **URL**: URL completa de origen
- **IP**: Dirección IP del cliente
- **Navegador**: Browser y versión
- **Dispositivo**: Tipo de dispositivo
- **SO**: Sistema operativo
- **Resolución**: Tamaño de pantalla
- **Idioma**: Idioma del navegador
- **Referrer**: De dónde llegó al sitio
- **UTM**: Parámetros de campaña (si existen)

## 🎯 Estados del Registro

| Estado | Descripción | Color |
|--------|-------------|-------|
| **Nuevo** | Acaba de llegar, sin revisar | Azul |
| **Contactado** | Ya se contactó al cliente | Ámbar |
| **Procesado** | Registro completamente procesado | Verde |
| **Descartado** | No requiere seguimiento | Gris |

## ⭐ Niveles de Prioridad

| Prioridad | Cuándo Usar | Color |
|-----------|-------------|-------|
| **Alta** | Cliente urgente o muy interesado | Rojo |
| **Media** | Cliente estándar | Ámbar |
| **Baja** | Baja urgencia o bajo interés | Gris |

## 🔄 Flujo de Trabajo Recomendado

1. **Cliente llena formulario** → Registro creado con estado "Nuevo"
2. **Admin revisa registro** → Cambia a prioridad según perfil
3. **Admin contacta cliente** → Cambia estado a "Contactado"
4. **Admin procesa caso** → Cambia estado a "Procesado"
5. **Agregar notas** → Documentar acciones y seguimiento

## 💡 Funcionalidades Destacadas

### Marcador de Destacados
- Estrella dorada para marcar registros importantes
- Filtro rápido para ver solo destacados
- Útil para no perder de vista clientes prioritarios

### Búsqueda Instantánea
- Buscar por cualquier campo
- Resultados en tiempo real
- Sin necesidad de recargar página

### Exportación de Datos
- Exportar a CSV todos los registros
- Incluye todos los filtros aplicados
- Ideal para reportes y análisis

### Enlaces Directos de Contacto
- Click en email → Abre cliente de correo
- Click en teléfono → Inicia llamada
- Botón WhatsApp → Abre chat directo

## 🔌 Integración con Backend

### Estructura de Datos Sugerida

```typescript
interface Registro {
  // Datos principales
  id: string;
  nombre: string;
  email: string;
  telefono?: string;
  mensaje?: string;
  
  // Metadata
  formulario: string;
  fuente: string;
  url: string;
  fecha: string;
  
  // Estado y prioridad
  estado: 'nuevo' | 'contactado' | 'procesado' | 'descartado';
  prioridad: 'alta' | 'media' | 'baja';
  destacado: boolean;
  
  // Información técnica
  ip: string;
  navegador: string;
  dispositivo: 'desktop' | 'mobile' | 'tablet';
  so: string;
  resolucion: string;
  idioma: string;
  referrer: string;
  
  // UTM (opcional)
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}
```

### API Endpoints Sugeridos

```typescript
// Listar todos los registros
GET /api/admin/registros
Query params: page, limit, estado, prioridad, search

// Obtener un registro específico
GET /api/admin/registros/:id

// Crear nuevo registro (desde formulario)
POST /api/registros
Body: { nombre, email, telefono, mensaje, metadata }

// Actualizar estado/prioridad
PATCH /api/admin/registros/:id
Body: { estado, prioridad, destacado }

// Agregar nota
POST /api/admin/registros/:id/notas
Body: { contenido }

// Exportar a CSV
GET /api/admin/registros/export
Query params: filtros aplicados
```

### Ejemplo de Servicio

```typescript
// src/services/registros.service.ts
export const registrosService = {
  async getAll(params: {
    page?: number;
    limit?: number;
    estado?: string;
    prioridad?: string;
    search?: string;
  }) {
    const query = new URLSearchParams(params as any);
    const response = await fetch(`/api/admin/registros?${query}`);
    return response.json();
  },
  
  async getById(id: string) {
    const response = await fetch(`/api/admin/registros/${id}`);
    return response.json();
  },
  
  async update(id: string, data: Partial<Registro>) {
    const response = await fetch(`/api/admin/registros/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  
  async addNote(id: string, contenido: string) {
    const response = await fetch(`/api/admin/registros/${id}/notas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contenido }),
    });
    return response.json();
  },
  
  async export(params: any) {
    const query = new URLSearchParams(params);
    const response = await fetch(`/api/admin/registros/export?${query}`);
    const blob = await response.blob();
    
    // Descargar archivo
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `registros-${Date.now()}.csv`;
    a.click();
  },
};
```

## 📝 Captura de Datos en Formularios

Para capturar automáticamente los datos cuando un cliente llena un formulario:

```typescript
// Ejemplo de función para enviar datos
async function enviarFormulario(formData: FormData) {
  const datos = {
    // Datos del formulario
    nombre: formData.get('nombre'),
    email: formData.get('email'),
    telefono: formData.get('telefono'),
    mensaje: formData.get('mensaje'),
    
    // Metadata automática
    formulario: 'Nombre del Formulario',
    fuente: 'Nombre de la Landing',
    url: window.location.href,
    fecha: new Date().toISOString(),
    
    // Info técnica (capturar del navegador)
    ip: await getClientIP(),
    navegador: navigator.userAgent,
    dispositivo: getDeviceType(),
    so: getOS(),
    resolucion: `${window.screen.width}x${window.screen.height}`,
    idioma: navigator.language,
    referrer: document.referrer,
    
    // UTM (si existen en la URL)
    utmSource: new URLSearchParams(window.location.search).get('utm_source'),
    utmMedium: new URLSearchParams(window.location.search).get('utm_medium'),
    utmCampaign: new URLSearchParams(window.location.search).get('utm_campaign'),
  };
  
  const response = await fetch('/api/registros', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });
  
  return response.json();
}
```

## 🔒 Seguridad

### Protección de Datos Personales (RGPD)

1. **Consentimiento**: Asegúrate de tener consentimiento del usuario
2. **Cifrado**: Cifra datos sensibles en la base de datos
3. **Retención**: Define política de retención de datos
4. **Acceso**: Solo administradores autorizados
5. **Anonimización**: Opción para anonimizar datos antiguos

### Protección de Rutas

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin/registros')) {
    const token = request.cookies.get('auth-token');
    
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    
    // Verificar que sea admin
    const user = verifyToken(token);
    if (!user || user.role !== 'admin') {
      return NextResponse.redirect(new URL('/403', request.url));
    }
  }
  
  return NextResponse.next();
}
```

## 📊 Reportes y Analytics

### Métricas Útiles

- **Tasa de conversión por formulario**
- **Tiempo promedio de respuesta**
- **Fuentes más efectivas**
- **Horarios pico de registros**
- **Dispositivos más usados**
- **Navegadores más comunes**

### Dashboard Sugerido

```typescript
// Obtener estadísticas
const stats = {
  totalRegistros: await Registro.count(),
  porEstado: await Registro.groupBy('estado').count(),
  porFormulario: await Registro.groupBy('formulario').count(),
  porFuente: await Registro.groupBy('fuente').count(),
  tendencia: await Registro.groupBy('fecha').count(),
};
```

## 🚀 Próximas Mejoras

- [ ] Respuesta automática por email
- [ ] Asignación de registros a asesores
- [ ] Recordatorios de seguimiento
- [ ] Integración con CRM
- [ ] Chatbot para respuestas rápidas
- [ ] Scoring automático de leads
- [ ] Integración con calendario
- [ ] Notificaciones push
- [ ] App móvil para gestión

## 📞 Soporte

Para dudas sobre el panel de registros:
- Email: soporte@gestionesespana.es
- Teléfono: +34 600 000 000
