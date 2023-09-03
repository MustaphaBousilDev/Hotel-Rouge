import React from 'react'
import type { FC } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { set } from 'date-fns';
import { ModalSearch  as Modal} from '@/components/modals/ModalSearch';
import { Fields  as FieldSearch} from '@/components/modals/search/Fields';
import { Dates   as FilterDates} from '@/components/modals/search/Dates';
import {Filter   as FilterSearch} from '@/components/modals/search/Filter'
import {Footer   as FooterFilterSearch} from '@/components/modals/search/Footer'
interface Props{
     className?:string 
     width?:string
     height?:string
     modalSearchProps?:boolean
}



export const InputSearch:FC<Props> = ({
     className,
     width,
     height,
     modalSearchProps=false
     }) => {
     const [colorIcon, setColorIcon] = React.useState<string>('rgb(212, 208, 208)')
     const [widthInput, setWidthInput] = React.useState<string>('w-[20rem]')
     const [actives, setActives] = React.useState<boolean>(false)
     const [placeholder, setPlaceholder] = React.useState<string>('Search...')
     const [modalSearch, setModalSearch] = React.useState<boolean>(modalSearchProps)
     

     const modalClose = ()=>{
          setModalSearch(false)
          setWidthInput('w-[20rem]')
          setActives(false)
          setColorIcon('rgb(212, 208, 208)')
          setPlaceholder('Search...')
     }

     const modalClick = ()=>{
          /*setModalSearch(true)
          setColorIcon('#06b6d4')
          setWidthInput('w-[30rem]')
          //placeholder-grayDashboard
          //e.target.placeholder = ''
          setActives(true)*/
     }
     const closeClick = ()=>{
          setColorIcon('rgb(212, 208, 208)')
          setWidthInput('w-[20rem]')
          setActives(false)
          setPlaceholder('Search...')
          setModalSearch(false)
     }
     const FocusSearch = ()=>{
          setColorIcon('#06b6d4')
          setWidthInput('w-[30rem]')
          //placeholder-grayDashboard
          setPlaceholder('')
          setActives(true)
          setModalSearch(true)

     }
      
     const searchIcon = {
          position:'absolute',
          top:'50%',
          left:'12px',
          display:'block',
          zIndex:30,
          transform:'translateY(-50%)',
          color:colorIcon,
          fontSize:'1.6rem',
          //media query xs min width 480px 
          '@media (min-width:480px)':{display:'none'},
          '@media (min-width:640px)':{left:'12px',},
          '@media (min-width:768px)':{display:'block'},
     }
     const closeIcon = {
          position:'absolute',
          top:'50%',
          left:'27rem',
          cursor:'pointer',
          zIndex:20,
          transform:'translateY(-50%)',
          color:'rgb(212, 208, 208)',
          fontSize:'1.6rem',
          '&:hover':{color:colorIcon}
     }
  return (
    <>
    <div className='relative'>
     <input 
         onFocus={FocusSearch}
         
         list='searchList'
         className={`fixed xs:hidden searchInput
            sm:hidden md:flex  md:left-[5rem] lg:left-[20rem]  top-3  
            outline-none rounded-3xl
           transition-none
            py-0 px-10 border border-grayDashboard placeholder-grayDashboard
            focus:ring-1 focus:ring-primary focus:ring-opacity-50
               ${className}  ${widthInput}`}
               type="text" 
               name="search" 
               //prevent autocomplete list of values 
               autoComplete="off"
               placeholder={placeholder}
               id="search"  />
               
        <SearchIcon sx={searchIcon}/>
     {
        actives && <span className='' onClick={closeClick}><CloseIcon sx={closeIcon}/></span>
     }

     
     {/*Modal Search*/}
     <Modal 
        
        active={modalSearch} 
        onClick={modalClick}
     >
          <div className=' '>
          <FilterSearch/>
          <FieldSearch/>
          <FilterDates/>
          <FooterFilterSearch/>
          </div>
     </Modal>
    

    </div>
    {
     modalSearch && <div onClick={modalClose} className='fixed top-0 left-0 z-[8000] bg-transparent cursor-pointer w-full h-full' />
    }
    </>
  )
}
