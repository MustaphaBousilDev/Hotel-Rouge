import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { styled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';


dayjs.extend(isBetweenPlugin);

interface CustomPickerDayProps extends PickersDayProps<Dayjs> {
  isSelected: boolean;
  isHovered: boolean;
}
const dayStyle = {
    // Add your Day component styles here
    // For example:
    padding: '8px',
    //borderRadius: '50%',
    //margin: '4px',
    cursor: 'pointer',
    width: '30px',
    height: '30px',
  };
  const calendarStyle = {
    // Add your DateCalendar styles here
    // For example:
    padding: '5px',
    //backgroundColor: '#fff',
    height:'310px',
    
  };


const CustomPickersDay = styled(PickersDay, {
    shouldForwardProp: (prop) => prop !== 'isSelected' && prop !== 'isHovered',
  })<CustomPickerDayProps>(({ theme, isSelected, isHovered, day }) => ({
    borderRadius: 0,
    ...(isSelected && {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.primary.main,
      },
    }),
    ...(isHovered && {
      backgroundColor: theme.palette.primary[theme.palette.mode],
      '&:hover, &:focus': {
        backgroundColor: theme.palette.primary[theme.palette.mode],
      },
    }),
    ...(day.day() === 0 && {
      borderTopLeftRadius: '50%',
      borderBottomLeftRadius: '50%',
    }),
    ...(day.day() === 5 && {
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
    }),
  })) as React.ComponentType<CustomPickerDayProps>;



const isInSpecificDaysRange = (day: Dayjs, startDay: Dayjs | null, endDay: Dayjs | null) => {
    if (startDay === null || endDay === null) {
      return false;
    }
  
    return day.isSame(startDay, 'day') || day.isSame(endDay, 'day') || (day.isAfter(startDay, 'day') && day.isBefore(endDay, 'day'));
  };

  function Day(
    props: PickersDayProps<Dayjs> & {
      selectedDay?: Dayjs | null;
      startDay?: Dayjs | null; // Added startDay and endDay props
      endDay?: Dayjs | null;
    },
  ) {
    const { day, selectedDay, startDay, endDay, ...other } = props;
  
    return (
      <CustomPickersDay
        {...other}
        day={day}
        sx={{ px: 1, py: 0.5 }} 
        disableMargin
        selected={false}
        isSelected={isInSpecificDaysRange(day, startDay, endDay)} // Use the new function
        isHovered={false} // Or implement hover logic based on your requirement
      />
    );
  }


  export default function WeekPicker() {
    const [hoveredDay, setHoveredDay] = React.useState<Dayjs | null>(null);
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
    const startDay = dayjs('2022-04-10'); // Specify the start day
    const endDay = dayjs('2022-04-15'); // Specify the end day
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={value}
          onChange={(newValue) => setValue(newValue)}
          showDaysOutsideCurrentMonth
          displayWeekNumber
          slots={{ day: Day }}
          slotProps={{
            day: (ownerState) =>
              ({
                selectedDay: value,
                startDay,
                endDay,
                onPointerEnter: () => setHoveredDay(ownerState.day),
                onPointerLeave: () => setHoveredDay(null),
                style: {
                    ...dayStyle,
                    //background red if day is between startDay and endDay
                    backgroundColor: isInSpecificDaysRange(ownerState.day, startDay, endDay)
                      ? (ownerState.day.isSame(startDay, 'day') || ownerState.day.isSame(endDay, 'day') ? '#06b6d4' : '#dee8fd')
                      : undefined,
                    borderRadius: ownerState.day.isSame(endDay, 'day') ? '0px 10px 10px 0px ' : (ownerState.day.isSame(startDay, 'day')  ? '10px 0px 0px 10px' : undefined),
                    
                    //if day is equal startDay or endDay then add border
                    //border:  ? '1px solid #000' : undefined,
                },
              } as any),
          }}
          style={calendarStyle} // Apply the calendarStyle here
        />
      </LocalizationProvider>
    );
  }