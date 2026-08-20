export type SiteTemplateType = 'sciencebit' | 'business' | 'portfolio' | 'saas' | 'services';

export type ColorThemeId = 'indigo' | 'cyan' | 'emerald' | 'amber' | 'slate' | 'rose';

export interface AppProjectItem {
  id: string;
  title: string;
  category: 'App Ativo / No Ar' | 'Em Desenvolvimento' | 'Projeto Futuro / Roadmap' | 'Dispositivo IoT / Cloud';
  description: string;
  techStack: string[];
  status: 'online' | 'beta' | 'planned';
  demoUrl?: string;
  githubUrl?: string;
  icon: string;
  imageUrl?: string;
}

export interface SiteContent {
  template: SiteTemplateType;
  theme: ColorThemeId;
  brandName: string;
  tagline: string;
  academicTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  domainName: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutHighlights: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  projectsTitle: string;
  projectsSubtitle: string;
  projects: AppProjectItem[];
  futureProjectsTitle: string;
  futureProjects: AppProjectItem[];
  testimonialsTitle: string;
  testimonials: {
    id: string;
    name: string;
    role: string;
    company: string;
    comment: string;
    rating: number;
  }[];
  contactTitle: string;
  contactSubtitle: string;
  contactEmail: string;
  contactPhone: string;
  contactWhatsapp: string;
  contactAddress: string;
  contactCep?: string;
  contactInstagram?: string;
  contactGithub?: string;
  contactLinkedin?: string;
  contactMapsQuery?: string;
  footerText: string;
}

export interface GcpHostingOption {
  id: string;
  name: string;
  badge: string;
  recommendedFor: string;
  difficulty: 'Muito Fácil' | 'Fácil' | 'Intermediário' | 'Avançado';
  costTier: '100% Grátis (Free Tier)' | 'Quase Grátis (< $1/mês)' | 'Pague pelo Uso';
  description: string;
  prerequisites: string[];
  steps: {
    title: string;
    description: string;
    command?: string;
    tip?: string;
  }[];
}
