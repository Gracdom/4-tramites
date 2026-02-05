-- ============================================
-- SCHEMA COMPLETO - Gestiones España / Burocracia Cero
-- Ejecutar en Supabase: SQL Editor > New query > Pegar y Run
-- Crea todas las tablas necesarias para los formularios (sin borrar datos)
-- ============================================

-- Función para actualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- TABLA 1: Formulario Home (banner / newsletter)
-- ============================================
CREATE TABLE IF NOT EXISTS formulario_home (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  email TEXT NOT NULL,
  estado TEXT NOT NULL DEFAULT 'NUEVO' CHECK (estado IN ('NUEVO', 'CONTACTADO', 'PROCESADO', 'DESCARTADO')),
  prioridad TEXT NOT NULL DEFAULT 'MEDIA' CHECK (prioridad IN ('ALTA', 'MEDIA', 'BAJA')),
  destacado BOOLEAN NOT NULL DEFAULT FALSE,
  url TEXT,
  referrer TEXT,
  ip TEXT,
  navegador TEXT,
  dispositivo TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT
);

CREATE INDEX IF NOT EXISTS idx_formulario_home_email ON formulario_home(email);
CREATE INDEX IF NOT EXISTS idx_formulario_home_estado ON formulario_home(estado);
CREATE INDEX IF NOT EXISTS idx_formulario_home_created_at ON formulario_home(created_at DESC);

DROP TRIGGER IF EXISTS update_formulario_home_updated_at ON formulario_home;
CREATE TRIGGER update_formulario_home_updated_at
  BEFORE UPDATE ON formulario_home
  FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- ============================================
