import React from 'react'
import Display from './Display';
const Card = ({info}) => {
   
    const dcard = info .map((ele,index) =>(
      
        <Display
          key={index}
          title ={ele.title}
          singer ={ele.singer}
          caption={ele.caption}
        />

      
    ));
  return (
    <div className='sm:ml-[100px] ml-[150px]h-[300] w-[600] overflow-hidden   sm:text-lg   items-center relative top-0   text-xs'>
     
     <div className=' flex flex-row justify-items '>
     {dcard}
     </div>
       
    </div>
  )
}

export default Card