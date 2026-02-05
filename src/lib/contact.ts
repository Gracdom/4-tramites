// Datos de contacto únicos - solo se atiende por WhatsApp (no llamadas ni SMS)
export const CONTACT = {
  phoneDisplay: "+34 910 20 29 11",
  phoneRaw: "34910202911", // sin + para wa.me
  email: "info@burocraciacero.com",
  whatsappUrl: (text?: string) =>
    `https://wa.me/34910202911${text ? `?text=${encodeURIComponent(text)}` : ""}`,
} as const;
