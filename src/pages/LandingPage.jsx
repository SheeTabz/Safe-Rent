import React from 'react'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import OurCars from '../components/OurCars'
import Services from '../components/Services'
// import Testimonials from '../components/Testimonials'

function LandingPage() {
  return (
    <div className=''>
    <HeroSection/>
    <AboutUs/>
    <Services/>
    <OurCars/>
  
    <Footer/>
    </div>
  )
}

export default LandingPage