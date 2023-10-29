import Image from 'next/image'
import React from 'react'
import arrow from '../public/arrow.svg'

const LaterBanner = ({time}: {time: number| null}) => {
  return (
    <div className='bg-white mx-4 w-80 h-32 border-[3px] rounded-3xl m-0 border-gray-300 flex flex-col justify-center items-center p-5' >
        
   <p className='font-bold' >Entry starts</p>
   <h2 className='font-bold' >~00:{time}</h2>


    </div>
  )
}

export default LaterBanner