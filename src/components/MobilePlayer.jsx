import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { ImBooks } from "react-icons/im";

const MobilePlayer = () => {
    return (
        <div>
            <footer className='fixed md:hidden flex flex-row justify-between bottom-16 bg-black left-0 w-full'>
                {/* Music Player */}
                <div className="songdetails bg-black flex items-center py-3 ps-4">
                    <div className="songimg">
                        <img className='size-12 rounded-md cursor-pointer' src="images/rockstar.png" alt="" />
                    </div>
                    <div className="songdetails ps-4">
                        <h3 className='text-white font-semibold text-sm cursor-pointer'>Tum Ho</h3>
                        <h3 className='text-neutral-400 text-xs cursor-pointer'>Mohit Chauhan</h3>
                    </div>
                </div>
                <div className="musicplayer bg-black flex flex-col gap-y-2 justify-center items-center">
                    <div className="musicbar flex items-center px-4 gap-4">
                        <div className="hearticon cursor-pointer">
                            <FaHeart style={{ color: '#1ed45f', fontSize: '23px' }} />
                        </div>
                        <button className='px-1 cursor-pointer'>
                            <FaPlay style={{ color: '#ffffff', fontSize: '20px' }} />
                        </button>
                    </div>
                </div>

            </footer>

            <div className="bar fixed md:hidden flex bottom-16 mx-4 left-0 z-50 cursor-pointer bg-white h-[0.10rem] w-60 rounded-md"></div>

                {/* Navigation */}
            <div className="downnavigation fixed md:hidden flex flex-row justify-evenly bottom-0 bg-neutral-900 left-0 w-full">
                <div className="home flex m-5 cursor-pointer"><GoHomeFill className='white-icon icon' /></div>
                <div className="search flex m-5 cursor-pointer"><FiSearch className='white-icon icon' /></div>
                <div className="search flex m-5 cursor-pointer"><ImBooks className='white-icon icon' /></div>
            </div>

        </div>
    )
}

export default MobilePlayer
