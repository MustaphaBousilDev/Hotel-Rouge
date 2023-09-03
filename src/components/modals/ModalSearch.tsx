import React from 'react'
import type { FC } from 'react'

interface Props {
     children?:React.ReactNode
     active?:boolean,
     onClick?:()=>void
}

export const ModalSearch:FC<Props> = ({
     children,
     active=false,
     onClick=()=>{}
}) => {
  return (
    active ? 
    (<div 
     onClick={onClick}
     className={`
          xs:hidden sm:hidden md:flex md:flex-col
          modalSearch
          absolute  min-h-[20rem] p-1 px-1  top-14  z-[100000] bg-white border border-bgDashboard
          shadow-lg
          transition-all  text-sm ${active ? 'w-[30rem] md:w-[30rem]' : 'w-[20rem] md:w-[20rem]'} left-0
          border rounded-md border-bgDashboard
          duration-300 ease-in-out
          shadow-lg
    `}>
          {children}
    </div>)
     : null
  )
}
