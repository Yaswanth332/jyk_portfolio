import React from 'react';
import { 
  CheckCircle2, 
  Terminal, 
  Compass, 
  Database, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-[#09090b] border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#06b6d4]/10 text-[#06b6d4] font-mono text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>PROFESSIONAL IDENTITY & APPROACH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fafafa] tracking-tight">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl">
            Undergraduate foundations in Computer Science Engineering, focused on Data Engineering pipelines, relational modeling, and practical AI applications.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Core Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-[#141418] border border-[#27272a] space-y-4 text-sm sm:text-base leading-relaxed text-[#a1a1aa]">
              <p className="text-[#fafafa] font-medium leading-relaxed">
                {PERSONAL_INFO.aboutIntroduction}
              </p>
              
              <p>
                My projects reflect an engineering preference for practical systems over theoretical prototypes: structuring relational data warehouses in PostgreSQL with Medallion architecture, handling multi-source CSV and API ingestion, and establishing strict data validation pipelines.
              </p>

              <p>
                During my three-month internship at CodeTantra, I worked in a live production environment on education evaluation workflows—implementing rule validation in React and SolidJS and interfacing with Java backend services and MongoDB configurations.
              </p>
            </div>

            {/* Quick Context Summary */}
            <div className="p-4 rounded-xl bg-[#141418] border border-[#27272a] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div>
                <span className="text-[#71717a] block">Current Academic Base:</span>
                <span className="text-[#fafafa] font-semibold">RGUKT Ongole, Andhra Pradesh</span>
              </div>
              <div>
                <span className="text-[#71717a] block">Academic Metric:</span>
                <span className="text-[#06b6d4] font-semibold">{PERSONAL_INFO.cgpa} CGPA (B.Tech CSE)</span>
              </div>
              <div>
                <span className="text-[#71717a] block">Target Opportunities:</span>
                <span className="text-[#10b981] font-semibold">Data Engineering & Backend Internships</span>
              </div>
            </div>
          </div>

          {/* Right Column: "How I Work" (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#141418] border border-[#27272a] space-y-5">
              <div className="flex items-center gap-2 pb-3 border-b border-[#27272a]">
                <Layers className="w-4 h-4 text-[#06b6d4]" />
                <h3 className="text-base font-semibold text-[#fafafa] tracking-tight">
                  How I Work
                </h3>
              </div>

              <div className="space-y-4">
                {PERSONAL_INFO.howIWork.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#27272a] text-xs font-mono text-[#71717a]">
                <span>Grounded engineering • Transparent project scopes • Verifiable code</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
