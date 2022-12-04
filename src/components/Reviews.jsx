import React from 'react'
import {GoPerson} from 'react-icons/go'

function Reviews({data}) {
  return (
    <div className='mt-8 flex flex-col space-y-3 '>
        <h1 className='font-bold text-xl pb-5 text-orange-500'>Reviews</h1>
        {data.reviews.map(review => {
          return <div className='flex space-x-6'>
          <div className='text-3xl border-solid bg-slate-100 p-6 rounded-full hover:bg-orange-500 hover:animate-pulse text font-light'>
            <GoPerson/>
          </div>
          <div className='w-[960px] h-[10vh] border-2 border-gray-500 pl-5 pt-3'>
          <h1 className='font-bold'>{review.user.username}</h1>
          <p className='font-light'>{review.comment}</p>
          </div>
          </div>
        })}

    </div>
  )
}

export default Reviews