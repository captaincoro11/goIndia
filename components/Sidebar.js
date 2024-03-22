import React from 'react'
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { useMediaQuery } from '@react-hooks-library/core';
import {users} from '../response'
import {material} from '../response'



const Sidebar = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const userlength = (users.length>3);
    const materiallength = material.length>2;
    const usermobilelength = (users.length>3);
    const materialmobilellength = (material.length>1);


  return (

    isMobile?(
      <div className={'w-3/4 bg-blue-900 fixed  text-white h-screen '}>
      <div className='flex justify-around pt-4 '>
      
      <div className='flex space-x-3   '>
      <FaUser className=' space-x-1 size-4 sm:size-7' />
      <h1 className='text-lg sm:font-bold sm:text-2xl '>Hello, User</h1>
  
      </div>
     
      <FaBell className=' space-x-1 size-4 sm:size-7' />
      </div>
      <hr className=' mt-4' />
      <div className='flex-col  '>
      <div className='hover:bg-blue-950 cursor-pointer h-10'>
      <div className='flex space-x-4 mt-4 ml-4 ' >
          <MdOutlineMessage className=' size-6'/>
          <p className=' font-bold sm:text-xl text-s'>Discussion Fourm</p>
        </div>
      </div>
      <div className='hover:bg-blue-950 cursor-pointer h-10 '>
      <div className='flex space-x-4 mt-4 ml-4 ' >
          <CiDollar className=' size-6'/>
          <p className=' font-bold sm:text-xl text-s'>Market Stories</p>
        </div>
      </div>
      <div className='hover:bg-blue-950 cursor-pointer h-10 pl-14'>
      <div className='flex space-x-4 mt-4  ' >
         <p className=' font-bold sm:text-xl text-s'>Sentiment</p>
        </div>
      </div>
  
      <div className='hover:bg-blue-950 cursor-pointer h-10 pl-14'>
      <div className='flex space-x-4 mt-4 ' >
         <p className=' font-bold sm:text-xl text-s'>Market</p>
        </div>
      </div>
  
      <div className='hover:bg-blue-950 cursor-pointer h-10 pl-14'>
      <div className='flex space-x-4 mt-4 ' >
         <p className=' font-bold sm:text-xl text-s'>Sector</p>
        </div>
      </div>
  
      <div className='hover:bg-blue-950 cursor-pointer h-10 pl-14'>
      <div className='flex space-x-4 mt-4 ' >
         <p className=' font-bold sm:text-xl text-s'>Watchlist</p>
        </div>
      </div>
  
      <div className='hover:bg-blue-950 cursor-pointer h-10 pl-14'>
      <div className='flex space-x-4 mt-4 ' >
         <p className=' font-bold sm:text-xl text-s'>Events</p>
        </div>
      </div>
  
      <div className='hover:bg-blue-950 cursor-pointer h-10 pl-14'>
      <div className='flex space-x-4 mt-4 ' >
         <p className=' font-bold sm:text-xl text-s'>News/Interview</p>
        </div>
      </div>
        
      </div>
      
  
   
        
      </div>
     
    ):(
      <div className={(userlength || materiallength)? 'w-1/2 bg-blue-900  text-white max-h-max  sm:text-white sm:bg-blue-900 sm:w-1/4 ':'w-1/2 bg-blue-900  text-white h-screen  sm:text-white sm:bg-blue-900 sm:w-1/4 '}>
    <div className='flex justify-around pt-4 '>
    
    <div className='flex space-x-3   '>
    <FaUser className=' space-x-1 size-4 sm:size-7' />
    <h1 className='text-sm sm:font-bold sm:text-2xl '>Hello, User</h1>

    </div>
   
    <FaBell className=' space-x-1 size-4 sm:size-7' />
    </div>
    <hr className=' mt-4' />
    <div className='flex-col  '>
    <div className='hover:bg-blue-950 cursor-pointer h-10'>
    <div className='flex space-x-4 mt-4 ml-4 ' >
        <MdOutlineMessage className=' size-8'/>
        <p className=' font-bold text-xl'>Discussion Fourm</p>
      </div>
    </div>
    <div className='hover:bg-blue-950 cursor-pointer h-10 '>
    <div className='flex space-x-4 mt-4 ml-4 ' >
        <CiDollar className=' size-8'/>
        <p className=' font-bold text-xl'>Market Stories</p>
      </div>
    </div>
    <div className='hover:bg-blue-950 cursor-pointer h-10 pl-12'>
    <div className='flex space-x-4 mt-4 ml-4 ' >
       <p className=' font-bold text-xl'>Sentiment</p>
      </div>
    </div>

    <div className='hover:bg-blue-950 cursor-pointer h-10 pl-12'>
    <div className='flex space-x-4 mt-4 ml-4 ' >
       <p className=' font-bold text-xl'>Market</p>
      </div>
    </div>

    <div className='hover:bg-blue-950 cursor-pointer h-10 pl-12'>
    <div className='flex space-x-4 mt-4 ml-4 ' >
       <p className=' font-bold text-xl'>Sector</p>
      </div>
    </div>

    <div className='hover:bg-blue-950 cursor-pointer h-10 pl-12'>
    <div className='flex space-x-4 mt-4 ml-4 ' >
       <p className=' font-bold text-xl'>Watchlist</p>
      </div>
    </div>

    <div className='hover:bg-blue-950 cursor-pointer h-10 pl-12'>
    <div className='flex space-x-4 mt-4 ml-4 ' >
       <p className=' font-bold text-xl'>Events</p>
      </div>
    </div>

    <div className='hover:bg-blue-950 cursor-pointer h-10 pl-12'>
    <div className='flex space-x-4 mt-4 ml-4 ' >
       <p className=' font-bold text-xl'>News/Interview</p>
      </div>
    </div>
      
    </div>
    

 
      
    </div>
   
  )
   
  )
}

export default Sidebar
