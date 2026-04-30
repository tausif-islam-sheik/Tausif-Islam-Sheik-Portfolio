'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ExternalLink, Github, X, ChevronRight, Layers, AlertCircle, Lightbulb } from 'lucide-react'

interface Project {
  id: string
  name: string
  description: string
  shortDesc: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  challenges: string
  improvements: string
}

const projects: Project[] = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    shortDesc: 'Full-stack online shopping experience',
    description: 'A comprehensive e-commerce platform built with Next.js and MongoDB, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. The platform supports multiple vendors and includes advanced search and filtering capabilities.',
    image: '/project1.jpg',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Stripe', 'Redis'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/tausif/ecommerce',
    challenges: 'Implementing real-time inventory synchronization across multiple vendors while maintaining performance. Solved using Redis for caching and WebSocket connections for live updates.',
    improvements: 'Plan to add AI-powered product recommendations, integrate more payment gateways, and implement a progressive web app version for mobile users.',
  },
  {
    id: '2',
    name: 'Task Management App',
    shortDesc: 'Collaborative project management tool',
    description: 'A Kanban-style project management application with real-time collaboration features. Users can create boards, manage tasks with drag-and-drop functionality, and collaborate with team members in real-time.',
    image: '/project2.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'Express', 'MongoDB', 'Framer Motion'],
    liveUrl: 'https://example-tasks.com',
    githubUrl: 'https://github.com/tausif/taskmanager',
    challenges: 'Managing real-time state synchronization across multiple clients. Implemented optimistic UI updates and conflict resolution strategies to ensure smooth user experience.',
    improvements: 'Adding calendar integration, time tracking features, and advanced analytics dashboard for project insights.',
  },
  {
    id: '3',
    name: 'Weather Dashboard',
    shortDesc: 'Real-time weather with data visualization',
    description: 'An interactive weather dashboard that provides detailed weather forecasts with beautiful data visualizations. Features include location-based weather, historical data charts, and severe weather alerts.',
    image: '/project3.jpg',
    technologies: ['React', 'D3.js', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/tausif/weather',
    challenges: 'Creating responsive and performant data visualizations that work across all device sizes. Used D3.js with responsive design patterns and optimized data fetching.',
    improvements: 'Implementing weather prediction using machine learning models and adding air quality index tracking.',
  },
  {
    id: '4',
    name: 'Portfolio CMS',
    shortDesc: 'Dynamic portfolio management system',
    description: 'A content management system specifically designed for developers to showcase their work. Features include markdown support, project categorization, and customizable themes.',
    image: '/project4.jpg',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'AWS S3', 'MDX'],
    liveUrl: 'https://example-portfolio.com',
    githubUrl: 'https://github.com/tausif/portfolio-cms',
    challenges: 'Building a flexible content system that supports both structured data and free-form markdown. Created a hybrid approach using MDX for rich content editing.',
    improvements: 'Adding theme marketplace, SEO optimization tools, and integrated analytics dashboard.',
  },
]

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-3xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Project Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
          <div className="absolute inset-0 flex items-center justify-center">
            <Layers size={64} className="text-white/30" />
          </div>
          <div className="absolute bottom-4 left-4 flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium flex items-center gap-2 hover:bg-white/20 transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium flex items-center gap-2 hover:bg-white/20 transition-colors"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{project.name}</h2>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-3">About the Project</h3>
          <p className="text-gray-400 leading-relaxed">{project.description}</p>
        </div>

        {/* Challenges */}
        <div className="mb-8 p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
              <AlertCircle className="text-red-400" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-white">Challenges Faced</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">{project.challenges}</p>
        </div>

        {/* Improvements */}
        <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
              <Lightbulb className="text-green-400" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-white">Future Improvements</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">{project.improvements}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
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
            Featured Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work showcasing my skills in full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layers size={48} className="text-white/30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] to-transparent opacity-60" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-medium flex items-center gap-2"
                  >
                    View Details
                    <ChevronRight size={18} />
                  </motion.div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.shortDesc}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md text-xs font-medium bg-gray-800 text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-md text-xs font-medium bg-gray-800 text-gray-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
