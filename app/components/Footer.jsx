'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Heart, Sparkles, ArrowUp, Instagram } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-white dark:bg-[#0F172A] border-t border-gray-200 dark:border-gray-800">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 dark:bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/5 dark:bg-pink-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <span className="text-xl font-bold animated-gradient">
                NextAgency
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Building the future of web with cutting-edge Next.js technology. 
              Creating exceptional digital experiences that inspire.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {/* GitHub */}
              <motion.a
                href="https://github.com/nextagency"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-100 dark:bg-white/10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#333'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F3F4F6'
                  e.currentTarget.style.color = '#4B5563'
                }}
              >
                <Github size={18} />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/monish-r-640479301/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-100 dark:bg-white/10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0077b5'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F3F4F6'
                  e.currentTarget.style.color = '#4B5563'
                }}
              >
                <Linkedin size={18} />
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://instagram.com/nextagency"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-100 dark:bg-white/10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5)'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F3F4F6'
                  e.currentTarget.style.color = '#4B5563'
                }}
              >
                <Instagram size={18} />
              </motion.a>

              {/* Twitter/X */}
              <motion.a
                href="https://twitter.com/nextagency"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-100 dark:bg-white/10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#000000'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F3F4F6'
                  e.currentTarget.style.color = '#4B5563'
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-gray-900 dark:text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Services', 'Portfolio', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-600 dark:bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-gray-900 dark:text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Next.js Development',
                'UI/UX Design',
                'Performance Optimization',
                'Digital Strategy'
              ].map((item, i) => (
                <li key={i}>
                  <span className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-gray-900 dark:text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <Mail size={16} className="text-purple-600 dark:text-purple-400" />
                <a href="mailto:designagencystudio@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  designagencystudio@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <Phone size={16} className="text-purple-600 dark:text-purple-400" />
                <a href="tel:+91 9025952561" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  +91 9025952561
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <MapPin size={16} className="text-purple-600 dark:text-purple-400" />
                <span>India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-2">
            © 2026 NextAgency. All rights reserved.
            <Heart size={14} className="text-pink-500 dark:text-pink-400 animate-pulse" />
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-xs transition-colors">
              Terms of Service
            </a>
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-10 h-10 bg-gray-100 dark:bg-white/10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer