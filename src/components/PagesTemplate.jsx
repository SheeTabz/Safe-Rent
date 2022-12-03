import React from 'react'
import {FaGreaterThan} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function PagesTemplate({pageData}) {
  return (
    <div className='hero h-[30vh] lg:h-[30vh] text-white '>
    <div className=' h-full w-full bg-no-repeat bg-cover bg-[url("https://www.glassdoor.com/employers/app/uploads/sites/2/2018/08/officemeeting.jpg")]'>
    <div className='revie relative flex flex-col justify-center items-center'>
      <h1 className="text-4xl font-bold ">{pageData}</h1>
      <div className='temp absolute  bottom-0 flex items-center space-x-3 p-4'>
        <Link to='/'>
         <p>HOME</p>
         </Link>
         <FaGreaterThan/>
         <p className='text-orange-500'>{pageData}</p>
      </div>
     </div>
     </div>
 </div>
  )
}

export default PagesTemplate