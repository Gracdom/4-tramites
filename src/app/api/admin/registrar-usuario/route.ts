import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { generateSecureToken } from "@/lib/auth"
import { sendConfirmationToClient } from "@/lib/email"
import { clientEnlaceEstablecerContrasena } from "@/lib/email-templates"

const SUPABASE_ERROR = { error: "Servidor no configurado." } as const
const TABLAS_GESTION = [
  "tramite_cheque_bebe",
  "tramite_ayuda_alquiler",
  "tramite_ingreso_minimo_vital",
  "tramite_bono_cultural",
] as const

// GET - Comprobar si este registro ya tiene usuario (para mostrar "Reenviar enlace" en admin)
export async function GET(request: NextRequest) {
  try {
    if (!supabase) return NextResponse.json(SUPABASE_ERROR, { status: 500 })

    const { searchParams } = request.nextUrl
    const registroId = searchParams.get("registroId")
    const tablaReferencia = searchParams.get("tablaReferencia")

    if (!registroId || !tablaReferencia) {
      return NextResponse.json(
        { error: "Faltan registroId o tablaReferencia" },
        { status: 400 }
      )
    }

    if (!TABLAS_GESTION.includes(tablaReferencia as typeof TABLAS_GESTION[number])) {
      return NextResponse.json(
        { tieneUsuario: false }
      )
    }

    const { data: existente } = await supabase
      .from("usuarios")
      .select("email")
      .eq("registro_id", registroId)
      .eq("tabla_referencia", tablaReferencia)
      .maybeSingle()

    return NextResponse.json({
      tieneUsuario: !!existente,
      email: existente?.email ?? undefined,
    })
  } catch (e) {
    console.error("Error en GET registrar-usuario:", e)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!supabase) return NextResponse.json(SUPABASE_ERROR, { status: 500 })

    const body = await request.json()
    const { registroId, tablaReferencia } = body

    if (!registroId || !tablaReferencia) {
      return NextResponse.json(
        { error: "Faltan registroId o tablaReferencia" },
        { status: 400 }
      )
    }

    if (!TABLAS_GESTION.includes(tablaReferencia)) {
      return NextResponse.json(
        { error: "Solo se puede registrar usuario para las 4 gestiones: Cheque Bebé, Ayuda Alquiler, IMV, Bono Cultural" },
        { status: 400 }
      )
    }

    // Comprobar si ya existe usuario para este registro (regenerar enlace si pide otro)
    const { data: existente } = await supabase
      .from("usuarios")
      .select("id, email")
      .eq("registro_id", registroId)
      .eq("tabla_referencia", tablaReferencia)
      .maybeSingle()

    if (existente) {
      const newToken = generateSecureToken()
      const tokenExpiraAt = new Date(Date.now() + 1000 * 60 * 60 * 72).toISOString()
      await supabase
        .from("usuarios")
        .update({ token_establecer_password: newToken, token_expira_at: tokenExpiraAt, updated_at: new Date().toISOString() })
        .eq("id", existente.id)
      const origin = request.headers.get("origin") || request.nextUrl.origin
      const link = `${origin}/establecer-contrasena?token=${newToken}`
      sendConfirmationToClient({
        to: existente.email,
        subject: "Nuevo enlace para establecer tu contraseña - Burocracia Cero",
        html: clientEnlaceEstablecerContrasena(link),
      }).catch((e) => console.error("[registrar-usuario] Email al cliente:", e))
      return NextResponse.json({
        yaRegistrado: true,
        email: existente.email,
        link,
        message: "Usuario ya existía. Nuevo enlace generado y enviado por email al solicitante.",
      })
    }

    // Obtener el registro para sacar el email
    const { data: registro, error: errReg } = await supabase
      .from(tablaReferencia)
      .select("id, email, nombre, apellidos")
      .eq("id", registroId)
      .single()

    if (errReg || !registro) {
      return NextResponse.json(
        { error: "Registro no encontrado en la base de datos" },
        { status: 404 }
      )
    }

    const email = (registro.email as string).trim().toLowerCase()
    if (!email) {
      return NextResponse.json(
        { error: "El registro no tiene email" },
        { status: 400 }
      )
    }

    const token = generateSecureToken()
    const tokenExpiraAt = new Date(Date.now() + 1000 * 60 * 60 * 72).toISOString() // 72 horas

    const { data: usuario, error } = await supabase
      .from("usuarios")
      .insert({
        email,
        registro_id: registroId,
        tabla_referencia: tablaReferencia,
        token_establecer_password: token,
        token_expira_at: tokenExpiraAt,
      })
      .select()
      .single()

    if (error) {
      console.error("Error al crear usuario:", error)
      return NextResponse.json(
        { error: "Error al crear usuario", details: error.message },
        { status: 500 }
      )
    }

    const origin = request.headers.get("origin") || request.nextUrl.origin
    const link = `${origin}/establecer-contrasena?token=${token}`

    sendConfirmationToClient({
      to: email,
      subject: "Establece tu contraseña - Burocracia Cero",
      html: clientEnlaceEstablecerContrasena(link),
    }).catch((e) => console.error("[registrar-usuario] Email al cliente:", e))

    return NextResponse.json({
      success: true,
      usuario: { id: usuario.id, email: usuario.email },
      link,
      message: "Usuario registrado. Se ha enviado un email al solicitante con el enlace para establecer su contraseña.",
    })
  } catch (e) {
    console.error("Error en registrar-usuario:", e)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
