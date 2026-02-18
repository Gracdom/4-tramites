import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal | Burocracia CERO",
  description: "Información legal sobre Burocracia CERO, términos y condiciones de uso de la plataforma.",
};

export default function AvisoLegalPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 to-white pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-3xl font-semibold text-navy md:text-4xl">
              Aviso Legal
            </h1>
            <p className="text-slate-600">
              Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container px-4">
          <div className="prose prose-slate mx-auto max-w-4xl">
            <h2>1. Identificación del titular</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
              de la Información y Comercio Electrónico (LSSI-CE), se informa a los usuarios de los datos
              identificativos del titular del sitio web:
            </p>
            <ul>
              <li><strong>Titular:</strong> Burocracia CERO</li>
              <li><strong>Domicilio:</strong> [Dirección completa]</li>
              <li><strong>CIF/NIF:</strong> [Número de identificación fiscal]</li>
              <li><strong>Email:</strong> info@burocraciacero.com</li>
              <li><strong>Teléfono:</strong> +34 613 48 86 87</li>
            </ul>

            <h2>2. Objeto</h2>
            <p>
              El presente aviso legal regula el uso del sitio web www.burocraciacero.com (en adelante, &ldquo;el Sitio Web&rdquo;),
              del que es titular Burocracia CERO (en adelante, &ldquo;el Titular&rdquo;).
            </p>
            <p>
              La navegación por el Sitio Web atribuye la condición de usuario del mismo e implica la aceptación plena
              y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que pueden sufrir
              modificaciones.
            </p>

            <h2>3. Servicios</h2>
            <p>
              A través del Sitio Web, el Titular facilita a los usuarios el acceso y la utilización de diversos servicios
              y contenidos relacionados con la tramitación de ayudas sociales y gestiones administrativas en España.
            </p>
            <p>
              Los servicios ofrecidos incluyen, entre otros:
            </p>
            <ul>
              <li>Información sobre ayudas sociales y trámites administrativos</li>
              <li>Asesoramiento personalizado</li>
              <li>Tramitación y gestión de solicitudes ante organismos públicos</li>
              <li>Seguimiento del estado de las solicitudes</li>
            </ul>

            <h2>4. Condiciones de acceso y uso</h2>
            <p>
              El acceso y uso del Sitio Web tiene carácter gratuito para los usuarios. No obstante, algunos servicios
              específicos están sujetos al pago de una tarifa o comisión, que será claramente informada al usuario antes
              de contratar el servicio.
            </p>
            <p>
              El usuario se compromete a:
            </p>
            <ul>
              <li>Hacer un uso adecuado y lícito del Sitio Web</li>
              <li>No utilizar el Sitio Web con fines ilícitos o contrarios a lo establecido en este Aviso Legal</li>
              <li>Proporcionar información veraz y actualizada en los formularios del Sitio Web</li>
              <li>No realizar acciones que puedan dañar, inutilizar, sobrecargar o deteriorar el Sitio Web</li>
            </ul>

            <h2>5. Responsabilidades</h2>
            <p>
              El Titular no se hace responsable de:
            </p>
            <ul>
              <li>La calidad del servicio de conexión a Internet</li>
              <li>Interrupciones o errores en el acceso al Sitio Web derivados de circunstancias ajenas a su control</li>
              <li>Los contenidos, informaciones y servicios de terceros accesibles a través de enlaces desde el Sitio Web</li>
              <li>Los retrasos o denegaciones en la tramitación de solicitudes por parte de las administraciones públicas</li>
            </ul>
            <p>
              El Titular se reserva el derecho a modificar, en cualquier momento y sin previo aviso, la presentación,
              configuración y contenidos del Sitio Web, así como las condiciones de acceso y uso.
            </p>

            <h2>6. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del Sitio Web, incluyendo, sin carácter limitativo, textos, gráficos, imágenes,
              su diseño y los derechos de propiedad intelectual que pudieran corresponder a dichos contenidos, así
              como todas las marcas, nombres comerciales o cualquier otro signo distintivo, son propiedad del Titular
              o de terceros que han autorizado su uso.
            </p>
            <p>
              Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra
              forma de explotación, por cualquier procedimiento, de todo o parte de los contenidos del Sitio Web sin
              la autorización previa y expresa del Titular.
            </p>

            <h2>7. Enlaces externos</h2>
            <p>
              El Sitio Web puede contener enlaces a sitios web de terceros. El Titular no asume ninguna responsabilidad
              por el contenido, la política de privacidad o las prácticas de estos sitios externos. Se recomienda revisar
              los términos y condiciones de cada sitio web de terceros que visite.
            </p>

            <h2>8. Protección de datos</h2>
            <p>
              El tratamiento de los datos personales de los usuarios se realiza conforme a lo establecido en el
              Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y en la Ley Orgánica 3/2018,
              de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
            </p>
            <p>
              Para más información, consulte nuestra{" "}
              <Link href="/privacidad" className="text-primary underline">
                Política de Privacidad
              </Link>
              .
            </p>

            <h2>9. Cookies</h2>
            <p>
              El Sitio Web utiliza cookies para mejorar la experiencia del usuario. Para más información, consulte
              nuestra{" "}
              <Link href="/cookies" className="text-primary underline">
                Política de Cookies
              </Link>
              .
            </p>

            <h2>10. Legislación aplicable y jurisdicción</h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier
              controversia derivada del acceso o uso del Sitio Web, el Titular y el usuario se someten expresamente
              a los Juzgados y Tribunales del domicilio del usuario si éste tiene la condición de consumidor, o al
              domicilio del Titular en caso contrario.
            </p>

            <h2>11. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con este Aviso Legal, puede contactar con nosotros a través de:
            </p>
            <ul>
              <li>Email: info@burocraciacero.com</li>
              <li>Teléfono: +34 613 48 86 87</li>
              <li>Formulario de contacto: <Link href="/contacto" className="text-primary underline">Contacto</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
