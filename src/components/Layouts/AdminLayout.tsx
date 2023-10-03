import React from 'react'
import type { FC } from 'react';
import {env} from '@/env/client.mjs'
import Head from 'next/head';

import { NavbarDash as Navbar } from '../Navbar/NavbarDash';
import {Sidebar as SideBar} from '../Navbar/SideBar'
import { ADMIN_NAV } from '@/constants/admin-nav';

interface Props{
     children?:React.ReactNode 
} 

const AdminLayout:FC<Props>= ({children}) => {
  return (
    <div className='flex flex-col min-h-full w-full bg-bgDashboard'>
     <Head>
       <title>{env.NEXT_PUBLIC_APP_NAME}</title>
     </Head>
     <SideBar menu={ADMIN_NAV} />
     <div className='relative  ml-[6rem] flex flex-grow  bg-dashboard flex-col xl:overflow-hidden'>
        <div className='absolute inset-x-0 top-0 -z-10 min-h-[100vh]  bg-gradient-to-br' />
          <nav className=' flex w-auto  rounded-xl m-4 mx-2 justify-end'>
            <Navbar/>
          </nav>
          <div className=' min-h-[90vh] mt-[2rem] p-2  bg-bgDashboard ml-[-2rem] lg:ml-[12rem] h-[120vh]'>
            {children}
          </div>
     </div>
     <footer className='ml-[18rem]'>
          footer dashboard 
     </footer>
    </div>
  )
}

export default AdminLayout