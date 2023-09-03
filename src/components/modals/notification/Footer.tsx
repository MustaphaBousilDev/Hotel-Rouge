import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='absolute bottom-0  py-2 px-5 rounded-md rounded-ss-none  rounded-se-none
      left-0 w-full flex items-center text-md  justify-center h-[10%] border-t font-bold text-primary transition  hover:text-primaryLight'>
        <Link href={""}>View all</Link>
    </div>
  )
}

