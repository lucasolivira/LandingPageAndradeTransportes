import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-truck.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import teamImg from "@/assets/team.jpg";
import tempImg from "@/assets/temperature-control.jpg";
import Dhiosney from "@/assets/dhiosney.jpeg";

const images = [
  {
    src: heroImg,
    alt: "Frota refrigerada Grupo Andrade Transportes",
    label: "Nossa Frota",
  },
  {
    src: warehouseImg,
    alt: "Estrutura de armazenamento refrigerado",
    label: "Estrutura",
  },
  { src: teamImg, alt: "Equipe Grupo Andrade Transportes", label: "Equipe" },
  {
    src: tempImg,
    alt: "Controle de temperatura dos caminhões",
    label: "Tecnologia",
  },
  { src: Dhiosney, alt: "Fundador e Atual Dono da empresa", label: "CEO" },
];

// Duplicamos as imagens para criar o efeito de loop infinito
const loopedImages = [...images, ...images];

const GallerySection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const positionRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5; // pixels por frame (~1.3s por imagem a 300px de largura)

    const animate = () => {
      positionRef.current += speed;

      // Quando percorreu metade (o set original), volta ao início sem salto visível
      const halfWidth = track.scrollWidth / 2;
      if (positionRef.current >= halfWidth) {
        positionRef.current = 0;
      }

      track.style.transform = `translateX(-${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Galeria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Nossa Estrutura e Operação
          </h2>
        </div>
      </div>

      {/* Faixa de scroll sem padding lateral para sair da tela */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-4 w-max"
          style={{ willChange: "transform" }}
        >
          {loopedImages.map((img, index) => (
            <div
              key={`${img.label}-${index}`}
              className="group relative rounded-xl overflow-hidden flex-shrink-0"
              style={{ width: "320px", aspectRatio: "4/3" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-secondary-foreground font-semibold text-lg">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
