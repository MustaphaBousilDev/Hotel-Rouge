import React from 'react'
import type { FC } from 'react'

interface Props {
     children?:React.ReactNode
     active?:boolean
}

export const ModalAvatar:FC<Props> = ({children,active=false}) => {
  return (
    <div /// <reference path="" />
     className={`
          absolute w-[18rem] md:w-[18rem] h-[25rem] p-4 z-[50] bg-white
          transition-all  text-sm   top-10 xs:right-[-50px] sm:right-[-50px] 
          md:-right-[40px] border rounded-xl border-bgDashboard
          ${active ? 'opacity-100 top-12 duration-300  ' : 'hidden duration-200  top-14 '}
          shadow-lg
    `}>
          <span 
          className='
               absolute z-40  w-2 h-2 top-[-5px] xs:right-[65px] sm:right-[65px] rounded-sm  
               md:right-[60px] bg-white rotate-45 transform border-l border-t border-bgDashboard' 
          />
          {children}
    </div>
  )
}
