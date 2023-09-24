import React from 'react'
import Image from 'next/image'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RedeemIcon from '@mui/icons-material/Redeem';
import WifiIcon from '@mui/icons-material/Wifi';
import CoffeeIcon from '@mui/icons-material/Coffee';
import NoMealsIcon from '@mui/icons-material/NoMeals';
import LocalBarIcon from '@mui/icons-material/LocalBar';

const Rooms = () => {
  return (
    <div className='flex flex-col gap-2 '>
      <div className='rounded-md flex flex-wrap items-center gap-2 xl:gap-3   p-1'>
          <div className='w-full lg:w-[49%] flex items-center justify-center flex-col xl:w-[24%] bg-primaryLight p-4 rounded-md shadow-md'>
            one
          </div>
          <div className='w-full lg:w-[49%] flex items-center justify-center flex-col xl:w-[24%] bg-primaryLight p-4 rounded-md shadow-md'>
            one
          </div>
          <div className='w-full lg:w-[49%] flex items-center justify-center flex-col xl:w-[24%] bg-primaryLight p-4 rounded-md shadow-md'>
            one
          </div>
          <div className='w-full lg:w-[49%] flex items-center justify-center flex-col xl:w-[24%] bg-primaryLight p-4 rounded-md shadow-md'>
            one
          </div>
      </div>
      <div className='queen__room flex h-72  bg-white border rounded-sm w-[70%]  '>
        <div className=' bg-center bg-cover  w-[42%] bg-[url("https://goodhomes.wwmindia.com/content/2020/dec/ali-bedroom-table-with-rooshad-shroff1607602520.jpg")]'>
          
        </div>
        <div className='p-3 w-[58%] flex flex-col gap-2'>
          <div className='flex justify-between items-center w-full ' >
            <h3 className='font-bold text-gray-800'>Luxiry Queen Room</h3>
            <div className='flex flex-col gap-1'>
              <h3 className='flex gap-1 items-center'>
                <span className=' text-gray-400 text-xs'>$208.99</span>
                <span className='text-md text-primary font-bold'>$109.65</span>
              </h3>
            </div>
          </div>
          <div className=' flex gap-2  items-center  justify-between'>
            <div className='flex gap-1'>
              <div className=' flex bg-greenLight items-center gap-1 rounded-md p-[6px] px-2'>
                <LocalOfferIcon style={{fontSize:13,color: 'rgb(10 212 37)'}}
                />
                <span className='text-xs font-semibold text-greenText'>Special Rate</span>
              </div>
              <div className='flex bg-yellow-100 items-center gap-1 rounded-md p-[6px] px-2'>
                <RedeemIcon style={{fontSize:13,color: 'rgb(202 138 4)'}}/>
                <span className='text-xs font-semibold text-yellow-600'>Loyelty Members</span>
              </div>
            </div>
            <div>
              <p className=' text-xs font-semibold text-gray-400'>1 night, 2 persone</p>
            </div>
          </div>
          <div className=' my-2'>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus similique quisquam 
              sed non repellat voluptate sed non repellat voluptate sed non repellat voluptate sed non repellat voluptate 
              
            </p>
          </div>
          <div>
            <ul className='flex gap-4 items-center'>
              <li><WifiIcon className='text-primary transition cursor-pointer' style={{fontSize:20}} /></li>
              <li><CoffeeIcon className='hover:text-primary transition cursor-pointer' style={{fontSize:20}} /></li>
              <li><NoMealsIcon className='hover:text-primary transition cursor-pointer' style={{fontSize:20}} /></li>
              <li><LocalBarIcon className='hover:text-primary transition cursor-pointer' style={{fontSize:20}} /></li>
            </ul>
          </div>
          <div className= ' my-5'>
            <button className='bg-primary rounded-md shadow-md text-sm active:scale-95 transition text-white font-semibold flex items-center justify-center px-4 py-[6px]'>
              Reservée
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rooms