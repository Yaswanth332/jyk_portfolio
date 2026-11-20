import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Clock,
  Layers
} from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-[#09090b] border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#06b6d4]/10 text-[#06b6d4] font-mono text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY WORK HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fafafa] tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl">
            Software development internship experience inside an enterprise education and evaluation management platform codebase.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {WORK_EXPERIENCE.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#141418] border border-[#27272a] p-6 sm:p-8 hover:border-[#3f3f46] transition-colors shadow-lg shadow-black/20"
            >
              {/* Header Details */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#27272a]">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#fafafa] tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/30">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#a1a1aa] mt-2">
                    <span className="text-[#fafafa] font-semibold text-sm">
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#06b6d4]" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#06b6d4]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-[#10b981]">
                      <Clock className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-lg bg-[#18181b] border border-[#27272a] text-xs text-[#a1a1aa] font-mono text-left md:text-right">
                  Enterprise Examination Management System
                </div>
              </div>

              {/* Body Summary & Verified Responsibilities */}
              <div className="py-6 space-y-4 text-sm text-[#a1a1aa]">
                <p className="leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono font-semibold uppercase text-[#fafafa] tracking-wider">
                    Verified Work & Contributions:
                  </h4>
                  <div className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#a1a1aa]">
                        <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies Strip */}
              <div className="pt-4 border-t border-[#27272a] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[#71717a] mr-2">Verified Stack:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded bg-[#18181b] text-[#fafafa] text-xs font-mono border border-[#27272a]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
