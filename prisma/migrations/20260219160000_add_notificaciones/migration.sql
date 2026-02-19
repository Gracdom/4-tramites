-- CreateEnum
CREATE TYPE "TipoNotificacion" AS ENUM ('SOLICITUD', 'APROBACION', 'USUARIO', 'PENDIENTE');

-- CreateTable
CREATE TABLE "notificaciones" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipo" "TipoNotificacion" NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "leida" BOOLEAN NOT NULL DEFAULT false,
    "solicitudId" TEXT,
    "usuarioId" TEXT,
    "metadata" TEXT,

    CONSTRAINT "notificaciones_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "notificaciones_leida_idx" ON "notificaciones"("leida");

-- CreateIndex
CREATE INDEX "notificaciones_tipo_idx" ON "notificaciones"("tipo");

-- CreateIndex
CREATE INDEX "notificaciones_createdAt_idx" ON "notificaciones"("createdAt");
