import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, X, Sparkles } from 'lucide-react';

interface BuildingsProps {
  onSelectBuilding: (buildingName: string) => void;
}

export interface BuildingItem {
  id: string;
  num: string;
  title: string;
  description: string;
  categoryValue: string;
  highlights: string[];
  idealFor: string;
}

export const buildingsData: BuildingItem[] = [
  {
    id: 'mancaves',
    num: '01',
    title: 'MAN-CAVES & GARDEN BARS',
    description: 'Bespoke garden bars complete with custom seating, optics units, and entertainment layouts.',
    categoryValue: 'Man-Cave / Bar',
    highlights: [
      'Custom handcrafted timber bar counter & shelving',
      'Integrated wall-mounted spirits optics rack',
      'Dedicated TV, soundbar & game console cable routing',
      'Under-counter beverage fridge recesses & heavy-duty flooring',
    ],
    idealFor: 'Entertaining friends, weekend football, private social sanctuary',
  },
  {
    id: 'sunrooms',
    num: '02',
    title: 'SUN-ROOMS & LIVING EXTENSIONS',
    description: 'Bright, insulated garden rooms providing extra year-round living and relaxation space.',
    categoryValue: 'Sun-Room',
    highlights: [
      'Floor-to-ceiling double-glazed viewing panes',
      'Complete multi-layer wall & roof thermal insulation',
      'Modern flush skirting, sockets & dimmable lighting',
      'Low-maintenance external cladding resistant to coastal weather',
    ],
    idealFor: 'Reading room, secondary family lounge, garden retreat',
  },
  {
    id: 'offices',
    num: '03',
    title: 'LOG CABINS & HOME OFFICES',
    description: 'Dedicated, fully insulated garden office spaces designed for quiet remote working.',
    categoryValue: 'Home Office',
    highlights: [
      'Acoustic insulation for distraction-free video calls',
      'Pre-wired high-speed network cabling & abundant USB/power sockets',
      'Secure locking doors and opening double-glazed windows',
      'Compact footprint that optimizes garden lawn area',
    ],
    idealFor: 'Remote workers, business founders, consultancies',
  },
  {
    id: 'workshops',
    num: '04',
    title: 'SHEDS, WORKSHOPS & STORAGE',
    description: 'Durable timber workshops and secure garden sheds tailored for practical storage.',
    categoryValue: 'Shed / Workshop',
    highlights: [
      'Heavy-duty framing & reinforced floor joists for machinery',
      'Pressure-treated timber weatherboarding built for British climate',
      'Custom workbench installation & high-level storage racking',
      'Enhanced security hasps, padbolts & toughened glazing',
    ],
    idealFor: 'Woodworking, bike/tool storage, DIY trade workshops',
  },
  {
    id: 'expandable',
    num: '05',
    title: 'EXPANDABLE BUILDINGS & ACCOMMODATION',
    description: 'Ideal quick-space solutions for guest accommodation, holiday units, or hobby rooms.',
    categoryValue: 'Expandable Building',
    highlights: [
      'Delivered compact to navigate narrow side passages and gates',
      'Rapidly expanded on-site with modular timber engineering',
      'Partitioning options for en-suite bathroom or kitchenette hookups',
      'Fast turnaround time compared to traditional brick building',
    ],
    idealFor: 'Holiday lets, guest annexes, teen living pods, hobby studios',
  },
];

export const Buildings: React.FC<BuildingsProps> = ({ onSelectBuilding }) => {
  const [activeModalItem, setActiveModalItem] = useState<BuildingItem | null>(null);

  return (
    <section id="buildings" className="py-20 bg-[#F8F9FA] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#B7D51F]" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest text-[#1E2229] uppercase">
              OUR BUILDINGS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2229] tracking-tight">
            Tailored Outdoor Solutions
          </h2>
          <p className="mt-3 text-neutral-600 text-base">
            Every building is custom crafted to your property dimensions, intended use, and styling preferences.
          </p>
        </div>

        {/* 5 Product Blocks in a Sophisticated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {buildingsData.map((item, index) => {
            const isFeatured = index === 0 || index === 4;
            return (
              <div
                key={item.id}
                className={`group relative bg-white border border-neutral-200 p-7 sm:p-8 flex flex-col justify-between hover:border-[#B7D51F] transition-all duration-200 ${
                  isFeatured ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
              >
                {/* Top Green Accent Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#B7D51F] transition-colors" />

                <div>
                  {/* Numbering and Label */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#B7D51F] tracking-tighter">
                      {item.num}
                    </span>
                    <span className="text-[11px] font-semibold tracking-wider text-neutral-600 uppercase">
                      Bespoke Timber
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#1E2229] group-hover:text-black mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Feature Highlights Preview */}
                  <ul className="space-y-2 mb-6 border-t border-neutral-100 pt-4">
                    {item.highlights.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <span className="w-1.5 h-1.5 bg-[#B7D51F] mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="text-xs font-semibold text-[#1E2229] hover:text-black underline underline-offset-4 cursor-pointer"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => onSelectBuilding(item.categoryValue)}
                    className="px-3 py-1.5 bg-[#1E2229] text-white hover:bg-black text-xs font-bold flex items-center gap-1.5 group-hover:bg-[#B7D51F] group-hover:text-[#1E2229] transition-colors cursor-pointer"
                  >
                    <span>Quote This</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* 6th Tile: Quick Call to Action / Custom Spec Banner */}
          <div className="bg-[#1E2229] text-white p-7 sm:p-8 flex flex-col justify-between border border-neutral-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#B7D51F] uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-[#B7D51F]" />
                <span>Custom Requirements?</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">
                Need Specific Sizes or Custom Layouts?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                All timber buildings are made to order. From irregular garden corners to dual-purpose split buildings (office + storage combo), we build exactly to your plot.
              </p>
            </div>
            <div>
              <button
                onClick={() => onSelectBuilding('Other')}
                className="w-full py-2.5 bg-[#B7D51F] hover:bg-[#c6e625] text-[#1E2229] font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer text-center"
              >
                Discuss Custom Build
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white max-w-lg w-full p-6 sm:p-8 border-2 border-[#1E2229] shadow-2xl relative">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-black text-[#B7D51F]">
                {activeModalItem.num}
              </span>
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Building Specification
              </span>
            </div>

            <h3 className="text-xl font-extrabold text-[#1E2229] mb-3">
              {activeModalItem.title}
            </h3>

            <p className="text-sm text-neutral-700 mb-5 leading-relaxed">
              {activeModalItem.description}
            </p>

            <div className="mb-5 bg-[#F8F9FA] p-3.5 border-l-3 border-[#B7D51F]">
              <span className="text-xs font-bold text-[#1E2229] uppercase tracking-wider block mb-1">
                Ideal Usage:
              </span>
              <p className="text-xs text-neutral-700">
                {activeModalItem.idealFor}
              </p>
            </div>

            <div className="mb-6">
              <span className="text-xs font-bold text-[#1E2229] uppercase tracking-wider block mb-2.5">
                Key Construction Specifications:
              </span>
              <ul className="space-y-2">
                {activeModalItem.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-[#B7D51F] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-200">
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-4 py-2 text-xs font-semibold text-neutral-700 hover:text-black cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const val = activeModalItem.categoryValue;
                  setActiveModalItem(null);
                  onSelectBuilding(val);
                }}
                className="px-4 py-2 bg-[#B7D51F] hover:bg-[#c6e625] text-[#1E2229] text-xs font-bold cursor-pointer"
              >
                Request Quote for This Building
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
