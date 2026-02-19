"use client";

import {
  Bell,
  Check,
  Clock,
  FileText,
  UserPlus,
  CheckCircle,
  AlertCircle,
  Trash2,
  Loader2,
} from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type TipoNotif = "application" | "approval" | "user" | "pending";

type Notificacion = {
  id: string;
  tipo: TipoNotif;
  titulo: string;
  descripcion: string;
  time: string;
  read: boolean;
  solicitudId?: string | null;
  usuarioId?: string | null;
};

const ICON_MAP: Record<TipoNotif, { Icon: typeof FileText; color: string }> = {
  application: { Icon: FileText, color: "bg-primary/10 text-primary" },
  approval: { Icon: CheckCircle, color: "bg-green-50 text-green-600" },
  user: { Icon: UserPlus, color: "bg-blue-50 text-blue-600" },
  pending: { Icon: AlertCircle, color: "bg-amber-50 text-amber-600" },
};

export default function NotificacionesPage() {
  const [notifications, setNotifications] = useState<Notificacion[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const limit = 50;
  const [actioning, setActioning] = useState<string | null>(null);

  const fetchNotifications = useCallback(async (append = false, fromOffset = 0) => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/admin/notificaciones?limit=${limit}&offset=${fromOffset}`
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al cargar");
      setNotifications(append ? (prev) => [...prev, ...data.notificaciones] : data.notificaciones);
      setTotal(data.total);
      setOffset(fromOffset);
    } catch (e) {
      console.error(e);
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNotifications(false, 0);
  }, [fetchNotifications]);

  const marcarTodasLeidas = async () => {
    setActioning("read-all");
    try {
      const res = await fetch("/api/admin/notificaciones", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todas: true }),
      });
      if (!res.ok) throw new Error("Error");
      await fetchNotifications(false, 0);
    } catch (e) {
      console.error(e);
    } finally {
      setActioning(null);
    }
  };

  const marcarLeida = async (id: string) => {
    setActioning(id);
    try {
      const res = await fetch("/api/admin/notificaciones", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error("Error");
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, read: true } : n))
      );
    } catch (e) {
      console.error(e);
    } finally {
      setActioning(null);
    }
  };

  const eliminarTodas = async () => {
    if (!confirm("¿Eliminar todas las notificaciones?")) return;
    setActioning("delete-all");
    try {
      const res = await fetch("/api/admin/notificaciones?todas=true", {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error");
      setNotifications([]);
      setTotal(0);
    } catch (e) {
      console.error(e);
    } finally {
      setActioning(null);
    }
  };

  const eliminarUna = async (id: string) => {
    setActioning(`del-${id}`);
    try {
      const res = await fetch(`/api/admin/notificaciones?id=${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error");
      setNotifications((prev) => prev.filter((n) => n.id !== id));
      setTotal((t) => Math.max(0, t - 1));
    } catch (e) {
      console.error(e);
    } finally {
      setActioning(null);
    }
  };

  const cargarMas = async () => {
    const next = offset + limit;
    const res = await fetch(
      `/api/admin/notificaciones?limit=${limit}&offset=${next}`
    );
    const data = await res.json();
    if (!res.ok) return;
    setNotifications((prev) => [...prev, ...data.notificaciones]);
    setOffset(next);
  };

  const unreadCount = notifications.filter((n) => !n.read).length;
  const approvalCount = notifications.filter((n) => n.tipo === "approval").length;
  const appCount = notifications.filter((n) => n.tipo === "application").length;
  const userCount = notifications.filter((n) => n.tipo === "user").length;
  const hayMas = total > notifications.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy">Notificaciones</h1>
          <p className="text-slate-600">
            {unreadCount > 0
              ? `Tienes ${unreadCount} notificación${unreadCount !== 1 ? "es" : ""} sin leer`
              : "No tienes notificaciones sin leer"}
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="h-10 gap-2 rounded-lg border-2 font-medium"
            onClick={marcarTodasLeidas}
            disabled={unreadCount === 0 || !!actioning}
          >
            {actioning === "read-all" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Check className="h-4 w-4" />
            )}
            Marcar todas como leídas
          </Button>
          <Button
            variant="outline"
            className="h-10 gap-2 rounded-lg border-2 font-medium text-red-600 hover:bg-red-50 hover:text-red-600"
            onClick={eliminarTodas}
            disabled={notifications.length === 0 || !!actioning}
          >
            {actioning === "delete-all" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Trash2 className="h-4 w-4" />
            )}
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
              <p className="text-2xl font-bold text-navy">{approvalCount}</p>
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
              <p className="text-2xl font-bold text-navy">{appCount}</p>
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
              <p className="text-2xl font-bold text-navy">{userCount}</p>
              <p className="text-xs text-slate-600">Usuarios</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Notifications List */}
      <Card className="border-2 border-slate-100">
        {loading && notifications.length === 0 ? (
          <div className="flex items-center justify-center gap-2 p-12 text-slate-600">
            <Loader2 className="h-6 w-6 animate-spin" />
            Cargando notificaciones...
          </div>
        ) : notifications.length === 0 ? (
          <div className="p-12 text-center text-slate-600">
            No hay notificaciones. Se generarán cuando lleguen nuevas solicitudes o se registren usuarios.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {notifications.map((notification) => {
              const { Icon, color } =
                ICON_MAP[notification.tipo] ?? ICON_MAP.application;
              return (
                <div
                  key={notification.id}
                  className={`flex gap-4 p-4 transition-colors hover:bg-slate-50 ${
                    !notification.read ? "bg-blue-50/30" : ""
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color}`}
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
                        {notification.titulo}
                      </h3>
                      {!notification.read && (
                        <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                      )}
                    </div>
                    <p className="text-sm text-slate-600">
                      {notification.descripcion}
                    </p>
                    <div className="flex items-center gap-4 pt-1">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock className="h-3.5 w-3.5" />
                        {notification.time}
                      </div>
                      {!notification.read && (
                        <button
                          className="text-xs font-medium text-primary hover:underline disabled:opacity-50"
                          onClick={() => marcarLeida(notification.id)}
                          disabled={!!actioning}
                        >
                          {actioning === notification.id ? (
                            <Loader2 className="h-3 w-3 animate-spin" />
                          ) : (
                            "Marcar como leída"
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  <button
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 disabled:opacity-50"
                    onClick={() => eliminarUna(notification.id)}
                    disabled={!!actioning}
                    title="Eliminar"
                  >
                    {actioning === `del-${notification.id}` ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {hayMas && !loading && (
          <div className="border-t-2 border-slate-100 p-4 text-center">
            <Button
              variant="outline"
              className="h-10 rounded-lg border-2 font-medium"
              onClick={cargarMas}
            >
              Cargar más notificaciones
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
