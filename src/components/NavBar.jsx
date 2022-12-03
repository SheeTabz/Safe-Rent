import React from 'react'
import { Link } from 'react-router-dom'
import {navData} from './data'

function NavBar() {
    const data = ["HOME","ABOUT US", "SERVICES", "OUR CARS"]
  return (
    <div className='flex lg:flex-row mx-[90px] justify-between py-5 items-center'>
   <div >
    <h1>Safe Rent</h1>
   </div>
   <div >
    <ul className='flex flex-row space-x-7'>
        {navData.map((header, index) => {
            return <Link to={header.path}>
            <li className='hover:text-orange-600 text-slate-500 font-bold text-sm' key={index}>{header.name}</li>
            </Link>
        })}
    </ul>
   </div>
<div>
  <Link to='/login'>
    <button className='text-slate-500 font-bold border-solid border-2 border-orange-600 px-4 py-2 rounded-2xl hover:bg-orange-600 hover:text-white'>Log In</button>
    </Link>
</div>
    </div>
  )
}

export default NavBar