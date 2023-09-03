import React from 'react'
import CustomIMG from '@/components/ImageCom/CustomIMG'
import Mugiwara from "@/assets/avatars/1.png"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
export const Item = () => {
  return (
    <div className='w-full flex gap-3 h-[5rem] p-4 py-2 border-b'>
     <CustomIMG 
          src={Mugiwara} 
          alt='img' 
          className='w-[45px] h-[45px] rounded-full'
     />
     <div className=' font-[300]'>
          <span className='font-medium mr-1'>Mugiwara Luffy </span>
           repled to your fucking comment: "Hello worlds"
           <p className='text-grayText items-center flex gap-2 font-[200]'>
               <ChatBubbleOutlineIcon sx={{fontSize:14}}/>
               <span className='text-sm'>just now</span>
          </p>
     </div>
     <div>

     </div>
    </div>
  )
}

