"use client";

import { motion } from "framer-motion";
import {
  Braces,
  FileCode2,
  Atom,
  Layers,
  Server,
  Hexagon,
  Database,
  Code2,
  Globe,
  Wrench,
  Palette,
  Container,
  GitBranch,
  type LucideIcon,
} from "lucide-react";

type Pill = { name: string; icon: LucideIcon };

/* Your skills only — auto-slide rows */
const slideRow1: Pill[] = [
  { name: "Tailwind CSS", icon: Palette },
  { name: "JavaScript", icon: Braces },
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Layers },
  { name: "TypeScript", icon: FileCode2 },
  { name: "Node.js", icon: Server },
  { name: "Express", icon: Server },
  { name: "Nest.js", icon: Hexagon },
  { name: "RESTful APIs", icon: Layers },
  { name: "JWT", icon: Layers },
];

const slideRow2: Pill[] = [
  { name: "PostgreSQL", icon: Database },
  { name: "VS Code", icon: Code2 },
  { name: "Postman", icon: Globe },
  { name: "Chrome DevTools", icon: Wrench },
  { name: "Figma Dev Mode", icon: Palette },
  { name: "GSAP", icon: Layers },
  { name: "Framer Motion", icon: Layers },
  { name: "Lenis", icon: Layers },
  { name: "Docker", icon: Container },
];

const slideRow3: Pill[] = [
  { name: "Vercel", icon: Globe },
  { name: "Netlify", icon: Globe },
  { name: "GitHub Pages", icon: Globe },
  { name: "Surge", icon: Globe },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: GitBranch },
  { name: "Python", icon: FileCode2 },
  { name: "SQL", icon: Database },
];

function SlideRow({
  items,
  animation,
  duration,
}: {
  items: Pill[];
  animation: string;
  duration: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className="marquee-mask overflow-hidden"
      onMouseEnter={(e) => {
        const track = e.currentTarget.querySelector<HTMLElement>(".marquee-track");
        if (track) track.style.animationPlayState = "paused";
      }}
      onMouseLeave={(e) => {
        const track = e.currentTarget.querySelector<HTMLElement>(".marquee-track");
        if (track) track.style.animationPlayState = "running";
      }}
    >
      <div
        className="marquee-track"
        style={{ animation: `${animation} ${duration} linear infinite` }}
      >
        {doubled.map((pill, i) => (
          <span key={`${pill.name}-${i}`} className="skill-pill">
            <pill.icon size={19} strokeWidth={1.8} />
            {pill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-poppins text-[#5AA1FF] text-sm font-medium tracking-[0.18em] uppercase mb-3 block">
            My Expertise
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-[#5AA1FF] to-[#9CC2FF] bg-clip-text text-transparent">
              Skills
            </span>{" "}
            <span className="text-[#5C6E8F]">&</span>{" "}
            <span className="text-white">Technologies</span>
          </h2>
          <p className="section-sub font-poppins max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web
            applications
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="space-y-5"
      >
        <SlideRow items={slideRow1} animation="marquee" duration="32s" />
        <SlideRow items={slideRow2} animation="marquee-reverse" duration="38s" />
        <SlideRow items={slideRow3} animation="marquee" duration="34s" />
      </motion.div>

    </section>
  );
}
