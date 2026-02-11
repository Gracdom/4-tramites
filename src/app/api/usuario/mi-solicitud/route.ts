import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { verifyToken, getCookieName } from "@/lib/auth"

const SUPABASE_ERROR = { error: "Servidor no configurado." } as const

export async function GET(request: NextRequest) {
  try {
    if (!supabase) return NextResponse.json(SUPABASE_ERROR, { status: 500 })

    const cookieName = getCookieName()
    const token = request.cookies.get(cookieName)?.value
    if (!token) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const payload = await verifyToken(token)
    if (!payload) {
      return NextResponse.json({ error: "Sesión inválida" }, { status: 401 })
    }

    const { data: usuario, error: errUser } = await supabase
      .from("usuarios")
      .select("id, email, registro_id, tabla_referencia")
      .eq("id", payload.usuarioId)
      .single()

    if (errUser || !usuario) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 })
    }

    const { data: registro, error } = await supabase
      .from(usuario.tabla_referencia)
      .select("*")
      .eq("id", usuario.registro_id)
      .single()

    if (error || !registro) {
      return NextResponse.json({ error: "Solicitud no encontrada" }, { status: 404 })
    }

    // No exponer datos sensibles de tracking al usuario; solo lo necesario
    const tipoGestion: Record<string, string> = {
      tramite_cheque_bebe: "Cheque Bebé",
      tramite_ayuda_alquiler: "Ayuda al Alquiler",
      tramite_ingreso_minimo_vital: "Ingreso Mínimo Vital",
      tramite_bono_cultural: "Bono Cultural Joven",
    }

    return NextResponse.json({
      solicitud: {
        id: registro.id,
        tipo: tipoGestion[usuario.tabla_referencia] || usuario.tabla_referencia,
        estado: registro.estado,
        prioridad: registro.prioridad,
        created_at: registro.created_at,
        updated_at: registro.updated_at,
        // Datos del formulario para que el usuario vea su info
        nombre: registro.nombre,
        apellidos: registro.apellidos,
        email: registro.email,
        telefono: registro.telefono,
        dni: registro.dni,
        direccion: registro.direccion || registro.direccion_alquiler,
        codigo_postal: registro.codigo_postal,
        ciudad: registro.ciudad,
        provincia: registro.provincia,
        mensaje: registro.mensaje,
        // Campos específicos por trámite
        nombre_bebe: registro.nombre_bebe,
        fecha_nacimiento_bebe: registro.fecha_nacimiento_bebe,
        fecha_nacimiento: registro.fecha_nacimiento,
        importe_alquiler: registro.importe_alquiler,
        ingresos_mensuales: registro.ingresos_mensuales,
        ingresos_anuales: registro.ingresos_anuales,
        situacion_laboral: registro.situacion_laboral,
        numero_hijos: registro.numero_hijos,
        numero_personas_hogar: registro.numero_personas_hogar,
        numero_menores: registro.numero_menores,
      },
    })
  } catch (e) {
    console.error("Error en mi-solicitud:", e)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
