import { prisma } from "@/lib/prisma";
import type { TipoNotificacion } from "@prisma/client";

type CrearNotificacionParams = {
  tipo: TipoNotificacion;
  titulo: string;
  descripcion: string;
  solicitudId?: string;
  usuarioId?: string;
  metadata?: string;
};

/**
 * Crea una notificación en la base de datos.
 * Se llama desde los APIs de tramites, registrar-usuario, etc.
 */
export async function crearNotificacion(params: CrearNotificacionParams) {
  try {
    await prisma.notificacion.create({
      data: {
        tipo: params.tipo,
        titulo: params.titulo,
        descripcion: params.descripcion,
        solicitudId: params.solicitudId ?? null,
        usuarioId: params.usuarioId ?? null,
        metadata: params.metadata ?? null,
      },
    });
  } catch (e) {
    console.error("[crearNotificacion]", e);
  }
}
