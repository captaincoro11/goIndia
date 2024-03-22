
"use client"
import React from 'react'
import  useStore  from '../hooks/sidebarstore'

import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { useMediaQuery } from '@react-hooks-library/core';



const SidebarArrow = () => {

    
    const isMobile = useMediaQuery('(max-width:600px)');


    
    const sidebar = useStore();
    

    const openSidebar = ()=>{
      if(sidebar.isOpen){
        sidebar.onClose();
      }
      else{
        sidebar.onOpen();
      }
      console.log(sidebar.isOpen)
    }
  
    


  return (
    isMobile?(
      <div className='text-white'>
      <button className={sidebar.isOpen?
      ' bg-blue-900 w-8 h-24 absolute top-1/2 left-3/4 rounded-sm  ':
      " rounded-sm fixed top-1/2  bg-blue-900 w-8 h-24 "} 
      onClick={openSidebar}>
 
      {sidebar.isOpen?<MdArrowLeft size='2.5rem'/>
      :<MdArrowRight size='2.5rem'/>}

      </button>
     </div>
    ):(
      <div className='text-white'>
      <button className={sidebar.isOpen?
      ' bg-blue-900 w-8 h-24 fixed top-1/2  left-1/4  rounded-sm  ':
      " rounded-sm fixed top-1/2  bg-blue-900 w-8 h-24 "} 
      onClick={openSidebar}>
 
      {sidebar.isOpen?<MdArrowLeft size='2.5rem'/>
      :<MdArrowRight size='2.5rem'/>}

      </button>
     </div>
    )
    
   
    
 
  )
}

export default SidebarArrow
