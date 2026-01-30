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
    <div className="flex flex-col">
      {/* Hero con imagen de fondo y gradiente */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-28 pb-20 md:pt-32 md:pb-32">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={`${UNSPLASH}/photo-1573496359142-b8d87734a5a2?w=1920&q=85`}
            alt="Hero background"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-blue-500/20" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="max-w-2xl space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="text-sm font-medium text-slate-700">Más de 2.500 familias nos confían</span>
              </div>
              
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
                Tu plataforma para encontrar{" "}
                <span className="text-primary">apoyos al instante</span>
              </h1>
              
              <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
                Gestiona trámites, ayudas al alquiler, cheque bebé y más. Sin complicaciones y 100% online.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="h-14 rounded-full bg-primary px-10 text-base font-semibold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#0F7494] hover:shadow-2xl"
                  asChild
                >
                  <Link href="/contacto">Comenzar gratis</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-full border-2 border-navy px-10 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white"
                  asChild
                >
                  <Link href="/gestiones">Ver trámites</Link>
                </Button>
              </div>

              {/* Features grid style Medcity */}
              <div className="grid grid-cols-2 gap-4 pt-6 md:grid-cols-4">
                {heroFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 shadow-md">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-center text-sm font-semibold text-navy">{feature.title}</h4>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-6 pt-6">
                <div className="flex -space-x-3">
                  {avatares.map((id) => (
                    <div
                      key={id}
                      className="relative h-12 w-12 overflow-hidden rounded-full border-4 border-white shadow-lg"
                    >
                      <Image
                        src={`${UNSPLASH}/${id}?w=96&h=96&fit=crop&q=80`}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-slate-700">
                    +2.500 usuarios satisfechos
                  </p>
                </div>
              </div>
            </div>

            {/* Formulario minimalista */}
            <div className="relative lg:pl-8">
              <HeroRegisterForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards flotantes - Estilo Medcity */}
      <section className="relative -mt-32 pb-20">
        <div className="container px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1: Casos de Emergencia */}
            <div className="rounded-2xl bg-white p-8 shadow-card">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-navy">Casos de Emergencia</h3>
              <p className="mb-4 text-sm text-slate-600">
                Ponte en contacto con nuestro equipo para cualquier consulta general o médica.
              </p>
              <a href="tel:+34600000000" className="flex items-center gap-2 text-lg font-semibold text-primary">
                <Phone className="h-5 w-5" />
                <span>+34 600 000 000</span>
              </a>
            </div>

            {/* Card 2: Horario de Asesores */}
            <div className="rounded-2xl bg-white p-8 shadow-card">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-navy">Horario de Asesores</h3>
              <p className="mb-4 text-sm text-slate-600">
                Asesores cualificados disponibles seis días a la semana.
              </p>
              <Button className="rounded-full border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white" asChild>
                <Link href="/contacto">
                  <span>Ver Horarios</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Card 3: Horario de Atención */}
            <div className="rounded-2xl bg-white p-8 shadow-card">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-navy">Horario de Atención</h3>
              <ul className="space-y-2 text-sm">
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

      {/* Grid ventajas 4x2 - Estilo Medcity */}
      <section className="bg-white py-20 md:py-28">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
              ¿Por qué elegirnos?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Ofrecemos un servicio completo y seguro para todas tus gestiones administrativas
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ventajas.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-card-hover"
                >
                  {/* Doble icono estilo Medcity */}
                  <div className="relative mb-5">
                    {/* Icono de fondo (grande y transparente) */}
                    <Icon className="absolute -left-2 -top-2 h-20 w-20 text-slate-100 transition-all duration-300 group-hover:text-primary/10" />
                    {/* Icono principal */}
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#0F7494] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-navy">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{v.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    <span>Leer más</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notes Section - Estilo Medcity */}
      <section className="border-t border-slate-200 bg-white py-12">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-navy">
                  Ofrecemos atención de calidad para tu familia y futuro.
                </p>
              </div>
              <Button className="rounded-full" variant="outline" asChild>
                <Link href="/gestiones">
                  <span>Ver Trámites</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6 md:justify-end">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-3xl font-bold text-white">
                  4.9
                </div>
                <div>
                  <p className="font-semibold text-navy">Valoración General</p>
                  <p className="text-sm text-slate-600">basado en +2.500 opiniones</p>
                </div>
              </div>
              <Button className="h-12 rounded-full bg-primary px-8 font-semibold shadow-lg hover:bg-[#0F7494]" asChild>
                <Link href="/contacto">
                  <span>Crear Cuenta</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Cheque Bebé - Estilo Medcity */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 md:py-28">
        <div className="container grid gap-12 px-4 md:grid-cols-2 md:items-center lg:gap-20">
          <div className="relative lg:order-2">
            <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-card md:h-[500px]">
              <Image
                src={`${UNSPLASH}/photo-1551836022-d5d88e9218df?w=800&q=85`}
                alt="Familia con bebé"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Botón play decorativo */}
              <div className="absolute inset-0 flex items-center justify-center bg-navy/20">
                <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl transition-transform hover:scale-110">
                  <Play className="ml-1 h-8 w-8 fill-primary text-primary" />
                </button>
              </div>
            </div>
            {/* Elemento decorativo flotante */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-primary p-6 shadow-card">
              <div className="flex items-center gap-3 text-white">
                <Baby className="h-10 w-10" />
                <div>
                  <p className="text-2xl font-bold">100€</p>
                  <p className="text-sm">por mes/hijo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 lg:order-1">
            <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Ayuda Familiar
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-navy md:text-4xl">
              Cheque Bebé: hasta 100€ al mes por hijo
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
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
            <Button className="h-12 rounded-full bg-primary px-8 text-base font-semibold shadow-lg transition-all hover:scale-105 hover:bg-[#0F7494]" asChild>
              <Link href="/gestiones/cheque-bebe">
                Descubre si te corresponde
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección Ayuda al Alquiler - Estilo Medcity */}
      <section className="bg-white py-20 md:py-28">
        <div className="container grid gap-12 px-4 md:grid-cols-2 md:items-center lg:gap-20">
          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-card md:h-[500px]">
              <Image
                src={`${UNSPLASH}/photo-1503387762-592deb58ef4e?w=800&q=85`}
                alt="Vivienda en alquiler"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Elemento decorativo flotante */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-navy p-6 shadow-card">
              <div className="flex items-center gap-3 text-white">
                <Key className="h-10 w-10 text-primary" />
                <div>
                  <p className="text-2xl font-bold">Miles €</p>
                  <p className="text-sm">al año</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Vivienda
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-navy md:text-4xl">
              Ayuda al Alquiler: apoyo para tu vivienda
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
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
            <Button className="h-12 rounded-full bg-primary px-8 text-base font-semibold shadow-lg transition-all hover:scale-105 hover:bg-[#0F7494]" asChild>
              <Link href="/gestiones/ayuda-alquiler">
                Ver ayuda al alquiler
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección Ingreso Mínimo Vital - Estilo Medcity */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 md:py-28">
        <div className="container grid gap-12 px-4 md:grid-cols-2 md:items-center lg:gap-20">
          <div className="relative lg:order-2">
            <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-card md:h-[500px]">
              <Image
                src={`${UNSPLASH}/photo-1573496359142-b8d87734a5a2?w=800&q=85`}
                alt="Ingreso Mínimo Vital"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Elemento decorativo flotante */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-gradient-to-br from-primary to-[#0F7494] p-6 shadow-card">
              <div className="flex items-center gap-3 text-white">
                <Wallet className="h-10 w-10" />
                <div>
                  <p className="text-2xl font-bold">IMV</p>
                  <p className="text-sm">Apoyo mensual</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 lg:order-1">
            <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Apoyo Económico
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-navy md:text-4xl">
              Ingreso Mínimo Vital: apoyo estable para tu hogar
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
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
            <Button className="h-12 rounded-full bg-primary px-8 text-base font-semibold shadow-lg transition-all hover:scale-105 hover:bg-[#0F7494]" asChild>
              <Link href="/gestiones/ingreso-minimo-vital">
                Consultar Ingreso Mínimo Vital
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Proceso - Fondo Navy estilo Medcity */}
      <section className="relative bg-navy py-20 text-white md:py-32">
        {/* Decoración ondulada superior */}
        <div className="wave-top" />
        
        <div className="container relative z-10 px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              ¿Cómo es el proceso para gestionar tus trámites?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              Un proceso simple y transparente en 5 pasos
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            {pasos.map((paso, i) => (
              <div key={i} className="group relative">
                <div className="relative rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-card">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#0F7494] text-2xl font-bold shadow-lg">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-sm leading-relaxed text-white/90">{paso}</p>
                </div>
                {/* Línea conectora */}
                {i < pasos.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full translate-x-full bg-primary/30 md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="h-14 rounded-full bg-primary px-10 text-base font-semibold shadow-xl transition-all hover:scale-105 hover:bg-[#0F7494]"
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
      <section className="bg-gradient-to-r from-blue-50 to-blue-50 py-16">
        <div className="container px-4">
          <div className="flex flex-wrap items-center gap-8 rounded-3xl bg-white p-8 shadow-card md:p-12">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <ShieldCheck className="h-12 w-12 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 text-2xl font-bold text-navy md:text-3xl">
                ¡Atención de Calidad Para Tu Familia!
              </h3>
              <p className="text-slate-600">
                Servimos a la comunidad mejorando la calidad de vida a través de una mejor gestión. Hemos implementado protocolos para proteger a nuestros usuarios mientras continuamos brindando servicios necesarios.
              </p>
            </div>
            <Button className="h-14 shrink-0 rounded-full bg-primary px-8 text-base font-semibold shadow-lg hover:bg-[#0F7494]" asChild>
              <Link href="/gestiones">
                <span>Ver Programas</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tarjetas servicios - Estilo Medcity */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 md:py-28">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
              Ayuda sencilla que transforma tu vida
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Todos los trámites que necesitas, organizados y fáciles de gestionar
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.href} href={s.href}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-card-hover">
                    {/* Doble icono estilo Medcity */}
                    <div className="relative mb-5">
                      {/* Icono de fondo (grande y transparente) */}
                      <Icon className="absolute -left-2 -top-2 h-20 w-20 text-slate-100 transition-all duration-300 group-hover:text-primary/10" />
                      {/* Icono principal */}
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#0F7494] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-navy">{s.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <span>Ver más detalles</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social proof - Fondo Teal estilo Medcity */}
      <section className="relative bg-gradient-to-br from-primary to-[#0F7494] py-20 text-white md:py-28">
        {/* Decoración ondulada superior */}
        <div className="wave-top" />

        <div className="container relative z-10 px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Más de 2.500 familias confían en nosotros
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Empresas e instituciones que respaldan nuestro servicio
            </p>
          </div>

          {/* Stats */}
          <div className="mb-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
              <Users className="mx-auto mb-4 h-12 w-12" />
              <p className="text-4xl font-bold">+2.500</p>
              <p className="mt-2 text-white/80">Familias ayudadas</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
              <Award className="mx-auto mb-4 h-12 w-12" />
              <p className="text-4xl font-bold">2.5M€</p>
              <p className="mt-2 text-white/80">En ayudas conseguidas</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
              <Clock className="mx-auto mb-4 h-12 w-12" />
              <p className="text-4xl font-bold">1.729</p>
              <p className="mt-2 text-white/80">Días ahorrados</p>
            </div>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-12">
            {["Empresa A", "Empresa B", "Empresa C", "Empresa D", "Empresa E"].map((name) => (
              <div
                key={name}
                className="flex h-16 items-center justify-center rounded-2xl bg-white px-10 font-bold text-navy shadow-lg transition-transform hover:scale-105"
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
      <section className="bg-white py-20 md:py-28">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
              Preguntas frecuentes
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Resolvemos tus dudas más comunes
            </p>
          </div>
          <div className="scroll-mt-24 mx-auto max-w-3xl space-y-4" id="faq">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border-2 border-slate-100 bg-white shadow-md transition-all hover:border-primary hover:shadow-card"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-8 py-6 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronDown className="h-6 w-6 shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="border-t-2 border-slate-100 px-8 py-6 leading-relaxed text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-4 text-slate-600">¿No encuentras lo que buscas?</p>
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-2 border-primary px-10 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              asChild
            >
              <Link href="/contacto">Contacta con nosotros</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contacto / Equipo - Estilo Medcity con más espacio para Footer flotante */}
      <section className="bg-gradient-to-br from-slate-50 to-white pb-40 pt-20 md:pb-48 md:pt-28">
        <div className="container grid gap-12 px-4 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
                Nuestros asesores, siempre disponibles para ti
              </h2>
              <p className="text-lg text-slate-600">
                Si tienes dudas o prefieres hablar con un asesor antes de registrarte, escríbenos sin compromiso.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+34600000000"
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md transition-all hover:shadow-card"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-navy">Teléfono</p>
                  <p className="text-primary">+34 600 000 000</p>
                </div>
              </a>
              <a
                href="mailto:hola@gestionesespana.es"
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md transition-all hover:shadow-card"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-navy">Email</p>
                  <p className="text-primary">hola@gestionesespana.es</p>
                </div>
              </a>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h3 className="mb-4 text-xl font-bold text-navy">Nuestro equipo</h3>
              <p className="mb-6 text-slate-600">
                Expertos en trámites administrativos listos para ayudarte
              </p>
              <div className="flex -space-x-4">
                {[
                  "photo-1573496359142-b8d87734a5a2",
                  "photo-1507003211169-0a1dd7228f2d",
                  "photo-1438761681033-6461ffad8d80",
                  "photo-1500648767791-00dcc994a43e"
                ].map((id) => (
                  <div
                    key={id}
                    className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-lg"
                  >
                    <Image
                      src={`${UNSPLASH}/${id}?w=128&h=128&fit=crop&q=80`}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-slate-100 bg-white p-8 shadow-card md:p-10">
            <h3 className="mb-6 text-2xl font-bold text-navy">Envíanos un mensaje</h3>
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
                className="h-12 w-full rounded-xl bg-primary text-base font-semibold shadow-lg transition-all hover:bg-[#0F7494] hover:shadow-xl"
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
