import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Precisa de Transporte Seguro para seu Produto?
        </h2>
        <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-10">
          Solicite um orçamento sem compromisso e descubra como podemos otimizar
          a logística frigorificada do seu negócio com segurança e pontualidade.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contato">
            <Button size="lg" className="text-base px-8 py-6 w-full sm:w-auto">
              Solicitar Orçamento
            </Button>
          </a>
          <a
            href="https://wa.me/5534988939793?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="default"
              className="text-base px-8 py-6 w-full sm:w-auto border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
            >
              <FaWhatsapp className="h-5 w-5 mr-2" />
              Falar no WhatsApp
            </Button>
          </a>
          <a href="mailto:contato@AndradeTransportes.com.br">
            {/* colocar email valido */}
            <Button
              size="lg"
              variant="default"
              className="text-base px-8 py-6 w-full sm:w-auto border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
            >
              <Mail className="h-5 w-5 mr-2" />
              Enviar E-mail
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
