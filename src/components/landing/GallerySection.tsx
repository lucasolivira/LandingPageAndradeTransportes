import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-truck.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import teamImg from "@/assets/team.jpg";
import tempImg from "@/assets/temperature-control.jpg";
import Dhiosney from "@/assets/dhiosney.jpeg";
import DescriptionModal from "./DescriptionModal";

const images = [
  {
    src: heroImg,
    alt: "Frota",
    label: "Nossa Frota",
    description: "Nossa frota conta com caminhões modernos refrigerados...",
  },
  {
    src: warehouseImg,
    alt: "Estrutura",
    label: "Estrutura",
    description: "Estrutura preparada para armazenagem refrigerada...",
  },
  {
    src: teamImg,
    alt: "Equipe",
    label: "Equipe",
    description: "Equipe especializada em transporte frigorificado...",
  },
  {
    src: tempImg,
    alt: "Tecnologia",
    label: "Tecnologia",
    description: "Controle térmico com monitoramento em tempo real...",
  },
  {
    src: Dhiosney,
    alt: "CEO",
    label: "CEO",
    description: "Fundador e atual CEO da empresa...",
  },
];

const getSlidesToShow = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

const GallerySection = () => {
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow);
  const [currentIndex, setCurrentIndex] = useState(slidesToShow);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // estados do modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<(typeof images)[number] | null>(
    null
  );

  const isPaused = useRef(false);
  // trava: ignora novos comandos enquanto uma transição está em andamento,
  // impedindo que cliques rápidos ultrapassem a zona de clones.
  const isAnimating = useRef(false);

  // clones nas pontas para criar o loop infinito
  const extendedImages = useMemo(
    () => [
      ...images.slice(-slidesToShow),
      ...images,
      ...images.slice(0, slidesToShow),
    ],
    [slidesToShow]
  );

  // responsividade: recalcula quantos slides aparecem
  useEffect(() => {
    const handleResize = () => {
      const next = getSlidesToShow();
      setSlidesToShow((prev) => {
        if (prev !== next) {
          isAnimating.current = false;
          setIsTransitioning(false);
          setCurrentIndex(next);
        }
        return next;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // garante que a animação seja reativada após um salto invisível
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // função abrir modal
  const handleOpenModal = (img: (typeof images)[number]) => {
    setSelectedImage(img);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextSlide = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // salto invisível: executado quando a animação termina (mais confiável
  // que um setTimeout fixo). Ao entrar na zona de clones, reposiciona a
  // janela na imagem real equivalente sem transição.
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    // ignora transições que borbulham dos filhos (ex.: zoom no hover da imagem)
    if (e.target !== e.currentTarget) return;

    isAnimating.current = false;

    if (currentIndex >= images.length + slidesToShow) {
      setIsTransitioning(false);
      setCurrentIndex(slidesToShow);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(images.length);
    }
  };

  // autoplay (pausa no hover e quando o modal está aberto)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused.current && !isModalOpen) nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isModalOpen]);

  // índice real (0..images.length-1) para os indicadores
  const activeDot =
    ((currentIndex - slidesToShow) % images.length + images.length) %
    images.length;

  const goToSlide = (index: number) => {
    const target = index + slidesToShow;
    if (isAnimating.current || target === currentIndex) return;
    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex(target);
  };

  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Conheça a Andrade
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Nossa Operação
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Clique em qualquer imagem para conhecer mais sobre cada parte da
            nossa estrutura e da nossa equipe.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                transition: isTransitioning
                  ? "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
                  : "none",
              }}
            >
              {extendedImages.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 p-2 md:p-3"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <button
                    type="button"
                    onClick={() => handleOpenModal(img)}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <div className="relative h-[280px] md:h-[320px] overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      {/* gradiente para legibilidade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent transition-opacity duration-300 group-hover:from-black/85" />

                      {/* label + chamada */}
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <h3 className="text-lg font-bold text-white drop-shadow-sm">
                          {img.label}
                        </h3>
                        <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-white/80 opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                          Ver detalhes
                          <ChevronRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* botões de navegação */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Slide anterior"
            className="absolute left-1 md:-left-5 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg ring-1 ring-border backdrop-blur transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Próximo slide"
            className="absolute right-1 md:-right-5 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg ring-1 ring-border backdrop-blur transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* indicadores */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Ir para o slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeDot === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>

      <DescriptionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={selectedImage}
      />
    </section>
  );
};

export default GallerySection;
