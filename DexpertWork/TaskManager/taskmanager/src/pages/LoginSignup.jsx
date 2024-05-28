import React, { useState } from 'react'
import Register from '../components/Register';
import Login from '../components/Login';

const LoginSignup = () => {
  const [isLogin, isSetLogin] = useState(true);
  return (
    <>
      {
        isLogin ?  
        <>
          <Login />
          <button onClick={() => isSetLogin(false)}>Sign Up</button>
        </>
        :
        <> 
          <Register/>
          <button onClick={() => isSetLogin(true)}>Login</button>
        </>
      }
    </>
  )
}

export default LoginSignup;
