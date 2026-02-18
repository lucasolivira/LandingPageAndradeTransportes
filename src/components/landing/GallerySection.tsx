import heroImg from "@/assets/hero-truck.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import teamImg from "@/assets/team.jpg";
import tempImg from "@/assets/temperature-control.jpg";

const images = [
  { src: heroImg, alt: "Frota refrigerada FrioLog", label: "Nossa Frota" },
  { src: warehouseImg, alt: "Estrutura de armazenamento refrigerado", label: "Estrutura" },
  { src: teamImg, alt: "Equipe FrioLog", label: "Equipe" },
  { src: tempImg, alt: "Controle de temperatura dos caminhões", label: "Tecnologia" },
];

const GallerySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Galeria</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Nossa Estrutura e Operação
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.label} className="group relative rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-secondary-foreground font-semibold text-lg">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
