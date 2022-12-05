import React, { useState } from 'react'
import Footer from '../components/Footer'
import LogInForm from '../components/LogInForm'
import SignUpForm from '../components/SignUpForm'

function LogInPage({handleUser, user}) {
    const [showLogin, setShowLogin] = useState(true);
    // if (showLogin) { setLogInPath('/login') }
    // else {  setLogInPath('/signup'); }
  return (
    <div>
        {showLogin ? (
 <LogInForm onClick={() => setShowLogin(false)} handleUser={handleUser} user={user}/>
        ) : (
<SignUpForm onClick={() => setShowLogin(true)} handleUser={handleUser}/>
        )}
       
      
        <Footer/>
    </div>
  )
}

export default LogInPage