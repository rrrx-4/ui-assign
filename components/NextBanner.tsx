import Image from 'next/image'
import React from 'react'
import arrow from '../public/arrow.svg'

const NextBanner = ({prize_pool}: {prize_pool : number| null}) => {
  return (
    <div className='bg-white mx-4 w-80 h-52 border-[3px] rounded-3xl m-0 border-green-300 flex flex-col justify-between items-start p-5' >
        
    <div className='w-full flex justify-between items-center' >
        <p className='font-bold' >Prize Pool:</p>
        <p className='font-bold' >{prize_pool} BNB</p>
    </div>

    <div className='flex flex-col w-full gap-1' >
        <button className='w-full rounded-2xl font-bold text-white p-3 bg-green-300 shadow-md' >Enter UP</button>
        <button className='p-3 bg-[#ff69b4] shadow-md rounded-2xl font-bold text-white' >Enter DOWN</button>
    </div>


    </div>
  )
}

export default NextBanner