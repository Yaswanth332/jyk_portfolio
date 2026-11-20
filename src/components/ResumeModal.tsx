import React, { useEffect, useRef } from 'react';
import { 
  X, 
  Printer, 
  FileText, 
  Download, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Github, 
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE, EDUCATION_HISTORY, FEATURED_PROJECTS, CERTIFICATIONS, LEADERSHIP_ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-[#141418] border border-[#27272a] rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Header */}
        <div className="p-4 sm:px-6 bg-[#141418] border-b border-[#27272a] flex items-center justify-between gap-3 sticky top-0 z-10 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#06b6d4]" />
            <h2 id="resume-modal-title" className="text-base font-bold text-[#fafafa] tracking-tight">
              Yaswanth Krishna — Resume Overview
            </h2>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20 hidden sm:inline-block">
              ATS-Friendly Engineering Format
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#06b6d4] hover:bg-[#0891b2] text-[#09090b] text-xs font-semibold transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#18181b] border border-[#27272a] transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Owner TODO Notice if PDF not placed */}
        {!PERSONAL_INFO.hasResumePdf && (
          <div className="px-6 py-2.5 bg-amber-950/40 border-b border-amber-900/50 flex items-center gap-2 text-xs font-mono text-amber-200/90 print:hidden">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Owner Action Required:</strong> Place your official PDF resume at <code>public/resume/Yaswanth_Krishna_Resume.pdf</code> to activate direct one-click PDF downloads.
            </span>
          </div>
        )}

        {/* Printable ATS Resume Document */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans text-xs leading-normal print:p-0 print:m-0">
          
          {/* Header */}
          <div className="text-center pb-4 border-b border-slate-300 space-y-1">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 uppercase">
              {PERSONAL_INFO.fullName}
            </h1>
            <p className="text-[11px] font-semibold text-slate-700">
              Aspiring Data Engineer | Python & SQL Developer | AI/ML Systems Builder
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-slate-600 pt-0.5">
              <span>{PERSONAL_INFO.location}</span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline font-medium">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium text-cyan-800">
                github.com/{PERSONAL_INFO.githubUsername}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="py-3 border-b border-slate-200">
            <h2 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase mb-1">
              Professional Summary
            </h2>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              {PERSONAL_INFO.aboutIntroduction}
            </p>
          </div>

          {/* Education */}
          <div className="py-3 border-b border-slate-200 space-y-2">
            <h2 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase">
              Education
            </h2>
            {EDUCATION_HISTORY.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-900">{edu.institution}</span>
                  <span className="text-[10px] text-slate-600">{edu.period}</span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-700">
                  <span>{edu.degree} — <strong>CGPA: {edu.grade}</strong></span>
                  <span className="text-[10px] text-slate-500">{edu.location}</span>
                </div>
                {edu.secondaryEducation && (
                  <p className="text-[10px] text-slate-600">
                    Pre-University Course (Class XII): {edu.secondaryEducation.classXII} | Secondary School (Class X): {edu.secondaryEducation.classX}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="py-3 border-b border-slate-200 space-y-2">
            <h2 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase">
              Experience
            </h2>
            {WORK_EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-900">
                    {exp.role} — {exp.company}
                  </span>
                  <span className="text-[10px] text-slate-600">{exp.period} ({exp.duration})</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-[11px]">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Selected Projects */}
          <div className="py-3 border-b border-slate-200 space-y-2">
            <h2 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase">
              Key Projects
            </h2>
            {FEATURED_PROJECTS.slice(0, 4).map((p, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-900">{p.name}</span>
                  <span className="text-[10px] font-mono text-slate-600">{p.statusBadge}</span>
                </div>
                <p className="text-[10px] text-slate-600 font-mono">
                  Stack: {p.technologies.join(', ')}
                </p>
                <p className="text-slate-700 text-[11px] leading-relaxed">
                  {p.built}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Skills Summary */}
          <div className="py-3 space-y-1 text-[11px]">
            <h2 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase">
              Technical Proficiencies
            </h2>
            <p className="text-slate-700">
              <strong>Languages & DBs:</strong> Python, SQL, PostgreSQL, MySQL, SQLite, Java, JavaScript, TypeScript
            </p>
            <p className="text-slate-700">
              <strong>Data Engineering:</strong> Medallion Architecture, Star Schema, Data Quality Validation, ETL Pipelines, Pandas, SQLAlchemy
            </p>
            <p className="text-slate-700">
              <strong>Backend & AI:</strong> FastAPI, Django, REST APIs, Pydantic, psycopg2, scikit-learn, XGBoost, OpenCV, Whisper, Google Gemini API
            </p>
            <p className="text-slate-700">
              <strong>DevOps & Tools:</strong> Docker, Git, GitHub, Jenkins, Linux, AWS Fundamentals (EC2, S3, RDS)
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
