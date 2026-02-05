import {
  Search,
  Filter,
  Download,
  UserPlus,
  MoreVertical,
  Mail,
  Phone,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const users = [
  {
    id: 1,
    name: "María García López",
    email: "maria.garcia@email.com",
    phone: "+34 612 345 678",
    registeredAt: "2026-01-15",
    applications: 3,
    status: "active",
    avatar: "MG",
  },
  {
    id: 2,
    name: "Juan López Martínez",
    email: "juan.lopez@email.com",
    phone: "+34 623 456 789",
    registeredAt: "2026-01-20",
    applications: 1,
    status: "active",
    avatar: "JL",
  },
  {
    id: 3,
    name: "Ana Martínez Ruiz",
    email: "ana.martinez@email.com",
    phone: "+34 634 567 890",
    registeredAt: "2026-01-22",
    applications: 2,
    status: "pending",
    avatar: "AM",
  },
  {
    id: 4,
    name: "Carlos Sánchez Pérez",
    email: "carlos.sanchez@email.com",
    phone: "+34 645 678 901",
    registeredAt: "2026-01-10",
    applications: 5,
    status: "active",
    avatar: "CS",
  },
  {
    id: 5,
    name: "Laura Rodríguez Gómez",
    email: "laura.rodriguez@email.com",
    phone: "+34 656 789 012",
    registeredAt: "2026-01-18",
    applications: 2,
    status: "inactive",
    avatar: "LR",
  },
  {
    id: 6,
    name: "Pedro Fernández Silva",
    email: "pedro.fernandez@email.com",
    phone: "+34 667 890 123",
    registeredAt: "2026-01-25",
    applications: 1,
    status: "active",
    avatar: "PF",
  },
  {
    id: 7,
    name: "Isabel Torres Díaz",
    email: "isabel.torres@email.com",
    phone: "+34 678 901 234",
    registeredAt: "2026-01-12",
    applications: 4,
    status: "active",
    avatar: "IT",
  },
  {
    id: 8,
    name: "Miguel Ángel Ramos",
    email: "miguel.ramos@email.com",
    phone: "+34 689 012 345",
    registeredAt: "2026-01-28",
    applications: 0,
    status: "pending",
    avatar: "MR",
  },
];

const statusConfig = {
  active: {
    label: "Activo",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  pending: {
    label: "Pendiente",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  inactive: {
    label: "Inactivo",
    color: "text-slate-600",
    bgColor: "bg-slate-50",
  },
};

export default function UsuariosPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy">Usuarios</h1>
          <p className="text-slate-600">Gestiona todos los usuarios del sistema</p>
        </div>
        <Button className="h-10 gap-2 rounded-lg bg-primary font-medium hover:bg-[#0F7494]">
          <UserPlus className="h-4 w-4" />
          Nuevo Usuario
        </Button>
      </div>

      {/* Filters */}
      <Card className="border-2 border-slate-100 p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Buscar por nombre, email o teléfono..."
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

      {/* Users Table */}
      <Card className="border-2 border-slate-100 p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-100">
                <th className="pb-3 text-left text-sm font-semibold text-slate-700">
                  Usuario
                </th>
                <th className="pb-3 text-left text-sm font-semibold text-slate-700">
                  Contacto
                </th>
                <th className="pb-3 text-left text-sm font-semibold text-slate-700">
                  Fecha Registro
                </th>
                <th className="pb-3 text-left text-sm font-semibold text-slate-700">
                  Solicitudes
                </th>
                <th className="pb-3 text-left text-sm font-semibold text-slate-700">
                  Estado
                </th>
                <th className="pb-3 text-right text-sm font-semibold text-slate-700">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user) => {
                const status = statusConfig[user.status as keyof typeof statusConfig];
                return (
                  <tr key={user.id} className="group hover:bg-slate-50">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                          {user.avatar}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-navy">
                            {user.name}
                          </p>
                          <p className="text-xs text-slate-500">ID: {user.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <Mail className="h-3.5 w-3.5" />
                          {user.email}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <Phone className="h-3.5 w-3.5" />
                          {user.phone}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-slate-600">
                      {user.registeredAt}
                    </td>
                    <td className="py-4">
                      <span className="inline-flex items-center justify-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                        {user.applications}
                      </span>
                    </td>
                    <td className="py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${status.bgColor} ${status.color}`}
                      >
                        {status.label}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="text-sm font-medium text-primary hover:underline">
                          Ver perfil
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
            <span className="font-medium">2,543</span> usuarios
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
