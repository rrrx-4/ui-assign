'use client'


import React, { useEffect } from 'react';
// import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Card from '@/components/Card';
import data from "@/utils/data";
import Image from 'next/image';
import coinImg from '../public/coin.svg'
import cards from "../public/cards.svg"
import clock from "../public/alarmClock.svg"

function App() {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    if(slider)
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    if(slider)
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideMid = () => {
    var slider = document.getElementById('slider');
    if(slider)
    slider.scrollLeft = slider.scrollLeft + (1*300);
  };

  useEffect(()=>{

    slideMid()

  }, [])

  return (
    <>
      
      <div className='relative h-screen w-screen  flex flex-col items-center justify-center'>
        {/* <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} /> */}
 <nav className='flex justify-between items-center w-full p-10 bg-violet-300' >
            <div className='flex items-center' >
              {/* image */}
              <Image className='relative left-5' src={coinImg} alt="coin" height={50} width={50} ></Image>
              <p className='p-2 px-5 bg-white rounded-full font-bold' >BNBUSD  <span className='ml-2 text-sm font-medium'>$228.5332</span></p>
            </div>
            <div className='flex' >
              <button onClick={slideLeft} className='bg-white rounded-s-full px-6'>
               <AiOutlineArrowLeft></AiOutlineArrowLeft>
              </button>
              <Image className='z-10 relative left-[-3px]' width={50} height={50} src={cards} alt='cards'></Image>
              <button onClick={slideRight} className= 'rounded-e-full relative  left-[-5px] bg-white px-6' >
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </button>
            </div>
            <div className='flex items-center ' >
              <p className='py-2 font-bold text-violet-500 rounded-full bg-white px-4 pr-7' >00:38 <span className='text-xs' >5m</span></p>
              <Image className='relative left-[-15px]' src={clock} alt="clock" width={60} height={60}></Image>
              {/* image */}
            </div>
          </nav>
        <div
          id='slider'
          className='w-full  overflow-x-scroll  flex items-center scroll whitespace-nowrap scroll-smooth scrollbar-hide bg-violet-300'
        >
         
           
            {
        data.map((item : any)=>{

          return (
            
           <Card  key={item.id} card={item} ></Card>
             
          )


        })
      }
        </div>
  

       
        {/* <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} /> */}
      </div>
    </>
  );
}

export default App;



















// import Card from "@/components/Card";
// import data from "@/utils/data";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';
// import { motion, useScroll, useMotionValueEvent, useMotionValue  } from "framer-motion";
// import { FormEvent, useRef } from "react";


// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

// export default function Home() {

//    const ref = useRef(null);
//   const { scrollXProgress, scrollY, scrollX } = useScroll({ container: ref });

 

//   useMotionValueEvent(scrollX, "change", (latest) => {
//   console.log("Page scroll: ", latest)
// })

//   return (
//     <>
  
//     <main  className="  w-screen  flex items-center" >
     

//    <Carousel className="w-full" centerMode={true} centerSlidePercentage={100}>

     
//       {
//         data.map((item)=>{

//           return (
            
//             <Card  key={item.id} card={item} ></Card>
             
//           )


//         })
//       }
     
//  </Carousel>
//     </main>
   
//     </>
//   )
// }
