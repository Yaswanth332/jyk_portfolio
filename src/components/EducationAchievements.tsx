import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  ShieldCheck, 
  Trophy, 
  ChevronDown, 
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { EDUCATION_HISTORY, LEADERSHIP_ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';

export const EducationAchievements: React.FC = () => {
  const [showSecondaryEducation, setShowSecondaryEducation] = useState(false);

  return (
    <section id="achievements" className="py-20 relative bg-[#09090b] border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#06b6d4]/10 text-[#06b6d4] font-mono text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMICS, COMPETITIONS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fafafa] tracking-tight">
            Education & Achievements
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl">
            Undergraduate computer science foundations at RGUKT Ongole alongside competitive hackathon accomplishments and technical credentials.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono font-semibold uppercase text-[#fafafa] tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#06b6d4]" />
              Education
            </h3>

            {EDUCATION_HISTORY.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#141418] border border-[#27272a] p-6 space-y-4 hover:border-[#3f3f46] transition-colors shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20">
                    {edu.grade}
                  </span>
                  <span className="text-xs font-mono text-[#a1a1aa]">
                    {edu.period}
                  </span>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#fafafa] tracking-tight">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[#71717a] font-mono mt-0.5">
                    {edu.location}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#27272a] space-y-2">
                  <h5 className="text-[11px] font-mono uppercase text-[#71717a] tracking-wider font-semibold">
                    Key Highlights:
                  </h5>
                  <div className="space-y-1.5">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#a1a1aa]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expandable Academic Detail: Class XII & Class X */}
                {edu.secondaryEducation && (
                  <div className="pt-3 border-t border-[#27272a]">
                    <button
                      onClick={() => setShowSecondaryEducation(!showSecondaryEducation)}
                      className="flex items-center justify-between w-full text-xs font-mono text-[#06b6d4] hover:text-[#22d3ee] transition-colors py-1"
                    >
                      <span>Prior Academic Records (Pre-University)</span>
                      {showSecondaryEducation ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {showSecondaryEducation && (
                      <div className="mt-3 p-3 rounded-xl bg-[#18181b] border border-[#27272a] space-y-2 font-mono text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-[#a1a1aa]">Class XII (Pre-University Course):</span>
                          <span className="text-[#fafafa] font-bold">{edu.secondaryEducation.classXII}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#a1a1aa]">Class X (Secondary School):</span>
                          <span className="text-[#fafafa] font-bold">{edu.secondaryEducation.classX}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Certifications Card */}
            <div className="rounded-2xl bg-[#141418] border border-[#27272a] p-5 space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase text-[#fafafa] tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                Technical Certifications
              </h4>
              <div className="space-y-2">
                {CERTIFICATIONS.map((cert, cIdx) => (
                  <div 
                    key={cIdx}
                    className="p-3 rounded-lg bg-[#18181b] border border-[#27272a] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                  >
                    <div>
                      <span className="text-xs text-[#fafafa] font-medium block">
                        {cert.title}
                      </span>
                      {cert.issuer && (
                        <span className="text-[11px] text-[#71717a] font-mono block">
                          {cert.issuer}
                        </span>
                      )}
                    </div>
                    {cert.gradeOrScore && (
                      <span className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/20 px-2 py-0.5 rounded self-start sm:self-auto">
                        {cert.gradeOrScore}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Achievements (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-mono font-semibold uppercase text-[#fafafa] tracking-wider flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#10b981]" />
              Verified Achievements & Hackathons
            </h3>

            <div className="space-y-4">
              {LEADERSHIP_ACHIEVEMENTS.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#141418] border border-[#27272a] p-5 sm:p-6 hover:border-[#3f3f46] transition-colors shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-base font-bold text-[#fafafa] tracking-tight">
                      {item.title}
                    </h4>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#18181b] text-[#06b6d4] self-start sm:self-auto border border-[#27272a]">
                      {item.year}
                    </span>
                  </div>

                  <div className="inline-block text-xs font-mono text-[#71717a] mb-2.5">
                    {item.roleOrContext}
                  </div>

                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
