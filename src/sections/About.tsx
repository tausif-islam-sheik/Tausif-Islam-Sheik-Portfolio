"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Palette, Dumbbell, Coffee, Music, Plane } from "lucide-react";

const interests = [
  { icon: Code2, label: "Coding", color: "from-purple-500 to-indigo-500" },
  { icon: Dumbbell, label: "Fitness", color: "from-orange-500 to-red-500" },
  { icon: Palette, label: "Design", color: "from-pink-500 to-rose-500" },
  { icon: Music, label: "Music", color: "from-cyan-500 to-blue-500" },
  { icon: Coffee, label: "Coffee", color: "from-amber-500 to-orange-500" },
  { icon: Plane, label: "Travel", color: "from-emerald-500 to-teal-500" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-2 block">
            Get To Know Me
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch overflow-hidden">
          {/* Left Column - Story Cards */}
          <div ref={contentRef} className="space-y-6 flex flex-col">
            {/* Journey Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-6 rounded-2xl overflow-hidden h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Code2 size={20} className="text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  My Programming Journey
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed break-words">
                I started my programming journey with a curiosity for how
                websites work. What began as a hobby quickly evolved into a
                passion for creating meaningful digital experiences. Over the
                years, I&apos;ve honed my skills in modern web technologies,
                specializing in the MERN stack and Next.js.
              </p>
            </motion.div>

            {/* Passion Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl overflow-hidden h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Palette size={20} className="text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  What I Love To Do
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed break-words">
                I thrive on solving complex problems and turning ideas into
                reality. Whether it&apos;s building scalable backend systems or
                crafting pixel-perfect frontend interfaces, I enjoy every aspect
                of the development process. Clean code, user-centric design, and
                performance optimization are my core principles.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Beyond Coding & Interests */}
          <div className="space-y-6 flex flex-col">
            {/* Beyond Coding Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6 rounded-2xl h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <Coffee size={20} className="text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Beyond Coding
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, staying fit, or enjoying a good cup of coffee. I
                believe in maintaining a healthy work-life balance and
                constantly expanding my horizons.
              </p>
            </motion.div>

            {/* Interests Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6 rounded-2xl h-full"
            >
              <h3 className="text-lg font-semibold text-white mb-4 text-center">
                Things I Enjoy
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${interest.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <interest.icon size={20} className="text-white" />
                    </div>
                    <span className="text-gray-400 text-xs">
                      {interest.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
