import { TextFieldVariants } from '@mui/material/TextField';

export interface InputProps{
     className?:string,
     id?:string,
     name?:string,
     type?:string,
     placeholder?:string,
     variant?:TextFieldVariants,
     onChange?:()=>void
}

export interface IconProps{
     id?:number,
     name?:string,
     icon?: React.ReactNode;
}
