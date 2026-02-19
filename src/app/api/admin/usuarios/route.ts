import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const SUPABASE_ERROR = {
  error:
    "Servidor no configurado. Revisa NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY.",
} as const;

export async function GET(request: NextRequest) {
  try {
    if (!supabase) return NextResponse.json(SUPABASE_ERROR, { status: 500 });

    const searchParams = request.nextUrl.searchParams;
    const search = (searchParams.get("search") ?? "").trim().toLowerCase();
    const limit = Math.min(parseInt(searchParams.get("limit") ?? "50", 10), 100);
    const offset = parseInt(searchParams.get("offset") ?? "0", 10);

    let query = supabase
      .from("usuarios")
      .select("id, email, created_at")
      .order("created_at", { ascending: false });

    if (search) {
      query = query.ilike("email", `%${search}%`);
    }

    const { data: rawUsers, error } = await query;

    if (error) {
      console.error("Error al leer usuarios:", error);
      return NextResponse.json(
        { error: "Error al cargar usuarios", details: error.message },
        { status: 500 }
      );
    }

    const allRows = (rawUsers || []).map((u: { id: string; email: string; created_at?: string }) => {
      const email = u.email || "";
      const name = email.split("@")[0] || "Usuario";
      return {
        id: u.id,
        name,
        email,
        phone: "",
        registeredAt: u.created_at || new Date().toISOString(),
        applications: 0,
        status: "activo",
        avatar: name.slice(0, 2).toUpperCase(),
      };
    });

    const total = allRows.length;
    const list = allRows.slice(offset, offset + limit);

    return NextResponse.json({
      usuarios: list,
      total,
      limit,
      offset,
    });
  } catch (error) {
    console.error("Error GET /api/admin/usuarios:", error);
    return NextResponse.json(
      {
        error: "Error al cargar usuarios",
        details: error instanceof Error ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
