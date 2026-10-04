'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tausifislamsheik1@gmail.com',
    href: 'mailto:tausifislamsheik1@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1409-510658',
    href: 'tel:+8801409510658',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+880 1409-510658',
    href: 'https://wa.me/8801409510658',
  },
]

const inputCls =
  'w-full px-4 py-3 rounded-xl bg-[#0A1128]/80 border border-white/[0.08] text-white placeholder-[#5C6E8F] text-sm focus:outline-none focus:border-[#5AA1FF]/50 transition-colors font-poppins'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="eyebrow font-poppins">Get in touch</span>
          <h2 className="section-title font-poppins text-4xl sm:text-5xl mt-5">
            Contact Me
          </h2>
          <p className="section-sub font-poppins max-w-xl mx-auto mt-4">
            Have a project in mind? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 space-y-3"
          >
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="glass-card flex items-center gap-4 p-4 rounded-2xl"
              >
                <span className="w-12 h-12 rounded-xl bg-[#5AA1FF]/12 border border-[#5AA1FF]/20 grid place-items-center shrink-0">
                  <item.icon size={20} className="text-[#5AA1FF]" />
                </span>
                <span>
                  <span className="font-poppins text-[#5C6E8F] text-xs block">{item.label}</span>
                  <span className="font-poppins text-white text-sm font-medium break-all">{item.value}</span>
                </span>
              </a>
            ))}

            <div className="grid grid-cols-2 gap-3">
              <div className="glass-card rounded-2xl p-4">
                <MapPin size={18} className="text-[#5AA1FF] mb-2" />
                <span className="font-poppins text-[#5C6E8F] text-xs block">Location</span>
                <p className="font-poppins text-white text-sm font-medium">Bangladesh</p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <Clock size={18} className="text-emerald-400 mb-2" />
                <span className="font-poppins text-[#5C6E8F] text-xs block">Availability</span>
                <p className="font-poppins text-white text-sm font-medium">Open to Work</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              className="glass-card rounded-3xl p-6 sm:p-8 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-poppins text-xl font-semibold text-white">Send a Message</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" required placeholder="Your name" className={inputCls} />
                <input type="email" required placeholder="your@email.com" className={inputCls} />
              </div>
              <input type="text" required placeholder="What's this about?" className={inputCls} />
              <textarea rows={5} required placeholder="Tell me about your project..." className={`${inputCls} resize-none`} />
              <button type="submit" className="btn-primary-blue font-poppins w-full py-3.5 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2">
                <Send size={16} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
