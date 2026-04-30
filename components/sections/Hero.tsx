"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, ArrowRight, Download } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
import { personalInfo, socialLinks } from "@/lib/data";

const roles = ["Full-Stack Engineer", "React Specialist", "UI/UX Enthusiast", "Open Source Contributor"];

const gridBg: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
};

export function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-300/15 blur-3xl"
        />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={gridBg} />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border border-primary/30 bg-primary/5 text-primary">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Asad Rana
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Asad Rana</span>
          </motion.h1>

          <motion.div variants={fadeInUp} className="mb-6 h-10 overflow-hidden">
            <AnimatedRoles roles={roles} />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-muted max-w-2xl mb-10 text-balance leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <button onClick={() => window.open("https://github.com/ranaasad01", "_blank")} className="btn-primary group" style={{ color: "Pink", backgroundColor: "Red" }}>
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => handleScroll("contact")} className="btn-secondary group" style={{ backgroundColor: "green" }}>
              <Download size={16} />
              Download CV
            </button>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-20">
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
                className="w-10 h-10 rounded-xl bg-surface hover:bg-surface-hover border border-border flex items-center justify-center text-muted hover:text-foreground transition-colors duration-200"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-8 sm:gap-16 mb-16">
            {[
              { value: personalInfo.yearsExperience + "+", label: "Years Experience" },
              { value: "40000000+", label: "Projects Built" },
              { value: personalInfo.happyClients + "+", label: "Happy Clients" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{value}</div>
                <div className="text-xs sm:text-sm text-muted">{label}</div>
              </div>
            ))}
          </motion.div>

          <motion.button
            variants={fadeInUp}
            onClick={() => handleScroll("about")}
            aria-label="Scroll to about section"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedRoles({ roles }: { roles: string[] }) {
  const count = roles.length;
  const endY = "-" + (count - 1) * 100 + "%";
  return (
    <motion.div
      animate={{ y: ["0%", endY] }}
      transition={{
        duration: count * 2.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {roles.map((role) => (
        <div key={role} className="h-10 flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-semibold text-primary">{role}</span>
        </div>
      ))}
    </motion.div>
  );
}