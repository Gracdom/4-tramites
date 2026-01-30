"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2 } from "lucide-react";

export function HeroFormIMV() {
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
      const response = await fetch("/api/tramites/ingreso-minimo-vital", {
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el formulario");
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
      <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-500" />
        <p className="font-semibold text-foreground">
          ¡Solicitud enviada con éxito!
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Te contactaremos en breve para confirmar si te pertenece el Ingreso Mínimo Vital.
        </p>
        <Button
          onClick={() => setSuccess(false)}
          className="mt-4"
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
      className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <p className="mb-4 text-sm font-medium text-muted-foreground">
        Regístrate en 1 minuto y descubre si te pertenece el Ingreso Mínimo Vital en 2025.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="hero-imv-nombre" className="sr-only">
            Nombre
          </Label>
          <Input
            id="hero-imv-nombre"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            disabled={loading}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hero-imv-apellidos" className="sr-only">
            Apellidos
          </Label>
          <Input
            id="hero-imv-apellidos"
            name="apellidos"
            placeholder="Apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            disabled={loading}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hero-imv-email" className="sr-only">
            Email
          </Label>
          <Input
            id="hero-imv-email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hero-imv-telefono" className="sr-only">
            Teléfono
          </Label>
          <Input
            id="hero-imv-telefono"
            name="telefono"
            type="tel"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            disabled={loading}
            required
          />
        </div>
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-600">{error}</p>
      )}

      <Button
        type="submit"
        size="lg"
        className="mt-4 w-full sm:w-auto"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Regístrate y descubre tu ayuda"
        )}
      </Button>
    </form>
  );
}
