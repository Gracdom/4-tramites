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
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const applications = [
  {
    id: "SOL-2026-001",
    user: "María García López",
    type: "Cheque Bebé",
    amount: "3,600€",
    status: "pending",
    priority: "high",
    submittedAt: "2026-01-28 10:30",
    documents: 5,
  },
  {
    id: "SOL-2026-002",
    user: "Juan López Martínez",
    type: "Ayuda al Alquiler",
    amount: "2,400€",
    status: "approved",
    priority: "medium",
    submittedAt: "2026-01-27 15:45",
    documents: 8,
  },
  {
    id: "SOL-2026-003",
    user: "Ana Martínez Ruiz",
    type: "Ingreso Mínimo Vital",
    amount: "8,400€",
    status: "pending",
    priority: "high",
    submittedAt: "2026-01-27 09:15",
    documents: 12,
  },
  {
    id: "SOL-2026-004",
    user: "Carlos Sánchez Pérez",
    type: "Bono Cultural",
    amount: "400€",
    status: "rejected",
    priority: "low",
    submittedAt: "2026-01-26 14:20",
    documents: 3,
  },
  {
    id: "SOL-2026-005",
    user: "Laura Rodríguez Gómez",
    type: "Cheque Bebé",
    amount: "3,600€",
    status: "approved",
    priority: "medium",
    submittedAt: "2026-01-26 11:00",
    documents: 6,
  },
  {
    id: "SOL-2026-006",
    user: "Pedro Fernández Silva",
    type: "Ayuda al Alquiler",
    amount: "1,800€",
    status: "in_review",
    priority: "high",
    submittedAt: "2026-01-25 16:30",
    documents: 7,
  },
  {
    id: "SOL-2026-007",
    user: "Isabel Torres Díaz",
    type: "Ingreso Mínimo Vital",
    amount: "7,200€",
    status: "pending",
    priority: "high",
    submittedAt: "2026-01-25 08:45",
    documents: 10,
  },
  {
    id: "SOL-2026-008",
    user: "Miguel Ángel Ramos",
    type: "Bono Cultural",
    amount: "400€",
    status: "in_review",
    priority: "low",
    submittedAt: "2026-01-24 13:15",
    documents: 4,
  },
];

const statusConfig = {
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

const priorityConfig = {
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

export default function SolicitudesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy">Solicitudes</h1>
          <p className="text-slate-600">
            Gestiona todas las solicitudes de ayudas
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-2 border-slate-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
              <Clock className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-navy">24</p>
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
              <p className="text-2xl font-bold text-navy">12</p>
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
              <p className="text-2xl font-bold text-navy">142</p>
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
              <p className="text-2xl font-bold text-navy">8</p>
              <p className="text-xs text-slate-600">Rechazadas</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="border-2 border-slate-100 p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Buscar por ID, usuario o tipo de ayuda..."
              className="h-10 rounded-lg border-2 pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="h-10 gap-2 rounded-lg border-2 font-medium"
            >
              <Filter className="h-4 w-4" />
              Filtros
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

      {/* Applications Table */}
      <Card className="border-2 border-slate-100 p-6">
        <div className="overflow-x-auto">
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
                  statusConfig[app.status as keyof typeof statusConfig];
                const priority =
                  priorityConfig[app.priority as keyof typeof priorityConfig];
                const StatusIcon = status.icon;
                return (
                  <tr key={app.id} className="group hover:bg-slate-50">
                    <td className="py-4">
                      <p className="text-sm font-mono font-medium text-navy">
                        {app.id}
                      </p>
                      <p className="text-xs text-slate-500">{app.submittedAt}</p>
                    </td>
                    <td className="py-4">
                      <p className="text-sm font-medium text-navy">{app.user}</p>
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
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between border-t-2 border-slate-100 pt-4">
          <p className="text-sm text-slate-600">
            Mostrando <span className="font-medium">1-8</span> de{" "}
            <span className="font-medium">186</span> solicitudes
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-lg border-2 font-medium"
            >
              Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-lg border-2 font-medium"
            >
              Siguiente
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
