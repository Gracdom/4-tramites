-- Crear tablas para Gestiones España
-- Ejecuta este script en el SQL Editor de Supabase

-- Tabla de registros de formularios
CREATE TABLE IF NOT EXISTS registros (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  -- Datos del cliente
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  mensaje TEXT,
  
  -- Metadata del formulario
  formulario TEXT NOT NULL,
  fuente TEXT NOT NULL,
  url TEXT NOT NULL,
  referrer TEXT,
  
  -- Estado y gestión
  estado TEXT NOT NULL DEFAULT 'NUEVO' CHECK (estado IN ('NUEVO', 'CONTACTADO', 'PROCESADO', 'DESCARTADO')),
  prioridad TEXT NOT NULL DEFAULT 'MEDIA' CHECK (prioridad IN ('ALTA', 'MEDIA', 'BAJA')),
  destacado BOOLEAN NOT NULL DEFAULT FALSE,
  
  -- Información técnica
  ip TEXT,
  navegador TEXT,
  dispositivo TEXT,
  so TEXT,
  resolucion TEXT,
  idioma TEXT,
  
  -- Parámetros UTM
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT
);

-- Índices para registros
CREATE INDEX IF NOT EXISTS idx_registros_email ON registros(email);
CREATE INDEX IF NOT EXISTS idx_registros_estado ON registros(estado);
CREATE INDEX IF NOT EXISTS idx_registros_prioridad ON registros(prioridad);
CREATE INDEX IF NOT EXISTS idx_registros_created_at ON registros(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_registros_destacado ON registros(destacado);

-- Tabla de notas internas
CREATE TABLE IF NOT EXISTS notas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  contenido TEXT NOT NULL,
  usuario TEXT NOT NULL,
  registro_id UUID NOT NULL REFERENCES registros(id) ON DELETE CASCADE
);

-- Índices para notas
CREATE INDEX IF NOT EXISTS idx_notas_registro_id ON notas(registro_id);
CREATE INDEX IF NOT EXISTS idx_notas_created_at ON notas(created_at DESC);

-- Tabla de usuarios (clientes)
CREATE TABLE IF NOT EXISTS usuarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  nombre TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  telefono TEXT,
  password TEXT,
  
  estado TEXT NOT NULL DEFAULT 'ACTIVO' CHECK (estado IN ('ACTIVO', 'PENDIENTE', 'INACTIVO'))
);

-- Índices para usuarios
CREATE INDEX IF NOT EXISTS idx_usuarios_email ON usuarios(email);
CREATE INDEX IF NOT EXISTS idx_usuarios_estado ON usuarios(estado);

-- Tabla de solicitudes de ayudas
CREATE TABLE IF NOT EXISTS solicitudes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  -- Relación con usuario
  usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  
  -- Tipo de ayuda
  tipo_ayuda TEXT NOT NULL CHECK (tipo_ayuda IN ('CHEQUE_BEBE', 'AYUDA_ALQUILER', 'INGRESO_MINIMO_VITAL', 'BONO_CULTURAL', 'DNI', 'EMPADRONAMIENTO', 'OTROS')),
  
  -- Estado de la solicitud
  estado TEXT NOT NULL DEFAULT 'PENDIENTE' CHECK (estado IN ('PENDIENTE', 'EN_REVISION', 'APROBADA', 'RECHAZADA')),
  prioridad TEXT NOT NULL DEFAULT 'MEDIA' CHECK (prioridad IN ('ALTA', 'MEDIA', 'BAJA')),
  
  -- Datos de la solicitud
  monto TEXT,
  descripcion TEXT,
  documentos INTEGER NOT NULL DEFAULT 0,
  
  -- Fechas importantes
  fecha_envio TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  fecha_respuesta TIMESTAMPTZ
);

-- Índices para solicitudes
CREATE INDEX IF NOT EXISTS idx_solicitudes_usuario_id ON solicitudes(usuario_id);
CREATE INDEX IF NOT EXISTS idx_solicitudes_estado ON solicitudes(estado);
CREATE INDEX IF NOT EXISTS idx_solicitudes_tipo_ayuda ON solicitudes(tipo_ayuda);
CREATE INDEX IF NOT EXISTS idx_solicitudes_prioridad ON solicitudes(prioridad);
CREATE INDEX IF NOT EXISTS idx_solicitudes_created_at ON solicitudes(created_at DESC);

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para actualizar updated_at
DROP TRIGGER IF EXISTS update_registros_updated_at ON registros;
CREATE TRIGGER update_registros_updated_at
  BEFORE UPDATE ON registros
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_usuarios_updated_at ON usuarios;
CREATE TRIGGER update_usuarios_updated_at
  BEFORE UPDATE ON usuarios
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_solicitudes_updated_at ON solicitudes;
CREATE TRIGGER update_solicitudes_updated_at
  BEFORE UPDATE ON solicitudes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Habilitar Row Level Security (RLS)
ALTER TABLE registros ENABLE ROW LEVEL SECURITY;
ALTER TABLE notas ENABLE ROW LEVEL SECURITY;
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE solicitudes ENABLE ROW LEVEL SECURITY;

-- Políticas de seguridad (permitir todo por ahora, ajustar después)
-- IMPORTANTE: Estas políticas son permisivas para desarrollo
-- En producción, deberías restringirlas según tus necesidades

-- Políticas para registros
DROP POLICY IF EXISTS "Permitir todo en registros" ON registros;
CREATE POLICY "Permitir todo en registros" ON registros
  FOR ALL USING (true) WITH CHECK (true);

-- Políticas para notas
DROP POLICY IF EXISTS "Permitir todo en notas" ON notas;
CREATE POLICY "Permitir todo en notas" ON notas
  FOR ALL USING (true) WITH CHECK (true);

-- Políticas para usuarios
DROP POLICY IF EXISTS "Permitir todo en usuarios" ON usuarios;
CREATE POLICY "Permitir todo en usuarios" ON usuarios
  FOR ALL USING (true) WITH CHECK (true);

-- Políticas para solicitudes
DROP POLICY IF EXISTS "Permitir todo en solicitudes" ON solicitudes;
CREATE POLICY "Permitir todo en solicitudes" ON solicitudes
  FOR ALL USING (true) WITH CHECK (true);

-- Insertar algunos datos de ejemplo (opcional)
INSERT INTO registros (nombre, email, telefono, mensaje, formulario, fuente, url, estado, prioridad)
VALUES 
  ('Juan Pérez', 'juan@example.com', '+34 600 123 456', 'Necesito información sobre el cheque bebé', 'Cheque Bebé - Hero Form', 'Landing Cheque Bebé', 'https://gestiones-espana.com/cheque-bebe', 'NUEVO', 'ALTA'),
  ('María García', 'maria@example.com', '+34 600 789 012', 'Quiero solicitar ayuda para el alquiler', 'Ayuda Alquiler - Hero Form', 'Landing Ayuda Alquiler', 'https://gestiones-espana.com/ayuda-alquiler', 'NUEVO', 'MEDIA'),
  ('Carlos López', 'carlos@example.com', NULL, 'Consulta general', 'Contacto General', 'Página Principal', 'https://gestiones-espana.com', 'CONTACTADO', 'BAJA')
ON CONFLICT DO NOTHING;

-- Mensaje de éxito
DO $$
BEGIN
  RAISE NOTICE '✅ Tablas creadas exitosamente';
  RAISE NOTICE '✅ Índices creados';
  RAISE NOTICE '✅ Triggers configurados';
  RAISE NOTICE '✅ RLS habilitado';
  RAISE NOTICE '✅ Datos de ejemplo insertados';
END $$;
