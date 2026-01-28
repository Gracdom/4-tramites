"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const WHATSAPP_NUMBER = "34600000000";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, tengo una consulta.")}`;

export function HomeContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-white/20 bg-white/5 p-8 text-center">
        <p className="font-medium text-primary-foreground">
          Mensaje enviado correctamente.
        </p>
        <p className="mt-1 text-sm text-primary-foreground/80">
          Nuestros asesores te contactarán pronto.
        </p>
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
            required
            className="border-white/30 bg-white/10 placeholder:text-white/50 focus-visible:ring-primary-foreground"
          />
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className="bg-primary-foreground text-brand-dark hover:bg-primary-foreground/90"
        >
          {loading ? "Enviando…" : "Enviar solicitud"}
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
            href={WHATSAPP_URL}
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
