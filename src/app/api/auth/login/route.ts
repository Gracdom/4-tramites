import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { verifyPassword, createToken, getCookieName, getCookieMaxAge } from "@/lib/auth"

const SUPABASE_ERROR = { error: "Servidor no configurado." } as const

export async function POST(request: NextRequest) {
  try {
    if (!supabase) return NextResponse.json(SUPABASE_ERROR, { status: 500 })

    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email y contraseña son requeridos" },
        { status: 400 }
      )
    }

    const emailNorm = (email as string).trim().toLowerCase()

    const { data: usuario, error } = await supabase
      .from("usuarios")
      .select("id, email, password_hash")
      .eq("email", emailNorm)
      .maybeSingle()

    if (error || !usuario) {
      return NextResponse.json(
        { error: "Credenciales incorrectas" },
        { status: 401 }
      )
    }

    if (!usuario.password_hash) {
      return NextResponse.json(
        { error: "Aún no has establecido tu contraseña. Usa el enlace que te envió el gestor." },
        { status: 401 }
      )
    }

    const ok = await verifyPassword(password, usuario.password_hash)
    if (!ok) {
      return NextResponse.json(
        { error: "Credenciales incorrectas" },
        { status: 401 }
      )
    }

    const token = await createToken({
      usuarioId: usuario.id,
      email: usuario.email,
    })

    const cookieName = getCookieName()
    const maxAge = getCookieMaxAge()
    const res = NextResponse.json({ success: true, email: usuario.email })
    res.cookies.set(cookieName, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge,
      path: "/",
    })

    return res
  } catch (e) {
    console.error("Error en login:", e)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
