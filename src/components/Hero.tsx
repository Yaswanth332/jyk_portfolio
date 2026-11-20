import React from 'react';
import { 
  ArrowRight, 
  Github, 
  Terminal, 
  FileText, 
  Database,
  ExternalLink,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section 
      id="hero" 
      className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-[#09090b]"
      aria-label="Hero Introduction"
    >
      {/* Subtle restrained background accent */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#06b6d4]/5 blur-[120px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-20 right-10 w-[350px] h-[250px] bg-[#10b981]/5 blur-[100px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Narrative & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Eyebrow / Availability Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141418] border border-[#27272a] text-[#a1a1aa] text-[11px] font-mono tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>{PERSONAL_INFO.eyebrowStatus}</span>
            </div>

            {/* Main Headline & Supporting Line */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#fafafa] leading-[1.15]">
                {PERSONAL_INFO.heroHeadline}
              </h1>
              
              <p className="text-lg sm:text-xl text-[#06b6d4] font-medium leading-snug">
                {PERSONAL_INFO.heroSupportingLine}
              </p>
              
              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed max-w-2xl pt-1">
                {PERSONAL_INFO.heroSummary}
              </p>
            </div>

            {/* Verified Facts Row */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-md bg-[#141418] border border-[#27272a] text-[#fafafa]">
                RGUKT Ongole • CGPA {PERSONAL_INFO.cgpa}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981]">
                Ex-CodeTantra SDE Intern
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#141418] border border-[#27272a] text-[#a1a1aa]">
                B.Tech CSE (Graduating 2027)
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#06b6d4] hover:bg-[#0891b2] text-[#09090b] text-sm font-semibold transition-colors shadow-lg shadow-[#06b6d4]/20 focus:outline-none focus:ring-2 focus:ring-[#06b6d4]"
                id="hero-explore-projects-cta"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#141418] hover:bg-[#18181b] text-[#fafafa] border border-[#27272a] hover:border-[#3f3f46] text-sm font-medium transition-colors"
                id="hero-github-cta"
              >
                <Github className="w-4 h-4 text-[#a1a1aa]" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#71717a]" />
              </a>

              {/* Third CTA: Resume */}
              {PERSONAL_INFO.hasResumePdf ? (
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Yaswanth_Krishna_Resume.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#141418] hover:bg-[#18181b] text-[#06b6d4] border border-[#06b6d4]/40 text-sm font-medium transition-colors"
                  id="hero-resume-cta"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              ) : (
                <button
                  onClick={onOpenResume}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#141418] hover:bg-[#18181b] text-[#a1a1aa] hover:text-[#fafafa] border border-[#27272a] text-sm font-mono transition-colors"
                  title="Add resume PDF at /resume/Yaswanth_Krishna_Resume.pdf"
                  id="hero-resume-placeholder-cta"
                >
                  <FileText className="w-4 h-4 text-[#06b6d4]" />
                  <span>Resume Overview</span>
                </button>
              )}
            </div>

            {/* Location context note */}
            <div className="pt-2 flex items-center gap-1.5 text-xs font-mono text-[#71717a]">
              <MapPin className="w-3.5 h-3.5 text-[#06b6d4]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

          </div>

          {/* Right Column: Real Portrait + Compact Status Terminal (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-4">
            
            {/* Portrait Frame */}
            <div className="relative group">
              <div 
                className="absolute -inset-1 bg-gradient-to-r from-[#06b6d4]/20 to-[#10b981]/20 rounded-2xl blur-sm transition duration-300 group-hover:opacity-100" 
                aria-hidden="true" 
              />
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden bg-[#141418] border border-[#27272a] shadow-2xl">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.portraitAlt}
                  width="288"
                  height="288"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to local image asset if /images/ was not resolved by server
                    const target = e.currentTarget;
                    if (target.src.indexOf('/assets/') === -1) {
                      target.src = '/assets/yaswanth-krishna.jpg';
                    }
                  }}
                />
              </div>
            </div>

            {/* Compact "Currently Building" Terminal Card */}
            <div className="w-full max-w-sm rounded-xl bg-[#141418] border border-[#27272a] p-3 shadow-lg font-mono text-xs">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#27272a]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[10px] text-[#71717a] ml-1.5">status.sh</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
                  active build
                </span>
              </div>
              <div className="space-y-1 text-[#a1a1aa]">
                <p className="text-[#fafafa] font-medium">
                  {PERSONAL_INFO.terminalCopy}
                </p>
                <p className="text-[11px] text-[#71717a]">
                  Stack: Python • Gemini API • psycopg2 • Pydantic
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
