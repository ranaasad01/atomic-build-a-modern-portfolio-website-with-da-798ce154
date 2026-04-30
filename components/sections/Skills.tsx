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

// ─── Contact Section ──────────────────────────────────────────────────────────

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
    setTimeout(() => setFormState("idle"), 5000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 hover:border-primary/30";

  return (
    <section id="contact" className="section-padding bg-surface/30">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="section-label">Contact</span>
            <h2 className="section-title">
              Let&apos;s <span className="gradient-text">Work Together</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Have a project in mind or just want to say hello? I&apos;d love to hear from you.
              I typically respond within 24 hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <motion.div variants={fadeInLeft} className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Get in touch</h3>
                <div className="space-y-4">
                  <a
                    href={"mailto:" + personalInfo.email}
                    className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted">Email</p>
                      <p className="text-sm font-medium group-hover:text-primary transition-colors">{personalInfo.email}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted">Location</p>
                      <p className="text-sm font-medium">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Follow me</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: socialLinks.github, label: "GitHub" },
                    { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
                    { icon: Twitter, href: socialLinks.twitter, label: "Twitter" },
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-colors"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-indigo-500/5 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-semibold text-emerald-400">Available for work</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Currently open to full-time roles and freelance projects. Let&apos;s build something amazing together.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeInRight} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="John Doe" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="Project inquiry, collaboration..." className={inputClass} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea id="message" name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Tell me about your project..." className={inputClass + " resize-none"} />
                </div>

                {formState === "success" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                    <CheckCircle size={18} />
                    Message sent! I&apos;ll get back to you within 24 hours.
                  </motion.div>
                )}
                {formState === "error" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    <AlertCircle size={18} />
                    Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={formState === "loading"}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
