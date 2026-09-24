import React, { useState } from 'react';
import { galleryItems } from '../data/galleryData.js';
import { Maximize2, X, MapPin, Check, ArrowRight } from 'lucide-react';

interface GalleryProps {
  onQuoteClick: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onQuoteClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<(typeof galleryItems)[0] | null>(null);

  const categories = [
    'All',
    'Log Cabins & Garden Offices',
    'Man-Caves & Home Bars',
    'Sun-Rooms & Living Extensions',
    'Sheds, Workshops & Storage',
    'Expandable Buildings',
  ];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="work" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#B7D51F]" aria-hidden="true" />
              <span className="text-xs font-bold tracking-widest text-[#1E2229] uppercase">
                OUR WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2229] tracking-tight">
              Recent Garden Room Builds
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 mt-2 md:mt-0 font-medium">
            Peterlee &bull; Seaham &bull; Durham &bull; Easington &bull; North East England
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 font-semibold whitespace-nowrap transition-colors border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1E2229] text-white border-[#1E2229]'
                  : 'bg-[#F8F9FA] text-neutral-700 border-neutral-200 hover:border-neutral-400'
              }`}
            >
              {cat === 'All' ? 'All Builds' : cat}
            </button>
          ))}
        </div>

        {/* 6 High-Quality Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer bg-white border border-neutral-200 overflow-hidden hover:border-[#1E2229] transition-all"
            >
              <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Hover indicator overlay */}
                <div className="absolute inset-0 bg-[#1E2229]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-[#B7D51F] text-[#1E2229] px-3 py-1.5 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </div>
                </div>

                {/* Subdued Location Tag */}
                <div className="absolute bottom-2 left-2 bg-[#1E2229]/90 text-neutral-200 px-2 py-1 text-[11px] font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#B7D51F]" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5">
                <div className="text-[11px] font-bold text-[#B7D51F] uppercase tracking-wider mb-1">
                  {item.category}
                </div>
                <h3 className="text-base font-bold text-[#1E2229] group-hover:text-black mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                  {item.subtitle}
                </p>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-semibold text-neutral-700">Dimensions: {item.dimensions}</span>
                  <span className="text-[#1E2229] group-hover:translate-x-0.5 transition-transform font-bold text-xs flex items-center gap-0.5">
                    Details &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small CTA below the gallery */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F8F9FA] border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold text-[#1E2229]">
              Ready to transform your garden space?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Contact our Peterlee workshop for honest guidance, realistic lead times, and a free estimate.
            </p>
          </div>
          <button
            onClick={onQuoteClick}
            className="px-6 py-3 bg-[#B7D51F] hover:bg-[#c6e625] text-[#1E2229] text-xs font-bold tracking-wider uppercase transition-colors shrink-0 cursor-pointer flex items-center gap-2"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox / Build Detail Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-white max-w-2xl w-full border-2 border-[#1E2229] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-3 right-3 z-10 p-2 bg-[#1E2229] text-white hover:bg-black cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-neutral-100">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-bold text-[#B7D51F] uppercase tracking-wider mb-2">
                <span>{activeItem.category}</span>
                <span className="text-neutral-300">&bull;</span>
                <span className="text-neutral-500 font-medium">{activeItem.dimensions}</span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#1E2229] mb-2">
                {activeItem.title}
              </h3>

              <p className="text-sm text-neutral-600 mb-5 leading-relaxed">
                {activeItem.subtitle}
              </p>

              <div className="mb-6 bg-[#F8F9FA] p-4 border-l-4 border-[#B7D51F]">
                <div className="text-xs font-bold uppercase text-[#1E2229] mb-2 tracking-wider">
                  Included Project Features:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                  {activeItem.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B7D51F] stroke-[3]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-200">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <MapPin className="w-4 h-4 text-[#B7D51F]" />
                  <span>Installed at: {activeItem.location}</span>
                </div>
                <button
                  onClick={() => {
                    setActiveItem(null);
                    onQuoteClick();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#B7D51F] hover:bg-[#c6e625] text-[#1E2229] text-xs font-bold tracking-wider uppercase cursor-pointer"
                >
                  Quote Similar Build
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
