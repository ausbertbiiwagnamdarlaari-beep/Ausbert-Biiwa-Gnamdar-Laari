import React from 'react';
import { AUSBERT_CONFIG, SOCIAL_LINKS, BRAND_LOGOS } from '../config';
import { MessageCircle, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand & Location */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-cyan-500 to-amber-400 overflow-hidden shrink-0 shadow-md">
              <img
                src={BRAND_LOGOS.DARK_EMBLEM}
                alt="Ausbert Biiwa Gnamdar Laari Logo"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-0.5">
              <h3 className="text-white font-extrabold text-base sm:text-lg tracking-tight">
                {AUSBERT_CONFIG.NAME}
              </h3>
              <p className="text-xs text-slate-400">
                {AUSBERT_CONFIG.TITLE} • Based in {AUSBERT_CONFIG.LOCATION}
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400" />
            </a>

            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-blue-400 border border-slate-800 transition-colors"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-pink-400 border border-slate-800 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright & back to top button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <p className="text-slate-400 text-center sm:text-left">
            © 2026 {AUSBERT_CONFIG.NAME}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-800 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
