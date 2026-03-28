import { motion } from 'framer-motion'
import { Play, Eye, X, Volume2, VolumeX, Maximize } from 'lucide-react'
import { useState, useRef } from 'react'

const VirtualTour = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true) // Start muted for better UX
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const videoRef = useRef(null)
  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
    setIsLoading(true)
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsLoading(false)
        setIsPaused(false)
      }).catch(() => {
        setIsLoading(false)
      })
    }
  }

  const handleCloseVideo = () => {
    setIsVideoPlaying(false)
    setIsLoading(false)
    setIsPaused(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPaused(false)
      } else {
        videoRef.current.pause()
        setIsPaused(true)
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
      }
      setIsFullscreen(!isFullscreen)
    }
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video/Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
      </motion.div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      {/* Video Player Modal */}
      {isVideoPlaying && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Video */}
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={false}
              muted={isMuted}
              autoPlay
              onEnded={handleCloseVideo}
              onLoadStart={() => setIsLoading(true)}
              onCanPlay={() => setIsLoading(false)}
              onPause={() => setIsPaused(true)}
              onPlay={() => setIsPaused(false)}
              poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            >
              {/* Using multiple video sources for better compatibility */}
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4" type="video/mp4" />
              {/* Fallback for browsers that don't support the video */}
              <div className="flex items-center justify-center h-full bg-black text-white">
                <div className="text-center">
                  <p className="text-xl mb-4">Video not supported in your browser</p>
                  <p className="text-gray-400">Please try a different browser or contact us for assistance</p>
                </div>
              </div>
            </video>

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30">
              {/* Top Controls */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                <div className="text-white">
                  <h3 className="text-2xl font-light">Luxury Penthouse Virtual Tour</h3>
                  <p className="text-gray-300">Experience luxury living in 360°</p>
                </div>
                <button
                  onClick={handleCloseVideo}
                  className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-300"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Bottom Controls */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleMute}
                    className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-300"
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-300"
                  >
                    <Maximize size={20} />
                  </button>
                </div>
                <div className="text-white text-sm">
                  <span className="bg-black/50 px-3 py-1 rounded-full">HD Quality • 360° View</span>
                </div>
              </div>

              {/* Loading Spinner */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="w-16 h-16 border-4 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin"></div>
                </div>
              )}

              {/* Center Play/Pause on click */}
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={togglePlayPause}
              >
                {isPaused && !isLoading && (
                  <motion.div
                    className="w-20 h-20 bg-black/50 rounded-full flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Eye className="w-16 h-16 mx-auto mb-8 text-yellow-400" />
            
            <h2 className="text-5xl md:text-7xl font-light mb-8">
              Experience
              <span className="block font-normal text-yellow-400">Luxury Virtually</span>
            </h2>
            
            <p className="text-xl md:text-2xl font-light mb-12 opacity-90 max-w-2xl mx-auto">
              Step inside our most exclusive properties from anywhere in the world with our immersive virtual tours
            </p>

            {/* Play Button */}
            <motion.button
              onClick={handlePlayVideo}
              className="group relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/20 glass-effect hover:bg-yellow-400 transition-all duration-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-8 h-8 text-white group-hover:text-black ml-1 transition-colors duration-300" />
              
              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/50"
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [1, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.button>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-light text-gray-300 mb-4">Click to start virtual tour</p>
              
              <div className="flex justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>360° Views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Interactive Features</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>HD Quality</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-yellow-400 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-32 w-6 h-6 border-2 border-yellow-400 rounded-full opacity-40"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  )
}

export default VirtualTour