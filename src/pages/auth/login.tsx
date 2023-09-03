import { Login as LoginComponent } from '@/components/Login/Login'
import React from 'react'
import Head from 'next/head'
const Login = () => {
  return (
      <>
      <Head>
        <title>Administration - Se Connecter</title>
      </Head>
      <LoginComponent/>
      </>
  )
}

export default Login