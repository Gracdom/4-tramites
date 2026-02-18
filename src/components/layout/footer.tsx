import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Lock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { CONTACT } from "@/lib/contact";

const footerNav = {
  ayuda: [
    { label: "Ayuda", href: "/contacto" },
    { label: "Preguntas frecuentes", href: "/faq" },
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
      {/* Contenido del footer - Optimizado móvil */}
      <div className="container px-4 py-8 sm:py-12 md:py-16">
        {/* Logo y descripción */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:gap-8 md:mb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-2 inline-block md:mb-4" aria-label="Inicio">
              <div className="relative h-9 w-12 shrink-0 sm:h-12 sm:w-16 md:h-14 md:w-20">
                <Image
                  src="/logo.png"
                  alt="Burocracia CERO"
                  fill
                  className="object-contain mix-blend-lighten"
                />
              </div>
            </Link>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-white/70 sm:mt-4 md:text-sm">
              Tu plataforma de confianza para gestionar trámites administrativos, ayudas sociales y más. 
              Sin complicaciones, 100% online.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3 md:mt-6 md:gap-6">
              <span className="flex items-center gap-1.5 text-xs text-white/80 md:text-sm">
                <Shield className="h-3.5 w-3.5 text-primary md:h-5 md:w-5" />
                Safe & Secure
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/80 md:text-sm">
                <Lock className="h-3.5 w-3.5 text-primary md:h-5 md:w-5" />
                256-bit SSL
              </span>
            </div>

            {/* Datos de contacto rápidos */}
            <div className="mt-4 space-y-1.5 text-xs text-white/80 md:mt-6 md:text-sm">
              <div className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary md:h-5 md:w-5" />
                <a
                  href={CONTACT.whatsappUrl("Hola, tengo una consulta sobre mis trámites.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary underline-offset-2 hover:underline"
                >
                  WhatsApp: {CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary md:h-5 md:w-5" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-primary underline-offset-2 hover:underline"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>

          {/* Columnas de navegación - 2 columnas en móvil */}
          <div className="grid grid-cols-2 gap-4 sm:contents">
            <div>
              <h3 className="mb-2 text-xs font-semibold text-white sm:text-sm md:mb-4 md:text-base">Ayuda</h3>
              <ul className="space-y-1.5 md:space-y-2.5">
                {footerNav.ayuda.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block text-xs text-white/70 transition-colors active:text-primary md:text-sm md:hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-xs font-semibold text-white sm:text-sm md:mb-4 md:text-base">Empresa</h3>
              <ul className="space-y-1.5 md:space-y-2.5">
                {footerNav.empresa.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block text-xs text-white/70 transition-colors active:text-primary md:text-sm md:hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Redes sociales y Copyright - Optimizado móvil */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-center sm:gap-6 md:flex-row md:pt-8">
          <p className="text-xs text-white/60 sm:text-sm">
            © {new Date().getFullYear()} Burocracia CERO. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all active:scale-95 active:bg-primary md:hover:bg-primary md:hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all active:scale-95 active:bg-primary md:hover:bg-primary md:hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all active:scale-95 active:bg-primary md:hover:bg-primary md:hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all active:scale-95 active:bg-primary md:hover:bg-primary md:hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
