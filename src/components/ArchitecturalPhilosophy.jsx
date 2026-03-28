import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ArchitecturalPhilosophy = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section id="about" ref={ref} className="py-32 px-6 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            style={{ y }}
          >
            <div className="relative overflow-hidden ">
              <img
                src="https://images.unsplash.com/file-1635990775102-c9800842e1cdimage?auto=format&fit=crop&q=60&w=416&dpr=2"
                alt="Architectural Detail"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-900/20 to-transparent" />
            </div>

            {/* Timeline Line */}
            <motion.div
              className="absolute -right-8 top-0 w-px bg-gradient-to-b from-yellow-400 to-transparent h-full"
              style={{ opacity }}
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-light mb-8">
                Architectural
                <span className="block font-normal text-yellow-400">Philosophy</span>
              </h2>
            </motion.div>

            <motion.div
              className="space-y-6 text-lg leading-relaxed text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>
                Our properties aren't built. They're <em className="text-yellow-400 font-medium">crafted</em> —
                where geometry meets emotion and design meets purpose.
              </p>

              <p>
                Every line, every curve, every space is intentionally designed to create
                an emotional connection between the inhabitant and their environment.
              </p>

              <p>
                We believe luxury isn't about excess — it's about perfection in every detail,
                harmony in every proportion, and soul in every structure.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-light text-yellow-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">Architectural Awards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-yellow-400 mb-2">25</div>
                <div className="text-sm text-gray-400">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-yellow-400 mb-2">200+</div>
                <div className="text-sm text-gray-400">Luxury Properties</div>
              </div>
            </motion.div>

            <motion.button
              className="magnetic-button mt-8 px-8 py-4 border border-yellow-400 text-yellow-400 font-medium hover:bg-yellow-400 hover:text-stone-900 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Our Legacy
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ArchitecturalPhilosophy