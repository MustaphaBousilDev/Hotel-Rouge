import React from 'react'

interface Props {
     //title can be string or number or icon or any other type
     title?:string | number | React.ReactNode;
     className?:string;
}

export const Button:React.FC<Props> = ({
     title,
     className
}) => {
  return (
    <button className={` cursor-pointer 
    
    rounded-md flex items-center justify-center p-2 scale-[.98] transition-all duration-100
    hover:scale-[1.02]   active:scale-[.98]
    ${className}`}>
          {title}
    </button>
  )
}

