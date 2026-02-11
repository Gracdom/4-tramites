import bcrypt from "bcryptjs"
import { SignJWT, jwtVerify } from "jose"

const SALT_ROUNDS = 10
const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-cambiar-en-produccion"
const COOKIE_NAME = "usuario_session"
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // 7 días

export type SessionPayload = {
  usuarioId: string
  email: string
  iat: number
  exp: number
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS)
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

export async function createToken(payload: Omit<SessionPayload, "iat" | "exp">): Promise<string> {
  const secret = new TextEncoder().encode(JWT_SECRET)
  const now = Math.floor(Date.now() / 1000)
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt(now)
    .setExpirationTime(now + COOKIE_MAX_AGE)
    .sign(secret)
}

export async function verifyToken(token: string): Promise<SessionPayload | null> {
  try {
    const secret = new TextEncoder().encode(JWT_SECRET)
    const { payload } = await jwtVerify(token, secret)
    return payload as unknown as SessionPayload
  } catch {
    return null
  }
}

export function getCookieName() {
  return COOKIE_NAME
}

export function getCookieMaxAge() {
  return COOKIE_MAX_AGE
}

export function generateSecureToken(): string {
  const array = new Uint8Array(32)
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(array)
  } else {
    for (let i = 0; i < 32; i++) array[i] = Math.floor(Math.random() * 256)
  }
  return Array.from(array, (b) => b.toString(16).padStart(2, "0")).join("")
}
