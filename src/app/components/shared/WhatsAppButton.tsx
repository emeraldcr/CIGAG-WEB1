import { MessageCircle } from "lucide-react";
import { contact } from "../../data/siteContent";

export function WhatsAppButton() {
  return (
    <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Contactar a CIGAC por WhatsApp">
      <MessageCircle aria-hidden="true" size={22} />
      <span>WhatsApp</span>
    </a>
  );
}
