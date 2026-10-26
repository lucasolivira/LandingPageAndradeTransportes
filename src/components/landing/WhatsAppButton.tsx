import { FaWhatsapp } from "react-icons/fa";
import { m } from "framer-motion";
import { CONTACT } from "@/constants/contact";

const WhatsAppButton = () => {
  return (
    <m.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1 }}
    >
      <m.a
        href={CONTACT.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] flex items-center justify-center shadow-lg"
        aria-label="Falar no WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* anel pulsante discreto */}
        <span className="absolute inset-0 rounded-full bg-[hsl(142,70%,45%)] opacity-40 animate-ping [animation-duration:2.5s] motion-reduce:hidden" />
        <FaWhatsapp className="relative h-7 w-7" />
      </m.a>
    </m.div>
  );
};

export default WhatsAppButton;
