import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  FileCheck,
  ShieldCheck,
  Baby,
  Clock,
  Zap,
  MapPin,
  ArrowRight,
  Users,
  Euro,
  Calendar,
  Star,
  Phone,
  Mail,
  CheckCircle2,
  Award,
  Heart,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroForm } from "@/components/landing/cheque-bebe/hero-form";

export const metadata: Metadata = {
  title: "Cheque Bebé 100€/mes | ¿Te corresponde? | Gestiones España",
  description:
    "Hasta 100€ al mes por hijo menor de 3 años. Comprueba en 1 minuto si te pertenece la ayuda. Sin complicaciones, trámite rápido y sin desplazamientos.",
};

export default function ChequeBebePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative min-h-[700px] bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-20 md:min-h-[800px] md:pb-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop"
            alt="Madre con bebé"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>

        <div className="container relative z-10 px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Baby className="h-4 w-4" />
                Ayuda para tu bebé
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight text-navy md:text-5xl lg:text-6xl">
                Cheque Bebé
                <br />
                <span className="text-primary">Hasta 100€ al mes</span>
              </h1>

              <p className="mb-4 text-xl font-semibold text-navy">
                ¿Te pertenecen hasta 100€ al mes por tu bebé?
              </p>

              <p className="mb-8 text-lg text-slate-600">
                Gestiona trámites, ayudas al alquiler, cheque bebé y más. Sin complicaciones y 100% online.
              </p>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-600">
                  +2.500 usuarios satisfechos
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="h-14 rounded-full bg-primary px-8 text-base font-semibold shadow-lg transition-all hover:bg-[#0F7494] hover:shadow-xl"
                  asChild
                >
                  <Link href="#formulario">Comenzar gratis</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-full border-2 border-navy px-8 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white"
                  asChild
                >
                  <Link href="#como-funciona">Ver trámites</Link>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-2xl bg-white p-4 text-center shadow-card">
                  <FileCheck className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <p className="text-xs font-semibold text-navy">Tramitación</p>
                </div>
                <div className="rounded-2xl bg-white p-4 text-center shadow-card">
                  <Users className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <p className="text-xs font-semibold text-navy">Asesoría</p>
                </div>
                <div className="rounded-2xl bg-white p-4 text-center shadow-card">
                  <ShieldCheck className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <p className="text-xs font-semibold text-navy">Verificación</p>
                </div>
                <div className="rounded-2xl bg-white p-4 text-center shadow-card">
                  <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <p className="text-xs font-semibold text-navy">Aprobación</p>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <HeroForm />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-32">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            <div className="group rounded-3xl bg-white p-6 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-navy">Atención telefónica</h3>
              <p className="mb-4 text-sm text-slate-600">
                Estamos disponibles para resolver tus dudas
              </p>
              <a
                href="tel:+34900000000"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-[#0F7494]"
              >
                +34 900 000 000
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="group rounded-3xl bg-white p-6 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-navy">Email directo</h3>
              <p className="mb-4 text-sm text-slate-600">
                Escríbenos y te respondemos en 24 horas
              </p>
              <a
                href="mailto:info@gestionesespana.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-[#0F7494]"
              >
                info@gestionesespana.com
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="group rounded-3xl bg-white p-6 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-navy">Horario</h3>
              <p className="mb-4 text-sm text-slate-600">
                Lunes a Viernes
              </p>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                9:00 - 18:00
                <ArrowRight className="h-4 w-4" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-white py-20 md:py-32">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
              ¿Cómo funciona el Cheque Bebé?
            </h2>
            <p className="mb-12 text-lg text-slate-600">
              Te ayudamos a solicitar tu ayuda en 3 sencillos pasos
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative text-center">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-2xl font-bold text-primary">
                  1
                </div>
                <h3 className="mb-3 text-xl font-bold text-navy">Regístrate</h3>
                <p className="text-slate-600">
                  Completa el formulario con tus datos básicos en menos de 1 minuto
                </p>
              </div>

              <div className="relative text-center">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-2xl font-bold text-primary">
                  2
                </div>
                <h3 className="mb-3 text-xl font-bold text-navy">Verificamos</h3>
                <p className="text-slate-600">
                  Nuestro equipo revisa tu caso y verifica si cumples los requisitos
                </p>
              </div>

              <div className="relative text-center">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-2xl font-bold text-primary">
                  3
                </div>
                <h3 className="mb-3 text-xl font-bold text-navy">Te ayudamos</h3>
                <p className="text-slate-600">
                  Gestionamos todo el trámite y te acompañamos hasta la aprobación
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="bg-gradient-to-br from-navy to-[#0A2540] py-20 text-white md:py-32">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Beneficios del Cheque Bebé
            </h2>
            <p className="mb-12 text-lg text-blue-100">
              Apoyo económico para familias con hijos menores de 3 años
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <Euro className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-bold">Hasta 100€/mes</h3>
                <p className="text-sm text-blue-100">
                  Por cada hijo menor de 3 años
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <Calendar className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-bold">Hasta 3 años</h3>
                <p className="text-sm text-blue-100">
                  Mientras tu hijo cumpla los requisitos
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <Zap className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-bold">Trámite rápido</h3>
                <p className="text-sm text-blue-100">
                  Proceso simplificado y sin complicaciones
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <Shield className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-bold">100% seguro</h3>
                <p className="text-sm text-blue-100">
                  Tus datos están protegidos
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <Award className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-bold">Asesoramiento</h3>
                <p className="text-sm text-blue-100">
                  Te acompañamos en todo el proceso
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <Heart className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-bold">Sin coste</h3>
                <p className="text-sm text-blue-100">
                  Servicio gratuito para ti
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="formulario" className="bg-slate-50 py-20 md:py-32">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
                Solicita tu Cheque Bebé
              </h2>
              <p className="text-lg text-slate-600">
                Completa el formulario y nos pondremos en contacto contigo
              </p>
            </div>

            <HeroForm />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-primary to-[#0F7494] p-8 text-white md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-bold">
                  ¿Tienes dudas?
                </h2>
                <p className="mb-6 text-blue-100">
                  Nuestro equipo está disponible para ayudarte con cualquier consulta sobre el Cheque Bebé
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary"
                    asChild
                  >
                    <Link href="tel:+34900000000">
                      <Phone className="mr-2 h-5 w-5" />
                      Llamar ahora
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-blue-50"
                    asChild
                  >
                    <Link href="mailto:info@gestionesespana.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Enviar email
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <MapPin className="h-6 w-6" />
                    <span className="font-semibold">Oficinas en toda España</span>
                  </div>
                  <div className="mb-4 flex items-center gap-3">
                    <Clock className="h-6 w-6" />
                    <span className="font-semibold">Lun-Vie: 9:00-18:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6" />
                    <span className="font-semibold">+2.500 familias ayudadas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
