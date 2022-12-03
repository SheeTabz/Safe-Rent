import React from 'react'
import FormTemplate from './FormTemplate'

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  return (
   <FormTemplate>
     <div className='border-solid border-2 drop-shadow-md h-full w-[500px] flex flex-col  justify-center items-center space-y-8'>
        <h1 className="font-bold text-3xl">Welcome back</h1>
        <p className='text-slate-400'>Welcome back! Please enter your details</p>
       <form className='form flex flex-col space-y-5' >
        <input 
        className=''
        type="text" 
        name="name" 
        placeholder='Username'/>
        <input type="text" name="password" placeholder='Password'/>
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