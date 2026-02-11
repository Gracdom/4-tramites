import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { hashPassword } from "@/lib/auth"

const SUPABASE_ERROR = { error: "Servidor no configurado." } as const

export async function POST(request: NextRequest) {
  try {
    if (!supabase) return NextResponse.json(SUPABASE_ERROR, { status: 500 })

    const body = await request.json()
    const { token, password } = body

    if (!token || !password || typeof password !== "string") {
      return NextResponse.json(
        { error: "Token y contraseña son requeridos" },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "La contraseña debe tener al menos 8 caracteres" },
        { status: 400 }
      )
    }

    const { data: usuario, error: errFind } = await supabase
      .from("usuarios")
      .select("id, email, token_establecer_password, token_expira_at")
      .eq("token_establecer_password", token)
      .maybeSingle()

    if (errFind || !usuario) {
      return NextResponse.json(
        { error: "Enlace no válido o ya utilizado" },
        { status: 400 }
      )
    }

    const expira = usuario.token_expira_at ? new Date(usuario.token_expira_at).getTime() : 0
    if (Date.now() > expira) {
      return NextResponse.json(
        { error: "El enlace ha caducado. Pide uno nuevo al gestor." },
        { status: 400 }
      )
    }

    const passwordHash = await hashPassword(password)

    const { error: errUpdate } = await supabase
      .from("usuarios")
      .update({
        password_hash: passwordHash,
        token_establecer_password: null,
        token_expira_at: null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", usuario.id)

    if (errUpdate) {
      console.error("Error al guardar contraseña:", errUpdate)
      return NextResponse.json(
        { error: "Error al guardar la contraseña" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Contraseña establecida. Ya puedes iniciar sesión.",
    })
  } catch (e) {
    console.error("Error en establecer-contrasena:", e)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
