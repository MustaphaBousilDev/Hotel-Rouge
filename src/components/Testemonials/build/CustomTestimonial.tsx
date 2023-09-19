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
import Income from '@/components/dashboard/Income'
import { Tasks  as TasksDash} from '@/components/dashboard/Tasks'

const componentsDash={
    'GUASTS': <Guasts/>,
    'EMPLOYE' : <Employée/>,
    'BOOKINGS': <Bookings/>,
    'ORDERS': <Orders/>,
    'ROOMS':<Rooms/>,
    'SERVICES':<Services/>,
    'TASKS':<TasksDash/>,
    'INCOME':<Income/>
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
            className={`w-[12.5%] border-r cursor-pointer transition duration-300  px-3 ${selectedComponent === 'GUASTS' ? 'bg-primary ' : ''}`}>
                <div className='flex gap-2 justify-center items-center h-full'>
                    <span>
                        <UsersIcon color={`${selectedComponent==='GUASTS' ? '#fff' : 'rgb(107 114 128)'}`}/>
                    </span>
                    <span className={`
                    hidden xl:flex text-xs xl:text-sm text-gray-700
                    ${selectedComponent === 'GUASTS' ? 'text-white' : ''}
                    `}>
                        Guasts
                    </span>
                </div>
                
            </li>
            <li
            onClick={()=>setSelectedComponent('EMPLOYE')} 
            className={`w-[12.5%] border-r cursor-pointer transition duration-300  px-3 ${selectedComponent === 'EMPLOYE' ? 'bg-primary ' : ''}`}>
                <div className='flex gap-2 justify-center items-center h-full '>
                    <span>
                        <UsersIcon color={`${selectedComponent==='EMPLOYE' ? '#fff' : 'rgb(107 114 128)'}`}/>
                    </span>
                    <span className={`
                    hidden xl:flex text-xs xl:text-sm text-gray-700
                    ${selectedComponent === 'EMPLOYE' ? 'text-white' : ''}
                    `}>
                        Employée
                    </span>
                </div>
            </li>
            <li 
            onClick={()=>setSelectedComponent('INCOME')} 
            className={`w-[12.5%] border-r cursor-pointer transition duration-300  px-3 ${selectedComponent === 'INCOME' ? 'bg-primary ' : ''}`}>
                <div className='flex gap-2 justify-center items-center h-full '>
                    <span>
                        <UsersIcon color={`${selectedComponent==='INCOME' ? '#fff' : 'rgb(107 114 128)'}`}/>
                    </span>
                    <span className={`
                    hidden xl:flex text-xs xl:text-sm text-gray-700
                    ${selectedComponent === 'INCOME' ? 'text-white' : ''}
                    `}>
                        Income
                    </span>
                </div>
            </li>
            <li 
            onClick={()=>setSelectedComponent('BOOKINGS')} 
            className={`w-[12.5%] border-r cursor-pointer transition duration-300  px-3 ${selectedComponent === 'BOOKINGS' ? 'bg-primary ' : ''}`}>
                <div className='flex gap-2 justify-center items-center h-full '>
                    <span>
                        <UsersIcon color={`${selectedComponent==='BOOKINGS' ? '#fff' : 'rgb(107 114 128)'}`}/>
                    </span>
                    <span className={`
                    hidden xl:flex text-xs xl:text-sm text-gray-700
                    ${selectedComponent === 'BOOKINGS' ? 'text-white' : ''}
                    `}>
                        Bookings
                    </span>
                </div>
            </li>
            <li 
            onClick={()=>setSelectedComponent('ORDERS')} 
            className={`w-[12.5%] border-r cursor-pointer transition duration-300  px-3 ${selectedComponent === 'ORDERS' ? 'bg-primary ' : ''}`}>
                <div className='flex gap-2 justify-center items-center h-full '>
                    <span>
                        <UsersIcon color={`${selectedComponent==='ORDERS' ? '#fff' : 'rgb(107 114 128)'}`}/>
                    </span>
                    <span className={`
                    hidden xl:flex text-xs xl:text-sm text-gray-700
                    ${selectedComponent === 'ORDERS' ? 'text-white' : ''}
                    `}>
                        Orders
                    </span>
                </div>
            </li>
            <li 
            onClick={()=>setSelectedComponent('ROOMS')} 
            className={`w-[12.5%] border-r cursor-pointer transition duration-300  px-3 ${selectedComponent === 'ROOMS' ? 'bg-primary ' : ''}`}>
                <div className='flex gap-2 justify-center items-center h-full '>
                    <span>
                        <UsersIcon color={`${selectedComponent==='ROOMS' ? '#fff' : 'rgb(107 114 128)'}`}/>
                    </span>
                    <span className={`
                    hidden xl:flex text-xs xl:text-sm text-gray-700
                    ${selectedComponent === 'ROOMS' ? 'text-white' : ''}
                    `}>
                        Rooms
                    </span>
                </div>
            </li>
            <li 
            onClick={()=>setSelectedComponent('SERVICES')} 
            className={`w-[12.5%] border-r cursor-pointer transition duration-300  px-3 ${selectedComponent === 'SERVICES' ? 'bg-primary ' : ''}`}>
                <div className='flex gap-2 justify-center items-center h-full '>
                    <span>
                        <UsersIcon color={`${selectedComponent==='SERVICES' ? '#fff' : 'rgb(107 114 128)'}`}/>
                    </span>
                    <span className={`
                    hidden xl:flex text-xs xl:text-sm text-gray-700
                    ${selectedComponent === 'SERVICES' ? 'text-white' : ''}
                    `}>
                        Services
                    </span>
                </div>
            </li>
            <li 
            onClick={()=>setSelectedComponent('TASKS')} 
            className={`w-[12.5%] border-r cursor-pointer transition duration-300  px-3 ${selectedComponent === 'TASKS' ? 'bg-primary ' : ''}`}>
                <div className='flex gap-2 justify-center items-center h-full '>
                    <span>
                        <UsersIcon color={`${selectedComponent==='TASKS' ? '#fff' : 'rgb(107 114 128)'}`}/>
                    </span>
                    <span className={`
                    hidden xl:flex text-xs xl:text-sm text-gray-700
                    ${selectedComponent === 'TASKS' ? 'text-white' : ''}
                    `}>
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