import React from 'react'
import AboutUs from '../components/AboutUs'
import HeroSection from '../components/HeroSection'
import OurCars from '../components/OurCars'
import Services from '../components/Services'

function LandingPage() {
  return (
    <div className=''>
    <HeroSection/>
    <AboutUs/>
    <Services/>
    <OurCars/>
    </div>
  )
}

export default LandingPage