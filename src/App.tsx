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
import { ServiceCategory } from './types';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<ServiceCategory | null>(null);

  const handleSelectService = (serviceName: ServiceCategory) => {
    setPreselectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        <Hero />
        <About />
        <Services onSelectService={handleSelectService} />
        <Portfolio />
        <WhyWorkWithMe />
        <CallToAction />
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
