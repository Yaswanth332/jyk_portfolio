export type ProjectCategory = 
  | 'All' 
  | 'Data Engineering' 
  | 'AI / ML' 
  | 'Backend & Systems' 
  | 'Research';

export type SkillProficiency = 'Used in projects' | 'Working knowledge' | 'Currently learning';

export interface ArchitectureStage {
  name: string;
  description: string;
  status: 'Implemented' | 'Planned' | 'In Progress';
}

export interface ProjectMetric {
  label: string;
  value: string;
  note?: string;
}

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  tagline: string;
  problem: string;
  built: string;
  description: string;
  technologies: string[];
  highlights: string[];
  architecture?: string[];
  architectureStages?: ArchitectureStage[];
  metrics?: ProjectMetric[];
  syntheticDataNote?: string;
  securityReliabilityNotes?: string[];
  personalContribution?: string;
  githubUrl: string;
  githubUrlComment?: string;
  demoUrl?: string;
  statusBadge: string;
  caseStudyAvailable: boolean;
  featured: boolean;
  priority: number;
}

export interface SkillItem {
  name: string;
  level: SkillProficiency;
  detail?: string;
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  type: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  field: string;
  highlights: string[];
  secondaryEducation?: {
    classXII: string;
    classX: string;
  };
}

export interface AchievementItem {
  title: string;
  roleOrContext: string;
  year: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer?: string;
  gradeOrScore?: string;
}

export interface GitHubRepoItem {
  name: string;
  description: string;
  tech: string[];
  url: string;
  category: string;
}
