import React from 'react'
import type { IconType } from 'react-icons/lib';
import { Disclosure, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { BiBorderRadius } from 'react-icons/bi';
import HyperLink from '../link/HyperLink';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LogoIcon from '@/icons/LogoIcon'

export type TLink = {
     url: string;
     label: string;
     Icon: IconType;
     sub?: TLink[];
};

const LinksDisclosure = ({link: { Icon, label, sub, url },}: {link: TLink & { sub: TLink[] };}) => {
     const [rotate, setRotate] = React.useState<string>('0');
     const ArrowIconStyle={
      width:'15px',
      height:'15px',
      transform:`rotate(${rotate}deg)`,
      Transition:'all 1s ease-in-out',
      //media query xs min width 480px
      '@media (min-width:480px)':{display:'none'},
      '@media (min-width:640px)':{display:'none'},
      '@media (min-width:768px)':{display:'none'},
      '@media (min-width:1024px)':{display:'block'},
     }
     const { pathname } = useRouter();
     return (
       <Disclosure as={'li'}>
         {({}) => (
           <>
             <Disclosure.Button
                as={'div'}
                onClick={() => setRotate(rotate === '0' ? '90' : '0')}
               className={`flex cursor-pointer 
               justify-center lg:justify-between  items-center
               transition duration-300 ease-in-out
               rounded-sm md:p-1 lg:p-2 ${
                 pathname === url
                   ? 'font-semibold text-white bg-primary rounded-md'
                   : 'text-primary bg-grayLight py-2 hover:text-white hover:bg-primary lg:hover:pl-3'
               }`}
             >
               <div className='flex lg:gap-2 items-center'>
                  <Icon className=' h-7 w-7' />
                  <span className=' xs:hidden sm:hidden md:hidden lg:flex lg:text-sm lg:text-md'>{label}</span>
               </div>
               <ArrowForwardIosIcon sx={ArrowIconStyle} />
             </Disclosure.Button>
             <Transition
               enter='transition duration-300 ease-out'
               enterFrom='transform translate-y-1 opacity-0'
               enterTo='transform translate-y-0 opacity-100'
               leave='transition duration-100 ease-out'
               leaveFrom='transform translate-y-0 opacity-100'
               leaveTo='transform translate-y-1 opacity-0'
             >
               <Disclosure.Panel as='ul' className='space-y-2 text-sm'>
                 {sub.map(({ url, label, Icon }) => (
                   <SideBarLink
                     key={url}
                     link={{ url, label, Icon }}
                     className='lg:ml-4 border-l-2 my-2  hover:border-primary'
                   />
                 ))}
               </Disclosure.Panel>
             </Transition>
           </>
         )}
       </Disclosure>
     );
};

const SideBarLink = ({link: {url,label,Icon},className,}: {link:TLink;className?:string;}) => {
     const { pathname } = useRouter();
     return (
       <li key={url}>
         <HyperLink
           href={url}
           className={`flex items-center justify-center md:justify-start  rounded-md  bg-grayLight p-[10px] md:py- ${
             pathname === url
               ? 'font-semibold text-primary  bg-primary_light rounded-xl'
               : 'text-primary bg-grayLight py-2 hover:text-white hover:bg-primary hover:pl-3'
           } ${className}`}
         >
           <div className='flex  lg:gap-3  ite*'>
                <Icon className=' h-[18px] w-[18px] lg:h-6 lg:w-6 ' />
                <span className=' xs:hidden sm:hidden md:hidden lg:flex' >{label}</span>
           </div>
         </HyperLink>
       </li>
     );
};


export const Sidebar = ({ menu, title } : { menu: TLink[]; title?: string }) => {
  return (
    <div className=' top-0  z-[500] fixed flex flex-col left-0 w-[4rem] md:w-[4rem] lg:w-[18rem] h-[100vh] '>
      <div className='h-full bg-white overflow-y-scroll scrollbar-hide   py-2 px-2 lg:px-4 lg:py-4'>
        <span className='flex items-center justify-center  whitespace-nowrap text-2xl font-bold uppercase text-gray-800'>
          {title ?? (
            <LogoIcon 
              color="#06b6d4" 
              width='160px' 
              height='60px' 
            />
          )
          }
        </span> 
        <ul className='space-y-2 text-base font-medium'>
          {
          menu.map(({ url, label, Icon, sub }) =>(
            sub && sub.length ? (
              <LinksDisclosure key={url} link={{url,label,Icon,sub}} />
            ) : (<SideBarLink key={url} link={{url,label,Icon}} />)
          )
          )}
        </ul>
      </div>
    </div>
  )
}

