import React from 'react'
import Image from 'next/image'
import ImgAvatar from '@/assets/avatars/1.png'
import CheckIcon from '@/icons/CheckIcon'
export const Task = () => {
  return (
    <div className='flex gap-2 border-b mb-4'>
        <div className='py-2'>
            <Image
                src={ImgAvatar} 
                alt='Avatar' 
                width={30}
            />
        </div>
        <div className='flex flex-col gap-2 text-sm w-full'>
            <div className='flex items-center justify-between'>
                <span className='text-xs flex items-center justify-between bg-primary p-[5px] text-white font-bold rounded-2xl px-3'>
                    Front Office
                </span>
                <span className='text-xs text-gray-500 font-semibold'>
                    Today, 12:20 PM
                </span>
            </div>
            <div className='flex items-center justify-between text-xs'>
                <span className='font-bold text-gray-700'>Mugiwara Luffy</span>
                <span className=' text-gray-500 font-medium'>Completed task 
                    <span>#123</span>
                </span>
            </div>
            <div className=' p-2 my-2 border rounded-lg flex flex-col gap-2'>
                <h3 className='font-bold text-gray-600'>Make guast regestration #123</h3>
                <span className='flex items-center text-xs p-1 px-3 gap-1 bg-greenLight rounded-2xl w-fit'>
                    <CheckIcon className=' bg-greenDefault p-[3px] rounded-full flex items-center justify-center' width='16' height='16' color='#fff' />
                    <span className='text-greenText font-medium '>Task Completed</span>
                </span>
            </div>
        </div>
    </div>
  )
}