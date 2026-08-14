import React, { useState, useEffect } from 'react';
import { AUSBERT_CONFIG, BRAND_LOGOS } from '../config';
import { Menu, X, ArrowUpRight, HelpCircle, Code } from 'lucide-react';

interface NavbarProps {
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Me', href: '#why-me' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-cyan-500 to-amber-400 shadow-md shadow-amber-500/10 group-hover:shadow-amber-500/30 transition-all duration-300 overflow-hidden flex-shrink-0">
              <img
                src={BRAND_LOGOS.DARK_EMBLEM}
                alt="Ausbert Biiwa Gnamdar Laari Logo"
                className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-slate-100 font-bold text-base sm:text-lg tracking-tight block leading-tight">
                {AUSBERT_CONFIG.NAME}
              </span>
              <span className="text-amber-400/90 text-[11px] sm:text-xs font-semibold tracking-wider uppercase block">
                {AUSBERT_CONFIG.LOCATION}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-800/80 border border-slate-700/60 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-300 hover:text-amber-400 text-sm font-medium px-3.5 py-1.5 rounded-full transition-colors hover:bg-slate-700/50"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenGuide}
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-300 text-xs font-semibold px-3 py-2 rounded-lg bg-slate-800/80 border border-slate-700 hover:border-amber-500/40 transition-all"
              title="Click to see how to customize this website"
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Customize Guide</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm px-4 py-2 rounded-lg transition-all shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-95"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenGuide}
              className="p-2 text-amber-400 bg-slate-800 border border-slate-700 rounded-lg text-xs"
              title="Customization Guide"
            >
              <Code className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-800 border border-slate-700 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 px-2 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-1 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-slate-200 hover:text-amber-400 hover:bg-slate-800/80 text-base font-medium px-4 py-2.5 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/80 px-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGuide();
                }}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 border border-slate-700 text-amber-300 font-medium text-sm py-2.5 rounded-xl"
              >
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>How to Customize Website</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 text-slate-950 font-bold text-sm py-2.5 rounded-xl text-center shadow-md shadow-amber-500/20"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
