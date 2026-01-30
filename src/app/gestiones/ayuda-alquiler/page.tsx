import type { Metadata } from "next";
import Link from "next/link";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroFormAlquiler } from "@/components/landing/ayuda-alquiler/hero-form";
import { ContactFormAlquiler } from "@/components/landing/ayuda-alquiler/contact-form";

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
      {/* Bandera + Hero */}
      <section className="border-b border-border/40 bg-muted/20">
        <div className="container px-4 py-8 md:py-12">
          <p className="mb-4 text-center text-sm font-medium text-muted-foreground">
            Rellena el formulario en 1 minuto y descubre si puedes acceder a una
            ayuda para tu alquiler en 2025.
          </p>
          <h1 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            ¿Te pertenece una ayuda al alquiler en 2025 y aún no la estás cobrando?
          </h1>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {claves.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {item.text}
                </span>
              );
            })}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            <strong className="text-foreground">+2.500.000 €</strong> conseguidos
            en ayudas sociales para personas como tú.
          </p>
          <div id="hero-form" className="mx-auto mt-10 max-w-2xl scroll-mt-24">
            <HeroFormAlquiler />
          </div>
        </div>
      </section>

      {/* Propuesta de valor */}
      <section className="container px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Recupera tu tranquilidad mientras nosotros nos ocupamos de tu ayuda al alquiler.
          </h2>
          <p className="mt-4 text-muted-foreground">
            En Tu Trámite Fácil, creemos que acceder a una ayuda social no debería
            ser complicado. Te asesoramos, comprobamos tu caso y gestionamos tu
            ayuda de principio a fin, sin desplazamientos ni papeleos innecesarios.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="#hero-form">Regístrate y descubre tu ayuda</Link>
          </Button>
        </div>
      </section>

      {/* Beneficio y requisitos */}
      <section className="border-t border-border/40 bg-muted/20">
        <div className="container px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
              Mereces un apoyo económico para tu alquiler. Nosotros te ayudamos a conseguirlo.
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2 rounded-xl border-2 border-primary/30 bg-primary/5 px-6 py-4">
                <Home className="h-8 w-8 text-primary" />
                <span className="text-center text-lg font-semibold sm:text-xl">
                  Las ayudas al alquiler pueden suponer cientos o incluso miles de
                  euros al año, dependiendo de tu comunidad autónoma y tu situación personal.
                </span>
              </div>
            </div>
            <Card className="mt-10">
              <CardHeader>
                <CardTitle>Requisitos (orientativos)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requisitos.map((r, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <p className="mt-8 text-center text-muted-foreground">
              En solo 2 clics sabrás si puedes acceder a una ayuda para tu alquiler.
              Nuestro objetivo es claro: que no pierdas una ayuda que te pertenece.
            </p>
          </div>
        </div>
      </section>

      {/* Proceso paso a paso */}
      <section className="container px-4 py-16 md:py-24">
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Descubre lo fácil y ágil que es tramitar tu ayuda al alquiler con nosotros.
        </h2>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((paso, i) => {
            const Icon = paso.icon;
            return (
              <Card key={i}>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">
                    {i + 1}. {paso.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">
                    {paso.descripcion}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Testimonios */}
      <section className="border-t border-border/40 bg-muted/20">
        <div className="container px-4 py-16 md:py-24">
          <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Gracias por confiar en Tu Trámite Fácil. Miles de personas ya han
            tramitado su ayuda al alquiler con nosotros.
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonios.map((t, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">&ldquo;{t.texto}&rdquo;</p>
                  <p className="mt-4 font-medium">— {t.autor}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Garantía y autoridad */}
      <section className="container px-4 py-16 md:py-24">
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Democratizar el acceso a las ayudas sociales es nuestra misión.
        </h2>
        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-8">
          {contadores.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-1 text-center"
              >
                <Icon className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">{c.valor}</span>
                <span className="text-sm text-muted-foreground">{c.label}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <Button size="lg" asChild>
            <Link href="#hero-form">Regístrate gratis y revisa tus ayudas</Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/40 bg-muted/20" id="faq">
        <div className="container px-4 py-16 md:py-24">
          <h2 className="mb-12 text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Preguntas frecuentes
          </h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-border bg-card"
              >
                <summary className="cursor-pointer px-4 py-4 font-medium">
                  {faq.q}
                </summary>
                <p className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section
        className="scroll-mt-24 border-t border-border/40 bg-muted/20 pb-24 pt-16 md:pb-32 md:pt-24"
        id="contacto"
      >
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Nuestros asesores están aquí para ayudarte.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Si tienes dudas o prefieres hablar con un asesor antes de
              registrarte, escríbenos sin compromiso.
            </p>
          </div>
          <div className="mx-auto mt-12 flex justify-center">
            <ContactFormAlquiler />
          </div>
        </div>
      </section>
    </div>
  );
}
