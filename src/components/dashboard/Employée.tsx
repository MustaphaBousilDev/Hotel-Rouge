import React from 'react'
import Image from 'next/image'
import Avatar from '@/assets/avatars/3.png'
import Avatar2 from '@/assets/avatars/1.png'
import Avatar3 from '@/assets/avatars/2.png'
import Avatar4 from '@/assets/avatars/4.jpeg'
import Avatar5 from '@/assets/avatars/5.jpeg'
import Avatar6 from '@/assets/profile/mugiwara.jpg'

const Employée = () => {
  return (
    <div className='flex flex-col gap-1'>
      <div className='bg-white rounded-xl shadow-md p-3'>
          <h3 className='font-semibold text-gray-800'>Top performance employeé</h3>
          <ul className='mt-4 flex flex-wrap gap-5 items-center'>
            <li className='flex flex-col items-center'>
              <Image 
                src={Avatar} 
                width={40} 
                height={40} 
                alt='' 
                style={{borderRadius:'50%'}}
              />
              <span className='text-sm font-semibold'>mugiwara</span>
              <span className='font-bold text-sm text-primary'>80%</span>

            </li>
            <li className='flex flex-col items-center'>
              <Image 
                src={Avatar2} 
                width={40} 
                height={40} 
                alt='' 
                style={{borderRadius:'50%'}}
              />
              <span className='text-sm font-semibold'>mugiwara</span>
              <span className='font-bold text-sm text-primary'>80%</span>

            </li>
            <li className='flex flex-col items-center'>
              <Image 
                src={Avatar3} 
                width={40} 
                height={40} 
                alt='' 
                style={{borderRadius:'50%'}}
              />
              <span className='text-sm font-semibold'>mugiwara</span>
              <span className='font-bold text-sm text-primary'>80%</span>

            </li>
            <li className='flex flex-col items-center'>
              <Image 
                src={Avatar4} 
                width={40} 
                height={40} 
                alt='' 
                style={{borderRadius:'50%'}}
              />
              <span className='text-sm font-semibold'>mugiwara</span>
              <span className='font-bold text-sm text-primary'>80%</span>

            </li>
            <li className='flex flex-col items-center'>
              <Image 
                src={Avatar5} 
                width={40} 
                height={40} 
                alt='' 
                style={{borderRadius:'50%'}}
              />
              <span className='text-sm font-semibold'>mugiwara</span>
              <span className='font-bold text-sm text-primary'>80%</span>

            </li>
            <li className='flex flex-col items-center'>
              <Image 
                src={Avatar6} 
                width={40} 
                height={40} 
                alt='' 
                style={{borderRadius:'50%'}}
              />
              <span className='text-sm font-semibold'>mugiwara</span>
              <span className='font-bold text-sm text-primary'>80%</span>

            </li>
            <li className='flex flex-col items-center'>
              <Image 
                src={Avatar6} 
                width={40} 
                height={40} 
                alt='' 
                style={{borderRadius:'50%'}}
              />
              <span className='text-sm font-semibold'>mugiwara</span>
              <span className='font-bold text-sm text-primary'>80%</span>

            </li>
            <li className='flex flex-col items-center'>
              <Image 
                src={Avatar5} 
                width={40} 
                height={40} 
                alt='' 
                style={{borderRadius:'50%'}}
              />
              <span className='text-sm font-semibold'>mugiwara</span>
              <span className='font-bold text-sm text-primary'>80%</span>

            </li>
            <li className='flex flex-col items-center'>
              <Image 
                src={Avatar4} 
                width={40} 
                height={40} 
                alt='' 
                style={{borderRadius:'50%'}}
              />
              <span className='text-sm font-semibold'>mugiwara</span>
              <span className='font-bold text-sm text-primary'>80%</span>

            </li>
            <li className='flex flex-col items-center'>
              <Image 
                src={Avatar3} 
                width={40} 
                height={40} 
                alt='' 
                style={{borderRadius:'50%'}}
              />
              <span className='text-sm font-semibold'>mugiwara</span>
              <span className='font-bold text-sm text-primary'>80%</span>

            </li>
            <li className='flex flex-col items-center'>
              <Image 
                src={Avatar2} 
                width={40} 
                height={40} 
                alt='' 
                style={{borderRadius:'50%'}}
              />
              <span className='text-sm font-semibold'>mugiwara</span>
              <span className='font-bold text-sm text-primary'>80%</span>

            </li>
            <li className='flex flex-col items-center'>
              <Image 
                src={Avatar} 
                width={40} 
                height={40} 
                alt='' 
                style={{borderRadius:'50%'}}
              />
              <span className='text-sm font-semibold'>mugiwara</span>
              <span className='font-bold text-sm text-primary'>80%</span>

            </li>
            <li className='flex flex-col items-center'>
              <Image 
                src={Avatar} 
                width={40} 
                height={40} 
                alt='' 
                style={{borderRadius:'50%'}}
              />
              <span className='text-sm font-semibold'>mugiwara</span>
              <span className='font-bold text-sm text-primary'>80%</span>

            </li>
            <li className='flex flex-col items-center'>
              <Image 
                src={Avatar} 
                width={40} 
                height={40} 
                alt='' 
                style={{borderRadius:'50%'}}
              />
              <span className='text-sm font-semibold'>mugiwara</span>
              <span className='font-bold text-sm text-primary'>80%</span>

            </li>
          </ul>
      </div>
    </div>
  )
}

export default Employée