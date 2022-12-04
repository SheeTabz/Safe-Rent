import React, { useState } from 'react'
import FormTemplate from './FormTemplate'

function SignUpForm({onClick, handleUser}) {
const [errors, SetErrors] = useState([])
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password_confirmation:""

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
  fetch('/signup', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  })
  .then(res => {
    if(res.ok){
      res.json().then(user => handleUser(user));
    }
    else{
      res.json().then( error => console.log(error.errors));
    }
  })
}


  return (
    <FormTemplate>
           <div className='border-solid border-2 drop-shadow-md h-full w-[500px] flex flex-col  justify-center items-center space-y-8'>
        <h1 className="font-bold text-3xl">Create an account</h1>
        <p className='text-slate-400'>Please enter your details to get started</p>
       <form onSubmit={handleSubmit} className='form flex flex-col space-y-5' >
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

        <input 
        type="password"
         name="password_confirmation" 
         placeholder="Password confirmation"
         value={formData.password_confirmation}
         onChange={handleChange}/>

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