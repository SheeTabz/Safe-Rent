import React from 'react'
import { Link } from 'react-router-dom'
import {navData} from './data'

function Footer() {
    const data = ["HOME","ABOUT US", "SERVICES", "OUR CARS"]
  return (
    <div className='mt-[150px]  bg-zinc-800'>
    <div className='mx-[100px] flex items-center py-7 justify-around' >
  <div >
  <Link to='/'>
    <h1 className='font-serif italic text-3xl font-bold text-orange-500'>Safe Rent</h1>
    </Link>
   </div>
   <div >
    <ul className='flex  space-x-7'>

        {navData.map((header, index) => {
            return <Link to={header.path} >
            <li className='hover:text-orange-600 text-white font-bold text-sm' key={index}>{header.name}</li>
            </Link>
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