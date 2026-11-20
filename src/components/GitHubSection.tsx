import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  FolderGit2, 
  ArrowUpRight 
} from 'lucide-react';
import { GITHUB_REPOSITORIES, PERSONAL_INFO } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedRepos = showAll ? GITHUB_REPOSITORIES : GITHUB_REPOSITORIES.slice(0, 6);

  return (
    <section id="github" className="py-20 relative bg-[#09090b] border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#06b6d4]/10 text-[#06b6d4] font-mono text-xs font-semibold">
              <Github className="w-3.5 h-3.5" />
              <span>OPEN SOURCE & CODE REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fafafa] tracking-tight">
              GitHub Repositories
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl">
              Public code repositories documenting data pipelines, relational warehouses, machine learning experiments, and backend tools.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141418] hover:bg-[#18181b] text-[#fafafa] border border-[#27272a] hover:border-[#3f3f46] text-xs font-mono font-medium transition-colors shadow-sm"
          >
            <Github className="w-4 h-4 text-[#06b6d4]" />
            <span>github.com/{PERSONAL_INFO.githubUsername}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#71717a]" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#141418] border border-[#27272a] p-5 flex flex-col justify-between hover:border-[#3f3f46] hover:bg-[#18181b] transition-all duration-150 group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2 min-w-0">
                    <FolderGit2 className="w-4 h-4 text-[#06b6d4] shrink-0" />
                    <h3 className="text-sm font-bold text-[#fafafa] tracking-tight font-mono group-hover:text-[#06b6d4] transition-colors truncate">
                      {repo.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#71717a] group-hover:text-[#06b6d4] transition-colors shrink-0" />
                </div>

                <p className="text-xs text-[#a1a1aa] leading-relaxed line-clamp-2 mb-4">
                  {repo.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {repo.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#18181b] text-[#fafafa] text-[10px] font-mono border border-[#27272a]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2.5 border-t border-[#27272a] flex items-center justify-between text-[11px] font-mono text-[#71717a]">
                  <span>{repo.category}</span>
                  <span className="text-[#a1a1aa] group-hover:text-[#06b6d4] transition-colors">
                    Public Repo
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Repos Toggle */}
        {GITHUB_REPOSITORIES.length > 6 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-5 py-2 rounded-xl bg-[#141418] hover:bg-[#18181b] text-[#fafafa] border border-[#27272a] text-xs font-mono transition-colors"
            >
              {showAll ? 'Show Fewer Repositories' : `View All Repositories (${GITHUB_REPOSITORIES.length})`}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
