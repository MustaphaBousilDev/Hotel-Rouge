import React from 'react'
import { CheckBox  as Check} from '@/components/Form/CheckBox/CheckBox'
import { SelectOpt  as SelectFilterSearch} from '@/components/Form/select/SelectOpt'
import MenuItem from '@mui/material/MenuItem';
const styles = {
  '& .MuiSvgIcon-root': {
    color: 'red',
},
}
export const Filter = () => {
  return (
    <div className='flex gap-5'>
      <span className='flex gap-0 items-center'>
        <Check size='small' color='blue' />
        <span className='font-[500] text-sm'>Match</span>
      </span>
      <span className='flex gap-0 items-center'>
        <SelectFilterSearch>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem sx={{fontSize:15}} value={10}>Ten</MenuItem>
            <MenuItem sx={{fontSize:15}} value={20}>Twenty</MenuItem>
            <MenuItem sx={{fontSize:15}} value={30}>Thirty</MenuItem>
        </SelectFilterSearch>
        <span className='font-[500] text-sm'>of the following rules</span>
      </span>
    </div>
  )
}

