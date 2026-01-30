import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// POST - Crear una nueva nota
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validar campos requeridos
    if (!body.contenido || !body.usuario || !body.registro_id || !body.tabla_referencia) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos: contenido, usuario, registro_id, tabla_referencia' },
        { status: 400 }
      )
    }

    // Validar que tabla_referencia sea válida
    const tablasValidas = [
      'formulario_home',
      'formulario_contacto',
      'tramite_cheque_bebe',
      'tramite_ayuda_alquiler',
      'tramite_ingreso_minimo_vital',
      'tramite_bono_cultural'
    ]

    if (!tablasValidas.includes(body.tabla_referencia)) {
      return NextResponse.json(
        { error: 'tabla_referencia no es válida' },
        { status: 400 }
      )
    }

    const notaData = {
      contenido: body.contenido,
      usuario: body.usuario,
      registro_id: body.registro_id,
      tabla_referencia: body.tabla_referencia,
    }

    const { data, error } = await supabase
      .from('notas')
      .insert([notaData])
      .select()
      .single()

    if (error) {
      console.error('Error al crear nota:', error)
      return NextResponse.json(
        { error: 'Error al crear nota', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        message: 'Nota creada exitosamente',
        nota: data,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error en POST /api/notas:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// GET - Obtener notas de un registro específico
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const tabla_referencia = searchParams.get('tabla_referencia')
    const registro_id = searchParams.get('registro_id')

    if (!tabla_referencia || !registro_id) {
      return NextResponse.json(
        { error: 'tabla_referencia y registro_id son requeridos' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('notas')
      .select('*')
      .eq('tabla_referencia', tabla_referencia)
      .eq('registro_id', registro_id)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error al obtener notas:', error)
      return NextResponse.json(
        { error: 'Error al obtener notas', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ notas: data })
  } catch (error) {
    console.error('Error en GET /api/notas:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
