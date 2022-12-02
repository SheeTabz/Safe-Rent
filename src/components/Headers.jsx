import React from 'react'

function Headers({data}) {
  return (
    <div className='flex flex-col justify-center items-center space-y-2'>
    <ul className=''>
       {data.map((about,index)=> {
        return <li 
        className='text-xl font-bold text-slate-400'
        key={index}> 
        {about}
        </li>
       })}
    </ul>
    <div className='border-solid border-l-2 border-orange-500 h-[50px]'></div>
</div>
  )
}

export default Headers