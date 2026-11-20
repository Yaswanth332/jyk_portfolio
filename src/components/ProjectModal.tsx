import React, { useEffect, useRef } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  UserCheck,
  Clock,
  Sparkles
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Accessible Escape key handling & scroll containment
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-3xl bg-[#141418] border border-[#27272a] rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#27272a] bg-[#141418] flex items-start justify-between gap-4 sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20">
                {project.category}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#18181b] text-[#a1a1aa] border border-[#27272a]">
                {project.statusBadge}
              </span>
            </div>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-[#fafafa] tracking-tight">
              {project.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#a1a1aa] font-mono mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 rounded-lg text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#18181b] border border-[#27272a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#06b6d4]"
            aria-label="Close project details modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto text-[#a1a1aa] text-sm leading-relaxed">
          
          {/* Architecture Pipeline Flow (Distinguishing Implemented vs Planned) */}
          {project.architectureStages && project.architectureStages.length > 0 && (
            <div className="p-4 rounded-xl bg-[#09090b] border border-[#27272a] space-y-3">
              <div className="flex items-center justify-between gap-2 text-xs font-mono font-semibold text-[#06b6d4]">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  <span>ARCHITECTURE & DATA PIPELINE FLOW</span>
                </span>
                <span className="text-[11px] text-[#71717a]">Stages & Status</span>
              </div>

              <div className="space-y-2 pt-1 font-mono text-xs">
                {project.architectureStages.map((stage, idx) => (
                  <div 
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#141418] border border-[#27272a] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#06b6d4] font-bold">0{idx + 1}.</span>
                      <span className="text-[#fafafa] font-semibold">{stage.name}</span>
                      <span className="text-[#71717a] hidden sm:inline">—</span>
                      <span className="text-xs text-[#a1a1aa] font-sans">{stage.description}</span>
                    </div>

                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono shrink-0 self-start sm:self-auto border ${
                      stage.status === 'Implemented' 
                        ? 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30'
                        : stage.status === 'In Progress'
                        ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                        : 'bg-[#27272a] text-[#a1a1aa] border-[#3f3f46]'
                    }`}>
                      {stage.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem Statement & What Was Built */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] space-y-2">
              <h3 className="text-xs font-mono font-semibold uppercase text-amber-400 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                Problem Statement
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] space-y-2">
              <h3 className="text-xs font-mono font-semibold uppercase text-[#06b6d4] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                What Was Built
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                {project.built}
              </p>
            </div>
          </div>

          {/* Personal Engineering Contribution */}
          {project.personalContribution && (
            <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] space-y-2">
              <h3 className="text-xs font-mono font-semibold uppercase text-[#10b981] flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5" />
                What I Personally Implemented
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                {project.personalContribution}
              </p>
            </div>
          )}

          {/* Documented Model Metrics (if applicable) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="p-4 rounded-xl bg-[#18181b] border border-[#06b6d4]/20 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#06b6d4]">
                <span className="font-semibold">DOCUMENTED MODEL METRICS (REPOSITORY EVALUATION)</span>
                <span className="text-[10px] text-[#71717a]">Attributed test results</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#141418] border border-[#27272a] text-center">
                    <span className="block text-[10px] text-[#71717a] font-mono">{m.label}</span>
                    <span className="block text-base font-bold text-[#06b6d4] font-mono mt-0.5">{m.value}</span>
                    {m.note && <span className="block text-[9px] text-[#71717a] mt-0.5">{m.note}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Implementation Highlights */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono font-semibold uppercase text-[#fafafa] tracking-wider">
              Key Technical Details:
            </h3>
            <div className="space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#a1a1aa]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Validation, Security & Reliability Notes */}
          {project.securityReliabilityNotes && project.securityReliabilityNotes.length > 0 && (
            <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] space-y-2">
              <h3 className="text-xs font-mono font-semibold uppercase text-[#fafafa] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#06b6d4]" />
                Validation, Security & System Safeguards
              </h3>
              <ul className="space-y-1.5 text-xs text-[#a1a1aa]">
                {project.securityReliabilityNotes.map((note, nIdx) => (
                  <li key={nIdx} className="flex items-start gap-2">
                    <span className="text-[#06b6d4]">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Verified Technologies */}
          <div className="space-y-2 pt-2 border-t border-[#27272a]">
            <span className="text-xs font-mono text-[#71717a]">Verified Technologies:</span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded bg-[#18181b] text-[#fafafa] text-xs font-mono border border-[#27272a]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-6 bg-[#141418] border-t border-[#27272a] flex items-center justify-between gap-3">
          <div className="text-xs font-mono text-[#71717a]">
            Press <kbd className="px-1.5 py-0.5 rounded bg-[#18181b] border border-[#27272a] text-[#a1a1aa]">ESC</kbd> to close
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl === '#' ? (
              <span className="text-xs font-mono text-[#71717a]">
                Public repo release in progress
              </span>
            ) : (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#06b6d4] hover:bg-[#0891b2] text-[#09090b] text-xs font-semibold transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
