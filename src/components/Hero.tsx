import React from 'react';
import { AUSBERT_CONFIG, BRAND_LOGOS } from '../config';
import { MapPin, ArrowDown, Sparkles, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-20 overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      
      {/* Subtle Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Wording & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Location & Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{AUSBERT_CONFIG.LOCATION}</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-400/90 font-medium">Available for Business Projects</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              {AUSBERT_CONFIG.HERO_HEADLINE}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {AUSBERT_CONFIG.HERO_SUBTITLE}
            </p>

            {/* Primary Services Quick Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs text-slate-300 font-medium">
              <span className="px-3 py-1 bg-slate-900/90 border border-slate-800 rounded-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Business Websites
              </span>
              <span className="px-3 py-1 bg-slate-900/90 border border-slate-800 rounded-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Marketing Flyers
              </span>
              <span className="px-3 py-1 bg-slate-900/90 border border-slate-800 rounded-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Short-Form Video Reels
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#portfolio"
                onClick={(e) => scrollToSection(e, '#portfolio')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 text-white font-semibold text-base transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-amber-400" />
                <span>Let's Work Together</span>
              </a>
            </div>

          </div>

          {/* Right Column: Professional Profile Card & Visual Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Glowing Decorative Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-500/30 via-emerald-500/20 to-indigo-500/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              {/* Main Card Container */}
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
                
                {/* Official Brand Logo / Profile Frame */}
                <div className="relative aspect-square rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col items-center justify-center group shadow-xl">
                  {AUSBERT_CONFIG.PROFILE_IMAGE_URL ? (
                    <img
                      src={AUSBERT_CONFIG.PROFILE_IMAGE_URL}
                      alt={AUSBERT_CONFIG.NAME}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="relative inset-0 w-full h-full p-2 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
                      <img
                        src={BRAND_LOGOS.DARK_EMBLEM}
                        alt="Ausbert Biiwa Gnamdar Laari Official Logo"
                        className="w-full h-full object-contain rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {/* Creative Badge Tag */}
                  <div className="absolute bottom-3 right-3 bg-slate-950/90 backdrop-blur-md border border-slate-800 text-amber-400 text-[11px] font-bold px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Official Brand Logo</span>
                  </div>
                </div>

                {/* Quick Info Footer Bar inside Card */}
                <div className="grid grid-cols-2 gap-3 pt-1 border-t border-slate-800/80 text-center">
                  <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                    <span className="block text-amber-400 font-bold text-sm">Targeted</span>
                    <span className="block text-[11px] text-slate-300">For Local Businesses</span>
                  </div>
                  <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                    <span className="block text-emerald-400 font-bold text-sm">Direct Contact</span>
                    <span className="block text-[11px] text-slate-300">WhatsApp & Email</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
