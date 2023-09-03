import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { set } from 'date-fns';
import {DateCalendarValue as CalendarSearch} from '@/components/calendars/CalendarBasic'
interface Props {
     name?:string;
     type?:string;
     tail?: string;
     error?:boolean | string;
     placeholder?:string;
     id?:string;
     value?:string;
     className?:string;
     width?:string;
     date?:boolean
     
     
}

const styleCalendar = {
     position:'absolute',
     top:'50%',
     right:'10px',
     transform:'translateY(-50%)',
     color:'#9CA3AF',
     fontSize:'18px',
     cursor:'pointer',
     
     zIndex:1,
     //hover
     '&:hover':{
          color:'#1F2937',
     }

}

export const Input:React.FC<Props> = ({
     name,
     type,
     tail,
     error,
     placeholder,
     id,
     className,
     ...props 

}) => {
     //Default values
     className = className || ''
     id = id || ''
     name = name || ''
     type = type || 'text'
     placeholder = placeholder || 'Search...'
     props.value = props.value || ''



     //function handle Calendar
     const [date, setDate] = React.useState<any>(new Date());
     const [open , setOpen] = React.useState<boolean>(false);
     const handleCalendar = () => {
          setOpen(!open)
     }
  return (
     //function handle Calendar 
    
    <div className='relative input__date-search'>
     <input
        {...props}
        type={type}
        value={props.value}
        placeholder={placeholder}
        className={`border border-gray-300 py-[10px]
        transition-all duration-100 focus:border-primary focus:placeholder:opacity-0
        rounded-md outline-none  ${props.width} px-2  ${className}`} 
     />
     {
          props.date && (
               <CalendarTodayIcon 
                    sx={styleCalendar} 
                    onClick={handleCalendar}
               /> 
          )
     }
     {
          open && (
               <></>
          )
     }
     
    </div>
  )
}

