"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  MoreVertical,
  Loader2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const statusConfig: Record<
  string,
  { label: string; icon: typeof Clock; color: string; bgColor: string }
> = {
  pending: {
    label: "Pendiente",
    icon: Clock,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  in_review: {
    label: "En Revisión",
    icon: Eye,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  approved: {
    label: "Aprobada",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  rejected: {
    label: "Rechazada",
    icon: XCircle,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
};

const priorityConfig: Record<string, { label: string; color: string; bgColor: string }> = {
  high: {
    label: "Alta",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  medium: {
    label: "Media",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  low: {
    label: "Baja",
    color: "text-slate-600",
    bgColor: "bg-slate-50",
  },
};

type AppRow = {
  id: string;
  user: string;
  type: string;
  amount: string;
  status: string;
  priority: string;
  submittedAt: string;
  documents: number;
};

type Stats = {
  pending: number;
  in_review: number;
  approved: number;
  rejected: number;
};

function formatDateTime(iso: string) {
  try {
    return new Date(iso).toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function SolicitudesPage() {
  const [applications, setApplications] = useState<AppRow[]>([]);
  const [stats, setStats] = useState<Stats>({
    pending: 0,
    in_review: 0,
    approved: 0,
    rejected: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [estadoFilter, setEstadoFilter] = useState("todos");
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    const t = setTimeout(() => {
      setSearchTerm(searchInput);
      setOffset(0);
    }, 300);
    return () => clearTimeout(t);
  }, [searchInput]);

  const fetchSolicitudes = async () => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      params.set("limit", String(limit));
      params.set("offset", String(offset));
      if (searchTerm.trim()) params.set("search", searchTerm.trim());
      if (estadoFilter !== "todos") params.set("estado", estadoFilter);
      const res = await fetch(`/api/admin/solicitudes?${params}`);
      const text = await res.text();
      let data: {
        solicitudes?: AppRow[];
        total?: number;
        stats?: Stats;
        error?: string;
      };
      try {
        data = text.startsWith("{") ? JSON.parse(text) : {};
      } catch {
        throw new Error(
          res.ok
            ? "La respuesta no es JSON válido."
            : "Error del servidor. Comprueba que DATABASE_URL esté configurado y que las tablas existan (npx prisma db push)."
        );
      }
      if (!res.ok)
        throw new Error(data.error || "Error al cargar solicitudes");
      setApplications(data.solicitudes ?? []);
      setTotal(data.total ?? 0);
      if (data.stats) setStats(data.stats);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error al cargar solicitudes");
      setApplications([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSolicitudes();
  }, [offset, estadoFilter, searchTerm]);

  const from = total === 0 ? 0 : offset + 1;
  const to = Math.min(offset + limit, total);
  const hasPrev = offset > 0;
  const hasNext = offset + limit < total;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy">Solicitudes</h1>
          <p className="text-slate-600">
            Gestiona todas las solicitudes de ayudas
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-2 border-slate-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
              <Clock className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-navy">{stats.pending}</p>
              <p className="text-xs text-slate-600">Pendientes</p>
            </div>
          </div>
        </Card>
        <Card className="border-2 border-slate-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
              <Eye className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-navy">{stats.in_review}</p>
              <p className="text-xs text-slate-600">En Revisión</p>
            </div>
          </div>
        </Card>
        <Card className="border-2 border-slate-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-navy">{stats.approved}</p>
              <p className="text-xs text-slate-600">Aprobadas</p>
            </div>
          </div>
        </Card>
        <Card className="border-2 border-slate-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
              <XCircle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-navy">{stats.rejected}</p>
              <p className="text-xs text-slate-600">Rechazadas</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="border-2 border-slate-100 p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Buscar por nombre o email del usuario..."
              className="h-10 rounded-lg border-2 pl-10"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select
              value={estadoFilter}
              onChange={(e) => {
                setEstadoFilter(e.target.value);
                setOffset(0);
              }}
              className="h-10 rounded-lg border-2 border-slate-200 px-3 text-sm focus:border-primary focus:outline-none"
            >
              <option value="todos">Todos los estados</option>
              <option value="PENDIENTE">Pendiente</option>
              <option value="EN_REVISION">En Revisión</option>
              <option value="APROBADA">Aprobada</option>
              <option value="RECHAZADA">Rechazada</option>
            </select>
            <Button
              variant="outline"
              className="h-10 gap-2 rounded-lg border-2 font-medium"
              onClick={() => fetchSolicitudes()}
            >
              <Filter className="h-4 w-4" />
              Actualizar
            </Button>
            <Button
              variant="outline"
              className="h-10 gap-2 rounded-lg border-2 font-medium"
            >
              <Download className="h-4 w-4" />
              Exportar
            </Button>
          </div>
        </div>
      </Card>

      <Card className="border-2 border-slate-100 p-6">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : error ? (
            <div className="py-12 text-center">
              <p className="text-red-600">{error}</p>
              <Button
                onClick={fetchSolicitudes}
                className="mt-4"
                variant="outline"
              >
                Reintentar
              </Button>
            </div>
          ) : applications.length === 0 ? (
            <div className="py-12 text-center text-slate-600">
              No hay solicitudes para mostrar
            </div>
          ) : (
            <>
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-100">
                    <th className="pb-3 text-left text-sm font-semibold text-slate-700">
                      ID Solicitud
                    </th>
                    <th className="pb-3 text-left text-sm font-semibold text-slate-700">
                      Usuario
                    </th>
                    <th className="pb-3 text-left text-sm font-semibold text-slate-700">
                      Tipo de Ayuda
                    </th>
                    <th className="pb-3 text-left text-sm font-semibold text-slate-700">
                      Estado
                    </th>
                    <th className="pb-3 text-left text-sm font-semibold text-slate-700">
                      Prioridad
                    </th>
                    <th className="pb-3 text-right text-sm font-semibold text-slate-700">
                      Monto
                    </th>
                    <th className="pb-3 text-center text-sm font-semibold text-slate-700">
                      Docs
                    </th>
                    <th className="pb-3 text-right text-sm font-semibold text-slate-700">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {applications.map((app) => {
                    const status =
                      statusConfig[app.status] ?? statusConfig.pending;
                    const priority =
                      priorityConfig[app.priority] ?? priorityConfig.medium;
                    const StatusIcon = status.icon;
                    return (
                      <tr key={app.id} className="group hover:bg-slate-50">
                        <td className="py-4">
                          <p className="text-sm font-mono font-medium text-navy">
                            {app.id.slice(0, 12)}…
                          </p>
                          <p className="text-xs text-slate-500">
                            {formatDateTime(app.submittedAt)}
                          </p>
                        </td>
                        <td className="py-4">
                          <p className="text-sm font-medium text-navy">
                            {app.user}
                          </p>
                        </td>
                        <td className="py-4">
                          <p className="text-sm text-slate-600">{app.type}</p>
                        </td>
                        <td className="py-4">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${status.bgColor} ${status.color}`}
                          >
                            <StatusIcon className="h-3.5 w-3.5" />
                            {status.label}
                          </span>
                        </td>
                        <td className="py-4">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${priority.bgColor} ${priority.color}`}
                          >
                            {priority.label}
                          </span>
                        </td>
                        <td className="py-4 text-right text-sm font-semibold text-navy">
                          {app.amount}
                        </td>
                        <td className="py-4 text-center">
                          <span className="inline-flex items-center gap-1 text-sm text-slate-600">
                            <FileText className="h-4 w-4" />
                            {app.documents}
                          </span>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button className="text-sm font-medium text-primary hover:underline">
                              Ver detalles
                            </button>
                            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600">
                              <MoreVertical className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="mt-6 flex items-center justify-between border-t-2 border-slate-100 pt-4">
                <p className="text-sm text-slate-600">
                  Mostrando{" "}
                  <span className="font-medium">
                    {from}-{to}
                  </span>{" "}
                  de{" "}
                  <span className="font-medium">{total}</span> solicitudes
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg border-2 font-medium"
                    disabled={!hasPrev}
                    onClick={() =>
                      setOffset((o) => Math.max(0, o - limit))
                    }
                  >
                    Anterior
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg border-2 font-medium"
                    disabled={!hasNext}
                    onClick={() => setOffset((o) => o + limit)}
                  >
                    Siguiente
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}
