import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import useMobileStore from '../hooks/mobilenavbarstore'
import { useMediaQuery } from '@react-hooks-library/core'

const MobileNavbar = () => {
  const islessthanMobile = useMediaQuery("(max-width:359px)");
 

  const navbarstore = useMobileStore();
  
  const discussionHandler= ()=>{
    navbarstore.setRouterdiscussion();
    navbarstore.onOpenClick1();
    navbarstore.onCloseClick2();    

  };
  const marketHandler= ()=>{
    navbarstore.setRoutermarket();
    navbarstore.onOpenClick2();
    navbarstore.onCloseClick1();    
  };

  useEffect(()=>{
    if(navbarstore.router ==='/'){
      navbarstore.onOpenClick1();
      navbarstore.onCloseClick2();
    }

  },[])

  return (
    islessthanMobile?(
      <div className=' bg-blue-900 w-full h-13 '>
      <div className='flex justify-between   '>
      
      <div  className={navbarstore.isClick1?' bg-blue-950  border-b-4 border-red-500 p-2 w-fit h-12 flex  ':"flex  p-2"}><button className=' text-white font-bold text-md ' onClick={discussionHandler}>Discussion Fourm</button></div>
      <div className={navbarstore.isClick2?' bg-blue-950 w-fit border-b-4 border-red-500  h-12 flex p-2 ':"flex p-2 "}><button className=' text-white font-bold text-md  ' onClick={marketHandler}>Market Stories</button></div>
      </div>
      
        
      </div>
    ):(

      <div className=' bg-blue-900 w-full h-13 '>
      <div className='flex justify-between   '>
      
      <div  className={navbarstore.isClick1?' bg-blue-950  border-b-4 border-red-500 p-2 w-fit h-12 flex  ':"flex  p-2"}><button className=' text-white font-bold text-xl ' onClick={discussionHandler}>Discussion Fourm</button></div>
      <div className={navbarstore.isClick2?' bg-blue-950 w-fit border-b-4 border-red-500  h-12 flex p-2 ':"flex p-2 "}><button className=' text-white font-bold text-xl  ' onClick={marketHandler}>Market Stories</button></div>
      </div>
      
        
      </div>

    )
   
  )
}

export default MobileNavbar
