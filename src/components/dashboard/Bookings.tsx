import React from 'react'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { SelectOpt } from '../Form/select/SelectOpt'
import { BOOKING_DASH_STATICS } from '@/constants/statics';
import { Cards as CardStatistiques} from '@/components/statistiques/cards/Cards';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import roomImg from '@/assets/hotel/roooms.jpg';
import PieChartRooms from '../statistiques/charts/PieChart';
const styleImg={
    borderRadius:10
}
const Bookings = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-4'>
        <div className='bg-white rounded-3xl shadow-lg p-5 px-4 w-[98%] mx-auto xl:mx-0 xl:w-[65.5%]'>
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
        <div className=' border-4 border-primary bg-white rounded-3xl shadow-lg p-3 px-2 w-[98%] h-96 relative mx-auto xl:mx-0 xl:w-[34%]'>
            <PieChartRooms/>
        </div>
    </div>
  )
}

export default Bookings