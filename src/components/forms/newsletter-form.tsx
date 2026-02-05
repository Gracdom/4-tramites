"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { parseJsonResponse } from "@/lib/utils"
import { Mail, Send, CheckCircle2, Loader2 } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes("@")) {
      setError("Por favor, introduce un email válido")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/formulario-home", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          url: window.location.href,
          dispositivo: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
        }),
      })

      const data = await parseJsonResponse<{ error?: string }>(response)

      if (!response.ok) {
        throw new Error(data?.error || "Error al suscribirse")
      }

      setSuccess(true)
      setEmail("")
      
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al suscribirse")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="flex items-center gap-3 rounded-2xl bg-green-50 p-4 text-green-700">
        <CheckCircle2 className="h-6 w-6 shrink-0" />
        <p className="text-sm font-medium">
          ¡Suscripción exitosa! Te mantendremos informado.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <div className="relative flex-1">
        <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <Input
          type="email"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="h-14 rounded-2xl border-2 border-slate-200 pl-12 pr-4 text-base focus:border-primary"
          required
        />
      </div>
      {error && (
        <p className="text-xs text-red-600 sm:absolute sm:bottom-[-20px]">{error}</p>
      )}
      <Button
        type="submit"
        disabled={loading}
        className="h-14 rounded-2xl bg-primary px-8 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#0F7494] hover:shadow-xl disabled:opacity-50 disabled:hover:scale-100"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Suscribir
          </>
        )}
      </Button>
    </form>
  )
}
