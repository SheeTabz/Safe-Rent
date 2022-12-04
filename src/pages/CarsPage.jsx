import React, { useEffect, useState } from 'react'
import CarList from '../components/CarList'
import Footer from '../components/Footer'
import PagesTemplate from '../components/PagesTemplate'


function CarsPage({handleOneCar}) {
  const [cars, setCars] = useState([])
 

useEffect(() => {
  fetch('/cars')
  .then(res => {
    if(res.ok){
      res.json().then(data => setCars(data))
    }
    else {
      res.json().then(err => console.log(err.errors))
    }
  })
}, [])



  return (
    <>
    <PagesTemplate pageData="OUR CARS"/>
    <CarList cars={cars} onClick={handleOneCar} />
    <Footer/>
    </>
   
  )
}

export default CarsPage