"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
  Layers,
} from "lucide-react";

const categories = [
  { id: "frontend", name: "Frontend", icon: Code2 },
  { id: "backend", name: "Backend", icon: Server },
  { id: "database", name: "Database & Cloud", icon: Database },
  { id: "devtools", name: "Development Tools", icon: Wrench },
  { id: "hosting", name: "Hosting & Deployment", icon: Cloud },
  { id: "versioncontrol", name: "Version Control", icon: GitBranch },
  { id: "languages", name: "Languages", icon: Languages },
  { id: "familiar", name: "Familiar With", icon: BookOpen },
];

const skills: Record<string, { name: string; icon: string; color: string }[]> =
  {
    frontend: [
      { name: "HTML5", icon: "html5", color: "#e34c26" },
      { name: "CSS3", icon: "css3", color: "#264de4" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#38bdf8" },
      { name: "JavaScript", icon: "javascript", color: "#f7df1e" },
      { name: "React", icon: "react", color: "#61dafb" },
      { name: "Next.js", icon: "nextjs", color: "#ffffff" },
    ],
    backend: [
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "Express", icon: "express", color: "#ffffff" },
      { name: "PostgreSQL", icon: "postgresql", color: "#47a248" },
      { name: "REST API", icon: "api", color: "#8b5cf6" },
    ],
    database: [{ name: "PostgreSQL", icon: "postgresql", color: "#ffca28" }],
    devtools: [
      { name: "VS Code", icon: "vscode", color: "#007acc" },
      { name: "Postman", icon: "postman", color: "#ff6c37" },
      { name: "Chrome DevTools", icon: "chrome", color: "#4285f4" },
      { name: "Figma Dev Mode", icon: "figma", color: "#f24e1e" },
    ],
    hosting: [
      { name: "Vercel", icon: "vercel", color: "#ffffff" },
      { name: "Netlify", icon: "netlify", color: "#00c7b7" },
      { name: "GitHub Pages", icon: "github", color: "#ffffff" },
      { name: "Surge", icon: "surge", color: "#8b5cf6" },
    ],
    design: [
      { name: "Figma", icon: "figma", color: "#f24e1e" },
      { name: "Adobe XD", icon: "xd", color: "#ff61f6" },
      { name: "Photoshop", icon: "photoshop", color: "#31a8ff" },
      { name: "Canva", icon: "canva", color: "#00c4cc" },
    ],
    versioncontrol: [
      { name: "Git", icon: "git", color: "#f05032" },
      { name: "GitHub", icon: "github", color: "#ffffff" },
    ],
    languages: [{ name: "JavaScript", icon: "javascript", color: "#f7df1e" }],
    familiar: [
      { name: "TypeScript", icon: "typescript", color: "#3178c6" },
      // { name: 'Redux', icon: 'redux', color: '#764abc' },
      { name: "GSAP", icon: "gsap", color: "#88ce02" },
      // { name: 'Three.js', icon: 'threejs', color: '#ffffff' },
      { name: "Framer Motion", icon: "framer", color: "#0055ff" },
    ],
  };

