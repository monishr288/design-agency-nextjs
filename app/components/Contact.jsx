'use client'

import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, CheckCircle, Instagram, Linkedin } from 'lucide-react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', show: false })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // EmailJS credentials - Replace these with your actual values
      const serviceId = 'service_vzup2dg'      // e.g., 'service_abc123'
      const templateId = 'template_loukek8'    // e.g., 'template_xyz789'
      const publicKey = '05xO3ZEcKGwdqGqXH'      // e.g., 'user_123abc'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'designagencystudio@gmail.com', // Your email where you want to receive messages
        reply_to: formData.email
      }

      const result = await emailjs.send(
        serviceId, 
        templateId, 
        templateParams, 
        publicKey
      )

      if (result.status === 200) {
        setStatus({ type: 'success', show: true })
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus({ type: '', show: false }), 5000)
      }
    } catch (error) {
      console.error('Email send failed:', error)
      setStatus({ type: 'error', show: true })
      setTimeout(() => setStatus({ type: '', show: false }), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 bg-gray-50 dark:bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white dark:bg-white/10 px-4 py-2 rounded-full mb-6 border border-gray-200 dark:border-gray-700">
              <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Get In Touch</span>
            </div>

            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Let's</span>{' '}
              <span className="animated-gradient">Talk</span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Ready to start your Next.js project? We're here to help bring your ideas to life.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: 'Email', value: 'designagencystudio@gmail.com', color: 'from-purple-500 to-pink-500' },
                { icon: Phone, label: 'Phone', value: '+91 9025952561', color: 'from-blue-500 to-cyan-500' },
                { icon: MapPin, label: 'Location', value: 'India', color: 'from-green-500 to-emerald-500' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-white dark:bg-[#1E293B] rounded-xl p-4 flex items-center gap-4 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} p-3`}>
                    <item.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{item.label}</div>
                    <div className="text-gray-900 dark:text-white font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com/nextagency"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5)' }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/monish-r-640479301/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: '#0077b5' }}
              >
                <Linkedin className="w-5 h-5 text-white" />
              </motion.a>

              <motion.a
                href="tel:+91 9025952561"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: '#25D366' }}
              >
                <Phone className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 border border-gray-200 dark:border-gray-700"
          >
            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: status.show ? 1 : 0, y: status.show ? 0 : -20 }}
              className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                status.type === 'success' 
                  ? 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400' 
                  : 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400'
              }`}
            >
              <CheckCircle className="w-5 h-5" />
              <span>
                {status.type === 'success' 
                  ? 'Message sent successfully! We\'ll reply within 24h.' 
                  : 'Failed to send message. Please try again.'}
              </span>
            </motion.div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0F172A] border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0F172A] border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0F172A] border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact