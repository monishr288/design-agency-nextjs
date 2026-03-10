'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    title: 'AI Dashboard',
    category: 'Next.js App',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    tags: ['Next.js', 'AI', 'Tailwind'],
    color: 'from-purple-500 to-pink-500',
    size: 'large',
  },
  {
    title: 'E-Commerce',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400',
    tags: ['Next.js', 'Stripe', 'Prisma'],
    color: 'from-blue-500 to-cyan-500',
    size: 'small',
  },
  {
    title: 'Social App',
    category: 'Real-time',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400',
    tags: ['Next.js', 'WebSocket', 'Redis'],
    color: 'from-green-500 to-emerald-500',
    size: 'medium',
  },
  {
    title: 'Analytics',
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    tags: ['Next.js', 'D3', 'Chart.js'],
    color: 'from-orange-500 to-red-500',
    size: 'large',
  },
  {
    title: 'Portfolio',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400',
    tags: ['Next.js', 'Framer', '3D'],
    color: 'from-pink-500 to-purple-500',
    size: 'small',
  },
  {
    title: 'Blog Platform',
    category: 'CMS',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400',
    tags: ['Next.js', 'MDX', 'Contentlayer'],
    color: 'from-cyan-500 to-blue-500',
    size: 'medium',
  },
]

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="portfolio" className="py-32 bg-white dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/10 px-4 py-2 rounded-full mb-4 border border-gray-200 dark:border-gray-700">
            <Eye className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">Our Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Featured</span>{' '}
            <span className="animated-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing our best Next.js applications
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="break-inside-avoid cursor-pointer"
            >
              <div className="bg-white dark:bg-[#1E293B] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all hover:shadow-lg group">
                {/* Image Container */}
                <div className={`relative ${
                  project.size === 'large' ? 'h-96' : 
                  project.size === 'medium' ? 'h-72' : 'h-48'
                }`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} p-6 flex flex-col justify-end`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-white/80 text-sm mb-3">{project.category}</p>
                    
                    <div className="flex gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </button>
                      <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                        <Github className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio