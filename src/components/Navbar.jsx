import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const Navbar = ({ onScheduleClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Get all sections
      const sections = ['properties', 'about', 'neighborhoods', 'services', 'why-choose-us', 'contact']
      const scrollPosition = window.scrollY + 100

      // Find current active section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }

      // Default to hero if at top
      if (window.scrollY < 100) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Properties', href: '#properties', id: 'properties' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Neighborhoods', href: '#neighborhoods', id: 'neighborhoods' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Why Us', href: '#why-choose-us', id: 'why-choose-us' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md py-4' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-2xl font-light">
              <a href="/">Luxury<span className="text-yellow-400 font-normal">Estates</span>
              </a>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className={`transition-colors duration-300 font-light relative ${
                  activeSection === link.id 
                    ? 'text-yellow-400' 
                    : 'text-white hover:text-yellow-400'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"
                    layoutId="activeIndicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a 
              href="tel:+15551234567"
              className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <Phone size={18} />
              <span className="font-light">+1 (555) 123-4567</span>
            </a>
            <button 
              onClick={onScheduleClick}
              className="magnetic-button px-6 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-light"
            >
              Schedule Visit
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="pt-6 pb-4 space-y-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className={`block transition-colors duration-300 font-light py-2 ${
                  activeSection === link.id 
                    ? 'text-yellow-400' 
                    : 'text-white hover:text-yellow-400'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : -20 
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="pt-4 border-t border-gray-700">
              <a 
                href="tel:+15551234567"
                className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors duration-300 mb-4"
              >
                <Phone size={18} />
                <span className="font-light">+1 (555) 123-4567</span>
              </a>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  onScheduleClick && onScheduleClick()
                }}
                className="w-full px-6 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-light"
              >
                Schedule Visit
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar