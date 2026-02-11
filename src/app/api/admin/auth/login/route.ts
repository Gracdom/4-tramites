import { NextResponse } from "next/server"
import {
  verifyAdminCredentials,
  createAdminToken,
  getAdminCookieName,
  getAdminCookieMaxAge,
} from "@/lib/admin-auth"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: "Introduce email y contraseña" },
        { status: 400 }
      )
    }

    if (!verifyAdminCredentials(email, password)) {
      return NextResponse.json(
        { error: "Email o contraseña incorrectos" },
        { status: 401 }
      )
    }

    const token = await createAdminToken()
    const response = NextResponse.json({ ok: true })

    response.cookies.set(getAdminCookieName(), token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: getAdminCookieMaxAge(),
      path: "/",
    })

    return response
  } catch {
    return NextResponse.json(
      { error: "Error al iniciar sesión" },
      { status: 500 }
    )
  }
}
