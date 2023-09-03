import React from 'react'
import { SelectOpt  as SelectFilterSearch} from '@/components/Form/select/SelectOpt'
import {Input as InputSearchField} from '@/components/Form/Inputs/build/Input'
import {Button as ButtonIcon} from '@/components/buttons/build/Button'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from '@mui/material/MenuItem';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
const styles={
  fontSize:15,
}
export const Fields = () => {
  return (
    <div className='gap-5 '>
      <span className='font-[500] px-2 text-sm'>Select Fields</span>
      <span className='flex gap  items-center'>
        <SelectFilterSearch width={150} title='field '>
            <MenuItem value="none">
              <em>select field</em>
            </MenuItem>
            <MenuItem sx={styles} value={10}>
              <PersonSearchIcon className='mr-1 text-gray-400 text-sm' />
              <span className='font-semibold text-gray-400 text-xs' >username</span>
            </MenuItem>
            <MenuItem sx={styles} value={20}>
              <LocationOnIcon className='mr-1 text-gray-400' />
              <span className='font-semibold text-gray-400 text-xs'>location</span>
            </MenuItem>
            <MenuItem sx={styles} value={30}>
              <AttachEmailIcon className='mr-1 text-gray-400' />
              <span className='font-semibold text-gray-400 text-xs'>email</span>
            </MenuItem>
        </SelectFilterSearch>
        <InputSearchField width='w-44' className='focus:w-52' />
        <div className='flex gap-2 mx-1'>
          <ButtonIcon 
            className='border border-gray-300 hover:bg-primary 
            hover:font-bold hover:text-white  text-gray-400 
            w-9 h-9' 
            title={<AddIcon/>}
          />
          <ButtonIcon 
            className='border border-transparent hover:bg-red-400  hover:border-red-400
            hover:font-bold hover:text-white  text-gray-400 
            w-9 h-9' 
            title={<DeleteIcon/>}
          />
        </div>
      </span>
      <span className='flex gap  items-center'>
        <SelectFilterSearch width={150} title='field '>
            <MenuItem value="none">
              <em>select field</em>
            </MenuItem>
            <MenuItem sx={styles} value={10}>
              <PersonSearchIcon className='mr-1 text-gray-400 text-sm' />
              <span className='font-semibold text-gray-400 text-xs' >username</span>
            </MenuItem>
            <MenuItem sx={styles} value={20}>
              <LocationOnIcon className='mr-1 text-gray-400' />
              <span className='font-semibold text-gray-400 text-xs'>location</span>
            </MenuItem>
            <MenuItem sx={styles} value={30}>
              <AttachEmailIcon className='mr-1 text-gray-400' />
              <span className='font-semibold text-gray-400 text-xs'>email</span>
            </MenuItem>
        </SelectFilterSearch>
        <InputSearchField width='w-44'  className='focus:w-52' />
        <div className='flex gap-2 mx-1'>
          <ButtonIcon 
            className='border border-gray-300 hover:bg-primary 
            hover:font-bold hover:text-white  text-gray-400 w-9 h-9' 
            title={<AddIcon/>}
          />
          <ButtonIcon 
            className='border  border-transparent hover:bg-red-400  hover:border-red-400
            hover:font-bold hover:text-white  text-gray-400 w-9 h-9' 
            title={<DeleteIcon/>}
          />
        </div>
      </span>
    </div>
  )
}
