import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const TIPO_LABEL: Record<string, string> = {
  SOLICITUD: "application",
  APROBACION: "approval",
  USUARIO: "user",
  PENDIENTE: "pending",
};

// GET - Listar notificaciones
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = Math.min(parseInt(searchParams.get("limit") ?? "50", 10), 100);
    const offset = parseInt(searchParams.get("offset") ?? "0", 10);
    const soloNoLeidas = searchParams.get("soloNoLeidas") === "true";

    const where = soloNoLeidas ? { leida: false } : {};

    const [notificaciones, total] = await Promise.all([
      prisma.notificacion.findMany({
        where,
        orderBy: { createdAt: "desc" },
        take: limit,
        skip: offset,
      }),
      prisma.notificacion.count({ where }),
    ]);

    const list = notificaciones.map((n) => ({
      id: n.id,
      tipo: TIPO_LABEL[n.tipo] ?? n.tipo.toLowerCase(),
      titulo: n.titulo,
      descripcion: n.descripcion,
      time: formatTimeAgo(n.createdAt),
      read: n.leida,
      solicitudId: n.solicitudId,
      usuarioId: n.usuarioId,
    }));

    return NextResponse.json({
      notificaciones: list,
      total,
      limit,
      offset,
    });
  } catch (error) {
    console.error("Error GET /api/admin/notificaciones:", error);
    return NextResponse.json(
      { error: "Error al cargar notificaciones" },
      { status: 500 }
    );
  }
}

// PATCH - Marcar como leída(s)
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, todas } = body;

    if (todas) {
      await prisma.notificacion.updateMany({ data: { leida: true } });
      return NextResponse.json({ ok: true, message: "Todas marcadas como leídas" });
    }

    if (!id) {
      return NextResponse.json(
        { error: "Falta id o todas=true" },
        { status: 400 }
      );
    }

    await prisma.notificacion.update({
      where: { id },
      data: { leida: true },
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error PATCH /api/admin/notificaciones:", error);
    return NextResponse.json(
      { error: "Error al actualizar notificación" },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar notificación(es)
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    const todas = searchParams.get("todas") === "true";

    if (todas) {
      await prisma.notificacion.deleteMany({});
      return NextResponse.json({ ok: true, message: "Todas eliminadas" });
    }

    if (!id) {
      return NextResponse.json(
        { error: "Falta id o todas=true" },
        { status: 400 }
      );
    }

    await prisma.notificacion.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error DELETE /api/admin/notificaciones:", error);
    return NextResponse.json(
      { error: "Error al eliminar notificación" },
      { status: 500 }
    );
  }
}

function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return "Hace un momento";
  if (seconds < 3600) return `Hace ${Math.floor(seconds / 60)} minutos`;
  if (seconds < 86400) return `Hace ${Math.floor(seconds / 3600)} horas`;
  if (seconds < 604800) return `Hace ${Math.floor(seconds / 86400)} días`;
  return new Date(date).toLocaleDateString("es-ES");
}
