import React, { useState } from "react";
import { FaHome, FaPlus } from "react-icons/fa";
import { IoLibraryOutline, IoSearchOutline } from "react-icons/io5";

const Sidebar = () => {
    const [showInput, setShowInput] = useState(false);
    const [showRecent, setRecent] = useState(true);

    const handleSearchClick = () => {
        setShowInput(!showInput);
        setRecent(!showRecent);
    };

    return (
        <div className="h-screen bg-[#121212] w-[45%] sm:w-[25%]  ">
            <div className="p-4 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                    <IoLibraryOutline className="text-white text-xl md:text-2xl lg:text-2xl xl:text-2xl hover:text-gray-300 transition-all duration-200" />
                    <div className="text-white font-semibold text-base md:text-lg lg:text-xl xl:text-2xl">Your Library</div>
                    <FaPlus className="text-white text-xl md:text-2xl lg:text-1xl xl:text-1xl hover:text-gray-300 transition-all duration-200" />
                </div>
                <div className="mb-4">
                    <button className="text-white text-base md:text-lg lg:text-lg xl:text-md px-1 bg-[#333333] rounded-lg">
                        Playlist
                    </button>
                </div>
                <div className="flex items-center mb-4">
                    <button onClick={handleSearchClick} className="mr-2">
                        <IoSearchOutline className="text-white text-lg md:text-xl lg:text-2xl xl:text-2xl" />
                    </button>
                    {showInput && (
                        <input
                            type="text"
                            className="bg-[#333333] text-white rounded-lg p-2 w-full md:w-auto"
                            placeholder="Search..."
                        />
                    )}
                    {showRecent && (
                        <span className="text-white text-base md:text-lg lg:text-xl xl:text-2xl pl-2 bg-[#333333] rounded-lg">
                            Recents
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
