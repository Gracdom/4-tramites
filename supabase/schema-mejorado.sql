-- ============================================
-- SCHEMA MEJORADO - Gestiones España
-- Una tabla para cada tipo de formulario
-- ============================================

-- Primero, eliminar las tablas anteriores si existen
DROP TABLE IF EXISTS notas CASCADE;
DROP TABLE IF EXISTS solicitudes CASCADE;
DROP TABLE IF EXISTS usuarios CASCADE;
DROP TABLE IF EXISTS registros CASCADE;

-- ============================================
-- TABLA 1: Formulario Principal (Home/Banner)
-- ============================================
CREATE TABLE formulario_home (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  -- Datos del cliente
  email TEXT NOT NULL,
  
  -- Estado y gestión
  estado TEXT NOT NULL DEFAULT 'NUEVO' CHECK (estado IN ('NUEVO', 'CONTACTADO', 'PROCESADO', 'DESCARTADO')),
  prioridad TEXT NOT NULL DEFAULT 'MEDIA' CHECK (prioridad IN ('ALTA', 'MEDIA', 'BAJA')),
  destacado BOOLEAN NOT NULL DEFAULT FALSE,
  
  -- Metadata
  url TEXT,
  referrer TEXT,
  
  -- Información técnica
  ip TEXT,
  navegador TEXT,
  dispositivo TEXT,
  
  -- Parámetros UTM
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT
);

CREATE INDEX idx_formulario_home_email ON formulario_home(email);
CREATE INDEX idx_formulario_home_estado ON formulario_home(estado);
CREATE INDEX idx_formulario_home_created_at ON formulario_home(created_at DESC);

