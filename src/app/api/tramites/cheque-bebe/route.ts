import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// POST - Crear solicitud de Cheque Bebé
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validar campos requeridos
    if (!body.nombre || !body.apellidos || !body.email || !body.telefono) {
      return NextResponse.json(
        { error: 'Nombre, apellidos, email y teléfono son requeridos' },
        { status: 400 }
      )
    }

    // Obtener información del request
    const userAgent = request.headers.get('user-agent') || undefined
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               undefined
    const referer = request.headers.get('referer') || undefined

    // Preparar datos
    const data = {
      nombre: body.nombre,
      apellidos: body.apellidos,
      email: body.email,
      telefono: body.telefono,
      dni: body.dni || null,
      nombre_bebe: body.nombreBebe || null,
      fecha_nacimiento_bebe: body.fechaNacimientoBebe || null,
      ingresos_anuales: body.ingresosAnuales || null,
      situacion_laboral: body.situacionLaboral || null,
      numero_hijos: body.numeroHijos || null,
      direccion: body.direccion || null,
      codigo_postal: body.codigoPostal || null,
      ciudad: body.ciudad || null,
      provincia: body.provincia || null,
      mensaje: body.mensaje || null,
      estado: 'PENDIENTE',
      prioridad: 'ALTA', // Cheque Bebé tiene prioridad alta por defecto
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
      .from('tramite_cheque_bebe')
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

    return NextResponse.json(
      { 
        message: 'Solicitud enviada exitosamente',
        tramite 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error en POST /api/tramites/cheque-bebe:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// GET - Obtener solicitudes de Cheque Bebé
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const estado = searchParams.get('estado')
    const limit = searchParams.get('limit') || '50'
    const offset = searchParams.get('offset') || '0'

    let query = supabase
      .from('tramite_cheque_bebe')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(parseInt(offset), parseInt(offset) + parseInt(limit) - 1)

    if (estado) {
      query = query.eq('estado', estado)
    }

    const { data, error, count } = await query

    if (error) {
      console.error('Error al obtener trámites:', error)
      return NextResponse.json(
        { error: 'Error al obtener trámites', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      tramites: data,
      total: count,
      limit: parseInt(limit),
      offset: parseInt(offset),
    })
  } catch (error) {
    console.error('Error en GET /api/tramites/cheque-bebe:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
