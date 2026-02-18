import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | Burocracia CERO",
  description: "Información sobre el uso de cookies en Burocracia CERO y cómo gestionarlas.",
};

export default function CookiesPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 to-white pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-3xl font-semibold text-navy md:text-4xl">
              Política de Cookies
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
            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o
              smartphone) cuando visita un sitio web. Las cookies permiten al sitio web reconocer su dispositivo y
              recordar información sobre su visita, como su idioma preferido y otras opciones, con el fin de facilitar
              su próxima visita y hacer que el sitio le resulte más útil.
            </p>

            <h2>2. ¿Qué tipos de cookies utilizamos?</h2>
            <p>
              En Burocracia CERO utilizamos diferentes tipos de cookies según su finalidad:
            </p>

            <h3>2.1. Cookies técnicas o necesarias</h3>
            <p>
              Son aquellas imprescindibles para el correcto funcionamiento del sitio web. Permiten la navegación y el
              uso de las diferentes opciones o servicios que existen en ella. Por ejemplo: controlar el tráfico y la
              comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los
              elementos que integran un pedido, realizar el proceso de compra de un pedido, gestionar el pago, controlar
              el fraude vinculado a la seguridad del servicio.
            </p>
            <p>
              <strong>Estas cookies son esenciales y no requieren consentimiento del usuario.</strong>
            </p>

            <h3>2.2. Cookies de preferencias o personalización</h3>
            <p>
              Permiten recordar información para que el usuario acceda al servicio con determinadas características que
              pueden diferenciar su experiencia de la de otros usuarios, como por ejemplo: el idioma, el número de
              resultados a mostrar cuando el usuario realiza una búsqueda, el aspecto o contenido del servicio en
              función del tipo de navegador a través del cual el usuario accede al servicio o de la región desde la que
              accede al servicio, etc.
            </p>

            <h3>2.3. Cookies de análisis o medición</h3>
            <p>
              Son aquellas que permiten al responsable de las mismas el seguimiento y análisis del comportamiento de los
              usuarios de los sitios web a los que están vinculadas, incluida la cuantificación de los impactos de los
              anuncios. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad
              de los sitios web, aplicación o plataforma, con el fin de introducir mejoras en función del análisis de
              los datos de uso que hacen los usuarios del servicio.
            </p>
            <p>
              Utilizamos Google Analytics para analizar el uso de nuestro sitio web. Google Analytics recopila
              información anónima sobre cómo los usuarios interactúan con el sitio.
            </p>

            <h3>2.4. Cookies de publicidad comportamental</h3>
            <p>
              Son aquellas que almacenan información del comportamiento de los usuarios obtenida a través de la
              observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para
              mostrar publicidad en función del mismo.
            </p>
            <p>
              <strong>Actualmente no utilizamos cookies de publicidad comportamental.</strong>
            </p>

            <h2>3. Cookies utilizadas en este sitio web</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-slate-300">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-2 text-left">Cookie</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Tipo</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Finalidad</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">cookie_consent</td>
                    <td className="border border-slate-300 px-4 py-2">Técnica</td>
                    <td className="border border-slate-300 px-4 py-2">Recordar las preferencias de cookies del usuario</td>
                    <td className="border border-slate-300 px-4 py-2">1 año</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">session_id</td>
                    <td className="border border-slate-300 px-4 py-2">Técnica</td>
                    <td className="border border-slate-300 px-4 py-2">Mantener la sesión del usuario activa</td>
                    <td className="border border-slate-300 px-4 py-2">Sesión</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">_ga</td>
                    <td className="border border-slate-300 px-4 py-2">Análisis</td>
                    <td className="border border-slate-300 px-4 py-2">Google Analytics: distinguir usuarios</td>
                    <td className="border border-slate-300 px-4 py-2">2 años</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">_gid</td>
                    <td className="border border-slate-300 px-4 py-2">Análisis</td>
                    <td className="border border-slate-300 px-4 py-2">Google Analytics: distinguir usuarios</td>
                    <td className="border border-slate-300 px-4 py-2">24 horas</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">_gat</td>
                    <td className="border border-slate-300 px-4 py-2">Análisis</td>
                    <td className="border border-slate-300 px-4 py-2">Google Analytics: limitar la tasa de solicitud</td>
                    <td className="border border-slate-300 px-4 py-2">1 minuto</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>4. Cookies de terceros</h2>
            <p>
              Además de nuestras propias cookies, también utilizamos cookies de terceros para mejorar nuestros servicios:
            </p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> Utilizamos Google Analytics para analizar el uso del sitio web.
                Puede obtener más información sobre las cookies de Google Analytics en:{" "}
                <a
                  href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Google Analytics Cookie Usage
                </a>
              </li>
            </ul>

            <h2>5. ¿Cómo gestionar las cookies?</h2>
            <p>
              Puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración
              de las opciones de su navegador web. A continuación, le facilitamos enlaces a las instrucciones de los
              principales navegadores:
            </p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p>
              <strong>Tenga en cuenta</strong> que si desactiva las cookies, algunas funcionalidades del sitio web
              pueden no funcionar correctamente.
            </p>

            <h2>6. Consentimiento</h2>
            <p>
              Al navegar y continuar en nuestro sitio web, usted está consintiendo el uso de las cookies antes
              mencionadas, por los plazos señalados y en las condiciones contenidas en la presente Política de Cookies.
            </p>
            <p>
              En cualquier momento, puede retirar su consentimiento para el uso de cookies a través de la configuración
              de su navegador.
            </p>

            <h2>7. Actualizaciones</h2>
            <p>
              Esta Política de Cookies puede ser modificada en función de exigencias legislativas, reglamentarias, o
              con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de
              Protección de Datos. Le recomendamos revisar esta política periódicamente.
            </p>

            <h2>8. Más información sobre protección de datos</h2>
            <p>
              Para más información sobre cómo tratamos sus datos personales, consulte nuestra{" "}
              <Link href="/privacidad" className="text-primary underline">
                Política de Privacidad
              </Link>
              .
            </p>

            <h2>9. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre esta Política de Cookies, puede contactar con nosotros:
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
