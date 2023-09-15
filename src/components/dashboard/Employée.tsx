import React from 'react'
import Image from 'next/image'
import Avatar from '@/assets/avatars/3.png'
import Avatar2 from '@/assets/avatars/1.png'
import Avatar3 from '@/assets/avatars/2.png'
import Avatar4 from '@/assets/avatars/4.jpeg'
import Avatar5 from '@/assets/avatars/5.jpeg'
import Avatar6 from '@/assets/profile/mugiwara.jpg'
import PiaChartWithPadding from '../statistiques/charts/PiaChartWithPadding'
import StackedBarChart from '../statistiques/charts/StackedBarChart'
import AreaChartsSync from '../statistiques/charts/AreaChartSync'

const Employée = () => {
  return (
    <div className='flex flex-col gap-2'>
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
      <div className='flex flex-col xl:flex-row gap-2'>
        <div className='flex gap-2 items-center justify-center rounded-2xl relative p-5 shadow-lg bg-white w-full xl:w-[30%]'>
          <PiaChartWithPadding/>
          <ul className='absolute  w-full bottom-3 left-0 justify-around flex' >
            <ul className='flex flex-col gap-1'>
              <ul className='flex gap-2 items-center'>
                <li className='bg-[#06b6d4] w-10 h-5 '></li>
                <li className='text-xs'>Group One</li>
              </ul>
              <ul className='flex gap-2 items-center'>
                <li className='bg-[#0f9ab3] w-10 h-5 '></li>
                <li className='text-xs'>Group One</li>
              </ul>
              <ul className='flex gap-2 items-center'>
                <li className='bg-[#158194] w-10 h-5 '></li>
                <li className='text-xs'>Group One</li>
              </ul>
              <ul className='flex gap-2 items-center'>
                <li className='bg-[#93d9e5] w-10 h-5 '></li>
                <li className='text-xs'>Group One</li>
              </ul>
            </ul>
            <ul className='flex flex-col gap-1'>
              <ul className='flex gap-2 items-center'>
                <li className='bg-[#0f9ab3] w-10 h-5 '></li>
                <li className='text-xs'>Group One</li>
              </ul>
              <ul className='flex gap-2 items-center'>
                <li className='bg-[#06b6d4] w-10 h-5 '></li>
                <li className='text-xs'>Group One</li>
              </ul>
              <ul className='flex gap-2 items-center'>
                <li className='bg-[#93d9e5] w-10 h-5 '></li>
                <li className='text-xs'>Group One</li>
              </ul>
              <ul className='flex gap-2 items-center'>
                <li className='bg-[#0f9ab3] w-10 h-5 '></li>
                <li className='text-xs'>Group One</li>
              </ul>
            </ul>
          </ul>
        </div>
        <div className='bg-white w-full xl:w-[69%] shadow-lg rounded-2xl'>
          <StackedBarChart />
        </div>
      </div>
      <div className='w-full bg-white rounded-2xl shadow-lg h-36'>
        <AreaChartsSync/> 
      </div>
    </div>
  )
}

export default Employée