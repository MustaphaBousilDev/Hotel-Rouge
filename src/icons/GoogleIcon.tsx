import React from 'react'
import Image from 'next/image'
import googleImg from  '../assets/googleAccount.png'
const GoogleIcon = ({width=45,height=45}) => {
  return (
          <Image 
              src={googleImg} 
              height={height}
              width={width} 
              alt='google icon' 
          />
  )
}

export default GoogleIcon