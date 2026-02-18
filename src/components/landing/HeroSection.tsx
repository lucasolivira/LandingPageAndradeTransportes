import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-truck.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="relative z-10 container-custom px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 border border-primary-foreground/20">
            🥩 Especialistas em Transporte de Carnes
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Transporte de Carnes com{" "}
            <span className="text-primary">Segurança</span> e{" "}
            <span className="text-primary">Temperatura Controlada</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
            Garantimos a qualidade da sua carne do frigorífico até o destino final. 
            Frota refrigerada, monitoramento 24h e entregas pontuais para 
            açougues, frigoríficos e distribuidores em todo o Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contato">
              <Button size="lg" className="text-base px-8 py-6 w-full sm:w-auto">
                Solicitar Orçamento Agora
              </Button>
            </a>
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20transporte%20de%20carnes."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
