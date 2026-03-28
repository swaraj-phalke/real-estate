import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: "The City",
    subtitle: "Urban Sophistication",
    description: "Where culture, commerce, and creativity converge in architectural harmony",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "The Calm",
    subtitle: "Serene Sanctuaries",
    description: "Private retreats that offer tranquility amidst the world's energy",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "The Culture",
    subtitle: "Artistic Heritage",
    description: "Living amongst galleries, theaters, and the finest cultural institutions",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    title: "The Nature",
    subtitle: "Natural Beauty",
    description: "Where luxury meets landscape in perfect environmental harmony",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  }
]

const Neighborhood = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  return (
    <section id="neighborhoods" className="relative h-screen overflow-hidden bg-black">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1 : 1.1
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${slide.image}')`
            }}
          />
        </motion.div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-6 max-w-4xl">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-light mb-4">
              {slides[currentSlide].title}
            </h2>
            <h3 className="text-2xl md:text-3xl font-normal text-yellow-400 mb-8">
              {slides[currentSlide].subtitle}
            </h3>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6">
          <button
            onClick={prevSlide}
            className="p-3 glass-effect rounded-full text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 glass-effect rounded-full text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-yellow-400"
          initial={{ width: "0%" }}
          animate={{ width: isAutoPlaying ? "100%" : "0%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </section>
  )
}

export default Neighborhood