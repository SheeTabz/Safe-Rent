import React from 'react'

function TransButton({data,onClick}) {
  return (
    <>
    <button onClick={onClick} className='border-2 border-gray-500  py-2 text-sm hover:border-orange-500 hover:text-orange-500 rounded-xl lg:w-[200px]  '> Reviews</button>
    </>
  )
}

export default TransButton