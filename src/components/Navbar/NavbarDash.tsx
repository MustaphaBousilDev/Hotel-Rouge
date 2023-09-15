import React, { useEffect, useRef } from 'react'
import { InputSearch as Search} from '../Form/Inputs/InputSearch'
import type { FC } from 'react'
import SanIcon from '@/icons/SanIcon'
import MoonIcon from '@/icons/MoonIcon'
import CartShoppingIcon from '@/icons/CartShoppingIcon'
import NotificationIcon from '@/icons/NotificationIcon'
import GridIcon from '@/icons/GridIcon'
import {  AvatarDefault as UserIMG} from '../Avatar/AvatarDefault'
import userIMG from '@/assets/profile/mugiwara.jpg'
import { ModalBasic  as ModalNotification} from '../modals/ModalBasic'
import { ModalAvatar as ModalAvatarProfile } from '../modals/ModalAvatar'
import { Header  as HeaderModal} from '../modals/notification/Header'
import {Header as HeaderAvatar} from '../modals/avatar/Header'
import { Context  as ContentAvatar} from '../modals/avatar/Context'
import { Content  as ContentModal} from '../modals/notification/Content'
import { Footer  as FooterModal} from '../modals/notification/Footer'
export const NavbarDash:React.FC = () => {
  const [isDark, setIsDark] = React.useState<boolean>(false)
  const [isScrolled,setIsScrolled]=React.useState<boolean>(false);
  //modal notification 
  const [active,setActive]=React.useState<boolean>(false)
  //modal avatar 
  const [activeAvatar,setActiveAvatar]=React.useState<boolean>(false)
  //modal search
  const [modalSearch, setModalSearch] = React.useState<boolean>(false)
  //-----------------for modal------------------
  const modalRef = useRef<HTMLDivElement>(null);
  //-----------------------------------
  const handleDark = () => setIsDark(!isDark)
  const handleModalNotif=()=> setActive(!active)
  const handleActiveAvatar=()=> setActiveAvatar(!activeAvatar)
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY > 0){
        setIsScrolled(true)
      }else{ 
        setIsScrolled(false)
      }
    }
    const handleDocumentClick = (e: MouseEvent) => {
      // Check if the clicked element is inside the NotificationIcon
      const parentElement: Element | null = e.target?.parentElement?.parentElement;
      if(!parentElement?.classList.contains("notification")){
        setActive(false)
      }
      if(!parentElement?.classList.contains("avatar_picture")){
        setActiveAvatar(false)
      }
     
    };
    window.addEventListener('scroll',handleScroll)
    document.addEventListener('click', handleDocumentClick);
    return ()=>{
      //f7alat maskrolitch  tkhdm liya function
      window.removeEventListener('scroll',handleScroll)
    }

    

    

  },[])
  return (
    <div className={`fixed bg-white flex transition-all duration-150 items-center px-8  top-0 
      sm:left-[3rem] md:left-[3rem] lg:left-[18rem] w-full z-[10000] h-[4rem]
      ${isScrolled && 'h-[68px] shadow-navbar-bottom'}`}>
      <div className='sm:w-[40%] md:w-[70%] lg:w-[60%] xl:w-[85%] h-[80%]  flex  '>
        <Search 
          modalSearchProps={modalSearch}
          width='w-[20rem]'
          className='h-[2.5rem]'
        />
        <div className='fixed top-2 xs:w-[74%] sm:w-[80%] xs:right-[2rem] 
        sm:right-[2rem] md:right-[2rem] h-[3rem] md:w-[20%] 
        flex items-center gap-3 px-5'>
          <span onClick={handleDark}>
            {isDark ? <MoonIcon/> : <SanIcon/>}
          </span>
          <span className='relative '>
            <span className='absolute -top-0 -right-1 bg-red-500 
            text-bgDashboard text-[10px] font-bold 
              flex items-center justify-center p-1 rounded-full w-4 h-4'>
                2
            </span>
            <CartShoppingIcon color='rgb(95, 95, 95)' />
          </span>
          <span className='relative'>
            <span className='absolute top-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-white ' />
              <NotificationIcon 
                ref={modalRef}
                onClick={handleModalNotif}
                className='cursor-pointer notification' 
                color='rgb(95, 95, 95)'
              />
            
            <ModalNotification 
                active={active}
            >
              <div className='h-full relative z-50'>
                <HeaderModal/>
                <ContentModal/>
                <FooterModal/>
              </div>
            </ModalNotification>
          </span>
          <span>
            <GridIcon color='rgb(95, 95, 95)'/>
          </span>
          <span 
          onClick={handleActiveAvatar}
          className=' avatar_picture  relative md:absolute  md:right-[180px] lg:right-[250px] xl:right-[20px] cursor-pointer rounded-full 
          
          border border-primary'>
            <UserIMG 
              
              src={userIMG} 
            />
            <ModalAvatarProfile
                active={activeAvatar}
            >
              <HeaderAvatar/>
              <ContentAvatar/>
            </ModalAvatarProfile>
          </span>
        </div>
      </div>
    </div>
  )
}

