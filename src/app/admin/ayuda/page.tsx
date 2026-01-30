import {
  Book,
  Video,
  MessageCircle,
  Mail,
  Phone,
  FileQuestion,
  Search,
  ExternalLink,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const faqCategories = [
  {
    title: "Gestión de Usuarios",
    icon: Book,
    color: "bg-blue-50 text-blue-600",
    questions: [
      "¿Cómo agregar un nuevo usuario?",
      "¿Cómo editar información de usuario?",
      "¿Cómo desactivar una cuenta de usuario?",
    ],
  },
  {
    title: "Gestión de Solicitudes",
    icon: FileQuestion,
    color: "bg-primary/10 text-primary",
    questions: [
      "¿Cómo aprobar una solicitud?",
      "¿Cómo rechazar una solicitud?",
      "¿Qué documentos son necesarios?",
    ],
  },
  {
    title: "Reportes y Estadísticas",
    icon: Book,
    color: "bg-green-50 text-green-600",
    questions: [
      "¿Cómo generar un reporte mensual?",
      "¿Cómo exportar estadísticas?",
      "¿Cómo interpretar las gráficas?",
    ],
  },
  {
    title: "Configuración del Sistema",
    icon: Book,
    color: "bg-amber-50 text-amber-600",
    questions: [
      "¿Cómo configurar notificaciones?",
      "¿Cómo cambiar la contraseña?",
      "¿Cómo configurar el email?",
    ],
  },
];

const resources = [
  {
    title: "Guía de Inicio Rápido",
    description: "Aprende los conceptos básicos del panel de administración",
    icon: Book,
    color: "bg-blue-50 text-blue-600",
    type: "Documentación",
  },
  {
    title: "Video Tutoriales",
    description: "Tutoriales paso a paso en video",
    icon: Video,
    color: "bg-red-50 text-red-600",
    type: "Videos",
  },
  {
    title: "Base de Conocimiento",
    description: "Artículos detallados sobre todas las funciones",
    icon: Book,
    color: "bg-green-50 text-green-600",
    type: "Documentación",
  },
];

export default function AyudaPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-navy">Centro de Ayuda</h1>
        <p className="text-slate-600">
          Encuentra respuestas y aprende a usar el panel de administración
        </p>
      </div>

      {/* Search */}
      <Card className="border-2 border-slate-100 p-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder="Buscar en la ayuda..."
            className="h-12 rounded-lg border-2 pl-12 text-base"
          />
        </div>
      </Card>

      {/* Quick Contact */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-2 border-slate-100 p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <MessageCircle className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 text-lg font-bold text-navy">Chat en Vivo</h3>
          <p className="mb-4 text-sm text-slate-600">
            Chatea con nuestro equipo de soporte
          </p>
          <button className="text-sm font-medium text-primary hover:underline">
            Iniciar chat →
          </button>
        </Card>

        <Card className="border-2 border-slate-100 p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="mb-2 text-lg font-bold text-navy">Email</h3>
          <p className="mb-4 text-sm text-slate-600">
            Envíanos un correo electrónico
          </p>
          <a
            href="mailto:soporte@gestionesespana.es"
            className="text-sm font-medium text-primary hover:underline"
          >
            soporte@gestionesespana.es →
          </a>
        </Card>

        <Card className="border-2 border-slate-100 p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
            <Phone className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="mb-2 text-lg font-bold text-navy">Teléfono</h3>
          <p className="mb-4 text-sm text-slate-600">Llámanos directamente</p>
          <a
            href="tel:+34600000000"
            className="text-sm font-medium text-primary hover:underline"
          >
            +34 600 000 000 →
          </a>
        </Card>
      </div>

      {/* Resources */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-navy">Recursos de Ayuda</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Card
                key={resource.title}
                className="group cursor-pointer border-2 border-slate-100 p-6 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${resource.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-400 transition-colors group-hover:text-primary" />
                </div>
                <div className="mb-2 inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                  {resource.type}
                </div>
                <h3 className="mb-2 text-lg font-bold text-navy">
                  {resource.title}
                </h3>
                <p className="text-sm text-slate-600">{resource.description}</p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* FAQ Categories */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-navy">
          Preguntas Frecuentes
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faqCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="border-2 border-slate-100 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${category.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-navy">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.questions.map((question) => (
                    <li key={question}>
                      <button className="text-left text-sm text-slate-600 hover:text-primary hover:underline">
                        {question}
                      </button>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 text-sm font-medium text-primary hover:underline">
                  Ver todas las preguntas →
                </button>
              </Card>
            );
          })}
        </div>
      </div>

      {/* System Info */}
      <Card className="border-2 border-slate-100 p-6">
        <h2 className="mb-4 text-lg font-bold text-navy">
          Información del Sistema
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <p className="text-sm text-slate-600">Versión del Sistema</p>
            <p className="font-semibold text-navy">v2.4.1</p>
          </div>
          <div>
            <p className="text-sm text-slate-600">Última Actualización</p>
            <p className="font-semibold text-navy">28 Ene 2026</p>
          </div>
          <div>
            <p className="text-sm text-slate-600">Estado del Sistema</p>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <p className="font-semibold text-green-600">Operativo</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
