import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/grupoAndradeTransp-removebg-preview.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Atuação", href: "#atuacao" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-custom flex items-center justify-between h-16 px-4 md:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Grupo Andrade Transportes"
            className="w-32 h-32 object-contain"
          />
          <span className="font-bold text-lg text-foreground hidden sm:block">
            Grupo Andrade Transportes
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+5511999999999" className="hidden md:flex">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              (11) 99999-9999
              {/* colocar o telefone correto */}
            </Button>
          </a>
          <a href="#contato">
            <Button size="sm">Orçamento</Button>
          </a>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
