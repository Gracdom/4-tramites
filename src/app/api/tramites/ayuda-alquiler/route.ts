import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// POST - Crear solicitud de Ayuda Alquiler
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.nombre || !body.apellidos || !body.email || !body.telefono) {
      return NextResponse.json(
        { error: 'Nombre, apellidos, email y teléfono son requeridos' },
        { status: 400 }
      )
    }

    const userAgent = request.headers.get('user-agent') || undefined
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined
    const referer = request.headers.get('referer') || undefined

    const data = {
      nombre: body.nombre,
      apellidos: body.apellidos,
      email: body.email,
      telefono: body.telefono,
      dni: body.dni || null,
      importe_alquiler: body.importeAlquiler || null,
      ingresos_mensuales: body.ingresosMensuales || null,
      situacion_laboral: body.situacionLaboral || null,
      numero_personas_hogar: body.numeroPersonasHogar || null,
      direccion_alquiler: body.direccionAlquiler || null,
      codigo_postal: body.codigoPostal || null,
      ciudad: body.ciudad || null,
      provincia: body.provincia || null,
      mensaje: body.mensaje || null,
      estado: 'PENDIENTE',
      prioridad: 'ALTA',
      destacado: false,
      url: body.url || referer || '',
      referrer: referer,
      ip: ip,
      navegador: userAgent,
      dispositivo: body.dispositivo || null,
      utm_source: body.utmSource || null,
      utm_medium: body.utmMedium || null,
      utm_campaign: body.utmCampaign || null,
    }

    const { data: tramite, error } = await supabase
      .from('tramite_ayuda_alquiler')
      .insert([data])
      .select()
      .single()

    if (error) {
      console.error('Error al crear trámite:', error)
      return NextResponse.json(
        { error: 'Error al crear trámite', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Solicitud enviada exitosamente', tramite }, { status: 201 })
  } catch (error) {
    console.error('Error en POST /api/tramites/ayuda-alquiler:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

// GET - Obtener solicitudes
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const estado = searchParams.get('estado')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    let query = supabase
      .from('tramite_ayuda_alquiler')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (estado) query = query.eq('estado', estado)

    const { data, error, count } = await query

    if (error) {
      return NextResponse.json({ error: 'Error al obtener trámites', details: error.message }, { status: 500 })
    }

    return NextResponse.json({ tramites: data, total: count, limit, offset })
  } catch (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
