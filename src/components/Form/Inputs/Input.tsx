import React from 'react'
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import ErrorIcon from '@mui/icons-material/Error';
import { 
   useState,//useState is a Hook that allows you to have state variables in functional components
   DetailedHTMLProps, //DetailedHTMLProps is a generic interface that takes two types: the first is the type of the element you are creating, and the second is the type of the props object that the element accepts. 
   InputHTMLAttributes,//InputHTMLAttribute is a generic interface that takes two types: the first is the type of the element you are creating, and the second is the type of the props object that the element accepts.
   forwardRef 
} from 'react';
import { textFieldStyle} from './styles'
import { IconProps, InputProps } from './interface';
import Box from '@mui/material/Box';



interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
   name?:string;
   type?:string;
   tail?: string;
   error?:boolean | string;
   placeholder?:string;
   variant?:'filled' | 'outlined' | 'standard';
   onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;
   className?:string;
   id?:string;
}

const Icons:IconProps[]=[
     {name:'email',icon:<EmailIcon />},
     {name:'password',icon:<LockIcon/>},
     {name:'username',icon:<PersonIcon/>},
]

export const Input=forwardRef<HTMLInputElement,Props> (({
   className,id,name,error,
   tail,type,placeholder,variant,
   onChange,...reset
   },ref)=>{
     //Default values
     className = className || ''
     id = id || ''
     name = name || ''
     type = type || 'text'
     placeholder = placeholder || ''
     variant = variant || 'outlined'
     onChange = onChange || (()=>{})

  //State
  const [inputValue, setInputValue] = useState<string>('');
  const [inputType, setInputType] = useState<string>(type);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const selectedIcon = Icons.find((icon) => icon.name === name);
  const IconComponent = selectedIcon 
         ? (error ? <ErrorIcon sx={{color:'red'}} /> :selectedIcon.icon )
         : null;
  const IconStyle = { 
     color: inputValue ? 'white' : 'gray',
     marginRight:'5px',
     cursor:'pointer',
   }
  //handle input change
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
     setInputValue(e.target.value);
   };
   //handle change visibility
     const handleChangeVisibility = () => {
          setShowPassword((prevShowPassword) => !prevShowPassword);
          setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
          //change type of input
     };
  return (
     <>
      <TextField 
          id={id}
          name={name}
          ref={ref}
          placeholder={placeholder}
          variant={variant}
          type={inputType}
          className=''
          onChange={handleInputChange}
          sx={[textFieldStyle,
            {
            '& .MuiOutlinedInput-root': {
               '& fieldset': {borderColor: error ? 'red' : 'white',},
               '&:hover fieldset': {borderColor:  error ? 'red' : 'white',},
               '&.Mui-focused fieldset': {borderColor:  error ? 'red' : 'white',},
            },
            borderColor:error ? 'red' :'white',
            borderWidth:error ? 2 : 1
          }
         ]}
          InputProps={{
               startAdornment:  IconComponent && (
               <Box sx={IconStyle}>
                  {IconComponent}
               </Box>
               ),
               endAdornment: type === 'password' && 
                   (<Box sx={IconStyle} onClick={handleChangeVisibility}>
                         {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </Box>),
          }}
          {...reset}
       />
       {tail && (
        <span className='inline-flex items-center rounded-r-md border 
            border-l-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900'>
          {tail}
        </span>
      )}
     </>
  )
})
