import React from 'react';
import { 
  Code2, 
  Database, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Terminal,
  BookOpen
} from 'lucide-react';
import { PROBLEM_SOLVING_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const ProblemSolving: React.FC = () => {
  return (
    <section id="problem-solving" className="py-20 relative bg-[#09090b] border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#06b6d4]/10 text-[#06b6d4] font-mono text-xs font-semibold">
            <Code2 className="w-3.5 h-3.5" />
            <span>ALGORITHMIC & QUERY PRACTICE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fafafa] tracking-tight">
            Problem Solving & SQL Practice
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl">
            {PROBLEM_SOLVING_DATA.summary}
          </p>
        </div>

        {/* 2-Column Practice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: SQL LeetCode 50 Repository (Verified) */}
          <div className="p-6 rounded-2xl bg-[#141418] border border-[#27272a] hover:border-[#3f3f46] transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#27272a]">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#06b6d4]" />
                  <h3 className="text-base font-bold text-[#fafafa]">
                    SQL Practice & Query Optimization
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30">
                  Verified Repository
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                Documented solutions covering joins, window functions (<code>ROW_NUMBER()</code>, <code>RANK()</code>, <code>DENSE_RANK()</code>, <code>LEAD()</code>, <code>LAG()</code>), common table expressions (CTEs), rolling aggregations, and query optimization patterns.
              </p>

              <div className="p-3 rounded-xl bg-[#18181b] border border-[#27272a] font-mono text-xs space-y-1.5 text-[#a1a1aa]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>50+ Core SQL Interview Problems Documented</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>PostgreSQL-tested query syntax & execution plans</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-[#27272a] flex items-center justify-between">
              <a
                href={PROBLEM_SOLVING_DATA.sqlRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#06b6d4] hover:bg-[#0891b2] text-[#09090b] text-xs font-semibold transition-colors"
                id="sql-leetcode-repo-link"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Explore SQL-LeetCode-50 Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Core DSA Progress & Patterns */}
          <div className="p-6 rounded-2xl bg-[#141418] border border-[#27272a] hover:border-[#3f3f46] transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#27272a]">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#10b981]" />
                  <h3 className="text-base font-bold text-[#fafafa]">
                    Data Structures & Algorithmic Patterns
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/30">
                  Continuous Focus
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                Ongoing practice focusing on algorithmic fundamentals: array manipulation, hash map lookups, two pointers technique, stacks, and recursion. Priority on revisiting key patterns and improving time and space complexity analysis.
              </p>

              <div className="p-3 rounded-xl bg-[#18181b] border border-[#27272a] font-mono text-xs space-y-1.5 text-[#a1a1aa]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <span>Arrays, Hash Sets & Prefix Sums</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <span>Two Pointers & Sliding Window techniques</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <span>Monotonic Stacks & Queue traversal</span>
                </div>
              </div>
            </div>

            {/* LeetCode Profile Placeholder with TODO */}
            <div className="pt-5 mt-4 border-t border-[#27272a] flex items-center justify-between text-xs font-mono">
              {PROBLEM_SOLVING_DATA.leetcodeUrl ? (
                <a
                  href={PROBLEM_SOLVING_DATA.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18181b] hover:bg-[#27272a] text-[#fafafa] border border-[#27272a] transition-colors"
                  id="leetcode-profile-link"
                >
                  <span>LeetCode Profile (@Yaswanth_332)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#06b6d4]" />
                </a>
              ) : (
                <div 
                  className="flex items-center gap-2 text-[#71717a]"
                  title="TODO: paste confirmed LeetCode profile URL"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#06b6d4]" />
                  <span>LeetCode Profile: Pending URL confirmation</span>
                  <span className="text-[10px] px-1 py-0.5 bg-[#27272a] text-[#a1a1aa] rounded">TODO</span>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
