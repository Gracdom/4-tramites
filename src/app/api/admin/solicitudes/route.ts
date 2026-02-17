import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const dynamic = "force-dynamic";

const TIPO_AYUDA_LABEL: Record<string, string> = {
  CHEQUE_BEBE: "Cheque Bebé",
  AYUDA_ALQUILER: "Ayuda al Alquiler",
  INGRESO_MINIMO_VITAL: "Ingreso Mínimo Vital",
  BONO_CULTURAL: "Bono Cultural",
  DNI: "DNI",
  EMPADRONAMIENTO: "Empadronamiento",
  OTROS: "Otros",
};

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search") ?? "";
    const estado = searchParams.get("estado") ?? "";
    const limit = Math.min(parseInt(searchParams.get("limit") ?? "50", 10), 100);
    const offset = parseInt(searchParams.get("offset") ?? "0", 10);

    const where: Prisma.SolicitudWhereInput = {};
    if (estado && estado !== "todos") {
      where.estado = estado as "PENDIENTE" | "EN_REVISION" | "APROBADA" | "RECHAZADA";
    }
    if (search.trim()) {
      const term = search.trim();
      where.usuario = {
        OR: [
          { nombre: { contains: term, mode: "insensitive" } },
          { email: { contains: term, mode: "insensitive" } },
        ],
      };
    }

    const [solicitudes, total, counts] = await Promise.all([
      prisma.solicitud.findMany({
        where,
        include: { usuario: true },
        orderBy: { createdAt: "desc" },
        take: limit,
        skip: offset,
      }),
      prisma.solicitud.count({ where }),
      prisma.solicitud.groupBy({
        by: ["estado"],
        _count: { id: true },
      }),
    ]);

    const statusMap: Record<string, string> = {
      PENDIENTE: "pending",
      EN_REVISION: "in_review",
      APROBADA: "approved",
      RECHAZADA: "rejected",
    };
    const priorityMap: Record<string, string> = {
      ALTA: "high",
      MEDIA: "medium",
      BAJA: "low",
    };
    const list = solicitudes.map((s: { id: string; usuario: { nombre: string }; tipoAyuda: string; monto?: string | null; estado: string; prioridad: string; fechaEnvio: Date | string; documentos?: unknown }) => ({
      id: s.id,
      user: s.usuario.nombre,
      type: TIPO_AYUDA_LABEL[s.tipoAyuda] ?? s.tipoAyuda,
      amount: s.monto ?? "—",
      status: statusMap[s.estado] ?? s.estado.toLowerCase(),
      priority: priorityMap[s.prioridad] ?? s.prioridad.toLowerCase(),
      submittedAt: s.fechaEnvio,
      documents: s.documentos,
    }));

    const stats = {
      pending: counts.find((c: { estado: string; _count: { id: number } }) => c.estado === "PENDIENTE")?._count.id ?? 0,
      in_review: counts.find((c: { estado: string; _count: { id: number } }) => c.estado === "EN_REVISION")?._count.id ?? 0,
      approved: counts.find((c: { estado: string; _count: { id: number } }) => c.estado === "APROBADA")?._count.id ?? 0,
      rejected: counts.find((c: { estado: string; _count: { id: number } }) => c.estado === "RECHAZADA")?._count.id ?? 0,
    };

    return NextResponse.json({
      solicitudes: list,
      total,
      limit,
      offset,
      stats,
    });
  } catch (error) {
    console.error("Error GET /api/admin/solicitudes:", error);
    return NextResponse.json(
      { error: "Error al cargar solicitudes" },
      { status: 500 }
    );
  }
}
