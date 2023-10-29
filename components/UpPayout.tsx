import Image from 'next/image'
import React from 'react'

import pup from "../public/uppentagon.svg"

const UpPayout = ({up_payout} : {up_payout: number|null} ) => {
  return (

<div  className='relative mt-4' >


{
  up_payout && <div className='absolute flex flex-col justify-center items-center top-5 left-[95px] ' >

        <p className='font-bold text-[#43B3AE]' >UP</p>
       <p className='font-medium	'  > <span className='font-bold'>{up_payout}</span><span className='text-sm'>x</span> Payout</p> </div>
}
      {
        !up_payout &&  <div className='absolute flex flex-col justify-center items-center top-8 left-[130px] ' >

        <p className='font-bold text-[#43B3AE]' >UP</p> </div>
      }


       

  <Image src={pup} alt='pentagon' width={280} height={100} ></Image>
</div>



  )
}

export default UpPayout