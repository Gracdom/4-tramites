import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactPageForm } from "@/components/forms/contact-page-form";
import { CONTACT } from "@/lib/contact";

export const metadata = {
  title: "Contacto | Burocracia Cero",
  description: "Contacta con nosotros por WhatsApp o email. +34 910 20 29 11 · info@burocraciacero.com",
};

export default function ContactoPage() {
  return (
    <div className="container px-4 py-12 md:py-16">
      <Button variant="ghost" asChild>
        <Link href="/" className="mb-8 inline-flex gap-2">
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>
      </Button>

      <div className="mx-auto max-w-2xl">
        <h1 className="text-xl font-semibold tracking-tight">Contacto</h1>
        <p className="mt-2 text-muted-foreground">
          Escríbenos por WhatsApp o por email. Atendemos solo por WhatsApp (no realizamos llamadas ni SMS).
        </p>

        {/* Datos de contacto */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href={CONTACT.whatsappUrl("Hola, tengo una consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-green-400 hover:shadow-md active:scale-[0.98]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">WhatsApp</p>
              <p className="font-semibold text-navy">{CONTACT.phoneDisplay}</p>
              <p className="text-sm text-slate-600">Escríbenos por WhatsApp</p>
            </div>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-4 rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-primary hover:shadow-md active:scale-[0.98]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email</p>
              <p className="font-semibold text-navy">{CONTACT.email}</p>
              <p className="text-sm text-slate-600">Envíanos un correo</p>
            </div>
          </a>
        </div>

        <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
          <strong>Importante:</strong> Solo atendemos por WhatsApp y por email. No realizamos llamadas telefónicas ni SMS.
        </p>

        {/* Formulario */}
        <div className="mt-10">
          <h2 className="mb-4 text-base font-semibold text-navy">Envíanos un mensaje</h2>
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <ContactPageForm />
          </div>
        </div>
      </div>
    </div>
  );
}
