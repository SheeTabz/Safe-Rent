import React from 'react'
import Footer from '../components/Footer'
import PagesTemplate from '../components/PagesTemplate'
import Services from '../components/Services'

function ServicePage() {
  return (
  <>
  <PagesTemplate pageData="SERVICES"/>
  <Services/>
  <Footer/>
  </>
  )
}

export default ServicePage