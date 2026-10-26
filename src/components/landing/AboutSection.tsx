import { CheckCircle } from "lucide-react";
import { m } from "framer-motion";
import teamImg from "@/assets/team.jpg";
import { Reveal, RevealGroup, RevealItem } from "./motion";
import { fadeLeft } from "./motion-variants";

const highlights = [
  "Mais de 15 anos de experiência no transporte frigorificado",
  "Frota 100% própria e rastreada em tempo real",
  "Conformidade total com ANVISA e órgãos reguladores",
  "Controle rigoroso de temperatura durante todo o trajeto",
  "Equipe treinada em boas práticas de transporte de alimentos",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal variants={fadeLeft} className="relative isolate">
            <div className="group overflow-hidden rounded-2xl shadow-lg">
              <img
                src={teamImg}
                alt="Equipe Andrade Transportes especializada em transporte de carnes"
                className="w-full object-cover aspect-[4/3] transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* moldura decorativa em tom frio */}
            <div className="absolute -top-4 -left-4 -z-10 h-full w-full rounded-2xl border-2 border-ice/30" />
            <m.div
              className="absolute -bottom-6 -right-4 md:-right-6 bg-primary text-primary-foreground rounded-xl px-6 py-4 shadow-lg shadow-primary/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
            >
              <span className="text-3xl font-bold block">15+</span>
              <span className="text-sm">Anos de Mercado</span>
            </m.div>
          </Reveal>

          <RevealGroup interval={0.08}>
            <RevealItem>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Sobre Nós
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Referência em Transporte Frigorificado de Carnes
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                A Andrade Transportes é especializada no transporte refrigerado
                e congelado de alimentos, atendendo indústrias, frigoríficos,
                distribuidoras, supermercados e estabelecimentos do setor
                alimentício em todo o território nacional.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Transportamos carnes, pães de queijo, polpas de frutas,
                laticínios e diversos outros produtos que exigem controle
                rigoroso de temperatura e qualidade.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Nosso compromisso é garantir que cada carga chegue ao destino
                preservando suas características originais, mantendo a cadeia de
                frio intacta do ponto de origem até a entrega final.
              </p>
            </RevealItem>
            <RevealGroup as="ul" className="space-y-4" interval={0.08}>
              {highlights.map((item) => (
                <RevealItem
                  as="li"
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
