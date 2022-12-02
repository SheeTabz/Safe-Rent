import React from 'react'

function ColorButton({data}) {
  return (
    <div className>
        <button className='lg:w-[200px] font-bold text-white border-solid border-2 border-orange-500  bg-orange-500 hover:bg-transparent hover:text-orange-500 py-3 px-7 rounded-3xl '>{data}</button>
    </div>
  )
}

export default ColorButton
