import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/constants/contact";

const WhatsAppButton = () => {
  return (
    <a
      href={CONTACT.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
