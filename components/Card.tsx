import React from 'react'
import Payout from './DownPayout'
import ExpiredBanner from './ExpiredBanner'
import UpPayout from './UpPayout'
import LiveBanner from './LiveBanner'
import NextBanner from './NextBanner'
import LaterBanner from './LaterBanner'
import Header from './Header'

interface Props {
     id: string,
        status: string | null,
        up_payout: number | null,
        down_payout: number | null,
        locked_price: number | null,
        prize_pool: number | null,
        closed_price: number | null,
        last_price: number | null,
        growth: number | null,
        entry_starts: number | null,
}

const Card = ({card} : {card : Props}) => {
  return (

    <article className={`flex flex-col justify-center items-center w-[25%] m-5 border-2 rounded-3xl bg-white  ${card.status==='Expired' ? 'bg-slate-300': ""} `} >

        <Header id={card.id} status={card.status} ></Header>
        {card.status === 'Live' && <div className='w-full border-4 border-purple-600'></div>}
        
    <UpPayout up_payout={card.up_payout} ></UpPayout>

    {card.status === 'Live' && <LiveBanner last_price={card.last_price} locked_price={card.locked_price} prize_pool={card.prize_pool} growth={card.growth}></LiveBanner>}
    {card.status === 'Expired' && <ExpiredBanner closed_price={card.closed_price} locked_price={card.locked_price} prize_pool={card.prize_pool} growth={card.growth} ></ExpiredBanner>}
    {card.status === 'Later' && <LaterBanner time={card.entry_starts} ></LaterBanner>}
    {card.status === 'Next' && <NextBanner prize_pool={card.prize_pool} ></NextBanner>}
    
        <Payout down_payout={card.down_payout} ></Payout>
       

    </article>

  )
}

export default Card