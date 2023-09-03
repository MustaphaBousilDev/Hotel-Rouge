import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import type { FC } from 'react';
import Image, { StaticImageData } from 'next/image';


interface Props{
     src?:any 
     width?:number 
     height?:number
     alt?:string 
}

export const  AvatarDefault:FC<Props>=({src,width,height,alt})=>{
     //default value 
     src = src || "/profile/profile-removebg-preview.png";
     width=width || 40
     height=height || 70
     alt=alt || 'M'
  return (
    <Stack sx={{borderRadius:'50%',overflow:'hidden',width:40,height:40}}>
      <Image 
            src={src}    
            width={width}
            height={height}
            alt={alt}
           
      />
    </Stack>
  );
}