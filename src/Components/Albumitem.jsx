import React from 'react'
import { useNavigate } from 'react-router-dom'

const Albumitem = (props) => {
    const navigate = useNavigate();
    console.log(props.id);
  return (
    <div  onClick={()=>navigate(`/album/${props.id}`)} className=' min-w-[140px] w-[155px] p-2  rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img src={props.image}  className='rounded ' alt="" />
      <p className='mt-2 text-slate-200 mb-1 font-bold'>{props.name}</p>
      <p className='text-slate-200 text-sm'>{props.desc }</p>
    </div>
  )
}

export default Albumitem 
