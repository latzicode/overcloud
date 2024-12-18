'use client'
import { motion } from 'framer-motion'
import ParticlesBackground from '@/components/ParticlesBackground'
import TshirtPreview from '@/components/TshirtPreview'
import ScrollIndicator from '@/components/ScrollIndicator'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-cloud-200/10 to-cloud-300/20" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white">OVER</span>
            <span className="bg-gradient-to-r from-cloud-200 via-cloud-300 to-cloud-400 text-transparent bg-clip-text">
              CLOUD
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl text-white/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Dream It, Wear It.
          </motion.p>
          
          <motion.button 
            className="px-8 py-3 bg-gradient-to-r from-cloud-200 to-cloud-300 rounded-full text-white 
                     hover:shadow-lg hover:shadow-cloud-200/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir la Collection
          </motion.button>
        </div>
        <ScrollIndicator />
      </section>

      {/* Preview Section */}
      <section className="relative py-32 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <span className="text-gradient">
              Collection Future Wear
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map(product => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}