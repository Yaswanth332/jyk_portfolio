import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  Trophy,
  ArrowRight
} from 'lucide-react';
import { RECRUITER_SNAPSHOT } from '../data/portfolioData';

interface RecruiterAuditBarProps {
  onOpenResume?: () => void;
  onSelectProject?: (projectId: string) => void;
}

export const RecruiterAuditBar: React.FC<RecruiterAuditBarProps> = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <GraduationCap className="w-4 h-4 text-[#06b6d4]" />;
      case 1: return <Briefcase className="w-4 h-4 text-[#10b981]" />;
      case 2: return <Calendar className="w-4 h-4 text-[#06b6d4]" />;
      case 3: return <Trophy className="w-4 h-4 text-[#10b981]" />;
      default: return <GraduationCap className="w-4 h-4 text-[#06b6d4]" />;
    }
  };

  return (
    <section 
      className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-16" 
      id="recruiter-snapshot"
      aria-label="Recruiter Snapshot At A Glance"
    >
      <div className="bg-[#141418] border border-[#27272a] rounded-2xl p-5 sm:p-6 shadow-xl">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#27272a]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#fafafa]">
              Recruiter Snapshot • At-A-Glance
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#a1a1aa]">
            Verified Undergraduate & Project Credentials
          </span>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {RECRUITER_SNAPSHOT.map((item, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] transition-colors flex flex-col justify-between"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-[#a1a1aa] font-medium">
                  {item.label}
                </span>
                <div className="p-1 rounded bg-[#141418] border border-[#27272a]">
                  {getIcon(idx)}
                </div>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold font-mono text-[#fafafa] tracking-tight block">
                  {item.metric}
                </span>
                <span className="text-[11px] text-[#71717a] mt-1 block">
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
