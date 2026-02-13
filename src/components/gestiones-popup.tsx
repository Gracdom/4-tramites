"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Baby, Ticket, Key, Wallet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const gestiones = [
  { title: "Cheque Bebé", desc: "100€ al mes por hijo menor de 3 años", href: "/gestiones/cheque-bebe", icon: Baby },
  { title: "Bono Cultural Joven", desc: "Hasta 400€ para cultura en 2025", href: "/gestiones/bono-cultural", icon: Ticket },
  { title: "Ayuda al Alquiler", desc: "Ayudas para tu vivienda en alquiler", href: "/gestiones/ayuda-alquiler", icon: Key },
  { title: "Ingreso Mínimo Vital", desc: "Apoyo económico estable para tu hogar", href: "/gestiones/ingreso-minimo-vital", icon: Wallet },
];

type GestionesPopupProps = {
  open: boolean;
  onClose: () => void;
};

export function GestionesPopup({ open, onClose }: GestionesPopupProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8 md:max-w-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-navy"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 id="popup-title" className="mb-6 text-center text-xl font-bold text-navy sm:text-2xl">
          Solicitar trámite
        </h2>
        <p className="mb-6 text-center text-sm text-slate-600">
          Elige la gestión que deseas realizar
        </p>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {gestiones.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex flex-col items-center justify-between rounded-xl border-2 border-slate-100 p-4 transition-all hover:border-primary hover:shadow-lg sm:p-5"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="mb-1 text-center text-sm font-semibold text-navy sm:text-base">
                  {item.title}
                </h3>
                <p className="mb-3 text-center text-xs text-slate-500 sm:text-sm">
                  {item.desc}
                </p>
                <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors group-hover:bg-[#0F7494]">
                  Ir a la gestión
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** Botón flotante o inline que abre el popup de gestiones */
export function GestionesPopupTrigger({ className, children }: { className?: string; children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} className={className}>
        {children ?? (
          <>
            Solicitar trámite
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
      <GestionesPopup open={open} onClose={() => setOpen(false)} />
    </>
  );
}
