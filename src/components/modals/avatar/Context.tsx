import CustomIMG from '@/components/ImageCom/CustomIMG'
import Link from 'next/link'
import React from 'react'
import USA from "@/assets/usa-img.png"
export const Context = () => {
  return (
    <div className='px-1'>
      <ul className='flex flex-col gap-4 mt-3'>
        <li className=' flex   cursor-pointer '>
          <Link className='w-full hover:bg-primaryLight hover:text-primary  
          transition h-full pl-3 flex items-center font-semibold  py-2 rounded-[5px]' href="#">
            My Profile
          </Link>
        </li>
        <li>
          <Link href="#" className='flex pl-3 
          hover:bg-primaryLight hover:text-primary
          rounded-[5px] justify-between items-center'>
            <span className='font-semibold'>Language</span>
            <span className='flex items-center gap-2'>
              <span>English</span>
              <span>
                <CustomIMG
                  alt=''
                  src={USA}
                  width={40}
                  height={40}
                />
              </span>
            </span>
          </Link>
        </li>
        <li>
          <Link href="#" className='flex pl-3 
          py-2 font-semibold
          hover:bg-primaryLight hover:text-primary
          rounded-[5px] justify-between items-center'>
            Account Settings 
          </Link>
        </li>
        <li>
          <Link href="#" className='flex pl-3 
          py-2 font-semibold
          hover:bg-primaryLight hover:text-primary
          rounded-[5px] justify-between items-center'>
            Sign Out 
          </Link>
        </li>
      </ul>
    </div>
  )
}

