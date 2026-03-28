import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, Calendar, Clock, User, Mail, Phone, MapPin } from 'lucide-react'

const ScheduleModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyInterest: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })

  const [focused, setFocused] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyInterest: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      })
      setFocused({})
      onClose()
    }, 3000)
  }

  const propertyTypes = [
    'Penthouse',
    'Villa',
    'Estate',
    'Residence',
    'Townhouse',
    'Other'
  ]

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM'
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-none max-w-2xl w-full max-h-[90vh] overflow-y-auto luxury-shadow"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-gray-200">
              <div>
                <h2 className="text-3xl font-light text-gray-900">Schedule Your Visit</h2>
                <p className="text-gray-600 mt-2">Experience luxury in person</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleBlur('name')}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                        required
                      />
                      <label
                        className={`absolute left-0 text-gray-500 pointer-events-none transition-all duration-300 ${
                          focused.name || formData.name 
                            ? 'text-sm -top-5 text-yellow-400' 
                            : 'text-base top-3'
                        }`}
                      >
                        <User size={16} className="inline mr-2" />
                        Full Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                        required
                      />
                      <label
                        className={`absolute left-0 text-gray-500 pointer-events-none transition-all duration-300 ${
                          focused.email || formData.email 
                            ? 'text-sm -top-5 text-yellow-400' 
                            : 'text-base top-3'
                        }`}
                      >
                        <Mail size={16} className="inline mr-2" />
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={() => handleBlur('phone')}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                      required
                    />
                    <label
                      className={`absolute left-0 text-gray-500 pointer-events-none transition-all duration-300 ${
                        focused.phone || formData.phone 
                          ? 'text-sm -top-5 text-yellow-400' 
                          : 'text-base top-3'
                      }`}
                    >
                      <Phone size={16} className="inline mr-2" />
                      Phone Number
                    </label>
                  </div>

                  {/* Property Interest */}
                  <div className="relative">
                    <select
                      name="propertyInterest"
                      value={formData.propertyInterest}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                      required
                    >
                      <option value="">Select Property Type</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <label className="absolute -top-5 left-0 text-sm text-yellow-400">
                      <MapPin size={16} className="inline mr-2" />
                      Property Interest
                    </label>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                        required
                      />
                      <label className="absolute -top-5 left-0 text-sm text-yellow-400">
                        <Calendar size={16} className="inline mr-2" />
                        Preferred Date
                      </label>
                    </div>

                    <div className="relative">
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                        required
                      >
                        <option value="">Select Time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      <label className="absolute -top-5 left-0 text-sm text-yellow-400">
                        <Clock size={16} className="inline mr-2" />
                        Preferred Time
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur('message')}
                      rows="4"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 focus:border-yellow-400 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your specific requirements..."
                    />
                    <label
                      className={`absolute left-0 text-gray-500 pointer-events-none transition-all duration-300 ${
                        focused.message || formData.message 
                          ? 'text-sm -top-5 text-yellow-400' 
                          : 'text-base top-3'
                      }`}
                    >
                      Additional Message
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium text-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>Scheduling...</span>
                      </div>
                    ) : (
                      'Schedule My Visit'
                    )}
                  </motion.button>
                </form>
              ) : (
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
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">Visit Scheduled!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest. Our luxury real estate specialist will contact you within 24 hours to confirm your appointment.
                  </p>
                  <p className="text-sm text-gray-500">
                    This window will close automatically...
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScheduleModal