import React from 'react';
import img from '../assets/climate2.jpeg';
import useStore  from '@/hooks/sidebarstore';
import { useMediaQuery } from '@react-hooks-library/core';

const MarketBox = ({src,title,description}) => {

    const isMobile = useMediaQuery('(max-width:600px)');
    const sidebarstore = useStore();
  return (
    isMobile?(
      <div className={'flex-col  border border-x-8 border-y-8 shadow-2xl rounded-lg mt-4    '}>
      <img className='  ' src={src} alt="name" />
      <p className=' font-bold flex justify-center'>{title}</p>
      <p className=' font-mono font-light flex pl-6 justify-center'>{description}</p>
    </div>
    ):(

      <div className={sidebarstore.isOpen?"flex-col  border  shadow-2xl rounded-lg mt-4 ":'flex-col border shadow-2xl  rounded-lg mt-4 ml-12 w-3/5 '}>
      <img className=' size-8/9 ' src={src} alt="name" />
      <p className=' font-bold flex justify-center'>{title}</p>
      <p className=' font-mono font-light flex pl-6 justify-center'>{description}</p>
    </div>
    )
   
  );
};

export default MarketBox;
