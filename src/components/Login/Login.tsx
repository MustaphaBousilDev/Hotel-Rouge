import React from 'react'
import background from "../../assets/hotelBack2.jpeg"
import CustomIMG from '../ImageCom/CustomIMG'
import Shadow from "../Shadow/Shadow"
import { Content as LoginContent}  from './Content'

export const Login:React.FC = () => {
  return (
    <main className='h-screen w-full  relative flex items-center justify-center'>
          <div className='absolute -z-0 top-0 left-0 w-full h-full'>
               <CustomIMG 
                    src={background} 
                    alt='background' 
                    className='object-cover h-full w-full' 
               />
               <Shadow className='top-0 left-0 z-0 opacity-60 absolute bg-black w-full h-full'
               />
          </div>
          <LoginContent/>
    </main>
  )
}

