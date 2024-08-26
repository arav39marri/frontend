import React from 'react'
import Navbar from './Navbar'
import NavBody from './NavBody'
import Albumitem from './Albumitem'
import {albumsData} from '../assets/frontend-assets/assets'
import {songsData} from '../assets/frontend-assets/assets'
const DisplayHome = () => {
  return (
   
     <>
     <Navbar/> 
   
    
       <div className='my-5  absolute  top-[14%] lg:left-[25%] font-bold text-2l lg:w-[70%] w-full h-[80%]'>
         <div className='h-[85%]  overflow-auto'>
            
            <p className='font-bold text-lg text-white p-2 mt-2 ml-3'>Feature items</p>
            <div className='flex overflow-auto '>
            {albumsData.map((item, index) =>(<Albumitem key={index} name={item.name} 
          desc={item.desc} id = {item.id} image={item.image} />))}
            </div>

            <p className='font-bold text-lg text-white p-2 mt-2 ml-3'>Biggest hits of today</p>
            <div className='flex flex-col overflow-auto  '>
            <div className='flex  '>
            {songsData.map((item, index) =>(<Albumitem key={index} name={item.name} 
          desc={item.desc} id = {item.id} image={item.image} />))}
            </div>
            </div>

            <p className='font-bold text-lg text-white p-2 mt-2 ml-3'>Biggest hits of today</p>
            <div className='flex overflow-x-auto   '>
            {songsData.map((item, index) =>(<Albumitem key={index} name={item.name} 
          desc={item.desc} id = {item.id} image={item.image} />))}
            </div>
         </div>
       </div>
       </>
  
  )
}

export default DisplayHome
