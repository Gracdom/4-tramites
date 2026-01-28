import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Users, Award, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroFormBonoCultural } from "@/components/landing/bono-cultural/hero-form";
import { ContactFormBonoCultural } from "@/components/landing/bono-cultural/contact-form";

export const metadata: Metadata = {
  title: "Bono Cultural Joven 2025 - Hasta 400€ | Gestiones España",
  description: "Consigue tu Bono Cultural Joven de 400€. Te ayudamos con todos los trámites de forma rápida y segura. Solo pagas si recibes la ayuda.",
};

const UNSPLASH = "https://images.unsplash.com";

const requisitos = [
  "Haber nacido en 2007",
  "Cumplir 18 años en 2025",
  "DNI o NIE en vigor",
  "Residencia legal en España",
  "Solicitante de asilo, desplazado o joven extutelado",
];

const pasos = [
  {
    numero: "1",
    titulo: "Solicitas el servicio",
    desc: "Rellenas el formulario con tus datos básicos para iniciar la tramitación.",
  },
  {
    numero: "2",
    titulo: "Validamos si la ayuda te pertenece",
    desc: "Nuestro sistema comprueba automáticamente si cumples los requisitos legales.",
  },
  {
    numero: "3",
    titulo: "Aceptas la tramitación",
    desc: "Nos autorizas y nos encargamos de todo el papeleo por ti.",
  },
  {
    numero: "4",
    titulo: "Solicitamos tu ayuda",
    desc: "Gestionamos la solicitud ante la administración pública de forma segura y eficaz.",
  },
  {
    numero: "5",
    titulo: "Pagas solo si te conceden la ayuda",
    desc: "Sin riesgos. Solo pagas cuando el dinero ya está en tu cuenta.",
  },
];

const testimonios = [
  {
    texto: "Pensaba que sería un lío, pero se encargaron de todo. Solo tuve que esperar a que me llegara el bono.",
    autor: "Eva María",
  },
  {
    texto: "Trato cercano, rápido y profesional. Muy recomendable.",
    autor: "Cristian Soler",
  },
  {
    texto: "Me ayudaron desde el primer momento y siempre estuvieron pendientes.",
    autor: "Paqui Salazar",
  },
];

const faqs = [
  {
    q: "¿Tiene algún coste registrarse?",
    a: "No. Crear cuenta y consultar tu caso es gratis. Solo si tramitamos por ti te informamos de las condiciones.",
  },
  {
    q: "¿Qué pasa si me deniegan el Bono Cultural?",
    a: "No pagas nada. Solo cobramos si consigues la ayuda. Sin riesgos para ti.",
  },
  {
    q: "¿Cuánto tarda la resolución?",
    a: "El plazo de resolución depende de la administración, pero normalmente es de 2-4 semanas.",
  },
  {
    q: "¿Puedo hablar con un asesor antes de registrarme?",
    a: "Sí. Puedes contactarnos por el formulario, por WhatsApp o por teléfono. Te respondemos sin compromiso.",
  },
];

