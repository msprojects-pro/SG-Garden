import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Our Buildings', href: '#buildings' },
    { label: 'Our Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#1E2229] text-white pt-16 pb-12 border-t border-[#2C323D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2C323D]">
          {/* Brand & Tagline */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-6 bg-[#B7D51F]" aria-hidden="true" />
              <span className="text-xl font-bold tracking-tight text-white">
                S&amp;G <span className="font-light text-neutral-300">GARDEN ROOMS</span>
              </span>
            </div>
            <p className="text-neutral-400 text-sm max-w-md leading-relaxed mb-4">
              Honest and reliable garden buildings in Peterlee, UK. Delivered compact, expanded on site, and built around your needs.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-[#B7D51F]" />
              <span>Coast Road, Peterlee, United Kingdom</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-[#B7D51F] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:07535156492"
                  className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B7D51F] shrink-0" />
                  <span>07535 156492</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sggardenrooms@gmail.com"
                  className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#B7D51F] shrink-0" />
                  <span className="truncate">sggardenrooms@gmail.com</span>
                </a>
              </li>
              <li className="pt-2 text-xs text-neutral-400">
                100% Recommended &bull; 42 Reviews
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© 2026 S&amp;G Garden Rooms. All rights reserved.</p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Bespoke Timber Buildings</span>
            <span>&bull;</span>
            <span>Peterlee, UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
