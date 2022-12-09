
import React from 'react'
import { Link} from 'react-router-dom'
import CarCard from './CarCard'


function CarList({cars ,onClick}) {
return (
    <div className='container m-auto mt-6 grid grid-cols-3 gap-y-3'>
        {cars.map((car,index)=>{
            return <Link to={`/cars/${car.id}`} onClick={()=> onClick(car.id)}>
            <div className=' '>
             <CarCard
        type ={car.name}
        level ={car.level}
         condition={car.conditioning}
          transition={car.transmision}
           clas={car.level}
            price={car.price}
            image={car.image_url}/>
            </div>
            </Link>
        })}
       
    </div>
  )
}

export default CarList