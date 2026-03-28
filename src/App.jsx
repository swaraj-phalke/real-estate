import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedResidences from './components/FeaturedResidences'
import ArchitecturalPhilosophy from './components/ArchitecturalPhilosophy'
import Neighborhood from './components/Neighborhood'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import VirtualTour from './components/VirtualTour'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScheduleModal from './components/ScheduleModal'

function App() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="bg-white">
      <Navbar onScheduleClick={() => setIsScheduleModalOpen(true)} />
      <Hero onScheduleClick={() => setIsScheduleModalOpen(true)} />
      <FeaturedResidences />
      <ArchitecturalPhilosophy />
      <Neighborhood />
      <Services />
      <WhyChooseUs />
      <VirtualTour />
      <Contact />
      <Footer />
      <ScheduleModal 
        isOpen={isScheduleModalOpen} 
        onClose={() => setIsScheduleModalOpen(false)} 
      />
    </div>
  )
}

export default App
