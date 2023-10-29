import Image from 'next/image'
import React from 'react'
import arrow from '../public/arrow.svg'

interface Props {
  closed_price : number| null,
  locked_price : number | null,
  prize_pool : number | null,
  growth: number | null
}


const ExpiredBanner = ( {closed_price, locked_price, growth, prize_pool} : Props ) => {
  return (
    <div className='bg-white mx-4 w-80 h-52 border-[3px] rounded-3xl m-0 border-[#ff69b4] flex flex-col justify-between items-start p-5' >
      <p className='text-gray-500 font-bold' >CLOSED PRICE</p>
      <div className=' w-full flex justify-between items-center ' >
        <h2 className='text-3xl font-bold text-[#ff69b4]' >${closed_price}</h2>
        <button className='flex items-center gap-1 text-white p-2 rounded bg-[#ff69b4]' >
          {/* <Image src= {arrow} width={15} height={15} alt="arrow"/>  */}
          ${growth}</button>
      </div>
    
    <div className='w-full grid grid-cols-2  items-center ' >
      <p >Locked Price:</p>
      <div className='flex justify-end'>
      <p>${locked_price}</p>
      </div>

      <p className='font-bold text-xl' >Prize Pool</p>
      <div className='flex justify-end'>
      <p className='font-bold text-xl' >{prize_pool} BNB</p>
      </div>
    </div>


    </div>
  )
}

export default ExpiredBanner