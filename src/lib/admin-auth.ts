import { SignJWT, jwtVerify } from "jose"

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-cambiar-en-produccion"
const ADMIN_COOKIE = "admin_session"
const ADMIN_MAX_AGE = 60 * 60 * 24 // 24 horas

const ADMIN_EMAIL = process.env.ADMIN_LOGIN_EMAIL || "admin@tramites.com"
const ADMIN_PASSWORD = process.env.ADMIN_LOGIN_PASSWORD || "Admin123."

export function getAdminCookieName() {
  return ADMIN_COOKIE
}

export function getAdminCookieMaxAge() {
  return ADMIN_MAX_AGE
}

export function verifyAdminCredentials(email: string, password: string): boolean {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD
}

export async function createAdminToken(): Promise<string> {
  const secret = new TextEncoder().encode(JWT_SECRET)
  const now = Math.floor(Date.now() / 1000)
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt(now)
    .setExpirationTime(now + ADMIN_MAX_AGE)
    .sign(secret)
}

export async function verifyAdminToken(token: string): Promise<boolean> {
  try {
    const secret = new TextEncoder().encode(JWT_SECRET)
    const { payload } = await jwtVerify(token, secret)
    return payload?.role === "admin"
  } catch {
    return false
  }
}
