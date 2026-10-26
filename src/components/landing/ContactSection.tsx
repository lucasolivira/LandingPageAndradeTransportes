import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CONTACT } from "@/constants/contact";
import { Reveal, RevealGroup, RevealItem } from "./motion";
import { fadeRight } from "./motion-variants";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, empresa, telefone, mensagem } = form;
    if (!nome.trim() || !telefone.trim()) {
      toast({
        title: "Preencha os campos obrigatórios",
        variant: "destructive",
      });
      return;
    }
    const text = encodeURIComponent(
      `Olá! Meu nome é ${nome.trim()}, da empresa ${empresa.trim() || "Não informada"}. Telefone: ${telefone.trim()}. Mensagem: ${mensagem.trim() || "Gostaria de um orçamento."}`,
    );
    window.open(
      `https://wa.me/${CONTACT.whatsapp.number}?text=${text}`,
      "_blank",
    );
    toast({ title: "Redirecionando para o WhatsApp..." });
    setForm({ nome: "", empresa: "", telefone: "", mensagem: "" });
  };

  return (
    <section id="contato" className="section-padding bg-section-alt">
      <div className="container-custom">
        <Reveal className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Solicite seu orçamento ou tire suas dúvidas. Estamos prontos para
            atender você.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <RevealGroup className="space-y-6">
            <RevealItem>
              <div className="group flex items-center gap-4 p-5 bg-card rounded-xl border border-border card-hover hover:border-primary/30">
                <Phone className="h-6 w-6 text-primary mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <h4 className="font-bold text-foreground">Telefone</h4>
                  <p className="text-muted-foreground">
                    {CONTACT.phoneFixo.display}
                  </p>
                </div>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="group flex items-center gap-4 p-5 bg-card rounded-xl border border-border card-hover hover:border-primary/30">
                <FaWhatsapp className="h-6 w-6 text-primary mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />

                <div>
                  <h4 className="font-bold text-foreground">WhatsApp</h4>
                  <a
                    href="https://wa.me/5534988939793"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {CONTACT.phone.display}
                  </a>
                </div>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="group flex items-center gap-4 p-5 bg-card rounded-xl border border-border card-hover hover:border-primary/30">
                <Mail className="h-6 w-6 text-primary mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <h4 className="font-bold text-foreground">E-mail</h4>
                  <a
                    href={CONTACT.email.href}
                    className="text-primary hover:underline"
                  >
                    {CONTACT.email.address}
                  </a>
                </div>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="group flex items-center gap-4 p-5 bg-card rounded-xl border border-border card-hover hover:border-primary/30">
                <MapPin className="h-6 w-6 text-primary mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <h4 className="font-bold text-foreground">Endereço</h4>
                  <p className="text-muted-foreground">
                    {CONTACT.local.street}
                    <br />
                    {CONTACT.local.state}, {CONTACT.local.zipCode}
                  </p>
                </div>
              </div>
            </RevealItem>
          </RevealGroup>

          <Reveal variants={fadeRight}>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-xl p-8 border border-border space-y-5 shadow-[var(--card-shadow)]"
            >
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Nome *
                </label>
                <Input
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  maxLength={100}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Empresa
                </label>
                <Input
                  placeholder="Nome da sua empresa"
                  value={form.empresa}
                  onChange={(e) =>
                    setForm({ ...form, empresa: e.target.value })
                  }
                  maxLength={100}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Telefone *
                </label>
                <Input
                  placeholder="(00) 00000-0000"
                  value={form.telefone}
                  onChange={(e) =>
                    setForm({ ...form, telefone: e.target.value })
                  }
                  maxLength={20}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Descreva sua necessidade de transporte..."
                  value={form.mensagem}
                  onChange={(e) =>
                    setForm({ ...form, mensagem: e.target.value })
                  }
                  maxLength={1000}
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full py-6 shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35"
              >
                Enviar Mensagem via WhatsApp
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
