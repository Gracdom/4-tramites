"use client"

import { useState, useEffect } from "react"
import {
  Search,
  Filter,
  Download,
  Eye,
  Mail,
  Phone,
  Calendar,
  Star,
  StarOff,
  Loader2,
  Home,
  MessageSquare,
  Baby,
  Key,
  Wallet,
  Ticket,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type TabType = "home" | "contacto" | "cheque_bebe" | "ayuda_alquiler" | "imv" | "bono_cultural"

const tabs = [
  { id: "home" as TabType, label: "Home/Newsletter", icon: Home, api: "/api/formulario-home" },
  { id: "contacto" as TabType, label: "Contacto", icon: MessageSquare, api: "/api/formulario-contacto" },
  { id: "cheque_bebe" as TabType, label: "Cheque Bebé", icon: Baby, api: "/api/tramites/cheque-bebe" },
  { id: "ayuda_alquiler" as TabType, label: "Ayuda Alquiler", icon: Key, api: "/api/tramites/ayuda-alquiler" },
  { id: "imv" as TabType, label: "IMV", icon: Wallet, api: "/api/tramites/ingreso-minimo-vital" },
  { id: "bono_cultural" as TabType, label: "Bono Cultural", icon: Ticket, api: "/api/tramites/bono-cultural" },
]

export default function RegistrosPage() {
  const [activeTab, setActiveTab] = useState<TabType>("home")
  const [registros, setRegistros] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [estadoFilter, setEstadoFilter] = useState("todos")

  useEffect(() => {
    fetchRegistros()
  }, [activeTab])

  const fetchRegistros = async () => {
    setLoading(true)
    setError("")
    
    try {
      const currentTab = tabs.find(t => t.id === activeTab)
      if (!currentTab) return

      const response = await fetch(currentTab.api)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al cargar registros")
      }

      // Los datos vienen en diferentes formatos según la API
      const records = data.registros || data.tramites || []
      setRegistros(records)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar registros")
      setRegistros([])
    } finally {
      setLoading(false)
    }
  }

  const exportarRegistros = async () => {
    try {
      const currentTab = tabs.find(t => t.id === activeTab)
      if (!currentTab) return

      // Determinar qué tabla exportar
      const tablaMap: Record<TabType, string> = {
        home: "formulario_home",
        contacto: "formulario_contacto",
        cheque_bebe: "tramite_cheque_bebe",
        ayuda_alquiler: "tramite_ayuda_alquiler",
        imv: "tramite_ingreso_minimo_vital",
        bono_cultural: "tramite_bono_cultural",
      }

      const tabla = tablaMap[activeTab]
      const url = `/api/registros/exportar?tabla=${tabla}&formato=csv`

      // Descargar archivo
      const link = document.createElement("a")
      link.href = url
      link.download = `registros_${activeTab}_${new Date().toISOString().split('T')[0]}.csv`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err) {
      alert("Error al exportar registros")
    }
  }

  const filteredRegistros = registros.filter(reg => {
    const matchesSearch = 
      reg.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.nombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.apellidos?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesEstado = estadoFilter === "todos" || reg.estado?.toUpperCase() === estadoFilter.toUpperCase()
    
    return matchesSearch && matchesEstado
  })

  const getEstadoBadge = (estado: string) => {
    const estados: Record<string, { bg: string; text: string; label: string }> = {
      NUEVO: { bg: "bg-blue-100", text: "text-blue-700", label: "Nuevo" },
      CONTACTADO: { bg: "bg-yellow-100", text: "text-yellow-700", label: "Contactado" },
      PROCESADO: { bg: "bg-green-100", text: "text-green-700", label: "Procesado" },
      DESCARTADO: { bg: "bg-gray-100", text: "text-gray-700", label: "Descartado" },
      PENDIENTE: { bg: "bg-orange-100", text: "text-orange-700", label: "Pendiente" },
      EN_REVISION: { bg: "bg-purple-100", text: "text-purple-700", label: "En Revisión" },
      DOCUMENTACION_REQUERIDA: { bg: "bg-red-100", text: "text-red-700", label: "Doc. Requerida" },
      APROBADO: { bg: "bg-green-100", text: "text-green-700", label: "Aprobado" },
      RECHAZADO: { bg: "bg-red-100", text: "text-red-700", label: "Rechazado" },
      COMPLETADO: { bg: "bg-green-100", text: "text-green-700", label: "Completado" },
    }
    
    const config = estados[estado?.toUpperCase()] || { bg: "bg-gray-100", text: "text-gray-700", label: estado }
    return (
      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    )
  }

  const getPrioridadBadge = (prioridad: string) => {
    const prioridades: Record<string, { bg: string; text: string }> = {
      ALTA: { bg: "bg-red-100", text: "text-red-700" },
      MEDIA: { bg: "bg-yellow-100", text: "text-yellow-700" },
      BAJA: { bg: "bg-gray-100", text: "text-gray-700" },
    }
    
    const config = prioridades[prioridad?.toUpperCase()] || { bg: "bg-gray-100", text: "text-gray-700" }
    return (
      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${config.bg} ${config.text}`}>
        {prioridad}
      </span>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-navy">Registros de Clientes</h1>
        <p className="mt-2 text-slate-600">
          Gestiona todos los formularios enviados por los clientes
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200">
        <div className="flex space-x-1 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Filtros */}
      <Card className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Buscar por nombre o email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={estadoFilter}
              onChange={(e) => setEstadoFilter(e.target.value)}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-primary focus:outline-none"
            >
              <option value="todos">Todos los estados</option>
              <option value="NUEVO">Nuevo</option>
              <option value="CONTACTADO">Contactado</option>
              <option value="PROCESADO">Procesado</option>
              <option value="PENDIENTE">Pendiente</option>
              <option value="EN_REVISION">En Revisión</option>
              <option value="APROBADO">Aprobado</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={fetchRegistros}>
              <Filter className="mr-2 h-4 w-4" />
              Actualizar
            </Button>
            <Button variant="outline" size="sm" onClick={exportarRegistros}>
              <Download className="mr-2 h-4 w-4" />
              Exportar CSV
            </Button>
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-4">
          <div className="text-sm font-medium text-slate-600">Total</div>
          <div className="mt-2 text-2xl font-bold text-navy">{filteredRegistros.length}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-slate-600">Nuevos</div>
          <div className="mt-2 text-2xl font-bold text-blue-600">
            {filteredRegistros.filter(r => r.estado === "NUEVO" || r.estado === "PENDIENTE").length}
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-slate-600">En Proceso</div>
          <div className="mt-2 text-2xl font-bold text-yellow-600">
            {filteredRegistros.filter(r => r.estado === "CONTACTADO" || r.estado === "EN_REVISION").length}
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-slate-600">Completados</div>
          <div className="mt-2 text-2xl font-bold text-green-600">
            {filteredRegistros.filter(r => r.estado === "PROCESADO" || r.estado === "COMPLETADO" || r.estado === "APROBADO").length}
          </div>
        </Card>
      </div>

      {/* Tabla */}
      <Card>
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex items-center justify-center p-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : error ? (
            <div className="p-12 text-center">
              <p className="text-red-600">{error}</p>
              <Button onClick={fetchRegistros} className="mt-4" variant="outline">
                Reintentar
              </Button>
            </div>
          ) : filteredRegistros.length === 0 ? (
            <div className="p-12 text-center text-slate-600">
              No hay registros para mostrar
            </div>
          ) : (
            <table className="w-full">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-600">
                    Cliente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-600">
                    Contacto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-600">
                    Fecha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-600">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-600">
                    Prioridad
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-600">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {filteredRegistros.map((registro) => (
                  <tr key={registro.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {registro.destacado && <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
                        <div>
                          <div className="font-medium text-navy">
                            {registro.nombre} {registro.apellidos || ""}
                          </div>
                          <div className="text-sm text-slate-500">{registro.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        {registro.telefono && (
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Phone className="h-3 w-3" />
                            {registro.telefono}
                          </div>
                        )}
                        {registro.email && (
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Mail className="h-3 w-3" />
                            {registro.email}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="h-3 w-3" />
                        {formatDate(registro.created_at)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {getEstadoBadge(registro.estado)}
                    </td>
                    <td className="px-6 py-4">
                      {getPrioridadBadge(registro.prioridad)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/admin/registros/${registro.id}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
                      >
                        <Eye className="h-4 w-4" />
                        Ver detalles
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Card>
    </div>
  )
}
