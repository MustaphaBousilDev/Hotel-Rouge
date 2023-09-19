import React from 'react'
import ArrowTradingIcon from "@/icons/ArrowTradingIcon";
import IncomeStats from '../statistiques/charts/PieChartWithNeedle';
import PiaWithChartCustom from '../statistiques/charts/PiaWithChartCustom';
import ComposedResponsiveContainer from '../statistiques/charts/ComposedResponsiveContainer';
import TwoSimplePea from '../statistiques/charts/TwoSimplePiaChart';
const Income = () => {
  return (
    <div className='flex flex-col gap-2'>
        <div className='flex flex-col xl:flex-row gap-1'>
            <div className='flex flex-col  xl:w-[22%] gap-1'>
                <div className='bg-white shadow-md border p-2 py-8 border-gray-300 rounded-md flex items-center justify-normal flex-col gap-2'>
                    <div className=''>
                        <h3 className='flex items-center gap-2'>
                            <ArrowTradingIcon color='green'/>
                            <span className='font-bold text-2xl text-gray-800'>
                                24.48%
                            </span>
                        </h3>
                        <p className='text-center text-xs'>Revenue</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='flex flex-col gap-1'>
                            <h3 className='font-bold text-gray-700 text-lg'>$65.35K</h3>
                            <span className='text-xs'>This Month</span>
                        </div>
                        <div className='bg-gray-400 w-[1.5px] h-[90%] my-auto'>

                        </div>
                        <div className='flex flex-col gap-1'>
                            <h3 className='font-bold text-gray-700 text-lg'>$51.35K</h3>
                            <span className='text-xs'>Last Month</span>
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow-md border p-2 py-8 border-gray-300 rounded-md flex items-center justify-normal flex-col gap-2'>
                    <div className=''>
                        <h3 className='flex items-center gap-2'>
                            <ArrowTradingIcon color='red' className=' rotate-180'/>
                            <span className='font-bold text-2xl text-gray-800'>
                                24.48%
                            </span>
                        </h3>
                        <p className='text-center text-xs'>Expensive</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='flex flex-col gap-1'>
                            <h3 className='font-bold text-gray-700 text-lg'>$65.35K</h3>
                            <span className='text-xs'>This Month</span>
                        </div>
                        <div className='bg-gray-400 w-[1.5px] h-[90%] my-auto'>

                        </div>
                        <div className='flex flex-col gap-1'>
                            <h3 className='font-bold text-gray-700 text-lg'>$51.35K</h3>
                            <span className='text-xs'>Last Month</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' lg:w-[100%%] xl:w-[50%] flex flex-col bg-white shadow-md border p-2 py-5 border-gray-300 rounded-md'>
                <div>
                    <p className='text-center font-semibold text-sm mb-3'>Overall Profit Margin</p>
                </div>
                <div className=' hidden xl:flex flex-col lg:flex-row'>
                    <div className='w-[100%] xl:w-[50%] flex relative flex-col'>
                        <span className='absolute left-[50%] top-[30%] text-sm font-semibold translate-x-[-50%] z-[1000]'>
                            Net Profit Margin
                        </span>
                        <IncomeStats/>
                        <p className='text-center text-sm font-bold text-gray-800'>net profit</p>
                        <h3 className='text-center text-2xl font-semibold text-gray-700'>56.35%</h3>
                    </div>
                    <div className=' w-[100%] xl:w-[50%] hidden xl:flex relative flex-col'>
                        <span className='absolute left-[50%] top-[30%] text-sm font-semibold translate-x-[-50%] z-[1000]'>
                            Net Profit Margin
                        </span>
                        <IncomeStats/>
                        <div className='flex flex-col gap-1'>
                            <p className='text-center text-sm font-bold text-gray-800'>net profit</p>
                            <h3 className='text-center text-2xl font-semibold text-gray-700'>56.35%</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='xl:w-[27%] border relative border-gray-300 bg-white relative rounded-md shadow-md'>
                <p className='absolute left-[50%] translate-x-[-50%] top-6 font-bold'>Payments Status</p>
                <PiaWithChartCustom/>
                <ul className='absolute flex gap-2 items-center bottom-8 left-[50%] translate-x-[-50%]'>
                    <li className='w-5 h-5 bg-primary rounded-full'></li>
                    <li className='w-5 h-5 bg-[#0f9ab3] rounded-full'></li>
                    <li className='w-5 h-5 bg-[#158194] rounded-full'></li>
                </ul>
            </div>
        </div>
        <div className=' flex gap-1'>
            <div className='bg-white border w-[50%] border-gray-300 rounded-md'>
                <ComposedResponsiveContainer/>
            </div>
            <div className='bg-white border w-[49%] border-gray-300 rounded-md'>
                <TwoSimplePea/>
            </div>
        </div>
    </div>
  )
}

export default Income