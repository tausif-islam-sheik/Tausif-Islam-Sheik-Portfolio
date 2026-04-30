"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Facebook, Heart } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <svg width="34" height="34" viewBox="0 0 42 42" fill="none">
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7"/>
                    <stop offset="100%" stopColor="#7c3aed"/>
                  </linearGradient>
                </defs>
                <path d="M8 8H34V14H24V32H18V14H8V8Z" fill="url(#footer-logo-grad)"/>
                <path d="M24 14H34L32 20H24V14Z" fill="#6d28d9"/>
                <path d="M18 14V32L12 28V14H18Z" fill="#f5e6d3"/>
                <path d="M8 8L14 4H34L28 8H8Z" fill="#f5e6d3"/>
              </svg>
              <div className="flex items-baseline">
                <span className="text-[#f5e6d3] font-bold text-2xl tracking-tight">Tausif</span>
                <span className="text-purple-500 text-xl ml-0.5">.</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              Building modern web experiences with <br /> passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
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

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/25 transition-shadow"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        {/* Made with love */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Tausif Islam Sheik. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
