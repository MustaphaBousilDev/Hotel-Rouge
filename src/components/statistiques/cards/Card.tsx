import React from 'react'
interface Props{
    className?:string
    children?:React.ReactNode
}

export const Card:React.FC<Props> = ({
    className,
    children,
}) => {
  return (
    <div className={`w-[20rem] h-[7rem] sm:h-[8rem] lg:h-[7rem] bg-white  shadow-md  
    ${className}`}>
      {children}
    </div>
  )
}

