'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/tausif-islam-sheik' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/tausif-islam-sheik' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/tausifislmsheik' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#04060F]/85 backdrop-blur-xl border-b border-white/[0.06] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5"
              aria-label="Home"
            >
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <defs>
                  <linearGradient id="nav-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5AA1FF" />
                    <stop offset="100%" stopColor="#2F6FED" />
                  </linearGradient>
                </defs>
                <path d="M8 8H34V14H24V32H18V14H8V8Z" fill="url(#nav-logo-grad)" />
                <path d="M24 14H34L32 20H24V14Z" fill="#1E48B5" />
                <path d="M18 14V32L12 28V14H18Z" fill="#f5e6d3" />
                <path d="M8 8L14 4H34L28 8H8Z" fill="#f5e6d3" />
              </svg>
              <span className="flex items-baseline">
                <span className="text-[#f5e6d3] font-bold text-2xl sm:text-3xl tracking-tight">Tausif</span>
                <span className="text-[#5AA1FF] text-3xl sm:text-4xl ml-0.5">.</span>
              </span>
            </button>

            <div className="hidden md:flex items-center gap-1 p-1.5 rounded-full border border-white/[0.07] bg-[#0B122A]/70 backdrop-blur-xl">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="px-5 py-2 rounded-full text-sm font-medium text-[#9FB0CC] hover:text-white hover:bg-white/[0.06] transition-all"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-full grid place-items-center text-[#8B9BB8] border border-white/[0.08] bg-[#0B122A]/70 hover:text-white hover:border-[#5AA1FF]/40 transition-all"
                >
                  <s.icon size={16} />
                </a>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary-blue ml-1 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              >
                Hire Me
              </button>
            </div>

            <button
              className="md:hidden w-10 h-10 rounded-xl grid place-items-center text-white border border-white/10 bg-[#0B122A]/80"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-[#030612]/95 backdrop-blur-xl pt-24"
          >
            <div className="flex flex-col items-center gap-2 p-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full max-w-xs py-3.5 rounded-2xl text-white font-medium border border-white/[0.07] bg-[#0D152E]"
                >
                  {link.name}
                </motion.button>
              ))}
              <div className="flex items-center gap-3 mt-5">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full grid place-items-center text-white border border-white/10 bg-[#0D152E]"
                  >
                    <s.icon size={19} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
