import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function Lightbox({ isOpen, onClose, currentImage, onPrev, onNext }) {
  // Listen for keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 p-4 md:p-8"
        >
          {/* Backdrop click to close */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous image button */}
          <button
            onClick={onPrev}
            className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-10"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Container with details */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center z-10"
          >
            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            
            {/* Caption Card */}
            <div className="mt-4 text-center max-w-2xl px-4">
              <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-semibold uppercase tracking-wider rounded mb-2">
                {currentImage.category}
              </span>
              <h3 className="text-white font-display font-bold text-lg md:text-xl">
                {currentImage.title}
              </h3>
              {currentImage.description && (
                <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                  {currentImage.description}
                </p>
              )}
            </div>
          </motion.div>

          {/* Next image button */}
          <button
            onClick={onNext}
            className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-10"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 text-xs tracking-wider">
            Press Arrow Keys Left/Right to Navigate | ESC to Close
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
