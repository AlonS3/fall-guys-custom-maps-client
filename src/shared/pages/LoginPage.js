import React from 'react'

import SignInCard from '../components/LoginPage/SignInCard'

const Login = () => {
  return (
    <>
    <SignInCard url="/api/public/auth/google"/>
    </>
    
  )
}

export default Login