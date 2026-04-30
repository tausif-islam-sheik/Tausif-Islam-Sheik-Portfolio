'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import gsap from 'gsap'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Full-Stack Developer'
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
      )
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    let index = 0
    
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index))
          index++
        } else {
          clearInterval(interval)
        }
      }, 100)
      
      return () => clearInterval(interval)
    }, 1500)

    return () => clearTimeout(startDelay)
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20 xl:gap-24">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-2"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              {/* Decorative gradient blur */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-2xl" />
              
              {/* Gradient border ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#0f0f1a] shadow-2xl">
                <Image
                  src="/profile-picture.jpeg"
                  alt="Tausif Islam Sheik"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating badge - Projects */}
              <motion.div
                className="absolute -top-2 -left-2 sm:top-0 sm:left-0 glass px-3 py-2 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-gray-400 text-xs block">Projects</span>
                <span className="text-purple-400 font-bold text-sm">2+</span>
              </motion.div>
              
              {/* Floating badge - Experience */}
              <motion.div
                className="absolute -bottom-2 -right-2 sm:bottom-0 sm:right-0 glass px-3 py-2 rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-gray-400 text-xs block">Experience</span>
                <span className="text-purple-400 font-bold text-sm">1+ Years</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-purple-400 text-xl font-medium tracking-wider uppercase">
                Hello, I&apos;m
              </span>
            </motion.div>

            {/* Main Title */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="gradient-text">Tausif Islam</span>{' '}
              <span className="text-white">Sheik</span>
            </h1>

            {/* Typewriter designation */}
            <motion.p
              ref={subtitleRef}
              className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 mb-8 min-h-[40px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className="text-purple-400">{displayText}</span>
              <span className="animate-pulse">|</span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-gray-500 max-w-xl mx-auto lg:mx-0 mb-10 text-base sm:text-lg"
            >
              Building modern web experiences with passion and precision.
              Transforming ideas into elegant, functional solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
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
        </div>
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
