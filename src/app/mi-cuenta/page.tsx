"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  Calendar,
  Loader2,
  LogOut,
  ArrowLeft,
  Tag,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type Solicitud = {
  id: string
  tipo: string
  estado: string
  prioridad: string
  created_at: string
  updated_at: string
  nombre?: string
  apellidos?: string
  email?: string
  telefono?: string
  dni?: string
  direccion?: string
  codigo_postal?: string
  ciudad?: string
  provincia?: string
  mensaje?: string
  nombre_bebe?: string
  fecha_nacimiento_bebe?: string
  fecha_nacimiento?: string
  importe_alquiler?: number
  ingresos_mensuales?: number
  ingresos_anuales?: string
  situacion_laboral?: string
  numero_hijos?: number
  numero_personas_hogar?: number
  numero_menores?: number
}

const ESTADOS_LABEL: Record<string, { label: string; bg: string; text: string }> = {
  PENDIENTE: { label: "Pendiente", bg: "bg-orange-100", text: "text-orange-700" },
  EN_REVISION: { label: "En revisión", bg: "bg-purple-100", text: "text-purple-700" },
  DOCUMENTACION_REQUERIDA: { label: "Documentación requerida", bg: "bg-amber-100", text: "text-amber-700" },
  APROBADO: { label: "Aprobado", bg: "bg-green-100", text: "text-green-700" },
  RECHAZADO: { label: "Rechazado", bg: "bg-red-100", text: "text-red-700" },
  COMPLETADO: { label: "Completado", bg: "bg-green-100", text: "text-green-700" },
  NUEVO: { label: "Nuevo", bg: "bg-blue-100", text: "text-blue-700" },
  CONTACTADO: { label: "Contactado", bg: "bg-yellow-100", text: "text-yellow-700" },
  PROCESADO: { label: "Procesado", bg: "bg-green-100", text: "text-green-700" },
  DESCARTADO: { label: "Descartado", bg: "bg-gray-100", text: "text-gray-700" },
}

function formatDate(s: string) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(s))
}

export default function MiCuentaPage() {
  const router = useRouter()
  const [solicitud, setSolicitud] = useState<Solicitud | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("/api/auth/session")
      .then((r) => r.json())
      .then((data) => {
        if (!data.user) {
          router.replace("/acceder")
          return
        }
        return fetch("/api/usuario/mi-solicitud", { credentials: "include" })
      })
      .then((r) => {
        if (!r) return
        return r.json()
      })
      .then((data) => {
        if (data?.solicitud) setSolicitud(data.solicitud)
        if (data?.error) setError(data.error)
      })
      .catch(() => setError("Error al cargar los datos"))
      .finally(() => setLoading(false))
  }, [router])

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" })
    router.replace("/acceder")
    router.refresh()
  }

  if (loading) {
    return (
      <div className="container flex min-h-[50vh] items-center justify-center px-4 py-12">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    )
  }

  if (error && !solicitud) {
    return (
      <div className="container px-4 py-12">
        <Card className="p-8 text-center">
          <p className="text-red-600">{error}</p>
          <Button asChild className="mt-4">
            <Link href="/acceder">Ir a acceder</Link>
          </Button>
        </Card>
      </div>
    )
  }

  const estadoConfig = ESTADOS_LABEL[solicitud?.estado?.toUpperCase() || ""] || {
    label: solicitud?.estado || "",
    bg: "bg-gray-100",
    text: "text-gray-700",
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <Button variant="ghost" asChild>
          <Link href="/" className="inline-flex gap-2">
            <ArrowLeft className="h-4 w-4" />
            Inicio
          </Link>
        </Button>
        <Button variant="outline" size="sm" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Cerrar sesión
        </Button>
      </div>

      <h1 className="text-2xl font-bold text-navy">Mi cuenta</h1>
      <p className="mt-1 text-slate-600">Aquí puedes ver tu solicitud y su estado.</p>

      {/* Estado del trámite */}
      <Card className="mt-8 p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-navy">
          <Tag className="h-5 w-5" />
          Estado de tu solicitud
        </h2>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <span className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${estadoConfig.bg} ${estadoConfig.text}`}>
            {estadoConfig.label}
          </span>
          <span className="text-sm text-slate-500">
            Trámite: <strong>{solicitud?.tipo}</strong>
          </span>
          <span className="flex items-center gap-1 text-sm text-slate-500">
            <Calendar className="h-4 w-4" />
            Actualizado: {solicitud?.updated_at ? formatDate(solicitud.updated_at) : "-"}
          </span>
        </div>
      </Card>

      {/* Datos personales */}
      <Card className="mt-6 p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-navy">
          <User className="h-5 w-5" />
          Tus datos
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {(solicitud?.nombre || solicitud?.apellidos) && (
            <div>
              <p className="text-sm font-medium text-slate-600">Nombre</p>
              <p className="text-navy">{[solicitud.nombre, solicitud.apellidos].filter(Boolean).join(" ")}</p>
            </div>
          )}
          {solicitud?.email && (
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-slate-400" />
              <div>
                <p className="text-sm font-medium text-slate-600">Email</p>
                <p className="text-navy">{solicitud.email}</p>
              </div>
            </div>
          )}
          {solicitud?.telefono && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-slate-400" />
              <div>
                <p className="text-sm font-medium text-slate-600">Teléfono</p>
                <p className="text-navy">{solicitud.telefono}</p>
              </div>
            </div>
          )}
          {solicitud?.dni && (
            <div>
              <p className="text-sm font-medium text-slate-600">DNI</p>
              <p className="text-navy">{solicitud.dni}</p>
            </div>
          )}
          {(solicitud?.direccion || solicitud?.ciudad) && (
            <div className="flex items-start gap-2 sm:col-span-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
              <div>
                <p className="text-sm font-medium text-slate-600">Dirección</p>
                <p className="text-navy">
                  {[solicitud.direccion, solicitud.codigo_postal, solicitud.ciudad, solicitud.provincia]
                    .filter(Boolean)
                    .join(", ")}
                </p>
              </div>
            </div>
          )}
        </div>
      </Card>

      {solicitud?.mensaje && (
        <Card className="mt-6 p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-navy">
            <FileText className="h-5 w-5" />
            Mensaje / Consulta
          </h2>
          <p className="mt-2 whitespace-pre-wrap text-slate-700">{solicitud.mensaje}</p>
        </Card>
      )}
    </div>
  )
}
