import { MapPin } from "lucide-react";
import { m } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "./motion";
import { fadeLeft, fadeRight } from "./motion-variants";

const regions = [
  { name: "Sudeste", states: "SP, RJ, MG, ES" },
  { name: "Sul", states: "PR, SC, RS" },
  { name: "Centro-Oeste", states: "GO, MT, MS, DF" },
  { name: "Nordeste", states: "BA, PE, CE, MA" },
  { name: "Norte", states: "PA, AM, TO, RO" },
];

// rotas ilustrativas partindo da base (canto) e contornando as bordas
// do card para não competir com o texto central
const HUB = { x: 60, y: 250 };
const destinations = [
  { x: 150, y: 40, path: "M60 250 Q20 110 150 40" },
  { x: 390, y: 28, path: "M60 250 Q120 10 390 28" },
  { x: 565, y: 95, path: "M60 250 Q330 -40 565 95" },
  { x: 550, y: 255, path: "M60 250 Q300 330 550 255" },
  { x: 300, y: 278, path: "M60 250 Q170 300 300 278" },
];

const RouteMap = () => (
  <svg
    viewBox="0 0 600 300"
    preserveAspectRatio="xMidYMid slice"
    className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
    aria-hidden="true"
  >
    {destinations.map((d, i) => (
      <g key={i}>
        <m.path
          d={d.path}
          fill="none"
          stroke="hsl(var(--ice))"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            delay: 0.3 + i * 0.15,
            ease: "easeInOut",
          }}
        />
        <m.circle
          cx={d.x}
          cy={d.y}
          r="4"
          fill="hsl(var(--ice))"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 + i * 0.15, type: "spring" }}
        />
      </g>
    ))}
    {/* pulso na base */}
    <m.circle
      cx={HUB.x}
      cy={HUB.y}
      r="6"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      animate={{ r: [6, 22], opacity: [0.8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
    />
    <circle cx={HUB.x} cy={HUB.y} r="6" fill="hsl(var(--primary))" />
  </svg>
);

const CoverageSection = () => {
  return (
    <section id="atuacao" className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Logística Nacional
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Área de Atuação
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Nossa operação logística atende todas as rotas do Brasil,
                conectando centros produtores aos maiores polos consumidores do
                país com eficiência e pontualidade. Com rotas otimizadas e
                pontos de apoio estratégicos, garantimos entregas rápidas e
                seguras em todo o território nacional.
              </p>
            </Reveal>
            <RevealGroup className="space-y-3" interval={0.08}>
              {regions.map((r) => (
                <RevealItem key={r.name} variants={fadeLeft}>
                  <div className="group flex items-center gap-3 p-3 rounded-lg bg-card border border-border transition-all duration-300 hover:translate-x-1 hover:border-primary/40 hover:shadow-[var(--card-shadow)]">
                    <MapPin className="h-5 w-5 text-primary shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">
                        {r.name}
                      </span>
                      <span className="text-muted-foreground ml-2 text-sm">
                        — {r.states}
                      </span>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal variants={fadeRight}>
            <div className="relative overflow-hidden bg-secondary-gradient rounded-2xl p-8 md:p-12 text-secondary-foreground text-center shadow-xl shadow-secondary/20">
              <RouteMap />
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4">
                  Precisa de uma rota específica?
                </h3>
                <p className="text-secondary-foreground/80 mb-6">
                  Consulte nossa equipe comercial para rotas personalizadas e
                  condições especiais de frete para a sua região.
                </p>
                <a href="#contato">
                  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40">
                    Consultar Disponibilidade
                  </button>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
