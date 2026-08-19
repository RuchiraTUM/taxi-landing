/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';
import { LegalModal, LegalDocType } from './components/LegalModal';

const App: React.FC = () => {
  const [pilotModalOpen, setPilotModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<LegalDocType | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -72;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-950">
      
      {/* Top Navbar */}
      <Navbar
        onOpenPilotModal={() => setPilotModalOpen(true)}
        onScrollTo={scrollToSection}
      />

      {/* Main Streamlined Landing Flow */}
      <main>
        {/* 1. Hero Section: Outcome-focused headline + Value Prop Subline + Direct CTA */}
        <HeroSection
          onOpenPilotModal={() => setPilotModalOpen(true)}
          onScrollTo={scrollToSection}
        />

        {/* 2. Problem Statement: Clear, Emotional, Relatable */}
        <ProblemSection />

        {/* 3. Solution & Differentiation: How It Works + Key Benefits + Differentiation */}
        <SolutionSection
          onOpenPilotModal={() => setPilotModalOpen(true)}
        />
      </main>

      {/* 4. Footer: Legal Pages, Contact Information & Final Hook */}
      <Footer
        onOpenPilotModal={() => setPilotModalOpen(true)}
        onOpenLegalModal={(type) => setLegalModalType(type)}
      />

      {/* Modals */}
      <PilotModal
        isOpen={pilotModalOpen}
        onClose={() => setPilotModalOpen(false)}
      />

      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
};

export default App;
