import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  ClipboardList,
  ShieldCheck,
  Send,
  Home,
  Ban,
  Globe,
  Clock,
  UserCheck,
  Users,
  Euro,
  Calendar,
  MessageSquare,
  Zap,
  Shield,
  ArrowRight,
  Key,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroFormAlquiler } from "@/components/landing/ayuda-alquiler/hero-form";
import { ContactFormAlquiler } from "@/components/landing/ayuda-alquiler/contact-form";

const UNSPLASH = "https://images.unsplash.com";

export const metadata: Metadata = {
  title: "Ayuda al Alquiler 2025 | ¿Te corresponde? | Tu Trámite Fácil",
  description:
    "Descubre si puedes acceder a una ayuda para tu alquiler en 2025. Trámite 100% online, sin burocracia. Regístrate en 1 minuto.",
};

const claves = [
  { icon: Ban, text: "Sin burocracia" },
  { icon: Globe, text: "Trámite 100% online" },
  { icon: Clock, text: "Ahorra tiempo y estrés" },
  { icon: UserCheck, text: "Acompañamiento real" },
];

const pasos = [
  {
    titulo: "Te registras en el formulario",
    descripcion:
      "Solo necesitamos tus datos básicos para analizar tu caso. Es rápido y sin compromiso.",
    icon: ClipboardList,
  },
  {
    titulo: "Validamos tu ayuda",
    descripcion:
      "Nuestro sistema y equipo especializado revisan si cumples los requisitos según tu comunidad autónoma.",
    icon: ShieldCheck,
  },
  {
    titulo: "Te asesoramos de forma personalizada",
    descripcion:
      "Un asesor revisa contigo las opciones disponibles y resuelve tus dudas con total claridad.",
    icon: MessageSquare,
  },
  {
    titulo: "Tramitamos tu ayuda",
    descripcion:
      "Nos encargamos de toda la gestión administrativa ante la administración. Tú solo esperas la resolución.",
    icon: Send,
  },
];

const requisitos = [
  "Tener un contrato de alquiler en vigor.",
  "Cumplir los requisitos económicos establecidos por tu comunidad.",
  "Ser mayor o menor de 35 años (según el tipo de ayuda).",
  "Ayudas disponibles tanto para jóvenes como para mayores de 35 años.",
  "Compatibilidad con programas como el Programa Estatal de Vivienda o el Bono Alquiler Joven.",
];

const testimonios = [
  {
    texto: "Me ayudaron a solicitar la ayuda al alquiler para personas mayores. El trato fue humano, cercano y muy profesional. Me sentí acompañada en todo momento.",
    autor: "Martha García",
  },
  {
    texto: "Pensaba que no podía optar a ninguna ayuda y resultó que sí. Me lo explicaron todo con mucha claridad.",
    autor: "Ivonne Sánchez",
  },
  {
    texto: "Atención impecable desde el primer momento. Se nota que se implican de verdad en cada trámite.",
    autor: "Cristian Soler",
  },
  {
    texto: "Me consiguieron 1.500 € encargándose absolutamente de todo. Un servicio de 10.",
    autor: "Eva Mª Pardal",
  },
  {
    texto: "Todo online y sin desplazamientos. Justo lo que necesitaba.",
    autor: "Paqui Salazar",
  },
];

const contadores = [
  { valor: "2.500.000 €", label: "conseguidos para nuestros clientes", icon: Euro },
  { valor: "+600", label: "personas confían en Tu Trámite Fácil", icon: Users },
  { valor: "+1.729", label: "días ahorrados en gestiones administrativas", icon: Calendar },
];

const faqs = [
  {
    q: "¿Tiene coste registrarse?",
    a: "Registrarte y que revisemos tu caso es gratuito. Solo si cumples requisitos y decides que tramitemos tu ayuda, te informamos de las condiciones del servicio.",
  },
  {
    q: "¿Qué pasa si me deniegan la ayuda?",
    a: "Te explicamos las causas y, si hay margen, qué opciones tienes (recursos, otras ayudas). Nuestro objetivo es que sepas siempre dónde estás.",
  },
  {
    q: "¿En cuánto tiempo sabré si me corresponde?",
    a: "Tras registrarte, en pocos días te indicamos si, en principio, cumples requisitos. Los plazos de resolución dependen de cada administración.",
  },
  {
    q: "¿Puedo hablar con un asesor?",
    a: "Sí. Si prefieres hablar antes de registrarte, escríbenos por el formulario o contáctanos por WhatsApp. Te respondemos sin compromiso.",
  },
];

