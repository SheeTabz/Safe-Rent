import React, { useState } from 'react'
import Footer from '../components/Footer'
import LogInForm from '../components/LogInForm'
import SignUpForm from '../components/SignUpForm'

function LogInPage({setLogInPath}) {
    const [showLogin, setShowLogin] = useState(true);
    // if (showLogin) { setLogInPath('/login') }
    // else {  setLogInPath('/signup'); }
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