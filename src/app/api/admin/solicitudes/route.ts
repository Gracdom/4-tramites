import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const SUPABASE_ERROR = {
  error:
    "Servidor no configurado. Revisa NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY.",
} as const;

const TRAMITE_TABLAS = [
  { tabla: "tramite_cheque_bebe", label: "Cheque Bebé" },
  { tabla: "tramite_ayuda_alquiler", label: "Ayuda al Alquiler" },
  { tabla: "tramite_ingreso_minimo_vital", label: "Ingreso Mínimo Vital" },
  { tabla: "tramite_bono_cultural", label: "Bono Cultural" },
] as const;

// Mapear estados de Supabase al formato que espera el frontend
function mapEstado(estado: string): string {
  const upper = (estado || "").toUpperCase();
  if (["APROBADA", "APROBADO", "COMPLETADO"].includes(upper)) return "approved";
  if (["RECHAZADA", "RECHAZADO"].includes(upper)) return "rejected";
  if (["EN_REVISION", "EN REVISION"].includes(upper)) return "in_review";
  return "pending";
}

export async function GET(request: NextRequest) {
  try {
    if (!supabase) return NextResponse.json(SUPABASE_ERROR, { status: 500 });

    const searchParams = request.nextUrl.searchParams;
    const search = (searchParams.get("search") ?? "").trim();
    const estadoFilter = searchParams.get("estado") ?? "";
    const limit = Math.min(parseInt(searchParams.get("limit") ?? "50", 10), 100);
    const offset = parseInt(searchParams.get("offset") ?? "0", 10);

    const allRows: Array<{
      id: string;
      user: string;
      type: string;
      amount: string;
      status: string;
      priority: string;
      submittedAt: string;
      documents: number;
      estadoOrig: string;
    }> = [];

    for (const { tabla, label } of TRAMITE_TABLAS) {
      const { data, error } = await supabase
        .from(tabla)
        .select("id, nombre, apellidos, email, estado, prioridad, created_at, mensaje")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(`Error al leer ${tabla}:`, error);
        continue;
      }

      const rows = (data || []).map((r: Record<string, unknown>) => {
        const nombre = [r.nombre, r.apellidos].filter(Boolean).join(" ") || String(r.email);
        const estado = mapEstado(String(r.estado || "PENDIENTE"));
        return {
          id: String(r.id ?? ""),
          user: nombre,
          email: String(r.email || ""),
          type: label,
          amount: "—",
          status: estado,
          priority: (String(r.prioridad || "MEDIA")).toLowerCase(),
          submittedAt: String(r.created_at || ""),
          documents: 0,
          estadoOrig: String(r.estado || "PENDIENTE"),
        };
      });

      allRows.push(...rows);
    }

    // Ordenar por fecha (más reciente primero)
    allRows.sort(
      (a, b) =>
        new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );

    // Filtrar por búsqueda (nombre, apellidos, email)
    let filtered = allRows;
    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.user.toLowerCase().includes(s) ||
          (r as { email?: string }).email?.toLowerCase().includes(s) ||
          r.type.toLowerCase().includes(s)
      );
    }

    // Filtrar por estado si se especificó
    if (estadoFilter && estadoFilter !== "todos") {
      const target =
        estadoFilter === "PENDIENTE"
          ? "pending"
          : estadoFilter === "EN_REVISION"
            ? "in_review"
            : estadoFilter === "APROBADA"
              ? "approved"
              : estadoFilter === "RECHAZADA"
                ? "rejected"
                : "";
      if (target) {
        filtered = filtered.filter((r) => r.status === target);
      }
    }

    const total = filtered.length;
    const paginated = filtered.slice(offset, offset + limit);

    const stats = {
      pending: allRows.filter((r) => r.status === "pending").length,
      in_review: allRows.filter((r) => r.status === "in_review").length,
      approved: allRows.filter((r) => r.status === "approved").length,
      rejected: allRows.filter((r) => r.status === "rejected").length,
    };

    const list = paginated.map(({ estadoOrig: _, email: _e, ...r }) => r);

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
      {
        error: "Error al cargar solicitudes",
        details: error instanceof Error ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
