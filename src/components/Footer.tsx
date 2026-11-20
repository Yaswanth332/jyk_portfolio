import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  ArrowUp
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090b] border-t border-[#27272a] py-12 text-[#a1a1aa] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#27272a]">
          
          {/* Brand Info */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#fafafa] tracking-tight text-base font-mono">
                YK.dev
              </span>
              <span className="text-xs text-[#71717a] font-mono">•</span>
              <span className="text-xs text-[#06b6d4] font-mono">
                {PERSONAL_INFO.displayName}
              </span>
            </div>
            <p className="text-xs text-[#71717a] font-mono">
              Aspiring Data Engineer • Python & SQL Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#06b6d4] transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#06b6d4] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#06b6d4]" />
              <span>Email</span>
            </a>

            <button
              onClick={onOpenResume}
              className="hover:text-[#06b6d4] transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Resume</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#141418] hover:bg-[#18181b] text-[#a1a1aa] hover:text-[#fafafa] border border-[#27272a] transition-colors ml-auto md:ml-4"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Footer Mandatory Tagline from Master Build Prompt */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a]">
          <p className="font-mono text-[#a1a1aa]">
            Engineered by Jonnalagadda Yaswanth Krishna · Built with care and precision.
          </p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>Andhra Pradesh, India</span>
            <span>•</span>
            <span>RGUKT Ongole Class of 2027</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
