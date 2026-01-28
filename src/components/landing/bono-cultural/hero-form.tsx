"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function HeroFormBonoCultural() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-card md:p-10">
      <h3 className="mb-6 text-2xl font-bold text-navy">Solicitar trámite</h3>
      <form className="space-y-5">
        <div className="grid gap-2">
          <Label htmlFor="hero-name" className="text-sm font-semibold text-slate-700">
            Nombre completo
          </Label>
          <Input
            id="hero-name"
            placeholder="Tu nombre y apellidos"
            className="h-12 rounded-xl border-2 border-slate-200 focus:border-primary"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hero-email" className="text-sm font-semibold text-slate-700">
            Correo electrónico
          </Label>
          <Input
            id="hero-email"
            type="email"
            placeholder="tu@email.com"
            className="h-12 rounded-xl border-2 border-slate-200 focus:border-primary"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hero-phone" className="text-sm font-semibold text-slate-700">
            Teléfono móvil
          </Label>
          <Input
            id="hero-phone"
            type="tel"
            placeholder="+34 600 000 000"
            className="h-12 rounded-xl border-2 border-slate-200 focus:border-primary"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hero-birth-year" className="text-sm font-semibold text-slate-700">
            Año de nacimiento
          </Label>
          <select
            id="hero-birth-year"
            className="h-12 rounded-xl border-2 border-slate-200 px-4 focus:border-primary focus:outline-none"
          >
            <option value="">Selecciona tu año</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2008">2008</option>
          </select>
        </div>
        <Button
          type="submit"
          className="h-12 w-full rounded-xl bg-primary text-base font-semibold text-white shadow-lg transition-all hover:bg-[#0F7494] hover:shadow-xl"
        >
          Solicitar trámite
        </Button>
        <p className="text-center text-xs text-slate-500">
          Sin compromiso • 100% gratis • Solo pagas si recibes la ayuda
        </p>
      </form>
    </div>
  );
}
