"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { parseJsonResponse } from "@/lib/utils";

export function ContactPageForm() {
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/formulario-contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          mensaje: formData.mensaje,
          asunto: "Contacto desde la página de contacto",
          url: typeof window !== "undefined" ? window.location.href : "",
          dispositivo: typeof navigator !== "undefined" && /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
        }),
      });

      const data = await parseJsonResponse<{ error?: string }>(response);
      if (!response.ok) throw new Error(data?.error || "Error al enviar el mensaje");

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
      <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6 text-center dark:border-green-800 dark:bg-green-950/30">
        <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-green-600 dark:text-green-400" />
        <p className="font-semibold text-green-800 dark:text-green-200">Mensaje enviado correctamente.</p>
        <p className="mt-1 text-sm text-green-700 dark:text-green-300">Te responderemos por WhatsApp o por email.</p>
        <Button type="button" variant="outline" className="mt-4" onClick={() => setSuccess(false)}>
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-2">
        <Label htmlFor="contact-nombre">Nombre y apellidos</Label>
        <Input
          id="contact-nombre"
          name="nombre"
          placeholder="Tu nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          disabled={loading}
          required
          className="h-12 rounded-xl border-2"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="contact-email">Correo electrónico</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
          required
          className="h-12 rounded-xl border-2"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="contact-telefono">Teléfono (para WhatsApp)</Label>
        <Input
          id="contact-telefono"
          name="telefono"
          type="tel"
          placeholder="600 000 000"
          value={formData.telefono}
          onChange={handleChange}
          disabled={loading}
          className="h-12 rounded-xl border-2"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="contact-mensaje">¿En qué te podemos ayudar?</Label>
        <Textarea
          id="contact-mensaje"
          name="mensaje"
          placeholder="Escribe tu consulta..."
          rows={5}
          value={formData.mensaje}
          onChange={handleChange}
          disabled={loading}
          required
          className="resize-none rounded-xl border-2"
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button type="submit" size="lg" disabled={loading} className="h-12 w-full rounded-xl font-semibold sm:w-auto">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Enviar mensaje
          </>
        )}
      </Button>
    </form>
  );
}
