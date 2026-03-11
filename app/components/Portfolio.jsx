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
    liveLink: 'https://example.com/ai-dashboard',
    githubLink: 'https://github.com/example/ai-dashboard',
  },
  {
    title: 'E-Commerce',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400',
    tags: ['Next.js', 'Stripe', 'Prisma'],
    color: 'from-blue-500 to-cyan-500',
    size: 'small',
    liveLink: 'https://example.com/ecommerce',
    githubLink: 'https://github.com/example/ecommerce',
  },
  {
    title: 'Social App',
    category: 'Real-time',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400',
    tags: ['Next.js', 'WebSocket', 'Redis'],
    color: 'from-green-500 to-emerald-500',
    size: 'medium',
    liveLink: 'https://example.com/social-app',
    githubLink: 'https://github.com/example/social-app',
  },
  {
    title: 'Analytics',
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    tags: ['Next.js', 'D3', 'Chart.js'],
    color: 'from-orange-500 to-red-500',
    size: 'large',
    liveLink: 'https://example.com/analytics',
    githubLink: 'https://github.com/example/analytics',
  },
  {
    title: 'Portfolio',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400',
    tags: ['Next.js', 'Framer', '3D'],
    color: 'from-pink-500 to-purple-500',
    size: 'small',
    liveLink: 'https://example.com/portfolio',
    githubLink: 'https://github.com/example/portfolio',
  },
  {
    title: 'Blog Platform',
    category: 'CMS',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400',
    tags: ['Next.js', 'MDX', 'Contentlayer'],
    color: 'from-cyan-500 to-blue-500',
    size: 'medium',
    liveLink: 'https://example.com/blog',
    githubLink: 'https://github.com/example/blog',
  },
]

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on component mount
  useState(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768)
    }
  }, [])

  const handleCardClick = (index) => {
    if (isMobile) {
      // On mobile, toggle overlay on click
      setActiveIndex(activeIndex === index ? null : index)
    }
  }

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
              onHoverStart={() => !isMobile && setActiveIndex(index)}
              onHoverEnd={() => !isMobile && setActiveIndex(null)}
              onClick={() => handleCardClick(index)}
              className="break-inside-avoid cursor-pointer"
            >
              <div className="bg-white dark:bg-[#1E293B] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all hover:shadow-lg group relative">
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay - Visible on hover (desktop) or click (mobile) */}
                  <motion.div
                    animate={{
                      opacity: (isMobile ? activeIndex === index : activeIndex === index) ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} p-4 sm:p-6 flex flex-col justify-end`}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-white/80 text-xs sm:text-sm mb-2 sm:mb-3">{project.category}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 sm:px-2 sm:py-1 bg-white/20 rounded-full text-[10px] sm:text-xs text-white">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 sm:gap-3">
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-1.5 sm:p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-1.5 sm:p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Tap indicator for mobile */}
                  {isMobile && activeIndex !== index && (
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                      Tap to view
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add this style to your component or global CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .portfolio-overlay {
            pointer-events: auto;
          }
        }
      `}</style>
    </section>
  )
}

export default Portfolio