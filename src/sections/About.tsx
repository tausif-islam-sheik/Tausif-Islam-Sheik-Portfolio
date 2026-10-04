"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Dumbbell, Coffee, Music, Plane } from "lucide-react";

const interests = [
  { icon: Code2, label: "Coding" },
  { icon: Dumbbell, label: "Fitness" },
  { icon: Palette, label: "Design" },
  { icon: Music, label: "Music" },
  { icon: Coffee, label: "Coffee" },
  { icon: Plane, label: "Travel" },
];

const cards = [
  {
    icon: Code2,
    title: "My Programming Journey",
    text: "I started with a curiosity for how websites work. What began as a hobby evolved into a passion for meaningful digital experiences — now specializing in Next.js, TypeScript and production-grade full-stack systems.",
  },
  {
    icon: Palette,
    title: "What I Love To Do",
    text: "I thrive on solving complex problems and turning ideas into reality — from scalable backend systems to pixel-perfect interfaces. Clean code, user-centric design and performance are my core principles.",
  },
  {
    icon: Coffee,
    title: "Beyond Coding",
    text: "When I'm not shipping, I'm exploring new tech, staying fit, or enjoying good coffee. I believe in work-life balance and constantly expanding my horizons.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="eyebrow font-poppins">Get to know me</span>
          <h2 className="section-title font-poppins text-4xl sm:text-5xl mt-5">
            About Me
          </h2>
          <p className="section-sub font-poppins max-w-xl mx-auto mt-4">
            Developer by craft, problem-solver by nature.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-[#5AA1FF]/12 border border-[#5AA1FF]/20 grid place-items-center mb-4">
                <c.icon size={20} className="text-[#5AA1FF]" />
              </div>
              <h3 className="font-poppins font-semibold text-white text-lg mb-2.5">
                {c.title}
              </h3>
              <p className="font-poppins text-[#8B9BB8] text-[0.92rem] leading-relaxed">
                {c.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="glass-card rounded-2xl p-6 mt-4"
        >
          <h3 className="font-poppins font-semibold text-white text-center mb-5">
            Things I Enjoy
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {interests.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2.5 py-4 rounded-xl border border-white/[0.06] bg-[#0A1128]/60 hover:border-[#5AA1FF]/30 transition-colors cursor-default"
              >
                <item.icon size={20} className="text-[#5AA1FF]" />
                <span className="font-poppins text-[#8B9BB8] text-xs">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
