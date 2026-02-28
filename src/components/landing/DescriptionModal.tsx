import { X } from "lucide-react";
import { useEffect } from "react";

interface DescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    src: string;
    label: string;
    description: string;
  } | null;
}

const DescriptionModal = ({
  isOpen,
  onClose,
  image,
}: DescriptionModalProps) => {
  if (!isOpen || !image) return null;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    // <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
    //   <div className="bg-background w-[90%] max-w-3xl max-h-[85vh] rounded-2xl shadow-xl relative animate-in fade-in zoom-in-95 duration-200 flex flex-col">
    //     {/* Botão fechar */}
    //     <button
    //       onClick={onClose}
    //       className="absolute top-5 right-5 p-2 rounded-full bg-muted/40 hover:bg-muted transition-colors"
    //     >
    //       <X size={18} />
    //     </button>
    //     {/* Header FIXO */}
    //     <div className="p-6 pb-4">
    //       <img
    //         src={image.src}
    //         alt={image.label}
    //         className="w-full h-56 object-cover rounded-lg mb-4"
    //       />

    //       <h3 className="text-2xl font-bold">{image.label}</h3>
    //     </div>

    //     {/* Descrição com SCROLL */}
    //     <div className="px-6 pb-6 overflow-y-auto">
    //       <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
    //         {image.description}
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-background w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col overflow-hidden">
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-2xl font-bold">{image.label}</h3>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* IMAGEM */}
        <div className="w-full bg-muted">
          <img
            src={image.src}
            alt={image.label}
            className="w-full max-h-[350px] object-contain mx-auto"
          />
        </div>

        {/* DESCRIÇÃO */}
        <div className="px-6 py-6 overflow-y-auto">
          <p className="text-muted-foreground text-base leading-7 tracking-wide text-justify">
            {image.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionModal;
