'use client'
import { motion } from 'framer-motion'

export default function TshirtPreview() {
  return (
    <div className="relative w-full h-[400px] glass-effect rounded-lg overflow-hidden group">
      {/* T-shirt base shape */}
      <motion.div 
        className="absolute top-[15%] left-[50%] w-[200px] h-[250px] -translate-x-1/2"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Collar */}
        <div className="absolute top-0 left-1/2 w-[60px] h-[20px] -translate-x-1/2 bg-gradient-to-r from-cloud-200 to-cloud-300 rounded-t-full" />
        
        {/* Body */}
        <div className="absolute top-[20px] left-0 right-0 bottom-0 bg-gradient-to-br from-cloud-200/50 to-cloud-300/50 rounded-lg">
          {/* Design overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cloud-200/20 to-cloud-300/20 backdrop-blur-sm" />
        </div>
        
        {/* Sleeves */}
        <div className="absolute top-[40px] -left-[30px] w-[40px] h-[80px] bg-gradient-to-l from-cloud-200/40 to-cloud-300/40 rounded-l-lg" />
        <div className="absolute top-[40px] -right-[30px] w-[40px] h-[80px] bg-gradient-to-r from-cloud-200/40 to-cloud-300/40 rounded-r-lg" />
      </motion.div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Text */}
      <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl font-bold text-white">Cyber Tee</h3>
        <p className="text-white/60">Collection Future</p>
      </div>
    </div>
  )
} 