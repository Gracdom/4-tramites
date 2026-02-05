"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { parseJsonResponse } from "@/lib/utils";
import { CheckCircle2, Loader2 } from "lucide-react";

export function HeroFormBonoCultural() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    fechaNacimiento: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/tramites/bono-cultural", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          apellidos: formData.apellidos,
          email: formData.email,
          telefono: formData.telefono,
          fechaNacimiento: formData.fechaNacimiento,
          url: window.location.href,
          dispositivo: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
          utmSource: new URLSearchParams(window.location.search).get("utm_source") || undefined,
          utmMedium: new URLSearchParams(window.location.search).get("utm_medium") || undefined,
          utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign") || undefined,
        }),
      });

      const data = await parseJsonResponse<{ error?: string }>(response);

      if (!response.ok) {
        throw new Error(data?.error || "Error al enviar el formulario");
      }

      setSuccess(true);
      setFormData({ nombre: "", apellidos: "", email: "", telefono: "", fechaNacimiento: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el formulario");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow-card md:p-10">
        <div className="text-center">
          <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-green-500" />
          <h3 className="mb-2 text-xl font-bold text-navy">¡Solicitud enviada!</h3>
          <p className="text-slate-600">
            Te contactaremos pronto para ayudarte con el trámite del Bono Cultural Joven.
          </p>
          <Button
            onClick={() => setSuccess(false)}
            className="mt-6"
            variant="outline"
          >
            Enviar otra solicitud
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-card md:p-10">
      <h3 className="mb-6 text-xl font-bold text-navy">Solicitar trámite</h3>
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid gap-2">
          <Label htmlFor="hero-nombre" className="text-sm font-semibold text-slate-700">
            Nombre
          </Label>
          <Input
            id="hero-nombre"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            disabled={loading}
            required
            className="h-12 rounded-xl border-2 border-slate-200 focus:border-primary"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hero-apellidos" className="text-sm font-semibold text-slate-700">
            Apellidos
          </Label>
          <Input
            id="hero-apellidos"
            name="apellidos"
            placeholder="Tus apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            disabled={loading}
            required
            className="h-12 rounded-xl border-2 border-slate-200 focus:border-primary"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hero-email" className="text-sm font-semibold text-slate-700">
            Correo electrónico
          </Label>
          <Input
            id="hero-email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            required
            className="h-12 rounded-xl border-2 border-slate-200 focus:border-primary"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hero-telefono" className="text-sm font-semibold text-slate-700">
            Teléfono móvil
          </Label>
          <Input
            id="hero-telefono"
            name="telefono"
            type="tel"
            placeholder="+34 600 000 000"
            value={formData.telefono}
            onChange={handleChange}
            disabled={loading}
            required
            className="h-12 rounded-xl border-2 border-slate-200 focus:border-primary"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hero-fechaNacimiento" className="text-sm font-semibold text-slate-700">
            Fecha de nacimiento
          </Label>
          <Input
            id="hero-fechaNacimiento"
            name="fechaNacimiento"
            type="date"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            disabled={loading}
            required
            className="h-12 rounded-xl border-2 border-slate-200 focus:border-primary"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="h-12 w-full rounded-xl bg-primary text-base font-semibold text-white shadow-lg transition-all hover:bg-[#0F7494] hover:shadow-xl disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Enviando...
            </>
          ) : (
            "Solicitar trámite"
          )}
        </Button>
        <p className="text-center text-xs text-slate-500">
          Sin compromiso • 100% gratis • Solo pagas si recibes la ayuda
        </p>
      </form>
    </div>
  );
}
