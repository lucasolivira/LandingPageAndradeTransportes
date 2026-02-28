import Logo from "@/assets/LogoAndradeTransportes.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4 md:px-8">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={Logo}
                alt="Andrade Transportes"
                className="w-20 h-auto object-contain"
              />
              <span className="font-bold text-lg leading-tight">
                Andrade Transportes
              </span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Especialistas em transporte, armazenagem e distribuição de
              produtos refrigerados e congelados, atendendo indústrias
              alimentícias, frigoríficos, centros de distribuição e varejo com
              segurança, rastreabilidade e pontualidade.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              {["Início", "Sobre", "Diferenciais", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")}`}
                  className="block text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>Transporte Refrigerado</li>
              <li>Transporte Congelado</li>
              <li>Logística Frigorificada</li>
              <li>Distribuição de Carnes</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>(11) 99999-9999</li>
              {/* colocar o número real da empresa */}
              <li>contato@grupoandradetransportes.com.br</li>
              <li>Minas Gerais - MG</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-6 text-center text-sm text-secondary-foreground/50">
          © {new Date().getFullYear()} Andrade Transportes. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
