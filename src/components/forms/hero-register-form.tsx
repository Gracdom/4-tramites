"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { parseJsonResponse } from "@/lib/utils"
import { CheckCircle2, Loader2 } from "lucide-react"

export function HeroRegisterForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validar email
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
          // Capturar parámetros UTM si existen
          utmSource: new URLSearchParams(window.location.search).get("utm_source") || undefined,
          utmMedium: new URLSearchParams(window.location.search).get("utm_medium") || undefined,
          utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign") || undefined,
          utmTerm: new URLSearchParams(window.location.search).get("utm_term") || undefined,
          utmContent: new URLSearchParams(window.location.search).get("utm_content") || undefined,
        }),
      })

      const data = await parseJsonResponse<{ error?: string }>(response)

      if (!response.ok) {
        throw new Error(data?.error || "Error al enviar el formulario")
      }

      // Éxito
      setSuccess(true)
      setEmail("")
      
      // Resetear el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el formulario")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="rounded-xl bg-white/80 backdrop-blur-sm p-4 shadow-lg md:p-5 max-w-sm">
        <div className="flex flex-col items-center justify-center py-4 text-center">
          <CheckCircle2 className="h-12 w-12 text-green-500 mb-3" />
          <h3 className="text-base font-semibold text-navy mb-2">
            ¡Registro exitoso!
          </h3>
          <p className="text-sm text-slate-600">
            Te contactaremos pronto para ayudarte con tus trámites.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl bg-white/80 backdrop-blur-sm p-4 shadow-lg md:p-5 max-w-sm">
      <h3 className="mb-3 text-base font-semibold text-navy">Regístrate</h3>
      <form onSubmit={handleSubmit} className="space-y-2.5">
        <Input
          id="hero-email"
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="h-9 rounded-lg border border-slate-300 text-sm focus:border-primary"
          required
        />
        
        {error && (
          <p className="text-xs text-red-600">{error}</p>
        )}
        
        <Button
          type="submit"
          disabled={loading}
          className="h-9 w-full rounded-lg bg-primary text-sm font-medium text-white transition-all hover:bg-[#0F7494] disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Comenzar gratis"
          )}
        </Button>
        
        <p className="text-center text-[10px] text-slate-500">
          Sin compromiso
        </p>
      </form>
    </div>
  )
}
