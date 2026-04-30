"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Coffee, Code2, CheckCircle } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/motionVariants";
import { personalInfo } from "@/lib/data";

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
                    AM
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
