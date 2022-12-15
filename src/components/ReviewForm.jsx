import React from 'react'
import { useState } from 'react'
import {GoPerson} from 'react-icons/go'

function ReviewForm({user, data}) {
const[text, setText] = useState({
    text: '',
})

function handleChange(e){
setText(e.target.value)
}
console.log(data)
console.log(text)
function handleSubmit(event){
    event.preventDefault()

    fetch("/reviews", {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            comment: text,
            user_id: user.id,
            car_id: data.id,

        })
    }).then(res => res.json())
    .then(review=> console.log(review))
}

  return (
    <>
    <div className='flex  items-center space-x-6'>
          <div className='text-3xl border-solid bg-slate-100 p-6 rounded-full hover:bg-orange-500 hover:animate-pulse text font-light flex-start'>
            <GoPerson/>
          </div>
          <div className=''>
          <form className='w-[960px] pt-3 flex flex-col justify-center items-center' onSubmit={handleSubmit}>
          <h1 className='font-bold text-xl pb-5 text-orange-500 text-center'>Add a review</h1>
        <textarea 
        className='w-full h-full outline-none border-2 border-gray-300 rounded-2xl p-4'
        name="comment" 
        id="comment"
        rows="10" 
value={text.text}
onChange={handleChange}
        placeholder='Add a comment...' />
<button className='button bg-orange-500 hover:border-orange-500 hover:text-orange-500'>Submit</button>
    </form>
          </div>
          </div>
   
    </>
  )
}

export default ReviewForm