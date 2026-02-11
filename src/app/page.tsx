import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Home,
  IdCard,
  Baby,
  Key,
  Wallet,
  ArrowRight,
  Check,
  Zap,
  ShieldCheck,
  Headphones,
  ClipboardCheck,
  Lock,
  MessageCircle,
  ChevronDown,
  Mail,
  Phone,
  Play,
  Users,
  Award,
  Clock,
  Star,
  Ticket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { HeroRegisterForm } from "@/components/forms/hero-register-form";
import { CONTACT } from "@/lib/contact";

const UNSPLASH = "https://images.unsplash.com";

const ventajas = [
  { icon: ClipboardCheck, title: "Trámites online", desc: "Gestiona todo desde casa, sin colas ni desplazamientos." },
  { icon: Headphones, title: "Asesoramiento", desc: "Equipo especializado que resuelve tus dudas." },
  { icon: FileText, title: "Documentación", desc: "Te guiamos con los documentos que necesitas." },
  { icon: Baby, title: "Ayudas sociales", desc: "Cheque bebé, ayuda al alquiler y más." },
  { icon: Zap, title: "Rapidez", desc: "Procesos ágiles y respuestas en poco tiempo." },
  { icon: Lock, title: "Seguridad", desc: "Tus datos protegidos en todo momento." },
  { icon: Home, title: "Sin desplazamientos", desc: "100% digital, desde cualquier dispositivo." },
  { icon: MessageCircle, title: "Soporte", desc: "Atención cercana cuando nos necesites." },
];

const heroFeatures = [
  { icon: FileText, title: "Tramitación" },
  { icon: Headphones, title: "Asesoría" },
  { icon: ShieldCheck, title: "Verificación" },
  { icon: Check, title: "Aprobación" },
];

const pasos = [
  "Rellena el formulario con tus datos básicos.",
  "Validamos tu caso y te decimos si cumples requisitos.",
  "Te asesoramos sobre las opciones disponibles.",
  "Tramitamos por ti ante la administración.",
  "Recibes tu resolución y nosotros te acompañamos.",
];

const servicios = [
  { title: "Bono Cultural Joven", desc: "Hasta 400€ para cultura en 2025.", href: "/gestiones/bono-cultural", icon: Ticket },
  { title: "Cheque Bebé", desc: "100€ al mes por hijo menor de 3 años.", href: "/gestiones/cheque-bebe", icon: Baby },
  { title: "Ayuda al Alquiler", desc: "Ayudas para tu vivienda en alquiler.", href: "/gestiones/ayuda-alquiler", icon: Key },
  { title: "Ingreso Mínimo Vital", desc: "Apoyo económico estable para tu hogar.", href: "/gestiones/ingreso-minimo-vital", icon: Wallet },
  { title: "DNI y Pasaporte", desc: "Renovación y primera solicitud.", href: "/gestiones/dni", icon: IdCard },
  { title: "Empadronamiento", desc: "Alta, baja y certificados.", href: "/gestiones/empadronamiento", icon: Home },
  { title: "Documentación", desc: "Certificados y legalizaciones.", href: "/gestiones/documentos", icon: FileText },
  { title: "Más trámites", desc: "Otros gestiones administrativos.", href: "/gestiones", icon: ClipboardCheck },
];

const faqs = [
  { q: "¿Tiene coste registrarme?", a: "No. Crear cuenta y consultar tu caso es gratis. Solo si tramitamos por ti te informamos de las condiciones." },
  { q: "¿Cómo sé si me corresponde una ayuda?", a: "Tras registrarte, revisamos tu perfil y te indicamos si cumples requisitos para las ayudas disponibles." },
  { q: "¿Puedo hablar con un asesor?", a: "Sí. Puedes contactarnos por el formulario, por WhatsApp o por teléfono. Te respondemos sin compromiso." },
];

