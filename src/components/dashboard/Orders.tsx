import React from 'react'
import BarChartSimple from '../statistiques/charts/SimpleBarChart'
import PieChartWithCustomizedLabel from '../statistiques/charts/PieChartWithCustomizedLabel'

const Orders = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2 h-60' >
        <div className='bg-white flex flex-col gap-1 rounded-md shadow-md  w-[49%] h-full'>
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
      <div className='bg-white w-[49%] rounded-md flex-col shadow-md p-2 relative flex items-center justify-center'>
        <h3 className='text-center text-sm font-bold text-gray-700 py-3'>Top Selling Food</h3>
        <div className=' bg-[#158194] relative  w-80 h-80 rounded-full flex items-center justify-center'>
          <h3 className='text-white font-bold text-2xl'>1.987$</h3>
          <div className='absolute top-3 -left-16 z-40 w-44 h-44 bg-primary rounded-full flex items-center justify-center'>
            <h3 className='text-white font-bold text-2xl'>565$</h3>
          </div>
          <div className='absolute -bottom-0  -left-16 z-40 w-32 h-32 bg-[#92d9e6] rounded-full flex items-center justify-center'>
            <h3 className='text-white font-bold text-xl'>565$</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders