import Link from "next/link";
import { Shield, Lock, Facebook, Instagram, Linkedin, Youtube, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerNav = {
  ayuda: [
    { label: "Ayuda", href: "/contacto" },
    { label: "Preguntas frecuentes", href: "/#faq" },
    { label: "Contacto", href: "/contacto" },
  ],
  legal: [
    { label: "Aviso legal", href: "/legal" },
    { label: "Política de privacidad", href: "/privacidad" },
    { label: "Cookies", href: "/cookies" },
  ],
  empresa: [
    { label: "Sobre nosotros", href: "/sobre-nosotros" },
    { label: "Trámites", href: "/gestiones" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-navy text-white">
      {/* Tarjeta flotante estilo Medcity */}
      <div className="relative">
        <div className="container px-4">
          <div className="relative -top-20 mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-card md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-navy md:text-3xl">
                  Suscríbete a nuestro boletín
                </h3>
                <p className="text-slate-600">
                  Recibe las últimas noticias sobre ayudas, trámites y consejos directamente en tu correo.
                </p>
              </div>
              <form className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="h-14 rounded-2xl border-2 border-slate-200 pl-12 pr-4 text-base focus:border-primary"
                  />
                </div>
                <Button
                  type="submit"
                  className="h-14 rounded-2xl bg-primary px-8 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#0F7494] hover:shadow-xl"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Suscribir
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido del footer */}
      <div className="container px-4 pb-12 pt-8">
        {/* Logo y descripción */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center gap-2.5 font-bold text-white">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-2xl shadow-md">
                🇪🇸
              </span>
              <div className="flex flex-col">
                <span className="text-lg leading-tight">Gestiones</span>
                <span className="text-lg leading-tight text-primary">España</span>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Tu plataforma de confianza para gestionar trámites administrativos, ayudas sociales y más. 
              Sin complicaciones, 100% online.
            </p>
            <div className="mt-6 flex items-center gap-6">
              <span className="flex items-center gap-2 text-sm text-white/80">
                <Shield className="h-5 w-5 text-primary" />
                Safe & Secure
              </span>
              <span className="flex items-center gap-2 text-sm text-white/80">
                <Lock className="h-5 w-5 text-primary" />
                256-bit SSL
              </span>
            </div>
          </div>

          {/* Columnas de navegación */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Ayuda</h3>
            <ul className="space-y-2.5">
              {footerNav.ayuda.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">Empresa</h3>
            <ul className="space-y-2.5">
              {footerNav.empresa.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Redes sociales y Copyright */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Gestiones España. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-primary hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-primary hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-primary hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-primary hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
