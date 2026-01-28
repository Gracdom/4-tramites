import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactoPage() {
  return (
    <div className="container px-4 py-12">
      <Button variant="ghost" asChild>
        <Link href="/" className="mb-8 inline-flex gap-2">
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>
      </Button>
      <h1 className="text-3xl font-bold tracking-tight">Contacto</h1>
      <p className="mt-4 text-muted-foreground">
        Formulario de contacto. Próximamente.
      </p>
    </div>
  );
}
