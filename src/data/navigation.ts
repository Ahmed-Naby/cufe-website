import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  {
    label: "Faculty",
    href: "/about",
    children: [
      { label: "Dean's Word", href: "/about", icon: "User", description: "Welcome from the Faculty Dean", group: "About" },
      { label: "Faculty Leadership", href: "/faculty/leadership", icon: "Users", description: "Deans, vice deans, and council members", group: "About" },
      { label: "Vision & Mission", href: "/about#vision", icon: "Target", description: "Vision, mission, and strategic objectives", group: "About" },
      { label: "History & Heritage", href: "/about#history", icon: "Clock", description: "Engineering education since 1816", group: "About" },
      { label: "In Memoriam", href: "/faculty/memory", icon: "Heart", description: "Honoring distinguished faculty members", group: "About" },
      { label: "Building Maps", href: "/faculty/building-maps", icon: "Map", description: "Campus layout and building locations", group: "Resources" },
      { label: "Council Magazine", href: "/faculty/magazine", icon: "BookOpen", description: "Faculty council meeting minutes", group: "Resources" },
      { label: "Quality Assurance", href: "/faculty/quality-assurance", icon: "ShieldCheck", description: "Academic quality and accreditation", group: "Resources" },
      { label: "Faculty Library", href: "/faculty/library", icon: "Library", description: "40,000+ volumes and digital access", group: "Resources" },
      { label: "Prizes & Awards", href: "/faculty/prizes", icon: "Award", description: "State prizes in engineering sciences", group: "Resources" },
    ],
  },
  {
    label: "Departments",
    href: "/departments",
    children: [
      { label: "All Departments", href: "/departments", icon: "GraduationCap", description: "Browse all 16 departments" },
      { label: "Research Centers", href: "/research", icon: "Microscope", description: "13 specialized research centers" },
      { label: "Research Labs", href: "/research#labs", icon: "FlaskConical", description: "13 advanced laboratories" },
    ],
  },
  {
    label: "Undergraduates",
    href: "/undergraduates",
    children: [
      { label: "General Programs (Semester)", href: "/academics#general", icon: "BookOpen", description: "Traditional two-semester system", group: "Programs" },
      { label: "STEP Programs (Credit Hour)", href: "/academics#step", icon: "Clock", description: "Specialized engineering tracks", group: "Programs" },
      { label: "Student Regulations", href: "/academics#regulations", icon: "ShieldAlert", description: "Academic guides and rules", group: "Programs" },
      { label: "Student Resources", href: "/undergraduates", icon: "FileText", description: "Calendars, exams, and timetables", group: "Resources" },
      { label: "Industrial Training", href: "/undergraduates/training", icon: "Wrench", description: "Practical training programs", group: "Resources" },
      { label: "E-Learning", href: "https://elearn.eng.cu.edu.eg", icon: "MonitorPlay", external: true, description: "Learning management platform", group: "Resources" },
    ],
  },
  {
    label: "Postgraduate",
    href: "/postgraduate",
    children: [
      { label: "Graduate Programs", href: "/postgraduate", icon: "Award", description: "Diploma, M.Sc., and Ph.D. pathways" },
      { label: "M.Sc. & Ph.D. Thesis", href: "/postgraduate#thesis", icon: "FileText", description: "Thesis directories" },
      { label: "Seminars & Discussions", href: "/postgraduate#seminars", icon: "Calendar", description: "Defense and seminar schedules" },
    ],
  },
  {
    label: "Staff",
    href: "/staff",
    children: [
      { label: "Staff Portal", href: "/staff", icon: "UserCog", description: "Resources for faculty members" },
      { label: "Email & Forms", href: "/staff#forms", icon: "Mail", description: "Institutional email and documents" },
      { label: "Impact Factor", href: "/staff#impact", icon: "TrendingUp", description: "JCR publishing indexes" },
    ],
  },
  {
    label: "Alumni",
    href: "/alumni",
  },
  {
    label: "News & Events",
    href: "/news",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const utilityNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "FAQ", href: "/contact#faq" },
  { label: "E-mail", href: "http://mail.eng.cu.edu.eg", external: true },
  { label: "Find Us", href: "/contact#map" },
  { label: "Credits", href: "/credits" },
  { label: "Links", href: "/links" },
];
