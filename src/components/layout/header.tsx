"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, ChevronDown, User, Ticket, Baby, Key, Wallet } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const servicios = [
  { href: "/gestiones/bono-cultural", label: "Bono Cultural Joven", icon: Ticket },
  { href: "/gestiones/cheque-bebe", label: "Cheque Bebé", icon: Baby },
  { href: "/gestiones/ayuda-alquiler", label: "Ayuda al Alquiler", icon: Key },
  { href: "/gestiones/ingreso-minimo-vital", label: "Ingreso Mínimo Vital", icon: Wallet },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServiciosOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleServicios = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setServiciosOpen(!serviciosOpen);
  };

  return (
    <header className="absolute top-0 z-[100] w-full px-4 pt-4">
      {/* Floating Header Bar - Color Corporativo */}
      <div className="mx-auto max-w-7xl rounded-full bg-primary/95 px-6 py-3 shadow-2xl backdrop-blur-md transition-all duration-300 hover:shadow-primary/20 md:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo y Menu Mobile */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            
            <Link
              href="/"
              className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
            >
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Gestiones España"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="hidden font-bold tracking-tight text-white sm:block">
                GESTIONES ESPAÑA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex list-none items-center gap-2">
              {/* Inicio */}
              <li>
                <Link
                  href="/"
                  className={cn(
                    "rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                    pathname === "/"
                      ? "bg-white/20 text-white"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  )}
                >
                  Inicio
                </Link>
              </li>

              {/* Servicios - Dropdown */}
              <li className="relative">
                <div ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={toggleServicios}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                      pathname.startsWith("/gestiones")
                        ? "bg-white/20 text-white"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    Servicios
                    <ChevronDown 
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        serviciosOpen && "rotate-180"
                      )} 
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {serviciosOpen && (
                    <div className="absolute left-0 top-full z-[200] mt-2 w-64 animate-in fade-in slide-in-from-top-2 rounded-2xl bg-white p-2 shadow-2xl duration-200">
                      {servicios.map((servicio) => {
                        const Icon = servicio.icon;
                        return (
                          <Link
                            key={servicio.href}
                            href={servicio.href}
                            onClick={() => setServiciosOpen(false)}
                            className="flex items-center gap-3 rounded-xl px-4 py-3 text-navy transition-all hover:bg-slate-50"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <span className="text-sm font-medium">{servicio.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </li>

              {/* Contacto */}
              <li>
                <Link
                  href="/contacto"
                  className={cn(
                    "rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                    pathname === "/contacto"
                      ? "bg-white/20 text-white"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  )}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Section - User Avatar */}
          <div className="flex items-center gap-4">
            <Link href="/perfil" className="group relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20 transition-all group-hover:bg-white/20 group-hover:ring-white/40">
                <User className="h-5 w-5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-7xl animate-in fade-in slide-in-from-top-2 rounded-2xl bg-primary/95 p-4 shadow-2xl backdrop-blur-md duration-200 lg:hidden">
          <nav>
            <ul className="space-y-1">
              {/* Inicio */}
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm font-medium transition-all",
                    pathname === "/"
                      ? "bg-white/20 text-white"
                      : "text-white/90 hover:bg-white/10"
                  )}
                >
                  Inicio
                </Link>
              </li>

              {/* Servicios */}
              <li>
                <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/60">
                  Servicios
                </div>
                <ul className="space-y-1">
                  {servicios.map((servicio) => {
                    const Icon = servicio.icon;
                    return (
                      <li key={servicio.href}>
                        <Link
                          href={servicio.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                            pathname === servicio.href
                              ? "bg-white/20 text-white"
                              : "text-white/90 hover:bg-white/10"
                          )}
                        >
                          <Icon className="h-4 w-4" />
                          {servicio.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>

              {/* Contacto */}
              <li>
                <Link
                  href="/contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm font-medium transition-all",
                    pathname === "/contacto"
                      ? "bg-white/20 text-white"
                      : "text-white/90 hover:bg-white/10"
                  )}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
