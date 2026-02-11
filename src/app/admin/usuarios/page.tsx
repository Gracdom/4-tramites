"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Download,
  UserPlus,
  MoreVertical,
  Mail,
  Phone,
  Loader2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const statusConfig: Record<string, { label: string; color: string; bgColor: string }> = {
  activo: {
    label: "Activo",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  pendiente: {
    label: "Pendiente",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  inactivo: {
    label: "Inactivo",
    color: "text-slate-600",
    bgColor: "bg-slate-50",
  },
};

type UserRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  registeredAt: string;
  applications: number;
  status: string;
  avatar: string;
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function UsuariosPage() {
  const [users, setUsers] = useState<UserRow[]>([]);
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

  const fetchUsuarios = async () => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      params.set("limit", String(limit));
      params.set("offset", String(offset));
      if (searchTerm.trim()) params.set("search", searchTerm.trim());
      if (estadoFilter !== "todos") params.set("estado", estadoFilter);
      const res = await fetch(`/api/admin/usuarios?${params}`);
      const text = await res.text();
      let data: { usuarios?: UserRow[]; total?: number; error?: string };
      try {
        data = text.startsWith("{") ? JSON.parse(text) : {};
      } catch {
        throw new Error(
          res.ok
            ? "La respuesta no es JSON válido."
            : "Error del servidor. Comprueba que DATABASE_URL esté configurado y que las tablas existan (npx prisma db push)."
        );
      }
      if (!res.ok) throw new Error(data.error || "Error al cargar usuarios");
      setUsers(data.usuarios ?? []);
      setTotal(data.total ?? 0);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error al cargar usuarios");
      setUsers([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, [offset, estadoFilter, searchTerm]);

  const from = total === 0 ? 0 : offset + 1;
  const to = Math.min(offset + limit, total);
  const hasPrev = offset > 0;
  const hasNext = offset + limit < total;

  return (
    <div className="space-y-6">
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

      <Card className="border-2 border-slate-100 p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Buscar por nombre, email o teléfono..."
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
              <option value="ACTIVO">Activo</option>
              <option value="PENDIENTE">Pendiente</option>
              <option value="INACTIVO">Inactivo</option>
            </select>
            <Button
              variant="outline"
              className="h-10 gap-2 rounded-lg border-2 font-medium"
              onClick={() => fetchUsuarios()}
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
              <Button onClick={fetchUsuarios} className="mt-4" variant="outline">
                Reintentar
              </Button>
            </div>
          ) : users.length === 0 ? (
            <div className="py-12 text-center text-slate-600">
              No hay usuarios para mostrar
            </div>
          ) : (
            <>
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
                    const status =
                      statusConfig[user.status] ?? statusConfig.inactivo;
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
                              <p className="text-xs text-slate-500">
                                ID: {user.id.slice(0, 8)}…
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-xs text-slate-600">
                              <Mail className="h-3.5 w-3.5" />
                              {user.email}
                            </div>
                            {user.phone && (
                              <div className="flex items-center gap-2 text-xs text-slate-600">
                                <Phone className="h-3.5 w-3.5" />
                                {user.phone}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="py-4 text-sm text-slate-600">
                          {formatDate(user.registeredAt)}
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

              <div className="mt-6 flex items-center justify-between border-t-2 border-slate-100 pt-4">
                <p className="text-sm text-slate-600">
                  Mostrando{" "}
                  <span className="font-medium">
                    {from}-{to}
                  </span>{" "}
                  de <span className="font-medium">{total}</span> usuarios
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg border-2 font-medium"
                    disabled={!hasPrev}
                    onClick={() => setOffset((o) => Math.max(0, o - limit))}
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
