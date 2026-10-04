"use client";

import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/tausif-islam-sheik" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/tausif-islam-sheik" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/tausifislmsheik" },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <svg width="34" height="34" viewBox="0 0 42 42" fill="none">
              <defs>
                <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5AA1FF" />
                  <stop offset="100%" stopColor="#2F6FED" />
                </linearGradient>
              </defs>
              <path d="M8 8H34V14H24V32H18V14H8V8Z" fill="url(#footer-logo-grad)" />
              <path d="M24 14H34L32 20H24V14Z" fill="#1E48B5" />
              <path d="M18 14V32L12 28V14H18Z" fill="#f5e6d3" />
              <path d="M8 8L14 4H34L28 8H8Z" fill="#f5e6d3" />
            </svg>
            <div>
              <div className="flex items-baseline">
                <span className="text-[#f5e6d3] font-bold text-2xl tracking-tight">Tausif</span>
                <span className="text-[#5AA1FF] text-2xl ml-0.5">.</span>
              </div>
              <p className="font-poppins text-[#5C6E8F] text-xs">
                Production-ready web experiences.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="font-poppins text-[#8B9BB8] hover:text-white text-sm transition-colors"
              >
                {l.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
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
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn-primary-blue w-9 h-9 rounded-full grid place-items-center text-white ml-1"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.05] text-center">
          <p className="font-poppins text-[#5C6E8F] text-xs">
            © {new Date().getFullYear()} Tausif Islam Sheik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
