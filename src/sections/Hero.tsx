'use client'

import { motion } from 'framer-motion'
import { Download, ArrowDown, MapPin, BadgeCheck, Star } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { value: '3+', label: 'Production Projects' },
  { value: '1+', label: 'Years Experience' },
  { value: '15+', label: 'Technologies' },
]

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-40 lg:pt-44 lg:pb-28">
      {/* soft blue ambient — subtle like screenshot */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-320px] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[#1B3A8F]/20 blur-[140px]" />
        <div className="absolute bottom-[-280px] left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#0E1E4E]/70 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="flex justify-center mb-7"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-[#5AA1FF]/20 blur-2xl" />
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full p-[3px] bg-gradient-to-b from-[#5AA1FF]/70 via-[#5AA1FF]/20 to-transparent">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0B122A]">
                <Image
                  src="/profile-picture.jpeg"
                  alt="Tausif Islam Sheik"
                  width={384}
                  height={384}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
            <span className="absolute bottom-2 right-2 z-10 w-8 h-8 rounded-full bg-[#0B122A] border border-white/20 grid place-items-center shadow-lg">
              <BadgeCheck size={18} className="text-[#5AA1FF]" />
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="font-poppins text-[#9FB0CC] text-sm sm:text-base font-medium tracking-[0.18em] uppercase mb-4"
        >
          Hello, I&apos;m Tausif Islam Sheik
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="section-title font-poppins text-[1.9rem] leading-[1.1] sm:text-5xl lg:text-[3.25rem]"
        >
          Full-Stack Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="section-sub font-poppins max-w-xl mx-auto mt-6 text-sm sm:text-[0.95rem]"
        >
          I help businesses turn ideas into working web products, handling the
          frontend, backend, and database myself, so there&apos;s one person
          who understands the whole system.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-9"
        >
          <a
            href="/Tausif Islam Sheik (Resume).pdf"
            download
            className="btn-primary-blue font-poppins w-full sm:w-auto px-7 py-3.5 rounded-full text-white text-sm font-semibold flex items-center justify-center gap-2"
          >
            <Download size={17} />
            Download Resume
          </a>
          <button
            onClick={() => scrollTo('#projects')}
            className="btn-ghost font-poppins w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold text-white flex items-center justify-center gap-2"
          >
            View Projects
            <ArrowDown size={17} className="text-[#5AA1FF]" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-7 text-[0.83rem] font-poppins text-[#7E90B3]"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-[#5AA1FF]" /> Bangladesh
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Star size={14} className="text-[#5AA1FF]" /> Next.js · TypeScript · Nest.js · PostgreSQL
          </span>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.52 }}
          className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto mt-12"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/[0.07] bg-[#0B122A]/70 px-3 py-5 sm:py-6"
            >
              <div className="font-poppins font-bold text-2xl sm:text-3xl text-white">
                {s.value}
              </div>
              <div className="font-poppins text-[0.72rem] sm:text-xs text-[#8B9BB8] mt-1.5">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
