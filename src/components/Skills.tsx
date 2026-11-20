import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Layers, 
  BrainCircuit, 
  Server, 
  Layout, 
  Wrench,
  Search,
  Info
} from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code': return <Code2 className="w-4 h-4 text-[#06b6d4]" />;
      case 'Database': return <Database className="w-4 h-4 text-[#10b981]" />;
      case 'Server': return <Server className="w-4 h-4 text-[#06b6d4]" />;
      case 'BrainCircuit': return <BrainCircuit className="w-4 h-4 text-[#10b981]" />;
      case 'Wrench': return <Wrench className="w-4 h-4 text-[#06b6d4]" />;
      case 'Layout': return <Layout className="w-4 h-4 text-[#10b981]" />;
      default: return <Code2 className="w-4 h-4 text-[#06b6d4]" />;
    }
  };

  const filteredGroups = SKILL_GROUPS.map((group) => {
    if (activeCategory !== 'All' && group.category !== activeCategory) {
      return null;
    }
    const matchingSkills = group.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.detail && skill.detail.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    if (matchingSkills.length === 0) return null;
    return { ...group, skills: matchingSkills };
  }).filter(Boolean);

  const categories = ['All', ...SKILL_GROUPS.map((g) => g.category)];

  return (
    <section id="skills" className="py-20 relative bg-[#09090b] border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#06b6d4]/10 text-[#06b6d4] font-mono text-xs font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>CATEGORIZED & HONEST TECHNICAL SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fafafa] tracking-tight">
              Technical Proficiencies
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl">
              Grounded breakdown of competencies based on practical project usage, working knowledge, and active learning. No fabricated percentage bars.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717a]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Python, SQL, Docker)..."
              className="w-full bg-[#141418] border border-[#27272a] rounded-xl pl-9 pr-3 py-2 text-xs text-[#fafafa] placeholder-[#71717a] focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
              aria-label="Filter skills by keyword"
            />
          </div>
        </div>

        {/* Level Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-mono text-[#a1a1aa]">
          <span className="text-[#fafafa] font-semibold">Proficiency Tiers:</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#06b6d4]" />
            <span className="text-[#fafafa]">Used in projects</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
            <span className="text-[#fafafa]">Working knowledge</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-[#fafafa]">Currently learning</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#06b6d4]/15 text-[#06b6d4] border border-[#06b6d4]/40 font-semibold'
                  : 'bg-[#141418] text-[#a1a1aa] hover:text-[#fafafa] border border-[#27272a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            if (!group) return null;
            return (
              <div
                key={group.category}
                className="rounded-2xl bg-[#141418] border border-[#27272a] p-5 hover:border-[#3f3f46] transition-colors flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#27272a]">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-[#18181b] border border-[#27272a]">
                        {getIcon(group.iconName)}
                      </div>
                      <h3 className="text-sm font-bold text-[#fafafa] tracking-tight">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[#71717a]">
                      {group.skills.length} skills
                    </span>
                  </div>

                  {/* Skills Chip List */}
                  <div className="space-y-2">
                    {group.skills.map((skill) => {
                      const isProject = skill.level === 'Used in projects';
                      const isLearning = skill.level === 'Currently learning';
                      
                      return (
                        <div
                          key={skill.name}
                          tabIndex={0}
                          className="group relative p-2.5 rounded-lg bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] transition-colors flex items-center justify-between gap-2 focus:outline-none focus:ring-1 focus:ring-[#06b6d4]"
                          title={skill.detail || skill.level}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full shrink-0 ${
                              isProject 
                                ? 'bg-[#06b6d4]' 
                                : isLearning 
                                ? 'bg-amber-400' 
                                : 'bg-[#10b981]'
                            }`} />
                            <span className="text-xs font-medium text-[#fafafa]">
                              {skill.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {skill.detail && (
                              <span className="text-[11px] font-mono text-[#71717a] hidden sm:inline truncate max-w-[140px]">
                                {skill.detail}
                              </span>
                            )}
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 border ${
                              isProject 
                                ? 'bg-[#06b6d4]/10 text-[#06b6d4] border-[#06b6d4]/20' 
                                : isLearning 
                                ? 'bg-amber-500/10 text-amber-300 border-amber-500/30' 
                                : 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20'
                            }`}>
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
