import CustomIMG from '@/components/ImageCom/CustomIMG'
import React from 'react'
import mugiwara from '@/assets/./profile/./mugiwara.jpg'

export const Header = () => {
  return (
    <div className=' flex gap-3 pb-3 border-b '>
     <CustomIMG 
          src={mugiwara} 
          alt='mugiwara' 
          width={55}
          height={65}  
          className='rounded-xl'
     />
     <div>
          <div className='flex gap-9 items-center'>
               <h1 className='text-md font-bold'>Mugiwara</h1>
               <span className='inline-block bg-green-100 text-green-500 px-3 py-1 rounded-md text-[12px]'>
                    Employe
               </span>
          </div>
          <p className='text-grayText text-sm'>mugiwara@gmail.com</p>
     </div>
    </div>
  )
}

