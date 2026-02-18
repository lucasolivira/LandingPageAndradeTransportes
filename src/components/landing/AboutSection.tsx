import { CheckCircle } from "lucide-react";
import teamImg from "@/assets/team.jpg";

const highlights = [
  "Mais de 15 anos de experiência no transporte frigorificado",
  "Frota 100% própria e rastreada em tempo real",
  "Conformidade total com ANVISA e órgãos reguladores",
  "Equipe treinada em boas práticas de transporte de alimentos",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <img
              src={teamImg}
              alt="Equipe FrioLog especializada em transporte de carnes"
              className="rounded-2xl w-full object-cover aspect-[4/3] shadow-lg"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-primary text-primary-foreground rounded-xl px-6 py-4 shadow-lg">
              <span className="text-3xl font-bold block">15+</span>
              <span className="text-sm">Anos de Mercado</span>
            </div>
          </div>

          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre Nós</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Referência em Transporte Frigorificado de Carnes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A FrioLog é uma empresa especializada no transporte de carnes refrigeradas 
              e congeladas, atendendo frigoríficos, açougues, casas de carnes, matadouros 
              e distribuidores de proteína animal em todo o território nacional. 
              Nossa missão é garantir que cada carga chegue ao destino com a mesma 
              qualidade e temperatura com que saiu da origem.
            </p>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
