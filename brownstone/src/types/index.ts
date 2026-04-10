// ─── PAGE ROUTING ─────────────────────────────────────────────────────────────
export type Page = "home" | "blog" | "eval" | "refer" | "post";

// ─── COMPONENT PROPS ──────────────────────────────────────────────────────────
export interface NavProps {
  page: Page;
  setPage: (p: Page) => void;
}

export interface FooterProps {
  setPage: (p: Page) => void;
}

export interface HomePageProps {
  setPage: (p: Page) => void;
}

export interface FarmLandscapeProps {
  seed?: number;
}

// ─── DATA SHAPES ──────────────────────────────────────────────────────────────
export interface BlogPostSection {
  heading: string;
  body: string;
}

export interface BlogPost {
  id: number;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  color: string;
  author: string;
  sections: BlogPostSection[];
}

export interface BlogPostPageProps {
  post: BlogPost;
  onBack: () => void;
  setPage: (p: Page) => void;
}

export interface StatItem {
  num: string;
  label: string;
}

export interface ServiceCard {
  n: string;
  t: string;
  b: string;
}

export interface StepItem {
  n: string;
  t: string;
  b: string;
}

// ─── FORM STATE ───────────────────────────────────────────────────────────────
export interface EvalFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  province: string;
  landType: string;
  acres: string;
  description: string;
  timeline: string;
  heard: string;
}

export interface ReferFormState {
  yourName: string;
  yourEmail: string;
  yourPhone: string;
  refName: string;
  refPhone: string;
  refEmail: string;
  refProvince: string;
  refAsset: string;
  refNotes: string;
}
