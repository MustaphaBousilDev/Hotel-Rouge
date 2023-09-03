import React from 'react'

interface Props {
     title?:string
}

export const Lines:React.FC<Props> = ({title}) => {
  return (
    <div className='my-10 w-full h-1 relative flex'>
     <span className=' absolute h-[50%] w-[45%] bg-white left-0 ' />
     <span className='absolute top-[-10px] left-[47.5%] text-sm'>{title}</span>
     <span className=' absolute h-[50%] w-[45%] bg-white right-0 ' />
    </div>
  )
}
