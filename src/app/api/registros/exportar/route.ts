import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export const dynamic = 'force-dynamic'

const SUPABASE_ERROR = { error: "Servidor no configurado. Revisa NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY." } as const

export async function GET(request: NextRequest) {
  try {
    if (!supabase) return NextResponse.json(SUPABASE_ERROR, { status: 500 })
    const searchParams = request.nextUrl.searchParams
    const tabla = searchParams.get("tabla") || "todas"
    const formato = searchParams.get("formato") || "csv"

    if (formato !== "csv") {
      return NextResponse.json(
        { error: "Solo se soporta formato CSV por ahora" },
        { status: 400 }
      )
    }

    let todosLosRegistros: any[] = []

    // Definir las tablas a exportar
    const tablas = tabla === "todas" 
      ? [
          { nombre: "formulario_home", tipo: "Home/Newsletter" },
          { nombre: "formulario_contacto", tipo: "Contacto" },
          { nombre: "tramite_cheque_bebe", tipo: "Cheque Bebé" },
          { nombre: "tramite_ayuda_alquiler", tipo: "Ayuda Alquiler" },
          { nombre: "tramite_ingreso_minimo_vital", tipo: "IMV" },
          { nombre: "tramite_bono_cultural", tipo: "Bono Cultural" },
        ]
      : [{ nombre: tabla, tipo: tabla }]

    // Obtener datos de cada tabla
    for (const { nombre, tipo } of tablas) {
      const { data, error } = await supabase
        .from(nombre)
        .select("*")
        .order("created_at", { ascending: false })

      if (!error && data) {
        // Agregar el tipo de formulario a cada registro
        const registrosConTipo = data.map(r => ({ ...r, tipo_formulario: tipo }))
        todosLosRegistros = [...todosLosRegistros, ...registrosConTipo]
      }
    }

    if (todosLosRegistros.length === 0) {
      return NextResponse.json(
        { error: "No hay registros para exportar" },
        { status: 404 }
      )
    }

    // Ordenar por fecha
    todosLosRegistros.sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )

    // Generar CSV
    const csv = generarCSV(todosLosRegistros)

    // Retornar como archivo descargable
    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="registros_${new Date().toISOString().split('T')[0]}.csv"`,
      },
    })
  } catch (error) {
    console.error("Error al exportar registros:", error)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}

function generarCSV(registros: any[]): string {
  if (registros.length === 0) return ""

  // Definir columnas principales
  const columnas = [
    "ID",
    "Tipo Formulario",
    "Fecha Registro",
    "Nombre",
    "Apellidos",
    "Email",
    "Teléfono",
    "DNI",
    "Fecha Nacimiento",
    "Dirección",
    "Ciudad",
    "Código Postal",
    "Mensaje",
    "Estado",
    "Prioridad",
    "Destacado",
    "IP",
    "Dispositivo",
    "URL",
    "Referrer",
    "UTM Source",
    "UTM Medium",
    "UTM Campaign",
    "UTM Term",
    "UTM Content",
  ]

  // Encabezados
  let csv = columnas.map(escaparCSV).join(",") + "\n"

  // Filas
  for (const registro of registros) {
    const fila = [
      registro.id || "",
      registro.tipo_formulario || "",
      formatearFecha(registro.created_at) || "",
      registro.nombre || "",
      registro.apellidos || "",
      registro.email || "",
      registro.telefono || "",
      registro.dni || "",
      registro.fecha_nacimiento || "",
      registro.direccion || "",
      registro.ciudad || "",
      registro.codigo_postal || "",
      registro.mensaje || "",
      registro.estado || "",
      registro.prioridad || "",
      registro.destacado ? "Sí" : "No",
      registro.ip || "",
      registro.dispositivo || "",
      registro.url || "",
      registro.referrer || "",
      registro.utm_source || "",
      registro.utm_medium || "",
      registro.utm_campaign || "",
      registro.utm_term || "",
      registro.utm_content || "",
    ]

    csv += fila.map(escaparCSV).join(",") + "\n"
  }

  return csv
}

function escaparCSV(valor: string): string {
  if (valor === null || valor === undefined) return ""
  
  const valorStr = String(valor)
  
  // Si contiene coma, comillas o saltos de línea, envolver en comillas
  if (valorStr.includes(",") || valorStr.includes('"') || valorStr.includes("\n")) {
    // Escapar comillas dobles duplicándolas
    return `"${valorStr.replace(/"/g, '""')}"`
  }
  
  return valorStr
}

function formatearFecha(fecha: string): string {
  if (!fecha) return ""
  
  const date = new Date(fecha)
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(date)
}
