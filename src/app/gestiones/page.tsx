import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Ticket,
  Baby,
  Key,
  Wallet,
  Check,
  Clock,
  Shield,
  Users,
  Euro,
  Award,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Nuestras Gestiones | Trámites y Ayudas Sociales | Burocracia CERO",
  description:
    "Descubre todas las gestiones que ofrecemos: Bono Cultural Joven, Cheque Bebé, Ayuda al Alquiler e Ingreso Mínimo Vital. Trámites 100% online y sin complicaciones.",
};

const gestiones = [
  {
    id: "bono-cultural",
    title: "Bono Cultural Joven",
    subtitle: "Hasta 400€ para cultura en 2025",
    description:
      "Consigue tu Bono Cultural Joven de 400€ para disfrutar de cultura, libros, música, teatro y más. Te ayudamos con todos los trámites de forma rápida y segura.",
    href: "/gestiones/bono-cultural",
    icon: Ticket,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100",
    features: [
      "Hasta 400€ por joven",
      "Para mayores de 18 años",
      "Válido para cultura en 2025",
      "Trámite 100% online",
    ],
    requisitos: [
      "Haber nacido en 2007",
      "Cumplir 18 años en 2025",
      "DNI o NIE en vigor",
      "Residencia legal en España",
    ],
  },
  {
    id: "cheque-bebe",
    title: "Cheque Bebé",
    subtitle: "100€ al mes por hijo menor de 3 años",
    description:
      "Ayuda económica de hasta 100€ mensuales por cada hijo menor de 3 años. Gestionamos todo el trámite para que recibas el apoyo que tu familia necesita.",
    href: "/gestiones/cheque-bebe",
    icon: Baby,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
    features: [
      "Hasta 100€/mes",
      "Por hijo menor de 3 años",
      "Hasta 3 años de duración",
      "Proceso simplificado",
    ],
    requisitos: [
      "Tener hijos menores de 3 años",
      "Cumplir requisitos económicos",
      "Residencia en España",
      "Documentación en regla",
    ],
  },
  {
    id: "ayuda-alquiler",
    title: "Ayuda al Alquiler",
    subtitle: "Ayudas para tu vivienda en alquiler",
    description:
      "Descubre si puedes acceder a una ayuda para tu alquiler. Las ayudas pueden suponer cientos o incluso miles de euros al año dependiendo de tu comunidad autónoma.",
    href: "/gestiones/ayuda-alquiler",
    icon: Key,
    color: "from-teal-500 to-green-500",
    bgColor: "bg-teal-50",
    iconBg: "bg-teal-100",
    features: [
      "Hasta 3.000€ al año",
      "Para jóvenes y mayores",
      "Según tu comunidad",
      "Sin desplazamientos",
    ],
    requisitos: [
      "Contrato de alquiler en vigor",
      "Cumplir requisitos económicos",
      "Ser mayor o menor de 35 años",
      "Residencia en España",
    ],
  },
  {
    id: "ingreso-minimo-vital",
    title: "Ingreso Mínimo Vital",
    subtitle: "Apoyo económico estable para tu hogar",
    description:
      "El Ingreso Mínimo Vital es una ayuda destinada a garantizar unos ingresos mínimos a personas y familias en situación de vulnerabilidad económica.",
    href: "/gestiones/ingreso-minimo-vital",
    icon: Wallet,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
    features: [
      "Apoyo económico estable",
      "Para familias vulnerables",
      "Ingresos garantizados",
      "Tramitación completa",
    ],
    requisitos: [
      "Residencia legal en España",
      "Ingresos por debajo del umbral",
      "Patrimonio limitado",
      "Cumplir requisitos de la Seguridad Social",
    ],
  },
];

const beneficios = [
  {
    icon: Clock,
    title: "Rápido",
    description: "Respuesta en menos de 48 horas",
  },
  {
    icon: Shield,
    title: "Seguro",
    description: "Tus datos están protegidos",
  },
  {
    icon: Users,
    title: "Personalizado",
    description: "Asesoramiento individual",
  },
  {
    icon: Award,
    title: "Garantizado",
    description: "Solo pagas si recibes la ayuda",
  },
];

