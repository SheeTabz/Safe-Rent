import React from 'react'

function Footer() {
    const data = ["HOME","ABOUT US", "SERVICES", "OUR CARS"]
  return (
    <div className='mt-[150px]  bg-zinc-800'>
    <div className='mx-[100px] flex items-center py-7 justify-around' >
  <div >
    <h1>Safe Rent</h1>
   </div>
   <div >
    <ul className='flex  space-x-7'>
        {data.map((header, index) => {
            return <li className='hover:text-orange-600 text-slate-500 font-bold text-sm' key={index}>{header}</li>
        })}
    </ul>
   </div>
<div>
<p className='text-white'>&copy; 2022  All Rights preseved</p>
</div>
    </div>
    </div>
  )
}

export default Footer