import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { m } from "framer-motion";
import { CONTACT } from "@/constants/contact";
import { RevealGroup, RevealItem } from "./motion";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden section-padding bg-secondary-gradient text-secondary-foreground">
      {/* textura e brilhos de fundo */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <m.div
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <m.div
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-ice/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <RevealGroup
        className="relative container-custom text-center"
        interval={0.12}
      >
        <RevealItem>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Precisa de Transporte Seguro para seu Produto?
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-10">
            Solicite um orçamento sem compromisso e descubra como podemos
            otimizar a logística frigorificada do seu negócio com segurança e
            pontualidade.
          </p>
        </RevealItem>
        <RevealItem className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contato">
            <Button
              size="lg"
              className="text-base px-8 py-6 w-full sm:w-auto shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
            >
              Solicitar Orçamento
            </Button>
          </a>
          <a
            href={CONTACT.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="default"
              className="glass text-base px-8 py-6 w-full sm:w-auto text-secondary-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary-foreground/20"
            >
              <FaWhatsapp className="h-5 w-5 mr-2" />
              Falar no WhatsApp
            </Button>
          </a>
          <a href={CONTACT.email.href}>
            <Button
              size="lg"
              variant="default"
              className="glass text-base px-8 py-6 w-full sm:w-auto text-secondary-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary-foreground/20"
            >
              <Mail className="h-5 w-5 mr-2" />
              Enviar E-mail
            </Button>
          </a>
        </RevealItem>
      </RevealGroup>
    </section>
  );
};

export default CTASection;
