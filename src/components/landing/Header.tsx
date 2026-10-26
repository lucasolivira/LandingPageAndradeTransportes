import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import {
  AnimatePresence,
  m,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/LogoAndradeTransportes.png";
import { NAV_ITEMS } from "@/constants/navigation";
import { CONTACT } from "@/constants/contact";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1));

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <m.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300",
        scrolled
          ? "bg-background/90 border-border shadow-[0_8px_30px_-12px_hsla(215,60%,22%,0.18)]"
          : "bg-background/95 border-transparent",
      )}
    >
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
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-1 text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-primary transition-transform duration-300 origin-left",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            );
          })}
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
            <Button
              size="sm"
              className="transition-transform hover:-translate-y-0.5"
            >
              Orçamento
            </Button>
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

      {/* barra de progresso da leitura */}
      <m.div
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-primary to-ice"
        style={{ scaleX: progress }}
      />

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden overflow-hidden bg-background border-b border-border"
          >
            <nav className="flex flex-col px-4 py-4 gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium hover:text-primary transition-colors py-2",
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
};

export default Header;
