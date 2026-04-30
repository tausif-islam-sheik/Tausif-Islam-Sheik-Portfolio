'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tausif.sheik@example.com',
    href: 'mailto:tausif.sheik@example.com',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1XXX-XXXXXX',
    href: 'tel:+8801XXXXXXXXX',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+880 1XXX-XXXXXX',
    href: 'https://wa.me/8801XXXXXXXXX',
    color: 'from-green-400 to-green-600',
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
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
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl glass-card group"
                  whileHover={{ x: 8 }}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">{item.label}</span>
                    <span className="text-white font-medium group-hover:text-purple-400 transition-colors">{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="glass-card rounded-xl p-4">
                <MapPin size={20} className="text-purple-400 mb-2" />
                <span className="text-gray-400 text-sm">Location</span>
                <p className="text-white font-medium">Bangladesh</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <Clock size={20} className="text-purple-400 mb-2" />
                <span className="text-gray-400 text-sm">Availability</span>
                <p className="text-white font-medium">Open to Work</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full btn-primary py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
