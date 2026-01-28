import type { Metadata } from "next";
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

const claves = [
  { icon: Ban, text: "Sin complicaciones" },
  { icon: Shield, text: "Sin burocracia" },
  { icon: Clock, text: "Sin perder el tiempo" },
  { icon: Check, text: "Con garantías" },
];

const pasos = [
  {
    titulo: "Te registras en el formulario",
    descripcion:
      "Es rápido y sencillo. Solo necesitamos tus datos básicos para crear tu perfil personalizado.",
    icon: ClipboardList,
  },
  {
    titulo: "Validamos si la ayuda te pertenece",
    descripcion:
      "Nuestro sistema analiza tu situación y verifica en segundos si cumples los requisitos. Tus datos están protegidos.",
    icon: ShieldCheck,
  },
  {
    titulo: "Aceptas la tramitación con Tu Trámite Fácil",
    descripcion:
      "Una vez confirmada la ayuda, nos autorizas para gestionar todo el proceso por ti.",
    icon: MessageSquare,
  },
  {
    titulo: "Tramitamos tu ayuda social",
    descripcion:
      "Nos encargamos de presentar y gestionar la solicitud ante la administración pública.",
    icon: Send,
  },
  {
    titulo: "Pagas solo si recibes la ayuda",
    descripcion:
      "Solo cobramos cuando el dinero ya está en tu cuenta. Sin riesgos para ti.",
    icon: Euro,
  },
];

const testimonios = [
  {
    texto: "Pensaba que sería muy complicado, pero se encargaron de todo. Me sentí acompañado en todo momento.",
    autor: "Marta Gutiérrez",
  },
  {
    texto: "No sabía si podía pedir el Ingreso Mínimo Vital. Me lo comprobaron rápido y sin compromiso.",
    autor: "Ivonne Salas",
  },
  {
    texto: "Trato humano, claro y profesional. Gracias a ellos ya estoy cobrando la ayuda.",
    autor: "Antonio Rodríguez",
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
      {/* Bandera + Hero */}
      <section className="border-b border-border/40 bg-muted/20">
        <div className="container px-4 py-8 md:py-12">
          <p className="mb-4 text-center text-sm font-medium text-muted-foreground">
            Regístrate en 1 minuto y descubre si te pertenece el Ingreso Mínimo Vital en 2025.
          </p>
          <h1 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            ¿Te pertenece el Ingreso Mínimo Vital de 2025 y aún no lo estás cobrando?
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
            <HeroFormIMV />
          </div>
        </div>
      </section>

      {/* Propuesta de valor */}
      <section className="container px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Recibe el apoyo económico que tu familia necesita, sin trámites complicados.
          </h2>
          <p className="mt-4 text-muted-foreground">
            En Tu Trámite Fácil, te ayudamos a solicitar el Ingreso Mínimo Vital de forma clara, rápida y segura.
            Nos ocupamos de todo el proceso para que no tengas que enfrentarte solo a la administración ni perder tiempo con papeleos.
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
              Mereces un apoyo económico estable para tu hogar.
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2 rounded-xl border-2 border-primary/30 bg-primary/5 px-6 py-4">
                <Home className="h-8 w-8 text-primary" />
                <span className="text-center text-lg font-semibold sm:text-xl">
                  El Ingreso Mínimo Vital es una ayuda destinada a garantizar unos ingresos mínimos
                  a personas y familias en situación de vulnerabilidad económica.
                </span>
              </div>
            </div>
            <Card className="mt-10">
              <CardHeader>
                <CardTitle>Requisitos principales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold">Residencia</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Ser residente legal en España.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Ingresos máximos anuales</h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• 1 adulto: 7.250 €</li>
                    <li>• 1 adulto + 1 menor: 9.400 €</li>
                    <li>• 2 adultos + 2 menores: 14.400 €</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Patrimonio máximo permitido</h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• 1 persona sola: 31.550 €</li>
                    <li>• 2 personas: 37.860 €</li>
                    <li>• 4 personas o más: 50.000 €</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Otros requisitos</h4>
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

      {/* Proceso */}
      <section className="container px-4 py-16 md:py-24">
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Descubre lo fácil y ágil que es conseguir tu Ingreso Mínimo Vital en 2025.
        </h2>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-5">
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
                  <p className="text-sm text-muted-foreground">{paso.descripcion}</p>
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
            Más de 500 personas ya disfrutan de su Ingreso Mínimo Vital en 2025 gracias a Tu Trámite Fácil.
          </h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
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

      {/* Garantía */}
      <section className="container px-4 py-16 md:py-24">
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Democratizar el acceso a las ayudas sociales es nuestra misión.
        </h2>
        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-8">
          {contadores.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-1 text-center">
                <Icon className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">{c.valor}</span>
                <span className="text-sm text-muted-foreground">{c.label}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <Button size="lg" asChild>
            <Link href="#hero-form">Regístrate gratis y revisa tu ayuda</Link>
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
              <details key={i} className="rounded-lg border border-border bg-card">
                <summary className="cursor-pointer px-4 py-4 font-medium">{faq.q}</summary>
                <p className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section
        className="scroll-mt-24 border-t border-border/40 bg-muted/20 pb-24 pt-16 md:pb-32 md:pt-24"
        id="contacto"
      >
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Nuestros asesores están siempre disponibles para ayudarte.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Si tienes dudas o necesitas orientación, escríbenos. Te asesoramos sin compromiso.
            </p>
          </div>
          <div className="mx-auto mt-12 flex justify-center">
            <ContactFormIMV />
          </div>
        </div>
      </section>
    </div>
  );
}
