'use client'
import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
        <motion.div 
          className="w-1 h-2 rounded-full mt-2 sun-text"
          style={{ background: 'linear-gradient(to right, #ffd700, #ff8c00)' }}
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  )
} 