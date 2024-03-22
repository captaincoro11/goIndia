import React,{useState} from 'react'
import { FaStreetView, FaUser } from 'react-icons/fa'
import { FcLike } from "react-icons/fc";
import { GrView } from "react-icons/gr";
import { FaRegComments } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { useMediaQuery } from '@react-hooks-library/core';


const DiscussionBox = ({title,description}) => {

  

  const [like, setLike] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)')
  const likehandler = ()=>{
    setLike(!like)
  }
    return (
      isMobile?(
        <div className='m-2 mt-4 '>
    <div className=' 
      h-36
     border-black
      rounded-sm
       bg-gray-50 
       shadow-lg p-4 overflow-y-scroll '>
       <div className='flex justify-between '>


        <div className='flex space-x-4'>
       <FaUser className=' size-6 text-black'/>
       <p className='font-bold  text-black '>{title}</p>
       <p className=' cursor-pointer bg-blue-900 rounded-xl w-16 flex text-xs justify-center items-center h-6 text-white'>Sector2</p>
       </div>
       <p className=' text-sm text-blue-600 '>2min ago</p>

       </div>

       <p className='mt-2 font-light font-sans text-sm text-black ml-12'>
       {description}
       .</p>
       <div className=' flex justify-around  mt-2'>

   <button className='text-black' onClick={likehandler}> {like?<FcLike className=' cursor-pointer size-6'/>:<FaRegHeart className=' cursor-pointer size-6'/>}</button>
    <GrView className=' cursor-pointer size-6 text-black'/>
    <FaRegComments className=' cursor-pointer text-black size-6'/>
    <GoShareAndroid className=' cursor-pointer text-black size-6'/>

    </div>



    </div>
   
   
      

      
    </div>
      ):(
        <div className=' ml-8 mt-8'>
    <div className=' 
      h-36
     border-black
      rounded-lg
       bg-gray-50 
       shadow-xl p-4 overflow-y-scroll '>
       <div className='flex justify-between '>


        <div className='flex space-x-6'>
       <FaUser className=' size-8'/>
       <p className='font-bold '>{title}</p>
       <p className=' cursor-pointer bg-blue-900 rounded-xl w-20 flex justify-center items-center h-8 text-white'>Sector2</p>
       </div>
       <p className=' text-sm text-blue-600 '>2min ago</p>

       </div>

       <p className='mt-2 font-light font-sans ml-12'>
       {description}
       .</p>
       <div className=' flex justify-around  mt-6'>

   <button onClick={likehandler}> {like?<FcLike className=' cursor-pointer size-6'/>:<FaRegHeart className=' cursor-pointer size-6'/>}</button>
    <GrView className=' cursor-pointer size-6'/>
    <FaRegComments className=' cursor-pointer size-6'/>
    <GoShareAndroid className=' cursor-pointer size-6'/>

    </div>



    </div>
   
   
      

      
    </div>
      )
    
  )
}

export default DiscussionBox
