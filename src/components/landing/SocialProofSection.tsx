import { Star, Quote } from "lucide-react";

const stats = [
  { value: "15+", label: "Anos de Mercado" },
  { value: "500+", label: "Clientes Atendidos" },
  { value: "98%", label: "Entregas no Prazo" },
  { value: "24/7", label: "Monitoramento" },
];

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Proprietário - Açougue Premium",
    text: "A Andrade Transportes transformou nossa logística. Desde que contratamos, não tivemos nenhum problema com temperatura ou atrasos. Recomendo sem hesitar.",
  },
  {
    name: "Ana Souza",
    role: "Gerente de Logística - Frigorífico São Paulo",
    text: "Profissionalismo e pontualidade são as palavras que definem a Andrade Transportes. A carne chega sempre na temperatura ideal e dentro do prazo combinado.",
  },
  {
    name: "Roberto Lima",
    role: "Diretor - Distribuidora Carne & Cia",
    text: "Trabalhamos com a Andrade Transportes há mais de 5 anos. A confiança que temos neles nos permite focar no nosso negócio sem se preocupar com o transporte.",
  },
];

const SocialProofSection = () => {
  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-secondary text-secondary-foreground"
            >
              <span className="text-4xl md:text-5xl font-bold block mb-1">
                {stat.value}
              </span>
              <span className="text-sm text-secondary-foreground/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Prova Social
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-8 border border-border card-hover"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
