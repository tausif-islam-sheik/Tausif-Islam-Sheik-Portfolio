'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowDown, Github, Linkedin, Facebook } from 'lucide-react'
import gsap from 'gsap'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
]

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal animation
      gsap.fromTo(
        titleRef.current,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
      )
      
      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 1 }
      )
    })

    return () => ctx.revert()
  }, [])

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[100px]"
          style={{ top: '10%', left: '10%' }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-pink-600/20 blur-[100px]"
          style={{ bottom: '20%', right: '10%' }}
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
            Hello, I&apos;m
          </span>
        </motion.div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="gradient-text">Tausif Islam</span>
          <br />
          <span className="text-white">Sheik</span>
        </h1>

        {/* Subtitle with typing effect */}
        <p
          ref={subtitleRef}
          className="text-xl sm:text-2xl lg:text-3xl text-gray-400 mb-8"
        >
          Full-Stack Developer crafting{' '}
          <span className="text-purple-400">fast</span>,{' '}
          <span className="text-pink-400">beautiful</span>,{' '}
          <span className="text-purple-400">scalable</span> web experiences
        </p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-gray-500 max-w-2xl mx-auto mb-10 text-base sm:text-lg"
        >
          Building modern web experiences with passion and precision.
          Transforming ideas into elegant, functional solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#"
            className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.a>
          
          <motion.button
            onClick={handleScrollToAbout}
            className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full bg-gradient-to-b from-purple-500 to-pink-500"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
