import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ClipboardList,
  ShieldCheck,
  Send,
  Ban,
  Clock,
  Shield,
  Users,
  Euro,
  Calendar,
  MessageSquare,
  Home,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroFormIMV } from "@/components/landing/ingreso-minimo-vital/hero-form";
import { ContactFormIMV } from "@/components/landing/ingreso-minimo-vital/contact-form";

export const metadata: Metadata = {
  title: "Ingreso Mínimo Vital 2025-2026 | ¿Te pertenece? | Tu Trámite Fácil",
  description:
    "Descubre si te pertenece el Ingreso Mínimo Vital. Regístrate en 1 minuto, sin complicaciones. Te ayudamos a solicitarlo de forma clara y segura.",
};

const UNSPLASH = "https://images.unsplash.com";

const claves = [
  { icon: Ban, text: "Sin complicaciones" },
  { icon: Shield, text: "Sin burocracia" },
  { icon: Clock, text: "Sin perder el tiempo" },
  { icon: Check, text: "Con garantías" },
];

const pasos = [
  {
    numero: "1",
    titulo: "Te registras en el formulario",
    descripcion: "Es rápido y sencillo. Solo necesitamos tus datos básicos para crear tu perfil personalizado.",
    icon: ClipboardList,
  },
  {
    numero: "2",
    titulo: "Validamos si la ayuda te pertenece",
    descripcion: "Nuestro sistema analiza tu situación y verifica en segundos si cumples los requisitos. Tus datos están protegidos.",
    icon: ShieldCheck,
  },
  {
    numero: "3",
    titulo: "Aceptas la tramitación con Tu Trámite Fácil",
    descripcion: "Una vez confirmada la ayuda, nos autorizas para gestionar todo el proceso por ti.",
    icon: MessageSquare,
  },
  {
    numero: "4",
    titulo: "Tramitamos tu ayuda social",
    descripcion: "Nos encargamos de presentar y gestionar la solicitud ante la administración pública.",
    icon: Send,
  },
  {
    numero: "5",
    titulo: "Pagas solo si recibes la ayuda",
    descripcion: "Solo cobramos cuando el dinero ya está en tu cuenta. Sin riesgos para ti.",
    icon: Euro,
  },
];

const testimonios = [
  {
    texto: "Pensaba que sería muy complicado, pero se encargaron de todo. Me sentí acompañado en todo momento.",
    autor: "Marta Gutiérrez",
    avatar: "photo-1494790108377-be9c29b29330",
  },
  {
    texto: "No sabía si podía pedir el Ingreso Mínimo Vital. Me lo comprobaron rápido y sin compromiso.",
    autor: "Ivonne Salas",
    avatar: "photo-1438761681033-6461ffad8d80",
  },
  {
    texto: "Trato humano, claro y profesional. Gracias a ellos ya estoy cobrando la ayuda.",
    autor: "Antonio Rodríguez",
    avatar: "photo-1507003211169-0a1dd7228f2d",
  },
];

const contadores = [
  { valor: "2.500.000 €", label: "conseguidos para nuestros clientes", icon: Euro },
  { valor: "+600", label: "personas confían en Tu Trámite Fácil", icon: Users },
  { valor: "+1.729", label: "días ahorrados en gestiones administrativas", icon: Calendar },
];

const faqs = [
  {
    q: "¿Tiene algún coste registrarse?",
    a: "No. Registrarte y que revisemos tu caso es gratuito. Solo cobramos cuando ya has recibido la ayuda en tu cuenta. Sin riesgos para ti.",
  },
  {
    q: "¿Qué pasa si me deniegan el Ingreso Mínimo Vital?",
    a: "Te explicamos las causas de la denegación y, si hay margen, qué opciones tienes (recursos, revisión). Nuestro objetivo es que sepas siempre dónde estás.",
  },
  {
    q: "¿Cuánto tarda la resolución?",
    a: "Los plazos dependen de la Seguridad Social. Tras registrarte, en pocos días te indicamos si cumples requisitos. La resolución oficial puede tardar varias semanas o meses.",
  },
  {
    q: "¿Puedo hablar con un asesor antes de registrarme?",
    a: "Sí. Escríbenos por el formulario o contáctanos por WhatsApp. Te asesoramos sin compromiso.",
  },
];

