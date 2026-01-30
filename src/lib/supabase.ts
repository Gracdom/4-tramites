import { createClient } from '@supabase/supabase-js'

// Verificar que las variables de entorno estén configuradas
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Faltan las variables de entorno de Supabase')
}

// Crear el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// ============================================
// TIPOS PARA LAS TABLAS
// ============================================

// Estados comunes
export type EstadoFormulario = 'NUEVO' | 'CONTACTADO' | 'PROCESADO' | 'DESCARTADO'
export type EstadoTramite = 'PENDIENTE' | 'EN_REVISION' | 'DOCUMENTACION_REQUERIDA' | 'APROBADO' | 'RECHAZADO' | 'COMPLETADO'
export type Prioridad = 'ALTA' | 'MEDIA' | 'BAJA'

// Campos comunes de tracking
export type CamposTracking = {
  url?: string
  referrer?: string
  ip?: string
  navegador?: string
  dispositivo?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
}

// 1. Formulario Home (Banner principal)
export type FormularioHome = {
  id: string
  created_at: string
  updated_at: string
  email: string
  estado: EstadoFormulario
  prioridad: Prioridad
  destacado: boolean
} & CamposTracking

// 2. Formulario Contacto
export type FormularioContacto = {
  id: string
  created_at: string
  updated_at: string
  nombre: string
  email: string
  telefono?: string
  asunto?: string
  mensaje: string
  estado: EstadoFormulario
  prioridad: Prioridad
  destacado: boolean
} & CamposTracking

// 3. Trámite Cheque Bebé
export type TramiteChequeBebe = {
  id: string
  created_at: string
  updated_at: string
  // Solicitante
  nombre: string
  apellidos: string
  email: string
  telefono: string
  dni?: string
  // Bebé
  nombre_bebe?: string
  fecha_nacimiento_bebe?: string
  // Económicos
  ingresos_anuales?: string
  situacion_laboral?: string
  numero_hijos?: number
  // Dirección
  direccion?: string
  codigo_postal?: string
  ciudad?: string
  provincia?: string
  // Adicional
  mensaje?: string
  // Estado
  estado: EstadoTramite
  prioridad: Prioridad
  destacado: boolean
} & CamposTracking

// 4. Trámite Ayuda Alquiler
export type TramiteAyudaAlquiler = {
  id: string
  created_at: string
  updated_at: string
  // Solicitante
  nombre: string
  apellidos: string
  email: string
  telefono: string
  dni?: string
  // Alquiler
  importe_alquiler?: number
  ingresos_mensuales?: number
  situacion_laboral?: string
  numero_personas_hogar?: number
  // Dirección
  direccion_alquiler?: string
  codigo_postal?: string
  ciudad?: string
  provincia?: string
  // Adicional
  mensaje?: string
  // Estado
  estado: EstadoTramite
  prioridad: Prioridad
  destacado: boolean
} & CamposTracking

// 5. Trámite Ingreso Mínimo Vital
export type TramiteIngresoMinimoVital = {
  id: string
  created_at: string
  updated_at: string
  // Solicitante
  nombre: string
  apellidos: string
  email: string
  telefono: string
  dni?: string
  // Económicos
  ingresos_mensuales?: number
  situacion_laboral?: string
  numero_personas_hogar?: number
  numero_menores?: number
  // Dirección
  direccion?: string
  codigo_postal?: string
  ciudad?: string
  provincia?: string
  // Adicional
  mensaje?: string
  // Estado
  estado: EstadoTramite
  prioridad: Prioridad
  destacado: boolean
} & CamposTracking

// 6. Trámite Bono Cultural
export type TramiteBonoCultural = {
  id: string
  created_at: string
  updated_at: string
  // Solicitante
  nombre: string
  apellidos: string
  email: string
  telefono: string
  dni?: string
  fecha_nacimiento?: string
  // Dirección
  direccion?: string
  codigo_postal?: string
  ciudad?: string
  provincia?: string
  // Adicional
  mensaje?: string
  // Estado
  estado: EstadoTramite
  prioridad: Prioridad
  destacado: boolean
} & CamposTracking

// 7. Notas (compartida)
export type Nota = {
  id: string
  created_at: string
  contenido: string
  usuario: string
  tabla_referencia: string
  registro_id: string
}

// Tipo unión para todos los registros
export type RegistroGeneral = 
  | FormularioHome 
  | FormularioContacto 
  | TramiteChequeBebe 
  | TramiteAyudaAlquiler 
  | TramiteIngresoMinimoVital 
  | TramiteBonoCultural
