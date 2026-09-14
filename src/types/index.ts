export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  status: 'COMPLETED / FEATURED' | 'COMPLETED' | 'IN DEVELOPMENT' | 'COMING SOON';
  featured?: boolean;
  tagline: string;
  description: string;
  problem?: string;
  solution?: string;
  features?: string[];
  architectureOverview?: string;
  architectureSteps?: {
    id: string;
    stepNumber: number;
    title: string;
    subtitle: string;
    description: string;
    tech: string;
    rule?: string;
    highlight?: boolean;
  }[];
  technologies: string[];
  results?: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  centralMessage?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  status: string;
  isCurrent: boolean;
  tagline: string;
  overview: string;
  responsibilities: string[];
  workflows: string[];
  contributions: string[];
  tools: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: string;
  isCurrent: boolean;
  highlight: boolean;
  description?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    description: string;
    level?: string;
    verified?: boolean;
  }[];
}

export interface AIPipelineStep {
  step: number;
  name: string;
  shortDesc: string;
  detailedDesc: string;
  keyAspects: string[];
  iconName: string;
}

export interface KnowledgeNode {
  id: string;
  label: string;
  category: 'core' | 'llm' | 'eval' | 'tech' | 'methods';
  x: number;
  y: number;
  connections: string[];
  description: string;
}
