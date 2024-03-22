"use client"
import Discussion from "../components/Discussion";
import DiscussionBox from "../components/DiscussionBox";
import Market from "../components/Market";
import MarketBox from "../components/MarketBox";
import MobileNavbar from '../components/MobileNavbar';
import Sidebar from "../components/Sidebar";
import SidebarArrow from "../components/SidebarArrow";
import useStore  from '@/hooks/sidebarstore';
import useMobileStore from '../hooks/mobilenavbarstore'
import {users} from '../response'
import { material } from "../response";
import { useMediaQuery } from '@react-hooks-library/core'
import { useRouter } from "next/navigation";


export default function Home() {
  const sidestore = useStore();
  const mobilestore = useMobileStore();

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    isMobile?(
      <div className=" flex-col">

      <SidebarArrow/>
      

      <MobileNavbar/>
      
  

     
  

    {sidestore.isOpen? <Sidebar/>:null}

    {
      ((mobilestore.router =='/discussion' )|| (mobilestore.router =='/'))?

     users.map((user,index)=>(
      <DiscussionBox key={index} title={user.title} description={user.description}/>

     ))
      
      :null
    }

    {

      (mobilestore.router==='/market'?
      material.map((material,index)=>(
        <MarketBox key={index} src={material.src} title={material.title} description={material.description}/>

      )):null)
     
    }



    
     
  
     
       
   
     
     
     
    
      </div>
    ):( 
      <div className=" flex">
  

      <SidebarArrow/>
      
  
    {sidestore.isOpen? <Sidebar/>:null}
    
     
  
     <div className={sidestore.isOpen?" w-2/5":" w-full"} > 
      <Discussion/>
      {users.map((user, index) => (
          <DiscussionBox description={user.description} title={user.title} key={index}/>
            
        ))}
     
      </div>
       
      <div className={sidestore.isOpen?" w-1/5 ml-20 mt-4":" w-3/5 ml-20 mt-4"}>
  
      <Market/>
      {
        material.map((material,i)=>(
          <MarketBox key={i} src={material.src} title={material.title} description={material.description}/>
        ))
      }
</div>
</div>
    )

  );
}
