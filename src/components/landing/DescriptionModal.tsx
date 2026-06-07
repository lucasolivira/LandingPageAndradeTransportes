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
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-background shadow-2xl ring-1 ring-border animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Imagem com título sobreposto */}
        <div className="relative bg-muted">
          <img
            src={image.src}
            alt={image.label}
            className="mx-auto max-h-[360px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60"
          >
            <X size={18} />
          </button>

          <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white drop-shadow-sm">
            {image.label}
          </h3>
        </div>

        {/* Descrição */}
        <div className="overflow-y-auto px-6 py-6">
          <p className="whitespace-pre-line text-base leading-7 tracking-wide text-muted-foreground">
            {image.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionModal;
