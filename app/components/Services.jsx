'use client'

import { motion } from 'framer-motion'
import { Code, Palette, TrendingUp, Camera, Sparkles, Zap } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon: <Code size={32} />,
    title: 'Next.js Development',
    desc: 'Building fast, SEO-friendly React applications with the latest Next.js features.',
    color: 'from-blue-500 to-cyan-500',
    features: ['App Router', 'Server Components', 'API Routes'],
  },
  {
    icon: <Palette size={32} />,
    title: 'Modern UI/UX',
    desc: 'Creating stunning, responsive interfaces with Tailwind and Framer Motion.',
    color: 'from-purple-500 to-pink-500',
    features: ['Animations', 'Responsive', 'Interactive'],
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Performance',
    desc: 'Optimizing for speed with ISR, SSG, and automatic image optimization.',
    color: 'from-green-500 to-emerald-500',
    features: ['Lazy Loading', 'Caching', 'CDN'],
  },
  {
    icon: <Camera size={32} />,
    title: 'Digital Strategy',
    desc: 'Comprehensive approach to building scalable web applications.',
    color: 'from-orange-500 to-red-500',
    features: ['SEO', 'Analytics', 'Growth'],
  },
]

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="services" className="py-32 bg-gray-50 dark:bg-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white dark:bg-white/10 px-4 py-2 rounded-full mb-4 border border-gray-200 dark:border-gray-700">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">What We Offer</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Modern</span>{' '}
            <span className="animated-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Leveraging cutting-edge technology to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              className="group relative"
            >
              {/* Glow Effect - This creates the glow on hover */}
              <motion.div
                animate={{
                  opacity: activeIndex === index ? 0.3 : 0,
                  scale: activeIndex === index ? 1.2 : 0.8,
                }}
                transition={{ duration: 0.3 }}
                className={`absolute -inset-4 bg-gradient-to-r ${service.color} rounded-3xl blur-2xl -z-10`}
              />

              {/* Card */}
              <div className="bg-white dark:bg-[#1E293B] rounded-2xl p-6 h-full flex flex-col border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all hover:shadow-lg relative z-10">
                {/* Icon */}
                <motion.div
                  animate={{
                    scale: activeIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-r ${service.color} p-4`}
                >
                  <div className="w-full h-full text-white">
                    {service.icon}
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">{service.desc}</p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Zap className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '30+', label: 'Happy Clients' },
            { value: '15+', label: 'Team Members' },
            { value: '4.9', label: 'Rating' },
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-[#1E293B] rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services