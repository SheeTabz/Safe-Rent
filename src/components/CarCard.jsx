import React from 'react'

function CarCard({type, level, condition, transition, clas, price, image}) {
  return (
    <div className=' border-solid border-2 border-gray-300 h-[500px] w-[400px]'>
  <div>
    <div>
        <img src={image} alt='Car'/>
    </div>
    
  <div className='p-5'>
  <h1 className=' text-3xl font-bold border-b-solid border-b-2 border-b-gray-500 pb-4'>{type}</h1>
  </div>
        
        <div className='flex justify-between p-5 ' >
        <div className='flex flex-col space-y-4'>
       
        <div className='flex space-x-2 text-sm'>
            <label for='class' className='font-light'>Class:</label>
            <p className='font-bold'>{level}</p>
        </div>
        <div className='flex space-x-2 text-sm'>
            <label for='class' className='font-light'>Air Condition:</label>
            <p className='font-bold'>{condition}</p>
        </div>
        <div className='flex space-x-2 text-sm'>
            <label for='class' className='font-light'>Transition:</label>
            <p className='font-bold'>{transition}</p>
        </div>
        <div className='flex space-x-2 text-sm'>
            <label for='class' className='font-light'>Class:</label>
            <p className='font-bold'>{clas}</p>
        </div>
    </div>
    <div className='flex  justify-center items-center'>
        <p><span className='font-bold text-4xl text-orange-500'>{price}</span>/day</p>
    </div>
    </div>
  </div>
    </div>
  )
}

export default CarCard