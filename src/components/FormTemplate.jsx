import React from 'react'

function FormTemplate({children}) {
  return (
    <div className='hero h-screen lg:h-[70vh]  flex justify-center items-center container mt-8'>
    <div className=' rounded-4xl h-full w-[500px]  bg-no-repeat bg-center bg-[url("http://wp.hostlin.com/zagreb/images/resource/services-img.png")]'>
    <div className='revie flex flex-col '>
    
     <h1 className=' text-white text-4xl font-bold pt-[100px] text-center font-Prata'>Welcome to <span className="text-orange-500 text-5xl">SafeRent</span></h1>
     <p className='text-white text-3xl  px-7 pt-6'>"Get a ride of your life and enjoy the moment with us." </p>
     </div>
     </div>
     {children}
     </div>
  )
}

export default FormTemplate