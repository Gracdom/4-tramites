"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const WHATSAPP_NUMBER = "34600000000"; // Sustituir por número real
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, tengo dudas sobre la ayuda al alquiler.")}`;

export function ContactFormAlquiler() {
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
      <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-8 text-center dark:from-green-950/20 dark:to-green-900/20">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <svg
            className="h-10 w-10 text-green-600 dark:text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-foreground">
          Solicitud enviada correctamente
        </h3>
        <p className="mt-2 text-muted-foreground">
          Nuestros asesores te contactarán pronto.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit} className="grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="nombre" className="text-sm font-medium">
            Nombre y apellidos
          </Label>
          <Input
            id="nombre"
            name="nombre"
            placeholder="Tu nombre completo"
            className="h-11"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Correo electrónico
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            className="h-11"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="telefono" className="text-sm font-medium">
            Teléfono
          </Label>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            placeholder="600 000 000"
            className="h-11"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="mensaje" className="text-sm font-medium">
            ¿En qué te podemos ayudar?
          </Label>
          <Textarea
            id="mensaje"
            name="mensaje"
            placeholder="Cuéntanos tus dudas sobre la ayuda al alquiler..."
            rows={4}
            className="resize-none"
            required
          />
        </div>
        <Button
          type="submit"
          size="lg"
          className="h-12 w-full text-base font-semibold shadow-lg transition-all hover:shadow-xl"
          disabled={loading}
        >
          {loading ? "Enviando…" : "Enviar consulta →"}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          🔒 Tus datos están protegidos
        </p>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">O</span>
        </div>
      </div>

      <Button
        variant="outline"
        size="lg"
        className="h-12 w-full gap-2 border-green-200 text-green-700 hover:bg-green-50 dark:border-green-900 dark:text-green-400 dark:hover:bg-green-950/20"
        asChild
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-5 w-5" />
          Contáctanos por WhatsApp
        </a>
      </Button>
    </div>
  );
}
