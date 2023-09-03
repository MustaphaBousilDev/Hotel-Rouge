import React from 'react'
import {Item as ItemNotif} from './Item'
export const Content = () => {
  return (
    <div className='absolute top-[12%] 
      left-0 w-full h-[78%]   flex 
      overflow-y-scroll scrollbar-hide
      items-start justify-start flex-col'>
        <span className=' bg-grayLight text-grayText flex w-full py-[5px] px-5 font-bold'>
          New
        </span>
        <ItemNotif/>
        <ItemNotif/>
        <ItemNotif/>
        <ItemNotif/>
    </div>
  )
}

