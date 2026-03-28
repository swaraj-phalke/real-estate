/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = ({ onScheduleClick }) => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 parallax-element"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZSUyMGJ1aWxkaW5nfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500')`
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-6 max-w-4xl">
          <motion.h1
            className="text-6xl md:text-7xl font-light mb-6 tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Where Architecture
            <span className="block font-normal bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Meets Art
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-light mb-12 opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Luxury properties designed for those who live ahead of their time
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <button className="magnetic-button px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium rounded-none hover:shadow-2xl transition-all duration-300">
              Explore Residences
            </button>
            <button
              onClick={onScheduleClick}
              className="magnetic-button px-8 py-4 border border-white text-white font-medium rounded-none glass-effect hover:bg-white hover:text-black transition-all duration-300"
            >
              Schedule a Visit
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-sm font-light mb-2">Scroll to explore</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero