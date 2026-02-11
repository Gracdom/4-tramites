import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendConfirmationToClient, sendNotificationToAdmin } from '@/lib/email'
import { clientConfirmacionNewsletter, adminNotificacionNewsletter } from '@/lib/email-templates'

const SUPABASE_ERROR = { error: 'Servidor no configurado. Revisa NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY.' } as const

// POST - Crear registro del formulario home
export async function POST(request: NextRequest) {
  try {
    if (!supabase) return NextResponse.json(SUPABASE_ERROR, { status: 500 })
    const body = await request.json()

    // Validar email
    if (!body.email) {
      return NextResponse.json(
        { error: 'El email es requerido' },
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
      email: body.email,
      estado: 'NUEVO',
      prioridad: 'MEDIA',
      destacado: false,
      url: body.url || referer || '',
      referrer: referer,
      ip: ip,
      navegador: userAgent,
      dispositivo: body.dispositivo || null,
      utm_source: body.utmSource || null,
      utm_medium: body.utmMedium || null,
      utm_campaign: body.utmCampaign || null,
      utm_term: body.utmTerm || null,
      utm_content: body.utmContent || null,
    }

    const { data: registro, error } = await supabase
      .from('formulario_home')
      .insert([data])
      .select()
      .single()

    if (error) {
      console.error('Error al crear registro:', error)
      return NextResponse.json(
        { error: 'Error al crear registro', details: error.message },
        { status: 500 }
      )
    }

    // Emails (no bloquean la respuesta si fallan)
    const email = (body.email as string).trim()
    sendConfirmationToClient({
      to: email,
      subject: 'Te hemos registrado correctamente - Burocracia Cero',
      html: clientConfirmacionNewsletter(),
    }).catch((e) => console.error('[formulario-home] Email cliente:', e))
    sendNotificationToAdmin({
      subject: `[Web] Nuevo registro newsletter/home: ${email}`,
      html: adminNotificacionNewsletter(email, data.url || ''),
    }).catch((e) => console.error('[formulario-home] Email admin:', e))

    return NextResponse.json(
      { 
        message: 'Registro creado exitosamente',
        registro 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error en POST /api/formulario-home:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// GET - Obtener registros del formulario home
export async function GET(request: NextRequest) {
  try {
    if (!supabase) return NextResponse.json(SUPABASE_ERROR, { status: 500 })
    const searchParams = request.nextUrl.searchParams
    const estado = searchParams.get('estado')
    const limit = searchParams.get('limit') || '50'
    const offset = searchParams.get('offset') || '0'

    let query = supabase
      .from('formulario_home')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(parseInt(offset), parseInt(offset) + parseInt(limit) - 1)

    if (estado) {
      query = query.eq('estado', estado)
    }

    const { data, error, count } = await query

    if (error) {
      console.error('Error al obtener registros:', error)
      return NextResponse.json(
        { error: 'Error al obtener registros', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      registros: data,
      total: count,
      limit: parseInt(limit),
      offset: parseInt(offset),
    })
  } catch (error) {
    console.error('Error en GET /api/formulario-home:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
