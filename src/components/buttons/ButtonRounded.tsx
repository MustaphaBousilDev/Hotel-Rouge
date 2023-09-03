import React, { use } from 'react'
import { custom } from 'zod'
import { useEffect } from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
     handleLogin?:()=>void
     title?:string
     className?:string
     //Additional props specifiec to the cutom button component 
     disabled?:boolean

}

export const ButtonRounded:React.FC<Props>= ({
     handleLogin,
     title,
     className,
     disabled,
     ...reset
}) => {


  //Default values
  handleLogin = handleLogin || (()=>{})
  title = title || 'Button'
  className = className || ''
  disabled = disabled || false
  return (
     <button 
          onClick={handleLogin}
          type="button"
          className={`p-3 px-8 cursor-pointer transition 
          text-white border-0 outline-none relative w-[48%]
          m-1 rounded-xl ${className} button-login-signup`}
          disabled={disabled}
          {...reset}
          >{title}
    </button>
  )
}

