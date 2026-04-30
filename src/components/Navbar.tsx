'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Facebook } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass py-4' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-semibold text-lg">Tausif.</span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-300 hover:text-white text-sm font-medium transition-colors relative group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 rounded-full glass flex items-center justify-center text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass md:hidden pt-24"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white text-xl font-medium"
                >
                  {link.name}
                </motion.button>
              ))}
              
              <div className="flex items-center gap-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white"
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
