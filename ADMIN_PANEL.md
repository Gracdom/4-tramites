# Panel de Administración - Gestiones España

## 📋 Descripción

Panel de administración completo para gestionar usuarios, solicitudes, estadísticas y configuración del sistema.

## 🚀 Acceso

El panel de administración está disponible en la ruta `/admin`

```
http://localhost:3000/admin
```

## 📁 Estructura de Archivos

```
src/
├── app/
│   └── admin/
│       ├── layout.tsx                    # Layout principal del admin
│       ├── page.tsx                      # Dashboard principal
│       ├── usuarios/
│       │   └── page.tsx                  # Gestión de usuarios
│       ├── solicitudes/
│       │   └── page.tsx                  # Gestión de solicitudes
│       ├── estadisticas/
│       │   └── page.tsx                  # Estadísticas y reportes
│       ├── notificaciones/
│       │   └── page.tsx                  # Centro de notificaciones
│       ├── configuracion/
│       │   └── page.tsx                  # Configuración del sistema
│       └── ayuda/
│           └── page.tsx                  # Centro de ayuda
└── components/
    └── admin/
        └── admin-sidebar.tsx             # Sidebar de navegación
```

## 🎨 Características

### Dashboard Principal (`/admin`)
- **Estadísticas generales**: Usuarios, solicitudes activas, ayudas aprobadas, monto total
- **Solicitudes recientes**: Tabla con las últimas solicitudes
- **Acciones rápidas**: Enlaces directos a las secciones más importantes

### Gestión de Usuarios (`/admin/usuarios`)
- Lista completa de usuarios registrados
- Búsqueda y filtros
- Información de contacto (email, teléfono)
- Estados: Activo, Pendiente, Inactivo
- Número de solicitudes por usuario
- Exportación de datos

### Gestión de Solicitudes (`/admin/solicitudes`)
- Lista de todas las solicitudes
- Estados: Pendiente, En Revisión, Aprobada, Rechazada
- Filtrado por prioridad: Alta, Media, Baja
- Búsqueda por ID, usuario o tipo de ayuda
- Contador de documentos adjuntos
- Vista detallada de cada solicitud

### Estadísticas (`/admin/estadisticas`)
- Métricas generales del sistema
- Tendencia mensual de usuarios y solicitudes
- Rendimiento por tipo de servicio
- Tasas de aprobación
- Gráficas de progreso

### Notificaciones (`/admin/notificaciones`)
- Centro de notificaciones en tiempo real
- Tipos de notificaciones:
  - Nuevas solicitudes
  - Solicitudes aprobadas
  - Nuevos usuarios
  - Solicitudes pendientes
- Marcar como leído/no leído
- Limpiar notificaciones

### Configuración (`/admin/configuracion`)
- **Configuración General**: Nombre del sitio, descripción, contacto
- **Email SMTP**: Configuración del servidor de correo
- **Notificaciones**: Preferencias de notificaciones
- **Seguridad**: Autenticación 2FA, cambio de contraseña

### Centro de Ayuda (`/admin/ayuda`)
- Búsqueda de ayuda
- Preguntas frecuentes por categorías
- Recursos de documentación
- Contacto con soporte (chat, email, teléfono)
- Información del sistema

## 🎯 Navegación

El sidebar incluye las siguientes secciones:

1. **Dashboard** - Página principal
2. **Usuarios** - Gestión de usuarios
3. **Solicitudes** - Gestión de solicitudes
4. **Estadísticas** - Reportes y análisis
5. **Notificaciones** - Centro de notificaciones
6. **Configuración** - Ajustes del sistema
7. **Ayuda** - Soporte y documentación

## 📱 Responsive

El panel está completamente optimizado para:
- 📱 Móviles (< 768px): Sidebar colapsable con overlay
- 💻 Tablets (768px - 1024px): Layout adaptativo
- 🖥️ Desktop (> 1024px): Sidebar fijo lateral

## 🎨 Diseño

### Colores
- **Primary**: Turquesa (#13ABC4)
- **Navy**: Azul oscuro (#1A3A52)
- **Success**: Verde (#10B981)
- **Warning**: Ámbar (#F59E0B)
- **Error**: Rojo (#EF4444)

### Componentes
- Cards con sombras sutiles
- Tablas responsivas
- Badges de estado
- Botones con hover effects
- Iconos de Lucide React

## 🔐 Seguridad (A Implementar)

Para producción, debes agregar:

1. **Autenticación**: Proteger todas las rutas `/admin/*`
2. **Autorización**: Roles y permisos de usuario
3. **Validación**: Validar datos en servidor
4. **Sesiones**: Gestión de sesiones seguras
5. **CSRF Protection**: Protección contra ataques CSRF

### Ejemplo de Middleware de Protección

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Verificar si la ruta es /admin/*
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Aquí debes verificar si el usuario está autenticado
    const token = request.cookies.get('auth-token');
    
    if (!token) {
      // Redirigir a login
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
```

## 🚀 Próximas Funcionalidades

- [ ] Sistema de autenticación completo
- [ ] Exportación de reportes en PDF/Excel
- [ ] Gráficas interactivas con Chart.js
- [ ] Sistema de mensajería interno
- [ ] Logs de auditoría
- [ ] Backup automático de datos
- [ ] Integración con API de backend
- [ ] Dashboard personalizable
- [ ] Modo oscuro

## 📝 Notas de Desarrollo

### Datos de Prueba
Actualmente el panel usa datos estáticos (mock data) para demostración. Para conectar con un backend real:

1. Crear servicios API en `src/services/admin/`
2. Implementar hooks personalizados para fetching de datos
3. Agregar loading states y error handling
4. Implementar paginación real
5. Conectar formularios con endpoints

### Ejemplo de Servicio API

```typescript
// src/services/admin/users.service.ts
export const usersService = {
  async getAll(page = 1, limit = 10) {
    const response = await fetch(`/api/admin/users?page=${page}&limit=${limit}`);
    return response.json();
  },
  
  async getById(id: string) {
    const response = await fetch(`/api/admin/users/${id}`);
    return response.json();
  },
  
  async update(id: string, data: any) {
    const response = await fetch(`/api/admin/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};
```

## 🛠️ Personalización

### Cambiar Colores
Edita `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "#13ABC4", // Cambia aquí
      navy: "#1A3A52",    // Cambia aquí
    }
  }
}
```

### Agregar Nuevas Secciones
1. Crear carpeta en `src/app/admin/nueva-seccion/`
2. Crear `page.tsx` con el contenido
3. Agregar entrada en el sidebar (`admin-sidebar.tsx`)

## 📞 Soporte

Para dudas o problemas con el panel de administración:
- Email: soporte@gestionesespana.es
- Teléfono: +34 600 000 000