const avatares = [
  "photo-1494790108377-be9c29b29330",
  "photo-1507003211169-0a1dd7228f2d",
  "photo-1438761681033-6461ffad8d80",
  "photo-1500648767791-00dcc994a43e",
];

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero con imagen de fondo y gradiente - Optimizado móvil */}
      <section className="relative min-h-[calc(100dvh-80px)] bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-14 pb-10 sm:pt-16 sm:pb-12 md:min-h-screen md:pt-24 md:pb-20 lg:pt-28 lg:pb-32">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home-banner.png"
            alt="Hero background"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-blue-500/20" />
        </div>

        <div className="container relative z-10 px-4 sm:px-4">
          <div className="mx-auto grid max-w-6xl gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-lg md:px-4 md:py-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="text-xs font-medium text-slate-700 md:text-sm">Más de 2.500 familias nos confían</span>
              </div>
              
              <h1 className="text-xl font-semibold leading-tight tracking-tight text-navy sm:text-2xl md:text-3xl lg:text-4xl">
                Tu plataforma para encontrar{" "}
                <span className="text-primary">apoyos al instante</span>
              </h1>
              
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg lg:text-xl">
                Te ayudamos a gestionar ayudas al alquiler, cheque bebé y otros trámites administrativos de forma 100% online, con procesos claros y controlados.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Button
                  size="lg"
                  className="h-12 w-full rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-xl transition-all active:scale-95 sm:h-14 sm:w-auto sm:px-10 sm:text-base md:hover:scale-105 md:hover:bg-[#0F7494] md:hover:shadow-2xl"
                  asChild
                >
                  <Link href="/gestiones">Ver todas las gestiones</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full rounded-full border-2 border-navy px-6 text-sm font-semibold text-navy transition-all active:scale-95 sm:h-14 sm:w-auto sm:px-10 sm:text-base md:hover:bg-navy md:hover:text-white"
                  asChild
                >
                  <Link href="#gestiones-home">Comenzar</Link>
                </Button>
              </div>

              {/* Features grid - Compacto en móvil */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2 sm:pt-4 md:grid-cols-4 md:gap-4 md:pt-6">
                {heroFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="flex flex-col items-center gap-1 rounded-xl bg-white p-2.5 shadow-md sm:gap-1.5 sm:p-3 md:rounded-2xl md:gap-2 md:p-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 sm:h-10 sm:w-10 md:h-12 md:w-12 md:rounded-xl">
                        <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <h4 className="text-center text-[0.65rem] font-semibold text-navy sm:text-xs md:text-sm">{feature.title}</h4>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 pt-4 md:gap-4 md:pt-6">
                <div className="flex items-center gap-0.5 md:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400 md:h-5 md:w-5" />
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-700 md:text-base">
                  +2.500 usuarios satisfechos
                </p>
              </div>
            </div>

            {/* Formulario minimalista */}
            <div className="flex w-full items-center justify-center lg:justify-end">
              <HeroRegisterForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards flotantes - Optimizado móvil */}
      <section className="relative -mt-12 pb-10 sm:-mt-16 sm:pb-12 md:-mt-32 md:pb-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6">
            {/* Card 1: WhatsApp */}
            <a
              href={CONTACT.whatsappUrl("Hola, tengo una consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-white p-5 shadow-card transition-all active:scale-[0.98] md:p-8"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 md:mb-4 md:h-16 md:w-16 md:rounded-2xl">
                <MessageCircle className="h-6 w-6 text-green-600 md:h-8 md:w-8" />
              </div>
              <h3 className="mb-2 text-base font-bold text-navy md:mb-3 md:text-lg">Escríbenos por WhatsApp</h3>
              <p className="mb-3 text-xs text-slate-600 md:mb-4 md:text-sm">
                Atendemos solo por WhatsApp. Escríbenos para cualquier consulta.
              </p>
              <span className="flex items-center gap-2 text-base font-semibold text-primary md:text-lg">
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                <span>{CONTACT.phoneDisplay}</span>
              </span>
            </a>

            {/* Card 2: Horario de Asesores */}
            <div className="rounded-2xl bg-white p-5 shadow-card transition-all active:scale-[0.98] md:p-8">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 md:mb-4 md:h-16 md:w-16 md:rounded-2xl">
                <Users className="h-6 w-6 text-primary md:h-8 md:w-8" />
              </div>
              <h3 className="mb-2 text-base font-bold text-navy md:mb-3 md:text-lg">Horario de Asesores</h3>
              <p className="mb-3 text-xs text-slate-600 md:mb-4 md:text-sm">
                Asesores cualificados disponibles seis días a la semana.
              </p>
              <Button className="h-11 w-full rounded-full border-2 border-primary bg-transparent text-sm font-semibold text-primary transition-all active:scale-95 md:h-auto md:w-auto md:hover:bg-primary md:hover:text-white" asChild>
                <Link href="/contacto">
                  <span>Ver Horarios</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Card 3: Horario de Atención */}
            <div className="rounded-2xl bg-white p-5 shadow-card transition-all active:scale-[0.98] md:p-8">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 md:mb-4 md:h-16 md:w-16 md:rounded-2xl">
                <Clock className="h-6 w-6 text-primary md:h-8 md:w-8" />
              </div>
              <h3 className="mb-2 text-base font-bold text-navy md:mb-3 md:text-lg">Horario de Atención</h3>
              <ul className="space-y-1.5 text-xs md:space-y-2 md:text-sm">
                <li className="flex justify-between text-slate-600">
                  <span className="font-medium">Lunes - Viernes</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between text-slate-600">
                  <span className="font-medium">Sábado</span>
                  <span>10:00 - 14:00</span>
                </li>
                <li className="flex justify-between text-slate-600">
                  <span className="font-medium">Domingo</span>
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Características - Optimizado móvil */}
      <section className="bg-white py-10 sm:py-12 md:py-20 lg:py-28">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            {/* Título principal */}
            <h2 className="mb-8 text-center text-lg font-semibold leading-snug text-navy sm:mb-12 sm:text-xl md:mb-16 md:text-2xl lg:text-3xl">
              Gestión administrativa sin desplazamientos
            </h2>

            {/* Grid de características */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
              <div className="group rounded-xl border-2 border-slate-100 bg-white p-4 shadow-md transition-all hover:border-primary hover:shadow-card sm:p-6 md:rounded-2xl md:p-8">
                <div className="relative mb-3 sm:mb-4 md:mb-5">
                  <Clock className="absolute -left-1 -top-1 h-14 w-14 text-slate-100 transition-all duration-300 sm:h-16 sm:w-16 md:-left-2 md:-top-2 md:h-20 md:w-20 md:group-hover:text-primary/10" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#0F7494] text-white shadow-lg transition-transform duration-300 sm:h-12 sm:w-12 md:h-16 md:w-16 md:rounded-2xl md:group-hover:scale-110">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                  </div>
                </div>
                <h3 className="mb-2 text-sm font-bold text-navy sm:mb-3 sm:text-base md:text-lg">Ahorro de tiempo real</h3>
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm md:text-base">
                  Nos encargamos de todo el proceso administrativo por ti. Centralizamos la gestión para reducir plazos y evitar gestiones repetidas.
                </p>
              </div>

              <div className="group rounded-xl border-2 border-slate-100 bg-white p-4 shadow-md transition-all hover:border-primary hover:shadow-card sm:p-6 md:rounded-2xl md:p-8">
                <div className="relative mb-3 sm:mb-4 md:mb-5">
                  <Award className="absolute -left-1 -top-1 h-14 w-14 text-slate-100 transition-all duration-300 sm:h-16 sm:w-16 md:-left-2 md:-top-2 md:h-20 md:w-20 md:group-hover:text-primary/10" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#0F7494] text-white shadow-lg transition-transform duration-300 sm:h-12 sm:w-12 md:h-16 md:w-16 md:rounded-2xl md:group-hover:scale-110">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                  </div>
                </div>
                <h3 className="mb-2 text-sm font-bold text-navy sm:mb-3 sm:text-base md:text-lg">Gestión basada en resultados</h3>
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm md:text-base">
                  Solo avanzamos cuando el trámite cumple los requisitos. Nuestro modelo está orientado a resolver, no a generar trámites innecesarios.
                </p>
              </div>

              <div className="group rounded-xl border-2 border-slate-100 bg-white p-4 shadow-md transition-all hover:border-primary hover:shadow-card sm:p-6 md:rounded-2xl md:p-8">
                <div className="relative mb-3 sm:mb-4 md:mb-5">
                  <ShieldCheck className="absolute -left-1 -top-1 h-14 w-14 text-slate-100 transition-all duration-300 sm:h-16 sm:w-16 md:-left-2 md:-top-2 md:h-20 md:w-20 md:group-hover:text-primary/10" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#0F7494] text-white shadow-lg transition-transform duration-300 sm:h-12 sm:w-12 md:h-16 md:w-16 md:rounded-2xl md:group-hover:scale-110">
                    <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                  </div>
                </div>
                <h3 className="mb-2 text-sm font-bold text-navy sm:mb-3 sm:text-base md:text-lg">Supervisión profesional</h3>
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm md:text-base">
                  Cada gestión es revisada por profesionales especializados para asegurar que la documentación sea correcta y completa.
                </p>
              </div>

              <div className="group rounded-xl border-2 border-slate-100 bg-white p-4 shadow-md transition-all hover:border-primary hover:shadow-card sm:p-6 md:rounded-2xl md:p-8">
                <div className="relative mb-3 sm:mb-4 md:mb-5">
                  <ClipboardCheck className="absolute -left-1 -top-1 h-14 w-14 text-slate-100 transition-all duration-300 sm:h-16 sm:w-16 md:-left-2 md:-top-2 md:h-20 md:w-20 md:group-hover:text-primary/10" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#0F7494] text-white shadow-lg transition-transform duration-300 sm:h-12 sm:w-12 md:h-16 md:w-16 md:rounded-2xl md:group-hover:scale-110">
                    <ClipboardCheck className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                  </div>
                </div>
                <h3 className="mb-2 text-sm font-bold text-navy sm:mb-3 sm:text-base md:text-lg">Tramitación digital</h3>
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm md:text-base">
                  Inicia y sigue tus trámites desde cualquier lugar. Todo el proceso se realiza online, con control y trazabilidad en cada paso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notes Section - Estilo Medcity */}
      <section className="border-t border-slate-200 bg-white py-8 sm:py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:items-center">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
                <FileText className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-navy sm:text-base">
                  Ofrecemos atención de calidad para tu familia y futuro.
                </p>
              </div>
              <Button className="min-h-[44px] w-full rounded-full sm:w-auto" variant="outline" asChild>
                <Link href="/gestiones">
                  <span>Ver Trámites</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 md:justify-end">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-white sm:h-16 sm:w-16 sm:text-3xl">
                  4.9
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-navy sm:text-base">Valoración General</p>
                  <p className="text-xs text-slate-600 sm:text-sm">basado en +2.500 opiniones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Cheque Bebé - Estilo Medcity */}
      <section id="gestiones-home" className="scroll-mt-20 bg-gradient-to-br from-slate-50 to-white py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container grid grid-cols-1 gap-8 px-4 sm:gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-20">
          <div className="relative lg:order-2">
            <div className="relative h-[260px] overflow-hidden rounded-2xl shadow-card sm:h-[320px] md:h-[400px] md:rounded-3xl lg:h-[500px]">
              <Image
                src="/cheque-bebe-banner.png"
                alt="Familia con bebé"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Botón play decorativo */}
              <div className="absolute inset-0 flex items-center justify-center bg-navy/20">
                <button type="button" className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-2xl transition-transform active:scale-95 sm:h-16 sm:w-16 md:h-20 md:w-20 md:hover:scale-110" aria-label="Reproducir">
                  <Play className="ml-0.5 h-6 w-6 fill-primary text-primary sm:h-7 sm:w-7 md:h-8 md:w-8" />
                </button>
              </div>
            </div>
            {/* Elemento decorativo flotante */}
            <div className="absolute -bottom-3 left-3 rounded-xl bg-primary p-4 shadow-card sm:-bottom-4 sm:left-4 sm:rounded-2xl sm:p-5 md:-bottom-6 md:-left-6 md:p-6">
              <div className="flex items-center gap-2 text-white sm:gap-3">
                <Baby className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
                <div>
                  <p className="text-xl font-bold sm:text-2xl">100€</p>
                  <p className="text-xs sm:text-sm">por mes/hijo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 lg:order-1">
            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary sm:px-4 sm:py-2 sm:text-sm">
              Ayuda Familiar
            </div>
            <h2 className="text-lg font-semibold leading-tight tracking-tight text-navy sm:text-xl md:text-2xl">
              Cheque Bebé: hasta 100€ al mes por hijo
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              ¿Tienes hijos menores de 3 años? Puedes acceder a una ayuda de hasta 100€ al mes por cada uno.
              Son 3.600€ en total. Te ayudamos a comprobar si te corresponde y a tramitarlo sin complicaciones.
            </p>
            <ul className="space-y-3">
              {["Sin complicaciones burocráticas", "Trámite 100% online", "Asesoramiento personalizado"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="min-h-[48px] w-full rounded-full bg-primary px-6 text-sm font-semibold shadow-lg transition-all active:scale-95 sm:w-auto sm:px-8 sm:text-base md:hover:scale-105 md:hover:bg-[#0F7494]" asChild>
              <Link href="/gestiones/cheque-bebe">
                Descubre si te corresponde
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección Bono Cultural Joven - Estilo Medcity */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container grid grid-cols-1 gap-8 px-4 sm:gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-20">
          <div className="relative">
            <div className="relative h-[260px] overflow-hidden rounded-2xl shadow-card sm:h-[320px] md:h-[400px] md:rounded-3xl lg:h-[500px]">
              <Image
                src="/joven-banner.png"
                alt="Joven con cultura"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Elemento decorativo flotante */}
            <div className="absolute -bottom-3 right-3 rounded-xl bg-primary p-4 shadow-card sm:-bottom-4 sm:right-4 sm:rounded-2xl sm:p-5 md:-bottom-6 md:-right-6 md:p-6">
              <div className="flex items-center gap-2 text-white sm:gap-3">
                <Ticket className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
                <div>
                  <p className="text-xl font-bold sm:text-2xl">400€</p>
                  <p className="text-xs sm:text-sm">para cultura</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary sm:px-4 sm:py-2 sm:text-sm">
              Cultura Joven
            </div>
            <h2 className="text-lg font-semibold leading-tight tracking-tight text-navy sm:text-xl md:text-2xl">
              Bono Cultural Joven: hasta 400€ para cultura en 2025
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              ¿Tienes 18 años? Puedes acceder a 400€ para disfrutar de cultura: libros, cine, teatro, música y más. 
              Te ayudamos a comprobar si cumples los requisitos y a tramitarlo de forma rápida y segura.
            </p>
            <ul className="space-y-3">
              {["Para jóvenes de 18 años", "Válido para cultura en 2025", "Proceso 100% online"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="min-h-[48px] w-full rounded-full bg-primary px-6 text-sm font-semibold shadow-lg transition-all active:scale-95 sm:w-auto sm:px-8 sm:text-base md:hover:scale-105 md:hover:bg-[#0F7494]" asChild>
              <Link href="/gestiones/bono-cultural">
                Solicitar Bono Cultural
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección Ayuda al Alquiler - Estilo Medcity */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container grid grid-cols-1 gap-8 px-4 sm:gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-20">
          <div className="relative">
            <div className="relative h-[260px] overflow-hidden rounded-2xl shadow-card sm:h-[320px] md:h-[400px] md:rounded-3xl lg:h-[500px]">
              <Image
                src="/alquiler-banner.png"
                alt="Vivienda en alquiler"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Elemento decorativo flotante */}
            <div className="absolute -bottom-3 right-3 rounded-xl bg-navy p-4 shadow-card sm:-bottom-4 sm:right-4 sm:rounded-2xl sm:p-5 md:-bottom-6 md:-right-6 md:p-6">
              <div className="flex items-center gap-2 text-white sm:gap-3">
                <Key className="h-8 w-8 text-primary sm:h-9 sm:w-9 md:h-10 md:w-10" />
                <div>
                  <p className="text-xl font-bold sm:text-2xl">Miles €</p>
                  <p className="text-xs sm:text-sm">al año</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary sm:px-4 sm:py-2 sm:text-sm">
              Vivienda
            </div>
            <h2 className="text-lg font-semibold leading-tight tracking-tight text-navy sm:text-xl md:text-2xl">
              Ayuda al Alquiler: apoyo para tu vivienda
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Las ayudas al alquiler pueden suponer cientos o miles de euros al año según tu comunidad y situación.
              Te asesoramos, comprobamos tu caso y gestionamos la solicitud por ti. Todo 100% online, sin burocracia.
            </p>
            <ul className="space-y-3">
              {["Disponible en todas las comunidades", "Proceso rápido y seguro", "Sin desplazamientos"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="min-h-[48px] w-full rounded-full bg-primary px-6 text-sm font-semibold shadow-lg transition-all active:scale-95 sm:w-auto sm:px-8 sm:text-base md:hover:scale-105 md:hover:bg-[#0F7494]" asChild>
              <Link href="/gestiones/ayuda-alquiler">
                Ver ayuda al alquiler
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección Ingreso Mínimo Vital - Estilo Medcity */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container grid grid-cols-1 gap-8 px-4 sm:gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-20">
          <div className="relative lg:order-2">
            <div className="relative h-[260px] overflow-hidden rounded-2xl shadow-card sm:h-[320px] md:h-[400px] md:rounded-3xl lg:h-[500px]">
              <Image
                src="/ayuda-banner.png"
                alt="Ingreso Mínimo Vital"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Elemento decorativo flotante */}
            <div className="absolute -bottom-3 left-3 rounded-xl bg-gradient-to-br from-primary to-[#0F7494] p-4 shadow-card sm:-bottom-4 sm:left-4 sm:rounded-2xl sm:p-5 md:-bottom-6 md:-left-6 md:p-6">
              <div className="flex items-center gap-2 text-white sm:gap-3">
                <Wallet className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
                <div>
                  <p className="text-xl font-bold sm:text-2xl">IMV</p>
                  <p className="text-xs sm:text-sm">Apoyo mensual</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 lg:order-1">
            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary sm:px-4 sm:py-2 sm:text-sm">
              Apoyo Económico
            </div>
            <h2 className="text-lg font-semibold leading-tight tracking-tight text-navy sm:text-xl md:text-2xl">
              Ingreso Mínimo Vital: apoyo estable para tu hogar
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              El Ingreso Mínimo Vital garantiza unos ingresos mínimos a personas y familias en situación de vulnerabilidad.
              Comprobamos si te pertenece, te asesoramos y tramitamos la solicitud. Solo pagas si recibes la ayuda.
            </p>
            <ul className="space-y-3">
              {["Garantía de ingresos mínimos", "Pago solo si recibes la ayuda", "Acompañamiento completo"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="min-h-[48px] w-full rounded-full bg-primary px-6 text-sm font-semibold shadow-lg transition-all active:scale-95 sm:w-auto sm:px-8 sm:text-base md:hover:scale-105 md:hover:bg-[#0F7494]" asChild>
              <Link href="/gestiones/ingreso-minimo-vital">
                Consultar Ingreso Mínimo Vital
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Proceso - Fondo Navy estilo Medcity */}
      <section className="relative bg-navy py-12 text-white sm:py-16 md:py-20 lg:py-32">
        {/* Decoración ondulada superior */}
        <div className="wave-top" />
        
        <div className="container relative z-10 px-4">
          <div className="mb-10 text-center sm:mb-12 md:mb-16">
            <h2 className="mb-3 text-lg font-semibold text-white sm:mb-4 sm:text-xl md:text-2xl">
              ¿Cómo es el proceso para gestionar tus trámites?
            </h2>
            <p className="mx-auto max-w-2xl text-base text-white/80 sm:text-lg">
              Un proceso simple y transparente en 5 pasos
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-5 md:gap-8">
            {pasos.map((paso, i) => (
              <div key={i} className="group relative">
                <div className="relative rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 sm:rounded-2xl sm:p-5 md:p-6 md:hover:bg-white/20 md:hover:shadow-card">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#0F7494] text-lg font-bold shadow-lg sm:mb-4 sm:h-14 sm:w-14 sm:text-xl md:h-16 md:w-16 md:rounded-2xl md:text-2xl">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-xs leading-relaxed text-white/90 sm:text-sm">{paso}</p>
                </div>
                {/* Línea conectora */}
                {i < pasos.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full translate-x-full bg-primary/30 md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center sm:mt-12 md:mt-16">
            <Button
              size="lg"
              className="min-h-[48px] w-full max-w-sm rounded-full bg-primary px-8 text-base font-semibold shadow-xl transition-all active:scale-95 sm:w-auto sm:px-10 md:hover:scale-105 md:hover:bg-[#0F7494]"
              asChild
            >
              <Link href="/contacto">Empieza a crear tu perfil</Link>
            </Button>
          </div>
        </div>

        {/* Decoración ondulada inferior */}
        <div className="wave-bottom" />
      </section>

      {/* CTA Banner - Estilo Medcity */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-50 py-10 sm:py-12 md:py-16">
        <div className="container px-4">
          <div className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-card sm:flex-row sm:flex-wrap sm:items-center sm:gap-8 sm:rounded-3xl sm:p-8 md:p-12">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-20 sm:w-20 sm:rounded-2xl">
              <ShieldCheck className="h-10 w-10 text-primary sm:h-12 sm:w-12" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="mb-2 text-base font-semibold text-navy sm:text-lg md:text-xl">
                ¡Atención de Calidad Para Tu Familia!
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Servimos a la comunidad mejorando la calidad de vida a través de una mejor gestión. Hemos implementado protocolos para proteger a nuestros usuarios mientras continuamos brindando servicios necesarios.
              </p>
            </div>
            <Button className="min-h-[48px] w-full shrink-0 rounded-full bg-primary px-6 text-sm font-semibold shadow-lg active:scale-95 sm:w-auto sm:px-8 sm:text-base md:hover:bg-[#0F7494]" asChild>
              <Link href="/gestiones">
                <span>Ver Programas</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tarjetas servicios - Optimizado móvil */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-10 sm:py-12 md:py-20 lg:py-28">
        <div className="container px-4">
          <div className="mb-8 text-center sm:mb-10 md:mb-16">
            <h2 className="mb-2 text-lg font-semibold text-navy sm:mb-3 md:mb-4 md:text-xl lg:text-2xl">
              Ayuda sencilla que transforma tu vida
            </h2>
            <p className="mx-auto max-w-2xl text-xs text-slate-600 sm:text-sm md:text-base lg:text-lg">
              Todos los trámites que necesitas, organizados y fáciles de gestionar
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6">
            {servicios.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.href} href={s.href} className="block">
                  <div className="group relative h-full overflow-hidden rounded-xl border-2 border-slate-100 bg-white p-4 shadow-md transition-all duration-300 active:scale-[0.98] sm:p-5 md:rounded-2xl md:p-8 md:hover:-translate-y-2 md:hover:border-primary md:hover:shadow-card-hover">
                    {/* Doble icono estilo Medcity */}
                    <div className="relative mb-4 md:mb-5">
                      {/* Icono de fondo (grande y transparente) */}
                      <Icon className="absolute -left-1 -top-1 h-16 w-16 text-slate-100 transition-all duration-300 md:-left-2 md:-top-2 md:h-20 md:w-20 md:group-hover:text-primary/10" />
                      {/* Icono principal */}
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#0F7494] text-white shadow-lg transition-transform duration-300 md:h-16 md:w-16 md:rounded-2xl md:group-hover:scale-110">
                        <Icon className="h-6 w-6 md:h-8 md:w-8" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-base font-bold text-navy md:mb-3 md:text-lg">{s.title}</h3>
                    <p className="mb-3 text-xs leading-relaxed text-slate-600 md:mb-4 md:text-sm">{s.desc}</p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary md:text-sm">
                      <span>Ver más detalles</span>
                      <ArrowRight className="h-3 w-3 transition-transform md:h-4 md:w-4 md:group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social proof - Fondo Teal estilo Medcity */}
      <section className="relative bg-gradient-to-br from-primary to-[#0F7494] py-12 text-white sm:py-16 md:py-20 lg:py-28">
        {/* Decoración ondulada superior */}
        <div className="wave-top" />

        <div className="container relative z-10 px-4">
          <div className="mb-8 text-center sm:mb-10 md:mb-12">
            <h2 className="mb-3 text-lg font-semibold sm:mb-4 sm:text-xl md:text-2xl">
              Más de 2.500 familias confían en nosotros
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
              Empresas e instituciones que respaldan nuestro servicio
            </p>
          </div>

          {/* Stats */}
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 md:mb-16 md:gap-8">
            <div className="rounded-xl bg-white/10 p-5 text-center backdrop-blur-sm sm:rounded-2xl sm:p-6 md:p-8">
              <Users className="mx-auto mb-3 h-10 w-10 sm:mb-4 sm:h-12 sm:w-12" />
              <p className="text-3xl font-bold sm:text-4xl">+2.500</p>
              <p className="mt-1 text-sm text-white/80 sm:mt-2 sm:text-base">Familias ayudadas</p>
            </div>
            <div className="rounded-xl bg-white/10 p-5 text-center backdrop-blur-sm sm:rounded-2xl sm:p-6 md:p-8">
              <Award className="mx-auto mb-3 h-10 w-10 sm:mb-4 sm:h-12 sm:w-12" />
              <p className="text-3xl font-bold sm:text-4xl">2.5M€</p>
              <p className="mt-1 text-sm text-white/80 sm:mt-2 sm:text-base">En ayudas conseguidas</p>
            </div>
            <div className="rounded-xl bg-white/10 p-5 text-center backdrop-blur-sm sm:rounded-2xl sm:p-6 md:p-8">
              <Clock className="mx-auto mb-3 h-10 w-10 sm:mb-4 sm:h-12 sm:w-12" />
              <p className="text-3xl font-bold sm:text-4xl">1.729</p>
              <p className="mt-1 text-sm text-white/80 sm:mt-2 sm:text-base">Días ahorrados</p>
            </div>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-12">
            {["Empresa A", "Empresa B", "Empresa C", "Empresa D", "Empresa E"].map((name) => (
              <div
                key={name}
                className="flex h-12 min-w-[80px] items-center justify-center rounded-xl bg-white px-4 text-sm font-bold text-navy shadow-lg transition-transform active:scale-95 sm:h-14 sm:min-w-[100px] sm:rounded-2xl sm:px-6 sm:text-base md:h-16 md:px-10 md:hover:scale-105"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Decoración ondulada inferior */}
        <div className="wave-bottom" />
      </section>

      {/* FAQ - Estilo Medcity */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container px-4">
          <div className="mb-8 text-center sm:mb-12 md:mb-16">
            <h2 className="mb-3 text-lg font-semibold text-navy sm:mb-4 sm:text-xl md:text-2xl">
              Preguntas frecuentes
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base md:text-lg">
              Resolvemos tus dudas más comunes
            </p>
          </div>
          <div className="scroll-mt-20 mx-auto max-w-3xl space-y-3 sm:space-y-4" id="faq">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border-2 border-slate-100 bg-white shadow-md transition-all sm:rounded-2xl md:hover:border-primary md:hover:shadow-card"
              >
                <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 font-semibold text-navy [&::-webkit-details-marker]:hidden sm:gap-4 sm:px-6 sm:py-5 md:px-8 md:py-6">
                  <span className="text-left text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180 sm:h-6 sm:w-6" />
                </summary>
                <p className="border-t-2 border-slate-100 px-4 py-4 text-sm leading-relaxed text-slate-600 sm:px-6 sm:py-5 md:px-8 md:py-6 md:text-base">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center sm:mt-12">
            <p className="mb-3 text-sm text-slate-600 sm:mb-4 sm:text-base">¿No encuentras lo que buscas?</p>
            <Button
              size="lg"
              variant="outline"
              className="min-h-[48px] w-full max-w-sm rounded-full border-2 border-primary px-6 text-base font-semibold text-primary transition-all active:scale-95 sm:w-auto sm:px-10 md:hover:bg-primary md:hover:text-white"
              asChild
            >
              <Link href="/contacto">Contacta con nosotros</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contacto / Equipo */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container grid grid-cols-1 gap-8 px-4 sm:gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="mb-3 text-lg font-semibold text-navy sm:mb-4 sm:text-xl md:text-2xl">
                Nuestros asesores, siempre disponibles para ti
              </h2>
              <p className="text-base text-slate-600 sm:text-lg">
                Si tienes dudas o prefieres hablar con un asesor antes de registrarte, escríbenos sin compromiso.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <a
                href={CONTACT.whatsappUrl("Hola, tengo una consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[56px] items-center gap-3 rounded-xl bg-white p-4 shadow-md transition-all active:scale-[0.99] sm:gap-4 sm:rounded-2xl sm:p-5 md:hover:shadow-card"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <MessageCircle className="h-6 w-6 text-green-600 sm:h-7 sm:w-7" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-navy">WhatsApp</p>
                  <p className="truncate text-sm text-primary sm:text-base">{CONTACT.phoneDisplay}</p>
                </div>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex min-h-[56px] items-center gap-3 rounded-xl bg-white p-4 shadow-md transition-all active:scale-[0.99] sm:gap-4 sm:rounded-2xl sm:p-5 md:hover:shadow-card"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Mail className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-navy">Email</p>
                  <p className="truncate text-sm text-primary sm:text-base">{CONTACT.email}</p>
                </div>
              </a>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-md sm:rounded-2xl sm:p-6 md:p-8">
              <h3 className="mb-3 text-base font-bold text-navy sm:mb-4 sm:text-lg">Nuestro equipo</h3>
              <p className="text-sm text-slate-600 sm:text-base">
                Expertos en trámites administrativos listos para ayudarte
              </p>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-slate-100 bg-white p-5 shadow-card sm:p-6 md:rounded-3xl md:p-8 lg:p-10">
            <h3 className="mb-4 text-lg font-bold text-navy sm:mb-5 md:mb-6 md:text-xl">Envíanos un mensaje</h3>
            <form className="space-y-5">
              <div className="grid gap-2">
                <Label htmlFor="contact-name" className="text-sm font-semibold text-slate-700">
                  Nombre y apellidos
                </Label>
                <Input
                  id="contact-name"
                  placeholder="Tu nombre"
                  className="h-12 rounded-xl border-2 border-slate-200 focus:border-primary"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-email" className="text-sm font-semibold text-slate-700">
                  Correo electrónico
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="tu@email.com"
                  className="h-12 rounded-xl border-2 border-slate-200 focus:border-primary"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-msg" className="text-sm font-semibold text-slate-700">
                  ¿En qué te podemos ayudar?
                </Label>
                <Textarea
                  id="contact-msg"
                  placeholder="Escribe tu consulta aquí..."
                  rows={5}
                  className="resize-none rounded-xl border-2 border-slate-200 focus:border-primary"
                />
              </div>
              <Button
                type="submit"
                className="min-h-[48px] w-full rounded-xl bg-primary text-sm font-semibold shadow-lg transition-all active:scale-[0.99] sm:text-base md:hover:bg-[#0F7494] md:hover:shadow-xl"
              >
                Enviar solicitud
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
