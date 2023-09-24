import React from 'react'
import BarChartSimple from '../statistiques/charts/SimpleBarChart'
import PieChartWithCustomizedLabel from '../statistiques/charts/PieChartWithCustomizedLabel'
import VerticalCompChart from '../statistiques/charts/VerticalComposedChart'

const Orders = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col xl:flex-row gap-2 min-h-60 xl:h-60' >
        <div className='bg-white flex flex-col gap-1 rounded-md shadow-md w-full  xl:w-[49.5%] h-full'>
            <BarChartSimple/>
        </div>
        <div className=' flex gap-2 w-full xl:w-[49.5%] h-full'>
            <div className='bg-white w-[49.5%] rounded-md shadow-md'>
              <PieChartWithCustomizedLabel />
            </div>
            <div className='bg-white w-[49.5%]  rounded-md shadow-md'>
              <PieChartWithCustomizedLabel/>
            </div>
        </div> 
      </div>
      <div className='flex flex-col xl:flex-row gap-2'>
        <div className='bg-white w-full xl:w-[49.5%] rounded-md flex-col shadow-md p-2 py-7 relative flex items-center justify-center'>
          <h3 className='text-center text-sm font-bold text-gray-700 py-3'>Top Selling Food</h3>
          <div className=' bg-[#158194] relative w-56 h-56  lg:w-80 lg:h-80 rounded-full flex items-center justify-center'>
            <h3 className='text-white font-bold text-2xl'>1.987$</h3>
            <div className='absolute top-3 -left-16 z-40 w-24 h-24 lg:w-44 lg:h-44 bg-primary rounded-full flex items-center justify-center'>
              <h3 className='text-white font-bold text-2xl'>565$</h3>
            </div>
            <div className='absolute -bottom-0  -left-16 z-40 w-28 h-28 lg:w-32 lg:h-32 bg-[#92d9e6] rounded-full flex items-center justify-center'>
              <h3 className='text-white font-bold text-xl'>565$</h3>
            </div>
          </div>
        </div>
        <div className='bg-white w-full xl:w-[49.5%] rounded-md shadow-md p-2 py-7  flex flex-col '>
          <h3 className='text-center font-bold text-xl'>Top Something</h3>
          <VerticalCompChart/>
        </div>
      </div>
    </div>
  )
}

export default Orders