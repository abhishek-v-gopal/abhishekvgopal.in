export type Project = {
  name: string;
  year: string;
  note: string;
  tags: string[];
  href: string;
  role: string;
  featured: boolean;
};

// `featured: true` projects show on the homepage, in the order listed below.
// Everything shows on /work regardless of this flag.
export const projects: Project[] = [
  {
    name: "Chilamboli",
    year: "2025",
    note: "Event management platform for a state-level special school arts festival — registration, mark announcements and judging, all run from one system.",
    tags: ["Nuxt.js", "Monolithic"],
    href: "#",
    role: "Client work — Association for Intellectually Disabled",
    featured: true,
  },
  {
    name: "Gigwork",
    year: "2025",
    note: "A hyperlocal directory that helps people in Kerala find local businesses and services without digging through WhatsApp groups.",
    tags: ["Next.js", "Hono", "Cloudflare", "Interakt", "PhonePe"],
    href: "https://gigwork.co.in",
    role: "Client work, with personal interest",
    featured: true,
  },
  {
    name: "MoneyVault",
    year: "2025",
    note: "A personal finance manager for tracking where money actually goes, built for people who want clarity without a spreadsheet.",
    tags: ["Next.js", "TypeScript", "SQL"],
    href: "#",
    role: "Founder, built end to end",
    featured: true,
  },
  {
    name: "Meenmozhi",
    year: "2024",
    note: "A mobile app for searching the native names of fish, built for fisheries students in Payyannur.",
    tags: ["Mobile"],
    href: "#",
    role: "Client work",
    featured: true,
  },
  {
    name: "K&B Kottarathil Builders",
    year: "2024",
    note: "Portfolio and marketing site for a Kerala construction company, built around their completed projects.",
    tags: ["Next.js", "Design", "Vercel"],
    href: "#",
    role: "Client project",
    featured: true,
  },
  {
    name: "NavPath Academy",
    year: "2024",
    note: "Website for a maritime coaching institute in Kottayam, built to turn search traffic into course enquiries.",
    tags: ["Next.js", "SEO", "Vercel"],
    href: "#",
    role: "Client project",
    featured: false,
  },
  {
    name: "Aspire Online Learning Solutions",
    year: "2024",
    note: "Institutional website built on Payload CMS for content that a non-technical team can manage.",
    tags: ["Next.js", "Payload"],
    href: "https://aspireonlearningsolutions.com",
    role: "Client project",
    featured: false,
  },
  {
    name: "St. Berchmans College School",
    year: "2024",
    note: "School website built on Payload CMS.",
    tags: ["Next.js", "Payload"],
    href: "https://sbcs.edu.in",
    role: "Client project",
    featured: false,
  },
  {
    name: "NS HSS Nedumudy",
    year: "2023",
    note: "Website for a higher secondary school.",
    tags: ["Vue.js"],
    href: "#",
    role: "Client project",
    featured: false,
  },
  {
    name: "Inovus Labs",
    year: "2023",
    note: "Community website for a student innovation and startup ecosystem.",
    tags: ["Vue.js", "Firebase"],
    href: "https://inovuslabs.org",
    role: "Community project",
    featured: false,
  },
  {
    name: "Alleppey Tours",
    year: "2023",
    note: "Marketing website for a travel agency operating out of Alleppey.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://alleppeytours.com",
    role: "Client project",
    featured: false,
  },
  {
    name: "KSRTC Driving Schools",
    year: "2023",
    note: "A directory listing KSRTC-affiliated driving schools, built out of personal interest.",
    tags: ["Vue.js", "Node.js"],
    href: "https://ksrtc.abhishekvgopal.in",
    role: "Personal project",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);