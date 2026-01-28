"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function HeroFormIMV() {
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
          Te contactaremos en breve para confirmar si te pertenece el Ingreso Mínimo Vital.
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
        Regístrate en 1 minuto y descubre si te pertenece el Ingreso Mínimo Vital en 2025.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="grid gap-2">
          <Label htmlFor="hero-imv-nombre" className="sr-only">
            Nombre
          </Label>
          <Input
            id="hero-imv-nombre"
            name="nombre"
            placeholder="Nombre"
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
          />
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-4 w-full sm:w-auto" disabled={loading}>
        {loading ? "Comprobando…" : "Regístrate y descubre tu ayuda"}
      </Button>
    </form>
  );
}
