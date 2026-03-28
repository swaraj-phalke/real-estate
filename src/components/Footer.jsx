import { motion } from 'framer-motion'
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  const navigationLinks = [
    { name: 'Properties', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' }
  ]

  return (
    <footer className="bg-stone-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-3xl font-light mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Luxury<span className="text-yellow-400">Estates</span>
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              Defining sophistication in luxury real estate. Where architecture meets art, 
              and dreams become addresses.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-medium mb-6 text-yellow-400">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <motion.li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-lg"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-medium mb-6 text-yellow-400">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <p>+1 (555) 123-4567</p>
              <p>[email]</p>
              <p>[address]</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <motion.p 
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              © 2024 LuxuryEstates. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Logo */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-16 h-16 border-2 border-yellow-400 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer