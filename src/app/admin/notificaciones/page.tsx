import {
  Bell,
  Check,
  Clock,
  FileText,
  UserPlus,
  CheckCircle,
  AlertCircle,
  Trash2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const notifications = [
  {
    id: 1,
    type: "application",
    title: "Nueva solicitud recibida",
    description: "María García ha enviado una solicitud para Cheque Bebé",
    time: "Hace 5 minutos",
    read: false,
    icon: FileText,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    type: "approval",
    title: "Solicitud aprobada",
    description: "La solicitud SOL-2026-045 ha sido aprobada exitosamente",
    time: "Hace 15 minutos",
    read: false,
    icon: CheckCircle,
    color: "bg-green-50 text-green-600",
  },
  {
    id: 3,
    type: "user",
    title: "Nuevo usuario registrado",
    description: "Juan López se ha registrado en la plataforma",
    time: "Hace 1 hora",
    read: true,
    icon: UserPlus,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 4,
    type: "pending",
    title: "Solicitud requiere atención",
    description: "SOL-2026-043 lleva más de 48 horas sin revisar",
    time: "Hace 2 horas",
    read: false,
    icon: AlertCircle,
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: 5,
    type: "application",
    title: "Nueva solicitud recibida",
    description: "Ana Martínez ha enviado una solicitud para Ingreso Mínimo Vital",
    time: "Hace 3 horas",
    read: true,
    icon: FileText,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 6,
    type: "approval",
    title: "Solicitud aprobada",
    description: "La solicitud SOL-2026-042 ha sido aprobada exitosamente",
    time: "Hace 4 horas",
    read: true,
    icon: CheckCircle,
    color: "bg-green-50 text-green-600",
  },
  {
    id: 7,
    type: "user",
    title: "Nuevo usuario registrado",
    description: "Carlos Sánchez se ha registrado en la plataforma",
    time: "Hace 5 horas",
    read: true,
    icon: UserPlus,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 8,
    type: "pending",
    title: "Solicitud requiere atención",
    description: "SOL-2026-038 necesita documentación adicional",
    time: "Hace 6 horas",
    read: true,
    icon: AlertCircle,
    color: "bg-amber-50 text-amber-600",
  },
];

export default function NotificacionesPage() {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy">Notificaciones</h1>
          <p className="text-slate-600">
            Tienes {unreadCount} notificación{unreadCount !== 1 ? "es" : ""} sin
            leer
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="h-10 gap-2 rounded-lg border-2 font-medium"
          >
            <Check className="h-4 w-4" />
            Marcar todas como leídas
          </Button>
          <Button
            variant="outline"
            className="h-10 gap-2 rounded-lg border-2 font-medium text-red-600 hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
            Limpiar
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-2 border-slate-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Bell className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-navy">{unreadCount}</p>
              <p className="text-xs text-slate-600">Sin leer</p>
            </div>
          </div>
        </Card>

        <Card className="border-2 border-slate-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-navy">
                {notifications.filter((n) => n.type === "approval").length}
              </p>
              <p className="text-xs text-slate-600">Aprobaciones</p>
            </div>
          </div>
        </Card>

        <Card className="border-2 border-slate-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-navy">
                {notifications.filter((n) => n.type === "application").length}
              </p>
              <p className="text-xs text-slate-600">Solicitudes</p>
            </div>
          </div>
        </Card>

        <Card className="border-2 border-slate-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
              <AlertCircle className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-navy">
                {notifications.filter((n) => n.type === "pending").length}
              </p>
              <p className="text-xs text-slate-600">Pendientes</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Notifications List */}
      <Card className="border-2 border-slate-100">
        <div className="divide-y divide-slate-100">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className={`flex gap-4 p-4 transition-colors hover:bg-slate-50 ${
                  !notification.read ? "bg-blue-50/30" : ""
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${notification.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className={`text-sm font-semibold ${
                        !notification.read ? "text-navy" : "text-slate-700"
                      }`}
                    >
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                    )}
                  </div>
                  <p className="text-sm text-slate-600">
                    {notification.description}
                  </p>
                  <div className="flex items-center gap-4 pt-1">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      {notification.time}
                    </div>
                    <button className="text-xs font-medium text-primary hover:underline">
                      Ver detalles
                    </button>
                    {!notification.read && (
                      <button className="text-xs font-medium text-slate-600 hover:underline">
                        Marcar como leída
                      </button>
                    )}
                  </div>
                </div>

                <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Load More */}
        <div className="border-t-2 border-slate-100 p-4 text-center">
          <Button
            variant="outline"
            className="h-10 rounded-lg border-2 font-medium"
          >
            Cargar más notificaciones
          </Button>
        </div>
      </Card>
    </div>
  );
}
