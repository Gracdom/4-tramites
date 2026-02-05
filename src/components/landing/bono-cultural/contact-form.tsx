"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactFormBonoCultural() {
  return (
    <div className="rounded-3xl border-2 border-slate-100 bg-white p-8 shadow-card md:p-10">
      <h3 className="mb-6 text-xl font-bold text-navy">Solicitar servicio</h3>
      <form className="space-y-5">
        {/* Campos obligatorios */}
        <div className="grid gap-2">
          <Label htmlFor="contact-name" className="text-sm font-semibold text-slate-700">
            Nombre y apellidos *
          </Label>
          <Input
            id="contact-name"
            placeholder="Tu nombre completo"
            required
            className="h-12 rounded-xl border-2 border-slate-200 focus:border-primary"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="contact-email" className="text-sm font-semibold text-slate-700">
            Correo electrónico *
          </Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="tu@email.com"
            required
            className="h-12 rounded-xl border-2 border-slate-200 focus:border-primary"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="contact-phone" className="text-sm font-semibold text-slate-700">
            Teléfono móvil *
          </Label>
          <Input
            id="contact-phone"
            type="tel"
            placeholder="+34 600 000 000"
            required
            className="h-12 rounded-xl border-2 border-slate-200 focus:border-primary"
          />
        </div>

        {/* Campos de validación */}
        <div className="grid gap-2">
          <Label htmlFor="birth-year" className="text-sm font-semibold text-slate-700">
            Año de nacimiento *
          </Label>
          <select
            id="birth-year"
            required
            className="h-12 rounded-xl border-2 border-slate-200 px-4 focus:border-primary focus:outline-none"
          >
            <option value="">Selecciona tu año</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2008">2008</option>
          </select>
        </div>

        <div className="grid gap-2">
          <Label className="text-sm font-semibold text-slate-700">
            ¿Tienes DNI o NIE? *
          </Label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="dni" value="si" className="h-4 w-4 text-primary" required />
              <span className="text-sm text-slate-700">Sí</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="dni" value="no" className="h-4 w-4 text-primary" />
              <span className="text-sm text-slate-700">No</span>
            </label>
          </div>
        </div>

        <div className="grid gap-2">
          <Label className="text-sm font-semibold text-slate-700">
            ¿Resides legalmente en España? *
          </Label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="residencia" value="si" className="h-4 w-4 text-primary" required />
              <span className="text-sm text-slate-700">Sí</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="residencia" value="no" className="h-4 w-4 text-primary" />
              <span className="text-sm text-slate-700">No</span>
            </label>
          </div>
        </div>

        {/* Campo abierto */}
        <div className="grid gap-2">
          <Label htmlFor="contact-message" className="text-sm font-semibold text-slate-700">
            ¿En qué te podemos ayudar?
          </Label>
          <Textarea
            id="contact-message"
            placeholder="Ejemplo: Quiero saber si me corresponde el Bono Cultural Joven"
            rows={4}
            className="resize-none rounded-xl border-2 border-slate-200 focus:border-primary"
          />
        </div>

        {/* Checkboxes */}
        <div className="space-y-3">
          <label className="flex items-start gap-3">
            <input type="checkbox" required className="mt-1 h-4 w-4 rounded text-primary" />
            <span className="text-sm text-slate-600">
              Acepto la <a href="/privacidad" className="text-primary underline">política de privacidad</a> *
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded text-primary" />
            <span className="text-sm text-slate-600">
              Quiero recibir información sobre otras ayudas sociales
            </span>
          </label>
        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-xl bg-primary text-base font-semibold shadow-lg transition-all hover:bg-[#0F7494] hover:shadow-xl"
        >
          Solicitar servicio
        </Button>
      </form>
    </div>
  );
}
