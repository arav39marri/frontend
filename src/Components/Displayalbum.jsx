import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/frontend-assets/assets'

const Displayalbum = () => {
  const {id}  = useParams();
  const albumdata = albumsData[id];
  console.log(albumdata);

  return (
    <>
      <Navbar/>
 
      <div className=' absolute top-[18%] left-[25%] flex '>
        <div className='  '>
        <img src={albumdata.image} alt="" />
        </div>

      </div>
     
    </>
  )
}

export default Displayalbum
