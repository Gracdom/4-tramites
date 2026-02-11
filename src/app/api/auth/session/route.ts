import { NextRequest, NextResponse } from "next/server"
import { verifyToken, getCookieName } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    const cookieName = getCookieName()
    const token = request.cookies.get(cookieName)?.value

    if (!token) {
      return NextResponse.json({ user: null })
    }

    const payload = await verifyToken(token)
    if (!payload) {
      const res = NextResponse.json({ user: null })
      res.cookies.set(cookieName, "", { maxAge: 0, path: "/" })
      return res
    }

    return NextResponse.json({
      user: {
        id: payload.usuarioId,
        email: payload.email,
      },
    })
  } catch {
    return NextResponse.json({ user: null })
  }
}
