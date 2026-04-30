"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/lib/data";
import { Badge } from "./Badge";
import { cardHover } from "@/lib/motionVariants";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryColors: Record<string, string> = {
  frontend: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  fullstack: "bg-primary/10 text-primary border-primary/20",
  backend: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  mobile: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="group relative flex flex-col rounded-2xl border border-border bg-surface overflow-hidden hover:border-primary/30 transition-colors duration-300 h-full"
    >
      {/* Card top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-primary-light to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 via-indigo-500/5 to-transparent overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-black text-primary/10 select-none">
            {project.title.charAt(0)}
          </div>
        </div>
        {/* Category badge */}
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

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="primary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <Link
            href={"/projects/" + project.slug}
            className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-primary transition-colors group/link"
          >
            View Details
            <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-2 ml-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
                className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-colors"
              >
                <Github size={14} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live demo"
                className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-colors"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
