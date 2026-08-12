import React, { useState } from 'react';
import { AUSBERT_CONFIG, INITIAL_QUALIFICATIONS } from '../config';
import { Award, CheckCircle2, MapPin, Sparkles, Edit2, Code2 } from 'lucide-react';
import { QualificationItem } from '../types';

interface AboutProps {
  onOpenGuide: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenGuide }) => {
  const [qualifications, setQualifications] = useState<QualificationItem[]>(INITIAL_QUALIFICATIONS);
  const [isEditing, setIsEditing] = useState(false);

  const handleQualificationChange = (id: string, newTitle: string) => {
    setQualifications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, title: newTitle, isPlaceholder: false } : item
      )
    );
  };

  return (
    <section id="about" className="py-20 bg-slate-900 border-t border-slate-800 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Ausbert</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Digital Creative & Service Provider in Tamale
          </h2>
        </div>

        {/* About Card & Qualifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Confident Bio Column */}
          <div className="lg:col-span-6 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span>Helping Local Businesses Stand Out</span>
            </h3>

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

              {/* Quick Interactive Edit Toggle / Guide Button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-amber-300 transition-colors"
                  title="Test editing qualifications live"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>{isEditing ? "Finish Editing" : "Preview Edits"}</span>
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Below are placeholders reserved for my official qualifications and certificates.
              {isEditing
                ? " (You can type below to preview your actual certificate titles directly!)"
                : " You can easily replace these placeholders in the code file (src/config.ts) when ready."}
            </p>

            {/* Qualifications Placeholder Cards */}
            <div className="space-y-3">
              {qualifications.map((item) => (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl border transition-all ${
                    item.isPlaceholder
                      ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                      : 'bg-slate-900 border-amber-500/40 text-white shadow-md'
                  }`}
                >
                  {isEditing ? (
                    <div className="space-y-1">
                      <label className="block text-[11px] text-amber-400 font-semibold uppercase">
                        Certificate / Skill Title
                      </label>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => handleQualificationChange(item.id, e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  ) : (
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
                      {item.isPlaceholder && (
                        <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 shrink-0">
                          Placeholder
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Helper Notice Box */}
            <div className="p-3 bg-amber-500/5 border border-amber-500/20 rounded-xl flex items-center justify-between text-xs text-amber-300/90">
              <span className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>To permanently replace placeholders, update <code className="text-amber-200 bg-slate-950 px-1 py-0.5 rounded">src/config.ts</code></span>
              </span>
              <button
                onClick={onOpenGuide}
                className="underline hover:text-white font-semibold text-[11px]"
              >
                Guide
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
