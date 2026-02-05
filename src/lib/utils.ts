import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Parsea la respuesta de fetch de forma segura.
 * Si el servidor devuelve HTML (ej. 404/500), evita el error "Unexpected token '<'".
 */
export async function parseJsonResponse<T = unknown>(
  response: Response,
  fallbackError = "Error del servidor. Intenta de nuevo o contáctanos por WhatsApp."
): Promise<T> {
  const text = await response.text();
  try {
    const data = text ? JSON.parse(text) : {};
    return data as T;
  } catch {
    throw new Error(response.ok ? fallbackError : fallbackError);
  }
}
