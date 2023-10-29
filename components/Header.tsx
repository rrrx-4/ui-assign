import React from 'react'
import { AiOutlinePlayCircle, AiOutlineClockCircle, AiOutlineStop } from "react-icons/ai";

interface Props {

  id : string,
  status: string | null,

}

const Header = ({id, status}: Props) => {
  return (
    <div className={`bg-slate-300 w-full rounded-t-3xl ${status==='Expired' ? 'bg-slate-300' : '' || status==='Live' ? 'bg-white' : '' || status==='Next' ? 'bg-purple-600' : '' || status==='Later' ? 'bg-slate-300' : '' }  `}>
    <div className=' w-full rounded-t-3xl  flex justify-between items-center px-4 py-2'>
        <div className='flex justify-center items-center' >
          { status === 'Expired' && <AiOutlineStop></AiOutlineStop> }
              { status === 'Live' &&  <AiOutlinePlayCircle  ></AiOutlinePlayCircle>}
              { status === 'Next' &&  <AiOutlinePlayCircle ></AiOutlinePlayCircle>}
              { status === 'Later' && <AiOutlineClockCircle></AiOutlineClockCircle>}
          
            <p className={status === 'Expired' ? 'text-gray-500' : '' || status === 'Live' ? 'text-purple-500' : '' || status === 'Next' ? 'text-white' : ''  || status === 'Later' ? 'text-purple-300' : ''} >{status}</p>
        </div>
        < p className={status === 'Expired' ? 'text-gray-500' : '' || status === 'Live' ? 'text-purple-500' : '' || status === 'Next' ? 'text-white' : ''  || status === 'Later' ? 'text-purple-300' : ''}  >#{id}</p>
    </div></div>
  )
}

export default Header