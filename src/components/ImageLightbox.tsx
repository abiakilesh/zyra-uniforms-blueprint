import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback, useState } from "react";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  images?: { src: string; alt: string }[];
  currentIndex?: number;
  onNavigate?: (index: number) => void;
}

const ImageLightbox = ({ 
  isOpen, 
  onClose, 
  imageSrc, 
  imageAlt, 
  images = [], 
  currentIndex = 0,
  onNavigate 
}: ImageLightboxProps) => {
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const hasMultipleImages = images.length > 1;
  const canGoNext = currentIndex < images.length - 1;
  const canGoPrev = currentIndex > 0;

  const handleNext = useCallback(() => {
    if (canGoNext && onNavigate && !isAnimating) {
      setSlideDirection('left');
      setIsAnimating(true);
      setTimeout(() => {
        onNavigate(currentIndex + 1);
        setIsAnimating(false);
      }, 150);
    }
  }, [canGoNext, currentIndex, onNavigate, isAnimating]);

  const handlePrev = useCallback(() => {
    if (canGoPrev && onNavigate && !isAnimating) {
      setSlideDirection('right');
      setIsAnimating(true);
      setTimeout(() => {
        onNavigate(currentIndex - 1);
        setIsAnimating(false);
      }, 150);
    }
  }, [canGoPrev, currentIndex, onNavigate, isAnimating]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowRight" && hasMultipleImages) {
      handleNext();
    } else if (e.key === "ArrowLeft" && hasMultipleImages) {
      handlePrev();
    }
  }, [onClose, hasMultipleImages, handleNext, handlePrev]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    if (!isAnimating) {
      setSlideDirection(null);
    }
  }, [isAnimating]);

  if (!isOpen) return null;

  const getSlideClass = () => {
    if (!slideDirection) return 'animate-scale-in';
    if (isAnimating) {
      return slideDirection === 'left' ? 'animate-slide-out-left' : 'animate-slide-out-right';
    }
    return slideDirection === 'left' ? 'animate-slide-in-right' : 'animate-slide-in-left';
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Navigation Arrows - Always visible when multiple images */}
      {hasMultipleImages && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          disabled={!canGoPrev}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/60 border-2 border-white/40 hover:bg-black/80 hover:border-white/60 transition-all shadow-lg ${
            !canGoPrev ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
          }`}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
      )}

      {hasMultipleImages && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          disabled={!canGoNext}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/60 border-2 border-white/40 hover:bg-black/80 hover:border-white/60 transition-all shadow-lg ${
            !canGoNext ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
          }`}
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      )}
      
      <div 
        className={`max-w-[90vw] max-h-[90vh] p-4 ${getSlideClass()}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        <p className="text-white text-center mt-4 text-lg font-medium">{imageAlt}</p>
        {hasMultipleImages && (
          <p className="text-white/60 text-center mt-2 text-sm">
            {currentIndex + 1} / {images.length} • Use arrow keys to navigate
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageLightbox;
