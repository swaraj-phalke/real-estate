import { motion } from 'framer-motion'
import { Home, Search, Key, Shield, Camera, Briefcase } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: "Property Search & Selection",
    description: "Curated property discovery tailored to your lifestyle, investment goals, and architectural preferences.",
    features: ["Market Analysis", "Exclusive Listings", "Investment Consultation"]
  },
  {
    icon: Home,
    title: "Luxury Property Management",
    description: "Comprehensive management services to maintain and enhance the value of your luxury real estate portfolio.",
    features: ["Maintenance Oversight", "Tenant Relations", "Property Enhancement"]
  },
  {
    icon: Key,
    title: "Concierge Real Estate Services",
    description: "White-glove service from initial consultation through closing and beyond, ensuring a seamless experience.",
    features: ["Personal Consultation", "Transaction Management", "Post-Sale Support"]
  },
  {
    icon: Shield,
    title: "Investment Advisory",
    description: "Strategic guidance for luxury real estate investments, market trends, and portfolio optimization.",
    features: ["Market Intelligence", "ROI Analysis", "Portfolio Strategy"]
  },
  {
    icon: Camera,
    title: "Virtual & Private Tours",
    description: "Immersive property experiences through cutting-edge virtual reality and exclusive private showings.",
    features: ["360° Virtual Tours", "Private Showings", "Architectural Walkthroughs"]
  },
  {
    icon: Briefcase,
    title: "Legal & Financial Coordination",
    description: "Expert coordination with legal and financial professionals to ensure smooth, secure transactions.",
    features: ["Legal Coordination", "Financing Assistance", "Due Diligence"]
  }
]

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-gradient-to-br from-white via-stone-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Luxury Real Estate <span className="font-normal text-yellow-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive services designed to exceed expectations at every stage of your luxury real estate journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white luxury-shadow hover-glow rounded-none p-8 h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Hover Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/50 rounded-none transition-all duration-300"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
              />

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-light text-gray-900 mb-6">
            Ready to Experience Luxury Service?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our expert team guide you through your luxury real estate journey with personalized, white-glove service.
          </p>
          <button className="magnetic-button px-12 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium rounded-none hover:shadow-2xl transition-all duration-300">
            Schedule Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services