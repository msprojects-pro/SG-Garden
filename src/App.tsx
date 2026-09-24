import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Buildings } from './components/Buildings';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Home Office');

  const scrollToContact = (projectType?: string) => {
    if (projectType) {
      setSelectedProjectType(projectType);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E2229] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Sticky Top Navbar */}
      <Navbar onQuoteClick={() => scrollToContact()} />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onQuoteClick={() => scrollToContact()} />

        {/* 2. About / Why S&G Garden Rooms */}
        <About />

        {/* 3. Custom Buildings & Services */}
        <Buildings onSelectBuilding={(type) => scrollToContact(type)} />

        {/* 4. Our Work (Gallery) */}
        <Gallery onQuoteClick={() => scrollToContact()} />

        {/* 5. Contact / Request a Quote */}
        <Contact preselectedProjectType={selectedProjectType} />
      </main>

      {/* Minimal Dark Footer */}
      <Footer />
    </div>
  );
}
