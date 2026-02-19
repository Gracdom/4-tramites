"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Globe,
  Monitor,
  Star,
  StarOff,
  Edit,
  Save,
  X,
  Plus,
  Loader2,
  User,
  FileText,
  Clock,
  Tag,
  UserPlus,
  Copy,
  Check,
  Trash2,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

type Nota = {
  id: string
  contenido: string
  usuario: string
  created_at: string
}

export default function RegistroDetallePage() {
  const params = useParams()
  const router = useRouter()
  const [registro, setRegistro] = useState<any>(null)
  const [notas, setNotas] = useState<Nota[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [editingEstado, setEditingEstado] = useState(false)
  const [editingPrioridad, setEditingPrioridad] = useState(false)
  const [nuevoEstado, setNuevoEstado] = useState("")
  const [nuevaPrioridad, setNuevaPrioridad] = useState("")
  const [destacado, setDestacado] = useState(false)
  const [nuevaNota, setNuevaNota] = useState("")
  const [guardandoNota, setGuardandoNota] = useState(false)
  const [tablaReferencia, setTablaReferencia] = useState("")
  const [registrarLoading, setRegistrarLoading] = useState(false)
  const [linkRegistroUsuario, setLinkRegistroUsuario] = useState<string | null>(null)
  const [linkCopiado, setLinkCopiado] = useState(false)
  const [yaRegistradoUsuario, setYaRegistradoUsuario] = useState<string | null>(null)
  const [eliminando, setEliminando] = useState(false)

  const TABLAS_CON_USUARIO = [
    "tramite_cheque_bebe",
    "tramite_ayuda_alquiler",
    "tramite_ingreso_minimo_vital",
    "tramite_bono_cultural",
  ]
  const puedeRegistrarUsuario = TABLAS_CON_USUARIO.includes(tablaReferencia)

  useEffect(() => {
    if (params.id) {
      fetchRegistro()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id])

  // Comprobar si este registro ya tiene usuario (para mostrar "Reenviar enlace")
  useEffect(() => {
    if (!puedeRegistrarUsuario || !params.id || !tablaReferencia) return
    const q = new URLSearchParams({ registroId: String(params.id), tablaReferencia })
    fetch(`/api/admin/registrar-usuario?${q}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.tieneUsuario && data.email) setYaRegistradoUsuario(data.email)
      })
      .catch(() => {})
  }, [puedeRegistrarUsuario, params.id, tablaReferencia])

  const fetchRegistro = async () => {
    setLoading(true)
    setError("")

    try {
      // Intentar buscar en todas las tablas
      const apis = [
        { api: "/api/formulario-home", tabla: "formulario_home" },
        { api: "/api/formulario-contacto", tabla: "formulario_contacto" },
        { api: "/api/tramites/cheque-bebe", tabla: "tramite_cheque_bebe" },
        { api: "/api/tramites/ayuda-alquiler", tabla: "tramite_ayuda_alquiler" },
        { api: "/api/tramites/ingreso-minimo-vital", tabla: "tramite_ingreso_minimo_vital" },
        { api: "/api/tramites/bono-cultural", tabla: "tramite_bono_cultural" },
      ]

      let encontrado = false

      for (const { api, tabla } of apis) {
        try {
          const response = await fetch(api)
          const data = await response.json()
          
          if (response.ok) {
            const records = data.registros || data.tramites || []
            const record = records.find((r: any) => r.id === params.id)
            
            if (record) {
              setRegistro(record)
              setNuevoEstado(record.estado)
              setNuevaPrioridad(record.prioridad)
              setDestacado(record.destacado || false)
              setTablaReferencia(tabla)
              encontrado = true
              
              // Cargar notas
              await fetchNotas(tabla, params.id as string)
              break
            }
          }
        } catch (err) {
          console.error(`Error buscando en ${api}:`, err)
        }
      }

      if (!encontrado) {
        setError("Registro no encontrado")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar registro")
    } finally {
      setLoading(false)
    }
  }

  const fetchNotas = async (tabla: string, registroId: string) => {
    try {
      const response = await fetch(`/api/notas?tabla_referencia=${tabla}&registro_id=${registroId}`)
      const data = await response.json()
      
      if (response.ok) {
        setNotas(data.notas || [])
      }
    } catch (err) {
      console.error("Error al cargar notas:", err)
    }
  }

  const agregarNota = async () => {
    if (!nuevaNota.trim()) return

    setGuardandoNota(true)
    try {
      const response = await fetch("/api/notas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contenido: nuevaNota,
          usuario: "Admin", // TODO: Obtener del usuario autenticado
          tabla_referencia: tablaReferencia,
          registro_id: params.id,
        }),
      })

      if (response.ok) {
        setNuevaNota("")
        await fetchNotas(tablaReferencia, params.id as string)
      } else {
        const data = await response.json()
        alert(data.error || "Error al guardar nota")
      }
    } catch (err) {
      alert("Error al guardar nota")
    } finally {
      setGuardandoNota(false)
    }
  }

  const actualizarEstado = async () => {
    try {
      const response = await fetch("/api/registros/actualizar", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: params.id,
          tabla: tablaReferencia,
          campo: "estado",
          valor: nuevoEstado,
        }),
      })

      if (response.ok) {
        setRegistro({ ...registro, estado: nuevoEstado })
        setEditingEstado(false)
      } else {
        const data = await response.json()
        alert(data.error || "Error al actualizar estado")
      }
    } catch (err) {
      alert("Error al actualizar estado")
    }
  }

  const actualizarPrioridad = async () => {
    try {
      const response = await fetch("/api/registros/actualizar", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: params.id,
          tabla: tablaReferencia,
          campo: "prioridad",
          valor: nuevaPrioridad,
        }),
      })

      if (response.ok) {
        setRegistro({ ...registro, prioridad: nuevaPrioridad })
        setEditingPrioridad(false)
      } else {
        const data = await response.json()
        alert(data.error || "Error al actualizar prioridad")
      }
    } catch (err) {
      alert("Error al actualizar prioridad")
    }
  }

  const toggleDestacado = async () => {
    const nuevoValor = !destacado
    
    try {
      const response = await fetch("/api/registros/actualizar", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: params.id,
          tabla: tablaReferencia,
          campo: "destacado",
          valor: nuevoValor,
        }),
      })

      if (response.ok) {
        setDestacado(nuevoValor)
        setRegistro({ ...registro, destacado: nuevoValor })
      } else {
        const data = await response.json()
        alert(data.error || "Error al actualizar destacado")
      }
    } catch (err) {
      alert("Error al actualizar destacado")
    }
  }

  const eliminarRegistro = async () => {
    if (!params.id || !tablaReferencia) return
    if (!confirm("¿Eliminar este registro? Esta acción no se puede deshacer.")) return
    setEliminando(true)
    try {
      const res = await fetch(`/api/admin/registros?id=${params.id}&tabla=${tablaReferencia}`, {
        method: "DELETE",
      })
      const data = await res.json()
      if (res.ok) {
        router.push("/admin/registros")
      } else {
        alert(data.error || "Error al eliminar")
      }
    } catch (err) {
      alert("Error al eliminar")
    } finally {
      setEliminando(false)
    }
  }

  const registrarUsuario = async () => {
    if (!params.id || !tablaReferencia) return
    setRegistrarLoading(true)
    try {
      const res = await fetch("/api/admin/registrar-usuario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ registroId: params.id, tablaReferencia }),
      })
      const data = await res.json()
      if (res.ok && data.link) {
        setLinkRegistroUsuario(data.link)
        if (data.email) setYaRegistradoUsuario(data.email)
        if (data.usuario?.email) setYaRegistradoUsuario(data.usuario.email)
      } else {
        alert(data.error || "Error al registrar usuario")
      }
    } catch (err) {
      alert("Error de conexión")
    } finally {
      setRegistrarLoading(false)
    }
  }

  const getEstadoBadge = (estado: string) => {
    const estados: Record<string, { bg: string; text: string; label: string }> = {
      NUEVO: { bg: "bg-blue-100", text: "text-blue-700", label: "Nuevo" },
      PENDIENTE: { bg: "bg-orange-100", text: "text-orange-700", label: "Pendiente" },
      CONTACTADO: { bg: "bg-yellow-100", text: "text-yellow-700", label: "Contactado" },
      EN_REVISION: { bg: "bg-purple-100", text: "text-purple-700", label: "En Revisión" },
      PROCESADO: { bg: "bg-green-100", text: "text-green-700", label: "Procesado" },
      COMPLETADO: { bg: "bg-green-100", text: "text-green-700", label: "Completado" },
      APROBADO: { bg: "bg-green-100", text: "text-green-700", label: "Aprobado" },
      RECHAZADO: { bg: "bg-red-100", text: "text-red-700", label: "Rechazado" },
      DESCARTADO: { bg: "bg-gray-100", text: "text-gray-700", label: "Descartado" },
      DOCUMENTACION_REQUERIDA: { bg: "bg-red-100", text: "text-red-700", label: "Doc. Requerida" },
    }
    
    const config = estados[estado?.toUpperCase()] || { bg: "bg-gray-100", text: "text-gray-700", label: estado }
    return (
      <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${config.bg} ${config.text}`}>
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
      <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${config.bg} ${config.text}`}>
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
      minute: '2-digit',
      second: '2-digit'
    }).format(date)
  }

  const getTipoFormulario = (tabla: string) => {
    const tipos: Record<string, string> = {
      formulario_home: "Home/Newsletter",
      formulario_contacto: "Contacto",
      tramite_cheque_bebe: "Cheque Bebé",
      tramite_ayuda_alquiler: "Ayuda Alquiler",
      tramite_ingreso_minimo_vital: "Ingreso Mínimo Vital",
      tramite_bono_cultural: "Bono Cultural",
    }
    return tipos[tabla] || tabla
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error || !registro) {
    return (
      <div className="space-y-6">
        <Button variant="outline" onClick={() => router.push("/admin/registros")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>
        <Card className="p-12 text-center">
          <p className="text-red-600 mb-4">{error || "Registro no encontrado"}</p>
          <Button onClick={() => router.push("/admin/registros")}>
            Volver a Registros
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => router.push("/admin/registros")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-navy">Detalle del Registro</h1>
            <p className="mt-1 text-slate-600">{getTipoFormulario(tablaReferencia)}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={toggleDestacado}
            className={destacado ? "text-yellow-600" : ""}
          >
            {destacado ? (
              <Star className="mr-2 h-4 w-4 fill-yellow-400" />
            ) : (
              <StarOff className="mr-2 h-4 w-4" />
            )}
            {destacado ? "Destacado" : "Destacar"}
          </Button>
          <Button
            variant="outline"
            onClick={eliminarRegistro}
            disabled={eliminando}
            className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            {eliminando ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Trash2 className="mr-2 h-4 w-4" />
            )}
            Eliminar
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Columna principal */}
        <div className="space-y-6 lg:col-span-2">
          {/* Información del Cliente */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-navy mb-4 flex items-center gap-2">
              <User className="h-5 w-5" />
              Información del Cliente
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {registro.nombre && (
                <div>
                  <label className="text-sm font-medium text-slate-600">Nombre</label>
                  <p className="mt-1 text-navy">{registro.nombre}</p>
                </div>
              )}
              {registro.apellidos && (
                <div>
                  <label className="text-sm font-medium text-slate-600">Apellidos</label>
                  <p className="mt-1 text-navy">{registro.apellidos}</p>
                </div>
              )}
              {registro.email && (
                <div>
                  <label className="text-sm font-medium text-slate-600">Email</label>
                  <div className="mt-1 flex items-center gap-2 text-navy">
                    <Mail className="h-4 w-4 text-slate-400" />
                    <a href={`mailto:${registro.email}`} className="hover:text-primary">
                      {registro.email}
                    </a>
                  </div>
                </div>
              )}
              {registro.telefono && (
                <div>
                  <label className="text-sm font-medium text-slate-600">Teléfono</label>
                  <div className="mt-1 flex items-center gap-2 text-navy">
                    <Phone className="h-4 w-4 text-slate-400" />
                    <a href={`tel:${registro.telefono}`} className="hover:text-primary">
                      {registro.telefono}
                    </a>
                  </div>
                </div>
              )}
              {registro.fecha_nacimiento && (
                <div>
                  <label className="text-sm font-medium text-slate-600">Fecha de Nacimiento</label>
                  <p className="mt-1 text-navy">{registro.fecha_nacimiento}</p>
                </div>
              )}
              {registro.dni && (
                <div>
                  <label className="text-sm font-medium text-slate-600">DNI</label>
                  <p className="mt-1 text-navy">{registro.dni}</p>
                </div>
              )}
              {registro.direccion && (
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-slate-600">Dirección</label>
                  <div className="mt-1 flex items-center gap-2 text-navy">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    {registro.direccion}
                  </div>
                </div>
              )}
              {registro.ciudad && (
                <div>
                  <label className="text-sm font-medium text-slate-600">Ciudad</label>
                  <p className="mt-1 text-navy">{registro.ciudad}</p>
                </div>
              )}
              {registro.codigo_postal && (
                <div>
                  <label className="text-sm font-medium text-slate-600">Código Postal</label>
                  <p className="mt-1 text-navy">{registro.codigo_postal}</p>
                </div>
              )}
            </div>
          </Card>

          {/* Mensaje/Consulta */}
          {registro.mensaje && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-navy mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Mensaje
              </h2>
              <p className="text-slate-700 whitespace-pre-wrap">{registro.mensaje}</p>
            </Card>
          )}

          {/* Información Técnica */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-navy mb-4 flex items-center gap-2">
              <Monitor className="h-5 w-5" />
              Información Técnica
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {registro.ip && (
                <div>
                  <label className="text-sm font-medium text-slate-600">IP</label>
                  <p className="mt-1 text-navy font-mono text-sm">{registro.ip}</p>
                </div>
              )}
              {registro.user_agent && (
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-slate-600">Navegador</label>
                  <p className="mt-1 text-navy text-sm">{registro.user_agent}</p>
                </div>
              )}
              {registro.dispositivo && (
                <div>
                  <label className="text-sm font-medium text-slate-600">Dispositivo</label>
                  <p className="mt-1 text-navy">{registro.dispositivo}</p>
                </div>
              )}
              {registro.url && (
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-slate-600">URL</label>
                  <div className="mt-1 flex items-center gap-2 text-navy">
                    <Globe className="h-4 w-4 text-slate-400" />
                    <a href={registro.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary text-sm break-all">
                      {registro.url}
                    </a>
                  </div>
                </div>
              )}
              {registro.referrer && (
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-slate-600">Referrer</label>
                  <p className="mt-1 text-navy text-sm break-all">{registro.referrer}</p>
                </div>
              )}
            </div>

            {/* UTM Parameters */}
            {(registro.utm_source || registro.utm_medium || registro.utm_campaign) && (
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h3 className="text-sm font-semibold text-navy mb-3">Parámetros UTM</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {registro.utm_source && (
                    <div>
                      <label className="text-xs font-medium text-slate-600">Source</label>
                      <p className="mt-1 text-sm text-navy">{registro.utm_source}</p>
                    </div>
                  )}
                  {registro.utm_medium && (
                    <div>
                      <label className="text-xs font-medium text-slate-600">Medium</label>
                      <p className="mt-1 text-sm text-navy">{registro.utm_medium}</p>
                    </div>
                  )}
                  {registro.utm_campaign && (
                    <div>
                      <label className="text-xs font-medium text-slate-600">Campaign</label>
                      <p className="mt-1 text-sm text-navy">{registro.utm_campaign}</p>
                    </div>
                  )}
                  {registro.utm_term && (
                    <div>
                      <label className="text-xs font-medium text-slate-600">Term</label>
                      <p className="mt-1 text-sm text-navy">{registro.utm_term}</p>
                    </div>
                  )}
                  {registro.utm_content && (
                    <div>
                      <label className="text-xs font-medium text-slate-600">Content</label>
                      <p className="mt-1 text-sm text-navy">{registro.utm_content}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Columna lateral */}
        <div className="space-y-6">
          {/* Estado y Prioridad */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-navy mb-4 flex items-center gap-2">
              <Tag className="h-5 w-5" />
              Estado
            </h2>
            <div className="space-y-4">
              {/* Estado */}
              <div>
                <label className="text-sm font-medium text-slate-600 mb-2 block">Estado Actual</label>
                {editingEstado ? (
                  <div className="flex gap-2">
                    <select
                      value={nuevoEstado}
                      onChange={(e) => setNuevoEstado(e.target.value)}
                      className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm"
                    >
                      <option value="NUEVO">Nuevo</option>
                      <option value="PENDIENTE">Pendiente</option>
                      <option value="CONTACTADO">Contactado</option>
                      <option value="EN_REVISION">En Revisión</option>
                      <option value="DOCUMENTACION_REQUERIDA">Doc. Requerida</option>
                      <option value="PROCESADO">Procesado</option>
                      <option value="APROBADO">Aprobado</option>
                      <option value="RECHAZADO">Rechazado</option>
                      <option value="COMPLETADO">Completado</option>
                      <option value="DESCARTADO">Descartado</option>
                    </select>
                    <Button size="sm" onClick={actualizarEstado}>
                      <Save className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setEditingEstado(false)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    {getEstadoBadge(registro.estado)}
                    <Button size="sm" variant="ghost" onClick={() => setEditingEstado(true)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Prioridad */}
              <div>
                <label className="text-sm font-medium text-slate-600 mb-2 block">Prioridad</label>
                {editingPrioridad ? (
                  <div className="flex gap-2">
                    <select
                      value={nuevaPrioridad}
                      onChange={(e) => setNuevaPrioridad(e.target.value)}
                      className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm"
                    >
                      <option value="ALTA">Alta</option>
                      <option value="MEDIA">Media</option>
                      <option value="BAJA">Baja</option>
                    </select>
                    <Button size="sm" onClick={actualizarPrioridad}>
                      <Save className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setEditingPrioridad(false)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    {getPrioridadBadge(registro.prioridad)}
                    <Button size="sm" variant="ghost" onClick={() => setEditingPrioridad(true)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Fecha */}
              <div>
                <label className="text-sm font-medium text-slate-600 mb-2 block">Fecha de Registro</label>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  {formatDate(registro.created_at)}
                </div>
              </div>
            </div>
          </Card>

          {/* Registrar usuario (solo para las 4 gestiones) */}
          {puedeRegistrarUsuario && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-navy mb-2 flex items-center gap-2">
                <UserPlus className="h-5 w-5" />
                Registrar usuario
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                Crea una cuenta para este solicitante. Podrá acceder a <strong>/mi-cuenta</strong> y ver el estado de su solicitud. La primera vez usará el enlace para establecer su contraseña.
              </p>
              {yaRegistradoUsuario && (
                <p className="text-sm text-green-700 bg-green-50 rounded-lg px-3 py-2 mb-4">
                  Usuario ya registrado: <strong>{yaRegistradoUsuario}</strong>
                </p>
              )}
              {!linkRegistroUsuario ? (
                <Button
                  onClick={registrarUsuario}
                  disabled={registrarLoading}
                  className="w-full"
                  size="sm"
                >
                  {registrarLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generando enlace...
                    </>
                  ) : yaRegistradoUsuario ? (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Reenviar enlace para establecer contraseña
                    </>
                  ) : (
                    <>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Registrar usuario en el sistema
                    </>
                  )}
                </Button>
              ) : (
                <div className="space-y-2">
                  <p className="text-xs font-medium text-slate-600">Enlace para el solicitante (establecer contraseña):</p>
                  <div className="flex gap-2">
                    <Input
                      readOnly
                      value={linkRegistroUsuario}
                      className="font-mono text-xs"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        navigator.clipboard.writeText(linkRegistroUsuario)
                        setLinkCopiado(true)
                        setTimeout(() => setLinkCopiado(false), 2000)
                      }}
                    >
                      {linkCopiado ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-slate-600"
                    onClick={() => setLinkRegistroUsuario(null)}
                  >
                    Ocultar enlace
                  </Button>
                </div>
              )}
            </Card>
          )}

          {/* Notas */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-navy mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Notas ({notas.length})
            </h2>

            {/* Nueva nota */}
            <div className="mb-4">
              <textarea
                value={nuevaNota}
                onChange={(e) => setNuevaNota(e.target.value)}
                placeholder="Escribe una nota..."
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:outline-none resize-none"
                rows={3}
              />
              <Button
                onClick={agregarNota}
                disabled={!nuevaNota.trim() || guardandoNota}
                className="mt-2 w-full"
                size="sm"
              >
                {guardandoNota ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Plus className="mr-2 h-4 w-4" />
                )}
                Agregar Nota
              </Button>
            </div>

            {/* Lista de notas */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {notas.length === 0 ? (
                <p className="text-sm text-slate-500 text-center py-4">No hay notas</p>
              ) : (
                notas.map((nota) => (
                  <div key={nota.id} className="rounded-lg border border-slate-200 p-3">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-medium text-primary">{nota.usuario}</span>
                      <span className="text-xs text-slate-500">
                        {formatDate(nota.created_at)}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 whitespace-pre-wrap">{nota.contenido}</p>
                  </div>
                ))
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
