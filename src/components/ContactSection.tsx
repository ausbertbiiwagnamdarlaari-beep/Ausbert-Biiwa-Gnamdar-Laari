import React, { useState, useEffect } from 'react';
import { AUSBERT_CONFIG, SOCIAL_LINKS } from '../config';
import { ServiceCategory } from '../types';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, AlertCircle, Loader2, Sparkles, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: ServiceCategory | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    serviceNeeded: (preselectedService || 'Business Website Design') as ServiceCategory,
    message: ''
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: preselectedService }));
    }
  }, [preselectedService]);

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validServices: ServiceCategory[] = [
    'Business Website Design',
    'Social Media Flyer & Marketing Design',
    'Short-Form Video & Social Media Content'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(AUSBERT_CONFIG.AUSBERT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    // Basic Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message.');
      return;
    }

    setLoading(true);

    try {
      // Dispatch message to our Express endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          businessName: formData.businessName.trim(),
          serviceNeeded: formData.serviceNeeded,
          message: formData.message.trim(),
          accessKey: AUSBERT_CONFIG.WEB3FORMS_ACCESS_KEY
        })
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage(data.message || 'Message sent successfully! Ausbert will reply to your email shortly.');
        setFormData({
          name: '',
          email: '',
          businessName: '',
          serviceNeeded: 'Business Website Design',
          message: ''
        });
      } else {
        setErrorMessage(data.error || 'Failed to send message. Please try again or reach out on WhatsApp.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage('Network error occurred. Please check your connection or contact via WhatsApp directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Talk About Your Business Project
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Send a direct message below or click WhatsApp for immediate chat response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Direct Contact Information
              </span>
              <h3 className="text-2xl font-bold text-white">{AUSBERT_CONFIG.NAME}</h3>
              <p className="text-sm text-slate-400 mt-1">{AUSBERT_CONFIG.TITLE}</p>
            </div>

            {/* Details List */}
            <div className="space-y-4 text-sm text-slate-300">
              
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Location</span>
                  <strong className="text-white font-medium">{AUSBERT_CONFIG.LOCATION}</strong>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Email Address</span>
                    <strong className="text-white font-medium break-all">{AUSBERT_CONFIG.AUSBERT_EMAIL}</strong>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 text-slate-400 hover:text-amber-400 bg-slate-950 rounded-lg border border-slate-800"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Phone / WhatsApp</span>
                  <strong className="text-white font-medium">{AUSBERT_CONFIG.AUSBERT_PHONE_DISPLAY}</strong>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-2">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chat Directly On WhatsApp</span>
              </a>
              <span className="block text-center text-[11px] text-slate-400 mt-2">
                Fastest way to get a quick quote & project discussion
              </span>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white">Send Me a Message</h3>
              <p className="text-xs text-slate-400">
                Fill out the form below and I will reply directly to your email address.
              </p>
            </div>

            {/* Alert Banners */}
            {successMessage && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300 text-sm flex items-start gap-3 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Message Sent!</span>
                  <span>{successMessage}</span>
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-sm flex items-start gap-3 animate-fadeIn">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Submission Alert</span>
                  <span>{errorMessage}</span>
                </div>
              </div>
            )}

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Kwame Mensah"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. name@example.com"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Business Name (Optional) */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    Business Name <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="e.g. Savannah Bistro Tamale"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Service Needed Dropdown (ONLY 3 SERVICES) */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    Service Needed <span className="text-amber-400">*</span>
                  </label>
                  <select
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                  >
                    {validServices.map((service) => (
                      <option key={service} value={service} className="bg-slate-900 text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  Message <span className="text-amber-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project, timeline, or any specific questions..."
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2 active:scale-98"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};
