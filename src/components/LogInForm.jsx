import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import FormTemplate from './FormTemplate'

function LogInForm({onClick, handleUser}) {

  
  const [formData, setFormData] = useState({
    username: "",
    password: "",

  })
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  }

function handleSubmit(e){
  e.preventDefault();
fetch('/login', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData)
})
.then(res => {
  if(res.ok){
    res.json().then(data => handleUser(data))
  }
  else{
    res.json(err=> console.log(err.errors))
  }
})

}

  return (
   <FormTemplate>
     <div className='border-solid border-2 drop-shadow-md h-full w-[500px] flex flex-col  justify-center items-center space-y-8'>
        <h1 className="font-bold text-3xl">Welcome back</h1>
        <p className='text-slate-400'>Welcome back! Please enter your details</p>
       <form  onSubmit={handleSubmit} className='form flex flex-col space-y-5' >

        <input 
        className=''
        type="text" 
        name="username" 
        placeholder='Username'
        value={formData.username}
        onChange={handleChange}/>

        <input 
        type="password" 
        name="password" 
        placeholder='Password'
        value={formData.password}
        onChange={handleChange}/>
        
        <div className='flex space-x-2'>
        <input type= "checkbox" name="remember"/>
        <label for="remember">Remember me</label>
        </div>
       
        <button type="submit" className='button'>Sign in</button>
       
       </form>
       <div className='flex space-x-2'>
        <p>Don't have an account?</p> 
        <button className='border-none font-bold' onClick={onClick}>Sign up for free</button>
        </div>
     </div>
    
     </FormTemplate>

  )
}

export default LogInForm