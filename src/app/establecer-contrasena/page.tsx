"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Loader2, CheckCircle2, Lock } from "lucide-react"

function EstablecerContrasenaContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const token = searchParams.get("token")

  const [password, setPassword] = useState("")
  const [confirmar, setConfirmar] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!token) setError("Falta el enlace de activación. Pide uno nuevo al gestor.")
  }, [token])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!token) return
    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres")
      return
    }
    if (password !== confirmar) {
      setError("Las contraseñas no coinciden")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/auth/establecer-contrasena", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Error al establecer la contraseña")
        return
      }
      setSuccess(true)
      setTimeout(() => router.push("/acceder"), 2000)
    } catch {
      setError("Error de conexión")
    } finally {
      setLoading(false)
    }
  }

  if (!token) {
    return (
      <div className="container px-4 py-12 md:py-16">
        <Button variant="ghost" asChild>
          <Link href="/" className="mb-8 inline-flex gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>
        <div className="mx-auto max-w-md rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-center text-red-600">{error}</p>
          <p className="mt-4 text-center text-sm text-slate-600">
            Contacta con el gestor para que te envíe un nuevo enlace.
          </p>
        </div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="container px-4 py-12 md:py-16">
        <div className="mx-auto max-w-md rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-sm text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-green-500" />
          <h1 className="mt-4 text-xl font-semibold text-navy">Contraseña establecida</h1>
          <p className="mt-2 text-slate-600">Redirigiendo a inicio de sesión...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:py-16">
      <Button variant="ghost" asChild>
        <Link href="/" className="mb-8 inline-flex gap-2">
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>
      </Button>

      <div className="mx-auto max-w-md rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Lock className="h-6 w-6" />
          </div>
        </div>
        <h1 className="text-center text-xl font-semibold text-navy">Establece tu contraseña</h1>
        <p className="mt-2 text-center text-sm text-slate-600">
          Es la primera vez que entras. Elige una contraseña para acceder a tu panel.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <Label htmlFor="password">Contraseña (mín. 8 caracteres)</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1"
              minLength={8}
              required
              disabled={loading}
            />
          </div>
          <div>
            <Label htmlFor="confirmar">Repetir contraseña</Label>
            <Input
              id="confirmar"
              type="password"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
              placeholder="••••••••"
              className="mt-1"
              minLength={8}
              required
              disabled={loading}
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Guardando...
              </>
            ) : (
              "Guardar contraseña"
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default function EstablecerContrasenaPage() {
  return (
    <Suspense fallback={<div className="container py-16 text-center">Cargando...</div>}>
      <EstablecerContrasenaContent />
    </Suspense>
  )
}
