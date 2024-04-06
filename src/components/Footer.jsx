import React from 'react'
import { FaHeart } from "react-icons/fa";
import { IoShuffle } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipForward } from "react-icons/io5";
import { BiRepeat } from "react-icons/bi";
import { CgPlayButtonR } from "react-icons/cg";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { MdDevices } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";
import { CgMiniPlayer } from "react-icons/cg";
import { FaExpandAlt } from "react-icons/fa";






const Footer = () => {
    return (
        <div>
            <footer className='fixed flex flex-row bottom-0 left-0 right-0'>
                <div className="songdetails bg-black flex items-center w-3/12 py-4 ps-4">
                    <div className="songimg">
                        <img className='size-14 rounded-md cursor-pointer' src="/images/rockstar.png" alt="" />
                    </div>
                    <div className="songdetails ps-4">
                        <h3 className='text-white font-semibold text-sm cursor-pointer'>Tum Hoooo</h3>
                        <h3 className='text-neutral-400 text-xs cursor-pointer'>Mohit Chauhan, Suzanne D'Mello</h3>
                    </div>
                    <div className="hearticon ps-5 cursor-pointer">
                        <FaHeart style={{ color: '#1ed45f' }} />
                    </div>
                </div>

                <div className="musicplayer bg-black flex flex-col gap-y-2 w-6/12 justify-center items-center">
                    <div className="buttons flex gap-3">
                        <button className='px-1 cursor-pointer'><IoShuffle style={{ color: '#a7a7a7', fontSize: '22px' }} /></button>
                        <button className='px-1 cursor-pointer'><IoPlaySkipBack style={{ color: '#a7a7a7', fontSize: '22px' }} /></button>
                        <button className='px-1 cursor-pointer'><FaPlayCircle style={{ color: '#ffffff', fontSize: '34px' }} /></button>
                        <button className='px-1 cursor-pointer'><IoPlaySkipForward style={{ color: '#a7a7a7', fontSize: '22px' }} /></button>
                        <button className='px-1 cursor-pointer'><BiRepeat style={{ color: '#a7a7a7', fontSize: '22px' }} /></button>

                    </div>
                    <div className="musicbar flex items-center">
                        <div className="starttime">
                            <h3 className='text-neutral-400 font-semibold text-xs px-2'>5:15</h3>
                        </div>
                        <div className="bar cursor-pointer bg-white h-[0.25rem] w-[32rem] rounded-md">

                        </div>
                        <div className="endtime">
                            <h3 className='text-neutral-400 font-semibold text-xs px-2'>5:16</h3>
                        </div>

                    </div>
                </div>

                <div className="volumebuttons bg-black flex w-3/12 items-center ps-14 pe-4">
                    <button className='px-2 cursor-pointer'><CgPlayButtonR style={{ color: '#a7a7a7', fontSize: '16px' }} /></button>
                    <button className='px-2 cursor-pointer'><TbMicrophone2 style={{ color: '#a7a7a7', fontSize: '18px' }} /></button>
                    <button className='px-2 cursor-pointer'><HiOutlineQueueList style={{ color: '#a7a7a7', fontSize: '20px' }} /></button>
                    <button className='px-2 cursor-pointer'><MdDevices style={{ color: '#a7a7a7', fontSize: '18px' }} /></button>
                    <button className='px-2 cursor-pointer'><HiSpeakerWave style={{ color: '#a7a7a7', fontSize: '18px' }} /></button>
                    <div className="bar cursor-pointer bg-white h-[0.25rem] w-[32rem] rounded-md"></div>
                    <button className='px-2 cursor-pointer'><CgMiniPlayer style={{ color: '#a7a7a7', fontSize: '20px' }} /></button>
                    <button className='px-2 cursor-pointer'><FaExpandAlt style={{ color: '#a7a7a7', fontSize: '16px' }} /></button>
                </div>
            </footer>
        </div>
    )
}

export default Footer