export default function GestionesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section - Optimizado móvil */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 pt-20 pb-12 md:py-20 lg:py-32">
        {/* Efectos de fondo */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
          <div className="absolute -right-20 top-1/2 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-pulse-delay-1000" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-white shadow-lg ring-2 ring-white/30 md:mb-6 md:px-5 md:py-2.5 md:text-sm">
              <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
              <span>Trámites 100% online</span>
            </div>

            <h1 className="mb-4 text-xl font-semibold tracking-tight text-white sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl xl:text-5xl">
              Nuestras{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-white via-white/95 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  Gestiones
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-white/30 blur-xl md:-bottom-3 md:h-4"></span>
              </span>
            </h1>

            <p className="mx-auto mb-6 max-w-2xl text-base font-medium text-white/95 md:mb-8 md:text-xl lg:text-2xl">
              Te ayudamos a conseguir las ayudas sociales que te corresponden.{" "}
              <span className="font-bold">Sin complicaciones, sin burocracia, sin perder el tiempo.</span>
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <div className="rounded-xl bg-white/20 backdrop-blur-md px-4 py-2.5 text-white shadow-xl ring-2 ring-white/30 md:rounded-2xl md:px-6 md:py-3">
                <div className="text-2xl font-bold md:text-3xl">+2.5M€</div>
                <div className="text-xs opacity-90 md:text-sm">Conseguidos para clientes</div>
              </div>
              <div className="rounded-xl bg-white/20 backdrop-blur-md px-4 py-2.5 text-white shadow-xl ring-2 ring-white/30 md:rounded-2xl md:px-6 md:py-3">
                <div className="text-2xl font-bold md:text-3xl">+600</div>
                <div className="text-xs opacity-90 md:text-sm">Personas confían en nosotros</div>
              </div>
              <div className="rounded-xl bg-white/20 backdrop-blur-md px-4 py-2.5 text-white shadow-xl ring-2 ring-white/30 md:rounded-2xl md:px-6 md:py-3">
                <div className="text-2xl font-bold md:text-3xl">100%</div>
                <div className="text-xs opacity-90 md:text-sm">Online y seguro</div>
              </div>
            </div>
          </div>
        </div>

        {/* Onda decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-white/10 to-white md:h-24" />
      </section>

      {/* Sección de Gestiones - Optimizado móvil */}
      <section className="bg-white py-12 md:py-20 lg:py-32">
        <div className="container px-4">
          <div className="mb-10 text-center md:mb-16">
            <h2 className="mb-3 text-lg font-semibold tracking-tight text-navy sm:text-xl md:mb-4 md:text-2xl lg:text-3xl">
              Descubre las ayudas que{" "}
              <span className="text-primary">te pertenecen</span>
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-600 md:text-base lg:text-lg">
              Selecciona la gestión que te interesa y descubre cómo podemos ayudarte a conseguirla
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-8 lg:gap-10">
            {gestiones.map((gestion) => {
              const Icon = gestion.icon;
              return (
                <Card
                  key={gestion.id}
                  className="group relative overflow-hidden border-2 transition-all active:scale-[0.98] md:hover:border-primary/50 md:hover:shadow-2xl"
                >
                  {/* Efecto de gradiente decorativo */}
                  <div className={`absolute right-0 top-0 h-24 w-24 bg-gradient-to-br ${gestion.color} opacity-10 blur-2xl transition-opacity md:h-32 md:w-32 md:group-hover:opacity-20`} />

                  <CardContent className="relative p-5 md:p-8">
                    {/* Header con icono */}
                    <div className="mb-4 flex items-start justify-between md:mb-6">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${gestion.iconBg} transition-transform md:h-16 md:w-16 md:rounded-2xl md:group-hover:scale-110`}>
                        <Icon className={`h-6 w-6 text-primary md:h-8 md:w-8`} />
                      </div>
                      <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${gestion.color} opacity-10 md:h-12 md:w-12`} />
                    </div>

                    {/* Título y subtítulo */}
                    <h3 className="mb-1.5 text-lg font-bold text-navy md:mb-2 md:text-xl">{gestion.title}</h3>
                    <p className="mb-3 text-base font-semibold text-primary md:mb-4 md:text-lg">{gestion.subtitle}</p>

                    {/* Descripción */}
                    <p className="mb-4 text-sm text-slate-600 leading-relaxed md:mb-6 md:text-base">{gestion.description}</p>

                    {/* Features destacadas */}
                    <div className="mb-4 space-y-1.5 md:mb-6 md:space-y-2">
                      {gestion.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 md:h-5 md:w-5">
                            <Check className="h-2.5 w-2.5 text-primary md:h-3 md:w-3" />
                          </div>
                          <span className="text-xs font-medium text-slate-700 md:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Requisitos principales */}
                    <div className={`mb-4 rounded-lg ${gestion.bgColor} p-3 md:mb-6 md:rounded-xl md:p-4`}>
                      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500 md:mb-2 md:text-xs">
                        Requisitos principales
                      </p>
                      <ul className="space-y-1">
                        {gestion.requisitos.slice(0, 2).map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 md:text-sm">
                            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary md:h-1.5 md:w-1.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Botón CTA */}
                    <Button
                      size="lg"
                      className="h-12 w-full rounded-full bg-primary text-sm font-semibold shadow-lg transition-all active:scale-95 md:h-auto md:text-base md:hover:bg-[#0F7494] md:hover:shadow-xl"
                      asChild
                    >
                      <Link href={gestion.href} className="group/btn">
                        Ver más información
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform md:h-5 md:w-5 md:group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beneficios Generales - Optimizado móvil */}
      <section className="border-y border-border/40 bg-gradient-to-br from-slate-50 to-white py-12 md:py-20 lg:py-28">
        <div className="container px-4">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="mb-3 text-lg font-semibold tracking-tight text-navy sm:text-xl md:mb-4 md:text-2xl">
              ¿Por qué elegir{" "}
              <span className="text-primary">Tu Trámite Fácil</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-600 md:text-base lg:text-lg">
              Trabajamos cada día para que nadie pierda una ayuda que le corresponde
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {beneficios.map((beneficio, idx) => {
              const Icon = beneficio.icon;
              return (
                <Card
                  key={idx}
                  className="group border-2 transition-all active:scale-[0.98] md:hover:border-primary/50 md:hover:shadow-xl"
                >
                  <CardContent className="p-5 text-center md:p-6">
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-transform md:mb-4 md:h-14 md:w-14 md:rounded-2xl md:group-hover:scale-110">
                      <Icon className="h-6 w-6 text-primary md:h-7 md:w-7" />
                    </div>
                    <h3 className="mb-1.5 text-sm font-bold text-navy md:mb-2 md:text-base">{beneficio.title}</h3>
                    <p className="text-xs text-slate-600 md:text-sm">{beneficio.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final - Optimizado móvil */}
      <section className="bg-gradient-to-r from-primary to-[#0F7494] py-12 text-white md:py-20 lg:py-32">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-3 text-lg font-semibold sm:text-xl md:mb-4 md:text-2xl lg:text-3xl">
              ¿Listo para comprobar tus ayudas?
            </h2>
            <p className="mb-6 text-base text-white/90 md:mb-8 md:text-lg lg:text-xl">
              Regístrate gratis y descubre en minutos si puedes acceder a alguna de estas gestiones
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="h-12 w-full rounded-full bg-white px-6 text-sm font-semibold text-primary shadow-xl transition-all active:scale-95 sm:h-14 sm:w-auto sm:px-8 sm:text-base md:hover:bg-white/90"
                asChild
              >
                <Link href="/">
                  Ver todas las gestiones
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full rounded-full border-2 border-white bg-transparent px-6 text-sm font-semibold text-white transition-all active:scale-95 sm:h-14 sm:w-auto sm:px-8 sm:text-base md:hover:bg-white/10"
                asChild
              >
                <Link href="/contacto">Contactar con un asesor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
