import React from 'react'

function WhiteButton({data}) {
  return (
    <div className>
        <button className='lg:w-[200px] font-bold text-white border-solid border-2 border-white hover:bg-orange-500  py-3 px-7 rounded-3xl  hover:border-transparent'>{data}</button>
    </div>
  )
}

export default WhiteButton