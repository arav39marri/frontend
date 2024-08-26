import React from "react";
import { assets } from "../assets/frontend-assets/assets";
const Sidebar = () => {
  return (
    <div className="w-[30%] h-full p-2 flex-col gap-2 hidden text-white lg:flex ">
      <div className="bg-[121212] h-[15%] rounded flex flex-col justify-around ">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold"> Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold"> Search</p>
        </div>
      </div>
      <div className="bg-[#121212]  h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-bold">Your Library </p>
          </div>
          <div className="flex items-center gap-3">
            <img src={assets.arrow_icon} className="w-5" alt="" />
            <img src={assets.plus_icon} className="w-5" alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] rounded font-semibold flex flex-col items-start justify-start gap-1 ">
          <h1>Create your playlist</h1>
          <p className="font-light"> its easy we will hwlp you</p>
          <button className="px-4  bg-white text-[15px] text-black rounded-full mt-4">
            Browse Podcast
          </button>
        </div>
        <div className="p-4 bg-[#242424] rounded font-semibold flex flex-col items-start  mt-4 justify-start gap-1 ">
          <h1>Lets findsome podcasts to follow</h1>

          <p className="font-light"> we will keep update on new episodes</p>
          <button className="px-4  bg-white text-[15px] text-black rounded-full mt-4">
            Browse Podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
