'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface ProductCardProps {
  title: string
  description: string
  imagePath: string
  price: string
}

export default function ProductCard({ title, description, imagePath, price }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div 
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-[4/5] rounded-lg overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={imagePath}
            alt={title}
            fill
            className={`
              object-cover 
              transform group-hover:scale-105 transition-transform duration-500
              ${imageLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoadingComplete={() => setImageLoaded(true)}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/60 text-sm mb-3">{description}</p>
        <p className="text-cloud-200 font-bold">{price}</p>
      </div>
    </motion.div>
  )
} 