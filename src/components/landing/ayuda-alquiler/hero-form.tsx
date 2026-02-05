"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { parseJsonResponse } from "@/lib/utils";
import { CheckCircle2, Loader2 } from "lucide-react";

export function HeroFormAlquiler() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      const response = await fetch("/api/tramites/ayuda-alquiler", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          apellidos: formData.apellidos,
          email: formData.email,
          telefono: formData.telefono,
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
      setFormData({ nombre: "", apellidos: "", email: "", telefono: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el formulario");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-8 text-center dark:from-green-950/20 dark:to-green-900/20">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-lg font-bold text-foreground">
          ¡Solicitud enviada con éxito!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Te contactaremos en breve para confirmar si puedes acceder a la ayuda al alquiler.
        </p>
        <Button
          onClick={() => setSuccess(false)}
          className="mt-6"
          variant="outline"
        >
          Enviar otra solicitud
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl bg-gradient-to-br from-background to-muted/30 p-6 sm:p-8"
    >
      <div className="mb-6 text-center">
        <h3 className="text-lg font-bold">Comprueba tu ayuda en 1 minuto</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Rellena el formulario y descubre si puedes acceder a una ayuda para tu alquiler en 2025
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="hero-alquiler-nombre" className="text-sm font-medium">
            Nombre
          </Label>
          <Input
            id="hero-alquiler-nombre"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            disabled={loading}
            className="h-11"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hero-alquiler-apellidos" className="text-sm font-medium">
            Apellidos
          </Label>
          <Input
            id="hero-alquiler-apellidos"
            name="apellidos"
            placeholder="Tus apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            disabled={loading}
            className="h-11"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hero-alquiler-email" className="text-sm font-medium">
            Email
          </Label>
          <Input
            id="hero-alquiler-email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            className="h-11"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hero-alquiler-telefono" className="text-sm font-medium">
            Teléfono
          </Label>
          <Input
            id="hero-alquiler-telefono"
            name="telefono"
            type="tel"
            placeholder="600 000 000"
            value={formData.telefono}
            onChange={handleChange}
            disabled={loading}
            className="h-11"
            required
          />
        </div>
      </div>

      {error && (
        <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950/20 dark:text-red-400">
          {error}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="mt-6 h-12 w-full text-base font-semibold shadow-lg transition-all hover:shadow-xl"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          "Descubre tu ayuda ahora →"
        )}
      </Button>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        🔒 Tus datos están protegidos y son confidenciales
      </p>
    </form>
  );
}