// SVG Icons for skills
const SkillIcon = ({ name, color }: { name: string; color: string }) => {
  const icons: Record<string, JSX.Element> = {
    html5: (
      <svg viewBox="0 0 512 512" className="w-10 h-10" fill={color}>
        <path d="M71,460 L30,0 L481,0 L440,460 L255,512" fill="#e34c26" />
        <path d="M256,472 L405,431 L440,37 L256,37" fill="#ef652a" />
        <path
          d="M256,208 L181,208 L176,150 L256,150 L256,94 L255,94 L136,94 L137,109 L149,265 L256,265 zM256,355 L255,355 L203,339 L199,293 L156,293 L163,382 L255,414 L256,414"
          fill="#ffffff"
        />
      </svg>
    ),
    css3: (
      <svg viewBox="0 0 512 512" className="w-10 h-10" fill={color}>
        <path d="M30,0 L71,460 L255,512 L440,460 L481,0" fill="#264de4" />
        <path d="M256,472 L405,431 L440,37 L256,37" fill="#2965f1" />
        <path
          d="M256,208 L181,208 L176,150 L256,150 L256,94 L255,94 L136,94 L137,109 L149,265 L256,265 zM256,355 L255,355 L203,339 L199,293 L156,293 L163,382 L255,414 L256,414"
          fill="#ffffff"
        />
      </svg>
    ),
    tailwind: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill={color}>
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
    javascript: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <rect width="256" height="256" rx="25" fill="#f7df1e" />
        <path
          d="M67.311 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.889-3.092 12.889-15.12v-81.835h24.057v82.138c0 24.917-14.611 36.259-35.916 36.259-19.245 0-30.381-9.621-34.095-22.056M152.38 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.731 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.653-43.819-24.574"
          fill="#000"
        />
      </svg>
    ),
    react: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
    nextjs: (
      <svg viewBox="0 0 180 180" className="w-10 h-10">
        <mask id="mask">
          <circle cx="90" cy="90" r="90" fill="white" />
        </mask>
        <g mask="url(#mask)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C142.438 162.604 145.023 160.522 147.732 158.606L149.508 157.52Z"
            fill="white"
          />
          <rect x="115" y="54" width="12" height="72" fill="white" />
        </g>
      </svg>
    ),
    nodejs: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <rect width="256" height="256" rx="40" fill="#5FA04E" />
        <path
          d="M128 28L44 76v104l84 48 84-48V76L128 28zm0 16l68 39-68 39-68-39 68-39zm-8 66v74l-60-35v-70l60 31zm16 0l60-31v70l-60 35v-74z"
          fill="#fff"
        />
        <text
          x="128"
          y="175"
          textAnchor="middle"
          fill="#404137"
          fontSize="28"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          node
        </text>
      </svg>
    ),
    express: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <circle cx="128" cy="128" r="128" fill="#000" />
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#fff"
          fontSize="100"
          fontWeight="300"
          fontFamily="Helvetica, Arial, sans-serif"
          letterSpacing="-5"
        >
          ex
        </text>
      </svg>
    ),
    postgresql: (
      <svg viewBox="0 0 432.071 445.383" className="w-10 h-10">
        <g>
          <path
            d="M323.205,324.227c2.833-23.601,1.984-27.062,19.563-23.239l4.463,0.392c13.517,0.615,31.199-2.174,41.587-7c22.362-10.376,35.622-27.7,13.572-23.148c-50.297,10.376-53.755-6.655-53.755-6.655c53.111-78.803,75.313-178.836,56.149-203.322C352.514-5.534,262.036,26.049,260.522,26.869l-0.482,0.089c-9.938-2.062-21.06-3.294-33.554-3.496c-22.951-0.374-40.032,5.967-53.133,15.904c0,0-161.408-66.498-153.899,83.628c1.597,31.936,45.777,241.655,98.47,178.31c19.259-23.163,37.871-42.748,37.871-42.748c9.242,6.14,20.307,9.272,31.912,8.147l0.897-0.765c-0.281,2.876-0.157,5.689,0.568,9.019c-2.158,11.406,4.621,16.756,13.253,16.737c6.032-0.013,13.559-1.886,16.276-4.197c3.56-3.036,5.298-6.59,4.668-16.147c0.579-4.808-0.1-9.873,0.675-14.693c15.239,14.46,44.226,8.632,53.991-2.847c-22.341-11.611-16.63-50.619-16.63-50.619C336.752,291.362,321.175,296.605,323.205,324.227L323.205,324.227z"
            fill="#336791"
          />
          <path
            d="M322.739,230.037c-0.949-2.663-2.722-4.624-5.663-5.468c-3.775-0.929-7.164,0.202-8.883,3.364c-0.543,0.893-1.063,2.163-1.604,3.922c5.259-3.355,9.136-2.633,11.247-0.102C319.225,233.094,320.162,231.392,322.739,230.037L322.739,230.037z"
            fill="#fff"
          />
          <path
            d="M182.345,109.871c-13.84,0.231-24.172,1.453-32.045,4.227l-0.603,0.224v0.011c-2.939,1.221-4.906,2.657-5.876,4.118c-3.16,4.726-4.195,11.162-3.034,19.165c0.509,3.638,1.521,7.428,3.011,11.242c1.385-9.064,3.791-16.449,7.236-21.609c0.924-1.326,1.944-2.462,3.091-3.406c2.446,9.698,4.983,21.418,4.792,36.85c-0.092,7.477-0.901,15.093-2.406,22.751l-0.093,0.418l0.13,0.402c3.135,9.698,8.209,16.229,14.656,18.85c6.362,2.574,14.241,2.584,22.399,0.128l0.136-0.043l0.129-0.06c9.685-4.502,18.646-14.024,24.826-25.782c0.026-0.047,0.051-0.093,0.07-0.145c2.139-4.451,3.939-9.18,5.399-14.054c0.593,3.854,1.328,7.494,2.218,10.871c-2.722,15.272-6.961,27.271-13.258,35.71c-4.991,6.59-11.161,10.995-18.228,12.919c-8.044,2.094-16.769,0.863-25.889-3.608c-9.161-4.495-14.896-11.128-16.721-19.259c-2.356-10.535-1.598-22.303,2.251-34.937c3.88-12.723,10.585-24.618,19.554-35.068c8.931-10.412,19.037-17.858,30.01-22.145c-0.351-3.333-0.792-6.486-1.316-9.443C191.028,110.253,186.67,109.794,182.345,109.871z"
            fill="#fff"
          />
          <path
            d="M367.558,101.053c-19.759-25.597-62.971-39.585-91.537-32.881c-1.301,0.315-2.606,0.655-3.913,1.028c1.209-0.022,2.408-0.028,3.591-0.013c31.009,0.749,55.813,13.49,69.026,36.095c14.977,25.672,12.337,58.833-7.259,89.259c-0.257,0.418-0.516,0.833-0.772,1.246c11.82-16.107,17.998-33.979,17.546-52.449C354.026,136.338,346.794,120.721,367.558,101.053z"
            fill="#fff"
          />
        </g>
      </svg>
    ),
    api: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <rect width="256" height="256" rx="40" fill="#8b5cf6" />
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#fff"
          fontSize="100"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          API
        </text>
      </svg>
    ),
    vscode: (
      <svg viewBox="0 0 100 100" className="w-10 h-10">
        <mask id="vscode-mask">
          <circle cx="50" cy="50" r="50" fill="white" />
        </mask>
        <g mask="url(#vscode-mask)">
          <rect width="100" height="100" fill="#007acc" />
          <path d="M65 20L35 50l30 30V20z" fill="white" />
          <path d="M35 50L20 35v30l15-15z" fill="white" />
        </g>
      </svg>
    ),
    postman: (
      <svg
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        <circle cx="128" cy="128" r="122" fill="#E8652A" />
        <g transform="rotate(45, 128, 128)" fill="white">
          <circle cx="128" cy="62" r="22" />
          <rect x="107" y="57" width="42" height="9" rx="4.5" fill="#E8652A" />
          <rect x="121" y="83" width="14" height="11" rx="3" />
          <rect x="109" y="93" width="38" height="56" rx="10" />
          <path d="M109,142 L80,210 L112,160 Z" />
          <path d="M119,150 L128,215 L137,150 Z" />
          <path d="M147,142 L176,210 L144,160 Z" />
        </g>
      </svg>
    ),
    chrome: (
      <svg viewBox="0 0 512 512" className="w-10 h-10">
        <circle cx="256" cy="256" r="256" fill="#4c8bf5" />
        <circle cx="256" cy="256" r="128" fill="#fff" />
        <path fill="#f9ab00" d="M256 0l110 192H146z" />
        <path fill="#0f9d58" d="M256 512l110-192H146z" />
        <path fill="#db4437" d="M512 256H256l128-220.8z" />
      </svg>
    ),
    figma: (
      <svg viewBox="0 0 38 57" className="w-10 h-10">
        <path
          fill="#1abcfe"
          d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
        />
        <path
          fill="#0acf83"
          d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
        />
        <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
        <path
          fill="#f24e1e"
          d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
        />
        <path
          fill="#a259ff"
          d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
        />
      </svg>
    ),
    vercel: (
      <svg viewBox="0 0 76 65" className="w-10 h-10" fill="white">
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
      </svg>
    ),
    netlify: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <rect width="256" height="256" rx="60" fill="#000" />
        <path d="M128 28l-87 50v100l87 50 87-50V78l-87-50z" fill="#00C7B7" />
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="white">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    surge: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill={color}>
        <path d="M12 2L2 22h20L12 2zm0 4l6 12H6l6-12z" />
      </svg>
    ),
    xd: (
      <svg viewBox="0 0 512 512" className="w-10 h-10">
        <rect width="512" height="512" rx="100" fill="#470137" />
        <path
          d="M200 150h60l50 100 50-100h60L310 286l115 126h-65L300 316l-60 96h-60l90-142-70-120z"
          fill="#FF61F6"
        />
      </svg>
    ),
    git: (
      <svg viewBox="0 0 512 512" className="w-10 h-10">
        <circle cx="256" cy="256" r="256" fill="#f05032" />
        <path
          d="M416.2 245.8l-148-148c-11.2-11.2-30-11.2-41.2 0l-28.8 28.8 36.4 36.4c11.8-4 25.4-1.2 34.8 8.2 9.4 9.6 12.2 23 8.2 34.8l35.2 35.2c11.8-4 25.2-1.2 34.8 8.2 13.2 13.2 13.2 34.4 0 47.6-13.2 13.2-34.4 13.2-47.6 0-10-10-12.4-24.6-7.2-36.8l-32.8-32.8v86.4c3.2 1.6 6.2 4 9 6.8 13.2 13.2 13.2 34.4 0 47.6-13.2 13.2-34.4 13.2-47.6 0s-13.2-34.4 0-47.6c2.4-2.4 5-4.2 7.8-5.8v-87.8c-2.8-1.6-5.4-3.4-7.8-5.8-10-10-12.4-24.6-7.2-36.8l-35.6-35.6-94 94c-11.2 11.2-11.2 30 0 41.2l148 148c11.2 11.2 30 11.2 41.2 0l147.2-147.2c11.2-11.2 11.2-30 0-41.2z"
          fill="#fff"
        />
      </svg>
    ),
    typescript: (
      <svg viewBox="0 0 512 512" className="w-10 h-10">
        <rect width="512" height="512" rx="100" fill="#3178c6" />
        <path
          d="M285 200v30h-60v140h-35V230h-60v-30h155zm85 30c-15 0-27 5-35 15-8 10-12 23-12 40v5h75v-5c0-17-4-30-12-40-8-10-20-15-35-15zm0-25c25 0 45 8 60 23 15 15 22 36 22 62v110h-35v-25c-10 15-25 22-47 22-20 0-36-6-48-17-12-11-18-26-18-45 0-18 6-32 20-42 13-10 32-15 55-15h38v-5c0-15-4-27-12-35-8-8-19-12-35-12-15 0-32 4-50 12l-12-30c20-10 42-15 65-15z"
          fill="#fff"
        />
      </svg>
    ),
    // redux: (
    //   <svg viewBox="0 0 256 256" className="w-10 h-10">
    //     <circle cx="128" cy="128" r="128" fill="#764abc"/>
    //     <path d="M180 150c-5 0-9 1-13 3-3-18-15-34-34-34-5 0-10 1-14 3-4-10-14-17-26-17-15 0-28 10-32 24-4-2-8-3-13-3-21 0-38 17-38 38s17 38 38 38c4 0 9-1 13-3 4 14 17 24 32 24 12 0 22-7 26-17 4 2 9 3 14 3 18 0 31-15 34-34 4 2 8 3 13 3 17 0 30-13 30-30s-13-30-30-30zm-90 53c-13 0-23-10-23-23s10-23 23-23 23 10 23 23-10 23-23 23zm0-41c-10 0-18 8-18 18s8 18 18 18 18-8 18-18-8-18-18-18z" fill="#fff"/>
    //   </svg>
    // ),
    gsap: (
      <svg viewBox="0 0 100 100" className="w-10 h-10">
        <circle cx="50" cy="50" r="50" fill="#88ce02" />
        <path d="M30 30h15v40H30zm25 0h15v40H55z" fill="#000" />
      </svg>
    ),
    // threejs: (
    //   <svg viewBox="0 0 256 256" className="w-10 h-10">
    //     <rect width="256" height="256" fill="#000"/>
    //     <path d="M128 40L40 216h176L128 40z" stroke="#fff" strokeWidth="20" fill="none"/>
    //   </svg>
    // ),
    framer: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <rect width="256" height="256" rx="60" fill="#0055ff" />
        <path
          d="M60 60h68l-68 68V60zm0 68h68l-68 68v-68zm68-68h68v68l-68-68zm0 68h68v68h-68z"
          fill="#fff"
        />
      </svg>
    ),
  };

  return (
    icons[name] || (
      <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center">
        <span className="text-white text-xs font-bold">
          {name.slice(0, 2).toUpperCase()}
        </span>
      </div>
    )
  );
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const currentSkills = skills[activeCategory] || [];
  const activeCatData = categories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 lg:py-32">
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
            <span className="gradient-text">Skills</span>{" "}
            <span className="text-gray-500">&</span>{" "}
            <span className="text-white">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web
            applications
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
                  ? "tab-active text-white border-purple-500/50"
                  : "glass-card text-gray-400 hover:text-white hover:border-purple-500/30"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <category.icon size={16} />
              <span>{category.name}</span>
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === category.id
                    ? "bg-purple-500/20 text-purple-300"
                    : "bg-gray-700/50 text-gray-500"
                }`}
              >
                ({skills[category.id]?.length || 0})
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
                  ? "tab-active text-white border-purple-500/50"
                  : "glass-card text-gray-400 hover:text-white hover:border-purple-500/30"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <category.icon size={16} />
              <span>{category.name}</span>
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === category.id
                    ? "bg-purple-500/20 text-purple-300"
                    : "bg-gray-700/50 text-gray-500"
                }`}
              >
                ({skills[category.id]?.length || 0})
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
  );
}