-- ============================================
-- TABLA 2: Formulario de Contacto General
-- ============================================
CREATE TABLE formulario_contacto (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  -- Datos del cliente
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  asunto TEXT,
  mensaje TEXT NOT NULL,
  
  -- Estado y gestión
  estado TEXT NOT NULL DEFAULT 'NUEVO' CHECK (estado IN ('NUEVO', 'CONTACTADO', 'PROCESADO', 'DESCARTADO')),
  prioridad TEXT NOT NULL DEFAULT 'MEDIA' CHECK (prioridad IN ('ALTA', 'MEDIA', 'BAJA')),
  destacado BOOLEAN NOT NULL DEFAULT FALSE,
  
  -- Metadata
  url TEXT,
  referrer TEXT,
  
  -- Información técnica
  ip TEXT,
  navegador TEXT,
  dispositivo TEXT,
  
  -- Parámetros UTM
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

CREATE INDEX idx_formulario_contacto_email ON formulario_contacto(email);
CREATE INDEX idx_formulario_contacto_estado ON formulario_contacto(estado);
CREATE INDEX idx_formulario_contacto_created_at ON formulario_contacto(created_at DESC);

-- ============================================
-- TABLA 3: Trámite - Cheque Bebé
-- ============================================
CREATE TABLE tramite_cheque_bebe (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  -- Datos del cliente
  nombre TEXT NOT NULL,
  apellidos TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT NOT NULL,
  dni TEXT,
  
  -- Datos del bebé
  nombre_bebe TEXT,
  fecha_nacimiento_bebe DATE,
  
  -- Datos del trámite
  ingresos_anuales TEXT,
  situacion_laboral TEXT,
  numero_hijos INTEGER,
  
  -- Dirección
  direccion TEXT,
  codigo_postal TEXT,
  ciudad TEXT,
  provincia TEXT,
  
  -- Información adicional
  mensaje TEXT,
  
  -- Estado y gestión
  estado TEXT NOT NULL DEFAULT 'PENDIENTE' CHECK (estado IN ('PENDIENTE', 'EN_REVISION', 'DOCUMENTACION_REQUERIDA', 'APROBADO', 'RECHAZADO', 'COMPLETADO')),
  prioridad TEXT NOT NULL DEFAULT 'MEDIA' CHECK (prioridad IN ('ALTA', 'MEDIA', 'BAJA')),
  destacado BOOLEAN NOT NULL DEFAULT FALSE,
  
  -- Metadata
  url TEXT,
  referrer TEXT,
  
  -- Información técnica
  ip TEXT,
  navegador TEXT,
  dispositivo TEXT,
  
  -- Parámetros UTM
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

CREATE INDEX idx_tramite_cheque_bebe_email ON tramite_cheque_bebe(email);
CREATE INDEX idx_tramite_cheque_bebe_dni ON tramite_cheque_bebe(dni);
CREATE INDEX idx_tramite_cheque_bebe_estado ON tramite_cheque_bebe(estado);
CREATE INDEX idx_tramite_cheque_bebe_created_at ON tramite_cheque_bebe(created_at DESC);

-- ============================================
-- TABLA 4: Trámite - Ayuda Alquiler
-- ============================================
CREATE TABLE tramite_ayuda_alquiler (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  -- Datos del cliente
  nombre TEXT NOT NULL,
  apellidos TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT NOT NULL,
  dni TEXT,
  
  -- Datos del alquiler
  importe_alquiler DECIMAL(10,2),
  ingresos_mensuales DECIMAL(10,2),
  situacion_laboral TEXT,
  numero_personas_hogar INTEGER,
  
  -- Dirección de la vivienda alquilada
  direccion_alquiler TEXT,
  codigo_postal TEXT,
  ciudad TEXT,
  provincia TEXT,
  
  -- Información adicional
  mensaje TEXT,
  
  -- Estado y gestión
  estado TEXT NOT NULL DEFAULT 'PENDIENTE' CHECK (estado IN ('PENDIENTE', 'EN_REVISION', 'DOCUMENTACION_REQUERIDA', 'APROBADO', 'RECHAZADO', 'COMPLETADO')),
  prioridad TEXT NOT NULL DEFAULT 'MEDIA' CHECK (prioridad IN ('ALTA', 'MEDIA', 'BAJA')),
  destacado BOOLEAN NOT NULL DEFAULT FALSE,
  
  -- Metadata
  url TEXT,
  referrer TEXT,
  
  -- Información técnica
  ip TEXT,
  navegador TEXT,
  dispositivo TEXT,
  
  -- Parámetros UTM
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

CREATE INDEX idx_tramite_ayuda_alquiler_email ON tramite_ayuda_alquiler(email);
CREATE INDEX idx_tramite_ayuda_alquiler_dni ON tramite_ayuda_alquiler(dni);
CREATE INDEX idx_tramite_ayuda_alquiler_estado ON tramite_ayuda_alquiler(estado);
CREATE INDEX idx_tramite_ayuda_alquiler_created_at ON tramite_ayuda_alquiler(created_at DESC);

-- ============================================
-- TABLA 5: Trámite - Ingreso Mínimo Vital
-- ============================================
CREATE TABLE tramite_ingreso_minimo_vital (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  -- Datos del cliente
  nombre TEXT NOT NULL,
  apellidos TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT NOT NULL,
  dni TEXT,
  
  -- Datos económicos
  ingresos_mensuales DECIMAL(10,2),
  situacion_laboral TEXT,
  numero_personas_hogar INTEGER,
  numero_menores INTEGER,
  
  -- Dirección
  direccion TEXT,
  codigo_postal TEXT,
  ciudad TEXT,
  provincia TEXT,
  
  -- Información adicional
  mensaje TEXT,
  
  -- Estado y gestión
  estado TEXT NOT NULL DEFAULT 'PENDIENTE' CHECK (estado IN ('PENDIENTE', 'EN_REVISION', 'DOCUMENTACION_REQUERIDA', 'APROBADO', 'RECHAZADO', 'COMPLETADO')),
  prioridad TEXT NOT NULL DEFAULT 'MEDIA' CHECK (prioridad IN ('ALTA', 'MEDIA', 'BAJA')),
  destacado BOOLEAN NOT NULL DEFAULT FALSE,
  
  -- Metadata
  url TEXT,
  referrer TEXT,
  
  -- Información técnica
  ip TEXT,
  navegador TEXT,
  dispositivo TEXT,
  
  -- Parámetros UTM
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

CREATE INDEX idx_tramite_imv_email ON tramite_ingreso_minimo_vital(email);
CREATE INDEX idx_tramite_imv_dni ON tramite_ingreso_minimo_vital(dni);
CREATE INDEX idx_tramite_imv_estado ON tramite_ingreso_minimo_vital(estado);
CREATE INDEX idx_tramite_imv_created_at ON tramite_ingreso_minimo_vital(created_at DESC);

-- ============================================
-- TABLA 6: Trámite - Bono Cultural Joven
-- ============================================
CREATE TABLE tramite_bono_cultural (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  -- Datos del cliente
  nombre TEXT NOT NULL,
  apellidos TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT NOT NULL,
  dni TEXT,
  fecha_nacimiento DATE,
  
  -- Datos adicionales
  direccion TEXT,
  codigo_postal TEXT,
  ciudad TEXT,
  provincia TEXT,
  
  -- Información adicional
  mensaje TEXT,
  
  -- Estado y gestión
  estado TEXT NOT NULL DEFAULT 'PENDIENTE' CHECK (estado IN ('PENDIENTE', 'EN_REVISION', 'DOCUMENTACION_REQUERIDA', 'APROBADO', 'RECHAZADO', 'COMPLETADO')),
  prioridad TEXT NOT NULL DEFAULT 'MEDIA' CHECK (prioridad IN ('ALTA', 'MEDIA', 'BAJA')),
  destacado BOOLEAN NOT NULL DEFAULT FALSE,
  
  -- Metadata
  url TEXT,
  referrer TEXT,
  
  -- Información técnica
  ip TEXT,
  navegador TEXT,
  dispositivo TEXT,
  
  -- Parámetros UTM
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

CREATE INDEX idx_tramite_bono_cultural_email ON tramite_bono_cultural(email);
CREATE INDEX idx_tramite_bono_cultural_dni ON tramite_bono_cultural(dni);
CREATE INDEX idx_tramite_bono_cultural_estado ON tramite_bono_cultural(estado);
CREATE INDEX idx_tramite_bono_cultural_created_at ON tramite_bono_cultural(created_at DESC);

-- ============================================
-- TABLA 7: Notas (para todos los formularios/trámites)
-- ============================================
CREATE TABLE notas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  -- Contenido de la nota
  contenido TEXT NOT NULL,
  usuario TEXT NOT NULL, -- Admin que escribió la nota
  
  -- Relación polimórfica (puede estar asociada a cualquier tabla)
  tabla_referencia TEXT NOT NULL, -- 'formulario_home', 'tramite_cheque_bebe', etc.
  registro_id UUID NOT NULL -- ID del registro en la tabla correspondiente
);

CREATE INDEX idx_notas_tabla_referencia ON notas(tabla_referencia);
CREATE INDEX idx_notas_registro_id ON notas(registro_id);
CREATE INDEX idx_notas_created_at ON notas(created_at DESC);

-- ============================================
-- TRIGGERS para actualizar updated_at
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Aplicar trigger a todas las tablas
CREATE TRIGGER update_formulario_home_updated_at
  BEFORE UPDATE ON formulario_home
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_formulario_contacto_updated_at
  BEFORE UPDATE ON formulario_contacto
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tramite_cheque_bebe_updated_at
  BEFORE UPDATE ON tramite_cheque_bebe
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tramite_ayuda_alquiler_updated_at
  BEFORE UPDATE ON tramite_ayuda_alquiler
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tramite_imv_updated_at
  BEFORE UPDATE ON tramite_ingreso_minimo_vital
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tramite_bono_cultural_updated_at
  BEFORE UPDATE ON tramite_bono_cultural
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

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

-- Políticas permisivas para desarrollo (ajustar en producción)
CREATE POLICY "Permitir todo en formulario_home" ON formulario_home
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Permitir todo en formulario_contacto" ON formulario_contacto
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Permitir todo en tramite_cheque_bebe" ON tramite_cheque_bebe
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Permitir todo en tramite_ayuda_alquiler" ON tramite_ayuda_alquiler
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Permitir todo en tramite_imv" ON tramite_ingreso_minimo_vital
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Permitir todo en tramite_bono_cultural" ON tramite_bono_cultural
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Permitir todo en notas" ON notas
  FOR ALL USING (true) WITH CHECK (true);

-- ============================================
-- DATOS DE EJEMPLO
-- ============================================

-- Ejemplo: Formulario Home
INSERT INTO formulario_home (email, estado, prioridad)
VALUES 
  ('juan@example.com', 'NUEVO', 'ALTA'),
  ('maria@example.com', 'CONTACTADO', 'MEDIA')
ON CONFLICT DO NOTHING;

-- Ejemplo: Formulario Contacto
INSERT INTO formulario_contacto (nombre, email, telefono, asunto, mensaje, estado)
VALUES 
  ('Carlos López', 'carlos@example.com', '+34 600 123 456', 'Consulta general', 'Necesito información sobre los trámites', 'NUEVO')
ON CONFLICT DO NOTHING;

-- Ejemplo: Cheque Bebé
INSERT INTO tramite_cheque_bebe (nombre, apellidos, email, telefono, nombre_bebe, fecha_nacimiento_bebe, estado)
VALUES 
  ('Ana', 'García Martínez', 'ana@example.com', '+34 600 789 012', 'Sofía', '2024-03-15', 'PENDIENTE')
ON CONFLICT DO NOTHING;

-- Ejemplo: Ayuda Alquiler
INSERT INTO tramite_ayuda_alquiler (nombre, apellidos, email, telefono, importe_alquiler, ingresos_mensuales, estado)
VALUES 
  ('Pedro', 'Sánchez López', 'pedro@example.com', '+34 600 345 678', 800.00, 1200.00, 'PENDIENTE')
ON CONFLICT DO NOTHING;

-- Ejemplo: Ingreso Mínimo Vital
INSERT INTO tramite_ingreso_minimo_vital (nombre, apellidos, email, telefono, ingresos_mensuales, numero_personas_hogar, estado)
VALUES 
  ('Laura', 'Fernández Ruiz', 'laura@example.com', '+34 600 901 234', 450.00, 4, 'EN_REVISION')
ON CONFLICT DO NOTHING;

-- Ejemplo: Bono Cultural
INSERT INTO tramite_bono_cultural (nombre, apellidos, email, telefono, fecha_nacimiento, estado)
VALUES 
  ('Miguel', 'Torres Jiménez', 'miguel@example.com', '+34 600 567 890', '2006-05-20', 'PENDIENTE')
ON CONFLICT DO NOTHING;

-- ============================================
-- MENSAJE DE ÉXITO
-- ============================================
DO $$
BEGIN
  RAISE NOTICE '✅ Schema mejorado creado exitosamente';
  RAISE NOTICE '✅ 6 tablas de formularios/trámites creadas';
  RAISE NOTICE '✅ 1 tabla de notas compartida';
  RAISE NOTICE '✅ Índices y triggers configurados';
  RAISE NOTICE '✅ RLS habilitado';
  RAISE NOTICE '✅ Datos de ejemplo insertados';
  RAISE NOTICE '';
  RAISE NOTICE '📋 Tablas creadas:';
  RAISE NOTICE '  1. formulario_home';
  RAISE NOTICE '  2. formulario_contacto';
  RAISE NOTICE '  3. tramite_cheque_bebe';
  RAISE NOTICE '  4. tramite_ayuda_alquiler';
  RAISE NOTICE '  5. tramite_ingreso_minimo_vital';
  RAISE NOTICE '  6. tramite_bono_cultural';
  RAISE NOTICE '  7. notas (compartida)';
END $$;
