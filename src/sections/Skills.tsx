'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Cloud, 
  Palette, 
  GitBranch, 
  Languages,
  BookOpen,
  Layers
} from 'lucide-react'

const categories = [
  { id: 'frontend', name: 'Frontend', icon: Code2, count: 6 },
  { id: 'backend', name: 'Backend', icon: Server, count: 4 },
  { id: 'database', name: 'Database & Cloud', icon: Database, count: 1 },
  { id: 'devtools', name: 'Development Tools', icon: Wrench, count: 4 },
  { id: 'hosting', name: 'Hosting & Deployment', icon: Cloud, count: 4 },
  { id: 'design', name: 'Design Tools', icon: Palette, count: 4 },
  { id: 'versioncontrol', name: 'Version Control', icon: GitBranch, count: 2 },
  { id: 'languages', name: 'Languages', icon: Languages, count: 1 },
  { id: 'familiar', name: 'Familiar With', icon: BookOpen, count: 5 },
  { id: 'cms', name: 'CMS & Prototyping', icon: Layers, count: 2 },
]

const skills: Record<string, { name: string; icon: string; color: string }[]> = {
  frontend: [
    { name: 'HTML5', icon: 'html5', color: '#e34c26' },
    { name: 'CSS3', icon: 'css3', color: '#264de4' },
    { name: 'Tailwind CSS', icon: 'tailwind', color: '#38bdf8' },
    { name: 'JavaScript', icon: 'javascript', color: '#f7df1e' },
    { name: 'React', icon: 'react', color: '#61dafb' },
    { name: 'Next.js', icon: 'nextjs', color: '#ffffff' },
  ],
  backend: [
    { name: 'Node.js', icon: 'nodejs', color: '#339933' },
    { name: 'Express', icon: 'express', color: '#ffffff' },
    { name: 'MongoDB', icon: 'mongodb', color: '#47a248' },
    { name: 'REST API', icon: 'api', color: '#8b5cf6' },
  ],
  database: [
    { name: 'Firebase', icon: 'firebase', color: '#ffca28' },
  ],
  devtools: [
    { name: 'VS Code', icon: 'vscode', color: '#007acc' },
    { name: 'Postman', icon: 'postman', color: '#ff6c37' },
    { name: 'Chrome DevTools', icon: 'chrome', color: '#4285f4' },
    { name: 'Figma Dev Mode', icon: 'figma', color: '#f24e1e' },
  ],
  hosting: [
    { name: 'Vercel', icon: 'vercel', color: '#ffffff' },
    { name: 'Netlify', icon: 'netlify', color: '#00c7b7' },
    { name: 'GitHub Pages', icon: 'github', color: '#ffffff' },
    { name: 'Surge', icon: 'surge', color: '#8b5cf6' },
  ],
  design: [
    { name: 'Figma', icon: 'figma', color: '#f24e1e' },
    { name: 'Adobe XD', icon: 'xd', color: '#ff61f6' },
    { name: 'Photoshop', icon: 'photoshop', color: '#31a8ff' },
    { name: 'Canva', icon: 'canva', color: '#00c4cc' },
  ],
  versioncontrol: [
    { name: 'Git', icon: 'git', color: '#f05032' },
    { name: 'GitHub', icon: 'github', color: '#ffffff' },
  ],
  languages: [
    { name: 'JavaScript', icon: 'javascript', color: '#f7df1e' },
  ],
  familiar: [
    { name: 'TypeScript', icon: 'typescript', color: '#3178c6' },
    { name: 'Redux', icon: 'redux', color: '#764abc' },
    { name: 'GSAP', icon: 'gsap', color: '#88ce02' },
    { name: 'Three.js', icon: 'threejs', color: '#ffffff' },
    { name: 'Framer Motion', icon: 'framer', color: '#0055ff' },
  ],
  cms: [
    { name: 'WordPress', icon: 'wordpress', color: '#21759b' },
    { name: 'Webflow', icon: 'webflow', color: '#4353ff' },
  ],
}

