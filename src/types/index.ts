export interface JobApplication {
  agreeOnTakeTest: boolean;
  name: string;
  email: string;
  yearOfExperience: number;
  rateOptimization: number;
  github: string;
  linkedin: string;
  phone: string;
  techstack: string[];
  relocatable: boolean;
  goal: string;
  achievement: string;
  why: string;
  reason: string;
  currentSalary: number;
  expectedSalary: number;
  noticePeriod: number;
  express: number;
  typescript: number;
  swagger: number;
  react: number;
  next: number;
  sass: number;
  figma: number;
  semanticHtml: number;
  storybook: number;
  seo: number;
  lottie: number;
  mobileDevelopment: number;
}

export interface TechStack {
  name: string;
  years: number;
}

export interface FormSection {
  title: string;
  subtitle: string;
  fields: string[];
}
