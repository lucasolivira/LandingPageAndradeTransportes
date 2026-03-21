import Logo from "@/assets/LogoAndradeTransportes.png";
import { CONTACT } from "@/constants/contact";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4 md:px-8">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={Logo}
                alt={CONTACT.company.name}
                className="w-20 h-auto object-contain"
              />
              <span className="font-bold text-lg leading-tight">
                {CONTACT.company.name}
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
              <li>{CONTACT.phoneFixo.display}</li>
              <li>{CONTACT.email.address}</li>
              <li>{CONTACT.local.state}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-6 text-center text-sm text-secondary-foreground/50">
          © {new Date().getFullYear()} {CONTACT.company.name}. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