// SVG Icons for skills
const SkillIcon = ({ name, color }: { name: string; color: string }) => {
  const icons: Record<string, JSX.Element> = {
    html5: (
      <svg viewBox="0 0 512 512" className="w-10 h-10" fill={color}>
        <path d="M71,460 L30,0 L481,0 L440,460 L255,512" fill="#e34c26"/>
        <path d="M256,472 L405,431 L440,37 L256,37" fill="#ef652a"/>
        <path d="M256,208 L181,208 L176,150 L256,150 L256,94 L255,94 L136,94 L137,109 L149,265 L256,265 zM256,355 L255,355 L203,339 L199,293 L156,293 L163,382 L255,414 L256,414" fill="#ffffff"/>
      </svg>
    ),
    css3: (
      <svg viewBox="0 0 512 512" className="w-10 h-10" fill={color}>
        <path d="M30,0 L71,460 L255,512 L440,460 L481,0" fill="#264de4"/>
        <path d="M256,472 L405,431 L440,37 L256,37" fill="#2965f1"/>
        <path d="M256,208 L181,208 L176,150 L256,150 L256,94 L255,94 L136,94 L137,109 L149,265 L256,265 zM256,355 L255,355 L203,339 L199,293 L156,293 L163,382 L255,414 L256,414" fill="#ffffff"/>
      </svg>
    ),
    tailwind: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill={color}>
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    ),
    javascript: (
      <svg viewBox="0 0 630 630" className="w-10 h-10">
        <rect width="630" height="630" fill="#f7df1e"/>
        <path d="M423.2,492.19c12.69,20.72,29.2,35.95,58.4,35.95c24.53,0,40.2-12.26,40.2-29.2c0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2c0-44.4,33.83-78.2,86.7-78.2c37.64,0,64.7,13.1,84.2,47.4l-46.1,29.6c-10.15-18.2-21.1-25.37-38.1-25.37c-17.34,0-28.3,11-28.3,25.37c0,17.76,11,24.95,36.3,35.95l14.8,6.34c50.3,21.53,78.6,43.52,78.6,93.0c0,53.3-41.87,82.5-98.1,82.5c-54.98,0-90.5-26.2-107.8-60.5L423.2,492.19z M214.2,492.19c12.69,20.72,29.2,35.95,58.4,35.95c24.53,0,40.2-12.26,40.2-29.2c0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2c0-44.4,33.83-78.2,86.7-78.2c37.64,0,64.7,13.1,84.2,47.4l-46.1,29.6c-10.15-18.2-21.1-25.37-38.1-25.37c-17.34,0-28.3,11-28.3,25.37c0,17.76,11,24.95,36.3,35.95l14.8,6.34c50.3,21.53,78.6,43.52,78.6,93.0c0,53.3-41.87,82.5-98.1,82.5c-54.98,0-90.5-26.2-107.8-60.5L214.2,492.19z" fill="#000"/>
      </svg>
    ),
    react: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
    nextjs: (
      <svg viewBox="0 0 180 180" className="w-10 h-10">
        <mask id="mask">
          <circle cx="90" cy="90" r="90" fill="white"/>
        </mask>
        <g mask="url(#mask)">
          <circle cx="90" cy="90" r="90" fill="black"/>
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C142.438 162.604 145.023 160.522 147.732 158.606L149.508 157.52Z" fill="white"/>
          <rect x="115" y="54" width="12" height="72" fill="white"/>
        </g>
      </svg>
    ),
    nodejs: (
      <svg viewBox="0 0 256 289" className="w-10 h-10">
        <path fill="#339933" d="M128 288.464c-7.121 0-13.786-1.89-19.303-5.233l-61.242-35.951c-10.408-6.119-5.347-8.293-1.898-9.543 13.817-4.813 16.564-5.933 31.244-14.35l4.835-2.727c2.283-1.325 5.283-0.839 7.617 0.39l47.598 28.169c1.113 0.616 2.605 0.616 3.611 0l185.916-107.506c1.113-0.616 1.803-1.847 1.803-3.166V29.632c0-1.319-0.69-2.55-1.803-3.166L156.873 1.103c-1.113-0.616-2.605-0.616-3.611 0L13.165 88.549c-1.113 0.616-1.803 1.847-1.803 3.166v214.913c0 1.319 0.69 2.55 1.803 3.166l37.221 21.495c20.25 9.774 32.723 4.381 32.723-15.501V44.373c0-2.422 1.959-4.381 4.381-4.381h29.683c2.422 0 4.381 1.959 4.381 4.381v212.328c0 27.045-15.501 42.567-42.355 42.567 -8.227 0-14.723 0-32.847-8.938l-36.118-20.699C10.473 263.47 0 245.788 0 225.558V44.373c0-20.229 10.473-37.912 27.452-47.703L119.87 4.22c16.564-9.315 38.629-9.315 55.193 0l92.418 53.449c16.98 9.791 27.452 27.473 27.452 47.703v181.185c0 20.229-10.473 37.912-27.452 47.703l-92.418 53.449C141.786 286.575 135.121 288.464 128 288.464z"/>
      </svg>
    ),
    express: (
      <svg viewBox="0 0 512 512" className="w-10 h-10" fill="white">
        <path d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0zm-78.064 369.723h35.399l92.376-149.217v149.217h31.289V142.277h-35.399l-92.376 149.589V142.277h-31.289v227.446zm191.657-43.239h-35.061V313.52h35.061v13.064z"/>
      </svg>
    ),
    mongodb: (
      <svg viewBox="0 0 512 512" className="w-10 h-10">
        <path fill="#47a248" d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm0 0"/>
        <path fill="#ffffff" d="M256 32c-13.062 0-23.625 119.812-23.625 267.5 0 147.656 10.563 267.5 23.625 267.5s23.625-119.844 23.625-267.5C279.625 151.812 269.062 32 256 32zm0 0"/>
      </svg>
    ),
    api: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill={color}>
        <path d="M7 7H5a2 2 0 00-2 2v8h2v-4h2v4h2V9a2 2 0 00-2-2zm0 4H5V9h2v2zm8-4h-4v10h2v-4h2a2 2 0 002-2V9a2 2 0 00-2-2zm0 4h-2V9h2v2zm4 0V9h2v2h-2z"/>
      </svg>
    ),
    firebase: (
      <svg viewBox="0 0 256 351" className="w-10 h-10">
        <defs>
          <linearGradient x1="0%" y1="100%" x2="50%" y2="0%" id="a">
            <stop stopColor="#F57C00" offset="0%"/>
            <stop stopColor="#FBC02D" offset="100%"/>
          </linearGradient>
        </defs>
        <path d="M0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.733-1.474 42.637 6.09L0 282.998z" fill="#FFA000"/>
        <path d="M0 283l2.123-2.97 100.404-190.48 10.723 19.437 3.072-53.543L55.897 4.624C52.186-2.338 42.15-1.208 40.054 6.356L0 283z" fill="#F57F17"/>
        <path d="M256 282.998l-2.123-2.972L153.473 89.512l-.212-2.017 44.259-83.137c3.71-6.964 13.747-5.832 15.843 1.732l44.937 276.908z" fill="#FFA000"/>
        <path d="M256 283l-2.123-2.97L153.473 89.55l-10.723 19.437-3.072-53.543 55.892 83.143c3.71 6.962 13.747 5.832 15.843-1.732L256 283z" fill="#F57F17"/>
        <path d="M128 282.998l2.123-2.972L230.527 89.512l.212-2.017L186.48 4.358C182.77-2.606 172.733-1.474 170.637 6.09L128 282.998z" fill="#FFCA28"/>
      </svg>
    ),
    vscode: (
      <svg viewBox="0 0 100 100" className="w-10 h-10">
        <mask id="vscode-mask">
          <circle cx="50" cy="50" r="50" fill="white"/>
        </mask>
        <g mask="url(#vscode-mask)">
          <rect width="100" height="100" fill="#007acc"/>
          <path d="M65 20L35 50l30 30V20z" fill="white"/>
          <path d="M35 50L20 35v30l15-15z" fill="white"/>
        </g>
      </svg>
    ),
    postman: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <path fill="#FF6C37" d="M0 0h256v256H0z"/>
        <path fill="#fff" d="M186.6 48L96 238.4l-26.6-26.6 90.6-190.4z"/>
        <circle cx="76" cy="180" r="32" fill="#fff"/>
      </svg>
    ),
    chrome: (
      <svg viewBox="0 0 512 512" className="w-10 h-10">
        <circle cx="256" cy="256" r="256" fill="#4c8bf5"/>
        <circle cx="256" cy="256" r="128" fill="#fff"/>
        <path fill="#f9ab00" d="M256 0l110 192H146z"/>
        <path fill="#0f9d58" d="M256 512l110-192H146z"/>
        <path fill="#db4437" d="M512 256H256l128-220.8z"/>
      </svg>
    ),
    figma: (
      <svg viewBox="0 0 38 57" className="w-10 h-10">
        <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
        <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
        <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
        <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
        <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
      </svg>
    ),
    vercel: (
      <svg viewBox="0 0 76 65" className="w-10 h-10" fill="white">
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/>
      </svg>
    ),
    netlify: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <rect width="256" height="256" rx="60" fill="#000"/>
        <path d="M128 28l-87 50v100l87 50 87-50V78l-87-50z" fill="#00C7B7"/>
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="white">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    surge: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill={color}>
        <path d="M12 2L2 22h20L12 2zm0 4l6 12H6l6-12z"/>
      </svg>
    ),
    xd: (
      <svg viewBox="0 0 512 512" className="w-10 h-10">
        <rect width="512" height="512" rx="100" fill="#470137"/>
        <path d="M200 150h60l50 100 50-100h60L310 286l115 126h-65L300 316l-60 96h-60l90-142-70-120z" fill="#FF61F6"/>
      </svg>
    ),
    photoshop: (
      <svg viewBox="0 0 512 512" className="w-10 h-10">
        <rect width="512" height="512" rx="100" fill="#001e36"/>
        <path d="M120 150h60c60 0 90 30 90 75 0 50-35 80-90 80h-60V150zm50 115h10c25 0 40-15 40-40 0-20-15-35-40-35h-10v75zM340 200c35 0 60 20 60 55 0 40-30 70-70 70-10 0-20-2-25-5v-35c5 3 15 5 25 5 20 0 35-10 35-30 0-15-10-25-30-25-10 0-20 3-25 5v-35c5-2 15-5 25-5z" fill="#31a8ff"/>
      </svg>
    ),
    canva: (
      <svg viewBox="0 0 512 512" className="w-10 h-10">
        <rect width="512" height="512" rx="100" fill="#00C4CC"/>
        <path d="M150 180h40v150h-40V180zm60 0h40v20c15-15 35-25 55-25 40 0 70 30 70 70v85h-40v-80c0-20-15-35-35-35-20 0-35 15-35 35v80h-40V180z" fill="#fff"/>
      </svg>
    ),
    git: (
      <svg viewBox="0 0 512 512" className="w-10 h-10">
        <circle cx="256" cy="256" r="256" fill="#f05032"/>
        <path d="M416.2 245.8l-148-148c-11.2-11.2-30-11.2-41.2 0l-28.8 28.8 36.4 36.4c11.8-4 25.4-1.2 34.8 8.2 9.4 9.6 12.2 23 8.2 34.8l35.2 35.2c11.8-4 25.2-1.2 34.8 8.2 13.2 13.2 13.2 34.4 0 47.6-13.2 13.2-34.4 13.2-47.6 0-10-10-12.4-24.6-7.2-36.8l-32.8-32.8v86.4c3.2 1.6 6.2 4 9 6.8 13.2 13.2 13.2 34.4 0 47.6-13.2 13.2-34.4 13.2-47.6 0s-13.2-34.4 0-47.6c2.4-2.4 5-4.2 7.8-5.8v-87.8c-2.8-1.6-5.4-3.4-7.8-5.8-10-10-12.4-24.6-7.2-36.8l-35.6-35.6-94 94c-11.2 11.2-11.2 30 0 41.2l148 148c11.2 11.2 30 11.2 41.2 0l147.2-147.2c11.2-11.2 11.2-30 0-41.2z" fill="#fff"/>
      </svg>
    ),
    typescript: (
      <svg viewBox="0 0 512 512" className="w-10 h-10">
        <rect width="512" height="512" rx="100" fill="#3178c6"/>
        <path d="M285 200v30h-60v140h-35V230h-60v-30h155zm85 30c-15 0-27 5-35 15-8 10-12 23-12 40v5h75v-5c0-17-4-30-12-40-8-10-20-15-35-15zm0-25c25 0 45 8 60 23 15 15 22 36 22 62v110h-35v-25c-10 15-25 22-47 22-20 0-36-6-48-17-12-11-18-26-18-45 0-18 6-32 20-42 13-10 32-15 55-15h38v-5c0-15-4-27-12-35-8-8-19-12-35-12-15 0-32 4-50 12l-12-30c20-10 42-15 65-15z" fill="#fff"/>
      </svg>
    ),
    redux: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <circle cx="128" cy="128" r="128" fill="#764abc"/>
        <path d="M180 150c-5 0-9 1-13 3-3-18-15-34-34-34-5 0-10 1-14 3-4-10-14-17-26-17-15 0-28 10-32 24-4-2-8-3-13-3-21 0-38 17-38 38s17 38 38 38c4 0 9-1 13-3 4 14 17 24 32 24 12 0 22-7 26-17 4 2 9 3 14 3 18 0 31-15 34-34 4 2 8 3 13 3 17 0 30-13 30-30s-13-30-30-30zm-90 53c-13 0-23-10-23-23s10-23 23-23 23 10 23 23-10 23-23 23zm0-41c-10 0-18 8-18 18s8 18 18 18 18-8 18-18-8-18-18-18z" fill="#fff"/>
      </svg>
    ),
    gsap: (
      <svg viewBox="0 0 100 100" className="w-10 h-10">
        <circle cx="50" cy="50" r="50" fill="#88ce02"/>
        <path d="M30 30h15v40H30zm25 0h15v40H55z" fill="#000"/>
      </svg>
    ),
    threejs: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <rect width="256" height="256" fill="#000"/>
        <path d="M128 40L40 216h176L128 40z" stroke="#fff" strokeWidth="20" fill="none"/>
      </svg>
    ),
    framer: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <rect width="256" height="256" rx="60" fill="#0055ff"/>
        <path d="M60 60h68l-68 68V60zm0 68h68l-68 68v-68zm68-68h68v68l-68-68zm0 68h68v68h-68z" fill="#fff"/>
      </svg>
    ),
    wordpress: (
      <svg viewBox="0 0 512 512" className="w-10 h-10">
        <circle cx="256" cy="256" r="256" fill="#21759b"/>
        <path d="M256 100c-86 0-156 70-156 156s70 156 156 156 156-70 156-156S342 100 256 100zm0 280c-68 0-124-56-124-124S188 132 256 132s124 56 124 124-56 124-124 124z" fill="#fff"/>
      </svg>
    ),
    webflow: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <rect width="256" height="256" rx="60" fill="#4353ff"/>
        <path d="M80 80h40l30 60 30-60h40l-50 96h-40z" fill="#fff"/>
      </svg>
    ),
  }

  return icons[name] || (
    <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center">
      <span className="text-white text-xs font-bold">{name.slice(0, 2).toUpperCase()}</span>
    </div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend')
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const currentSkills = skills[activeCategory] || []
  const activeCatData = categories.find(c => c.id === activeCategory)

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-2 block">
            My Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Skills</span>{' '}
            <span className="text-gray-500">&</span>{' '}
            <span className="text-white">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        {/* Category Tabs - First Row */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {categories.slice(0, 6).map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                activeCategory === category.id
                  ? 'tab-active text-white border-purple-500/50'
                  : 'glass-card text-gray-400 hover:text-white hover:border-purple-500/30'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <category.icon size={16} />
              <span>{category.name}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeCategory === category.id ? 'bg-purple-500/20 text-purple-300' : 'bg-gray-700/50 text-gray-500'
              }`}>
                ({category.count})
              </span>
            </motion.button>
          ))}
        </div>

        {/* Category Tabs - Second Row */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.slice(6).map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                activeCategory === category.id
                  ? 'tab-active text-white border-purple-500/50'
                  : 'glass-card text-gray-400 hover:text-white hover:border-purple-500/30'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <category.icon size={16} />
              <span>{category.name}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeCategory === category.id ? 'bg-purple-500/20 text-purple-300' : 'bg-gray-700/50 text-gray-500'
              }`}>
                ({category.count})
              </span>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {currentSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="skill-card glass-card rounded-2xl p-6 flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-800/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <SkillIcon name={skill.icon} color={skill.color} />
                </div>
                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