export default function AyudaAlquilerPage() {
  return (
    <div className="flex flex-col">
      {/* Banner tipo referencia: barra superior + hero con imagen */}
      {/* Barra superior informativa */}
      <div className="bg-primary text-white">
        <div className="container flex flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:gap-4 md:px-6">
          <p className="flex flex-wrap items-center justify-center gap-1.5 text-center text-xs font-medium sm:justify-start sm:text-sm">
            <span className="hidden sm:inline" aria-hidden>👈</span>
            <span className="font-semibold">Mereces tu ayuda social</span>
            <span className="hidden text-white/70 sm:inline">|</span>
            <span className="inline-flex items-center gap-1">
              <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Ágil
            </span>
            <span className="text-white/70">|</span>
            <span className="inline-flex items-center gap-1">
              <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Seguro
            </span>
            <span className="text-white/70">|</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Rápido
            </span>
            <span className="hidden text-white/70 md:inline">|</span>
            <span className="hidden text-white/90 md:inline">Crea tu perfil gratis para descubrirla</span>
          </p>
          <Button
            asChild
            className="h-10 shrink-0 rounded-full bg-white px-5 text-sm font-semibold text-navy shadow-lg transition-all active:scale-95 hover:bg-white/95 md:h-11 md:px-6"
          >
            <Link href="#hero-form">
              Crear mi perfil
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section - Estilo Cheque Bebé */}
      <section className="relative min-h-[700px] bg-gradient-to-br from-teal-50 via-white to-teal-50 pt-32 pb-20 md:min-h-[800px] md:pb-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/alquiler-banner.png"
            alt="Vivienda y bienestar"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>

        <div className="container relative z-10 px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Key className="h-4 w-4" />
                Ayuda al Alquiler
              </div>

              <h1 className="mb-6 text-2xl font-semibold leading-tight text-navy md:text-3xl lg:text-4xl">
                Ayuda al Alquiler
                <br />
                <span className="text-primary">Hasta 3.000€ al año</span>
              </h1>

              <p className="mb-4 text-xl font-semibold text-navy">
                ¿Te corresponde una ayuda para tu alquiler?
              </p>

              <p className="mb-8 text-lg text-slate-600">
                Las ayudas al alquiler pueden suponer cientos o miles de euros al año. Te ayudamos a comprobar si cumples requisitos y a tramitarlo sin complicaciones.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="h-14 rounded-full bg-primary px-8 text-base font-semibold shadow-lg transition-all hover:bg-[#0F7494] hover:shadow-xl"
                  asChild
                >
                  <Link href="#hero-form">Comenzar gratis</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-full border-2 border-navy px-8 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white"
                  asChild
                >
                  <Link href="#proceso">Ver más información</Link>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-2xl bg-white p-4 text-center shadow-card">
                  <ClipboardList className="mx-auto mb-2 h-8 w-8 text-primary" />
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
                  <Check className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <p className="text-xs font-semibold text-navy">Aprobación</p>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <HeroFormAlquiler />
            </div>
          </div>
        </div>
      </section>

      <section id="hero-form" className="relative z-20 -mt-32">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {/* Cards de contacto aquí si es necesario */}
          </div>
        </div>
      </section>

      {/* Propuesta de valor mejorada */}
      <section className="container px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              ✨ Tu tranquilidad es nuestra prioridad
            </div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
              Recupera tu tranquilidad mientras{" "}
              <span className="text-primary">nosotros nos ocupamos</span> de tu ayuda al alquiler
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              En Tu Trámite Fácil, creemos que acceder a una ayuda social no debería
              ser complicado. Te asesoramos, comprobamos tu caso y gestionamos tu
              ayuda de principio a fin, sin desplazamientos ni papeleos innecesarios.
            </p>
          </div>

          {/* Cards de valor */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="group rounded-xl border border-border bg-gradient-to-br from-background to-muted/20 p-6 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-semibold">100% Seguro</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tus datos están protegidos y seguros
              </p>
            </div>
            <div className="group rounded-xl border border-border bg-gradient-to-br from-background to-muted/20 p-6 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-semibold">Rápido</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Respuesta en menos de 48 horas
              </p>
            </div>
            <div className="group rounded-xl border border-border bg-gradient-to-br from-background to-muted/20 p-6 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <UserCheck className="h-6 w-6" />
              </div>
              <h3 className="font-semibold">Personal</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Asesoramiento personalizado
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg" asChild>
              <Link href="#hero-form">Regístrate y descubre tu ayuda →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Beneficio y requisitos mejorado */}
      <section className="border-y border-border/40 bg-gradient-to-b from-muted/30 to-muted/10">
        <div className="container px-4 py-20 md:py-28">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
                Mereces un apoyo económico para tu alquiler.{" "}
                <span className="text-primary">Nosotros te ayudamos a conseguirlo.</span>
              </h2>
            </div>

            {/* Destacado de beneficio */}
            <div className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background shadow-xl ring-1 ring-primary/10">
              <div className="flex flex-col items-center gap-6 p-8 sm:flex-row sm:p-10">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary/10 shadow-lg ring-1 ring-primary/20">
                  <Home className="h-10 w-10 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xl font-semibold sm:text-2xl">
                    Hasta <span className="text-primary">3.000€ al año</span>
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Las ayudas al alquiler pueden suponer cientos o incluso miles de
                    euros al año, dependiendo de tu comunidad autónoma y tu situación personal.
                  </p>
                </div>
              </div>
            </div>

            {/* Requisitos mejorados */}
            <div className="mt-12">
              <Card className="overflow-hidden shadow-lg">
                <CardHeader className="bg-gradient-to-r from-muted/50 to-muted/30">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <ClipboardList className="h-5 w-5 text-primary" />
                    Requisitos básicos (orientativos)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y divide-border">
                    {requisitos.map((r, i) => (
                      <li key={i} className="flex gap-4 px-6 py-4 transition-colors hover:bg-muted/30">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm leading-relaxed sm:text-base">{r}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Call to action */}
            <div className="mt-10 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 p-6 text-center ring-1 ring-primary/10">
              <p className="text-lg font-medium">
                En solo <strong className="text-primary">2 clics</strong> sabrás si puedes acceder a una ayuda para tu alquiler
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Nuestro objetivo es claro: que no pierdas una ayuda que te pertenece
              </p>
              <Button size="lg" className="mt-4" asChild>
                <Link href="#hero-form">Comprobar mi ayuda ahora →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso paso a paso mejorado */}
      <section className="container px-4 py-20 md:py-28">
        <div className="text-center">
          <div className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            🚀 Proceso simple en 4 pasos
          </div>
          <h2 className="mx-auto max-w-3xl text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
            Descubre lo fácil y ágil que es tramitar tu{" "}
            <span className="text-primary">ayuda al alquiler</span> con nosotros
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((paso, i) => {
            const Icon = paso.icon;
            return (
              <div key={i} className="relative">
                {/* Línea conectora (solo visible en desktop) */}
                {i < pasos.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-primary/50 to-primary/20 lg:block" />
                )}
                
                <Card className="group relative h-full overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl">
                  <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-br from-primary/10 to-transparent" />
                  <CardHeader>
                    {/* Número del paso */}
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-5xl font-bold text-primary/10">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {paso.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {paso.descripcion}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" variant="outline" className="h-12 gap-2 px-8" asChild>
            <Link href="#hero-form">
              <Clock className="h-4 w-4" />
              Empezar ahora - Solo 1 minuto
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonios mejorados */}
      <section className="border-t border-border/40 bg-gradient-to-b from-muted/20 to-background">
        <div className="container px-4 py-20 md:py-28">
          <div className="text-center">
            <div className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              ⭐ Más de 600 personas satisfechas
            </div>
            <h2 className="mx-auto max-w-3xl text-xl font-semibold tracking-tight sm:text-2xl">
              Gracias por confiar en{" "}
              <span className="text-primary">Tu Trámite Fácil</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Miles de personas ya han tramitado su ayuda al alquiler con nosotros
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonios.map((t, i) => (
              <Card key={i} className="group relative overflow-hidden transition-all hover:shadow-xl">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl" />
                <CardContent className="relative pt-6">
                  {/* Icono de comillas */}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  
                  {/* Estrellas */}
                  <div className="mb-3 flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <svg
                        key={idx}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="leading-relaxed text-muted-foreground">
                    &ldquo;{t.texto}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                      {t.autor.charAt(0)}
                    </div>
                    <p className="font-semibold">{t.autor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Garantía y autoridad mejorado */}
      <section className="container px-4 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
              Democratizar el acceso a las ayudas sociales{" "}
              <span className="text-primary">es nuestra misión</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Trabajamos cada día para que nadie pierda una ayuda que le corresponde
            </p>
          </div>

          {/* Contadores mejorados */}
          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
            {contadores.map((c, i) => {
              const Icon = c.icon;
              return (
                <Card
                  key={i}
                  className="group overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl"
                >
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg transition-transform group-hover:scale-110">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="mb-1 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-4xl font-bold text-transparent">
                      {c.valor}
                    </div>
                    <p className="text-sm leading-snug text-muted-foreground">
                      {c.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA destacado */}
          <div className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/90 p-8 shadow-2xl sm:p-12">
            <div className="relative z-10 text-center">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                ¿Listo para comprobar tu ayuda?
              </h3>
              <p className="mt-3 text-primary-foreground/90">
                Regístrate gratis y descubre en minutos si puedes acceder a tu ayuda al alquiler
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="mt-6 h-12 px-8 text-base shadow-lg"
                asChild
              >
                <Link href="#hero-form">
                  Regístrate gratis y revisa tus ayudas →
                </Link>
              </Button>
            </div>
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          </div>
        </div>
      </section>

      {/* FAQ mejorado */}
      <section className="border-t border-border/40 bg-gradient-to-b from-muted/20 to-muted/10" id="faq">
        <div className="container px-4 py-20 md:py-28">
          <div className="text-center">
            <div className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              💬 Resolvemos tus dudas
            </div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Preguntas frecuentes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Todo lo que necesitas saber sobre la ayuda al alquiler
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group overflow-hidden rounded-xl border-2 border-border bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <summary className="flex cursor-pointer items-start gap-4 px-6 py-5 font-medium transition-colors hover:bg-muted/50">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-sm font-bold">?</span>
                  </div>
                  <span className="flex-1">{faq.q}</span>
                  <svg
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="border-t border-border/50 bg-muted/30 px-6 py-4">
                  <p className="pl-10 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              ¿Tienes más preguntas?{" "}
              <Link
                href="#contacto"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Contáctanos sin compromiso
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Formulario de contacto mejorado */}
      <section
        className="scroll-mt-24 border-t border-border/40 bg-gradient-to-b from-background to-muted/20 pb-24 pt-20 md:pb-32 md:pt-28"
        id="contacto"
      >
        <div className="container px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Columna izquierda - Información */}
              <div>
                <div className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  📞 Estamos aquí para ayudarte
                </div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Nuestros asesores están aquí para ayudarte
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Si tienes dudas o prefieres hablar con un asesor antes de
                  registrarte, escríbenos sin compromiso.
                </p>

                {/* Beneficios de contactar */}
                <div className="mt-8 space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <UserCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Atención personalizada</h3>
                      <p className="text-sm text-muted-foreground">
                        Un asesor experto revisará tu caso de forma individual
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Respuesta rápida</h3>
                      <p className="text-sm text-muted-foreground">
                        Te contactamos en menos de 48 horas hábiles
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Sin compromiso</h3>
                      <p className="text-sm text-muted-foreground">
                        Consulta sin coste y decide con tranquilidad
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna derecha - Formulario */}
              <div className="rounded-2xl border-2 border-border bg-card p-6 shadow-xl sm:p-8">
                <ContactFormAlquiler />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
