import React from "react";
import { assets } from "../assets/frontend-assets/assets";
const Navbar = () => {
  return (
    <>
      <div className="w-full flex  items-start justify-between font-semibold ">
        <div className="flex items-center gap-2 p-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4 m-2">
          <p className="bg-white text-black text-[15px] px-2 py-1 rounded-2xl hidden md:block">
            Explore Premium
          </p>
          <p className="text-white text-[15px] px-2 py-1 rounded md:block">
            install app
          </p>
        </div>
      </div>
      
      <div className="absolute lg:left-[25%]  top-[8%] gap-2 mt-3 font-semibold">
        <div className="flex flex-row">
        <p className="bg-white text-black px-4 py-1 ml-2 cursor-pointer rounded-xl">All</p>
        <p className=" text-white px-4 py-1 gap-2 cursor-pointer rounded-xl">Music</p>
        <p className=" text-white px-4 py-1 gap-2ml-2 cursor-pointer rounded-xl">Podcasts</p>
        </div>

        
      

      </div>
    </>
  );
};

export default Navbar;
