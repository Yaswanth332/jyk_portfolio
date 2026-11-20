import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecruiterAuditBar } from './components/RecruiterAuditBar';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Skills } from './components/Skills';
import { ProblemSolving } from './components/ProblemSolving';
import { EducationAchievements } from './components/EducationAchievements';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { Project } from './types';
import { FEATURED_PROJECTS } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Top thin scroll-progress indicator calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrolled = (totalScroll / windowHeight) * 100;
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectProjectById = (projectId: string) => {
    const proj = FEATURED_PROJECTS.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] flex flex-col selection:bg-[#06b6d4]/30 selection:text-[#06b6d4]">
      {/* Top Thin Scroll Progress Indicator */}
      <div 
        id="scroll-progress" 
        style={{ width: `${scrollProgress}%` }} 
        aria-hidden="true"
      />

      {/* 1. Sticky Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* 3. Recruiter Snapshot / At-A-Glance (4 restrained cards) */}
        <RecruiterAuditBar 
          onOpenResume={() => setResumeOpen(true)}
          onSelectProject={handleSelectProjectById}
        />

        {/* 4. About Section */}
        <About />

        {/* 5. Experience Timeline (CodeTantra Software Development Intern) */}
        <Experience />

        {/* 6. Featured Projects (Bento grid with All, Data Engineering, AI/ML, Backend & Systems, Research) */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 7. Skills (Categorized, 3 honest levels: Used in projects, Working knowledge, Currently learning) */}
        <Skills />

        {/* 8. Problem Solving & SQL Practice (SQL-LeetCode-50 repo, DSA focus, LeetCode profile placeholder) */}
        <ProblemSolving />

        {/* 9. Education & Achievements (RGUKT Ongole with expandable records, AQVH Runner-Up, SIH Lead, Certifications) */}
        <EducationAchievements />

        {/* 10. GitHub Repositories Showcase */}
        <GitHubSection />

        {/* 11. Contact Section */}
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* 12. Footer with mandated statement */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* 13. Accessible Architecture Flow / Case Study Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* 14. ATS Engineering Resume Modal */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />
    </div>
  );
}
