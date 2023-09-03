import { TStatic } from '@/pages/admin'
import React from 'react'
import { Card as CardStatic} from './Card'
import UsersIcon from '@/icons/UsersIcon'
import ArrowTradingIcon from '@/icons/ArrowTradingIcon'
interface Props{
    menu?:TStatic[],
    className?:string,
    bgColor?:string
}
export const Cards:React.FC<Props> = ({menu,className,bgColor='bg-white'}) => {
  return (
    <div className=' flex flex-col sm:flex-row gap-2 flex-wrap'>
        {
          menu?.map(({ url, label, Icon, percent, total, IconTradinf  }) =>(
            <CardStatic
                className={`w-[99%] sm:w-[49%] md:w-[49%] lg:w-[49%] xl:w-[24%] rounded-2xl overflow-hidden ${className}`}>
                <div className={`flex items-center gap-3 justify-center h-full ${bgColor}`}>
                    <div className='p-2 bg-primaryLight rounded-xl'>
                    <Icon
                        width='25px'
                        height='25px'
                        color='#06b6d4'
                        className=''/>
                    </div>
                    <div className='flex flex-col gap-2'>
                    <h2 className='font-semibold text-lg'>{label}</h2>
                    <p className='flex items-center flex-wrap gap-6 gap-y-2' >
                        <span className='font-bold text-3xl'>{total}</span>
                        <span className='flex gap-1 items-center'>
                        <IconTradinf
                            color='rgb(133, 247, 148)'
                        /> 
                        <span className='text-sm font-semibold text-green'>
                            {percent}%
                        </span>
                        </span>
                    </p>
                    <p className='text-xs text-gray-300'>last 7 days</p>
                    </div>
                </div>
            </CardStatic>
          )
        )}
        
    </div>
  )
}

