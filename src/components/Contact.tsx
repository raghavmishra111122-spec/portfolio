import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, Sparkles, MessageSquare, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [returnUrl, setReturnUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReturnUrl(window.location.href);
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleGmailClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
      {/* Section Header */}
      <div className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>07. CONTACT &amp; COLLABORATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
          Let's build what's next in AI.
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base font-normal">
          Interested in AI, LLMs, or building thoughtful technology? Let's connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Channels & Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-dark-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Mail className="w-4 h-4" />
                <span>DIRECT EMAIL</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded bg-dark-950 border border-slate-800 text-slate-300 hover:text-cyan-300 transition-colors"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="block text-base sm:text-lg font-mono font-semibold text-white hover:text-cyan-300 transition-colors break-all"
            >
              {PERSONAL_INFO.email}
            </a>
            <div className="text-xs text-slate-400">
              Primary inbox for opportunities, research inquiries, and collaborations.
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-5 rounded-2xl bg-dark-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
              <Phone className="w-4 h-4" />
              <span>DIRECT PHONE / MOBILE</span>
            </div>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="block text-base sm:text-lg font-mono font-semibold text-white hover:text-indigo-300 transition-colors"
            >
              {PERSONAL_INFO.phoneDisplay}
            </a>
            <div className="text-xs text-slate-400">
              Available for voice and scheduling discussions.
            </div>
          </div>

          {/* Social Channels Row */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-dark-900/80 border border-slate-800 hover:border-cyan-500/40 text-left transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-bold text-white">LinkedIn</div>
              <div className="text-[10px] font-mono text-slate-400 truncate">in/raghav-mishra-866063253</div>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-dark-900/80 border border-slate-800 hover:border-cyan-500/40 text-left transition-colors group"
            >
              <Github className="w-5 h-5 text-indigo-400 mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-bold text-white">GitHub</div>
              <div className="text-[10px] font-mono text-slate-400 truncate">@raghavmishra111122</div>
            </a>
          </div>
        </div>

        {/* Right Column: Direct Message Composer */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-dark-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-mono font-semibold text-white uppercase tracking-wider">
                Send Direct Transmission
              </h3>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
              DIRECT TO GMAIL
            </span>
          </div>

          <form
            action={`https://formsubmit.co/${PERSONAL_INFO.email}`}
            method="POST"
            className="space-y-4"
          >
            {/* Hidden FormSubmit Configuration */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value={`New Portfolio Transmission from ${formData.name || 'Visitor'}`} />
            {returnUrl && <input type="hidden" name="_next" value={returnUrl} />}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Turing"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.ai"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="AI / LLM Opportunity, Discussion, or Collaboration"
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                Message Content
              </label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hello Raghav, I would like to connect regarding..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
              <button
                type="submit"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-dark-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 transition-all duration-300 shadow-md shadow-cyan-500/20"
              >
                <Send className="w-4 h-4 text-dark-950" />
                <span>Dispatch Transmission</span>
              </button>

              <button
                type="button"
                onClick={handleGmailClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs font-mono text-slate-300 bg-dark-950 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                title="Open in Gmail"
              >
                <span>Open in Gmail</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
