import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Layers, 
  ArrowRight, 
  Cpu, 
  Database,
  AlertCircle,
  FileCode2,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Data Engineering',
    'AI / ML',
    'Backend & Systems',
    'Research',
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 relative bg-[#09090b] border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#06b6d4]/10 text-[#06b6d4] font-mono text-xs font-semibold">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>CASE STUDIES & IMPLEMENTATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fafafa] tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl">
              Verified software and data engineering systems, with realistic problem scopes, implemented pipelines, and accessible architecture flows.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#06b6d4]/15 text-[#06b6d4] border border-[#06b6d4]/40 font-semibold shadow-sm'
                  : 'bg-[#141418] text-[#a1a1aa] hover:text-[#fafafa] border border-[#27272a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#141418] border border-[#27272a] hover:border-[#06b6d4]/40 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 group"
            >
              <div>
                {/* Header: Category & Status Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-[#18181b] text-[#06b6d4] border border-[#27272a]">
                    {project.category}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    project.statusBadge.includes('In Progress')
                      ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                      : 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30'
                  }`}>
                    {project.statusBadge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-bold text-[#fafafa] tracking-tight group-hover:text-[#06b6d4] transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-xs text-[#a1a1aa] font-mono mt-1 mb-3 line-clamp-1">
                  {project.tagline}
                </p>

                {/* One-Sentence Problem Callout */}
                <div className="mb-3 p-3 rounded-xl bg-[#18181b] border border-[#27272a]/80 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#71717a] font-semibold tracking-wider block">
                    Problem Solved
                  </span>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed line-clamp-2">
                    {project.problem}
                  </p>
                </div>

                {/* What Was Built */}
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed line-clamp-3 mb-4">
                  {project.built}
                </p>

                {/* Synthetic data note if present */}
                {project.syntheticDataNote && (
                  <div className="mb-4 px-2.5 py-1.5 rounded-lg bg-[#18181b] border border-[#27272a] text-[11px] font-mono text-[#71717a]">
                    ℹ️ {project.syntheticDataNote}
                  </div>
                )}

                {/* Documented Model Results (e.g. Churn Prediction) */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mb-4 p-2.5 rounded-lg bg-[#06b6d4]/5 border border-[#06b6d4]/20 grid grid-cols-2 gap-2 text-center">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <span className="block text-[10px] font-mono text-[#71717a]">{m.label}</span>
                        <span className="block text-sm font-bold text-[#06b6d4] font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Verified Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#18181b] text-[#fafafa] text-[11px] font-mono border border-[#27272a]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#71717a]">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-[#27272a] flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#06b6d4] hover:text-[#22d3ee] transition-colors focus:outline-none"
                  id={`view-architecture-${project.id}`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Architecture & Details</span>
                </button>

                {/* GitHub Link */}
                {project.githubUrl === '#' ? (
                  <span 
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#71717a]" 
                    title="TODO: add public repository URL after publishing"
                  >
                    <span>Repo: Pending public release</span>
                  </span>
                ) : (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
                    title={`View ${project.name} on GitHub`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                    <ExternalLink className="w-3 h-3 text-[#71717a]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