export default function IngresoMinimoVitalPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Fondo degradado blanco a aguamarina */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-teal-50 to-teal-200 pb-20 pt-16 md:pb-32 md:pt-24">
        {/* Onda decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)"
        }} />
        
        <div className="container relative px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Columna izquierda - Contenido */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
                  ¿Necesitas ayuda con el{" "}
                  <span className="text-primary">Ingreso Mínimo Vital</span> de 2024?
                </h1>
                
                <div className="flex flex-wrap gap-3">
                  {claves.map((item) => {
                    const Icon = item.icon;
                    return (
                      <span
                        key={item.text}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-sm font-medium text-navy backdrop-blur-sm"
                      >
                        <Icon className="h-4 w-4 text-primary" />
                        {item.text}
                      </span>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button size="lg" className="h-12 bg-navy px-8 text-base font-semibold hover:bg-navy/90" asChild>
                    <Link href="#hero-form">Solicita tu ayuda</Link>
                  </Button>
                  <Link href="#proceso" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                    Más información
                  </Link>
                </div>
              </div>
            </div>

            {/* Columna derecha - Composición visual */}
            <div className="relative">
              {/* Imagen circular grande de fondo */}
              <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full shadow-2xl">
                <Image
                  src={`${UNSPLASH}/photo-1573496359142-b8d87734a5a2?w=800&q=85`}
                  alt="Persona mayor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Mockup de teléfono superpuesto */}
              <div className="absolute -right-8 top-1/2 hidden -translate-y-1/2 transform lg:block">
                <div className="relative h-96 w-48 rounded-3xl border-8 border-white bg-white p-4 shadow-2xl">
                  <div className="h-full w-full rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-6">
                    <div className="space-y-3">
                      <div className="h-3 w-20 rounded bg-primary/20" />
                      <div className="h-2 w-32 rounded bg-primary/10" />
                      <div className="h-2 w-28 rounded bg-primary/10" />
                      <div className="mt-4 space-y-2">
                        <div className="h-8 w-full rounded bg-primary/20" />
                        <div className="h-8 w-full rounded bg-primary/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avatares circulares pequeños alrededor */}
              <div className="absolute -left-4 top-8 hidden lg:block">
                <div className="flex -space-x-2">
                  {["photo-1494790108377-be9c29b29330", "photo-1507003211169-0a1dd7228f2d", "photo-1438761681033-6461ffad8d80"].map((id, i) => (
                    <div key={i} className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-lg">
                      <Image
                        src={`${UNSPLASH}/${id}?w=96&h=96&fit=crop&q=80`}
                        alt={`Usuario ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bloque de estadística destacada */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 transform lg:left-auto lg:right-0 lg:translate-x-0">
                <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200">
                  <p className="text-2xl font-bold text-primary">+2.500.000€</p>
                  <p className="text-sm text-muted-foreground">conseguidos en ayudas</p>
                  <Button size="sm" className="mt-3 w-full bg-green-500 hover:bg-green-600" asChild>
                    <Link href="#hero-form">Regístrate ahora</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario Hero */}
          <div id="hero-form" className="mx-auto mt-16 max-w-2xl scroll-mt-24">
            <HeroFormIMV />
          </div>
        </div>
      </section>

      {/* Sección de Propuesta de Valor - Con imagen de manos */}
      <section className="border-t border-primary/20 bg-white py-20 md:py-28">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Columna izquierda - Texto */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
                Recibe el apoyo económico que tu familia necesita, sin trámites complicados.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                En Tu Trámite Fácil, te ayudamos a solicitar el Ingreso Mínimo Vital de forma clara, rápida y segura.
                Nos ocupamos de todo el proceso para que no tengas que enfrentarte solo a la administración ni perder tiempo con papeleos.
              </p>
              <Button size="lg" className="h-12 bg-navy px-8 text-base font-semibold hover:bg-navy/90" asChild>
                <Link href="#hero-form">Regístrate y descubre tu ayuda</Link>
              </Button>
            </div>

            {/* Columna derecha - Imagen de manos */}
            <div className="relative">
              <div className="relative aspect-square w-full overflow-hidden rounded-full shadow-2xl">
                <Image
                  src={`${UNSPLASH}/photo-1573496359142-b8d87734a5a2?w=800&q=85`}
                  alt="Apoyo y ayuda"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Badge superpuesto */}
              <div className="absolute -bottom-4 right-8 rounded-full bg-primary px-6 py-3 shadow-lg">
                <p className="text-sm font-semibold text-white">Solicítala ya</p>
              </div>
              
              <p className="mt-8 text-center text-sm text-muted-foreground">
                Más de 500 personas ya disfrutan de su IMV
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Requisitos */}
      <section className="border-t border-primary/20 bg-gradient-to-b from-primary/5 to-white py-20 md:py-28">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Mereces un apoyo económico estable para tu hogar.
            </h2>
            <p className="mt-4 text-center text-lg text-muted-foreground">
              El Ingreso Mínimo Vital es una ayuda destinada a garantizar unos ingresos mínimos
              a personas y familias en situación de vulnerabilidad económica.
            </p>

            <Card className="mt-10 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-white">
                <CardTitle className="flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-primary" />
                  Requisitos principales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div>
                  <h4 className="font-semibold text-navy">Residencia</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Ser residente legal en España.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Ingresos máximos anuales</h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• 1 adulto: 7.250 €</li>
                    <li>• 1 adulto + 1 menor: 9.400 €</li>
                    <li>• 2 adultos + 2 menores: 14.400 €</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Patrimonio máximo permitido</h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• 1 persona sola: 31.550 €</li>
                    <li>• 2 personas: 37.860 €</li>
                    <li>• 4 personas o más: 50.000 €</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Otros requisitos</h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• Haber solicitado previamente otras ayudas disponibles.</li>
                    <li>• Cumplir con los requisitos establecidos por la Seguridad Social.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8 text-center text-muted-foreground">
              En solo 2 clics sabrás si puedes acceder al Ingreso Mínimo Vital.
              Nuestro objetivo es claro: que recibas la ayuda que te corresponde, sin estrés ni burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Proceso - Fondo aguamarina sólido */}
      <section id="proceso" className="bg-primary py-20 md:py-28">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            {/* Columna izquierda - Título */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                ¿Cómo consigo mi ayuda del Ingreso Mínimo Vital en 2024?
              </h2>
              <p className="text-lg text-white/90">
                Un proceso simple y transparente en 5 pasos.
              </p>
            </div>

            {/* Columna derecha - Pasos numerados */}
            <div className="space-y-4">
              {pasos.map((paso, i) => {
                const Icon = paso.icon;
                return (
                  <Card key={i} className="border-2 border-white/20 bg-white shadow-lg">
                    <CardContent className="flex gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-2xl font-bold text-white">
                        {paso.numero}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-navy">{paso.titulo}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{paso.descripcion}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-white/90">Queremos que recibas la ayuda que te pertenece</p>
            <Button size="lg" variant="secondary" className="h-12 bg-white px-8 text-base font-semibold text-primary hover:bg-white/90" asChild>
              <Link href="#hero-form">Verificar elegibilidad</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de Compromiso */}
      <section className="bg-white py-16 md:py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xl font-bold text-navy md:text-2xl">
              Estamos comprometidos con que consigas tu ayuda, como el Ingreso Mínimo Vital, para personas como tú.
            </p>
            <Button size="lg" className="mt-6 h-12 bg-green-500 px-8 text-base font-semibold hover:bg-green-600" asChild>
              <Link href="#hero-form">Quiero mi ayuda</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="border-t border-primary/20 bg-white py-20 md:py-28">
        <div className="container px-4">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Más de 500 personas ya disfrutan de su Ingreso Mínimo Vital en 2025 gracias a Tu Trámite Fácil.
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-3">
            {testimonios.map((t, i) => (
              <Card key={i} className="border-2 border-primary/20 shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={`${UNSPLASH}/${t.avatar}?w=128&h=128&fit=crop&q=80`}
                        alt={t.autor}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{t.autor}</p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">&ldquo;{t.texto}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Estadísticas */}
      <section className="border-t border-primary/20 bg-white py-20 md:py-28">
        <div className="container px-4">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Democratizar el acceso a las ayudas sociales es nuestra misión.
          </h2>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-3">
            {contadores.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-navy md:text-4xl">{c.valor}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{c.label}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 flex justify-center">
            <Button size="lg" className="h-12 bg-green-500 px-8 text-base font-semibold hover:bg-green-600" asChild>
              <Link href="#hero-form">Regístrate gratis y revisa tu ayuda</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección FAQ y Contacto lado a lado */}
      <section className="border-t border-primary/20 bg-gradient-to-b from-primary/5 to-white py-20 md:py-28" id="contacto">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Columna izquierda - Formulario de Contacto */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Nuestros asesores están siempre disponibles para ayudarte.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Si tienes dudas o necesitas orientación, escríbenos. Te asesoramos sin compromiso.
              </p>
              <div className="mt-8">
                <ContactFormIMV />
              </div>
            </div>

            {/* Columna derecha - FAQ */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Preguntas frecuentes
              </h2>
              <div className="mt-8 space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group rounded-lg border-2 border-teal-100 bg-white">
                    <summary className="cursor-pointer px-6 py-4 font-medium text-navy transition-colors hover:bg-teal-50">
                      {faq.q}
                      <span className="float-right text-teal-600 transition-transform group-open:rotate-180">
                        ↓
                      </span>
                    </summary>
                    <div className="border-t border-teal-100 px-6 py-4">
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
