import React from 'react'

const Display = (props) => {
 
  return (
    <div className=" sm:w-[162px] sm:h-[200px]  w-[100px] h-[150px] border border-blue-300 rounded-sm     ">
       <p>{props.title}</p>
       <p>{props.singer}</p>
    </div>
  )
}

export default Display