export default function BonoCulturalPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[700px] bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 md:min-h-[800px] md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={`${UNSPLASH}/photo-1524178232363-1fb2b075b655?w=1920&q=85`}
            alt="Jóvenes disfrutando cultura"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="max-w-2xl space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="text-sm font-medium text-slate-700">
                  Rellena el formulario en 1 minuto y descubre si te pertenecen hasta 400 € para disfrutar de cultura en 2025
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
                ¿Te pertenecen los{" "}
                <span className="text-primary">400 € del Bono Cultural Joven</span> en 2025?
              </h1>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {["Sin complicaciones", "Sin burocracia", "Sin perder el tiempo", "100% online"].map((clave) => (
                  <div key={clave} className="flex items-center gap-2 rounded-xl bg-white p-3 shadow-md">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-xs font-medium text-slate-700">{clave}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-slate-600">
                <strong className="text-navy">Más de 2.500.000 €</strong> conseguidos en ayudas sociales para jóvenes en España.
              </p>

              <Button className="h-14 rounded-full bg-primary px-10 text-base font-semibold shadow-xl hover:bg-[#0F7494]" asChild>
                <Link href="#formulario">
                  Solicitar trámite
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative lg:pl-8">
              <HeroFormBonoCultural />
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section className="bg-white py-20 md:py-28">
        <div className="container grid gap-12 px-4 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-card md:h-[500px]">
              <Image
                src={`${UNSPLASH}/photo-1523240795612-9a054b0db644?w=800&q=85`}
                alt="Joven con libros"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Cultura Accesible
            </div>
            <h2 className="text-3xl font-bold leading-tight text-navy md:text-4xl">
              Recupera tu tiempo mientras nosotros nos ocupamos de tu Bono Cultural
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              En Tu Trámite Fácil, nos encargamos de todo el proceso para que consigas tu Bono Cultural Joven sin estrés ni papeleo. Validamos tus datos, tramitamos la ayuda y te acompañamos hasta que recibas el dinero.
            </p>
            <Button className="h-12 rounded-full bg-primary px-8 font-semibold shadow-lg hover:bg-[#0F7494]" asChild>
              <Link href="#formulario">
                Solicitar servicio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Beneficio y Requisitos */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 md:py-28">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-navy md:text-4xl">
              Hasta 400 € para que disfrutes de la cultura este 2025
            </h2>
            <div className="mb-8 inline-flex items-center gap-4 rounded-2xl bg-primary p-8 text-white shadow-card">
              <div className="text-6xl font-bold">400€</div>
              <div className="text-left text-lg">
                <div className="font-semibold">por joven</div>
                <div className="text-sm opacity-90">Bono Cultural 2025</div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-card md:p-12">
            <h3 className="mb-6 text-center text-2xl font-bold text-navy">Requisitos</h3>
            <ul className="space-y-4">
              {requisitos.map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-slate-700">{req}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-slate-600">
              En solo 2 clics sabrás si esta ayuda es para ti. Nuestro objetivo es que no pierdas ni un euro de lo que te corresponde.
            </p>
          </div>
        </div>
      </section>

      {/* Cómo funciona - Fondo Navy */}
      <section className="relative bg-navy py-20 text-white md:py-32">
        <div className="wave-top" />

        <div className="container relative z-10 px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Descubre lo fácil y rápido que es conseguir tu Bono Cultural Joven
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            {pasos.map((paso) => (
              <div key={paso.numero} className="group relative">
                <div className="relative rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#0F7494] text-2xl font-bold shadow-lg">
                    {paso.numero}
                  </div>
                  <h3 className="mb-2 font-semibold">{paso.titulo}</h3>
                  <p className="text-sm leading-relaxed text-white/90">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wave-bottom" />
      </section>

      {/* Testimonios */}
      <section className="bg-white py-20 md:py-28">
        <div className="container px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-navy md:text-4xl">
            Más de 200 jóvenes ya disfrutan de sus 400 € gracias a Tu Trámite Fácil
          </h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {testimonios.map((test, i) => (
              <div key={i} className="rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-md">
                <p className="mb-4 italic text-slate-600">&ldquo;{test.texto}&rdquo;</p>
                <p className="font-semibold text-navy">— {test.autor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantía y Autoridad - Fondo Teal */}
      <section className="relative bg-gradient-to-br from-primary to-[#0F7494] py-20 text-white md:py-28">
        <div className="wave-top" />

        <div className="container relative z-10 px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Democratizar el acceso a las ayudas sociales es nuestra misión
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
              <Award className="mx-auto mb-4 h-12 w-12" />
              <p className="text-4xl font-bold">2.5M€</p>
              <p className="mt-2 text-white/80">Conseguidos para clientes</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
              <Users className="mx-auto mb-4 h-12 w-12" />
              <p className="text-4xl font-bold">+600</p>
              <p className="mt-2 text-white/80">Personas confían en nosotros</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
              <Clock className="mx-auto mb-4 h-12 w-12" />
              <p className="text-4xl font-bold">1.729</p>
              <p className="mt-2 text-white/80">Días ahorrados en trámites</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="h-14 rounded-full bg-white px-10 text-base font-semibold text-primary shadow-xl hover:bg-white/90"
              asChild
            >
              <Link href="#formulario">Solicitar servicio</Link>
            </Button>
          </div>
        </div>

        <div className="wave-bottom" />
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-navy md:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border-2 border-slate-100 bg-white shadow-md transition-all hover:border-primary hover:shadow-card"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-8 py-6 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronDown className="h-6 w-6 shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="border-t-2 border-slate-100 px-8 py-6 leading-relaxed text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario Final */}
      <section id="formulario" className="scroll-mt-24 bg-gradient-to-br from-slate-50 to-white py-20 md:py-28">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
              Nuestros asesores, siempre disponibles para ti
            </h2>
            <p className="mb-12 text-lg text-slate-600">
              Completa el formulario y te ayudaremos a conseguir tu Bono Cultural Joven
            </p>
          </div>
          <div className="mx-auto max-w-2xl">
            <ContactFormBonoCultural />
          </div>
        </div>
      </section>
    </div>
  );
}
