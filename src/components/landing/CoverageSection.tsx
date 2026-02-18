import { MapPin } from "lucide-react";

const regions = [
  { name: "Sudeste", states: "SP, RJ, MG, ES" },
  { name: "Sul", states: "PR, SC, RS" },
  { name: "Centro-Oeste", states: "GO, MT, MS, DF" },
  { name: "Nordeste", states: "BA, PE, CE, MA" },
  { name: "Norte", states: "PA, AM, TO, RO" },
];

const CoverageSection = () => {
  return (
    <section id="atuacao" className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Logística Nacional</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Área de Atuação
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nossa operação logística cobre as principais rotas do Brasil, conectando 
              centros produtores de proteína animal aos maiores mercados consumidores. 
              Com rotas otimizadas e pontos de apoio estratégicos, garantimos entregas 
              rápidas e seguras em todo o território nacional.
            </p>
            <div className="space-y-3">
              {regions.map((r) => (
                <div key={r.name} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">{r.name}</span>
                    <span className="text-muted-foreground ml-2 text-sm">— {r.states}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary rounded-2xl p-8 md:p-12 text-secondary-foreground text-center">
            <h3 className="text-2xl font-bold mb-4">Precisa de uma rota específica?</h3>
            <p className="text-secondary-foreground/80 mb-6">
              Consulte nossa equipe comercial para rotas personalizadas e 
              condições especiais de frete para a sua região.
            </p>
            <a href="#contato">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Consultar Disponibilidade
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
