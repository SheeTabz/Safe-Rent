import React from 'react'
import Headers from './Headers'
import {services} from './data';

function Services() {
    const data = ['S', 'E','R','V','I','C','E','S']
    console.log(services)
  return (
    <div className='lg:ml-[200px] mt-[150px] flex space-x-12  '>
        <Headers data={data}/>
        <div className='flex flex-col'>
            <h1 className='max-w-4xl font-bold text-3xl'>PROVIDING AMAZING SERVICES TO OUR CLIENTS</h1>
            <div className='mt-8 grid grid-cols-2 gap-x-[90px] gap-y-[60px] ' >
                {services.map(service => {
                    return (
                        <div className='flex items-center space-x-4 max-w-xl'>
                        <div className='text-3xl border-solid bg-slate-100 p-6 rounded-full hover:bg-orange-500 hover:animate-pulse text font-light'>
                            <span>{service.icons}</span></div>
                        <div className='flex flex-col space-y-4'>
                        <h1 className='font-bold hover:text-orange-500'>{service.name}</h1>
                        <p className='text-sm'>{service.description}</p>
                        </div>
                        

                        </div>
                    )
                })}
        </div>
        </div>
        <img src="http://wp.hostlin.com/zagreb/images/resource/services-img.png"/>
    </div>
  )
}

export default Services