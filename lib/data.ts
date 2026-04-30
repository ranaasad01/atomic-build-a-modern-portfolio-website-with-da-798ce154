export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "frontend" | "fullstack" | "backend" | "mobile";
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "A real-time analytics dashboard for SaaS businesses with interactive charts, user segmentation, and revenue tracking.",
    longDescription:
      "Built a comprehensive analytics platform that processes millions of events per day. Features include real-time data streaming via WebSockets, interactive D3.js charts, cohort analysis, funnel visualization, and automated reporting. The backend uses a time-series database for efficient querying of historical data.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Recharts", "Stripe"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/projects/dashboard.jpg",
    featured: true,
  },
  {
    slug: "ai-writing-tool",
    title: "AI Writing Assistant",
    description:
      "An AI-powered writing tool that helps users craft better content with real-time suggestions, tone analysis, and grammar correction.",
    longDescription:
      "Integrated OpenAI GPT-4 to provide contextual writing suggestions, tone detection, and style improvements. Built a rich text editor with ProseMirror, real-time collaboration via CRDTs, and a document versioning system. Supports markdown export and integrates with Notion and Google Docs.",
    tags: ["React", "OpenAI API", "Node.js", "WebSockets", "ProseMirror"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/projects/ai-writer.jpg",
    featured: true,
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart, checkout, and order tracking built on Next.js.",
    longDescription:
      "Developed a scalable e-commerce solution with a headless CMS for product management, Stripe integration for payments, real-time inventory tracking, and a recommendation engine. Achieved 98/100 Lighthouse performance score through aggressive image optimization and edge caching.",
    tags: ["Next.js", "Stripe", "Sanity CMS", "Tailwind CSS", "Vercel"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/projects/ecommerce.jpg",
    featured: true,
  },
  {
    slug: "mobile-fitness-app",
    title: "Fitness Tracker App",
    description:
      "A cross-platform mobile app for tracking workouts, nutrition, and progress with personalized AI coaching.",
    longDescription:
      "Built with React Native and Expo, this fitness app features workout logging, nutrition tracking with barcode scanning, progress photos, and an AI coach that adapts training plans based on performance data. Integrates with Apple Health and Google Fit for comprehensive health data.",
    tags: ["React Native", "Expo", "Firebase", "TensorFlow Lite", "Redux"],
    category: "mobile",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/projects/fitness.jpg",
    featured: false,
  },
  {
    slug: "devops-cli",
    title: "DevOps CLI Tool",
    description:
      "A powerful CLI tool that automates deployment pipelines, infrastructure provisioning, and monitoring setup.",
    longDescription:
      "Created a developer-focused CLI that wraps Terraform, Docker, and Kubernetes to provide a simplified deployment experience. Features include one-command environment setup, automatic SSL certificate management, blue-green deployments, and integrated log streaming.",
    tags: ["Node.js", "Terraform", "Docker", "Kubernetes", "AWS"],
    category: "backend",
    githubUrl: "https://github.com",
    image: "/projects/devops.jpg",
    featured: false,
  },
  {
    slug: "design-system",
    title: "Component Design System",
    description:
      "A comprehensive React component library with 50+ accessible components, dark mode support, and Storybook documentation.",
    longDescription:
      "Designed and built a production-ready component library following WAI-ARIA accessibility guidelines. Includes 50+ components with full TypeScript support, CSS custom properties for theming, automated visual regression testing with Chromatic, and comprehensive Storybook documentation.",
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "CSS Variables"],
    category: "frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/projects/design-system.jpg",
    featured: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 },
      { name: "GraphQL", level: 4 },
      { name: "React Native", level: 4 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "PostgreSQL", level: 4 },
      { name: "Prisma ORM", level: 4 },
      { name: "Redis", level: 4 },
      { name: "REST APIs", level: 5 },
      { name: "tRPC", level: 4 },
    ],
  },
  {
    category: "Tools & Cloud",
    skills: [
      { name: "Git / GitHub", level: 5 },
      { name: "Docker", level: 4 },
      { name: "AWS / Vercel", level: 4 },
      { name: "CI/CD Pipelines", level: 4 },
      { name: "Figma", level: 3 },
      { name: "Linux / Bash", level: 4 },
    ],
  },
];

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "hello@alexmorgan.dev",
};

export const personalInfo = {
  name: "Asad Rana",
  title: "Full-Stack Engineer",
  tagline: "I build fast, accessible, and beautiful web experiences.",
  bio: "I'm a full-stack engineer with 15+ years of experience crafting high-performance web applications. I specialize in React, Next.js, and Node.js — turning complex problems into elegant, user-friendly solutions. When I'm not coding, I'm contributing to open source, writing technical articles, or exploring the mountains.",
  location: "San Francisco, CA",
  availability: "Open to opportunities",
  yearsExperience: 15,
  projectsCompleted: 40000000,
  happyClients: 25,
};