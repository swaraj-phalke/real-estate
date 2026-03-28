import { motion } from 'framer-motion'
import { MapPin, Award, Users } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Strategically positioned in the world's most coveted neighborhoods, where prestige meets convenience and luxury knows no bounds."
  },
  {
    icon: Award,
    title: "Architectural Excellence",
    description: "Award-winning designs that push the boundaries of innovation while honoring timeless principles of beauty and functionality."
  },
  {
    icon: Users,
    title: "Personalized Guidance",
    description: "White-glove service from our expert team who understand that finding the perfect home is about more than just square footage."
  }
]

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-32 px-6 bg-gradient-to-br from-stone-50 via-white to-stone-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-stone-400 to-stone-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Why Choose <span className="font-normal text-yellow-600">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three pillars that define our commitment to delivering extraordinary real estate experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 bg-white luxury-shadow hover-glow rounded-none h-full">
                {/* Icon */}
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Border Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/50 rounded-none transition-all duration-300"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                />

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="magnetic-button px-12 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium rounded-none hover:shadow-2xl transition-all duration-300">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs