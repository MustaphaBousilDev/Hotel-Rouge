import React from 'react'
import BarChartSimple from '../statistiques/charts/SimpleBarChart'
import PieChartWithCustomizedLabel from '../statistiques/charts/PieChartWithCustomizedLabel'

const Orders = () => {
  return (
    <div className='flex gap-2 h-60' >
        <div className='bg-white rounded-md shadow-md  w-[49%] h-full'>
            <BarChartSimple/>
        </div>
        <div className=' flex gap-2 w-[49%] h-full'>
            <div className='bg-white w-[49%] rounded-md shadow-md'>
              <PieChartWithCustomizedLabel />
            </div>
            <div className='bg-white w-[49%]  rounded-md shadow-md'>
              <PieChartWithCustomizedLabel/>
            </div>
        </div> 
    </div>
  )
}

export default Orders