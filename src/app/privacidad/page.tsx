import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Burocracia CERO",
  description: "Información sobre cómo recogemos, utilizamos y protegemos tus datos personales en Burocracia CERO.",
};

export default function PrivacidadPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 to-white pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-3xl font-semibold text-navy md:text-4xl">
              Política de Privacidad
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
            <h2>1. Responsable del tratamiento</h2>
            <p>
              El responsable del tratamiento de sus datos personales es:
            </p>
            <ul>
              <li><strong>Identidad:</strong> Burocracia CERO</li>
              <li><strong>Domicilio:</strong> [Dirección completa]</li>
              <li><strong>CIF/NIF:</strong> [Número de identificación fiscal]</li>
              <li><strong>Email:</strong> info@burocraciacero.com</li>
              <li><strong>Teléfono:</strong> +34 613 48 86 87</li>
            </ul>

            <h2>2. Finalidad del tratamiento</h2>
            <p>
              Los datos personales que recogemos se utilizan para las siguientes finalidades:
            </p>
            <ul>
              <li><strong>Gestión de servicios:</strong> Tramitación y gestión de solicitudes de ayudas sociales y trámites administrativos</li>
              <li><strong>Comunicaciones:</strong> Envío de información sobre el estado de sus solicitudes, respuesta a consultas y atención al cliente</li>
              <li><strong>Cumplimiento legal:</strong> Cumplimiento de obligaciones legales y fiscales</li>
              <li><strong>Mejora del servicio:</strong> Análisis y mejora de nuestros servicios (solo con datos anonimizados)</li>
              <li><strong>Marketing:</strong> Envío de comunicaciones comerciales (solo si ha dado su consentimiento expreso)</li>
            </ul>

            <h2>3. Legitimación</h2>
            <p>
              La base legal para el tratamiento de sus datos personales es:
            </p>
            <ul>
              <li><strong>Ejecución de contrato:</strong> Para gestionar los servicios solicitados</li>
              <li><strong>Consentimiento:</strong> Para el envío de comunicaciones comerciales</li>
              <li><strong>Obligación legal:</strong> Para cumplir con obligaciones fiscales y administrativas</li>
              <li><strong>Interés legítimo:</strong> Para la mejora de nuestros servicios</li>
            </ul>

            <h2>4. Datos recopilados</h2>
            <p>
              Podemos recopilar las siguientes categorías de datos personales:
            </p>
            <ul>
              <li><strong>Datos de identificación:</strong> Nombre, apellidos, DNI/NIE, fecha de nacimiento</li>
              <li><strong>Datos de contacto:</strong> Dirección postal, email, teléfono</li>
              <li><strong>Datos económicos:</strong> Información sobre ingresos, situación laboral (solo cuando sea necesario para la tramitación)</li>
              <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas (a través de cookies)</li>
            </ul>

            <h2>5. Destinatarios de los datos</h2>
            <p>
              Sus datos personales pueden ser comunicados a:
            </p>
            <ul>
              <li><strong>Administraciones públicas:</strong> Para la tramitación de ayudas y gestiones administrativas</li>
              <li><strong>Proveedores de servicios:</strong> Empresas que nos prestan servicios de hosting, email, análisis de datos, etc. (siempre bajo estrictos acuerdos de confidencialidad)</li>
              <li><strong>Obligaciones legales:</strong> Autoridades competentes cuando sea legalmente requerido</li>
            </ul>
            <p>
              No vendemos ni compartimos sus datos personales con terceros con fines comerciales.
            </p>

            <h2>6. Transferencias internacionales</h2>
            <p>
              Algunos de nuestros proveedores de servicios (como servicios de hosting o email) pueden estar ubicados
              fuera del Espacio Económico Europeo (EEE). En tales casos, nos aseguramos de que existan garantías
              adecuadas de protección de datos, como cláusulas contractuales estándar aprobadas por la Comisión Europea.
            </p>

            <h2>7. Conservación de datos</h2>
            <p>
              Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las
              que fueron recogidos y, posteriormente, durante los plazos legales establecidos por la legislación aplicable
              (normalmente 6 años desde la última interacción para fines fiscales).
            </p>

            <h2>8. Derechos del interesado</h2>
            <p>
              Usted tiene derecho a:
            </p>
            <ul>
              <li><strong>Acceso:</strong> Obtener información sobre si estamos tratando sus datos y, en su caso, obtener una copia</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios</li>
              <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento de sus datos</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado y de uso común</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos en determinadas circunstancias</li>
              <li><strong>Retirada del consentimiento:</strong> Retirar el consentimiento en cualquier momento (sin afectar a la licitud del tratamiento previo)</li>
            </ul>
            <p>
              Para ejercer estos derechos, puede contactar con nosotros en:
            </p>
            <ul>
              <li>Email: info@burocraciacero.com</li>
              <li>Dirección postal: [Dirección completa]</li>
            </ul>
            <p>
              También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD)
              si considera que el tratamiento de sus datos no cumple con la normativa vigente.
            </p>

            <h2>9. Medidas de seguridad</h2>
            <p>
              Hemos implementado medidas técnicas y organizativas apropiadas para proteger sus datos personales contra
              el acceso no autorizado, la pérdida, el uso indebido o la alteración:
            </p>
            <ul>
              <li>Cifrado SSL de 256 bits para todas las comunicaciones</li>
              <li>Acceso restringido a los datos personales solo al personal autorizado</li>
              <li>Auditorías de seguridad periódicas</li>
              <li>Backups regulares y cifrados</li>
              <li>Formación continua del personal en protección de datos</li>
            </ul>

            <h2>10. Cookies</h2>
            <p>
              Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Para más
              información, consulte nuestra{" "}
              <Link href="/cookies" className="text-primary underline">
                Política de Cookies
              </Link>
              .
            </p>

            <h2>11. Menores de edad</h2>
            <p>
              Nuestros servicios no están dirigidos a menores de 18 años (excepto para trámites específicos como el
              Bono Cultural Joven para mayores de 18 años). Si usted es padre/madre o tutor legal y cree que su hijo/a
              nos ha proporcionado datos personales, contáctenos para que podamos eliminarlos.
            </p>

            <h2>12. Modificaciones</h2>
            <p>
              Nos reservamos el derecho a modificar esta Política de Privacidad en cualquier momento. Los cambios serán
              publicados en esta página con la fecha de última actualización. Le recomendamos revisar periódicamente
              esta política.
            </p>

            <h2>13. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre esta Política de Privacidad o sobre cómo tratamos sus datos personales,
              puede contactar con nosotros:
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
