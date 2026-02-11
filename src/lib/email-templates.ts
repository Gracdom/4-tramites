/**
 * Plantillas HTML para correos (cliente y admin).
 * Diseño responsive y compatible con clientes de correo.
 * Diseño moderno inspirado en newsletters profesionales.
 */

const SITE_NAME = "Burocracia Cero";
const SITE_URL = "https://burocraciacero.com";
const PRIMARY_COLOR = "#1391B9";
const PRIMARY_DARK = "#0F7494";
const PRIMARY_LIGHT = "#E6F7FC";

const baseStyles = `
  margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px; line-height: 1.6; color: #1e293b; background-color: #f1f5f9;
`.replace(/\n/g, " ");

// Header con logo y diseño moderno
const headerHtml = `
  <div style="background: linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${PRIMARY_DARK} 100%); padding: 0; position: relative; overflow: hidden; min-height: 140px;">
    <!-- Pattern decorativo -->
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.1; background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px);"></div>
    
    <!-- Contenido del header -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding: 32px 20px; text-align: center; position: relative; z-index: 1;">
          <!-- Logo -->
          <div style="margin-bottom: 12px;">
            <img src="${SITE_URL}/logo-white.png" alt="${SITE_NAME}" width="280" height="auto" style="display: inline-block; max-width: 280px; height: auto; vertical-align: middle;" />
          </div>
          <div style="color: rgba(255,255,255,0.95); font-size: 14px; font-weight: 500; margin-top: 12px; letter-spacing: 0.3px;">Tu gestoría digital de confianza</div>
        </td>
      </tr>
    </table>
  </div>
`;

// Footer mejorado
const footerHtml = `
  <div style="background: #f8fafc; padding: 32px 20px; text-align: center; border-top: 3px solid ${PRIMARY_COLOR};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="text-align: center;">
          <p style="margin: 0 0 12px 0; color: #64748b; font-size: 14px; line-height: 1.6;">
            Este correo lo has recibido porque enviaste un formulario en <strong style="color: ${PRIMARY_COLOR};">burocraciacero.com</strong>
          </p>
          <p style="margin: 0 0 16px 0; color: #94a3b8; font-size: 13px;">
            © ${new Date().getFullYear()} ${SITE_NAME}. Todos los derechos reservados.
          </p>
          <!-- Social links -->
          <div style="margin-top: 16px;">
            <a href="${SITE_URL}" style="display: inline-block; margin: 0 8px; color: ${PRIMARY_COLOR}; text-decoration: none; font-size: 13px; font-weight: 600;">
              🌐 Visitar web
            </a>
          </div>
        </td>
      </tr>
    </table>
  </div>
`;

