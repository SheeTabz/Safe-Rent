import { data } from 'autoprefixer'
import React from 'react'
import CarCard from './CarCard'
import {cars} from './data'

function CarList() {
  return (
    <div className='container m-auto mt-6 grid grid-cols-3 gap-y-3'>
        {cars.map((car,index)=>{
            return <div className=' '>
             <CarCard
        type ={car.name}
        level ={car.class}
         condition={car.condition}
          transition={car.trans}
           clas={car.class}
            price={car.price}
            image={car.image}/>
            </div>
        })}
       
    </div>
  )
}

export default CarList