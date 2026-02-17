import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search") ?? "";
    const estado = searchParams.get("estado") ?? "";
    const limit = Math.min(parseInt(searchParams.get("limit") ?? "50", 10), 100);
    const offset = parseInt(searchParams.get("offset") ?? "0", 10);

    const where: Prisma.UsuarioWhereInput = {};
    if (estado && estado !== "todos") {
      where.estado = estado as "ACTIVO" | "PENDIENTE" | "INACTIVO";
    }
    if (search.trim()) {
      const term = search.trim().toLowerCase();
      where.OR = [
        { nombre: { contains: term, mode: "insensitive" } },
        { email: { contains: term, mode: "insensitive" } },
        { telefono: { contains: term, mode: "insensitive" } },
      ];
    }

    const [usuarios, total] = await Promise.all([
      prisma.usuario.findMany({
        where,
        include: { _count: { select: { solicitudes: true } } },
        orderBy: { createdAt: "desc" },
        take: limit,
        skip: offset,
      }),
      prisma.usuario.count({ where }),
    ]);

    const list = usuarios.map((u: { id: string; nombre: string; email: string; telefono?: string | null; createdAt: Date; _count: { solicitudes: number }; estado: string }) => ({
      id: u.id,
      name: u.nombre,
      email: u.email,
      phone: u.telefono ?? "",
      registeredAt: u.createdAt,
      applications: u._count.solicitudes,
      status: u.estado.toLowerCase(),
      avatar: u.nombre
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2),
    }));

    return NextResponse.json({
      usuarios: list,
      total,
      limit,
      offset,
    });
  } catch (error) {
    console.error("Error GET /api/admin/usuarios:", error);
    return NextResponse.json(
      { error: "Error al cargar usuarios" },
      { status: 500 }
    );
  }
}
