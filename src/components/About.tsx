import React from 'react';
import { Check, Star, ThumbsUp, ShieldCheck } from 'lucide-react';
import aboutImage from '../assets/images/about_timber_build_1790237824519.jpg';

export const About: React.FC = () => {
  const bulletPoints = [
    'Flexible internal layouts to suit your exact requirements',
    'Modern, low-maintenance construction',
    'Delivered compact and expanded on site',
    'Honest, reliable trade professionals based in Peterlee',
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative border-4 border-[#1E2229] shadow-lg overflow-hidden bg-neutral-100">
              <img
                src={aboutImage}
                alt="S&G Garden Rooms precision timber construction and finishing in Peterlee"
                className="w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              {/* Corner Architectural Accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#B7D51F]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#B7D51F]" />
            </div>

            {/* Quick Badge Under Image */}
            <div className="mt-4 flex items-center justify-between text-xs text-neutral-600 px-1">
              <span>Bespoke Timber Craftsmanship</span>
              <span className="text-neutral-400">·</span>
              <span>Peterlee &amp; County Durham</span>
              <span className="text-neutral-400">·</span>
              <span>Year-Round Durability</span>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small green label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#B7D51F]" aria-hidden="true" />
              <span className="text-xs font-bold tracking-widest text-[#1E2229] uppercase">
                ABOUT S&amp;G GARDEN ROOMS
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E2229] tracking-tight leading-tight mb-6">
              Turn Available Space Into Something Practical &amp; Comfortable.
            </h2>

            {/* Body Text */}
            <p className="text-base text-neutral-700 leading-relaxed mb-8">
              At S&amp;G Garden Rooms, we help turn your outdoor space into an extra living area tailored completely to your lifestyle. Designed for low maintenance and flexible internal layouts, our buildings offer a modern, cost-effective alternative to traditional home extensions.
            </p>

            {/* 4 concise bullet points with green checkmarks (#B7D51F) */}
            <div className="space-y-3.5 mb-8">
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-[#B7D51F] text-[#1E2229] flex items-center justify-center font-bold text-xs mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-sm sm:text-base font-medium text-neutral-800">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Elegantly Highlighted Box: 100% Recommend — 42 Reviews */}
            <div className="bg-[#1E2229] text-white p-5 border-l-4 border-[#B7D51F] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B7D51F] text-[#B7D51F]" />
                  ))}
                  <span className="text-xs font-semibold text-[#B7D51F] ml-1.5">5.0 / 5.0</span>
                </div>
                <div className="text-lg font-bold tracking-tight text-white">
                  100% Recommend — 42 Reviews
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  Verified customer recommendations across Peterlee &amp; North East England
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 bg-[#252A34] px-3 py-2 border border-neutral-700 self-start sm:self-auto">
                <ThumbsUp className="w-3.5 h-3.5 text-[#B7D51F]" />
                <span>Top Rated Trade</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
