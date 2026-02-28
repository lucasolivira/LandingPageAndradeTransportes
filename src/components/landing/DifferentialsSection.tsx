import { MapPin, Truck, Clock, ShieldCheck, BarChart3 } from "lucide-react";
import { LiaTemperatureLowSolid } from "react-icons/lia";

const differentials = [
  {
    icon: LiaTemperatureLowSolid,
    title: "Controle de Temperatura 24h",
    description:
      "Monitoramento contínuo da temperatura com alertas em tempo real para garantir a cadeia do frio.",
  },
  {
    icon: BarChart3,
    title: "Monitoramento da Carga",
    description:
      "Rastreamento GPS e telemetria em toda a frota para acompanhamento completo da sua carga.",
  },
  {
    icon: Truck,
    title: "Frota Própria Refrigerada",
    description:
      "Veículos modernos e bem mantidos, com câmaras frigoríficas de última geração.",
  },
  {
    icon: Clock,
    title: "Entregas Rápidas e Pontuais",
    description:
      "Compromisso com prazos rigorosos. 98% das nossas entregas são realizadas dentro do prazo.",
  },
  {
    icon: ShieldCheck,
    title: "Normas Sanitárias",
    description:
      "Total conformidade com ANVISA, MAPA e regulamentações sanitárias para transporte de alimentos.",
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    description:
      "Atendemos as principais rotas do Brasil, conectando frigoríficos a distribuidores em todo o país.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada detalhe da nossa operação é pensado para garantir segurança,
            qualidade e pontualidade no transporte da sua carga.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-card rounded-xl p-8 card-hover border border-border"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
