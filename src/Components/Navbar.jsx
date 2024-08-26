import React, { useState } from 'react';
import img1 from '../assets/admin-assets/logo_small.png';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className='top-0 h-20 min-h-10 bg-black text-sm w-[100%] overflow-hidden flex flex-row items-center justify-between'>
      <div className='flex flex-row items-center m-2 p-5'>
        <img src={img1} alt="logo" className='size-6' />
        <span className='text-white font-bold'>Spotify</span>
      </div>
      
     
      <div className='hidden lg:block'>
        <div className='p-2 flex flex-row justify-center ml-20'>
          <ul className='font-serif text-white flex flex-row space-x-32 items-center'>
            <li className='p-1 rounded hover:bg-slate-600 m-2'>Home</li>
            <li className='p-1 rounded hover:bg-slate-600 m-2'>About</li>
            <li className='p-1 rounded hover:bg-slate-600 m-2'>Login</li>
            <li>
              <input className='p-1 rounded-lg' placeholder='search .. ' />
            </li>
          </ul>
        </div>
      </div>

    
      <div className='lg:hidden flex items-center pr-5'>
        {show ? (
          <IoMdClose 
            className='text-white text-4xl cursor-pointer' 
            onClick={handleShow}
          />
        ) : (
          <IoMdMenu 
            className='text-white text-4xl cursor-pointer' 
            onClick={handleShow}
          />
        )}
      </div>

    
      {show && (
        <div className='lg:hidden absolute top-20 h-fit right-0 w-[25%] z-30 bg-black p-10  text-white flex flex-col items-center space-y-4 py-4'>
          <ul className='font-serif flex flex-col space-y-4 items-center'>
            <li className='p-1 rounded hover:bg-slate-600'>Home</li>
            <li className='p-1 rounded hover:bg-slate-600'>About</li>
            <li className='p-1 rounded hover:bg-slate-600'>Login</li>
            <li>
              <input className='p-1 rounded-lg w-3/4' placeholder='search .. ' />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
