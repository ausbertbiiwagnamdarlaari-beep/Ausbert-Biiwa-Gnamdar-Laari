import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomizationGuideModal } from './components/CustomizationGuideModal';
import { ServiceCategory } from './types';

export default function App() {
  const [guideModalOpen, setGuideModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<ServiceCategory | null>(null);

  const handleSelectService = (serviceName: ServiceCategory) => {
    setPreselectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Top Navigation */}
      <Navbar onOpenGuide={() => setGuideModalOpen(true)} />

      {/* Main Single Page Sections */}
      <main>
        <Hero />
        <About onOpenGuide={() => setGuideModalOpen(true)} />
        <Services onSelectService={handleSelectService} />
        <Portfolio />
        <WhyWorkWithMe />
        <CallToAction />
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer onOpenGuide={() => setGuideModalOpen(true)} />

      {/* Customization Developer Guide Modal */}
      <CustomizationGuideModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />
    </div>
  );
}
