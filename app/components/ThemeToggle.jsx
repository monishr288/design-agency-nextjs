'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="relative w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDarkMode ? 180 : 0,
          scale: isDarkMode ? 1 : 0,
          opacity: isDarkMode ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon size={18} className="text-purple-400" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: isDarkMode ? 0 : -180,
          scale: isDarkMode ? 0 : 1,
          opacity: isDarkMode ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun size={18} className="text-yellow-500" />
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle