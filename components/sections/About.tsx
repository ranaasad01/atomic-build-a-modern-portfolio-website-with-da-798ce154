"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, Coffee, Code2, CheckCircle, ExternalLink, Github, ArrowRight, ArrowUp, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn, cardHover } from "@/lib/motionVariants";
import { personalInfo, projects, socialLinks } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

const highlights = [
  "5+ years building production web applications",
  "Contributed to 10+ open source projects",
  "Mentored junior developers at 2 startups",
  "Speaker at local React & Node.js meetups",
];

const funFacts = [
  { icon: Code2, label: "Lines of code written", value: "500K+" },
  { icon: Coffee, label: "Cups of coffee consumed", value: "∞" },
  { icon: Briefcase, label: "Companies worked with", value: "12+" },
  { icon: MapPin, label: "Based in", value: personalInfo.location },
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Image & fun facts */}
          <motion.div variants={fadeInLeft} className="relative">
            {/* Profile card */}
            <div className="relative mx-auto max-w-sm">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border-2 border-primary/30 -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-primary/5 border border-primary/20 -z-10" />

              {/* Avatar */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-indigo-500/10 border border-border aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-indigo-400 mx-auto mb-4 flex items-center justify-center text-white text-5xl font-bold shadow-glow">
                    AR
                  </div>
                  <p className="font-semibold text-lg">{personalInfo.name}</p>
                  <p className="text-muted text-sm">{personalInfo.title}</p>
                  <div className="flex items-center justify-center gap-1.5 mt-2 text-xs text-muted">
                    <MapPin size={12} />
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-8 bg-surface border border-border rounded-xl px-3 py-2 shadow-glass text-xs font-medium"
              >
                <span className="text-emerald-400 font-bold">✓</span> Available for hire
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-6 bottom-12 bg-surface border border-border rounded-xl px-3 py-2 shadow-glass text-xs font-medium"
              >
                🚀 5+ Years Exp.
              </motion.div>
            </div>

            {/* Fun facts grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {funFacts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-surface border border-border rounded-xl p-4 hover:border-primary/30 transition-colors"
                >
                  <Icon size={18} className="text-primary mb-2" />
                  <div className="font-bold text-lg">{value}</div>
                  <div className="text-xs text-muted">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio & highlights */}
          <motion.div variants={fadeInRight}>
            <motion.span variants={fadeInUp} className="section-label">
              About Me
            </motion.span>

            <motion.h2 variants={fadeInUp} className="section-title">
              Passionate about crafting{" "}
              <span className="gradient-text">great software</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-muted leading-relaxed mb-6">
              {personalInfo.bio}
            </motion.p>

            <motion.p variants={fadeInUp} className="text-muted leading-relaxed mb-8">
              I believe great software is built at the intersection of technical excellence and
              thoughtful design. Every line of code I write is with the end user in mind — making
              their experience faster, smoother, and more delightful.
            </motion.p>

            {/* Highlights */}
            <motion.div variants={staggerContainer} className="space-y-3 mb-8">
              {highlights.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-secondary"
              >
                See My Work
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Projects Section ─────────────────────────────────────────────────────────

type Filter = "all" | "frontend" | "fullstack" | "backend" | "mobile";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Mobile", value: "mobile" },
];

const categoryColors: Record<string, string> = {
  frontend: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  fullstack: "bg-primary/10 text-primary border-primary/20",
  backend: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  mobile: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle mx-auto">
              A selection of projects I&apos;ve built — from SaaS platforms to developer tools.
              Each one crafted with care for performance and user experience.
            </p>
          </motion.div>

          {/* Filter bar */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 " +
                  (activeFilter === f.value
                    ? "bg-primary text-white shadow-glow"
                    : "bg-surface border border-border text-muted hover:text-foreground hover:border-primary/30")
                }
              >
                {f.label}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.article
                  key={project.slug}
                  variants={cardHover}
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover="hover"
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="group relative flex flex-col rounded-2xl border border-border bg-surface overflow-hidden hover:border-primary/30 transition-colors duration-300 h-full"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-primary via-indigo-400 to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-44 bg-gradient-to-br from-primary/10 via-indigo-500/5 to-transparent overflow-hidden flex items-center justify-center">
                    <div className="text-7xl font-black text-primary/10 select-none">{project.title.charAt(0)}</div>
                    <div className="absolute top-3 left-3">
                      <span className={"inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border " + (categoryColors[project.category] || "bg-primary/10 text-primary border-primary/20")}>
                        {project.category}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          ★ Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="primary" className="text-xs">{tag}</Badge>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge variant="outline" className="text-xs">+{project.tags.length - 4}</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <Link href={"/projects/" + project.slug} className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-primary transition-colors group/link">
                        View Details
                        <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                      <div className="flex items-center gap-2 ml-auto">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-colors">
                            <Github size={14} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-colors">
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 text-muted">
              No projects in this category yet.
            </motion.div>
          )}

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex">
              View All on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copy */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 font-bold text-lg">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold">AR</span>
              <span className="gradient-text">Asad rana</span>
            </div>
            <p className="text-xs text-muted">
              &copy; {year} Asad rana. Built with Next.js &amp; Tailwind CSS.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: socialLinks.github, label: "GitHub" },
              { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
              { icon: Twitter, href: socialLinks.twitter, label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs font-medium text-muted hover:text-primary transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
