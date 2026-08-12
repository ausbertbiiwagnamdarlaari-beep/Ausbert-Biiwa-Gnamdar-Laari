import React from 'react';
import { WHY_WORK_WITH_ME } from '../config';
import { Sparkles, TrendingUp, Smartphone, MessageSquareCode, CheckCircle } from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-amber-400" />;
      case 'MessageSquareCode':
        return <MessageSquareCode className="w-6 h-6 text-amber-400" />;
      default:
        return <CheckCircle className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="why-me" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Reliable Partner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Work With Me
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Grounded, honest, and dedicated to delivering practical digital solutions that respect your business goals and time.
          </p>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_WORK_WITH_ME.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 space-y-4 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-inner">
                {getIcon(benefit.iconName)}
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
