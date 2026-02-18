import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nome: "", empresa: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, empresa, telefone, mensagem } = form;
    if (!nome.trim() || !telefone.trim()) {
      toast({ title: "Preencha os campos obrigatórios", variant: "destructive" });
      return;
    }
    const text = encodeURIComponent(
      `Olá! Meu nome é ${nome.trim()}, da empresa ${empresa.trim() || "Não informada"}. Telefone: ${telefone.trim()}. Mensagem: ${mensagem.trim() || "Gostaria de um orçamento."}`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, "_blank");
    toast({ title: "Redirecionando para o WhatsApp..." });
    setForm({ nome: "", empresa: "", telefone: "", mensagem: "" });
  };

  return (
    <section id="contato" className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Fale Conosco</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Solicite seu orçamento ou tire suas dúvidas. Estamos prontos para atender você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
              <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-foreground">Telefone</h4>
                <p className="text-muted-foreground">(11) 99999-9999</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
              <MessageCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-foreground">WhatsApp</h4>
                <a
                  href="https://wa.me/5511999999999"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (11) 99999-9999
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
              <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-foreground">E-mail</h4>
                <a href="mailto:contato@friolog.com.br" className="text-primary hover:underline">
                  contato@friolog.com.br
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
              <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-foreground">Endereço</h4>
                <p className="text-muted-foreground">
                  Av. Industrial, 1500 - Distrito Industrial<br />
                  São Paulo - SP, 01000-000
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Nome *</label>
              <Input
                placeholder="Seu nome completo"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                maxLength={100}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Empresa</label>
              <Input
                placeholder="Nome da sua empresa"
                value={form.empresa}
                onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                maxLength={100}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Telefone *</label>
              <Input
                placeholder="(00) 00000-0000"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                maxLength={20}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Mensagem</label>
              <Textarea
                placeholder="Descreva sua necessidade de transporte..."
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                maxLength={1000}
                rows={4}
              />
            </div>
            <Button type="submit" size="lg" className="w-full py-6">
              Enviar Mensagem via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
