export type DepartmentCategory =
  | "Civil & Architecture"
  | "Mechanical & Aerospace"
  | "Electrical & Computer"
  | "Chemical & Materials"
  | "Interdisciplinary";

export interface Program {
  name: string;
  degree: "BSc" | "MSc" | "PhD";
  duration: string;
  description: string;
}

export interface Department {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  category: DepartmentCategory;
  established: number;
  headOfDepartment: string;
  programs: Program[];
  researchAreas: string[];
  studentCount: number;
  staffCount: number;
  image: string;
  externalUrl: string;
  contactEmail: string;
  contactPhone: string;
  location: string;
}

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: NewsCategory;
  date: string;
  image: string;
  author: string;
  tags: string[];
}

export type NewsCategory =
  | "Faculty"
  | "Student"
  | "Research"
  | "Events"
  | "Announcements";

export interface Event {
  slug: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  category: NewsCategory;
  image?: string;
  registrationUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
  icon?: string;
  external?: boolean;
  group?: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface PortalLink {
  name: string;
  description: string;
  href: string;
  icon: string;
  color: string;
}

export interface ContactInfo {
  departmentName: string;
  email: string;
  phone: string;
  location: string;
  officeHours: string;
}

export interface TimelineEntry {
  year: number;
  title: string;
  description: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
