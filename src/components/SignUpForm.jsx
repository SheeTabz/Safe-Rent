import React from 'react'
import FormTemplate from './FormTemplate'

function SignUpForm({onClick}) {
  return (
    <FormTemplate>
           <div className='border-solid border-2 drop-shadow-md h-full w-[500px] flex flex-col  justify-center items-center space-y-8'>
        <h1 className="font-bold text-3xl">Create an account</h1>
        <p className='text-slate-400'>Please enter your details to get started</p>
       <form className='form flex flex-col space-y-5' >
        <input 
        className=''
        type="text" 
        name="name" 
        placeholder='Username'/>
        <input type="text" name="password" placeholder='Password'/>
        <input type="password" name="password-confirmation" placeholder="Password confirmation"/>
        <div className='flex space-x-2'>
        <input type= "checkbox" name="remember"/>
        <label for="remember">Remember me</label>
        </div>
        <button type="submit" className='button'>Sign up</button>
       </form>
       <div className='flex'>
        <p>Already signed up?</p> 
        <button className='border-none font-bold' onClick={onClick}>Log in here</button>
        </div>
     </div>
    </FormTemplate>
  )
}

export default SignUpForm