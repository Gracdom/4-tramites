import {
  TrendingUp,
  TrendingDown,
  Users,
  Euro,
  FileText,
  Calendar,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const monthlyStats = [
  { month: "Ene", users: 245, applications: 89, approved: 67, amount: 185000 },
  { month: "Feb", users: 198, applications: 76, approved: 58, amount: 162000 },
  { month: "Mar", users: 312, applications: 124, approved: 95, amount: 267000 },
  { month: "Abr", users: 289, applications: 108, approved: 82, amount: 229000 },
  { month: "May", users: 334, applications: 142, approved: 108, amount: 301000 },
  { month: "Jun", users: 367, applications: 156, approved: 119, amount: 334000 },
];

const serviceStats = [
  {
    name: "Cheque Bebé",
    applications: 432,
    approved: 324,
    rejected: 89,
    pending: 19,
    amount: "1.2M€",
    trend: 12,
  },
  {
    name: "Ayuda al Alquiler",
    applications: 289,
    approved: 201,
    rejected: 67,
    pending: 21,
    amount: "487K€",
    trend: 8,
  },
  {
    name: "Ingreso Mínimo Vital",
    applications: 156,
    approved: 98,
    rejected: 42,
    pending: 16,
    amount: "823K€",
    trend: -5,
  },
  {
    name: "Bono Cultural",
    applications: 543,
    approved: 412,
    rejected: 108,
    pending: 23,
    amount: "165K€",
    trend: 23,
  },
];

export default function EstadisticasPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy">Estadísticas</h1>
          <p className="text-slate-600">
            Análisis detallado del rendimiento del sistema
          </p>
        </div>
        <div className="flex gap-2">
          <select className="h-10 rounded-lg border-2 border-slate-200 bg-white px-4 text-sm font-medium text-navy">
            <option>Últimos 30 días</option>
            <option>Últimos 3 meses</option>
            <option>Últimos 6 meses</option>
            <option>Este año</option>
          </select>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-2 border-slate-100 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600">
              <TrendingUp className="h-4 w-4" />
              +12%
            </div>
          </div>
          <p className="text-3xl font-bold text-navy">2,543</p>
          <p className="text-sm text-slate-600">Total Usuarios</p>
        </Card>

        <Card className="border-2 border-slate-100 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600">
              <TrendingUp className="h-4 w-4" />
              +8%
            </div>
          </div>
          <p className="text-3xl font-bold text-navy">1,420</p>
          <p className="text-sm text-slate-600">Solicitudes</p>
        </Card>

        <Card className="border-2 border-slate-100 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600">
              <TrendingUp className="h-4 w-4" />
              +15%
            </div>
          </div>
          <p className="text-3xl font-bold text-navy">76%</p>
          <p className="text-sm text-slate-600">Tasa Aprobación</p>
        </Card>

        <Card className="border-2 border-slate-100 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
              <Euro className="h-6 w-6 text-amber-600" />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600">
              <TrendingUp className="h-4 w-4" />
              +18%
            </div>
          </div>
          <p className="text-3xl font-bold text-navy">2.7M€</p>
          <p className="text-sm text-slate-600">Ayudas Gestionadas</p>
        </Card>
      </div>

      {/* Monthly Trend */}
      <Card className="border-2 border-slate-100 p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-navy">Tendencia Mensual</h2>
            <p className="text-sm text-slate-600">
              Evolución de usuarios y solicitudes
            </p>
          </div>
          <Calendar className="h-6 w-6 text-slate-400" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-100">
                <th className="pb-3 text-left text-sm font-semibold text-slate-700">
                  Mes
                </th>
                <th className="pb-3 text-right text-sm font-semibold text-slate-700">
                  Nuevos Usuarios
                </th>
                <th className="pb-3 text-right text-sm font-semibold text-slate-700">
                  Solicitudes
                </th>
                <th className="pb-3 text-right text-sm font-semibold text-slate-700">
                  Aprobadas
                </th>
                <th className="pb-3 text-right text-sm font-semibold text-slate-700">
                  Monto Total
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {monthlyStats.map((stat) => (
                <tr key={stat.month} className="hover:bg-slate-50">
                  <td className="py-4 text-sm font-medium text-navy">
                    {stat.month} 2026
                  </td>
                  <td className="py-4 text-right text-sm text-slate-600">
                    {stat.users}
                  </td>
                  <td className="py-4 text-right text-sm text-slate-600">
                    {stat.applications}
                  </td>
                  <td className="py-4 text-right text-sm font-medium text-green-600">
                    {stat.approved}
                  </td>
                  <td className="py-4 text-right text-sm font-semibold text-navy">
                    {(stat.amount / 1000).toFixed(0)}K€
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Service Performance */}
      <Card className="border-2 border-slate-100 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-navy">
            Rendimiento por Servicio
          </h2>
          <p className="text-sm text-slate-600">
            Estadísticas detalladas de cada tipo de ayuda
          </p>
        </div>

        <div className="space-y-6">
          {serviceStats.map((service) => (
            <div key={service.name} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-navy">{service.name}</h3>
                  <p className="text-sm text-slate-600">
                    {service.applications} solicitudes totales
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-navy">{service.amount}</p>
                  <div
                    className={`flex items-center justify-end gap-1 text-sm font-medium ${
                      service.trend >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {service.trend >= 0 ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    {Math.abs(service.trend)}%
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-slate-600">Aprobadas</span>
                    <span className="font-medium text-green-600">
                      {service.approved}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-green-500"
                      style={{
                        width: `${
                          (service.approved / service.applications) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-slate-600">Rechazadas</span>
                    <span className="font-medium text-red-600">
                      {service.rejected}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-red-500"
                      style={{
                        width: `${
                          (service.rejected / service.applications) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-slate-600">Pendientes</span>
                    <span className="font-medium text-amber-600">
                      {service.pending}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-amber-500"
                      style={{
                        width: `${
                          (service.pending / service.applications) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
