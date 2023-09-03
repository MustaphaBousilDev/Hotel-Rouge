import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import {Button} from '@/components/buttons/build/Button'
export const  Footer = () => {
  return (
    <div className=' flex items-center my-2 justify-between px-4' >
      <div className='flex gap-2 items-center font-bold text-gray-500 text-sm'>
        <TuneIcon />
        <span>Save Filter</span>
      </div>
      <div className=' flex items-center gap-3'>
        <Button title='Cancel' className='bg-gray-100 text-gray-500 px-3' />
        <Button title='Apply' className='bg-blue-500 text-white px-3' />
      </div>
    </div>
  )
}

