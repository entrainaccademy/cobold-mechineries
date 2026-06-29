import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Layers, ZoomIn } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import Lightbox from '../components/Lightbox';

// Assets
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpeg';
import hmAbout1 from '../assets/hm_about1.jpg';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filters = ['All', 'Machinery', 'Installations', 'Workshop'];

  const galleryItems = [
    {
      src: slider1,
      title: "Vertical CNC Lathe Calibration",
      category: "Machinery",
      description: "Final alignment stress testing of the COBOLT-X5 vertical CNC milling head spindle prior to packaging."
    },
    {
      src: slider2,
      title: "400-Ton Hydraulic Die Install",
      category: "Installations",
      description: "Rigging teams setting the solid main ram and slide cushion guides into the structural frame bed."
    },
    {
      src: slider3,
      title: "Linear Motors & Guideway Assembly",
      category: "Workshop",
      description: "Technicians aligning the precision glass scale grids on our micro-milling workbench rails."
    },
    {
      src: hmAbout1,
      title: "Assembly Facility Gandhinagar",
      category: "Workshop",
      description: "Wide angle perspective of our 150,000 sq ft structural assembly facility, showing dual gantry cranes."
    },
    {
      src: slider1,
      title: "8-Meter Column Milling Setup",
      category: "Machinery",
      description: "Portal framework overview on the G8 gantry center, machining a marine generator housing."
    },
    {
      src: slider2,
      title: "Plate Leveling Alignment Checks",
      category: "Installations",
      description: "Verifying mechanical role spacing tolerances and optical sensors on a 150-ton straightener line."
    }
  ];

  // Filtering logic
  const filteredItems = selectedFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  // Lightbox handlers
  const handleOpenLightbox = (index) => {
    // Map filtered item index back to its position in the filtered list
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(-1);
  };

  const handlePrevImage = () => {
    setLightboxIndex(prev => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setLightboxIndex(prev => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const currentImage = lightboxIndex >= 0 ? filteredItems[lightboxIndex] : null;

  return (
    <PageWrapper>
      {/* Header */}
      <section className="relative pt-32 pb-16 bg-bg-section border-b border-slate-200/60 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <div className="space-y-4 max-w-3xl">
            <span className="text-accent font-bold text-xs uppercase tracking-widest">
              Visual Archive
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-primary font-display leading-tight">
              Machinery & Facility Gallery
            </h1>
            <p className="text-text-light text-base md:text-lg max-w-2xl leading-relaxed">
              Take a virtual walkthrough of our fabrication yards, on-site commissioning operations, and detailed engineering assemblies.
            </p>
          </div>
        </div>
      </section>

      {/* Masonry Section */}
      <section className="py-16 bg-white min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-slate-100 pb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-bg-section text-text hover:bg-slate-200 border border-slate-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleOpenLightbox(idx)}
                  className="relative overflow-hidden rounded-2xl border border-slate-100 shadow-sm cursor-zoom-in group h-72 sm:h-80 bg-slate-900"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Glass Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                      <span className="inline-block px-2.5 py-0.5 bg-accent text-white text-[9px] font-bold uppercase tracking-wider rounded">
                        {item.category}
                      </span>
                      <h4 className="text-white font-display font-bold text-base sm:text-lg">
                        {item.title}
                      </h4>
                      <p className="text-slate-200 text-xs leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                      <div className="pt-2 flex items-center text-white text-xs font-semibold gap-1">
                        <ZoomIn className="w-4 h-4" /> Click to enlarge
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxIndex >= 0}
        onClose={handleCloseLightbox}
        currentImage={currentImage}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </PageWrapper>
  );
}
