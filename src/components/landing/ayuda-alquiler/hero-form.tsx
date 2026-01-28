"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function HeroFormAlquiler() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
        <p className="font-semibold text-foreground">
          ¡Listo! Revisaremos tu perfil.
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Te contactaremos en breve para confirmar si puedes acceder a la ayuda al alquiler.
        </p>
        <Button asChild className="mt-4" variant="outline">
          <Link href="#contacto">Enviar otra consulta</Link>
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
        Rellena en 1 minuto y descubre si puedes acceder a una ayuda para tu alquiler en 2025.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="grid gap-2">
          <Label htmlFor="hero-alquiler-nombre" className="sr-only">
            Nombre
          </Label>
          <Input
            id="hero-alquiler-nombre"
            name="nombre"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hero-alquiler-email" className="sr-only">
            Email
          </Label>
          <Input
            id="hero-alquiler-email"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hero-alquiler-telefono" className="sr-only">
            Teléfono
          </Label>
          <Input
            id="hero-alquiler-telefono"
            name="telefono"
            type="tel"
            placeholder="Teléfono"
          />
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-4 w-full sm:w-auto" disabled={loading}>
        {loading ? "Comprobando…" : "Regístrate y descubre tu ayuda"}
      </Button>
    </form>
  );
}
