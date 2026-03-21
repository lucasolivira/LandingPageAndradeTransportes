import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/LogoAndradeTransportes.png";
import { NAV_ITEMS } from "@/constants/navigation";
import { CONTACT } from "@/constants/contact";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-custom flex items-center justify-between h-16 px-4 md:px-8">
        <a href="#hero" className="flex items-center gap-1">
          <img
            src={Logo}
            alt={CONTACT.company.name}
            className="w-32 h-32 object-contain"
          />
          <span className="font-bold text-xl text-foreground hidden sm:block">
            {CONTACT.company.name}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
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
          <a href={CONTACT.phone.href} className="hidden md:flex">
            {" "}
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              {CONTACT.phoneFixo.display}
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
            {NAV_ITEMS.map((item) => (
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
