'use client';
import React, { useEffect } from 'react'
import LogoIcon from '@/icons/LogoIcon'
import { ButtonRounded as Button} from '@/components/buttons/ButtonRounded';
import LoginForm from './LoginForm';


export const Content:React.FC = () => {
  const [login,setLogin]=React.useState<boolean>(true)
  const [signIn,setSignIn]=React.useState<boolean>(false)
  
  
  const handleLogin = () => {
    setLogin(true)
    setSignIn(false)
  }

  const handleSignUp = () => {
    setLogin(false)
    setSignIn(true)
  }
  return (
    <div className='
    xs:w-[90%] 
     sm:w-[80%] 
    md:w-[50%] 
    lg:w-[600px]     
     
    relative z-10 '>
      <div className='absolute bg-black opacity-50 top-0 left-0 w-full h-full rounded-xl' />
        <div className='relative  contentLogin flex flex-col'>
          <div className='flex items-center justify-center'>
            <LogoIcon width='440pt' height='80pt' />
          </div>
          <div className='flex flex-col items-center justify-center'>
              <div className='box-buttons   w-[80%] flex items-center 
              relative shadow-lg shadow-black rounded-md ' >
                <div className='bg-black opacity-50 top-0 left-0 absolute w-full h-full rounded-xl' />
                <Button 
                  className={`${login  
                            ? `bg-gradient-to-r  from-primary to-primaryLight` 
                            : ''}`}
                  title='Sign-in'
                  onClick={handleLogin}
                />
                <Button 
                  className={`${signIn  
                            ? `bg-gradient-to-r  from-primary to-primaryLight` 
                            : ''}`}
                  title='Sign-up'
                  onClick={handleSignUp}
                />
              </div>
          </div>
        </div>
        <LoginForm/>
      </div>
  )
}
