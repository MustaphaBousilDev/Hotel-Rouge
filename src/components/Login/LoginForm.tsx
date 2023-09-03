import React from 'react'
import { Input as InputForm } from '../Form/Inputs/Input'
import { CheckBox as Check } from '../Form/CheckBox/CheckBox'
import Link from 'next/link'
import { Lines  as LineConnection} from '../lines/Lines'
import { HOME_PAGES } from '@/constants/home-pages'
import ErrorMessage from '../Form/Messages/ErrorMessage'
import {ILogin} from '@/validation/auth/login.type'
import { loginSchema } from '@/validation/auth/login.type'
import type { Role } from '@prisma/client'
import { getSession,signIn } from 'next-auth/react'

import { useRouter } from 'next/router'
import { useState } from 'react'
import type { GetServerSidePropsContext,NextPage } from 'next'
import {ButtonBase as ButtonLogin}  from '../buttons/ButtonBase'
import useZodForm from '@/hooks/useZodForm'
const LoginForm : NextPage = () => {

  //-----------------------------*******----------------------------------------//
  const [status, setStatus] = useState<string | null>(null)
  const router=useRouter()
  const {register,handleSubmit,formState:{errors,isSubmitting}}=useZodForm(loginSchema)
  //onSubmit function
  const onSubmit=async (values:ILogin)=>{
    setStatus(null)
    try{
      const res=await signIn('admin-login',{
        ...values,
        redirect:false //prevent redirect to home page
      })
      if(!res || res.error) return setStatus(res?.error ?? 'Unable to login')
      const session=await getSession()
      if(session?.user) router.push(HOME_PAGES[session.user.role as Role])
    }catch(err:any){
        setStatus(err.message)
    }
  //-------------------------------*******--------------------------------------//
  }
  return (
     <form 
      onSubmit={handleSubmit(onSubmit)}  
      className='text-white py-10 w-[80%] mx-auto flex flex-col '>
      {
        status && (
          <ErrorMessage className='text-md text-center'>
            {status}
          </ErrorMessage>
        )
      }
      <InputForm 
        id='email' 
        type="email" 
        name="email" 
        error={!!errors.email}
        className=''
        placeholder='test@example.com' 
        variant='outlined'
        {...register('email')}
      />
      {errors.email?.message && (
        <ErrorMessage>{errors.email.message}</ErrorMessage>
      )}


      <InputForm 
        id='password' 
        type="password" 
        error={!!errors.password}
        className=''
        {...register('password')}
        name="password" 
        placeholder='●●●●●●●●●' 
        variant='outlined'
      />
      {
        errors.password?.message && (
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        )
      }


      <ButtonLogin  
        name='login' 
        isSubmitting={isSubmitting}
        title='LOGIN TO ACCOUNT' 
      />


     <div className='flex items-center justify-between'>
      <div className='flex items-center gap-1'>
        <Check />
        <span className='text-sm text-white'>Remember me ?</span>
      </div>
      <div className='text-sm'>
        <Link href='/'>Forgot Password?</Link>
      </div>
     </div>
     <LineConnection title='OR' />
     <ButtonLogin 
        bg='fgfgfg'
        name='google' 
        title='ACCOUNT WITH GOOGLE' 
      />
      <ButtonLogin 
        bg='fgfgfg'
        name='google' 
        title='ACCOUNT WITH GITHUB' 
      />
      
     </form>
  )
}

export default LoginForm