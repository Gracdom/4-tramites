"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simular envío; aquí conectarías con tu backend/API
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-border bg-muted/30 p-8 text-center">
        <p className="font-medium text-foreground">
          Solicitud enviada correctamente.
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Nuestros asesores te contactarán pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 sm:max-w-xl">
      <div className="grid gap-2">
        <Label htmlFor="nombre">Nombre y apellidos</Label>
        <Input
          id="nombre"
          name="nombre"
          placeholder="Tu nombre completo"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="telefono">Teléfono</Label>
        <Input
          id="telefono"
          name="telefono"
          type="tel"
          placeholder="600 000 000"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="mensaje">
          ¿En qué te podemos ayudar? (Escribe tu duda sobre el cheque bebé)
        </Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          placeholder="Tu consulta..."
          rows={4}
          required
        />
      </div>
      <Button type="submit" size="lg" disabled={loading}>
        {loading ? "Enviando…" : "Enviar solicitud"}
      </Button>
    </form>
  );
}
