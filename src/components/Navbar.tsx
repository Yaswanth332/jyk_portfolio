import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  FileText, 
  Menu, 
  X, 
  ArrowUpRight,
  Info
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'experience', 'projects', 'skills', 'achievements', 'problem-solving', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-[#27272a] py-3 shadow-md shadow-black/30' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Monogram: YK.dev in JetBrains Mono */}
        <a 
          href="#hero" 
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4] rounded-lg"
          id="nav-monogram"
          aria-label="Yaswanth Krishna Home"
        >
          <div className="px-2.5 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-[#06b6d4] font-mono font-bold text-sm tracking-wider group-hover:border-[#06b6d4]/50 transition-colors">
            YK.dev
          </div>
          <span className="font-sans font-semibold text-sm text-[#fafafa] tracking-tight hidden sm:inline-block group-hover:text-[#06b6d4] transition-colors">
            {PERSONAL_INFO.displayName}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#141418]/80 border border-[#27272a] px-3 py-1.5 rounded-full" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  isActive
                    ? 'text-[#06b6d4] bg-[#06b6d4]/10 font-semibold'
                    : 'text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#18181b]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2">
          {/* GitHub Link */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#a1a1aa] hover:text-[#fafafa] bg-[#141418] hover:bg-[#18181b] border border-[#27272a] rounded-lg transition-colors"
            title="View GitHub profile"
            id="nav-github-link"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn Placeholder (Pending exact URL confirmation) */}
          {PERSONAL_INFO.linkedinUrl ? (
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#a1a1aa] hover:text-[#06b6d4] bg-[#141418] hover:bg-[#18181b] border border-[#27272a] rounded-lg transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          ) : (
            <div 
              className="relative group flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#71717a] bg-[#141418]/50 border border-[#27272a]/60 rounded-lg cursor-not-allowed"
              title="TODO: paste confirmed LinkedIn profile URL"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <span className="text-[10px] px-1 py-0.2 bg-[#27272a] text-[#a1a1aa] rounded">TODO</span>
            </div>
          )}

          {/* Resume CTA (Active only when real PDF exists, otherwise clean TODO state) */}
          {PERSONAL_INFO.hasResumePdf ? (
            <a
              href={PERSONAL_INFO.resumePath}
              download="Yaswanth_Krishna_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#06b6d4] bg-[#06b6d4]/10 hover:bg-[#06b6d4]/20 border border-[#06b6d4]/30 rounded-lg transition-colors"
              id="nav-resume-active"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          ) : (
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#a1a1aa] bg-[#141418] hover:bg-[#18181b] border border-[#27272a] rounded-lg transition-colors"
              title="Add resume PDF at /resume/Yaswanth_Krishna_Resume.pdf"
              id="nav-resume-preview"
            >
              <FileText className="w-3.5 h-3.5 text-[#06b6d4]" />
              <span>Resume</span>
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#18181b] border border-[#27272a] focus:outline-none focus:ring-2 focus:ring-[#06b6d4]"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#27272a] bg-[#09090b]/95 backdrop-blur-xl px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#a1a1aa] hover:text-white hover:bg-[#18181b] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-[#27272a] flex flex-wrap gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#fafafa] bg-[#141418] border border-[#27272a] rounded-lg"
            >
              <Github className="w-3.5 h-3.5 text-[#06b6d4]" />
              <span>GitHub</span>
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenResume) onOpenResume();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#06b6d4] bg-[#06b6d4]/10 border border-[#06b6d4]/30 rounded-lg"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume Overview</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
