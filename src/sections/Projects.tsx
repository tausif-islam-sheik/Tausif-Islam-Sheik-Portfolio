"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  ChevronRight,
  AlertCircle,
  Lightbulb,
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  shortDesc: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenges: string;
  improvements: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "FoodMart | Multi-Vendor Food Ordering Platform",
    shortDesc:
      "Full-stack, role-based meal ordering app — customers order, providers manage menus, admins oversee the platform.",
    description:
      "FoodMart is a full-stack, role-based meal ordering web application designed to simulate a real-world food delivery platform. Customers browse meals, place orders and track delivery status, while providers manage menus and fulfill orders. Admins oversee users, orders and categories.",
    image: "/foodmart.png",
    technologies: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Prisma"],
    liveUrl: "https://foodmart-frontend.vercel.app",
    githubUrl: "https://github.com/tausif-islam-sheik/FoodMart--frontend",
    challenges:
      "Handling real-time order management and synchronization between users, vendors and admin panels. Ensured smooth UX with efficient state management, API optimization and concurrent order handling with validation and fallbacks.",
    improvements:
      "AI-based food recommendations, multiple secure payment gateways, real-time order tracking and a PWA for mobile performance and offline support.",
  },
  {
    id: "2",
    name: "CineTube | Movie Streaming Platform",
    shortDesc:
      "Discover trending, popular and upcoming movies, build watchlists and unlock premium content via Stripe subscriptions.",
    description:
      "CineTube is a movie streaming platform with modern full-stack architecture. Users discover trending, popular and upcoming movies, build personal watchlists and unlock premium content through a Stripe-powered subscription system — all in a responsive, theme-aware UI.",
    image: "/cinetube.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "TanStack Query", "Express.js", "Stripe"],
    liveUrl: "https://cinetube-omega.vercel.app",
    githubUrl: "https://github.com/tausif-islam-sheik/CineTube",
    challenges:
      "Integrating streaming links while ensuring smooth playback and consistent UX. Managed player limits and latency with optimized embeds, lazy loading and network-aware fallbacks, plus efficient state for real-time UI updates.",
    improvements:
      "Custom media server for playback control and monetization, AI-powered recommendations, more payment gateways and a PWA for mobile and offline use.",
  },
  {
    id: "3",
    name: "HireIQ | AI-Powered Recruitment Platform",
    shortDesc:
      "Automates resume screening, ranks candidates by job fit and provides AI interview coaching and job recommendations.",
    description:
      "HireIQ is a full-stack AI-powered recruitment platform that streamlines hiring for recruiters and job seekers. Companies post jobs, review AI-ranked candidates and make data-driven decisions. Candidates upload resumes, receive AI analysis, practice interview coaching and get personalized recommendations.",
    image: "/hireiq.png",
    technologies: ["Next.js", "TypeScript", "TanStack Query", "OpenRouter API", "Zustand", "Express.js", "PostgreSQL", "Prisma"],
    liveUrl: "https://hireiq-bay.vercel.app",
    githubUrl: "https://github.com/tausif-islam-sheik/HireIQ",
    challenges:
      "Accurate AI resume parsing across PDF/DOCX formats with reliable text extraction, plus AI ranking at scale — solved with background processing, caching, WebSockets and careful inference-performance tuning.",
    improvements:
      "AI explainability for scoring, bias detection and fairness auditing, multi-model AI support, real-time collaborative hiring tools and a mobile-first PWA with hiring-trend analytics.",
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  // Lock background scroll + close on Escape so the popup scrolls independently
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 26, stiffness: 300 }}
        data-lenis-prevent
        className="relative w-full max-w-3xl max-h-[85dvh] overflow-y-auto overscroll-contain rounded-3xl border border-white/10 bg-[#080D20] p-6 sm:p-8"
        style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full grid place-items-center text-[#8B9BB8] hover:text-white border border-white/10 bg-white/[0.04] transition-colors z-10"
          aria-label="Close"
        >
          <X size={19} />
        </button>

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-7 bg-[#0D152E] border border-white/[0.07]">
          <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary-blue font-poppins px-4 py-2 rounded-xl text-white text-xs font-semibold flex items-center gap-1.5">
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost font-poppins px-4 py-2 rounded-xl text-white text-xs font-semibold flex items-center gap-1.5">
                <Github size={14} /> Source Code
              </a>
            )}
          </div>
        </div>

        <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-white mb-4">{project.name}</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((t) => (
            <span key={t} className="font-poppins px-3 py-1 rounded-full text-xs font-medium bg-[#5AA1FF]/10 text-[#9CC2FF] border border-[#5AA1FF]/25">
              {t}
            </span>
          ))}
        </div>

        <h3 className="font-poppins text-lg font-semibold text-white mb-2">About the Project</h3>
        <p className="font-poppins text-[#8B9BB8] leading-relaxed text-[0.95rem] mb-6">{project.description}</p>

        <div className="mb-4 p-5 rounded-2xl bg-red-500/[0.06] border border-red-500/20">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="w-9 h-9 rounded-xl bg-red-500/15 grid place-items-center">
              <AlertCircle size={18} className="text-red-400" />
            </span>
            <h3 className="font-poppins font-semibold text-white">Challenges Faced</h3>
          </div>
          <p className="font-poppins text-[#8B9BB8] text-sm leading-relaxed">{project.challenges}</p>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/20">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="w-9 h-9 rounded-xl bg-emerald-500/15 grid place-items-center">
              <Lightbulb size={18} className="text-emerald-400" />
            </span>
            <h3 className="font-poppins font-semibold text-white">Future Improvements</h3>
          </div>
          <p className="font-poppins text-[#8B9BB8] text-sm leading-relaxed">{project.improvements}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="eyebrow font-poppins">Featured work</span>
          <h2 className="section-title font-poppins text-4xl sm:text-5xl mt-5">
            My Projects
          </h2>
          <p className="section-sub font-poppins max-w-xl mx-auto mt-4">
            Real-world builds showcasing production-grade full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col"
              onClick={() => setSelected(p)}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0D152E]">
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060F] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#3B82F6]/0 group-hover:bg-[#3B82F6]/15 transition-colors duration-300 grid place-items-center">
                  <span className="font-poppins opacity-0 group-hover:opacity-100 transition-opacity px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium flex items-center gap-1.5 border border-white/20">
                    View Details <ChevronRight size={16} />
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-poppins text-[1.02rem] font-semibold text-white leading-snug mb-2 group-hover:text-[#9CC2FF] transition-colors">
                  {p.name}
                </h3>
                <p className="font-poppins text-[#8B9BB8] text-[0.85rem] leading-relaxed mb-4 flex-1">
                  {p.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="font-poppins px-2.5 py-1 rounded-lg text-[0.7rem] font-medium bg-white/[0.05] text-[#9FB0CC] border border-white/[0.07]">
                      {t}
                    </span>
                  ))}
                  {p.technologies.length > 4 && (
                    <span className="font-poppins px-2.5 py-1 rounded-lg text-[0.7rem] font-medium bg-white/[0.05] text-[#9FB0CC]">
                      +{p.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
