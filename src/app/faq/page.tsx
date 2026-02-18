import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes (FAQ) | Burocracia CERO",
  description: "Resuelve todas tus dudas sobre nuestros servicios de tramitación de ayudas sociales y gestiones administrativas.",
};

const faqCategories = [
  {
    category: "General",
    questions: [
      {
        q: "¿Qué es Burocracia CERO?",
        a: "Somos una plataforma online que te ayuda a gestionar trámites administrativos y solicitar ayudas sociales de forma rápida y sencilla. Nos encargamos de todo el papeleo para que tú no pierdas tiempo ni oportunidades.",
      },
      {
        q: "¿Cómo funciona el servicio?",
        a: "Es muy sencillo: (1) Rellenas un formulario con tus datos, (2) Validamos si cumples los requisitos, (3) Te informamos de las condiciones, (4) Tramitamos tu solicitud ante la administración, (5) Solo pagas si consigues la ayuda.",
      },
      {
        q: "¿Tiene algún coste registrarse?",
        a: "No. Crear una cuenta y consultar tu caso es completamente gratis. Solo si decidimos tramitar tu solicitud te informamos previamente de las condiciones y costes asociados. Sin sorpresas.",
      },
      {
        q: "¿Qué trámites ofrecéis?",
        a: "Gestionamos ayudas sociales como el Bono Cultural Joven, Cheque Bebé, Ayuda al Alquiler, Ingreso Mínimo Vital, DNI, Empadronamiento y otros trámites administrativos. Consulta la sección de Gestiones para más información.",
      },
    ],
  },
  {
    category: "Costes y Pagos",
    questions: [
      {
        q: "¿Cuánto cuesta el servicio?",
        a: "El coste varía según el trámite. Siempre te informamos claramente antes de comenzar. Lo más importante: solo pagas si consigues la ayuda. Si te la deniegan, no pagas nada.",
      },
      {
        q: "¿Cuándo tengo que pagar?",
        a: "Solo pagas cuando la ayuda ha sido aprobada y el dinero está en tu cuenta. Nunca cobramos por adelantado ni si la solicitud es rechazada.",
      },
      {
        q: "¿Qué métodos de pago aceptáis?",
        a: "Aceptamos transferencia bancaria, tarjeta de crédito/débito y otros métodos seguros. Todos los pagos están protegidos con cifrado SSL de 256 bits.",
      },
      {
        q: "¿Hay alguna comisión oculta?",
        a: "No. Somos 100% transparentes. El precio que te indicamos es el precio final. Sin comisiones ocultas ni letra pequeña.",
      },
    ],
  },
  {
    category: "Proceso y Plazos",
    questions: [
      {
        q: "¿Cuánto tarda el proceso?",
        a: "Depende del tipo de trámite y de la administración pública correspondiente. Normalmente, desde que enviamos la solicitud hasta la resolución pueden pasar entre 2 y 6 semanas. Te mantenemos informado en todo momento.",
      },
      {
        q: "¿Qué pasa si me deniegan la ayuda?",
        a: "No pagas nada. Solo cobramos si consigues la ayuda. Sin riesgos para ti. Además, te explicamos los motivos del rechazo y, si es posible, te ayudamos a corregir la solicitud.",
      },
      {
        q: "¿Puedo hacer seguimiento de mi solicitud?",
        a: "Sí. Una vez creada tu cuenta, puedes acceder a 'Mi Cuenta' para ver el estado actualizado de tu solicitud. También te enviamos notificaciones por email cuando hay novedades.",
      },
      {
        q: "¿Puedo cancelar mi solicitud?",
        a: "Sí, puedes cancelar tu solicitud en cualquier momento antes de que la enviemos a la administración. Una vez enviada, el proceso queda en manos de la administración pública.",
      },
    ],
  },
  {
    category: "Seguridad y Privacidad",
    questions: [
      {
        q: "¿Mis datos están seguros?",
        a: "Sí. Usamos cifrado SSL de 256 bits y cumplimos estrictamente con el Reglamento General de Protección de Datos (RGPD). Tus datos nunca son compartidos con terceros sin tu consentimiento expreso.",
      },
      {
        q: "¿Qué hacéis con mi información personal?",
        a: "Solo la usamos para tramitar tu solicitud. No vendemos ni compartimos tus datos con terceros. Puedes consultar nuestra Política de Privacidad para más detalles.",
      },
      {
        q: "¿Puedo solicitar la eliminación de mis datos?",
        a: "Sí. Tienes derecho a acceder, rectificar o eliminar tus datos en cualquier momento. Contáctanos a través del formulario o por email y lo gestionamos inmediatamente.",
      },
    ],
  },
  {
    category: "Ayuda y Soporte",
    questions: [
      {
        q: "¿Puedo hablar con un asesor antes de registrarme?",
        a: "Por supuesto. Puedes contactarnos por WhatsApp, email o a través del formulario de contacto. Te respondemos sin compromiso y resolvemos todas tus dudas.",
      },
      {
        q: "¿Tenéis servicio de atención al cliente?",
        a: "Sí. Nuestro equipo está disponible de lunes a viernes de 9:00 a 18:00h. Puedes contactarnos por WhatsApp, email o formulario de contacto.",
      },
      {
        q: "¿Qué hago si tengo un problema técnico?",
        a: "Escríbenos a soporte@burocraciacero.com o por WhatsApp. Nuestro equipo técnico te ayudará a resolverlo lo antes posible.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-white pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
              Preguntas Frecuentes
            </h1>
            <p className="text-lg text-slate-600 md:text-xl">
              Encuentra respuestas a las dudas más comunes sobre nuestros servicios
            </p>
          </div>
        </div>
      </section>

      {/* FAQ por categorías */}
      <section className="bg-white py-20 md:py-28">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            {faqCategories.map((category) => (
              <div key={category.category}>
                <h2 className="mb-6 text-2xl font-semibold text-navy">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, i) => (
                    <details
                      key={i}
                      className="group rounded-2xl border-2 border-slate-100 bg-white shadow-md transition-all hover:border-primary hover:shadow-card"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-navy [&::-webkit-details-marker]:hidden md:px-8 md:py-6">
                        {faq.q}
                        <ChevronDown className="h-6 w-6 shrink-0 text-primary transition-transform group-open:rotate-180" />
                      </summary>
                      <p className="border-t-2 border-slate-100 px-6 py-5 leading-relaxed text-slate-600 md:px-8 md:py-6">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA de contacto */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 md:py-28">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-r from-primary to-[#0F7494] p-8 text-center text-white shadow-card md:p-12">
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Contacta con nuestro equipo y te ayudaremos encantados
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="h-14 rounded-full bg-white px-8 text-base font-semibold text-primary shadow-xl hover:bg-white/90"
                asChild
              >
                <a
                  href={CONTACT.whatsappUrl("Hola, tengo una consulta.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-2 border-white px-8 text-base font-semibold text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href={`mailto:${CONTACT.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
