import React from 'react'
import ColorButton from '../Buttons/ColorButton'
import WhiteButton from '../Buttons/WhiteButton'

function HeroSection() {
  return (
    <div className='hero h-[50vh] lg:h-[90vh] text-white'>
       <div className=' h-full w-full bg-no-repeat bg-cover bg-[url("https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb")]'>
       <div className='transBg'>
      <div className=' flex flex-col justify-center items-center justify-items-center sm:mx-[200px] lg:mx-[400px] space-y-6'>
        <h1 className='mt-[80px] lg:mt-[200px] font-bold text-5xl'>NEED A <span className='text-orange-400'>RIDE </span>?</h1>
        <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nobis quasi pariatur nemo ea, ullam id. Porro harum id, aliquam sit nobis itaque ex suscipit impedit excepturi? Non, minus eveniet!</p>
        <div className='flex space-x-2'>
          <WhiteButton data='Make a call'/>
        <ColorButton data='Booking'/>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default HeroSection