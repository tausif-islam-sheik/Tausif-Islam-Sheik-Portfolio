'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <main className="premium-bg relative min-h-screen overflow-hidden font-poppins">
      <Navbar />
      <Hero />
      <div className="h-px max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <Skills />
      <div className="h-px max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <About />
      <div className="h-px max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <Projects />
      <div className="h-px max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <Contact />
      <Footer />
    </main>
  )
}
