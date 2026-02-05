import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

const SUPABASE_ERROR = { error: "Servidor no configurado. Revisa NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY." } as const

export async function PATCH(request: NextRequest) {
  try {
    if (!supabase) return NextResponse.json(SUPABASE_ERROR, { status: 500 })
    const body = await request.json()
    const { id, tabla, campo, valor } = body

    // Validar campos requeridos
    if (!id || !tabla || !campo) {
      return NextResponse.json(
        { error: "Faltan campos requeridos: id, tabla, campo" },
        { status: 400 }
      )
    }

    // Validar tabla permitida
    const tablasPermitidas = [
      "formulario_home",
      "formulario_contacto",
      "tramite_cheque_bebe",
      "tramite_ayuda_alquiler",
      "tramite_ingreso_minimo_vital",
      "tramite_bono_cultural",
    ]

    if (!tablasPermitidas.includes(tabla)) {
      return NextResponse.json(
        { error: "Tabla no válida" },
        { status: 400 }
      )
    }

    // Validar campo permitido
    const camposPermitidos = ["estado", "prioridad", "destacado"]
    if (!camposPermitidos.includes(campo)) {
      return NextResponse.json(
        { error: "Campo no válido. Solo se permite actualizar: estado, prioridad, destacado" },
        { status: 400 }
      )
    }

    // Validar valores según el campo
    if (campo === "estado") {
      const estadosValidos = [
        "NUEVO",
        "PENDIENTE",
        "CONTACTADO",
        "EN_REVISION",
        "DOCUMENTACION_REQUERIDA",
        "PROCESADO",
        "APROBADO",
        "RECHAZADO",
        "COMPLETADO",
        "DESCARTADO",
      ]
      if (!estadosValidos.includes(valor?.toUpperCase())) {
        return NextResponse.json(
          { error: "Estado no válido" },
          { status: 400 }
        )
      }
    }

    if (campo === "prioridad") {
      const prioridadesValidas = ["ALTA", "MEDIA", "BAJA"]
      if (!prioridadesValidas.includes(valor?.toUpperCase())) {
        return NextResponse.json(
          { error: "Prioridad no válida" },
          { status: 400 }
        )
      }
    }

    if (campo === "destacado") {
      if (typeof valor !== "boolean") {
        return NextResponse.json(
          { error: "El valor de destacado debe ser booleano" },
          { status: 400 }
        )
      }
    }

    // Actualizar el registro
    const { data, error } = await supabase
      .from(tabla)
      .update({ [campo]: valor })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error("Error de Supabase:", error)
      return NextResponse.json(
        { error: "Error al actualizar el registro" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      mensaje: `${campo} actualizado correctamente`,
      registro: data,
    })
  } catch (error) {
    console.error("Error al actualizar registro:", error)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}
