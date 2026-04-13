'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Shield, Crown } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

const Hero = () => {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showWelcome, setShowWelcome] = useState(true)
  const [mounted, setMounted] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setMounted(true)
    
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 5000)

    const handleMouseMove = (e) => {
      if (window.innerWidth > 1024) {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20
        })
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timer)
    }
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Predefined positions for dots - using percentages instead of window
  const dotPositions = useRef(
    [...Array(40)].map(() => ({
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      endX: Math.random() * 100,
      endY: Math.random() * 100,
      duration: 30 + Math.random() * 30,
      delay: Math.random() * 5
    }))
  ).current

  const floatPositions = useRef(
    [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      direction: Math.random() > 0.5 ? 1 : -1,
      duration: 12 + Math.random() * 15,
      delay: Math.random() * 3
    }))
  ).current

  const sparklePositions = useRef(
    [...Array(30)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 5 + Math.random() * 6,
      delay: Math.random() * 2
    }))
  ).current

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen overflow-hidden bg-white dark:bg-[#0F172A] pt-24 md:pt-28 lg:pt-32"
    >
      {/* Background Moving Dots - Only render on client */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {dotPositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-purple-500/60 dark:bg-purple-400/60 rounded-full"
              animate={{
                left: [`${pos.startX}%`, `${pos.endX}%`],
                top: [`${pos.startY}%`, `${pos.endY}%`],
              }}
              transition={{
                duration: pos.duration,
                repeat: Infinity,
                delay: pos.delay,
                ease: "linear",
                repeatType: "reverse"
              }}
            />
          ))}
          
          {/* Additional floating dots */}
          {floatPositions.map((pos, i) => (
            <motion.div
              key={`float-${i}`}
              className="absolute w-2 h-2 bg-pink-500/60 dark:bg-pink-400/60 rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, pos.direction * 50, 0],
              }}
              transition={{
                duration: pos.duration,
                repeat: Infinity,
                delay: pos.delay,
                ease: "easeInOut"
              }}
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
            />
          ))}
          
          {/* Small sparkle dots */}
          {sparklePositions.map((pos, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-1 h-1 bg-yellow-400/70 dark:bg-yellow-300/70 rounded-full"
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: pos.duration,
                repeat: Infinity,
                delay: pos.delay,
              }}
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
            />
          ))}
        </div>
      )}

      {/* Gradient Orbs - These move with cursor */}
      <motion.div 
        style={{ x: mousePosition.x, y: mousePosition.y }}
        className="absolute top-40 left-20 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        style={{ x: -mousePosition.x, y: -mousePosition.y }}
        className="absolute bottom-40 right-20 w-96 h-96 bg-pink-600/10 dark:bg-pink-600/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: showWelcome ? 1 : 0, y: showWelcome ? 0 : -50 }}
        transition={{ duration: 0.5 }}
        className="fixed top-28 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>
        <span className="text-base font-medium">Welcome to NextAgency! 👋</span>
        <button 
          onClick={() => setShowWelcome(false)}
          className="ml-4 text-white/80 hover:text-white"
        >
          ✕
        </button>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/10 px-4 py-2 rounded-full mb-6 border border-gray-200 dark:border-gray-700 mx-auto lg:mx-0"
            >
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Next.js 14 • React 18 • Tailwind</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Create</span>
              <br />
              <span className="animated-gradient text-5xl md:text-6xl lg:text-7xl">
                Digital Magic
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">With Next.js</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              Building the future of web with modern technologies. 
              Fast, responsive, and beautiful experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all text-sm md:text-base"
              >
                Start Creating
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('portfolio')}
                className="px-6 md:px-8 py-3 md:py-4 bg-white dark:bg-transparent text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-white/10 transition-all text-sm md:text-base"
              >
                View Projects
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto lg:mx-0">
              {[
                { icon: Zap, value: '50+', label: 'Projects', color: 'from-yellow-400 to-orange-400' },
                { icon: Shield, value: '100%', label: 'Satisfaction', color: 'from-green-400 to-emerald-400' },
                { icon: Crown, value: '15+', label: 'Awards', color: 'from-purple-400 to-pink-400' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 rounded-lg bg-gradient-to-r ${stat.color} p-2 md:p-2.5`}>
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Orbit Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[550px] mt-4 lg:mt-0 order-1 lg:order-2"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Rotating Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full border-2 border-dashed border-purple-400/50 dark:border-purple-400/30"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full border-2 border-dotted border-pink-400/50 dark:border-pink-400/30"
              />

              {/* Main Logo Container */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-64 lg:h-64"
              >
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl lg:blur-3xl opacity-20 dark:opacity-30 animate-pulse" />
                
                {/* Main Card */}
                <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 dark:from-purple-900/20 dark:to-pink-900/20 backdrop-blur-xl rounded-full border border-white/20 dark:border-purple-500/30 shadow-2xl flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,white_10deg,transparent_30deg)] dark:bg-[conic-gradient(from_0deg,transparent_0deg,purple_10deg,transparent_30deg)] opacity-20"
                  />
                  
                  <div className="text-center relative z-10">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-1 lg:mb-2"
                    >
                      DS
                    </motion.div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 1, duration: 1 }}
                      className="h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mx-auto mb-1 lg:mb-2"
                    />
                    <p className="text-gray-600 dark:text-gray-400 text-[8px] sm:text-xs lg:text-sm tracking-widest">DESIGN STUDIO</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Icons */}
              {['⚛️', '▲', '🎨', '💻', '📱', '🚀'].map((emoji, i) => (
                <motion.div
                  key={i}
                  className="absolute text-xl sm:text-2xl lg:text-3xl"
                  animate={{
                    y: [0, -15, 0],
                    x: [0, i % 2 === 0 ? 8 : -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                  }}
                  style={{
                    top: `${15 + i * 10}%`,
                    left: i % 2 === 0 ? '8%' : '82%',
                  }}
                >
                  {emoji}
                </motion.div>
              ))}

              {/* Orbiting Dots - Responsive */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 dark:bg-purple-400 rounded-full"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                >
                  <div style={{
                    transform: `rotate(${i * 45}deg) translateX(${
                      typeof window !== 'undefined' && window.innerWidth < 480 ? '50px' : 
                      typeof window !== 'undefined' && window.innerWidth < 768 ? '65px' : 
                      typeof window !== 'undefined' && window.innerWidth < 1024 ? '90px' : '140px'
                    })`,
                  }} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero