import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import Button from '@mui/material/Button';
import swal from 'sweetalert'
import GoogleIcon from '@/icons/GoogleIcon';
import { classNames } from '@/lib/formatters/stringFormat';
import { CgSpinner } from 'react-icons/cg';
import Box from '@mui/material/Box';
interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isSubmitting?: boolean;
  className?: string;
  disabled?: boolean;
  
  title?:string;
  name?:string;
  bg?:string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void> ;
}

const OpenSweet=()=>{
     swal({
       title: "Confirmation",
       text: "Êtes-vous sûr que vous voulez ajouter ce compte ?",
       icon: "info",
       buttons: true,
       infoMode: true,
     })
     .then((willDelete) => {
       if (willDelete) {
         swal("Poof! Your imaginary file has been deleted!", {
           icon: "info",
         });
       } else {
         swal("Your imaginary file is safe!");
       }
     });
   }


interface IconProps{
     id?:number,
     name?:string,
     icon?: React.ReactNode;
}

const Icons:IconProps[]=[
     {name:'google',icon:<GoogleIcon width={20} height={20} />},
     {name:'facebook',icon:<GoogleIcon/>},
     {name:'github',icon:<GoogleIcon/>},
]





export const ButtonBase:React.FC<Props> = ({
     title,
     name,
     isSubmitting,
     className,
     disabled,
     type = 'submit',
     bg='',
     ...props
}) => {
     const StyleButton = {
          width:'100%',
          margin:'10px 0px',
          padding:'13px 0px',
          borderRadius:'5px',
          display:'flex',
          alignItems:'center',
          gap:'10px',
          fontWeight:'bold',
          color: 'white', 
          border:1,
          borderColor:'white',
          position:'relative',
          '&:hover': {
          backgroundColor: '#0f8dc7', // Specify the background color on hover
          },  
          //type submit 
     
          // Change the text color to white
     }
     const IconStyle={
      margin:'0 5px'
     }
     const selectedIcon = Icons.find((icon) => icon.name === name);
     const IconComponent = selectedIcon ? selectedIcon.icon : null;
     return (

          <button
                
                disabled={isSubmitting || disabled}
               {...props}
               type={type} 
               name={name} 
               className={classNames(
                    'flex w-full my-2 relative z-20 justify-center items-center bg-[#0f8dc7] rounded-lg  px-5 py-[15px]',
                    'text-center text-sm font-medium text-white',
                    'focus:outline-none focus:ring-2  ',
                    'transition scale-[0.98] active:scale-100',
                    'sm:w-auto',
                    className ?? ''
               )}>
            <span className={`absolute rounded-md top-0 left-0 w-full h-full bg${`-${bg}`} z-[-2]`} />
            {name && <Box sx={IconStyle}>{IconComponent}</Box>}
            {
               isSubmitting ? <CgSpinner className='mr-2 animate-spin' /> : title
            }
          </button>
     );
}

