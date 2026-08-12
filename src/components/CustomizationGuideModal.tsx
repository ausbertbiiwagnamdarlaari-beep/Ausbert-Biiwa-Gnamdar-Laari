import React from 'react';
import { X, Code2, Mail, Phone, Image, Award, Globe, MessageCircle, Key, CheckCircle2 } from 'lucide-react';

interface CustomizationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomizationGuideModal: React.FC<CustomizationGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 text-slate-100 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full border border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-slate-800 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase">
            <Code2 className="w-3.5 h-3.5" />
            <span>Developer Customization Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            HOW TO CUSTOMIZE YOUR WEBSITE
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Follow these simple steps to update your email, WhatsApp, photo, qualifications, and portfolio items.
          </p>
        </div>

        {/* Central File Location Callout */}
        <div className="p-4 bg-slate-950 border border-amber-500/30 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <Code2 className="w-4 h-4" />
            <span>Central File To Edit: <code className="text-amber-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">src/config.ts</code></span>
          </div>
          <p className="text-xs text-slate-300">
            Almost all your personal details, email, WhatsApp number, qualifications, and portfolio items are stored in one single file: <strong className="text-white">src/config.ts</strong>.
          </p>
        </div>

        {/* Step by Step Breakdown */}
        <div className="space-y-5 text-xs sm:text-sm">
          
          {/* 1. Email & Contact Form Setup */}
          <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
              <Mail className="w-5 h-5 text-amber-400" />
              <span>1. How to Receive Messages in Your Email Inbox</span>
            </div>
            <p className="text-slate-300">
              To have client form submissions sent directly to your email inbox:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-slate-300 pl-2">
              <li>Open <code className="text-amber-300 font-mono">src/config.ts</code></li>
              <li>Set <code className="text-amber-300 font-mono">AUSBERT_EMAIL = "ausbertbiiwagnamdarlaari@gmail.com"</code> (your real email).</li>
              <li>
                Get a free access key at <a href="https://web3forms.com" target="_blank" rel="noreferrer" className="text-amber-400 underline font-bold">Web3Forms.com</a> (simply type your email on their homepage, and they instantly email you a free access key).
              </li>
              <li>Paste that key into <code className="text-amber-300 font-mono">WEB3FORMS_ACCESS_KEY = "YOUR_KEY_HERE"</code> in <code className="text-amber-300 font-mono">src/config.ts</code>.</li>
            </ol>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 pt-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Once set, every message submitted on your website will land in your Gmail inbox!</span>
            </div>
          </div>

          {/* 2. Phone / WhatsApp Number */}
          <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
              <Phone className="w-5 h-5 text-amber-400" />
              <span>2. Replacing Phone & WhatsApp Number</span>
            </div>
            <p className="text-slate-300">
              In <code className="text-amber-300 font-mono">src/config.ts</code>, update:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-1 pl-2">
              <li><code className="text-amber-300 font-mono">AUSBERT_WHATSAPP = "+233500000000"</code> (with your country code e.g. +233...)</li>
              <li><code className="text-amber-300 font-mono">AUSBERT_PHONE_DISPLAY = "+233 (0) 50 000 0000"</code> (how you want your phone number displayed)</li>
            </ul>
          </div>

          {/* 3. Profile Photo */}
          <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
              <Image className="w-5 h-5 text-amber-400" />
              <span>3. Adding Your Profile Photo</span>
            </div>
            <p className="text-slate-300">
              In <code className="text-amber-300 font-mono">src/config.ts</code>, set <code className="text-amber-300 font-mono">PROFILE_IMAGE_URL</code> to the image link or upload your image file into the project's public folder (e.g. <code className="text-amber-300 font-mono">/profile.jpg</code>).
            </p>
          </div>

          {/* 4. Qualifications & Certificates */}
          <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
              <Award className="w-5 h-5 text-amber-400" />
              <span>4. Replacing Qualification Placeholders</span>
            </div>
            <p className="text-slate-300">
              In <code className="text-amber-300 font-mono">src/config.ts</code>, locate <code className="text-amber-300 font-mono">INITIAL_QUALIFICATIONS</code>.
              Replace <code className="text-amber-300 font-mono">[ Qualification / Certificate 1 ]</code> with your real degrees, training certificates, or diplomas when ready!
            </p>
          </div>

          {/* 5. Portfolio Images, Videos & Demo Links */}
          <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
              <Globe className="w-5 h-5 text-amber-400" />
              <span>5. Updating Portfolio Projects & Videos</span>
            </div>
            <p className="text-slate-300">
              In <code className="text-amber-300 font-mono">src/config.ts</code>, locate <code className="text-amber-300 font-mono">PORTFOLIO_SAMPLES</code>. You can change:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-1 pl-2">
              <li><code className="text-amber-300 font-mono">imageUrl</code>: link to flyer or website preview image</li>
              <li><code className="text-amber-300 font-mono">videoUrl</code>: link to promotional video reel MP4 stream</li>
              <li><code className="text-amber-300 font-mono">demoUrl</code>: live demo website URL</li>
              <li><code className="text-amber-300 font-mono">badgeLabel</code>: keep as "Demo Project" or change to "Client Project" when completed for a real business!</li>
            </ul>
          </div>

          {/* 6. Social Media Profiles */}
          <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
              <MessageCircle className="w-5 h-5 text-amber-400" />
              <span>6. Updating Social Media Links</span>
            </div>
            <p className="text-slate-300">
              In <code className="text-amber-300 font-mono">src/config.ts</code>, update <code className="text-amber-300 font-mono">SOCIAL_LINKS</code> with your Facebook, Instagram, TikTok, and LinkedIn profile URLs.
            </p>
          </div>

        </div>

        {/* Footer inside Modal */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all"
          >
            Got It! Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
