import React, { useState } from 'react'
import Footer from '../components/Footer'
import LogInForm from '../components/LogInForm'
import SignUpForm from '../components/SignUpForm'

function LogInPage() {
    const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
        {showLogin ? (
 <LogInForm onClick={() => setShowLogin(false)}/>
        ) : (
<SignUpForm onClick={() => setShowLogin(true)}/>
        )}
       
      
        <Footer/>
    </div>
  )
}

export default LogInPage