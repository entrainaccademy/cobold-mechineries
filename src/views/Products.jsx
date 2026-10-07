'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Info, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { categories, productsList } from '../data/products';

const getSrc = (img) => (typeof img === 'object' && img?.src ? img.src : img);

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? productsList
      : productsList.filter((p) => p.category === selectedCategory);

  return (
    <PageWrapper>
      {/* Header */}
      <section className="relative pt-32 pb-8 sm:pt-28 md:pt-32 md:pb-12 bg-[#F8FAFC] border-b border-[#E5E7EB]/60 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <div className="space-y-2 sm:space-y-2 md:space-y-5 max-w-3xl">
            <span className="text-[#DE1D3A] font-bold text-[10px] sm:text-xs uppercase tracking-widest">
              Industrial Catalog
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] font-display leading-tight">
              Our Machineries & Toolings
            </h1>
            <p className="text-[#6B7280] text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              Explore our line of industrial setups. Engineered with heavy components, high safety ratios, and intuitive controller architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-8 sm:py-12 bg-[#FFFFFF] min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 text-xs font-medium rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#DE1D3A] text-white border-[#DE1D3A] shadow-sm'
                    : 'bg-white/70 border-gray-200 text-gray-600 hover:border-[#DE1D3A]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={`${product.id}-${product.category}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="group border border-[#E5E7EB] bg-[#FFFFFF] rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#DE1D3A]/30 transition-all duration-300 flex flex-col h-full"
              >
                <Link
                  href={`/products/${product.id}`}
                  className="flex flex-col h-full cursor-pointer"
                >
                  {/* Image Section */}
                  <div className="relative h-60 bg-[#FFFFFF] flex items-center justify-center p-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      loading="lazy"
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Details Section */}
                  <div className="p-6 pt-2 flex-grow flex flex-col items-start text-left justify-between">
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#111827] group-hover:text-[#DE1D3A] transition-colors duration-200 mb-2">
                        {product.name}
                      </h3>
                      {product.description && (
                        <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed line-clamp-3">
                          {product.description}
                        </p>
                      )}
                    </div>

                    <div className="w-full pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280] font-semibold mt-4">
                      <span className="flex items-center text-[#DE1D3A] group-hover:underline">
                        <Info className="w-3.5 h-3.5 mr-1" /> View Full Details & Specs
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#DE1D3A] group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
