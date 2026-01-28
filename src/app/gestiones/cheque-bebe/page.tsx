import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  FileCheck,
  ShieldCheck,
  Send,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Cheque Bebé 100€/mes | ¿Te corresponde? | Gestiones España",
  description:
    "Hasta 100€ al mes por hijo menor de 3 años. Comprueba en 1 minuto si te pertenece la ayuda. Sin complicaciones, trámite rápido y sin desplazamientos.",
};

export default function ChequeBebePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section con imagen de fondo */}
      <section className="relative min-h-[700px] bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-20 md:min-h-[800px] md:pb-32">
        {/* Background con overlay */}
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
            {/* Columna Izquierda - Contenido */}
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Baby className="h-4 w-4" />
                Ayuda para tu bebé
              </div>

              {/* Título Principal */}
              <h1 className="mb-6 text-4xl font-bold leading-tight text-navy md:text-5xl lg:text-6xl">
                Vibrant Smile For
                <br />
                <span className="text-primary">Healthy Lifestyle!</span>
              </h1>

              <p className="mb-4 text-xl font-semibold text-navy">
                ¿Te pertenecen hasta 100€ al mes por tu bebé?
              </p>

              <p className="mb-8 text-lg text-slate-600">
                Gestiona trámites, ayudas al alquiler, cheque bebé y más. Sin complicaciones y 100% online.
              </p>

              {/* Rating con estrellas */}
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

              {/* Botones CTA */}
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

              {/* Features Grid */}
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

            {/* Columna Derecha - Formulario */}
            <div className="flex items-center">
              <div className="w-full rounded-3xl bg-white p-8 shadow-2xl md:p-10">
                <h3 className="mb-2 text-2xl font-bold text-navy">Registrarse ahora</h3>
                <p className="mb-6 text-sm text-slate-500">
                  No requiere tarjeta de crédito • 100% gratis
                </p>

                <form className="space-y-5">
                  <div className="grid gap-2">
                    <Label htmlFor="nombre" className="text-sm font-semibold text-slate-700">
                      Nombre completo
                    </Label>
                    <Input
                      id="nombre"
                      placeholder="Tu nombre"
                      className="h-12 rounded-xl border-2 border-slate-200 px-4 focus:border-primary"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-slate-700">
                      Correo electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="h-12 rounded-xl border-2 border-slate-200 px-4 focus:border-primary"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="telefono" className="text-sm font-semibold text-slate-700">
                      Teléfono
                    </Label>
                    <Input
                      id="telefono"
                      type="tel"
                      placeholder="+34 600 000 000"
                      className="h-12 rounded-xl border-2 border-slate-200 px-4 focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-12 w-full rounded-xl bg-primary text-base font-semibold text-white shadow-lg transition-all hover:bg-[#0F7494] hover:shadow-xl"
                  >
                    Crear cuenta gratis
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards flotantes con info de contacto - Overlap negativo */}
      <section className="relative z-20 -mt-32">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group rounded-2xl bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-navy">Teléfono de Contacto</h3>
              <p className="mb-1 text-sm text-slate-600">Llámanos sin compromiso</p>
              <p className="font-semibold text-primary">+34 900 123 456</p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-navy">Correo Electrónico</h3>
              <p className="mb-1 text-sm text-slate-600">Escríbenos tus dudas</p>
              <p className="font-semibold text-primary">info@gestiones.es</p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-navy">Horario de Atención</h3>
              <p className="mb-1 text-sm text-slate-600">Lun - Vie: 9:00 - 18:00</p>
              <p className="font-semibold text-primary">Sábados: 10:00 - 14:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de texto con imagen - Diseño Medcity */}
      <section className="bg-white py-20 md:py-32">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Texto izquierda */}
            <div>
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                Tu Plataforma de Gestiones
              </div>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-navy md:text-4xl">
                Improving The Quality Of
                <br />
                Your Life Through Better{" "}
                <span className="text-primary">Health</span>
              </h2>
              <p className="mb-6 text-lg text-slate-600">
                Recupera tu tiempo mientras nosotros nos ocupamos de tus derechos. En Gestiones España, nuestro compromiso es que recibas lo que te corresponde sin complicaciones.
              </p>

              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Sin complicaciones</p>
                    <p className="text-sm text-slate-600">Trámite 100% online y sin papeleo</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Asesoramiento personalizado</p>
                    <p className="text-sm text-slate-600">Expertos disponibles para ayudarte</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Seguridad garantizada</p>
                    <p className="text-sm text-slate-600">Tus datos están protegidos</p>
                  </div>
                </li>
              </ul>

              <Button
                size="lg"
                className="h-12 rounded-xl bg-primary px-8 font-semibold shadow-lg transition-all hover:bg-[#0F7494] hover:shadow-xl"
                asChild
              >
                <Link href="#formulario">
                  Solicitar ayuda ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Imagen derecha */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                  alt="Profesional ayudando"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Badge flotante */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-navy">+600</p>
                    <p className="text-sm text-slate-600">Familias ayudadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de servicios con iconos dobles */}
      <section className="bg-slate-50 py-20 md:py-32">
        <div className="container px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-slate-600">
              Todo lo que necesitas para acceder a tus ayudas sociales
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Baby, title: "Cheque Bebé", desc: "100€/mes por hijo menor de 3 años" },
              { icon: MapPin, title: "Ayuda Alquiler", desc: "Soporte económico para tu vivienda" },
              { icon: Euro, title: "IMV", desc: "Ingreso Mínimo Vital garantizado" },
              { icon: Heart, title: "Otras Ayudas", desc: "Descubre más ayudas disponibles" },
            ].map((servicio, i) => {
              const Icon = servicio.icon;
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-card transition-all hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Icono grande de fondo */}
                  <div className="absolute right-4 top-4 opacity-5">
                    <Icon className="h-24 w-24" />
                  </div>
                  {/* Icono principal */}
                  <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all group-hover:bg-primary">
                    <Icon className="h-7 w-7 text-primary transition-all group-hover:text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-navy">{servicio.title}</h3>
                  <p className="mb-4 text-sm text-slate-600">{servicio.desc}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-semibold text-primary transition-all hover:gap-2"
                  >
                    Ver más
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sección de proceso - Fondo navy con ondas */}
      <section className="wave-top relative bg-navy py-20 text-white md:py-32">
        <div className="container relative z-10 px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              We Provide All Aspects Of
              <br />
              Medical Practice For Your{" "}
              <span className="text-primary">Family</span>
            </h2>
            <p className="text-lg text-slate-300">
              Descubre lo fácil y ágil que es conseguir tus 100€ al mes por tu bebé
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "01", title: "Rellenas el formulario", desc: "Solo tus datos básicos" },
              { num: "02", title: "Validamos tu ayuda", desc: "En segundos sabemos si cumples" },
              { num: "03", title: "Aceptas la tramitación", desc: "Nos encargamos del papeleo" },
              { num: "04", title: "Recibes tu ayuda", desc: "El dinero llega a tu cuenta" },
            ].map((paso, i) => (
              <div key={i} className="group text-center">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-3xl font-bold transition-all group-hover:bg-primary">
                  {paso.num}
                </div>
                <h3 className="mb-2 text-xl font-bold">{paso.title}</h3>
                <p className="text-slate-300">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de confianza - Fondo teal con gradiente */}
      <section className="wave-bottom relative bg-gradient-to-br from-primary to-[#0F7494] py-20 text-white md:py-32">
        <div className="container relative z-10 px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Más de 2.500 familias confían en nosotros
            </h2>
            <p className="text-lg text-white/90">
              Democratizar el acceso a las ayudas sociales es nuestra misión
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
              <Euro className="mx-auto mb-4 h-12 w-12" />
              <p className="mb-2 text-4xl font-bold">2.5M€</p>
              <p className="text-white/90">Conseguidos para clientes</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
              <Users className="mx-auto mb-4 h-12 w-12" />
              <p className="mb-2 text-4xl font-bold">+600</p>
              <p className="text-white/90">Familias confían en nosotros</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
              <Calendar className="mx-auto mb-4 h-12 w-12" />
              <p className="mb-2 text-4xl font-bold">+1.729</p>
              <p className="text-white/90">Días ahorrados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios con fotos */}
      <section className="bg-white py-20 md:py-32">
        <div className="container px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
              Meet Our Experts
            </h2>
            <p className="text-lg text-slate-600">
              Más de 500 familias ya disfrutan de su ayuda gracias a nosotros
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {[
              { nombre: "Lucía Fernández", rol: "Madre beneficiaria", texto: "Pensaba que sería complicado pero me ayudaron con todo el proceso." },
              { nombre: "Marta López", rol: "Cliente satisfecha", texto: "El trato fue muy cercano y profesional. Lo recomiendo 100%." },
              { nombre: "Ana Sánchez", rol: "Usuaria del servicio", texto: "Todo online y sin desplazamientos. Perfecto para madres ocupadas." },
            ].map((testimonio, i) => (
              <div key={i} className="group rounded-2xl bg-slate-50 p-8 text-center transition-all hover:shadow-xl">
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-primary to-[#0F7494]">
                  <Image
                    src={`https://images.unsplash.com/photo-${1560250097-0b93528c311a + i}?w=200&h=200&fit=crop&crop=faces`}
                    alt={testimonio.nombre}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-lg font-bold text-navy">{testimonio.nombre}</h3>
                <p className="mb-4 text-sm font-medium text-primary">{testimonio.rol}</p>
                <p className="text-sm italic text-slate-600">"{testimonio.texto}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario final - Fondo navy */}
      <section id="formulario" className="relative bg-navy py-20 text-white md:py-32">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Texto izquierda */}
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Committed To Deliver
                <br />
                High Quality Services
              </h2>
              <p className="mb-8 text-lg text-slate-300">
                Nuestros asesores están siempre disponibles para ayudarte con cualquier duda sobre el cheque bebé.
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>Sin compromiso inicial</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>100% gratis hasta que recibas la ayuda</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>Asesoramiento personalizado</span>
                </div>
              </div>
            </div>

            {/* Formulario derecha */}
            <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-10">
              <h3 className="mb-6 text-2xl font-bold text-navy">
                Solicitar servicio
              </h3>

              <form className="space-y-5">
                <div className="grid gap-2">
                  <Label htmlFor="nombre-final" className="text-sm font-semibold text-slate-700">
                    Nombre y apellidos *
                  </Label>
                  <Input
                    id="nombre-final"
                    required
                    className="h-12 rounded-xl border-2 border-slate-200 px-4 focus:border-primary"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email-final" className="text-sm font-semibold text-slate-700">
                    Correo electrónico *
                  </Label>
                  <Input
                    id="email-final"
                    type="email"
                    required
                    className="h-12 rounded-xl border-2 border-slate-200 px-4 focus:border-primary"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="telefono-final" className="text-sm font-semibold text-slate-700">
                    Teléfono *
                  </Label>
                  <Input
                    id="telefono-final"
                    type="tel"
                    required
                    className="h-12 rounded-xl border-2 border-slate-200 px-4 focus:border-primary"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="mensaje" className="text-sm font-semibold text-slate-700">
                    ¿En qué te podemos ayudar?
                  </Label>
                  <Textarea
                    id="mensaje"
                    rows={4}
                    placeholder="Escribe tu duda sobre el cheque bebé..."
                    className="rounded-xl border-2 border-slate-200 px-4 py-3 focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-primary text-base font-semibold shadow-lg transition-all hover:bg-[#0F7494] hover:shadow-xl"
                >
                  Enviar solicitud
                </Button>

                <p className="text-center text-xs text-slate-500">
                  Al enviar aceptas nuestra política de privacidad
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
