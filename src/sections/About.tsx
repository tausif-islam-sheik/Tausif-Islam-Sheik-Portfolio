'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Palette, Dumbbell, Coffee, Music, Plane } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const interests = [
  { icon: Code2, label: 'Coding', color: 'from-purple-500 to-indigo-500' },
  { icon: Dumbbell, label: 'Fitness', color: 'from-orange-500 to-red-500' },
  { icon: Palette, label: 'Design', color: 'from-pink-500 to-rose-500' },
  { icon: Music, label: 'Music', color: 'from-cyan-500 to-blue-500' },
  { icon: Coffee, label: 'Coffee', color: 'from-amber-500 to-orange-500' },
  { icon: Plane, label: 'Travel', color: 'from-emerald-500 to-teal-500' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-content',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl" />
              
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden glass-card">
                <div className="aspect-square bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">T</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Your Photo Here
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-white text-sm font-medium">2+ Years</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-white text-sm font-medium">Full-Stack Dev</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div ref={contentRef} className="space-y-6">
            <div className="about-content">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                My Programming Journey
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I started my programming journey with a curiosity for how websites work. 
                What began as a hobby quickly evolved into a passion for creating 
                meaningful digital experiences. Over the years, I&apos;ve honed my skills 
                in modern web technologies, specializing in the MERN stack and Next.js.
              </p>
            </div>

            <div className="about-content">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                What I Love To Do
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I thrive on solving complex problems and turning ideas into reality. 
                Whether it&apos;s building scalable backend systems or crafting pixel-perfect 
                frontend interfaces, I enjoy every aspect of the development process. 
                Clean code, user-centric design, and performance optimization are my 
                core principles.
              </p>
            </div>

            <div className="about-content">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Beyond Coding
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                staying fit, or enjoying a good cup of coffee. I believe in maintaining 
                a healthy work-life balance and constantly expanding my horizons.
              </p>
            </div>

            {/* Interests Grid */}
            <div className="about-content">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${interest.color} flex items-center justify-center shadow-lg`}>
                      <interest.icon size={24} className="text-white" />
                    </div>
                    <span className="text-gray-400 text-xs">{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
