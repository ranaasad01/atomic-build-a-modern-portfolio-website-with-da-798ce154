"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, Twitter } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from "@/lib/motionVariants";
import { skillCategories, personalInfo, socialLinks } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500/20 to-indigo-500/20 border-blue-500/20",
  Backend: "from-emerald-500/20 to-teal-500/20 border-emerald-500/20",
  "Tools & Cloud": "from-orange-500/20 to-amber-500/20 border-orange-500/20",
};

const categoryAccents: Record<string, string> = {
  Frontend: "text-blue-400",
  Backend: "text-emerald-400",
  "Tools & Cloud": "text-orange-400",
};

const levelLabels = ["", "Beginner", "Elementary", "Intermediate", "Advanced", "Expert"];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="section-label">Tech Stack</span>
            <h2 className="section-title">
              Skills &amp; <span className="gradient-text">Expertise</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Technologies I&apos;ve worked with across the full stack — from pixel-perfect UIs to
              scalable backend systems.
            </p>
          </motion.div>

          {/* Skill categories */}
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.category}
                variants={scaleIn}
                className="relative rounded-2xl border bg-surface overflow-hidden group hover:border-primary/30 transition-colors duration-300"
              >
                {/* Category header */}
                <div className={"bg-gradient-to-br p-6 border-b " + (categoryColors[cat.category] || "from-primary/10 to-indigo-500/10 border-primary/20")}>
                  <h3 className={"text-lg font-bold " + (categoryAccents[cat.category] || "text-primary")}>
                    {cat.category}
                  </h3>
                  <p className="text-xs text-muted mt-1">{cat.skills.length} technologies</p>
                </div>

                {/* Skills list */}
                <div className="p-6 space-y-4">
                  {cat.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.4 }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted">{levelLabels[skill.level]}</span>
                      </div>
                      <div className="h-1.5 bg-border rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: (skill.level / 5) * 100 + "%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: idx * 0.08 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech badges cloud */}
          <motion.div variants={fadeInUp} className="mt-16 text-center">
            <p className="text-sm text-muted mb-6 font-medium uppercase tracking-widest">Also familiar with</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Zustand", "React Query", "Zod", "Vitest", "Playwright",
                "Turborepo", "pnpm", "ESLint", "Prettier", "Husky",
                "Stripe", "Resend", "Cloudflare", "Supabase", "PlanetScale",
              ].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-surface border border-border text-muted hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
