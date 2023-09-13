import React from 'react'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { SelectOpt } from '../Form/select/SelectOpt'
import { BOOKING_DASH_STATICS } from '@/constants/statics';
import { Cards as CardStatistiques} from '@/components/statistiques/cards/Cards';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import roomImg from '@/assets/hotel/roooms.jpg';
import StarIcon from '@/icons/StarIcon';
import StarDarkIcon from '@/icons/StarDarkIcon';
import PieChartRooms from '../statistiques/charts/PieChart';
import AvatarImg from '@/assets/1.png'
const styleImg={
    borderRadius:10
}
const Bookings = () => {
  return (
    <>
        <div className='flex flex-col xl:flex-row gap-2'>
            <div className='bg-white rounded-3xl shadow-lg p-5 py-3 px-4 w-[98%] mx-auto xl:mx-0 xl:w-[65.5%]'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className=' font-bold text-lg text-gray-800'>Bookings</h2>
                        <span className='text-sm text-gray-600'>Information about reservations</span>
                    </div>
                    <div>
                        <SelectOpt val='weekly'>
                            <MenuItem value={10}>
                                <EventAvailableIcon className='mr-1 text-gray-400 text-sm' />
                                <span className='font-semibold text-gray-400 text-xs' >username</span>
                            </MenuItem>
                            <MenuItem sx={{fontSize:15}} value={10}>
                                <EventAvailableIcon className='mr-1 text-gray-400 text-sm' />
                                <span className='font-semibold text-gray-400 text-xs' >username</span>
                            </MenuItem>
                            <MenuItem sx={{fontSize:15}} value={20}>
                                Twenty
                            </MenuItem>
                            <MenuItem sx={{fontSize:15}} value={30}>
                                Thirty
                            </MenuItem>
                        </SelectOpt>
                    </div>
                </div>
                <div className=' my-2'>
                    <CardStatistiques 
                        bgColor='bg-grayLight'
                        menu={BOOKING_DASH_STATICS} 
                        className='xl:w-[30%] border border-primaryLight bg-red-500'
                    />
                </div>
                <div className='flex flex-col gap-3'>
                    <ul className='flex justify-between items-center'>
                        <li className=' flex gap-2 items-center'>
                            <Image 
                            alt='rooms'
                            style={styleImg}
                            src={roomImg} 
                            width={50} 
                            height={40} 
                            />
                            <div className='flex flex-col'>
                                <span className='text-sm font-bold'>Studio</span>
                                <span className='text-xs'>Room Type</span>
                            </div>
                        </li>
                        <li className=' flex flex-col'>
                            <span>#100</span>
                            <span className='text-xs text-gray-600'>Room</span>
                        </li>
                        <li className=' flex flex-col'>
                            <span className='font-semibold'>18.03.2022</span>
                            <span className='text-xs text-gray-600'>Check in</span>
                        </li>
                        <li className=' flex flex-col'>
                            <span className='font-semibold'>18.03.2023</span>
                            <span className='text-xs text-gray-600'>Check out</span>
                        </li>
                    </ul>
                    <ul className='flex justify-between items-center'>
                        <li className=' flex gap-2 items-center'>
                            <Image 
                            alt='rooms'
                            style={styleImg}
                            src={roomImg} 
                            width={50} 
                            height={40} 
                            />
                            <div className='flex flex-col'>
                                <span className='text-sm font-bold'>Studio</span>
                                <span className='text-xs'>Room Type</span>
                            </div>
                        </li>
                        <li className=' flex flex-col'>
                            <span>#100</span>
                            <span className='text-xs text-gray-600'>Room</span>
                        </li>
                        <li className=' flex flex-col'>
                            <span className='font-semibold'>18.03.2022</span>
                            <span className='text-xs text-gray-600'>Check in</span>
                        </li>
                        <li className=' flex flex-col'>
                            <span className='font-semibold'>18.03.2023</span>
                            <span className='text-xs text-gray-600'>Check out</span>
                        </li>
                    </ul>
                    <ul className='flex justify-between items-center'>
                        <li className=' flex gap-2 items-center'>
                            <Image 
                            alt='rooms'
                            style={styleImg}
                            src={roomImg} 
                            width={50} 
                            height={40} 
                            />
                            <div className='flex flex-col'>
                                <span className='text-sm font-bold'>Studio</span>
                                <span className='text-xs'>Room Type</span>
                            </div>
                        </li>
                        <li className=' flex flex-col'>
                            <span>#100</span>
                            <span className='text-xs text-gray-600'>Room</span>
                        </li>
                        <li className=' flex flex-col'>
                            <span className='font-semibold'>18.03.2022</span>
                            <span className='text-xs text-gray-600'>Check in</span>
                        </li>
                        <li className=' flex flex-col'>
                            <span className='font-semibold'>18.03.2023</span>
                            <span className='text-xs text-gray-600'>Check out</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className=' border-4 border-primary bg-white rounded-3xl shadow-lg p-3 px-2 w-[98%] h-[370px] relative mx-auto xl:mx-0 xl:w-[34%]'>
                <PieChartRooms/>
            </div>
        </div>
        <div className='w-full flex flex-col bg-white shadow-lg rounded-2xl p-2 px-4 my-2'>
            <div className='flex items-center justify-between'>
                <div className='header__review flex gap-4 items-center'>
                    <div className='flex gap-1 items-center'>
                        <StarIcon 
                            color='#06b6d4' 
                            width='20px' 
                            height='20px' 
                            className=''
                        />
                        <span className='text-xl font-semibold text-primary'>5.0</span>
                    </div>
                    <p className='flex items-center gap-[2px]'>
                        <span className='font-bold'>543</span>
                        <span className=' font-semibold'>Reviews</span>
                    </p>
                </div>
                <div>
                    <button className='border active:scale-95 transition border-primary rounded-md text-sm text-primary p-1 px-3'>
                        more ...
                    </button>
                </div>
            </div>
            <span className=' text-gray-500 flex mx-1 text-xs'>1.658 Customer rate</span>
            <div className=' my-3 flex flex-col gap-1'>
                <ul className='flex gap-3  items-center px-4 border-b py-1'>
                    <li className=' pr-10'>
                        <ul className=' flex flex-col items-center'>
                            <li>
                                <Image 
                                  src={AvatarImg} 
                                  width={30} 
                                  height={30} 
                                  alt='' 
                                />
                            </li>
                            <li className='text-xs text-gray-700'>mugiwara</li>
                        </ul>
                    </li>
                    <li className='flex items-center text-sm text-gray-500'>
                        Asperiores, non velit ullam harum soluta eaque tempore veniam veritatis 
                        itaque commodi placeat impedit consequatur reiciendis exercitationem 
                        cupiditate molestiae voluptatem! Voluptates, cupiditate.
                    </li>
                    <li className='flex items-center pl-10 gap-[2px]'>
                        <span>
                            <StarDarkIcon 
                                width='35px' height='35px'
                                color='#06b6d4' 
                            />
                        </span>
                        <span className='font-bold text-primary'>5.0</span>
                    </li>
                </ul>
                <ul className='flex gap-3  items-center px-4 border-b py-1'>
                    <li className=' pr-10'>
                        <ul className=' flex flex-col items-center'>
                            <li>
                                <Image 
                                  src={AvatarImg} 
                                  width={30} 
                                  height={30} 
                                  alt='' 
                                />
                            </li>
                            <li className='text-xs text-gray-700'>mugiwara</li>
                        </ul>
                    </li>
                    <li className='flex items-center text-sm text-gray-500'>
                        Asperiores, non velit ullam harum soluta eaque tempore veniam veritatis 
                        itaque commodi placeat impedit consequatur reiciendis exercitationem 
                        cupiditate molestiae voluptatem! Voluptates, cupiditate.
                    </li>
                    <li className='flex items-center pl-10 gap-[2px]'>
                        <span>
                            <StarDarkIcon 
                                width='35px' height='35px'
                                color='#06b6d4' 
                            />
                        </span>
                        <span className='font-bold text-primary'>5.0</span>
                    </li>
                </ul>
                <ul className='flex gap-3  items-center px-4 border-b py-1'>
                    <li className=' pr-10'>
                        <ul className=' flex flex-col items-center'>
                            <li>
                                <Image 
                                  src={AvatarImg} 
                                  width={30} 
                                  height={30} 
                                  alt='' 
                                />
                            </li>
                            <li className='text-xs text-gray-700'>mugiwara</li>
                        </ul>
                    </li>
                    <li className='flex items-center text-sm text-gray-500'>
                        Asperiores, non velit ullam harum soluta eaque tempore veniam veritatis 
                        itaque commodi placeat impedit consequatur reiciendis exercitationem 
                        cupiditate molestiae voluptatem! Voluptates, cupiditate.
                    </li>
                    <li className='flex items-center pl-10 gap-[2px]'>
                        <span>
                            <StarDarkIcon 
                                width='35px' height='35px'
                                color='#06b6d4' 
                            />
                        </span>
                        <span className='font-bold text-primary'>5.0</span>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Bookings