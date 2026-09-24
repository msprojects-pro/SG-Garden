import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Our Buildings', href: '#buildings' },
    { label: 'Our Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#1E2229] border-b border-[#2C323D] shadow-md py-3'
          : 'bg-[#1E2229] border-b border-[#2C323D]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-white text-lg sm:text-xl font-bold tracking-tight"
          >
            <span className="inline-block w-2.5 h-6 bg-[#B7D51F]" aria-hidden="true" />
            <span>
              S&amp;G <span className="font-light text-neutral-300">GARDEN ROOMS</span>
            </span>
          </a>

          {/* Zone 2: 5 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#B7D51F] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:07535156492"
              className="text-neutral-300 hover:text-white text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#B7D51F]" />
              <span>07535 156492</span>
            </a>
            <button
              onClick={onQuoteClick}
              className="px-4 py-2 text-xs font-bold text-[#1E2229] bg-[#B7D51F] hover:bg-[#c6e625] transition-colors whitespace-nowrap cursor-pointer"
            >
              Get A Free Quote
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:07535156492"
              className="p-2 text-neutral-200 hover:text-white"
              aria-label="Call S&G Garden Rooms"
            >
              <Phone className="w-4 h-4 text-[#B7D51F]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-200 hover:text-white cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-[#2C323D] bg-[#1E2229]">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-2 text-sm font-medium text-neutral-200 hover:text-[#B7D51F] hover:bg-[#252A34] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-[#2C323D] flex flex-col gap-2">
                <a
                  href="tel:07535156492"
                  className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-neutral-200 bg-[#252A34]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B7D51F]" />
                  Call 07535 156492
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onQuoteClick();
                  }}
                  className="w-full py-2.5 text-xs font-bold text-[#1E2229] bg-[#B7D51F] hover:bg-[#c6e625] transition-colors text-center"
                >
                  Get A Free Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
