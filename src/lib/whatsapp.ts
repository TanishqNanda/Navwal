import { CONTACT } from "./constants";

export function buildWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message ?? CONTACT.defaultMessage);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`;
}