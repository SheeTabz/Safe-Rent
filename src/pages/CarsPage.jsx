import React from 'react'
import CarList from '../components/CarList'
import PagesTemplate from '../components/PagesTemplate'


function CarsPage() {
  return (
    <>
    <PagesTemplate pageData="OUR CARS"/>
    <CarList
    />
    </>
   
  )
}

export default CarsPage