import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getAdminCookieName, verifyAdminToken } from "@/lib/admin-auth"

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get(getAdminCookieName())?.value

  if (!token) {
    return NextResponse.json({ authenticated: false })
  }

  const valid = await verifyAdminToken(token)
  return NextResponse.json({ authenticated: valid })
}
