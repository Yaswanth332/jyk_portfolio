import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  FileText, 
  Copy, 
  Check, 
  ExternalLink,
  Terminal,
  Send,
  MapPin
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 relative bg-[#09090b] border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#06b6d4]/10 text-[#06b6d4] font-mono text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMUNICATION & INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fafafa] tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl">
            Open to Data Engineering, Python backend, and applied AI internship opportunities.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication & Terminal Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-[#141418] border border-[#27272a] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#06b6d4] flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  Primary Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#18181b] hover:bg-[#27272a] border border-[#27272a] text-xs font-mono text-[#fafafa] transition-colors"
                  aria-label="Copy email address"
                  id="copy-email-btn"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10b981]" />
                      <span className="text-[#10b981]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#a1a1aa]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm sm:text-base font-mono font-semibold text-[#fafafa] hover:text-[#06b6d4] transition-colors break-all block"
                >
                  {PERSONAL_INFO.email}
                </a>
                <p className="text-xs text-[#71717a] mt-1 font-sans">
                  Direct inquiries for recruiters, internship coordination, and engineering discussions.
                </p>
              </div>

              <div className="pt-3 border-t border-[#27272a] flex items-center gap-2 text-xs font-mono text-[#a1a1aa]">
                <MapPin className="w-3.5 h-3.5 text-[#06b6d4]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Links & Verified Profiles Card */}
            <div className="p-5 rounded-2xl bg-[#141418] border border-[#27272a] space-y-3 font-mono text-xs">
              <span className="text-[11px] text-[#71717a] uppercase tracking-wider block">
                Engineering Profiles
              </span>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] flex items-center justify-between text-[#fafafa] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-[#06b6d4]" />
                  <span>GitHub Profile</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#71717a]" />
              </a>

              {/* LinkedIn Placeholder */}
              {PERSONAL_INFO.linkedinUrl ? (
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] flex items-center justify-between text-[#fafafa] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#06b6d4]" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#71717a]" />
                </a>
              ) : (
                <div 
                  className="p-3 rounded-xl bg-[#18181b]/50 border border-[#27272a]/60 flex items-center justify-between text-[#71717a] cursor-not-allowed"
                  title="TODO: paste confirmed LinkedIn profile URL"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 bg-[#27272a] text-[#a1a1aa] rounded">TODO</span>
                </div>
              )}

              {/* Resume Access */}
              {PERSONAL_INFO.hasResumePdf ? (
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Yaswanth_Krishna_Resume.pdf"
                  className="p-3 rounded-xl bg-[#18181b] border border-[#06b6d4]/30 hover:border-[#06b6d4] flex items-center justify-between text-[#06b6d4] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Download PDF Resume</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  onClick={onOpenResume}
                  className="w-full p-3 rounded-xl bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] flex items-center justify-between text-[#fafafa] transition-colors text-left"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#06b6d4]" />
                    <span>View Engineering Resume</span>
                  </div>
                  <span className="text-[10px] text-[#71717a]">ATS Preview</span>
                </button>
              )}
            </div>

          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#141418] border border-[#27272a] shadow-xl">
              <div className="flex items-center gap-2 pb-4 mb-5 border-b border-[#27272a]">
                <Terminal className="w-4 h-4 text-[#06b6d4]" />
                <h3 className="text-base font-bold text-[#fafafa] tracking-tight">
                  Direct Message
                </h3>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-[#a1a1aa] block">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className="w-full bg-[#18181b] border border-[#27272a] rounded-xl px-3.5 py-2.5 text-xs text-[#fafafa] placeholder-[#71717a] focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-[#a1a1aa] block">
                      Your Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full bg-[#18181b] border border-[#27272a] rounded-xl px-3.5 py-2.5 text-xs text-[#fafafa] placeholder-[#71717a] focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-[#a1a1aa] block">
                    Subject / Opportunity
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Data Engineering Internship Opportunity"
                    className="w-full bg-[#18181b] border border-[#27272a] rounded-xl px-3.5 py-2.5 text-xs text-[#fafafa] placeholder-[#71717a] focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-[#a1a1aa] block">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your inquiry or role details..."
                    className="w-full bg-[#18181b] border border-[#27272a] rounded-xl px-3.5 py-2.5 text-xs text-[#fafafa] placeholder-[#71717a] focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#06b6d4] hover:bg-[#0891b2] text-[#09090b] text-xs font-semibold transition-colors shadow-lg shadow-[#06b6d4]/20"
                  id="send-message-btn"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Mail Client</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
