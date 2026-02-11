import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM = process.env.EMAIL_FROM || "Trámites <onboarding@resend.dev>";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "";

function canSend(): boolean {
  return Boolean(resend && (ADMIN_EMAIL || FROM));
}

/** Envía email de confirmación al cliente (ej. "Hemos recibido tu mensaje") */
export async function sendConfirmationToClient(options: {
  to: string;
  subject: string;
  html: string;
}): Promise<{ ok: boolean; error?: string }> {
  if (!resend) {
    console.warn("[email] RESEND_API_KEY no configurado, no se envía correo al cliente.");
    return { ok: false, error: "Email no configurado" };
  }
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: options.to,
      subject: options.subject,
      html: options.html,
    });
    if (error) {
      console.error("[email] Error enviando al cliente:", error);
      return { ok: false, error: String(error) };
    }
    return { ok: true };
  } catch (e) {
    console.error("[email] Excepción enviando al cliente:", e);
    return { ok: false, error: e instanceof Error ? e.message : "Error desconocido" };
  }
}

/** Envía notificación al administrador (nuevo formulario / solicitud) */
export async function sendNotificationToAdmin(options: {
  subject: string;
  html: string;
}): Promise<{ ok: boolean; error?: string }> {
  if (!resend || !ADMIN_EMAIL) {
    console.warn("[email] ADMIN_EMAIL o RESEND_API_KEY no configurados, no se notifica al admin.");
    return { ok: false, error: "Email admin no configurado" };
  }
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: ADMIN_EMAIL,
      subject: options.subject,
      html: options.html,
    });
    if (error) {
      console.error("[email] Error enviando al admin:", error);
      return { ok: false, error: String(error) };
    }
    return { ok: true };
  } catch (e) {
    console.error("[email] Excepción enviando al admin:", e);
    return { ok: false, error: e instanceof Error ? e.message : "Error desconocido" };
  }
}

export { canSend };
