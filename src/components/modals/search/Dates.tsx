import React from 'react'
import { SelectOpt  as SelectFilterSearch} from '@/components/Form/select/SelectOpt'
import {Input as InputSearchField} from '@/components/Form/Inputs/build/Input'
import MenuItem from '@mui/material/MenuItem';
const styles={
  fontSize:15,
}
export const Dates = () => {
  return (
    <div className='gap-5 '>
      <span className='font-[500] px-2 text-sm'>Custom Dates</span>
      <span className='flex gap  items-center'>
        <SelectFilterSearch width={140} title='field '>
            <MenuItem value="none">
              <em>select field</em>
            </MenuItem>
            <MenuItem sx={styles} value={10}>
              
              <span className='font-semibold text-gray-400 text-xs' >username</span>
            </MenuItem>
            <MenuItem sx={styles} value={20}>
             
              <span className='font-semibold text-gray-400 text-xs'>location</span>
            </MenuItem>
            <MenuItem sx={styles} value={30}>
              
              <span className='font-semibold text-gray-400 text-xs'>email</span>
            </MenuItem>
        </SelectFilterSearch>
        <span className='flex gap-2'>
          <InputSearchField 
            type='text' 
            date={true} 
            value={new Date().toLocaleDateString()}
            width='w-36' 
          />
          <InputSearchField 
            type='text' 
            date={true} 
            width='w-36' 
            value={new Date().toLocaleDateString()}
          />
        </span>
        
      </span>
    </div>
  )
}