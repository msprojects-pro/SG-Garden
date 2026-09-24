import React from 'react';
import { Phone, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import heroImage from '../assets/images/hero_garden_room_1790237810237.jpg';

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  return (
    <section id="home" className="relative bg-[#1E2229] pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden border-b border-[#2C323D]">
      {/* Background Hero Image with Solid Charcoal Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern bespoke insulated timber garden room with dark anthracite cladding and glass doors"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Solid dark anthracite overlay with controlled opacity - No gradients */}
        <div className="absolute inset-0 bg-[#1E2229]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Location & Trust Tagline */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#B7D51F] uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#B7D51F]" />
            <span>Coast Road, Peterlee &amp; Surrounding Areas</span>
            <span className="text-neutral-500">|</span>
            <span className="text-neutral-300">County Durham</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Custom Garden Rooms. <br className="hidden sm:inline" />
            <span className="text-[#B7D51F]">Built Around Your Needs.</span>
          </h1>

          {/* Supporting text */}
          <p className="text-base sm:text-lg text-neutral-300 mb-8 max-w-2xl leading-relaxed">
            Whether you need a home office, man-cave, garden bar, or extra living accommodation — we deliver compact, expand on site, and craft custom spaces built to last.
          </p>

          {/* Call-to-actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onQuoteClick}
              className="px-6 py-3.5 text-sm font-bold text-[#1E2229] bg-[#B7D51F] hover:bg-[#c6e625] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:07535156492"
              className="px-6 py-3.5 text-sm font-semibold text-white bg-[#252A34] hover:bg-[#2C323D] border border-neutral-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#B7D51F]" />
              <span>Call 07535 156492</span>
            </a>
          </div>

          {/* Credibility Line (Zero-pill discipline, clean typography with separators) */}
          <div className="pt-6 border-t border-[#2C323D] flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-medium text-neutral-300">
            <div className="flex items-center gap-1.5 text-white font-semibold">
              <span className="w-2 h-2 bg-[#B7D51F]" />
              <span>100% Recommended</span>
            </div>
            <span className="text-neutral-600" aria-hidden="true">•</span>
            <span>42 Reviews</span>
            <span className="text-neutral-600" aria-hidden="true">•</span>
            <span className="text-neutral-300">Honest &amp; Reliable</span>
            <span className="text-neutral-600" aria-hidden="true">•</span>
            <span className="text-neutral-400">Delivered Compact &amp; Expanded On Site</span>
          </div>
        </div>
      </div>
    </section>
  );
};
