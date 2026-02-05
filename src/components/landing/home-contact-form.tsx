"use client";

import { useState } from "react";
import { MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { CONTACT } from "@/lib/contact";

export function HomeContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      const response = await fetch("/api/formulario-contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          mensaje: formData.mensaje,
          asunto: "Consulta desde la página principal",
          url: window.location.href,
          dispositivo: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
        }),
      });

      const data = await parseJsonResponse<{ error?: string }>(response);

      if (!response.ok) {
        throw new Error(data?.error || "Error al enviar el mensaje");
      }

      setSuccess(true);
      setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-xl border border-white/20 bg-white/5 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-400" />
        <p className="font-medium text-primary-foreground">
          Mensaje enviado correctamente.
        </p>
        <p className="mt-1 text-sm text-primary-foreground/80">
          Nuestros asesores te contactarán pronto.
        </p>
        <Button
          onClick={() => setSuccess(false)}
          className="mt-4"
          variant="outline"
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit} className="grid gap-4 sm:max-w-md">
        <div className="grid gap-2">
          <Label htmlFor="home-nombre" className="text-primary-foreground/90">
            Nombre y apellidos
          </Label>
          <Input
            id="home-nombre"
            name="nombre"
            placeholder="Tu nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            disabled={loading}
            required
            className="border-white/30 bg-white/10 placeholder:text-white/50 focus-visible:ring-primary-foreground"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="home-email" className="text-primary-foreground/90">
            Correo electrónico
          </Label>
          <Input
            id="home-email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            required
            className="border-white/30 bg-white/10 placeholder:text-white/50 focus-visible:ring-primary-foreground"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="home-telefono" className="text-primary-foreground/90">
            Teléfono
          </Label>
          <Input
            id="home-telefono"
            name="telefono"
            type="tel"
            placeholder="600 000 000"
            value={formData.telefono}
            onChange={handleChange}
            disabled={loading}
            className="border-white/30 bg-white/10 placeholder:text-white/50 focus-visible:ring-primary-foreground"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="home-mensaje" className="text-primary-foreground/90">
            ¿En qué te podemos ayudar?
          </Label>
          <Textarea
            id="home-mensaje"
            name="mensaje"
            placeholder="Tu consulta..."
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            disabled={loading}
            required
            className="border-white/30 bg-white/10 placeholder:text-white/50 focus-visible:ring-primary-foreground"
          />
        </div>

        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className="bg-primary-foreground text-brand-dark hover:bg-primary-foreground/90"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Enviar solicitud"
          )}
        </Button>
      </form>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-primary-foreground/80">
          ¿Prefieres hablar ahora?
        </span>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="border-white/40 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
        >
          <a
            href={CONTACT.whatsappUrl("Hola, tengo una consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Contáctanos por WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