-- TABLA 2: Formulario de Contacto
-- ============================================
CREATE TABLE IF NOT EXISTS formulario_contacto (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  asunto TEXT,
  mensaje TEXT NOT NULL,
  estado TEXT NOT NULL DEFAULT 'NUEVO' CHECK (estado IN ('NUEVO', 'CONTACTADO', 'PROCESADO', 'DESCARTADO')),
  prioridad TEXT NOT NULL DEFAULT 'MEDIA' CHECK (prioridad IN ('ALTA', 'MEDIA', 'BAJA')),
  destacado BOOLEAN NOT NULL DEFAULT FALSE,
  url TEXT,
  referrer TEXT,
  ip TEXT,
  navegador TEXT,
  dispositivo TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

CREATE INDEX IF NOT EXISTS idx_formulario_contacto_email ON formulario_contacto(email);
CREATE INDEX IF NOT EXISTS idx_formulario_contacto_estado ON formulario_contacto(estado);
CREATE INDEX IF NOT EXISTS idx_formulario_contacto_created_at ON formulario_contacto(created_at DESC);

DROP TRIGGER IF EXISTS update_formulario_contacto_updated_at ON formulario_contacto;
CREATE TRIGGER update_formulario_contacto_updated_at
  BEFORE UPDATE ON formulario_contacto
  FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- ============================================
-- TABLA 3: Trámite Cheque Bebé
-- ============================================
CREATE TABLE IF NOT EXISTS tramite_cheque_bebe (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  nombre TEXT NOT NULL,
  apellidos TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT NOT NULL,
  dni TEXT,
  nombre_bebe TEXT,
  fecha_nacimiento_bebe DATE,
  ingresos_anuales TEXT,
  situacion_laboral TEXT,
  numero_hijos INTEGER,
  direccion TEXT,
  codigo_postal TEXT,
  ciudad TEXT,
  provincia TEXT,
  mensaje TEXT,
  estado TEXT NOT NULL DEFAULT 'PENDIENTE' CHECK (estado IN ('PENDIENTE', 'EN_REVISION', 'DOCUMENTACION_REQUERIDA', 'APROBADO', 'RECHAZADO', 'COMPLETADO')),
  prioridad TEXT NOT NULL DEFAULT 'MEDIA' CHECK (prioridad IN ('ALTA', 'MEDIA', 'BAJA')),
  destacado BOOLEAN NOT NULL DEFAULT FALSE,
  url TEXT,
  referrer TEXT,
  ip TEXT,
  navegador TEXT,
  dispositivo TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

CREATE INDEX IF NOT EXISTS idx_tramite_cheque_bebe_email ON tramite_cheque_bebe(email);
CREATE INDEX IF NOT EXISTS idx_tramite_cheque_bebe_estado ON tramite_cheque_bebe(estado);
CREATE INDEX IF NOT EXISTS idx_tramite_cheque_bebe_created_at ON tramite_cheque_bebe(created_at DESC);

DROP TRIGGER IF EXISTS update_tramite_cheque_bebe_updated_at ON tramite_cheque_bebe;
CREATE TRIGGER update_tramite_cheque_bebe_updated_at
  BEFORE UPDATE ON tramite_cheque_bebe
  FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- ============================================
-- TABLA 4: Trámite Ayuda Alquiler
-- ============================================
CREATE TABLE IF NOT EXISTS tramite_ayuda_alquiler (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  nombre TEXT NOT NULL,
  apellidos TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT NOT NULL,
  dni TEXT,
  importe_alquiler DECIMAL(10,2),
  ingresos_mensuales DECIMAL(10,2),
  situacion_laboral TEXT,
  numero_personas_hogar INTEGER,
  direccion_alquiler TEXT,
  codigo_postal TEXT,
  ciudad TEXT,
  provincia TEXT,
  mensaje TEXT,
  estado TEXT NOT NULL DEFAULT 'PENDIENTE' CHECK (estado IN ('PENDIENTE', 'EN_REVISION', 'DOCUMENTACION_REQUERIDA', 'APROBADO', 'RECHAZADO', 'COMPLETADO')),
  prioridad TEXT NOT NULL DEFAULT 'MEDIA' CHECK (prioridad IN ('ALTA', 'MEDIA', 'BAJA')),
  destacado BOOLEAN NOT NULL DEFAULT FALSE,
  url TEXT,
  referrer TEXT,
  ip TEXT,
  navegador TEXT,
  dispositivo TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

CREATE INDEX IF NOT EXISTS idx_tramite_ayuda_alquiler_email ON tramite_ayuda_alquiler(email);
CREATE INDEX IF NOT EXISTS idx_tramite_ayuda_alquiler_estado ON tramite_ayuda_alquiler(estado);
CREATE INDEX IF NOT EXISTS idx_tramite_ayuda_alquiler_created_at ON tramite_ayuda_alquiler(created_at DESC);

DROP TRIGGER IF EXISTS update_tramite_ayuda_alquiler_updated_at ON tramite_ayuda_alquiler;
CREATE TRIGGER update_tramite_ayuda_alquiler_updated_at
  BEFORE UPDATE ON tramite_ayuda_alquiler
  FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- ============================================
-- TABLA 5: Trámite Ingreso Mínimo Vital
-- ============================================
CREATE TABLE IF NOT EXISTS tramite_ingreso_minimo_vital (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  nombre TEXT NOT NULL,
  apellidos TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT NOT NULL,
  dni TEXT,
  ingresos_mensuales DECIMAL(10,2),
  situacion_laboral TEXT,
  numero_personas_hogar INTEGER,
  numero_menores INTEGER,
  direccion TEXT,
  codigo_postal TEXT,
  ciudad TEXT,
  provincia TEXT,
  mensaje TEXT,
  estado TEXT NOT NULL DEFAULT 'PENDIENTE' CHECK (estado IN ('PENDIENTE', 'EN_REVISION', 'DOCUMENTACION_REQUERIDA', 'APROBADO', 'RECHAZADO', 'COMPLETADO')),
  prioridad TEXT NOT NULL DEFAULT 'MEDIA' CHECK (prioridad IN ('ALTA', 'MEDIA', 'BAJA')),
  destacado BOOLEAN NOT NULL DEFAULT FALSE,
  url TEXT,
  referrer TEXT,
  ip TEXT,
  navegador TEXT,
  dispositivo TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

CREATE INDEX IF NOT EXISTS idx_tramite_imv_email ON tramite_ingreso_minimo_vital(email);
CREATE INDEX IF NOT EXISTS idx_tramite_imv_estado ON tramite_ingreso_minimo_vital(estado);
CREATE INDEX IF NOT EXISTS idx_tramite_imv_created_at ON tramite_ingreso_minimo_vital(created_at DESC);

DROP TRIGGER IF EXISTS update_tramite_imv_updated_at ON tramite_ingreso_minimo_vital;
CREATE TRIGGER update_tramite_imv_updated_at
  BEFORE UPDATE ON tramite_ingreso_minimo_vital
  FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- ============================================
-- TABLA 6: Trámite Bono Cultural
-- ============================================
CREATE TABLE IF NOT EXISTS tramite_bono_cultural (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  nombre TEXT NOT NULL,
  apellidos TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT NOT NULL,
  dni TEXT,
  fecha_nacimiento DATE,
  direccion TEXT,
  codigo_postal TEXT,
  ciudad TEXT,
  provincia TEXT,
  mensaje TEXT,
  estado TEXT NOT NULL DEFAULT 'PENDIENTE' CHECK (estado IN ('PENDIENTE', 'EN_REVISION', 'DOCUMENTACION_REQUERIDA', 'APROBADO', 'RECHAZADO', 'COMPLETADO')),
  prioridad TEXT NOT NULL DEFAULT 'MEDIA' CHECK (prioridad IN ('ALTA', 'MEDIA', 'BAJA')),
  destacado BOOLEAN NOT NULL DEFAULT FALSE,
  url TEXT,
  referrer TEXT,
  ip TEXT,
  navegador TEXT,
  dispositivo TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

CREATE INDEX IF NOT EXISTS idx_tramite_bono_cultural_email ON tramite_bono_cultural(email);
CREATE INDEX IF NOT EXISTS idx_tramite_bono_cultural_estado ON tramite_bono_cultural(estado);
CREATE INDEX IF NOT EXISTS idx_tramite_bono_cultural_created_at ON tramite_bono_cultural(created_at DESC);

DROP TRIGGER IF EXISTS update_tramite_bono_cultural_updated_at ON tramite_bono_cultural;
CREATE TRIGGER update_tramite_bono_cultural_updated_at
  BEFORE UPDATE ON tramite_bono_cultural
  FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- ============================================
-- TABLA 7: Notas (admin)
-- ============================================
CREATE TABLE IF NOT EXISTS notas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  contenido TEXT NOT NULL,
  usuario TEXT NOT NULL,
  tabla_referencia TEXT NOT NULL,
  registro_id UUID NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_notas_tabla_referencia ON notas(tabla_referencia);
CREATE INDEX IF NOT EXISTS idx_notas_registro_id ON notas(registro_id);
CREATE INDEX IF NOT EXISTS idx_notas_created_at ON notas(created_at DESC);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================
ALTER TABLE formulario_home ENABLE ROW LEVEL SECURITY;
ALTER TABLE formulario_contacto ENABLE ROW LEVEL SECURITY;
ALTER TABLE tramite_cheque_bebe ENABLE ROW LEVEL SECURITY;
ALTER TABLE tramite_ayuda_alquiler ENABLE ROW LEVEL SECURITY;
ALTER TABLE tramite_ingreso_minimo_vital ENABLE ROW LEVEL SECURITY;
ALTER TABLE tramite_bono_cultural ENABLE ROW LEVEL SECURITY;
ALTER TABLE notas ENABLE ROW LEVEL SECURITY;

-- Políticas RLS: permitir todas las operaciones (anon puede insertar, service_role todo)
DROP POLICY IF EXISTS "Permitir todo formulario_home" ON formulario_home;
CREATE POLICY "Permitir todo formulario_home" ON formulario_home FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir todo formulario_contacto" ON formulario_contacto;
CREATE POLICY "Permitir todo formulario_contacto" ON formulario_contacto FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir todo tramite_cheque_bebe" ON tramite_cheque_bebe;
CREATE POLICY "Permitir todo tramite_cheque_bebe" ON tramite_cheque_bebe FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir todo tramite_ayuda_alquiler" ON tramite_ayuda_alquiler;
CREATE POLICY "Permitir todo tramite_ayuda_alquiler" ON tramite_ayuda_alquiler FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir todo tramite_imv" ON tramite_ingreso_minimo_vital;
CREATE POLICY "Permitir todo tramite_imv" ON tramite_ingreso_minimo_vital FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir todo tramite_bono_cultural" ON tramite_bono_cultural;
CREATE POLICY "Permitir todo tramite_bono_cultural" ON tramite_bono_cultural FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir todo notas" ON notas;
CREATE POLICY "Permitir todo notas" ON notas FOR ALL USING (true) WITH CHECK (true);
