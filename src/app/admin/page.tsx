"use client"

import { useState, useEffect } from "react"
import {
  Users,
  FileText,
  CheckCircle,
  Clock,
  Home,
  MessageSquare,
  Baby,
  Key,
  Wallet,
  Ticket,
  TrendingUp,
  Loader2,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

type Stats = {
  formularioHome: number
  formularioContacto: number
  tramiteChequeBebe: number
  tramiteAyudaAlquiler: number
  tramiteIMV: number
  tramiteBonoCultural: number
  total: number
  nuevos: number
  enProceso: number
  completados: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    formularioHome: 0,
    formularioContacto: 0,
    tramiteChequeBebe: 0,
    tramiteAyudaAlquiler: 0,
    tramiteIMV: 0,
    tramiteBonoCultural: 0,
    total: 0,
    nuevos: 0,
    enProceso: 0,
    completados: 0,
  })
  const [loading, setLoading] = useState(true)
  const [recentRecords, setRecentRecords] = useState<any[]>([])

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    setLoading(true)
    
    try {
      // Obtener datos de todas las APIs
      const [
        homeRes,
        contactoRes,
        chequeBebe,
        ayudaAlquiler,
        imv,
        bonoCultural,
      ] = await Promise.all([
        fetch("/api/formulario-home"),
        fetch("/api/formulario-contacto"),
        fetch("/api/tramites/cheque-bebe"),
        fetch("/api/tramites/ayuda-alquiler"),
        fetch("/api/tramites/ingreso-minimo-vital"),
        fetch("/api/tramites/bono-cultural"),
      ])

      const [
        homeData,
        contactoData,
        chequeBebeData,
        ayudaAlquilerData,
        imvData,
        bonoCulturalData,
      ] = await Promise.all([
        homeRes.json(),
        contactoRes.json(),
        chequeBebe.json(),
        ayudaAlquiler.json(),
        imv.json(),
        bonoCultural.json(),
      ])

      const homeRecords = homeData.registros || []
      const contactoRecords = contactoData.registros || []
      const chequeBebeRecords = chequeBebeData.tramites || []
      const ayudaAlquilerRecords = ayudaAlquilerData.tramites || []
      const imvRecords = imvData.tramites || []
      const bonoCulturalRecords = bonoCulturalData.tramites || []

      const allRecords = [
        ...homeRecords.map((r: any) => ({ ...r, tipo: "Home/Newsletter" })),
        ...contactoRecords.map((r: any) => ({ ...r, tipo: "Contacto" })),
        ...chequeBebeRecords.map((r: any) => ({ ...r, tipo: "Cheque Bebé" })),
        ...ayudaAlquilerRecords.map((r: any) => ({ ...r, tipo: "Ayuda Alquiler" })),
        ...imvRecords.map((r: any) => ({ ...r, tipo: "IMV" })),
        ...bonoCulturalRecords.map((r: any) => ({ ...r, tipo: "Bono Cultural" })),
      ]

      // Ordenar por fecha y tomar los 5 más recientes
      const recent = allRecords
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 5)

      setRecentRecords(recent)

      // Calcular estadísticas
      const nuevos = allRecords.filter((r: any) => 
        r.estado === "NUEVO" || r.estado === "PENDIENTE"
      ).length

      const enProceso = allRecords.filter((r: any) => 
        r.estado === "CONTACTADO" || r.estado === "EN_REVISION" || r.estado === "DOCUMENTACION_REQUERIDA"
      ).length

      const completados = allRecords.filter((r: any) => 
        r.estado === "PROCESADO" || r.estado === "COMPLETADO" || r.estado === "APROBADO"
      ).length

      setStats({
        formularioHome: homeRecords.length,
        formularioContacto: contactoRecords.length,
        tramiteChequeBebe: chequeBebeRecords.length,
        tramiteAyudaAlquiler: ayudaAlquilerRecords.length,
        tramiteIMV: imvRecords.length,
        tramiteBonoCultural: bonoCulturalRecords.length,
        total: allRecords.length,
        nuevos,
        enProceso,
        completados,
      })
    } catch (error) {
      console.error("Error al cargar estadísticas:", error)
    } finally {
      setLoading(false)
    }
  }

  const mainStats = [
    {
      title: "Total Registros",
      value: stats.total,
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      href: "/admin/registros",
    },
    {
      title: "Nuevos",
      value: stats.nuevos,
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      href: "/admin/registros",
    },
    {
      title: "En Proceso",
      value: stats.enProceso,
      icon: TrendingUp,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      href: "/admin/registros",
    },
    {
      title: "Completados",
      value: stats.completados,
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
      href: "/admin/registros",
    },
  ]

  const categoryStats = [
    {
      title: "Home/Newsletter",
      value: stats.formularioHome,
      icon: Home,
      color: "text-blue-600",
    },
    {
      title: "Contacto",
      value: stats.formularioContacto,
      icon: MessageSquare,
      color: "text-purple-600",
    },
    {
      title: "Cheque Bebé",
      value: stats.tramiteChequeBebe,
      icon: Baby,
      color: "text-pink-600",
    },
    {
      title: "Ayuda Alquiler",
      value: stats.tramiteAyudaAlquiler,
      icon: Key,
      color: "text-indigo-600",
    },
    {
      title: "IMV",
      value: stats.tramiteIMV,
      icon: Wallet,
      color: "text-green-600",
    },
    {
      title: "Bono Cultural",
      value: stats.tramiteBonoCultural,
      icon: Ticket,
      color: "text-amber-600",
    },
  ]

  const getEstadoBadge = (estado: string) => {
    const estados: Record<string, { bg: string; text: string; label: string }> = {
      NUEVO: { bg: "bg-blue-100", text: "text-blue-700", label: "Nuevo" },
      PENDIENTE: { bg: "bg-orange-100", text: "text-orange-700", label: "Pendiente" },
      CONTACTADO: { bg: "bg-yellow-100", text: "text-yellow-700", label: "Contactado" },
      EN_REVISION: { bg: "bg-purple-100", text: "text-purple-700", label: "En Revisión" },
      PROCESADO: { bg: "bg-green-100", text: "text-green-700", label: "Procesado" },
      COMPLETADO: { bg: "bg-green-100", text: "text-green-700", label: "Completado" },
      APROBADO: { bg: "bg-green-100", text: "text-green-700", label: "Aprobado" },
    }
    
    const config = estados[estado?.toUpperCase()] || { bg: "bg-gray-100", text: "text-gray-700", label: estado }
    return (
      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${config.bg} ${config.text}`}>
        {config.label}
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-navy">Dashboard</h1>
        <p className="mt-2 text-slate-600">
          Resumen general de todos los registros y trámites
        </p>
      </div>

      {/* Stats principales */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {mainStats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link key={stat.title} href={stat.href}>
              <Card className="p-6 transition-all hover:shadow-lg cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                    <p className="mt-2 text-3xl font-bold text-navy">{stat.value}</p>
                  </div>
                  <div className={`rounded-full p-3 ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Stats por categoría */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-navy mb-4">Registros por Categoría</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categoryStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.title} className="flex items-center gap-4 rounded-lg border border-slate-200 p-4">
                <div className={`rounded-full p-2 bg-slate-50`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm text-slate-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-navy">{stat.value}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Card>

      {/* Registros recientes */}
      <Card className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-navy">Registros Recientes</h2>
          <Link
            href="/admin/registros"
            className="text-sm font-medium text-primary hover:text-primary/80"
          >
            Ver todos →
          </Link>
        </div>
        <div className="space-y-4">
          {recentRecords.length === 0 ? (
            <p className="text-center text-slate-600 py-8">No hay registros recientes</p>
          ) : (
            recentRecords.map((record) => (
              <div
                key={record.id}
                className="flex items-center justify-between rounded-lg border border-slate-200 p-4 hover:bg-slate-50"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="font-medium text-navy">
                      {record.nombre} {record.apellidos || ""}
                    </div>
                    <span className="text-sm text-slate-500">•</span>
                    <span className="text-sm text-slate-600">{record.tipo}</span>
                  </div>
                  <div className="mt-1 text-sm text-slate-500">{record.email}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm text-slate-600">{formatDate(record.created_at)}</div>
                  </div>
                  {getEstadoBadge(record.estado)}
                </div>
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  )
}
