import Image from 'next/image'
import React from 'react'

import pup from "../public/downpentagon.svg"

// className='absolute top-9 left-[117px] font-bold	text-white' 

const Payout = ({down_payout} : {down_payout: number|null} ) => {
  return (

<div className='mb-4 relative m-0'>
  <Image  src={pup} alt='pentagon' width={280} height={100} ></Image>
 

    {
      down_payout ? <div className='flex flex-col justify-center items-center absolute top-3 left-[100px] ' ><p className='font-medium	text-white'> <span className='font-bold'>{down_payout}</span><span className='text-sm'>x</span> Payout</p>
  <p className='font-bold	text-white' >DOWN</p></div>  :  <div className='flex flex-col justify-center items-center absolute top-5 left-[120px] ' > <p className='font-bold	text-white' >DOWN</p> </div>
    }
  
  
</div>



  )
}

export default Payout