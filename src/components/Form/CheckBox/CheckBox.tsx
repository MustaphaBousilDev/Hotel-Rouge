import React from 'react'
import Checkbox from '@mui/material/Checkbox';

interface Props {
  size?: 'small' | 'medium' | 'large' | undefined;
  color?: string | undefined;
}






const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const CheckBox:React.FC<Props> = ({size,color}) => {
    //default value 
    size=undefined


    //---styles 
    const defaultCheckBoxStyle = {
      '& .MuiSvgIcon-root': {
          color: color,
          fontSize:18
      },
      
    }
  return (
     <>
     <Checkbox 
          {...label} 
          size={size}
          sx={defaultCheckBoxStyle}
     />
     </>
  )
}

