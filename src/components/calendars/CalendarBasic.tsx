import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


interface Props {
     className?:string;
     /*active?:boolean;*/
}

export  const   DateCalendarValue:React.FC<Props>=({className/*,active=false*/})=> {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
     const [open, setOpen] = React.useState<boolean>(true);
  const handleClick = () => {
     setOpen(false);
  }
  
  /*React.useEffect(() => {
     setOpen(active)
  },[])*/
  return (  
    <>
     <div className={` bg-white rounded-lg shadow-2xl ${className}`}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateCalendar', 'DateCalendar']}>
          
          <DemoItem label="">
               <DateCalendar 
                    value={value} 
                    onChange={(newValue) => {setValue(newValue)}} 
               />
          </DemoItem>
          </DemoContainer>
          </LocalizationProvider>
           
     </div>
    </>
  );
}