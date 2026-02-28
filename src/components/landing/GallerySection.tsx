import { useEffect, useState } from "react";
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

const visibleSlides = 3;

const extendedImages = [
  ...images.slice(-visibleSlides),
  ...images,
  ...images.slice(0, visibleSlides),
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(visibleSlides);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // 🔥 estados do modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  // 🔥 função abrir modal
  const handleOpenModal = (img: any) => {
    setSelectedImage(img);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // loop invisível
  useEffect(() => {
    if (currentIndex === images.length + visibleSlides) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(visibleSlides);
      }, 700);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length);
      }, 700);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  return (
    <section className="section-padding bg-background">
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
            transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
          }}
        >
          {extendedImages.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / visibleSlides}%` }}
            >
              {/* 👇 AQUI ESTÁ O CLIQUE */}
              <div
                onClick={() => handleOpenModal(img)}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[300px] object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4 transition-opacity duration-500 group-hover:bg-black/30">
                  <span className="text-white font-semibold">{img.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botões */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-2 rounded-full shadow"
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-2 rounded-full shadow"
        >
          ▶
        </button>
      </div>

      {/* 👇 MODAL RENDERIZADO AQUI */}
      <DescriptionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={selectedImage}
      />
    </section>
  );
};

export default GallerySection;
