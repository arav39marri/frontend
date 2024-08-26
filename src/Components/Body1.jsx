import React from 'react'
import img1 from '../assets/frontend-assets/img1.jpg'
import img4 from '../assets/frontend-assets/img4.jpg'
import img3 from '../assets/frontend-assets/img3.jpg'
import img2 from '../assets/frontend-assets/img2.jpg'
import Card from './Card'
import prac from './prac'
const Body1 = () => {

   const info =[
    {
      id : 1,
      title :"daily mix1",
      singer : "Arjith singh",
      caption : "sit back and chill"
    },
    {
      id : 2,
      title :"daily mix2",
      singer : "sourabh singh",
      caption : "sit back and chill"
    },
    {
      id : 3,
      title :"daily mix3",
      singer : "AR Rahman",
      caption : "sit back and chill"
    }
    ,
    {
      id : 3,
      title :"daily mix4",
      singer : "Ilayaraja",
      caption : "sit back and chill"
    }
    
   ]

  return (
    <div className='absolute top-20 left-[45%] sm:left-[25%] p-2 overflow-hidden w-[55%] sm:w-[75%] h-[100%]'>
   
      <div className='   '>

      <div className='flex flex-wrap  justify-center items-center space-x-5 m-3 overflow-hidden'>
          {/* <div> <img src={img1} style={{height:"10rem"}} id='im1' alt="image1" />
                   <span>AR Rahman</span>
          </div>
          <div> <img src={img2} style={{height:"10rem"}} id='im1' alt="image1" />
          <span>AR Rahman</span>
          </div>
          <div> <img src={img3} style={{height:"10rem"}} id='im1' alt="image1" />  <span>AR Rahman</span></div>
          <div> <img src={img4} style={{height:"10rem"}} id='im1' alt="image1" />  <span>AR Rahman</span></div> */}
          <div className='relative  left-0  '>

         <Card info={info}/>

          </div>
          
      </div>
    
      </div>
     
    </div>
  )
}

export default Body1
