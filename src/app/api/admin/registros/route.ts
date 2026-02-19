import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const SUPABASE_ERROR = {
  error:
    "Servidor no configurado. Revisa NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY.",
} as const;

const TABLAS_PERMITIDAS = [
  "formulario_home",
  "formulario_contacto",
  "tramite_cheque_bebe",
  "tramite_ayuda_alquiler",
  "tramite_ingreso_minimo_vital",
  "tramite_bono_cultural",
] as const;

// DELETE - Eliminar un registro
export async function DELETE(request: NextRequest) {
  try {
    if (!supabase) return NextResponse.json(SUPABASE_ERROR, { status: 500 });

    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    const tabla = searchParams.get("tabla");

    if (!id || !tabla) {
      return NextResponse.json(
        { error: "Faltan parámetros: id y tabla son requeridos" },
        { status: 400 }
      );
    }

    if (!TABLAS_PERMITIDAS.includes(tabla as (typeof TABLAS_PERMITIDAS)[number])) {
      return NextResponse.json(
        { error: "Tabla no válida" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from(tabla).delete().eq("id", id);

    if (error) {
      console.error("Error al eliminar registro:", error);
      return NextResponse.json(
        { error: "Error al eliminar el registro" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      mensaje: "Registro eliminado correctamente",
    });
  } catch (error) {
    console.error("Error en DELETE /api/admin/registros:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
