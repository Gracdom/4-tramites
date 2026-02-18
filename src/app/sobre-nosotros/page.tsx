import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Target, Users, Heart, Shield, ArrowRight, Award, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Burocracia CERO",
  description: "Conoce nuestra misión de democratizar el acceso a las ayudas sociales en España. Más de 600 personas confían en nosotros para sus trámites.",
};

export default function SobreNosotrosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[500px] bg-gradient-to-br from-primary via-primary/90 to-primary/80 pt-24 pb-20 text-white md:min-h-[600px] md:pt-32 md:pb-28">
        <div className="absolute inset-0 z-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="container relative z-10 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Democratizamos el acceso a las ayudas sociales en España
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              Nuestra misión es que ninguna persona pierda ayudas por desconocimiento o complejidad burocrática.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="h-14 rounded-full bg-white px-8 text-base font-semibold text-primary shadow-xl hover:bg-white/90"
                asChild
              >
                <Link href="/gestiones">
                  Ver trámites
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-2 border-white px-8 text-base font-semibold text-white transition-all hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="bg-white py-20 md:py-28">
        <div className="container px-4">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <p className="mb-2 text-4xl font-bold text-navy">2.5M€</p>
              <p className="text-slate-600">Conseguidos para clientes</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <p className="mb-2 text-4xl font-bold text-navy">+600</p>
              <p className="text-slate-600">Personas confían en nosotros</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
              </div>
              <p className="mb-2 text-4xl font-bold text-navy">1.729</p>
              <p className="text-slate-600">Días ahorrados en trámites</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 md:py-28">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-navy md:text-3xl">
                Nuestra historia
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Burocracia CERO nació de una necesidad real: simplificar el acceso a ayudas y trámites administrativos en España.
                </p>
                <p>
                  Observamos que miles de personas perdían ayudas económicas importantes simplemente porque desconocían su existencia o porque la burocracia era demasiado compleja.
                </p>
                <p>
                  Por eso creamos una plataforma 100% online donde cualquier persona puede solicitar sus trámites de forma rápida, segura y sin complicaciones.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-card md:h-[500px]">
                <Image
                  src="/hero-image.jpg"
                  alt="Equipo Burocracia CERO"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="bg-white py-20 md:py-28">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-navy md:text-3xl">
              Nuestros valores
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Los principios que guían nuestro trabajo cada día
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-md">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-navy">Misión</h3>
              <p className="leading-relaxed text-slate-600">
                Democratizar el acceso a las ayudas sociales, eliminando barreras burocráticas y asegurando que cada persona reciba lo que le corresponde por derecho.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-md">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-navy">Transparencia</h3>
              <p className="leading-relaxed text-slate-600">
                Sin letra pequeña ni sorpresas. Solo pagas si consigues la ayuda. Siempre informamos claramente de nuestras condiciones y del estado de tu trámite.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-md">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-navy">Seguridad</h3>
              <p className="leading-relaxed text-slate-600">
                Tus datos están protegidos con cifrado SSL de 256 bits. Cumplimos estrictamente con el RGPD y nunca compartimos tu información sin tu consentimiento.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-md">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <CheckCircle2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-navy">Compromiso</h3>
              <p className="leading-relaxed text-slate-600">
                Nos encargamos de todo el proceso, de principio a fin. Nuestro equipo está siempre disponible para resolver tus dudas y acompañarte en cada paso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-primary to-[#0F7494] py-16 text-white md:py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
              ¿Listo para simplificar tus trámites?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Únete a más de 600 personas que ya confían en nosotros
            </p>
            <Button
              size="lg"
              className="h-14 rounded-full bg-white px-10 text-base font-semibold text-primary shadow-xl hover:bg-white/90"
              asChild
            >
              <Link href="/gestiones">Comenzar ahora</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
