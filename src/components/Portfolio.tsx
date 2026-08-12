import React, { useState } from 'react';
import { PORTFOLIO_SAMPLES } from '../config';
import { PortfolioItem, PortfolioCategory } from '../types';
import { Sparkles, Globe, Palette, Video, ExternalLink, Play, Eye, X, CheckCircle2 } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories: { id: PortfolioCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Work', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'websites', label: 'Websites', icon: <Globe className="w-3.5 h-3.5" /> },
    { id: 'flyers', label: 'Flyers & Graphics', icon: <Palette className="w-3.5 h-3.5" /> },
    { id: 'videos', label: 'Short Videos', icon: <Video className="w-3.5 h-3.5" /> },
  ];

  const filteredItems = PORTFOLIO_SAMPLES.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="portfolio" className="py-20 bg-slate-900 border-t border-slate-800 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proof Of Capability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected Work
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Here are examples of the kind of digital work I can create for businesses and brands.
          </p>
          <p className="text-xs text-amber-400/90 font-medium italic bg-slate-950/80 border border-slate-800 inline-block px-4 py-1.5 rounded-full">
            Note: All items below are clearly labeled sample/demo projects created to demonstrate design capability.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Card Image Container */}
              <div className="relative aspect-16/10 sm:aspect-16/9 bg-slate-900 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <span className="bg-amber-500 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-lg">
                    {item.category === 'videos' ? (
                      <>
                        <Play className="w-4 h-4 fill-slate-950" /> Play Video
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4" /> View Sample
                      </>
                    )}
                  </span>
                </div>

                {/* Badge Label (Demo Project / Sample Design / Sample Video) */}
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-amber-400 font-extrabold text-[11px] px-3 py-1 rounded-lg shadow-md uppercase tracking-wider">
                  {item.badgeLabel}
                </div>

                {/* Category Icon Badge */}
                <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-slate-300 p-1.5 rounded-lg">
                  {item.category === 'websites' && <Globe className="w-4 h-4 text-emerald-400" />}
                  {item.category === 'flyers' && <Palette className="w-4 h-4 text-amber-400" />}
                  {item.category === 'videos' && <Video className="w-4 h-4 text-purple-400" />}
                </div>

                {/* Video Play Overlay Icon for Video Cards */}
                {item.category === 'videos' && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Card Body Content */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Tags Footer */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Viewer for Demo Details & Playback */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 space-y-6">
              
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full border border-slate-700 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header inside Modal */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-extrabold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded">
                    {selectedItem.badgeLabel}
                  </span>
                  <span className="text-xs text-slate-400 capitalize">• {selectedItem.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{selectedItem.title}</h3>
              </div>

              {/* Media Preview (Video or Image) */}
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 relative">
                {selectedItem.category === 'videos' && selectedItem.videoUrl ? (
                  <video
                    src={selectedItem.videoUrl}
                    controls
                    autoPlay
                    className="w-full max-h-[400px] object-contain bg-black"
                  />
                ) : (
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full max-h-[400px] object-cover"
                  />
                )}
              </div>

              {/* Detailed Description */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white">Project Overview:</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              {/* Modal Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                {selectedItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-slate-950 text-slate-300 px-3 py-1 rounded-lg border border-slate-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Actions Footer inside Modal */}
              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-400 italic">
                  Interested in a similar project for your business?
                </span>
                <a
                  href="#contact"
                  onClick={() => {
                    setSelectedItem(null);
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md flex items-center gap-1.5 shrink-0"
                >
                  <span>Request This Service</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
