import React from 'react'
import type { FC } from 'react'

interface Props {
     children?:React.ReactNode
     active?:boolean
}

export const ModalBasic:FC<Props> = ({children,active=false}) => {
  return (
    <div /// <reference path="" />
     className={`
          absolute w-[18rem] md:w-[22rem] h-[25rem] z-30 bg-white transition-all  text-sm   top-12 xs:right-[-160px] sm:right-[-130px] md:-right-3 border rounded-md border-bgDashboard
          ${active ? 'opacity-100 top-12 duration-300  ' : 'hidden duration-200  top-14 '} shadow-lg
    `}>
          <span 
          className='
               absolute z-40  w-4 h-4 top-[-7px] xs:right-[58%] sm:right-[48%] rounded-sm  md:right-[15px] bg-white rotate-45 transform border-l border-t  border-bgDashboard' 
          />
          {children}
    </div>
  )
}
