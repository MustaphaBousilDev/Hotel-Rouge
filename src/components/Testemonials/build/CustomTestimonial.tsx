import React, { useEffect, useState } from 'react'
import BookingIcon from '@/icons/BookingIcon'
import OrdersIcon from '@/icons/OrdersIcon'
import UsersIcon from '@/icons/UsersIcon'
import Guasts from '@/components/dashboard/Guasts'
import Employée from '@/components/dashboard/Employée'
import Bookings from '@/components/dashboard/Bookings'
import Orders from '@/components/dashboard/Orders'
import Rooms from '@/components/dashboard/Rooms'
import Services from '@/components/dashboard/Services'
import { Tasks  as TasksDash} from '@/components/dashboard/Tasks'
const componentsDash={
    'GUASTS': <Guasts/>,
    'EMPLOYE' : <Employée/>,
    'BOOKINGS': <Bookings/>,
    'ORDERS': <Orders/>,
    'ROOMS':<Rooms/>,
    'SERVICES':<Services/>,
    'TASKS':<TasksDash/>
}

export const CustomTestimonial = () => {
    const [selectedComponent, setSelectedComponent] = useState('GUASTS');
    const FocusComponents = (option:string) => {
        return componentsDash[option];
    }
  
  return (
    <div className='  '>
        <ul className='flex  h-10 bg-white border w-[98%] mr-auto rounded-3xl overflow-hidden'>
            <li
            onClick={()=>setSelectedComponent('GUASTS')}
            className={`w-[12.5%] border-r cursor-pointer transition duration-300  px-3 ${selectedComponent === 'GUASTS' ? 'bg-blue-500' : ''}`}>
                <div className='flex gap-2 justify-center items-center h-full'>
                    <span>
                        <UsersIcon color='rgb(107 114 128)'/>
                    </span>
                    <span className='hidden xl:flex text-xs xl:text-sm text-gray-700'>
                        Guasts
                    </span>
                </div>
                
            </li>
            <li
            onClick={()=>setSelectedComponent('EMPLOYE')} 
            className={`w-[12.5%] border-r cursor-pointer transition duration-300  px-3 ${selectedComponent === 'EMPLOYE' ? 'bg-blue-500' : ''}`}>
                <div className='flex gap-2 justify-center items-center h-full '>
                    <span>
                        <UsersIcon color='rgb(107 114 128)'/>
                    </span>
                    <span className='hidden xl:flex text-xs xl:text-sm text-gray-700'>
                        Employée
                    </span>
                </div>
            </li>
            <li 
            onClick={()=>setSelectedComponent('EMPLOYE')} 
            className={`w-[12.5%] border-r cursor-pointer transition duration-300  px-3 ${selectedComponent === 'EMPLOYE' ? 'bg-blue-500' : ''}`}>
                <div className='flex gap-2 justify-center items-center h-full '>
                    <span>
                        <UsersIcon color='rgb(107 114 128)'/>
                    </span>
                    <span className='hidden xl:flex text-xs xl:text-sm text-gray-700'>
                        Employee
                    </span>
                </div>
            </li>
            <li 
            onClick={()=>setSelectedComponent('BOOKINGS')} 
            className={`w-[12.5%] border-r cursor-pointer transition duration-300  px-3 ${selectedComponent === 'BOOKINGS' ? 'bg-blue-500' : ''}`}>
                <div className='flex gap-2 justify-center items-center h-full '>
                    <span>
                        <UsersIcon color='rgb(107 114 128)'/>
                    </span>
                    <span className='hidden xl:flex text-xs xl:text-sm text-gray-700'>
                        Bookings
                    </span>
                </div>
            </li>
            <li 
            onClick={()=>setSelectedComponent('ORDERS')} 
            className={`w-[12.5%] border-r cursor-pointer transition duration-300  px-3 ${selectedComponent === 'ORDERS' ? 'bg-blue-500' : ''}`}>
                <div className='flex gap-2 justify-center items-center h-full '>
                    <span>
                        <UsersIcon color='rgb(107 114 128)'/>
                    </span>
                    <span className='hidden xl:flex text-xs xl:text-sm text-gray-700'>
                        Orders
                    </span>
                </div>
            </li>
            <li 
            onClick={()=>setSelectedComponent('ROOMS')} 
            className={`w-[12.5%] border-r cursor-pointer transition duration-300  px-3 ${selectedComponent === 'ROOMS' ? 'bg-blue-500' : ''}`}>
                <div className='flex gap-2 justify-center items-center h-full '>
                    <span>
                        <UsersIcon color='rgb(107 114 128)'/>
                    </span>
                    <span className='hidden xl:flex text-xs xl:text-sm text-gray-700'>
                        Rooms
                    </span>
                </div>
            </li>
            <li 
            onClick={()=>setSelectedComponent('SERVICES')} 
            className={`w-[12.5%] border-r cursor-pointer transition duration-300  px-3 ${selectedComponent === 'SERVICES' ? 'bg-blue-500' : ''}`}>
                <div className='flex gap-2 justify-center items-center h-full '>
                    <span>
                        <UsersIcon color='rgb(107 114 128)'/>
                    </span>
                    <span className='hidden xl:flex text-xs xl:text-sm text-gray-700'>
                        Services
                    </span>
                </div>
            </li>
            <li 
            onClick={()=>setSelectedComponent('TASKS')} 
            className={`w-[12.5%] border-r cursor-pointer transition duration-300  px-3 ${selectedComponent === 'TASKS' ? 'bg-blue-500' : ''}`}>
                <div className='flex gap-2 justify-center items-center h-full '>
                    <span>
                        <UsersIcon color='rgb(107 114 128)'/>
                    </span>
                    <span className='hidden xl:flex text-xs xl:text-sm text-gray-700'>
                        Tasks
                    </span>
                </div>
            </li>
        </ul>
        <div className='my-4 h-[67vh] w-[98%] mr-auto '>
            {FocusComponents(selectedComponent)}
        </div>
    </div>
  )
}