import { motion } from 'framer-motion'
import { useState } from 'react'

const properties = [
  {
    id: 1,
    title: "Manhattan Penthouse",
    location: "New York, NY",
    price: "$12.5M",
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "Malibu Ocean Villa",
    location: "Malibu, CA",
    price: "$18.2M",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 3,
    title: "Beverly Hills Estate",
    location: "Beverly Hills, CA",
    price: "$25.8M",
    type: "Estate",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80"
  },
  {
    id: 4,
    title: "Miami Beach Residence",
    location: "Miami Beach, FL",
    price: "$9.7M",
    type: "Residence",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  }
]

const FeaturedResidences = () => {
  const [hoveredProperty, setHoveredProperty] = useState(null)

  return (
    <section id="properties" className="py-32 px-6 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Featured <span className="font-normal">Residences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated collection of architectural masterpieces that redefine luxury living
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              className="group relative overflow-hidden luxury-shadow rounded-none cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProperty(property.id)}
              onMouseLeave={() => setHoveredProperty(null)}
            >
              <div className="relative h-96 overflow-hidden">
                <motion.img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredProperty === property.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                  animate={{
                    opacity: hoveredProperty === property.id ? 1 : 0.7
                  }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-8 text-white"
                  animate={{
                    y: hoveredProperty === property.id ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-medium mb-2">{property.title}</h3>
                      <p className="text-gray-300 mb-1">{property.location}</p>
                      <p className="text-sm text-yellow-400">{property.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-light">{property.price}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-4 right-4 px-3 py-1 glass-effect rounded-full text-white text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredProperty === property.id ? 1 : 0,
                    scale: hoveredProperty === property.id ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                >
                  View Details
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedResidences