import {
  Bell,
  Mail,
  Lock,
  Database,
  Globe,
  Palette,
  Shield,
  Save,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ConfiguracionPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-navy">Configuración</h1>
        <p className="text-slate-600">
          Administra la configuración general del sistema
        </p>
      </div>

      {/* General Settings */}
      <Card className="border-2 border-slate-100 p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Globe className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy">Configuración General</h2>
            <p className="text-sm text-slate-600">
              Información básica de la plataforma
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="site-name" className="text-sm font-semibold">
              Nombre del Sitio
            </Label>
            <Input
              id="site-name"
              defaultValue="Burocracia CERO"
              className="h-10 rounded-lg border-2"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="site-description" className="text-sm font-semibold">
              Descripción
            </Label>
            <Textarea
              id="site-description"
              defaultValue="Plataforma para gestionar trámites administrativos y ayudas sociales"
              rows={3}
              className="resize-none rounded-lg border-2"
            />
          </div>

          <div className="grid gap-2 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="contact-email" className="text-sm font-semibold">
                Email de Contacto
              </Label>
              <Input
                id="contact-email"
                type="email"
                defaultValue="hola@gestionesespana.es"
                className="h-10 rounded-lg border-2"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-phone" className="text-sm font-semibold">
                Teléfono de Contacto
              </Label>
              <Input
                id="contact-phone"
                type="tel"
                defaultValue="+34 600 000 000"
                className="h-10 rounded-lg border-2"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="h-10 gap-2 rounded-lg bg-primary font-medium hover:bg-[#0F7494]">
              <Save className="h-4 w-4" />
              Guardar Cambios
            </Button>
          </div>
        </div>
      </Card>

      {/* Email Settings */}
      <Card className="border-2 border-slate-100 p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
            <Mail className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy">
              Configuración de Email
            </h2>
            <p className="text-sm text-slate-600">
              Configura el servidor SMTP para envío de correos
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-2 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="smtp-host" className="text-sm font-semibold">
                Servidor SMTP
              </Label>
              <Input
                id="smtp-host"
                placeholder="smtp.ejemplo.com"
                className="h-10 rounded-lg border-2"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="smtp-port" className="text-sm font-semibold">
                Puerto
              </Label>
              <Input
                id="smtp-port"
                type="number"
                placeholder="587"
                className="h-10 rounded-lg border-2"
              />
            </div>
          </div>

          <div className="grid gap-2 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="smtp-user" className="text-sm font-semibold">
                Usuario SMTP
              </Label>
              <Input
                id="smtp-user"
                type="email"
                placeholder="correo@ejemplo.com"
                className="h-10 rounded-lg border-2"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="smtp-password" className="text-sm font-semibold">
                Contraseña
              </Label>
              <Input
                id="smtp-password"
                type="password"
                placeholder="••••••••"
                className="h-10 rounded-lg border-2"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              className="h-10 rounded-lg border-2 font-medium"
            >
              Probar Conexión
            </Button>
            <Button className="h-10 gap-2 rounded-lg bg-primary font-medium hover:bg-[#0F7494]">
              <Save className="h-4 w-4" />
              Guardar
            </Button>
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="border-2 border-slate-100 p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
            <Bell className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy">Notificaciones</h2>
            <p className="text-sm text-slate-600">
              Configura las notificaciones del sistema
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border-2 border-slate-100 p-4">
            <div>
              <p className="font-medium text-navy">Nuevas solicitudes</p>
              <p className="text-sm text-slate-600">
                Recibir notificación cuando llegue una nueva solicitud
              </p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" defaultChecked className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20"></div>
            </label>
          </div>

          <div className="flex items-center justify-between rounded-lg border-2 border-slate-100 p-4">
            <div>
              <p className="font-medium text-navy">Solicitudes aprobadas</p>
              <p className="text-sm text-slate-600">
                Notificar cuando una solicitud sea aprobada
              </p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" defaultChecked className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20"></div>
            </label>
          </div>

          <div className="flex items-center justify-between rounded-lg border-2 border-slate-100 p-4">
            <div>
              <p className="font-medium text-navy">Nuevos usuarios</p>
              <p className="text-sm text-slate-600">
                Recibir notificación cuando se registre un nuevo usuario
              </p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20"></div>
            </label>
          </div>

          <div className="flex items-center justify-between rounded-lg border-2 border-slate-100 p-4">
            <div>
              <p className="font-medium text-navy">Reportes semanales</p>
              <p className="text-sm text-slate-600">
                Recibir resumen semanal de actividad
              </p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" defaultChecked className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20"></div>
            </label>
          </div>
        </div>
      </Card>

      {/* Security Settings */}
      <Card className="border-2 border-slate-100 p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
            <Shield className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy">Seguridad</h2>
            <p className="text-sm text-slate-600">
              Configuración de seguridad y privacidad
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border-2 border-slate-100 p-4">
            <div>
              <p className="font-medium text-navy">Autenticación de dos factores</p>
              <p className="text-sm text-slate-600">
                Requiere verificación adicional al iniciar sesión
              </p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20"></div>
            </label>
          </div>

          <div className="rounded-lg border-2 border-slate-100 p-4">
            <div className="mb-3 flex items-center gap-2">
              <Lock className="h-5 w-5 text-slate-600" />
              <p className="font-medium text-navy">Cambiar Contraseña</p>
            </div>
            <div className="space-y-3">
              <Input
                type="password"
                placeholder="Contraseña actual"
                className="h-10 rounded-lg border-2"
              />
              <Input
                type="password"
                placeholder="Nueva contraseña"
                className="h-10 rounded-lg border-2"
              />
              <Input
                type="password"
                placeholder="Confirmar nueva contraseña"
                className="h-10 rounded-lg border-2"
              />
              <Button
                variant="outline"
                className="h-10 w-full rounded-lg border-2 font-medium"
              >
                Actualizar Contraseña
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
