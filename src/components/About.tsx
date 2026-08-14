import React from 'react';
import { AUSBERT_CONFIG, INITIAL_QUALIFICATIONS, BRAND_LOGOS } from '../config';
import { Award, CheckCircle2, MapPin, Sparkles, Check } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 border-t border-slate-800 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Ausbert</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Digital Creative & Service Provider in Tamale
          </h2>
        </div>

        {/* About Card & Qualifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Confident Bio Column with Headshot */}
          <div className="lg:col-span-6 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            
            {/* Creator Profile Header */}
            <div className="flex items-center gap-4 pb-4 border-b border-slate-800/80">
              <div className="relative">
                <img
                  src={AUSBERT_CONFIG.PROFILE_IMAGE_URL || BRAND_LOGOS.ICON_MARK}
                  alt={AUSBERT_CONFIG.NAME}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border-2 border-amber-500/40 shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-slate-950 rounded-full flex items-center justify-center text-[10px] text-white">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                  {AUSBERT_CONFIG.NAME}
                </h3>
                <p className="text-xs sm:text-sm text-amber-400 font-medium">
                  {AUSBERT_CONFIG.TITLE}
                </p>
                <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{AUSBERT_CONFIG.LOCATION}</span>
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal border-l-4 border-amber-500 pl-4 py-1">
              "{AUSBERT_CONFIG.ABOUT_TEXT}"
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Business-Focused Design:</strong> Crafted to help local shops, restaurants, salons, and institutions attract more client inquiries.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Ghana Market Context:</strong> Solutions designed specifically for how people browse and buy in Tamale and across Ghana via mobile devices and WhatsApp.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Reliable Communication:</strong> Direct, clear, and friendly interaction to ensure your project delivers on time.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Based in {AUSBERT_CONFIG.LOCATION}</span>
              </span>
              <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-slate-300">
                Independent Digital Freelancer
              </span>
            </div>
          </div>

          {/* Qualifications & Digital Skills Column */}
          <div className="lg:col-span-6 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative">
            
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold text-white">Qualifications & Digital Skills</h3>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Specialized skill sets and proven proficiencies in modern creative technologies, design tools, and digital marketing delivery.
            </p>

            {/* Qualifications Cards */}
            <div className="space-y-3">
              {INITIAL_QUALIFICATIONS.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl border bg-slate-900/80 border-slate-800 hover:border-amber-500/30 text-white shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-white tracking-wide">
                          {item.title}
                        </h4>
                        {item.description && (
                          <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
