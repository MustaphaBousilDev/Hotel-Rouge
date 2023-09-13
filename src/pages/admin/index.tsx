import AdminLayout from '@/components/Layouts/AdminLayout';
import React from 'react'
import { Card as CardStatistique} from '@/components/statistiques/cards/Card';
import { Cards as CardStatistiques} from '@/components/statistiques/cards/Cards';
import { signOut } from "next-auth/react"
import UsersIcon from '@/icons/UsersIcon';
import ArrowTradingIcon from '@/icons/ArrowTradingIcon';
import { IconType } from 'react-icons';
import { STATICS } from '@/constants/statics';
import CustomCalendar from '@/components/calendars/build/CustomCalendar';
import { Tasks as TaskEmployee } from '@/components/Tasks/Tasks';
import { CustomTestimonial as TestimonialDash} from '@/components/Testemonials/build/CustomTestimonial';
//----Statistiques Statics
export type TStatic = {
  url: string;
  label: string;
  Icon: any; 
  percent: number;
  total: number;
  IconTradinf?: any;
};
//-------------------------------------------
const AdminDashboard = () => {
  return (
    <AdminLayout>
      {/*Card Statistiques*/}
      <div className='flex min-h-[100vh]  flex-col gap-1 sm:flex-row'>
        <div className='w-[100%] md:w-[60%]  lg:w-[60%] xl:w-[76%] flex  gap-2 flex-col'>
          <CardStatistiques menu={STATICS} />
          <TestimonialDash/>
        </div>
        <div className='w-[100%] md:w-[39%] lg:w-[39%] xl:w-[24%] bg-white rounded-xl hidden md:flex flex-col'>
          <CustomCalendar />
          <TaskEmployee/>
        </div>
      </div>
    </AdminLayout>
  )
}



AdminDashboard.auth = {
  role: 'ADMIN',
};
export default AdminDashboard