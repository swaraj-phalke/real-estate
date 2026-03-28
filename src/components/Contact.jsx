import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [focused, setFocused] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true })
  }

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocused({ ...focused, [field]: false })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setErrors({})
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setFocused({})
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
      
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-br from-stone-900 via-black to-stone-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-8">
              Let's Create Your
              <span className="block font-normal text-yellow-400">Dream Home</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Ready to discover your perfect luxury residence? Our expert team is here to guide you through every step of your journey.
            </p>

            <div className="space-y-8">
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call us</p>
                  <p className="text-white text-lg">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email us</p>
                  <p className="text-white text-lg">[email]</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Visit us</p>
                  <p className="text-white text-lg">[address]</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <motion.svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                </div>
                <h3 className="text-2xl font-medium text-white mb-4">Message Sent!</h3>
                <p className="text-gray-300">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="relative">
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  className={`w-full px-0 py-4 bg-transparent border-0 border-b-2 text-white text-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300 ${
                    errors.name ? 'border-red-500' : 'border-gray-600'
                  }`}
                  required
                />
                <motion.label
                  className={`absolute left-0 text-gray-400 pointer-events-none transition-all duration-300 ${
                    focused.name || formData.name 
                      ? 'text-sm -top-6 text-yellow-400' 
                      : 'text-lg top-4'
                  }`}
                >
                  Full Name
                </motion.label>
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  className={`w-full px-0 py-4 bg-transparent border-0 border-b-2 text-white text-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300 ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  }`}
                  required
                />
                <motion.label
                  className={`absolute left-0 text-gray-400 pointer-events-none transition-all duration-300 ${
                    focused.email || formData.email 
                      ? 'text-sm -top-6 text-yellow-400' 
                      : 'text-lg top-4'
                  }`}
                >
                  Email Address
                </motion.label>
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="relative">
                <motion.input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('phone')}
                  onBlur={() => handleBlur('phone')}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 text-white text-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                />
                <motion.label
                  className={`absolute left-0 text-gray-400 pointer-events-none transition-all duration-300 ${
                    focused.phone || formData.phone 
                      ? 'text-sm -top-6 text-yellow-400' 
                      : 'text-lg top-4'
                  }`}
                >
                  Phone Number
                </motion.label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  rows="4"
                  className={`w-full px-0 py-4 bg-transparent border-0 border-b-2 text-white text-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300 resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-600'
                  }`}
                  required
                />
                <motion.label
                  className={`absolute left-0 text-gray-400 pointer-events-none transition-all duration-300 ${
                    focused.message || formData.message 
                      ? 'text-sm -top-6 text-yellow-400' 
                      : 'text-lg top-4'
                  }`}
                >
                  Tell us about your dream home
                </motion.label>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              {errors.submit && (
                <p className="text-red-400 text-center">{errors.submit}</p>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
                
                {/* Button Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact