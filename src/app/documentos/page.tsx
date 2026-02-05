import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DocumentosPage() {
  return (
    <div className="container px-4 py-12">
      <Button variant="ghost" asChild>
        <Link href="/" className="mb-8 inline-flex gap-2">
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>
      </Button>
      <h1 className="text-xl font-semibold tracking-tight">Documentación</h1>
      <p className="mt-4 text-muted-foreground">
        Guías y requisitos por tipo de documento. Próximamente.
      </p>
    </div>
  );
}