// Función auxiliar para crear botones modernos
function createButton(text: string, url: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 24px auto;">
      <tr>
        <td style="border-radius: 8px; background: linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${PRIMARY_DARK} 100%); box-shadow: 0 4px 12px rgba(19, 145, 185, 0.3);">
          <a href="${url}" style="display: inline-block; padding: 14px 32px; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 15px; letter-spacing: 0.3px; border-radius: 8px;">
            ${text}
          </a>
        </td>
      </tr>
    </table>
  `;
}

// Función auxiliar para crear secciones destacadas
function createHighlightBox(content: string, icon: string = "✓"): string {
  return `
    <div style="background: ${PRIMARY_LIGHT}; border-left: 4px solid ${PRIMARY_COLOR}; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <div style="font-size: 24px; margin-bottom: 8px;">${icon}</div>
      <div style="color: #0f172a; line-height: 1.6;">${content}</div>
    </div>
  `;
}

function wrapBody(content: string): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${SITE_NAME}</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
</head>
<body style="${baseStyles}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 20px 0;">
    <tr>
      <td align="center">
        <!-- Container principal -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr><td>${headerHtml}</td></tr>
          
          <!-- Contenido -->
          <tr>
            <td style="padding: 40px 32px; background: #ffffff;">
              ${content}
            </td>
          </tr>
          
          <!-- Footer -->
          <tr><td>${footerHtml}</td></tr>
        </table>
        
        <!-- Spacer -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">
          <tr>
            <td style="padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;">
              Si tienes problemas para ver este correo, <a href="${SITE_URL}" style="color: ${PRIMARY_COLOR}; text-decoration: none;">visita nuestra web</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/** Correo al cliente: confirmación registro newsletter/home */
export function clientConfirmacionNewsletter(): string {
  const content = `
    <div style="text-align: center; margin-bottom: 32px;">
      <div style="display: inline-block; background: ${PRIMARY_LIGHT}; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
        <span style="font-size: 40px;">✓</span>
      </div>
      <h1 style="margin: 0 0 12px 0; font-size: 28px; font-weight: 700; color: #0f172a; line-height: 1.2;">¡Bienvenido a ${SITE_NAME}!</h1>
      <p style="margin: 0; font-size: 16px; color: #64748b;">Te hemos registrado correctamente</p>
    </div>
    
    ${createHighlightBox(`
      <strong style="color: ${PRIMARY_COLOR};">¿Qué sigue ahora?</strong><br>
      Hemos recibido tu solicitud y la hemos registrado en nuestro sistema. Nos pondremos en contacto contigo pronto para informarte sobre ayudas y trámites que puedan interesarte.
    `, "📋")}
    
    <p style="margin: 24px 0 8px 0; color: #475569; line-height: 1.7; font-size: 15px;">
      Gracias por confiar en nosotros. Estamos aquí para ayudarte con todos tus trámites y gestiones.
    </p>
    
    <p style="margin: 16px 0 24px 0; color: #64748b; font-size: 14px; line-height: 1.6;">
      Si tienes alguna duda, puedes escribirnos respondiendo a este correo o por WhatsApp.
    </p>
    
    ${createButton("Visitar nuestra web", SITE_URL)}
  `;
  return wrapBody(content);
}

/** Correo al admin: nuevo registro newsletter/home */
export function adminNotificacionNewsletter(email: string, url: string): string {
  const content = `
    <div style="background: linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${PRIMARY_DARK} 100%); padding: 20px; border-radius: 12px; margin-bottom: 24px; text-align: center;">
      <div style="font-size: 32px; margin-bottom: 8px;">🔔</div>
      <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff;">Nuevo registro (Newsletter / Home)</h1>
      <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">Se ha registrado un nuevo correo desde el formulario de la web</p>
    </div>
    
    <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 24px; margin: 20px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
            <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Email</div>
            <div style="color: #0f172a; font-size: 15px; font-weight: 600;">${escapeHtml(email)}</div>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0;">
            <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">URL de origen</div>
            <div style="color: #0f172a; font-size: 14px; word-break: break-all;">${escapeHtml(url || "—")}</div>
          </td>
        </tr>
      </table>
    </div>
    
    <p style="margin: 20px 0 0 0; color: #64748b; font-size: 13px; text-align: center;">
      📅 Recibido el ${new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
    </p>
  `;
  return wrapBody(content);
}

/** Correo al cliente: confirmación mensaje de contacto */
export function clientConfirmacionContacto(nombre: string): string {
  const content = `
    <div style="text-align: center; margin-bottom: 32px;">
      <div style="display: inline-block; background: ${PRIMARY_LIGHT}; width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; padding-top: 15px;">
        <span style="font-size: 40px;">💬</span>
      </div>
      <h1 style="margin: 0 0 12px 0; font-size: 28px; font-weight: 700; color: #0f172a; line-height: 1.2;">¡Hola ${escapeHtml(nombre)}!</h1>
      <p style="margin: 0; font-size: 16px; color: #64748b;">Hemos recibido tu mensaje</p>
    </div>
    
    ${createHighlightBox(`
      <strong style="color: ${PRIMARY_COLOR};">Tu mensaje está en buenas manos</strong><br>
      Te responderemos lo antes posible. Revisa tu bandeja de entrada (y la carpeta de spam por si acaso) en las próximas horas.
    `, "⏱️")}
    
    <div style="background: #f8fafc; border-radius: 12px; padding: 24px; margin: 24px 0; border-left: 4px solid ${PRIMARY_COLOR};">
      <p style="margin: 0 0 12px 0; color: #0f172a; font-weight: 600;">¿Necesitas ayuda urgente?</p>
      <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6;">
        Si tu consulta es urgente, también puedes contactarnos por WhatsApp para una respuesta más rápida.
      </p>
    </div>
    
    <p style="margin: 24px 0; color: #475569; text-align: center; line-height: 1.6;">
      Gracias por confiar en <strong style="color: ${PRIMARY_COLOR};">${SITE_NAME}</strong>
    </p>
    
    ${createButton("Visitar nuestra web", SITE_URL)}
  `;
  return wrapBody(content);
}

/** Correo al admin: nuevo mensaje de contacto */
export function adminNotificacionContacto(nombre: string, email: string, telefono: string, mensaje: string): string {
  const content = `
    <div style="background: linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${PRIMARY_DARK} 100%); padding: 20px; border-radius: 12px; margin-bottom: 24px; text-align: center;">
      <div style="font-size: 32px; margin-bottom: 8px;">📧</div>
      <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff;">Nuevo mensaje de contacto</h1>
      <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">Un usuario ha enviado un mensaje desde el formulario de contacto</p>
    </div>
    
    <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 24px; margin: 20px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
            <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">👤 Nombre</div>
            <div style="color: #0f172a; font-size: 15px; font-weight: 600;">${escapeHtml(nombre)}</div>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
            <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">✉️ Email</div>
            <div style="color: #0f172a; font-size: 15px; font-weight: 600;">
              <a href="mailto:${escapeHtml(email)}" style="color: ${PRIMARY_COLOR}; text-decoration: none;">${escapeHtml(email)}</a>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
            <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">📱 Teléfono</div>
            <div style="color: #0f172a; font-size: 15px; font-weight: 600;">
              <a href="tel:${escapeHtml(telefono)}" style="color: ${PRIMARY_COLOR}; text-decoration: none;">${escapeHtml(telefono)}</a>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0;">
            <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">💬 Mensaje</div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; color: #0f172a; font-size: 14px; line-height: 1.7;">${escapeHtml(mensaje).replace(/\n/g, "<br>")}</div>
          </td>
        </tr>
      </table>
    </div>
    
    <p style="margin: 20px 0 0 0; color: #64748b; font-size: 13px; text-align: center;">
      📅 Recibido el ${new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
    </p>
  `;
  return wrapBody(content);
}

/** Correo al cliente: confirmación solicitud de trámite (genérico) */
export function clientConfirmacionTramite(nombreCompleto: string, nombreTramite: string): string {
  const content = `
    <div style="text-align: center; margin-bottom: 32px;">
      <div style="display: inline-block; background: ${PRIMARY_LIGHT}; width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; padding-top: 15px;">
        <span style="font-size: 40px;">📄</span>
      </div>
      <h1 style="margin: 0 0 12px 0; font-size: 28px; font-weight: 700; color: #0f172a; line-height: 1.2;">¡Hola ${escapeHtml(nombreCompleto)}!</h1>
      <p style="margin: 0; font-size: 16px; color: #64748b;">Solicitud recibida correctamente</p>
    </div>
    
    <div style="background: linear-gradient(135deg, ${PRIMARY_LIGHT} 0%, #ffffff 100%); border: 2px solid ${PRIMARY_COLOR}; border-radius: 12px; padding: 24px; margin: 24px 0; text-align: center;">
      <div style="color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Trámite solicitado</div>
      <div style="color: ${PRIMARY_COLOR}; font-size: 20px; font-weight: 700; line-height: 1.3;">${escapeHtml(nombreTramite)}</div>
    </div>
    
    ${createHighlightBox(`
      <strong style="color: ${PRIMARY_COLOR};">¿Qué sigue ahora?</strong><br>
      Revisaremos toda la información que nos has proporcionado y nos pondremos en contacto contigo para continuar con el trámite. Te mantendremos informado en cada paso del proceso.
    `, "🔄")}
    
    <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin: 24px 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding: 8px 0; vertical-align: top; width: 30px;">
            <span style="font-size: 20px;">💡</span>
          </td>
          <td style="padding: 8px 0;">
            <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6;">
              <strong>Consejo:</strong> Mantén tu teléfono y correo disponibles. Te contactaremos pronto para avanzar con tu solicitud.
            </p>
          </td>
        </tr>
      </table>
    </div>
    
    <p style="margin: 24px 0 8px 0; color: #64748b; font-size: 14px; text-align: center; line-height: 1.6;">
      Si necesitas aclarar algo, responde a este correo o escríbenos por WhatsApp
    </p>
    
    ${createButton("Visitar mi cuenta", SITE_URL + "/mi-cuenta")}
  `;
  return wrapBody(content);
}

/** Correo al admin: nueva solicitud de trámite (genérico) */
export function adminNotificacionTramite(
  nombreTramite: string,
  nombreCompleto: string,
  email: string,
  telefono: string
): string {
  const content = `
    <div style="background: linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${PRIMARY_DARK} 100%); padding: 20px; border-radius: 12px; margin-bottom: 24px; text-align: center;">
      <div style="font-size: 32px; margin-bottom: 8px;">📝</div>
      <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff;">Nueva solicitud de trámite</h1>
      <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">Se ha recibido una nueva solicitud desde la web</p>
    </div>
    
    <div style="background: linear-gradient(135deg, ${PRIMARY_LIGHT} 0%, #ffffff 100%); border: 2px solid ${PRIMARY_COLOR}; border-radius: 12px; padding: 20px; margin: 24px 0; text-align: center;">
      <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">📋 Trámite</div>
      <div style="color: ${PRIMARY_COLOR}; font-size: 22px; font-weight: 700; line-height: 1.3;">${escapeHtml(nombreTramite)}</div>
    </div>
    
    <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 24px; margin: 20px 0;">
      <div style="color: #0f172a; font-size: 16px; font-weight: 700; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;">Datos del solicitante</div>
      <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
            <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">👤 Nombre completo</div>
            <div style="color: #0f172a; font-size: 15px; font-weight: 600;">${escapeHtml(nombreCompleto)}</div>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
            <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">✉️ Email</div>
            <div style="color: #0f172a; font-size: 15px; font-weight: 600;">
              <a href="mailto:${escapeHtml(email)}" style="color: ${PRIMARY_COLOR}; text-decoration: none;">${escapeHtml(email)}</a>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0;">
            <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">📱 Teléfono</div>
            <div style="color: #0f172a; font-size: 15px; font-weight: 600;">
              <a href="tel:${escapeHtml(telefono)}" style="color: ${PRIMARY_COLOR}; text-decoration: none;">${escapeHtml(telefono)}</a>
            </div>
          </td>
        </tr>
      </table>
    </div>
    
    <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px; margin: 20px 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="vertical-align: top; width: 30px;">
            <span style="font-size: 20px;">⚡</span>
          </td>
          <td>
            <p style="margin: 0; color: #78350f; font-size: 13px; font-weight: 600;">
              Recuerda revisar el panel de administración para más detalles y gestionar esta solicitud.
            </p>
          </td>
        </tr>
      </table>
    </div>
    
    <p style="margin: 20px 0 0 0; color: #64748b; font-size: 13px; text-align: center;">
      📅 Recibido el ${new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
    </p>
  `;
  return wrapBody(content);
}

/** Correo al cliente: enlace para establecer contraseña (panel mi-cuenta) */
export function clientEnlaceEstablecerContrasena(link: string): string {
  const safeLink = escapeHtml(link);
  const content = `
    <div style="text-align: center; margin-bottom: 32px;">
      <div style="display: inline-block; background: ${PRIMARY_LIGHT}; width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; padding-top: 15px;">
        <span style="font-size: 40px;">🔐</span>
      </div>
      <h1 style="margin: 0 0 12px 0; font-size: 28px; font-weight: 700; color: #0f172a; line-height: 1.2;">Configura tu cuenta</h1>
      <p style="margin: 0; font-size: 16px; color: #64748b;">Establece tu contraseña para acceder</p>
    </div>
    
    ${createHighlightBox(`
      <strong style="color: ${PRIMARY_COLOR};">¡Tu cuenta está lista!</strong><br>
      Tu gestor ha registrado tu cuenta para que puedas ver el estado de tu solicitud en nuestro panel de cliente. Solo necesitas establecer tu contraseña para acceder.
    `, "✨")}
    
    <div style="text-align: center; margin: 32px 0;">
      ${createButton("Establecer mi contraseña", link)}
    </div>
    
    <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px; margin: 24px 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="vertical-align: top; width: 30px;">
            <span style="font-size: 20px;">⏰</span>
          </td>
          <td>
            <p style="margin: 0; color: #78350f; font-size: 13px; line-height: 1.6;">
              <strong>Importante:</strong> Este enlace es válido durante <strong>72 horas</strong>. Después de ese tiempo, tendrás que solicitar uno nuevo.
            </p>
          </td>
        </tr>
      </table>
    </div>
    
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 24px 0;">
      <p style="margin: 0 0 8px 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Si el botón no funciona</p>
      <p style="margin: 0 0 8px 0; color: #475569; font-size: 13px;">Copia y pega este enlace en tu navegador:</p>
      <p style="margin: 0; word-break: break-all; font-size: 12px; color: ${PRIMARY_COLOR}; background: #ffffff; padding: 12px; border-radius: 6px; border: 1px solid ${PRIMARY_COLOR};">
        ${safeLink}
      </p>
    </div>
    
    <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin: 24px 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding: 8px 0; vertical-align: top; width: 30px;">
            <span style="font-size: 20px;">🛡️</span>
          </td>
          <td style="padding: 8px 0;">
            <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6;">
              <strong>Seguridad:</strong> Si no solicitaste este correo, puedes ignorarlo de forma segura. Tu cuenta no se activará sin tu acción.
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;
  return wrapBody(content);
}

function escapeHtml(text: string): string {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
