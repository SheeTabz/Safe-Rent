import React from 'react'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import PagesTemplate from '../components/PagesTemplate'

function AboutPage() {
  return (
   <>
   <PagesTemplate pageData="ABOUT US"/>
   <AboutUs/>
   <Footer/>
   </>
  )
}

export default AboutPage