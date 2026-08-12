import React from 'react';
import { SERVICES_LIST } from '../config';
import { Globe, Palette, Video, CheckCircle2, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import { ServiceCategory } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: ServiceCategory) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-7 h-7 text-amber-400" />;
      case 'Palette':
        return <Palette className="w-7 h-7 text-amber-400" />;
      case 'Video':
        return <Video className="w-7 h-7 text-amber-400" />;
      default:
        return <Globe className="w-7 h-7 text-amber-400" />;
    }
  };

  const handleRequestService = (serviceName: ServiceCategory) => {
    onSelectService(serviceName);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Services For Local Businesses</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How I Can Help Your Business Grow
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Focusing strictly on the three most high-demand digital services local businesses in Tamale and Ghana need to look better and attract more paying customers.
          </p>
        </div>

        {/* EXACTLY THREE SERVICE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/5 hover:-translate-y-1"
            >
              {/* Card Header & Icon */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/40 transition-colors shadow-inner">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Target Clients List */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" /> Target Clients Include:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.targetClients.map((client) => (
                      <span
                        key={client}
                        className="text-[11px] bg-slate-950 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Benefits List */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-semibold text-amber-400">
                    Key Business Benefits:
                  </span>
                  <ul className="space-y-2">
                    {service.keyBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action Button */}
              <div className="pt-8">
                <button
                  onClick={() => handleRequestService(service.title)}
                  className="w-full py-3 rounded-xl bg-slate-950 hover:bg-amber-500 border border-slate-800 hover:border-amber-400 text-slate-200 hover:text-slate-950 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-md"
                >
                  <span>Request This Service</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
