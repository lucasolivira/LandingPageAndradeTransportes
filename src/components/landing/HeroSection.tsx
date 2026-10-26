import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-truck.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/constants/contact";
import { RevealGroup, RevealItem } from "./motion";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // parallax leve: a imagem desce mais devagar que o conteúdo
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <m.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImg})`,
          y: reduceMotion ? 0 : bgY,
        }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />
      {/* brilho frio discreto no canto superior */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-ice/20 blur-3xl" />

      <m.div
        className="relative z-10 container-custom px-4 md:px-8 py-20 md:py-32"
        style={{ opacity: reduceMotion ? 1 : contentOpacity }}
      >
        <RevealGroup className="max-w-3xl" delay={0.3} interval={0.15}>
          <RevealItem>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Transporte com <span className="text-primary">Segurança</span>,{" "}
              <span className="text-primary">Pontualidade</span> e{" "}
              <span className="text-primary">Temperatura Controlada</span>
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
              Segurança, pontualidade e temperatura controlada 24 horas do
              início ao destino para todo o Brasil.
            </p>
          </RevealItem>

          <RevealItem className="flex flex-col sm:flex-row gap-4">
            <a href="#contato">
              <Button
                size="lg"
                className="text-base px-8 py-6 w-full sm:w-auto shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
              >
                Solicitar Orçamento Agora
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
                className="glass text-base px-8 py-6 w-full sm:w-auto text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/20"
              >
                <FaWhatsapp className="h-5 w-5 mr-2" />
                Falar no WhatsApp
              </Button>
            </a>
          </RevealItem>
        </RevealGroup>
      </m.div>

      {/* indicador de rolagem */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <m.a
          href="#sobre"
          aria-label="Rolar para a próxima seção"
          className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.6 },
            y: {
              delay: 1.2,
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <ChevronDown className="h-7 w-7" />
        </m.a>
      </div>
    </section>
  );
};

export default HeroSection;
